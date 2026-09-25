"""
Recorte de bahiamar-quote-1.webp (la foto fija de la sección 2 de la home,
components/home/PillarsMedia.tsx) -> bahiamar-quote-1-cutout.webp + variantes.

Pedido del cliente (25-09-2026): quitar el cielo y las palmeras de arriba a la
izquierda, dejar la casa, las palmeras de la derecha y el mar, con fondo
transparente para que asome el beige de la sección.

Dos técnicas, según la zona:

  1. A la IZQUIERDA de la cumbrera: corte duro por la línea del tejado. Ahí
     encima sólo hay palmeras (que también se quitan) y cielo, así que todo lo
     que queda por encima de la imposta se va. La línea se midió detectando el
     borde superior de la imposta columna a columna: no es recta (la
     perspectiva del render la curva), así que es una cuadrática que pasa por
     la cumbrera. Residuo máximo < 3 px.

  2. A la DERECHA: se quita sólo el CIELO, por color, y se conservan las
     palmeras con el borde suave de sus hojas. Por fila se estima el color del
     cielo (mediana de los píxeles claramente de cielo) y la opacidad sale de
     la distancia a ese color. Después se «descontamina» el borde: se resta la
     parte de cielo mezclada en cada píxel semitransparente, para que las hojas
     no dejen un halo azul sobre el beige.

  Se respetan: el cristal de la barandilla bajo el alero (deja ver el cielo a
  través y no debe quedar transparente) y todo lo que hay por debajo del
  horizonte (el mar).

Uso:  python scripts/recorte-quote-1.py
"""

from pathlib import Path

import numpy as np
from PIL import Image

RAIZ = Path(__file__).resolve().parent.parent
IMG = RAIZ / "public" / "images"
ORIGEN = IMG / "bahiamar-quote-1.webp"
DESTINO = "bahiamar-quote-1-cutout"
ANCHOS = [500, 800, 1080, 1600, 2000]

# Línea del tejado (y en función de x), medida sobre el original de 2350 px.
CUMBRERA_X, CUMBRERA_Y = 1076, 146.0
IZQ_C1, IZQ_C2 = -1.74345073e-01, 7.71871756e-06
DER_A, DER_B = 0.49902, -390.39
ESQUINA_X = 1964  # esquina derecha del alero

HORIZONTE_Y = 932  # por debajo: costa y mar, no se toca
# Bajo el alero derecho hay cielo, pero también la barandilla de cristal.
BAJO_ALERO_X = 1770  # a partir de aquí, cielo bajo el alero
CRISTAL = (1770, 1850, 740)  # x0, x1, y desde la que empieza la barandilla


def tejado(x: np.ndarray) -> np.ndarray:
    izq = CUMBRERA_Y + IZQ_C1 * (x - CUMBRERA_X) + IZQ_C2 * (x - CUMBRERA_X) ** 2
    der = DER_A * x + DER_B
    return np.where(x <= CUMBRERA_X, izq, der)


def main() -> None:
    im = np.asarray(Image.open(ORIGEN).convert("RGB")).astype(np.float32)
    h, w, _ = im.shape
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float32)
    linea = tejado(xs[0])[None, :]

    alfa = np.ones((h, w), np.float32)

    # 1. Izquierda: corte duro con 1 px de antialias sobre la línea.
    izq = xs <= CUMBRERA_X
    cobertura = np.clip(ys - linea + 0.5, 0, 1)  # 0 por encima, 1 por debajo
    alfa = np.where(izq, cobertura, alfa)

    # 2. Derecha: zona donde se busca cielo.
    sobre_tejado = (xs > CUMBRERA_X) & (xs <= ESQUINA_X) & (ys < linea + 0.5)
    fuera_casa = (xs > ESQUINA_X) & (ys < HORIZONTE_Y)
    bajo_alero = (xs > BAJO_ALERO_X) & (xs <= ESQUINA_X) & (ys >= linea) & (ys < HORIZONTE_Y)
    cristal = (xs >= CRISTAL[0]) & (xs < CRISTAL[1]) & (ys >= CRISTAL[2])
    # Borde izquierdo: bajo el alero asoma un poco de cielo entre los árboles.
    bajo_alero_izq = (xs < 200) & (ys >= linea) & (ys < 620)
    zona = sobre_tejado | fuera_casa | (bajo_alero & ~cristal) | bajo_alero_izq

    r, g, b = im[..., 0], im[..., 1], im[..., 2]
    lum = im.mean(axis=2)
    # Cielo azulado arriba, casi blanco cerca del horizonte (229,229,231): si
    # sólo se reconociera el azulado, esas filas heredaban un color de
    # referencia más azul y quedaba un velo del 15–30 % sobre el beige.
    croma = im.max(axis=2) - im.min(axis=2)
    azulado = (b - r > 12) & (lum > 150) & (np.abs(g - (r + b) / 2) < 25)
    blanquecino = (lum > 205) & (croma < 18)
    cielo_claro = zona & (azulado | blanquecino)

    # Color del cielo: degradado vertical Y horizontal (en la esquina de arriba
    # a la derecha el azul se oscurece hacia el borde). Por fila se ajusta una
    # recta color = a + b·x sobre los píxeles de cielo claro; con un color
    # único por fila quedaban restos moteados en esa esquina.
    xcol = np.arange(w, dtype=np.float32)
    coef = np.full((h, 2, 3), np.nan, np.float32)
    for y in range(h):
        m = cielo_claro[y]
        if m.sum() >= 40:
            X = np.stack([np.ones(m.sum()), xcol[m]], 1)
            coef[y] = np.linalg.lstsq(X, im[y, m], rcond=None)[0]
    filas = np.where(~np.isnan(coef[:, 0, 0]))[0]
    for i in range(2):
        for c in range(3):
            coef[:, i, c] = np.interp(np.arange(h), filas, coef[filas, i, c])
    cielo = coef[:, None, 0, :] + coef[:, None, 1, :] * xcol[None, :, None]
    dist = np.linalg.norm(im - cielo, axis=2)
    T0, T1 = 14.0, 60.0  # por debajo de T0 es cielo; por encima de T1, hoja
    a_color = np.clip((dist - T0) / (T1 - T0), 0, 1)

    # Encima del tejado derecho también cuenta el antialias de la línea.
    borde_der = np.clip(linea - ys + 0.5, 0, 1)
    a_der = np.where(sobre_tejado, np.maximum(a_color, 1 - borde_der), a_color)
    # Motas: por debajo del 15 % en el cielo es ruido de compresión, no hoja.
    a_der = np.where(a_der < 0.15, 0, a_der)
    alfa = np.where(zona, a_der, alfa)

    # Barandilla de cristal: lo que se ve a través es cielo. Sin tocarla queda
    # un recuadro blanco macizo sobre el beige; quitándola del todo, desaparece
    # el cristal. Se deja como cristal: el cielo pasa a un 30 % de opacidad.
    en_cristal = cristal & (ys < HORIZONTE_Y) & (xs <= ESQUINA_X)
    alfa = np.where(en_cristal, np.maximum(a_color, 0.3), alfa)
    zona = zona | en_cristal

    # Descontaminar: C = a·F + (1-a)·S  ->  F = (C - (1-a)·S) / a
    semi = zona & (alfa > 0.02) & (alfa < 0.98)
    a3 = np.maximum(alfa, 0.02)[..., None]
    limpio = np.clip((im - (1 - a3) * cielo) / a3, 0, 255)
    rgb = np.where(semi[..., None], limpio, im)

    rgba = np.dstack([rgb, alfa * 255]).round().astype(np.uint8)
    out = Image.fromarray(rgba, "RGBA")

    out.save(IMG / f"{DESTINO}.webp", "WEBP", quality=86, method=6, alpha_quality=90)
    for ancho in ANCHOS:
        alto = round(h * ancho / w)
        out.resize((ancho, alto), Image.LANCZOS).save(
            IMG / f"{DESTINO}-p-{ancho}.webp", "WEBP", quality=86, method=6, alpha_quality=90
        )
    print("transparente:", f"{(alfa < 0.5).mean():.1%}", "| archivos:", DESTINO, ANCHOS)


if __name__ == "__main__":
    main()
