'use client';

/**
 * Scroll suave dentro de paneles — port de `initLocalLenis()`.
 *
 * Además del scroll global hay contenedores que scrollean por su cuenta,
 * marcados con `data-lenis-scroll`. Están en las 29 páginas:
 *
 *   .lot-s_info_t   el panel de la derecha de la ficha de apartamento,
 *                   donde viven las pestañas INFO / BENEFITS
 *   .modal_cta_c    el cuerpo del modal «Book a call»
 *
 * Sin esto el panel no scrollea y su contenido de más abajo —las propias
 * pestañas— queda inalcanzable. El marcado sí traía el atributo; lo que
 * faltaba era instanciar Lenis sobre él.
 *
 * Cada instancia necesita su propio `raf`, enganchado al ticker de GSAP
 * igual que el global, para que todo avance con el mismo reloj.
 */

import Lenis from 'lenis';
import { gsap } from './gsap';
import { LENIS_OPTIONS } from './constants';

export function initLocalScroll(root: ParentNode = document): () => void {
  const containers = [...root.querySelectorAll<HTMLElement>('[data-lenis-scroll]')];
  if (!containers.length) return () => {};

  const instances: Array<{ lenis: Lenis; ticker: (time: number) => void }> = [];

  for (const wrapper of containers) {
    const lenis = new Lenis({ wrapper, ...LENIS_OPTIONS.local });

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    instances.push({ lenis, ticker });
  }

  return () => {
    for (const { lenis, ticker } of instances) {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    }
  };
}
