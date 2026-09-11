/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Zoom sobre la imagen del lightbox — port de `initImageZoom()`.
 *
 * Dos implementaciones distintas según el dispositivo, como en el original:
 *
 *   escritorio  un clic amplía la imagen al ancho de la ventana y el
 *               movimiento vertical del ratón la recorre con inercia
 *   táctil      pellizco para ampliar (hasta 5x), arrastre para desplazar
 *               y doble toque para alternar
 *
 * En ambos casos, al ampliar se retira la interfaz (paginación, botón de
 * cerrar y el marco decorativo) para no tapar la foto.
 */

import { gsap } from './gsap';
import { DUR, BREAKPOINT } from './constants';

/** Suavizado del seguimiento vertical: cuanto menor, más inercia. */
const FOLLOW_EASE = 0.08;

/** Ampliación del doble toque y tope del pellizco. */
const TAP_SCALE = 2.5;
const MAX_SCALE = 5;

/** Ventana para considerar dos toques como doble toque. */
const DOUBLE_TAP_MS = 300;

export function initImageZoom(): () => void {
  const wrapper = document.querySelector<HTMLElement>('[data-lightbox-content]');
  if (!wrapper) return () => {};

  const img = wrapper.querySelector<HTMLImageElement>('[data-lightbox-img]');
  if (!img) return () => {};

  const pag = wrapper.parentElement?.querySelector('.modal_lightbox_pag') ?? null;
  const closeBtn = wrapper.parentElement?.querySelector('.modal_close') ?? null;
  const decor = document.querySelector('.modal_decor');

  const hideUI = () => {
    if (pag) gsap.to(pag, { yPercent: 100, duration: DUR.m, ease: 'Out' });
    if (closeBtn) gsap.to(closeBtn, { xPercent: 250, duration: DUR.m, ease: 'Out' });
    if (decor) gsap.to(decor, { scale: 1.1, duration: DUR.m, ease: 'Out' });
  };

  const showUI = () => {
    if (pag) gsap.to(pag, { yPercent: 0, duration: DUR.m, ease: 'Out' });
    if (closeBtn) gsap.to(closeBtn, { xPercent: 0, duration: DUR.m, ease: 'Out' });
    if (decor) gsap.to(decor, { scale: 1, duration: DUR.m, ease: 'Out' });
  };

  /* ----------------------------------------------------------------
   *  Escritorio: clic para ampliar, ratón para recorrer
   * ---------------------------------------------------------------- */
  if (window.innerWidth > BREAKPOINT) {
    let zoomed = false;
    let overflow = 0;
    let targetY = 0;
    let currentY = 0;

    // El seguimiento va por ticker, no por tween: persigue un objetivo que
    // cambia en cada movimiento del ratón, y un tween se reiniciaría siempre.
    const onTick = () => {
      currentY += (targetY - currentY) * FOLLOW_EASE;
      gsap.set(img, { y: currentY });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!zoomed || overflow <= 0) return;
      // Arriba del todo muestra el borde superior; abajo, el inferior.
      const ratio = e.clientY / window.innerHeight;
      targetY = overflow * (1 - 2 * ratio);
    };

    img.style.cursor = 'zoom-in';

    const open = () => {
      zoomed = true;
      const scale = window.innerWidth / img.offsetWidth;
      const scaledHeight = img.offsetHeight * scale;
      overflow = Math.max(0, (scaledHeight - window.innerHeight) / 2);
      currentY = 0;
      targetY = 0;

      gsap.to(img, { scale, duration: DUR.m, ease: 'Out' });
      gsap.ticker.add(onTick);
      document.addEventListener('mousemove', onMouseMove);

      hideUI();
      img.style.cursor = 'zoom-out';
    };

    const close = () => {
      if (!zoomed) return;
      zoomed = false;
      gsap.ticker.remove(onTick);
      document.removeEventListener('mousemove', onMouseMove);
      targetY = 0;

      gsap.to(img, { scale: 1, y: 0, duration: DUR.m, ease: 'Out' });
      showUI();
      img.style.cursor = 'zoom-in';
    };

    const onClick = () => (zoomed ? close() : open());
    // Cambiar de foto o cerrar con teclado debe deshacer el zoom primero.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') close();
    };

    img.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);

    return () => {
      img.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      gsap.ticker.remove(onTick);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }

  /* ----------------------------------------------------------------
   *  Táctil: pellizco, arrastre y doble toque
   * ---------------------------------------------------------------- */
  let scale = 1;
  let startScale = 1;
  let startDist = 0;
  let translateX = 0;
  let translateY = 0;
  let startX = 0;
  let startY = 0;
  let midX = 0;
  let midY = 0;
  let lastTap = 0;

  // Sin esto el navegador se queda el gesto y hace su propio zoom de página.
  img.style.touchAction = 'none';

  const dist = (a: Touch, b: Touch) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  const mid = (a: Touch, b: Touch) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

  const applyTransform = () => gsap.set(img, { scale, x: translateX, y: translateY });

  /** Devuelve la imagen dentro de los bordes si el arrastre se pasó. */
  const clampTranslate = () => {
    const rect = img.getBoundingClientRect();
    const wrapRect = wrapper.getBoundingClientRect();

    const overflowX = Math.max(0, (rect.width - wrapRect.width) / 2);
    const overflowY = Math.max(0, (rect.height - wrapRect.height) / 2);

    const clampedX = Math.max(-overflowX, Math.min(overflowX, translateX));
    const clampedY = Math.max(-overflowY, Math.min(overflowY, translateY));

    if (clampedX !== translateX || clampedY !== translateY) {
      translateX = clampedX;
      translateY = clampedY;
      gsap.to(img, { x: translateX, y: translateY, duration: DUR.s, ease: 'Out' });
    }
  };

  const resetZoom = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    gsap.to(img, { scale: 1, x: 0, y: 0, duration: DUR.m, ease: 'Out' });
    showUI();
  };

  const zoomCenter = () => {
    scale = TAP_SCALE;
    translateX = 0;
    translateY = 0;
    gsap.to(img, { scale, x: 0, y: 0, duration: DUR.m, ease: 'Out' });
    hideUI();
  };

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      startDist = dist(e.touches[0], e.touches[1]);
      startScale = scale;
      const m = mid(e.touches[0], e.touches[1]);
      midX = m.x;
      midY = m.y;
      startX = translateX;
      startY = translateY;
      if (startScale <= 1) hideUI();
      return;
    }

    if (e.touches.length !== 1) return;

    const now = Date.now();
    if (now - lastTap < DOUBLE_TAP_MS) {
      e.preventDefault();
      if (scale > 1) resetZoom();
      else zoomCenter();
      lastTap = 0;
      return;
    }
    lastTap = now;

    // Con la imagen ampliada, un dedo arrastra en vez de pasar de foto.
    if (scale > 1) {
      e.preventDefault();
      midX = e.touches[0].clientX;
      midY = e.touches[0].clientY;
      startX = translateX;
      startY = translateY;
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const d = dist(e.touches[0], e.touches[1]);
      const m = mid(e.touches[0], e.touches[1]);
      scale = Math.max(1, Math.min(startScale * (d / startDist), MAX_SCALE));
      translateX = startX + (m.x - midX);
      translateY = startY + (m.y - midY);
      applyTransform();
    } else if (e.touches.length === 1 && scale > 1) {
      e.preventDefault();
      translateX = startX + (e.touches[0].clientX - midX);
      translateY = startY + (e.touches[0].clientY - midY);
      applyTransform();
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (e.touches.length) return;
    // Un pellizco que casi vuelve al original se considera cerrado.
    if (scale <= 1.05) resetZoom();
    else clampTranslate();
  };

  img.addEventListener('touchstart', onTouchStart, { passive: false });
  img.addEventListener('touchmove', onTouchMove, { passive: false });
  img.addEventListener('touchend', onTouchEnd);

  return () => {
    img.removeEventListener('touchstart', onTouchStart);
    img.removeEventListener('touchmove', onTouchMove);
    img.removeEventListener('touchend', onTouchEnd);
  };
}
