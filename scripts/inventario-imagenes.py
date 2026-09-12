# -*- coding: utf-8 -*-
"""
Funde los inventarios parciales de bahia-mar-personalizacion/inventario/*.json
(uno por sección o corrección, formato {destino, origen, uso}) con el
inventario de villas (formato {villa, rol, origen, destino}) en UN solo
INVENTARIO-IMAGENES.json, y escribe INVENTARIO-IMAGENES.md en castellano
agrupado por página/sección: para cada imagen o vídeo, dónde está en la web,
de qué fichero del material del cliente sale y para qué se usa.

    python scripts/inventario-imagenes.py

Idempotente: se puede volver a lanzar tras añadir o corregir un JSON parcial.
"""
import glob
import io
import json
import os
import re
from collections import OrderedDict

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'bahia-mar-personalizacion')
PARCIALES = os.path.join(RAIZ, 'inventario')
SALIDA_JSON = os.path.join(RAIZ, 'INVENTARIO-IMAGENES.json')
SALIDA_MD = os.path.join(RAIZ, 'INVENTARIO-IMAGENES.md')

NOMBRES_VILLA = {'coson': 'Villa Cosón', 'helecho': 'Villa Helecho', 'remanso': 'Villa Remanso',
                 'ambar': 'Villa Ámbar', 'carolina': 'Villa Carolina'}
ROLES = {'hero': 'imagen principal (tarjeta y cabecera de la ficha)', 'plan-1': 'plano, nivel 1',
         'plan-2': 'plano, nivel 2'}


def leer(ruta):
    with io.open(ruta, encoding='utf-8') as f:
        return json.load(f)


def normalizar(e, fuente):
    """Devuelve {destino, origen, uso, fuente} a partir de cualquiera de los dos formatos."""
    if 'villa' in e and 'rol' in e:
        villa = NOMBRES_VILLA.get(e['villa'], e['villa'])
        rol = e['rol']
        if rol in ROLES:
            uso = u'%s › %s' % (villa, ROLES[rol])
        elif rol.startswith('g'):
            uso = u'%s › galería exterior %s (ficha /villas/%s)' % (villa, rol[1:], e['villa'])
        elif rol.startswith('i'):
            uso = u'%s › galería interior %s (ficha /villas/%s)' % (villa, rol[1:], e['villa'])
        else:
            uso = u'%s › %s' % (villa, rol)
        return {'destino': e['destino'], 'origen': e.get('origen', ''), 'uso': uso, 'fuente': fuente}
    return {'destino': e['destino'], 'origen': e.get('origen', ''), 'uso': e.get('uso', ''), 'fuente': fuente}


# Elementos que no salen de ningún fichero del cliente y que ningún agente registró.
GENERADOS = [
    {'destino': '/videos/palm-fronds_01.webm', 'origen': u'(generado con Magnific: vídeo de follaje tropical con alfa; sin fichero de origen)',
     'uso': u'Vegetación decorativa de esquina: home (Concept, AmenitiesIntro, Architecture, Developer). Póster /images/palm-fronds_01.webp.'},
    {'destino': '/videos/palm-fronds_02.webm', 'origen': u'(generado con Magnific; sin fichero de origen)',
     'uso': u'Vegetación decorativa: home (Architecture, abajo-izquierda) y listado /villas (arriba-derecha). Póster /images/palm-fronds_02.webp.'},
    {'destino': '/videos/palm-fronds_03.webm', 'origen': u'(generado con Magnific; sin fichero de origen)',
     'uso': u'Vegetación decorativa: home (Concept, recorrido; Space to live in). Póster /images/palm-fronds_03.webp.'},
    {'destino': '/images/bahiamar-isotype.png', 'origen': u'BAHIA MAR/LOGOS (isotipo, ola)',
     'uso': u'Isotipo en header, preloader, sello circular, menú, modal y favicons (se pinta con máscara CSS).'},
    {'destino': '/images/bahiamar-logo.png', 'origen': u'BAHIA MAR/LOGOS (logo completo)',
     'uso': u'Referencia de marca; el sitio usa el isotipo y el nombre tipografiado.'},
    {'destino': '/images/bahiamar-hero-day.webp', 'origen': u'00. BAHÍA MAR_RENDERS_AGOSTO/00. RENDERS VILLA A - BAHÍA MAR/01. RENDERS EXTERIORES/R1_1.png',
     'uso': u'Home › Hero, versión de día (misma toma que la tarjeta de Villa Cosón).'},
    {'destino': '/images/bahiamar-hero-night.webp', 'origen': u'Derivada de R1_1.png con Magnific (relight nocturno + escala 2x); sin fichero del cliente',
     'uso': u'Home › Hero, versión de noche (efecto día/noche del titular).'},
    {'destino': '/images/bahiamar-aerial.webp', 'origen': u'BAHIA MAR/BOCHURE PAGINAS_ (aérea de la bahía del brochure)',
     'uso': u'Home › Location: póster/respaldo del vídeo aéreo.'},
]


def seccion_de(uso, destino):
    u = uso.lower()
    d = destino.lower()
    if 'bahiamar-cta' in d:
        return u'Bloque CTA «Sea views» (todas las páginas)'
    for slug, nombre in NOMBRES_VILLA.items():
        if u.startswith(nombre.lower()) or ('villa-%s-' % slug) in d:
            return u'Fichas de villa › %s' % nombre
    if 'favicon' in d or 'open-graph' in d or 'icons/' in d:
        return u'Marca: favicons y OpenGraph'
    if d.startswith('/videos/palm') or 'isotype' in d or 'bahiamar-logo' in d:
        return u'Identidad y vegetación decorativa'
    if 'community' in d or 'eco' in d or 'quote' in d or 'bahiamar-location-1' in d or 'pillar' in u:
        return u'Home › Three reasons (pilares)'
    if 'contact' in u or 'contacto' in u or 'entrance' in d or 'clubhouse' in d:
        return u'Página de contacto'
    if '/villas' in u and 'home' not in u:
        return u'Listado /villas'
    if 'hero' in d:
        return u'Home › Hero'
    if 'aerial' in d or 'location' in u:
        return u'Home › Location'
    if 'amenit' in u or 'amenities' in d:
        return u'Home › Amenities'
    if 'space' in d:
        return u'Home › The space to live in'
    if 'architecture' in d or 'developer' in d:
        return u'Home › Architecture y Developer'
    return u'Otros'


def main():
    entradas = OrderedDict()

    def poner(e):
        # Gana la entrada con más información (uso más largo), pero el origen
        # nunca se pierde si la nueva viene vacía.
        prev = entradas.get(e['destino'])
        if prev is None or len(e['uso']) >= len(prev['uso']):
            if prev is not None and not e['origen']:
                e['origen'] = prev['origen']
            entradas[e['destino']] = e

    for e in leer(SALIDA_JSON) if os.path.exists(SALIDA_JSON) else []:
        poner(normalizar(e, 'villas'))
    for ruta in sorted(glob.glob(os.path.join(PARCIALES, '*.json'))):
        datos = leer(ruta)
        items = datos if isinstance(datos, list) else datos.get('imagesAdded', [])
        for e in items:
            if isinstance(e, dict) and e.get('destino'):
                poner(normalizar(e, os.path.basename(ruta)))
    for e in GENERADOS:
        if e['destino'] not in entradas:
            poner(dict(e, fuente='scripts/inventario-imagenes.py'))

    lista = list(entradas.values())
    for e in lista:
        e['seccion'] = seccion_de(e['uso'], e['destino'])
    lista.sort(key=lambda e: (e['seccion'], e['destino']))

    with io.open(SALIDA_JSON, 'w', encoding='utf-8') as f:
        json.dump([{k: e[k] for k in ('seccion', 'destino', 'origen', 'uso')} for e in lista], f, ensure_ascii=False, indent=2)
        f.write(u'\n')

    lineas = [u'# Inventario de imágenes y vídeos — Bahía Mar', u'',
              u'Qué imagen va en cada sitio de la web, de qué fichero del material del',
              u'cliente (`bahia-mar-personalizacion/`) sale y para qué se usa. Generado por',
              u'`scripts/inventario-imagenes.py` a partir de `inventario/*.json`; no editar a mano.', u'',
              u'Todas las imágenes están convertidas a WebP (calidad 82) con variantes',
              u'`-p-500/800/1080/1600/2000` para el `srcset`. Los renders sin recorte',
              u'conservan su proporción; los que van en tarjetas o huecos concretos se',
              u'recortan a la proporción del hueco original.', u'',
              u'Total: %d elementos.' % len(lista), u'']
    actual = None
    for e in lista:
        if e['seccion'] != actual:
            actual = e['seccion']
            lineas += [u'', u'## %s' % actual, u'', u'| En la web | Origen (material del cliente) | Uso |', u'|---|---|---|']
        origen = e['origen'].replace('|', '\\|')
        uso = re.sub(r'\s+', ' ', e['uso']).replace('|', '\\|')
        lineas.append(u'| `%s` | %s | %s |' % (e['destino'], origen, uso))
    with io.open(SALIDA_MD, 'w', encoding='utf-8') as f:
        f.write(u'\n'.join(lineas) + u'\n')

    print(u'%d elementos → %s y .md' % (len(lista), os.path.relpath(SALIDA_JSON)))
    secciones = OrderedDict()
    for e in lista:
        secciones[e['seccion']] = secciones.get(e['seccion'], 0) + 1
    for s, n in secciones.items():
        print(u'  %-45s %d' % (s, n))


if __name__ == '__main__':
    main()
