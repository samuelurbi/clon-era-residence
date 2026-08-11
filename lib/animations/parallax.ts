'use client';

/**
 * Parallax al scroll — port de `initAllParallax()` del original
 * (referencia-web-original/slater-custom.js, líneas 1177-1283).
 *
 * Cinco variantes, todas declaradas en el marcado con `data-parallax`:
 *
 *   img      la imagen recorre el encuadre de arriba abajo
 *   img-out  sólo al salir el bloque por arriba
 *   img-in   sólo mientras el bloque entra
 *   ctn-down un contenedor que baja más despacio que el scroll
 *   ctn-up   ídem, subiendo
 *
 * Las de imagen necesitan un ancestro `data-parallax="w"` que hace de
 * encuadre; sin él no hay nada que recortar y se omiten.
 *
 * `data-mob="off"` / `data-desk="off"` en el encuadre desactivan el efecto
 * en ese lado del breakpoint.
 */

import { gsap, ScrollTrigger } from './gsap';
import { BREAKPOINT } from './constants';

/** `translateZ: 10` fuerza capa propia en GPU: evita el parpadeo al hacer scrub. */
const LAYER = { translateZ: 10 };

type Variant = {
  /** Valor de data-parallax. */
  key: string;
  /** Si necesita el encuadre `data-parallax="w"`. */
  needsWrapper: boolean;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  scroll: (trigger: Element) => ScrollTrigger.Vars;
};

const VARIANTS: Variant[] = [
  {
    key: 'img',
    needsWrapper: true,
    from: { yPercent: -15, ...LAYER },
    to: { yPercent: 15, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'top bottom', scrub: 0.5 }),
  },
  {
    key: 'img-out',
    needsWrapper: true,
    from: { yPercent: 0, ...LAYER },
    to: { yPercent: 20, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'bottom bottom', end: 'bottom top', scrub: 0.5 }),
  },
  {
    key: 'img-in',
    needsWrapper: true,
    from: { yPercent: -20, ...LAYER },
    to: { yPercent: 0, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'top bottom', end: 'bottom bottom', scrub: true }),
  },
  {
    key: 'ctn-down',
    needsWrapper: false,
    from: { yPercent: -10 },
    to: { yPercent: 10 },
    scroll: (trigger) => ({ trigger, start: 'top 125%', end: 'bottom -25%', scrub: 0.5 }),
  },
  {
    key: 'ctn-up',
    needsWrapper: false,
    from: { yPercent: 10 },
    to: { yPercent: -10 },
    scroll: (trigger) => ({ trigger, start: 'top 125%', end: 'bottom -25%', scrub: 0.5 }),
  },
];

/** ¿Está desactivado para el ancho actual? */
function disabledHere(el: HTMLElement): boolean {
  const mobile = window.innerWidth < BREAKPOINT;
  return mobile ? el.dataset.mob === 'off' : el.dataset.desk === 'off';
}

/**
 * Registra los parallax dentro de `root`. Devuelve la limpieza.
 */
export function initParallax(root: ParentNode = document): () => void {
  const tweens: gsap.core.Tween[] = [];

  for (const variant of VARIANTS) {
    for (const el of root.querySelectorAll<HTMLElement>(`[data-parallax="${variant.key}"]`)) {
      // El encuadre manda sobre el desactivado; sin encuadre, el propio nodo.
      const wrapper = variant.needsWrapper
        ? (el.closest('[data-parallax="w"]') as HTMLElement | null)
        : el;
      if (!wrapper) continue;
      if (disabledHere(wrapper)) continue;

      tweens.push(
        gsap.fromTo(el, variant.from, {
          ...variant.to,
          ease: 'none',
          scrollTrigger: variant.scroll(wrapper),
        }),
      );
    }
  }

  return () => {
    for (const t of tweens) {
      t.scrollTrigger?.kill();
      t.kill();
    }
  };
}
