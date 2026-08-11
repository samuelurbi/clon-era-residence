/**
 * Constantes de animación, tomadas literalmente del JS original del sitio
 * (referencia-web-original/slater-custom.js, cabecera del fichero).
 *
 * Son la unidad de medida de todo el movimiento del sitio: tocar `DUR.m`
 * recalibra decenas de transiciones a la vez.
 */

/** Duraciones en segundos. */
export const DUR = {
  s: 0.4,
  m: 0.8,
  l: 1.2,
} as const;

/** Desfase entre elementos de una misma secuencia. */
export const STAGGER = 0.1;

/** Retardo antes de que arranque una entrada por scroll. */
export const DELAY_REVEAL = 0.3;

/**
 * Punto de corte a móvil/tablet. Coincide con el breakpoint de Webflow
 * (`@media screen and (max-width: 991px)`), donde además se redefinen
 * 97 tokens — incluido `--_special-units---scale-ratio`, que reescala
 * toda la tipografía de golpe.
 */
export const BREAKPOINT = 992;

/** Curvas propias del proyecto, en formato CustomEase. */
export const EASES = {
  InOut: '0.75,0,0.25,1',
  Out: '0.25,1,0.5,1',
  In: '0.5,0,0.75,0',
  Ease: '0.25,0.1,0.25,1',
  Write: '0.333,0,0.667,1',
  diveIn: '0.6,0,0,1',
  horScroll: '0.25,0,0.75,1',
} as const;

export type EaseName = keyof typeof EASES;

/** Easing exponencial de Lenis — https://www.desmos.com/calculator/brs54l4xou */
export const LENIS_EASING = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

/** Ajustes de Lenis global y de contenedores con [data-lenis-scroll]. */
export const LENIS_OPTIONS = {
  global: {
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 2,
    easing: LENIS_EASING,
    infinite: false,
  },
  local: {
    duration: 0.6,
    smoothWheel: true,
    touchMultiplier: 2,
    easing: LENIS_EASING,
    infinite: false,
  },
} as const;
