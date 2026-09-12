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
 */

export interface CtaImage {
  src: string;
  srcSet: string;
  /** Texto alternativo: el fondo lleva texto encima, pero la foto no es decorativa. */
  alt: string;
}

/** Ancho completo (2350 px) + los cinco tamaños del srcset, todos .webp. */
function responsive(name: string, alt: string): CtaImage {
  return {
    src: `/images/${name}.webp`,
    srcSet: [
      `/images/${name}-p-500.webp 500w`,
      `/images/${name}-p-800.webp 800w`,
      `/images/${name}-p-1080.webp 1080w`,
      `/images/${name}-p-1600.webp 1600w`,
      `/images/${name}-p-2000.webp 2000w`,
      `/images/${name}.webp 2350w`,
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
  /** Las cinco fichas de villa comparten la misma. */
  villa: responsive(
    'bahiamar-cta-4',
    'Stone-and-wood villa with a pergola-shaded porch and private pool overlooking the sea through the palms',
  ),
} satisfies Record<string, CtaImage>;
