/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Modales — port de `initModalMenu()` y `initModalCta()` del original.
 *
 * Los dos van emparejados por identificador entre el botón y el panel:
 * `[data-modal-menu-btn="x"]` abre `[data-modal-menu="x"]`. Así el mismo
 * código sirve para los varios botones que abren el mismo panel (el menú
 * se abre desde la cabecera y desde el pie).
 *
 * Diferencias entre los dos, que son deliberadas:
 *
 *   menú  alterna (el mismo botón abre y cierra), tiñe de oscuro los
 *         elementos flotantes mientras está abierto y anima su texto
 *   cta   sólo abre desde el botón; entra girando en 3D y se cierra desde
 *         sus propios botones
 */

import { gsap } from './gsap';
import { DUR } from './constants';
import { lockScroll, unlockScroll } from './scroll-lock';
import { animateTextA, animateTextH, animateTextP, animateCtn, type Direction } from './reveal';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** Anima las partes de texto de un panel, marcadas con `data-part`. */
function animateParts(root: ParentNode, direction: Direction) {
  animateTextA(qa('[data-part="a"]', root), direction);
  animateTextH(qa('[data-part="h"]', root), direction);
  animateTextP(qa('[data-part="p"]', root), direction);
  animateCtn(qa('[data-part="ctn"]', root), direction);
}

/* ------------------------------------------------------------------
 *  Menú
 * ------------------------------------------------------------------ */

function menuModals(): () => void {
  const cleanups: Array<() => void> = [];

  for (const btn of qa<HTMLElement>('[data-modal-menu-btn]')) {
    const id = btn.getAttribute('data-modal-menu-btn');
    const popup = q<HTMLElement>(`[data-modal-menu="${id}"]`);
    if (!popup) continue;

    const container = q<HTMLElement>('[data-modal-container]', popup);
    const overlay = q<HTMLElement>('[data-modal-over]', popup);
    const closeBtns = qa<HTMLElement>(`[data-modal-close="${id}"]`);
    const labels = qa<HTMLElement>('.btn-menu_label', btn);
    const ico1 = q('[data-ico-menu="is-1"]', btn);
    const ico2 = q('[data-ico-menu="is-2"]', btn);
    const themed = qa<HTMLElement>('[data-theme]');

    let isOpen = false;

    gsap.set(popup, { display: 'none' });
    gsap.set([ico1, ico2], { rotate: 180 });

    const open = () => {
      gsap.set([popup, overlay], { display: 'block' });

      // El panel es oscuro, así que todo lo que flota encima tiene que
      // pasar a tema oscuro. Se marca lo que se tiñe para revertir sólo
      // eso al cerrar y no pisar lo que ya era oscuro de por sí.
      for (const el of themed) {
        if (!el.classList.contains('theme_on-dark')) {
          el.classList.add('theme_on-dark');
          el.setAttribute('data-modal-themed', '');
        }
      }
      for (const el of labels) el.classList.toggle('is-active');

      gsap.fromTo(container, { yPercent: 0 }, { yPercent: 0, duration: DUR.l, ease: 'Out', overwrite: true });
      // Las dos barras del icono se cruzan formando una equis.
      gsap.to(ico1, { rotate: -45, duration: DUR.m, ease: 'InOut', overwrite: true });
      gsap.to(ico2, { rotate: 45, duration: DUR.m, ease: 'InOut', overwrite: true });
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: DUR.m, ease: 'Out', overwrite: true });

      animateParts(popup, 'reveal');
      lockScroll();
    };

    const close = () => {
      for (const el of themed) {
        if (el.hasAttribute('data-modal-themed')) {
          el.classList.remove('theme_on-dark');
          el.removeAttribute('data-modal-themed');
        }
      }
      for (const el of labels) el.classList.toggle('is-active');

      gsap.to(container, {
        yPercent: 0,
        duration: DUR.m,
        ease: 'In',
        overwrite: true,
        onComplete: () => gsap.set([popup, overlay], { display: 'none' }),
      });
      gsap.to(ico1, { rotate: 180, duration: DUR.m, ease: 'InOut', overwrite: true });
      gsap.to(ico2, { rotate: 180, duration: DUR.m, ease: 'InOut', overwrite: true });
      gsap.to(overlay, { opacity: 0, duration: DUR.m, ease: 'In', overwrite: true });

      animateParts(popup, 'hide');
      unlockScroll();
    };

    const toggle = () => {
      isOpen ? close() : open();
      isOpen = !isOpen;
    };
    const closeIfOpen = () => {
      if (!isOpen) return;
      close();
      isOpen = false;
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeIfOpen();
    };

    btn.addEventListener('click', toggle);
    for (const c of closeBtns) c.addEventListener('click', closeIfOpen);
    document.addEventListener('keydown', onKey);

    cleanups.push(() => {
      btn.removeEventListener('click', toggle);
      for (const c of closeBtns) c.removeEventListener('click', closeIfOpen);
      document.removeEventListener('keydown', onKey);
      if (isOpen) unlockScroll();
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  «Book a call»
 * ------------------------------------------------------------------ */

function ctaModals(): () => void {
  const cleanups: Array<() => void> = [];

  for (const btn of qa<HTMLElement>('[data-modal-cta-btn]')) {
    const id = btn.getAttribute('data-modal-cta-btn');
    const popup = q<HTMLElement>(`[data-modal-cta="${id}"]`);
    if (!popup) continue;

    const container = q<HTMLElement>('[data-modal-container]', popup);
    const overlay = q<HTMLElement>('[data-modal-over]', popup);
    const closeBtns = qa<HTMLElement>('[data-modal-close]', popup);

    let isOpen = false;

    gsap.set(popup, { display: 'none' });
    // Sin perspectiva, el giro en X se vería plano.
    gsap.set(container, { transformPerspective: 1000 });

    const open = () => {
      gsap.set([popup, overlay], { display: 'block' });
      gsap.fromTo(
        container,
        { scale: 0, rotateX: -90, yPercent: -100, rotate: -25 },
        { scale: 1, rotateX: 0, yPercent: 0, rotate: 0, duration: DUR.l, ease: 'Out', overwrite: true },
      );
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: DUR.l, ease: 'Out', overwrite: true });
      lockScroll();
    };

    const close = () => {
      gsap.to(container, {
        scale: 1,
        rotateX: 90,
        yPercent: 200,
        rotate: 25,
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
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    btn.addEventListener('click', onOpen);
    for (const c of closeBtns) c.addEventListener('click', onClose);
    document.addEventListener('keydown', onKey);

    cleanups.push(() => {
      btn.removeEventListener('click', onOpen);
      for (const c of closeBtns) c.removeEventListener('click', onClose);
      document.removeEventListener('keydown', onKey);
      if (isOpen) unlockScroll();
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/**
 * Registra los modales presentes en la página.
 *
 * (El original calculaba `isMobile` al cerrar el modal de CTA pero nunca
 * usaba el valor; aquí se omite en vez de arrastrar código muerto.)
 */
export function initModals(): () => void {
  const cleanups = [menuModals(), ctaModals()];
  return () => {
    for (const c of cleanups) c();
  };
}
