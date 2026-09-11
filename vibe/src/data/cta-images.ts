/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Imágenes de fondo del CTA «Perfect sea views».
 *
 * El bloque se repite en 28 de las 29 páginas con el mismo marcado, pero
 * cada sección del sitio usa su propia foto. Se comprobó comparando el
 * original página a página: hay cuatro, no una.
 */

export interface CtaImage {
  src: string;
  srcSet: string;
}

/** Construye el srcset con las variantes que exporta Webflow. */
function responsive(name: string): CtaImage {
  return {
    src: `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}.webp`,
    srcSet: [
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-500.png 500w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-800.png 800w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-1080.png 1080w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-1600.png 1600w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}.webp 1920w`,
    ].join(', '),
  };
}

export const CTA_IMAGES = {
  home: responsive('img_cta_1920'),
  apartments: responsive('era-residence-garden-2'),
  contact: responsive('img_cam_09'),
  /** Las 25 fichas comparten la misma. */
  apartment: responsive('era-residence-ground-floor-2'),
} satisfies Record<string, CtaImage>;
