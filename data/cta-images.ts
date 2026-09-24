/**
 * Imágenes de fondo del CTA «Perfect sea views».
 *
 * El bloque se repite en casi todas las páginas con el mismo marcado, pero
 * cada sección del sitio usa su propia foto. Se comprobó en el sitio del que
 * se portó el marcado comparando página a página: hay cuatro, no una.
 *
 * Para Bahía Mar las cuatro son renders exteriores de las villas
 * (00. BAHÍA MAR_RENDERS_AGOSTO*, carpetas 01. RENDERS EXTERIORES),
 * recortados a la MISMA proporción que tenía cada hueco en el original para
 * que el `object-fit: cover` del fondo encuadre igual:
 *
 *   home    → bahiamar-cta-1  Villa A (Cosón)  R10_2   4:5    (0,800)
 *   villas  → bahiamar-cta-2  Villa A (Cosón)  R9_1    3:4    (0,750)
 *   contact → bahiamar-cta-3  Villa B (Helecho) R8     11:10  (1,100)
 *   villa   → bahiamar-cta-4  Villa D (Ámbar)  R5      10:11  (0,909)
 *
 * Origen y destino de cada una, en bahia-mar-personalizacion/inventario/cta.json.
 * Se convirtieron con ffmpeg (WebP calidad 82, ancho completo 2350 px) más
 * las variantes -p-500/800/1080/1600/2000, todas .webp.
 *
 * OJO con el encuadre: el hueco es MUY alto en móvil (`.cta-s` pasa a
 * aspect-ratio 2/6 por debajo de 992 px y el fondo mide el 140 % del alto
 * para el parallax), así que a 390 px sólo se ve el 29,5 % central del ancho
 * de la foto; a 1440, el 71,6 %. El sujeto tiene que estar en el tercio
 * central. Por eso bahiamar-cta-4 se re-encuadró (QA ronda 1,
 * LAYOUT-IMAGES-03): antes cogía todo el ancho del render R5, con la casa
 * pegada al borde derecho, y en móvil sólo quedaban árboles y jardinera.
 * Ahora es una ventana de 2000x2200 pegada a ese borde (pared de piedra,
 * pérgola y piscina en el centro), exportada a su ancho nativo sin escalar
 * hacia arriba: el completo mide 2000 px y no hay variante -p-2000
 * (scratchpad/fix-1-cta4-convert.mjs).
 */

export interface CtaImage {
  src: string;
  srcSet: string;
  /** Texto alternativo: el fondo lleva texto encima, pero la foto no es decorativa. */
  alt: string;
}

/**
 * Ancho completo (2350 px salvo que se indique otro) + los tamaños del srcset
 * que sean más estrechos que él, todos .webp. Así el srcset sólo lista
 * ficheros que existen: una foto exportada a 2000 px no tiene -p-2000.
 */
function responsive(name: string, alt: string, fullWidth = 2350): CtaImage {
  const variants = [500, 800, 1080, 1600, 2000].filter((w) => w < fullWidth);
  return {
    src: `/images/${name}.webp`,
    srcSet: [
      ...variants.map((w) => `/images/${name}-p-${w}.webp ${w}w`),
      `/images/${name}.webp ${fullWidth}w`,
    ].join(', '),
    alt,
  };
}

export const CTA_IMAGES = {
  home: responsive(
    'bahiamar-cta-1',
    'Sun loungers on a villa terrace beside an infinity pool, with palm trees and Samaná Bay beyond',
  ),
  villas: responsive(
    'bahiamar-cta-2',
    'Timber-clad villa opening onto its terrace and private pool, palm trees and the sea in the distance',
  ),
  contact: responsive(
    'bahiamar-cta-3',
    'Steps leading from a villa living room to a pool with planted islands, palm trees and the sea beyond',
  ),
  /** Las cinco fichas de villa comparten la misma. Ventana de 2000 px (ver cabecera). */
  villa: responsive(
    'bahiamar-cta-4',
    'Stone-and-wood villa with a pergola-shaded porch and private pool, the sea glimpsed through the trees',
    2000,
  ),
} satisfies Record<string, CtaImage>;
