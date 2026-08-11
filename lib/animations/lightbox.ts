'use client';

/**
 * Lightbox de la galería — port de `initLightbox()` del original.
 *
 * Sólo existe en las 25 fichas de apartamento; en la home no hay ninguna
 * imagen marcada, así que en el resto de páginas se autodescarta.
 *
 * El zoom con arrastre (`initImageZoom`, 207 líneas) se deja fuera a
 * propósito por ahora: es una capa aparte sobre este mismo modal y merece
 * su propia verificación con una ficha real delante.
 */

import { gsap } from './gsap';
import { DUR } from './constants';
import { lockScroll, unlockScroll } from './scroll-lock';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

export function initLightbox(): () => void {
  // `offsetParent === null` descarta las que están en un bloque oculto: el
  // marcado incluye variantes por breakpoint y sólo una está viva.
  const items = qa<HTMLImageElement>('[data-lightbox]').filter((el) => el.offsetParent !== null);
  if (!items.length) return () => {};

  const modal = q<HTMLElement>('[data-lightbox-modal]');
  if (!modal) return () => {};

  const img = q<HTMLImageElement>('[data-lightbox-img]', modal);
  const btnClose = q<HTMLElement>('[data-slider="close"]', modal);
  const btnPrev = q<HTMLElement>('[data-slider="prev"]', modal);
  const btnNext = q<HTMLElement>('[data-slider="next"]', modal);
  const elCurrent = q<HTMLElement>('[data-slider="current"]', modal);
  const elTotal = q<HTMLElement>('[data-slider="total"]', modal);
  const elProgress = q<HTMLElement>('[data-slider="progress"]', modal);
  if (!img) return () => {};

  const srcs = items.map((el) => el.src || el.dataset.src || '');
  let current = 0;
  let isOpen = false;

  gsap.set(modal, { display: 'none' });

  const updateCounter = () => {
    if (elCurrent) elCurrent.textContent = String(current + 1).padStart(2, '0');
    if (elTotal) elTotal.textContent = String(srcs.length).padStart(2, '0');
    if (elProgress) {
      gsap.to(elProgress, {
        width: `${((current + 1) / srcs.length) * 100}%`,
        duration: DUR.s,
        ease: 'Out',
      });
    }
  };

  const open = (index: number) => {
    current = index;
    img.src = srcs[current];
    updateCounter();

    gsap.set(modal, { display: 'block' });
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: DUR.m, ease: 'Out' });
    gsap.fromTo(img, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: DUR.m, ease: 'Out' });

    isOpen = true;
    lockScroll();
  };

  const close = () => {
    if (!isOpen) return;
    gsap.to(modal, {
      opacity: 0,
      duration: DUR.s,
      ease: 'In',
      onComplete: () => gsap.set(modal, { display: 'none' }),
    });
    isOpen = false;
    unlockScroll();
  };

  /** La saliente se va por un lado y la entrante llega por el otro. */
  const slide = (direction: 1 | -1) => {
    if (!isOpen) return;
    const outX = direction === 1 ? -125 : 125;
    const inX = direction === 1 ? 125 : -125;

    gsap.to(img, {
      xPercent: outX,
      duration: DUR.s,
      ease: 'In',
      onComplete: () => {
        current = (current + direction + srcs.length) % srcs.length;
        img.src = srcs[current];
        updateCounter();
        gsap.fromTo(img, { xPercent: inX }, { xPercent: 0, duration: DUR.m, ease: 'Out' });
      },
    });
  };

  const handlers: Array<[Element, string, EventListener]> = [];
  const on = (el: Element | null, type: string, fn: EventListener) => {
    if (!el) return;
    el.addEventListener(type, fn);
    handlers.push([el, type, fn]);
  };

  // Botones que abren por índice explícito (`data-lightbox-btn="3"`).
  for (const trigger of qa<HTMLElement>('[data-lightbox-btn]')) {
    on(trigger, 'click', () => open(Number(trigger.dataset.lightboxBtn) || 0));
  }
  items.forEach((el, i) => on(el, 'click', () => open(i)));

  on(btnClose, 'click', close);
  on(btnPrev, 'click', () => slide(-1));
  on(btnNext, 'click', () => slide(1));

  const onKey = (e: KeyboardEvent) => {
    if (!isOpen) return; // sin esto, las flechas moverían la galería cerrada
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') slide(-1);
    if (e.key === 'ArrowRight') slide(1);
  };
  document.addEventListener('keydown', onKey);

  return () => {
    for (const [el, type, fn] of handlers) el.removeEventListener(type, fn);
    document.removeEventListener('keydown', onKey);
    if (isOpen) unlockScroll();
  };
}
