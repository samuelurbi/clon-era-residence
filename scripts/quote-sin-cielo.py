# -*- coding: utf-8 -*-
"""
Render de la sección de cita (PillarsMedia) sin cielo, como el de ERA.

ERA servía ahí `img_cam_05_alpha.webp`: el render con el cielo transparente,
de modo que el edificio se posa sobre el crema de la sección y no hay corte
entre fondo e imagen. Aquí se hace lo mismo con el render de Villa Cosón:

  1. Recorte 4:3 centrado del PNG del estudio, a 2350 px.
  2. Cielo = píxeles claros, poco saturados y azulados (o casi blancos)
     CONECTADOS con el borde superior. El mar (turquesa, saturado), los
     cristales (encerrados por la carpintería) y las cortinas no lo tocan.
  3. Las palmeras de arriba a la izquierda salían cortadas por el borde
     del render (y con huecos de cielo entre las frondas): se quitan con un
     corte en ángulo que sigue la línea del tejado —de (0, 366) al vértice
     (1066, 165) a 2350 px, unos 13 px por dentro de la fascia para que no
     quede ningún resto—. Las palmeras de la derecha se conservan; sus
     huecos de cielo (componentes azules pequeñas de la mitad superior) se
     vacían también.
  4. El cielo se encoge 1 px para comerse el halo azul de las frondas y el
     alfa se suaviza 1,2 px. WebP con alfa + variantes -p-500/800/1080/1600/2000.

    python scripts/quote-sin-cielo.py
"""
import os

import numpy as np
from PIL import Image, ImageDraw
from scipy import ndimage

Image.MAX_IMAGE_PIXELS = None

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
SRC = os.path.join(RAIZ, 'bahia-mar-personalizacion',
                   '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002', '00. BAHÍA MAR_RENDERS_AGOSTO',
                   '00. RENDERS VILLA A - BAHÍA MAR', '01. RENDERS EXTERIORES', 'R13.png')
DST = os.path.join(RAIZ, 'public', 'images', 'bahiamar-quote-1')
ANCHO = 2350


def main():
    im = Image.open(SRC).convert('RGB')
    w, h = im.size
    cw = round(h * 4 / 3)
    im = im.crop(((w - cw) // 2, 0, (w - cw) // 2 + cw, h)).resize((ANCHO, round(ANCHO * 3 / 4)), Image.LANCZOS)
    a = np.asarray(im)
    hsv = np.asarray(im.convert('HSV')).astype(np.float32) / 255.0   # PIL: sin skimage/OpenBLAS
    hue, sat, val = hsv[..., 0], hsv[..., 1], hsv[..., 2]
    azul = (hue > 0.5) & (hue < 0.7) & (sat < 0.5) & (val > 0.55)
    bruma = (sat < 0.18) & (val > 0.82)
    cand = azul | bruma
    etiquetas, n = ndimage.label(cand)
    arriba = np.unique(etiquetas[0, :])
    cielo = np.isin(etiquetas, arriba[arriba != 0])
    # sólo cuenta como cielo lo que está por encima del horizonte visible:
    # nada de lo que toque el borde inferior
    abajo = np.unique(etiquetas[-1, :])
    cielo &= ~np.isin(etiquetas, abajo[abajo != 0])
    # huecos de cielo entre frondas: componentes azules pequeñas de la mitad
    # superior que no tocan el borde (no son ni mar ni cristal: esos son grandes)
    tam = ndimage.sum(cand, etiquetas, range(1, n + 1))
    cy = ndimage.center_of_mass(cand, etiquetas, range(1, n + 1))
    huecos = [k + 1 for k in range(n) if tam[k] < 3000 and cy[k][0] < a.shape[0] * 0.55]
    cielo |= np.isin(etiquetas, huecos)
    # corte en ángulo por encima del tejado: fuera las palmeras cortadas
    W, H = im.size
    poli = Image.new('L', (W, H), 0)
    ImageDraw.Draw(poli).polygon([(0, 0), (0, round(366 * W / 2350)), (round(1066 * W / 2350), round(165 * W / 2350)), (round(1066 * W / 2350), 0)], fill=255)
    cielo |= np.asarray(poli) > 0
    cielo = ndimage.binary_dilation(cielo, iterations=1)   # come el halo azul de los bordes
    alfa = ndimage.gaussian_filter(np.where(cielo, 0.0, 255.0), 1.2)
    rgba = np.dstack([a, np.clip(alfa, 0, 255).astype(np.uint8)])
    out = Image.fromarray(rgba, 'RGBA')
    out.save(DST + '.webp', 'WEBP', quality=82, method=6)
    for wv in (500, 800, 1080, 1600, 2000):
        out.resize((wv, round(out.height * wv / out.width)), Image.LANCZOS).save('%s-p-%d.webp' % (DST, wv), 'WEBP', quality=82, method=6)
    print('%s.webp %dx%d, cielo %.0f%% de la imagen' % (os.path.basename(DST), out.width, out.height, cielo.mean() * 100))


if __name__ == '__main__':
    main()
