# -*- coding: utf-8 -*-
"""
ZIP de los assets que la web de Bahía Mar necesita en el host externo.

Vibe no aloja binarios: las rutas de `public/` se sirven desde un host
externo por URL absoluta (ver scripts/vibe-preparar.mjs). Este ZIP lleva
SÓLO lo que el código referencia hoy —directamente o por plantilla
(`bahiamar-hero-${slug}`, `villa-<slug>-g1`, variantes -p-N…)—, no los
restos de ERA que siguen en public/ sin uso (buganvillas, era-residence-*,
img_cta, PDFs de los apartamentos…).

Se escribe con `zipfile` de Python, que pone `/` en las entradas: el
`Compress-Archive` de PowerShell escribe `\\` y en el LiteSpeed de
Hostinger eso creó 365 ficheros llamados `images\\foo.webp` en vez de
carpetas (de ahí el `%5C` de la primera subida de ERA).

    python scripts/vibe-assets-zip.py

Salida: bahia-mar-personalizacion/bahiamar-assets.zip (fuera de git).
Al descomprimirlo en el host queda images/, videos/, documents/, icons/ y
el .htaccess colgando de la carpeta elegida, que es lo que ASSET_BASE debe
apuntar.
"""
import os
import re
import zipfile

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
PUB = os.path.join(RAIZ, 'public')
DST = os.path.join(RAIZ, 'bahia-mar-personalizacion', 'bahiamar-assets.zip')

REGLAS = {
    'images': re.compile(r'^(bahiamar-|villa-|palm-fronds_|img_clouds_|landscape\.svg$|open-graph\.webp$|placeholder\.[0-9a-f]+\.svg$|preloader_arch-l\.svg$)'),
    'videos': re.compile(r'^(bahiamar-|palm-fronds_)'),
    'documents': re.compile(r'^villa-.*\.pdf$'),
    'icons': re.compile(r'.'),
}

# LiteSpeed (Hostinger) sirve los .webm como text/plain: sin este .htaccess
# las palmeras (sólo .webm) no cargan. Va en la raíz de la carpeta de assets.
HTACCESS = os.path.join(RAIZ, 'vibe', 'assets.htaccess')


def main():
    total = 0
    cuenta = {}
    with zipfile.ZipFile(DST, 'w', zipfile.ZIP_STORED) as z:   # webp/mp4 ya van comprimidos
        z.write(HTACCESS, '.htaccess')
        for carpeta, regla in REGLAS.items():
            for nombre in sorted(os.listdir(os.path.join(PUB, carpeta))):
                if not regla.search(nombre):
                    continue
                ruta = os.path.join(PUB, carpeta, nombre)
                z.write(ruta, '%s/%s' % (carpeta, nombre))
                total += os.path.getsize(ruta)
                cuenta[carpeta] = cuenta.get(carpeta, 0) + 1
    print('%s  (%.0f MB)' % (os.path.relpath(DST, RAIZ), total / 1e6))
    for c, n in cuenta.items():
        print('  %-10s %d ficheros' % (c, n))


if __name__ == '__main__':
    main()
