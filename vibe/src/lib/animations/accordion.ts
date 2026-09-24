/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Acordeón y tips en móvil — port de `initAccordion()` y `initModalTip()`.
 *
 * Los dos van juntos porque comparten idea: contenido que se despliega bajo
 * demanda. El acordeón lo hace en línea; el tip, en un panel que sube desde
 * abajo y sólo existe en móvil (en escritorio ese contenido se muestra como
 * etiqueta flotante junto al cursor, ver `floatingTips` en ui.ts).
 */

import { gsap, ScrollTrigger } from './gsap';
import { DUR, BREAKPOINT } from './constants';
import { lockScroll, unlockScroll } from './scroll-lock';
import { animateTextP, animateCtn } from './reveal';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/* ------------------------------------------------------------------
 *  Acordeón
 * ------------------------------------------------------------------ */

/**
 * Sólo una tarjeta abierta a la vez: abrir una cierra la anterior.
 *
 * El original guardaba la función de cierre colgada del propio nodo
 * (`card.closeFunc = close`) para poder llamarla desde otra tarjeta. Aquí se
 * usa un Map, que hace lo mismo sin añadir propiedades al DOM.
 */
function accordion(): () => void {
  const cards = qa<HTMLElement>('[data-accordion-card]').filter(
    // El atributo marca también las partes internas; las tarjetas son las
    // que no llevan valor.
    (el) => !el.getAttribute('data-accordion-card'),
  );
  if (!cards.length) return () => {};

  const closers = new Map<HTMLElement, () => void>();
  const cleanups: Array<() => void> = [];
  let openCard: HTMLElement | null = null;

  for (const card of cards) {
    const content = q<HTMLElement>('[data-accordion-card="content"]', card);
    if (!content) continue;

    const plus = q('[data-ico-plus]', card);
    const paragraphs = qa('[data-accordion-card="p"]', card);
    const ctns = qa('[data-accordion-card="ctn"]', card);

    gsap.set(content, { height: 0, overflow: 'hidden' });

    const open = () => {
      card.classList.add('is-active');
      // `height: auto` animado: GSAP mide el destino y vuelve a auto al
      // acabar, así el contenido sigue siendo fluido después.
      gsap.to(content, {
        height: 'auto',
        duration: DUR.l,
        ease: 'Out',
        onComplete: () => ScrollTrigger.refresh(),
      });
      gsap.fromTo(plus, { rotate: 0 }, { rotate: -45, duration: DUR.m, ease: 'InOut', overwrite: true });
      animateTextP(paragraphs, 'reveal');
      animateCtn(ctns, 'reveal');
    };

    const close = () => {
      card.classList.remove('is-active');
      gsap.to(content, {
        height: 0,
        duration: DUR.l,
        ease: 'Out',
        overwrite: true,
        onComplete: () => ScrollTrigger.refresh(),
      });
      gsap.to(plus, { rotate: -90, duration: DUR.m, ease: 'InOut', overwrite: true });
      animateTextP(paragraphs, 'hide', 0);
      animateCtn(ctns, 'hide', 0);
    };

    closers.set(card, close);

    const onClick = () => {
      if (openCard && openCard !== card) closers.get(openCard)?.();

      if (openCard !== card) {
        open();
        openCard = card;
      } else {
        close();
        openCard = null;
      }
    };

    card.addEventListener('click', onClick);
    cleanups.push(() => card.removeEventListener('click', onClick));
  }

  // Las tarjetas arrancan plegadas: la altura del documento ha cambiado.
  ScrollTrigger.refresh();

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Tip como panel, sólo en móvil
 * ------------------------------------------------------------------ */

function tipModals(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(max-width: ${BREAKPOINT - 1}px)`, () => {
    const cleanups: Array<() => void> = [];

    for (const btn of qa<HTMLElement>('[data-modal-tip-btn]')) {
      const id = btn.getAttribute('data-modal-tip-btn');
      const popup = q<HTMLElement>(`[data-modal-tip="${id}"]`);
      if (!popup) continue;

      const container = q<HTMLElement>('[data-modal-container]', popup);
      const overlay = q<HTMLElement>('[data-modal-over]', popup);
      const closeBtns = qa<HTMLElement>('[data-modal-close]', popup);

      let isOpen = false;
      gsap.set(popup, { display: 'none' });

      const open = () => {
        gsap.set([popup, overlay], { display: 'block' });
        gsap.fromTo(container, { yPercent: 125 }, { yPercent: 0, duration: DUR.l, ease: 'Out', overwrite: true });
        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: DUR.l, ease: 'Out', overwrite: true });
        lockScroll();
      };

      const close = () => {
        gsap.to(container, {
          yPercent: 125,
          duration: DUR.m,
          ease: 'In',
          overwrite: true,
          onComplete: () => gsap.set([popup, overlay], { display: 'none' }),
        });
        gsap.to(overlay, { opacity: 0, duration: DUR.m, ease: 'In', overwrite: true });
        unlockScroll();
      };

      const onOpen = () => {
        if (isOpen) return;
        open();
        isOpen = true;
      };
      const onClose = () => {
        if (!isOpen) return;
        close();
        isOpen = false;
      };

      btn.addEventListener('click', onOpen);
      for (const c of closeBtns) c.addEventListener('click', onClose);

      cleanups.push(() => {
        btn.removeEventListener('click', onOpen);
        for (const c of closeBtns) c.removeEventListener('click', onClose);
        if (isOpen) unlockScroll();
      });
    }

    return () => {
      for (const c of cleanups) c();
    };
  });

  return () => mm.revert();
}

export function initAccordion(): () => void {
  const cleanups = [accordion(), tipModals()];
  return () => {
    for (const c of cleanups) c();
  };
}
