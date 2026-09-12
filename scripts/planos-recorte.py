# -*- coding: utf-8 -*-
"""
Planos de las villas como recortes sobre transparente, al estilo de ERA.

Los PNG comerciales del cliente son LÁMINAS completas (15000 px: marco,
cajetín de LANDMASS, columna de texto, rótulo A-01…) con el dibujo en el
centro sobre papel blanco plano. Hasta ahora la web servía la lámina
entera escalada. Aquí:

  1. Se localiza el dibujo: a baja resolución se marca lo que no es papel,
     se quita el marco (banda del borde) y lo fino (texto, líneas sueltas)
     con una apertura morfológica, y se toma la componente más grande —el
     plano, con sus forjados grises y la piscina— más un margen.
  2. Se recorta esa caja a alta resolución y se vuelve transparente SOLO
     el blanco exterior (la región casi blanca conectada con el borde del
     recorte): el blanco de dentro —muebles, paredes, patios— se conserva.
  3. WebP con alfa a 2350 px de ancho más variantes -p-500/800/1080/1600/2000.

    python scripts/planos-recorte.py

Fuentes: entradas villa-<slug>-plan-N de INVENTARIO-IMAGENES.json. Idempotente.
"""
import io
import json
import os
import re

import numpy as np
from PIL import Image
from scipy import ndimage

Image.MAX_IMAGE_PIXELS = None

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
MATERIAL = os.path.join(RAIZ, 'bahia-mar-personalizacion')
PUB = os.path.join(RAIZ, 'public', 'images')
ANCHO_DETECCION = 1500    # para localizar el dibujo
ANCHO_TRABAJO = 7000      # para recortar y calcular el alfa (la web sirve 2350)
PAPEL = 240               # ≥ en todos los canales = papel
BORDE = 0.03              # banda del marco que se ignora, fracción del ancho
MARGEN = 0.025            # margen alrededor del dibujo, fracción del ancho de la lámina
PLUMA = 1.0               # suavizado del borde del alfa, px de trabajo


def fuentes():
    inv = json.load(io.open(os.path.join(MATERIAL, 'INVENTARIO-IMAGENES.json'), encoding='utf-8'))
    out = {}
    for e in inv:
        m = re.match(r'/images/(villa-[a-z]+-plan-\d)\.webp$', e['destino'])
        if m and 'PLANOS' in e['origen']:
            out[m.group(1)] = os.path.join(MATERIAL, e['origen'])
    return out


def caja_del_dibujo(im):
    """Caja (x0, y0, x1, y1) en fracciones de la lámina donde está el plano."""
    esc = ANCHO_DETECCION / im.width
    g = np.asarray(im.convert('L').resize((ANCHO_DETECCION, round(im.height * esc)), Image.LANCZOS))
    h, w = g.shape
    contenido = g < PAPEL
    b = int(w * BORDE)
    contenido[:b, :] = contenido[-b:, :] = False
    contenido[:, :b] = contenido[:, -b:] = False
    # apertura: fuera texto y líneas finas; quedan forjados, muros y piscina
    grueso = ndimage.binary_opening(contenido, structure=np.ones((7, 7)))
    etiquetas, n = ndimage.label(grueso)
    if n == 0:
        raise RuntimeError('no se encontró el dibujo')
    tam = ndimage.sum(grueso, etiquetas, range(1, n + 1))
    mayor = int(np.argmax(tam)) + 1
    # el dibujo puede tener piezas separadas (pérgolas, escaleras): se anexan
    # las componentes grandes cercanas a la mayor
    ys, xs = np.where(etiquetas == mayor)
    x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
    cerca = int(w * 0.04)
    for k in range(1, n + 1):
        if k == mayor or tam[k - 1] < tam[mayor - 1] * 0.01:
            continue
        cy, cx = np.where(etiquetas == k)
        if cx.min() > x1 + cerca or cx.max() < x0 - cerca or cy.min() > y1 + cerca or cy.max() < y0 - cerca:
            continue
        x0, x1, y0, y1 = min(x0, cx.min()), max(x1, cx.max()), min(y0, cy.min()), max(y1, cy.max())
    m = int(w * MARGEN)
    return (max(0, x0 - m) / w, max(0, y0 - m) / h, min(w, x1 + m) / w, min(h, y1 + m) / h)


def recortar(nombre, ruta):
    im = Image.open(ruta).convert('RGB')
    fx0, fy0, fx1, fy1 = caja_del_dibujo(im)
    esc = ANCHO_TRABAJO / im.width
    im = im.resize((ANCHO_TRABAJO, round(im.height * esc)), Image.LANCZOS)
    W, H = im.size
    im = im.crop((int(fx0 * W), int(fy0 * H), int(fx1 * W), int(fy1 * H)))
    a = np.asarray(im)
    papel = (a >= PAPEL).all(axis=2)
    etiquetas, n = ndimage.label(papel)
    borde = np.unique(np.concatenate([etiquetas[0, :], etiquetas[-1, :], etiquetas[:, 0], etiquetas[:, -1]]))
    fondo = np.isin(etiquetas, borde[borde != 0])
    alfa = ndimage.gaussian_filter(np.where(fondo, 0.0, 255.0), PLUMA)
    alfa[ndimage.binary_erosion(fondo, iterations=2)] = 0.0
    rgba = np.dstack([a, np.clip(alfa, 0, 255).astype(np.uint8)])
    out = Image.fromarray(rgba, 'RGBA')
    if out.width > 2350:
        out = out.resize((2350, round(out.height * 2350 / out.width)), Image.LANCZOS)
    out.save(os.path.join(PUB, nombre + '.webp'), 'WEBP', quality=82, method=6)
    for w in (500, 800, 1080, 1600, 2000):
        if w >= out.width:
            continue
        out.resize((w, round(out.height * w / out.width)), Image.LANCZOS).save(
            os.path.join(PUB, '%s-p-%d.webp' % (nombre, w)), 'WEBP', quality=82, method=6)
    print('%-24s caja %.2f,%.2f-%.2f,%.2f  %dx%d  transparente %.0f%%' % (
        nombre, fx0, fy0, fx1, fy1, out.width, out.height, fondo.mean() * 100))


if __name__ == '__main__':
    for nombre, ruta in sorted(fuentes().items()):
        recortar(nombre, ruta)
