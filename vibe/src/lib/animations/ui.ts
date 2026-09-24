/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Comportamientos sueltos de interfaz — port de `initCardParts`,
 * `initSnapSections`, `fitText` y `initFloatingTips` del original.
 */

import { gsap } from './gsap';
import { DUR, BREAKPOINT } from './constants';
import { getLenis } from './scroll-lock';
import { animateTextH, animateTextP, animateLine } from './reveal';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

/* ------------------------------------------------------------------
 *  Texto de las tarjetas al pasar el cursor
 * ------------------------------------------------------------------ */

/**
 * Las tarjetas ocultan su texto y lo revelan al pasar por encima, con los
 * mismos animadores que usan los reveals por scroll: titulares carácter a
 * carácter, párrafos por líneas y los filetes con barrido.
 */
function cardParts(): () => void {
  const cleanups: Array<() => void> = [];

  for (const card of qa<HTMLElement>('[hover-card]')) {
    const headlines = qa('[hover="h"]', card);
    const paragraphs = qa('[hover="p"]', card);
    const lines = qa('[hover="line"]', card);

    animateTextH(headlines, 'initial');
    animateTextP(paragraphs, 'initial');
    animateLine(lines, 'initial');

    const forward = () => {
      animateTextH(headlines, 'reveal', 0);
      animateTextP(paragraphs, 'reveal', 0);
      animateLine(lines, 'reveal', 0);
    };
    const reverse = () => {
      animateTextH(headlines, 'hide', 0);
      animateTextP(paragraphs, 'hide', 0);
      animateLine(lines, 'hide', 0);
    };

    card.addEventListener('mouseenter', forward);
    card.addEventListener('mouseleave', reverse);

    cleanups.push(() => {
      card.removeEventListener('mouseenter', forward);
      card.removeEventListener('mouseleave', reverse);
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Secciones que se ajustan solas
 * ------------------------------------------------------------------ */

/**
 * Al dejar de scrollear, encaja la sección que más se vea. No es un snap
 * duro del navegador: espera 40 ms de quietud y sólo actúa si una sección
 * ocupa más de la mitad del viewport, así que no pelea con el usuario
 * mientras éste sigue moviéndose.
 *
 * Sólo escritorio.
 */
function snapSections(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const sections = qa<HTMLElement>('[data-snap]');
    const lenis = getLenis();
    if (!sections.length || !lenis) return;

    let timer: ReturnType<typeof setTimeout>;

    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const vh = window.innerHeight;
        let best: HTMLElement | null = null;
        let bestRatio = 0;

        for (const section of sections) {
          const rect = section.getBoundingClientRect();
          const visible = Math.min(rect.bottom, vh) - Math.max(rect.top, 0);
          const ratio = visible / Math.min(section.offsetHeight, vh);
          if (ratio > 0.5 && ratio > bestRatio) {
            bestRatio = ratio;
            best = section;
          }
        }

        if (best) lenis.scrollTo(best, { duration: DUR.l, easing: gsap.parseEase('Ease') });
      }, 40);
    };

    lenis.on('scroll', onScroll);

    return () => {
      clearTimeout(timer);
      lenis.off('scroll', onScroll);
    };
  });

  return () => mm.revert();
}

/* ------------------------------------------------------------------
 *  Texto ajustado al ancho del contenedor
 * ------------------------------------------------------------------ */

/**
 * Escala el tamaño de fuente para que el texto ocupe exactamente el ancho
 * de su contenedor, en una sola línea.
 *
 * El original se re-registraba con `{ once: true }` en cada resize, lo que
 * en la práctica es un bucle de un solo uso encadenado. Aquí es un
 * listener normal con su limpieza: mismo efecto, sin fugas.
 */
function fitText(): () => void {
  const apply = () => {
    for (const el of qa<HTMLElement>('[data-fit-text]')) {
      const parent = el.parentElement;
      if (!parent) continue;

      el.style.whiteSpace = 'nowrap';
      el.style.fontSize = '';
      el.style.width = 'max-content';

      const parentWidth = parent.clientWidth;
      const textWidth = el.offsetWidth;
      const currentSize = parseFloat(getComputedStyle(el).fontSize);

      el.style.width = '';
      if (textWidth > 0) el.style.fontSize = `${currentSize * (parentWidth / textWidth)}px`;
    }
  };

  apply();
  window.addEventListener('resize', apply);
  return () => window.removeEventListener('resize', apply);
}

/* ------------------------------------------------------------------
 *  Tips que siguen al cursor
 * ------------------------------------------------------------------ */

/**
 * Etiquetas que aparecen junto al puntero al pasar sobre ciertas zonas y
 * lo siguen con retardo. Si el tip se saldría por el borde derecho o
 * inferior, se voltea con `is-left` / `is-top`.
 *
 * Sólo escritorio: sin puntero no hay nada que seguir.
 */
function floatingTips(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const byId = new Map(
      qa<HTMLElement>('[floating-tip]').map((el) => [el.getAttribute('floating-tip'), el]),
    );
    const active = new Set<HTMLElement>();

    const checkBounds = (tip: HTMLElement, x: number, y: number) => {
      const rect = tip.getBoundingClientRect();
      tip.classList.toggle('is-left', x + rect.width > window.innerWidth);
      tip.classList.toggle('is-top', y + rect.height > window.innerHeight);
    };

    const onMove = (e: MouseEvent) => {
      for (const tip of active) {
        checkBounds(tip, e.clientX, e.clientY);
        gsap.to(tip, { x: e.clientX, y: e.clientY, duration: DUR.l * 2, ease: 'power3' });
      }
    };
    document.addEventListener('mousemove', onMove);

    const handlers: Array<[HTMLElement, string, EventListener]> = [];

    for (const trigger of qa<HTMLElement>('[floating-tip-trigger]')) {
      const tip = byId.get(trigger.getAttribute('floating-tip-trigger'));
      if (!tip) continue;

      const show = (e: Event) => {
        const ev = e as MouseEvent;
        gsap.set(tip, { x: ev.clientX, y: ev.clientY });
        checkBounds(tip, ev.clientX, ev.clientY);
        tip.classList.add('is-active');
        active.add(tip);
      };
      const hide = () => {
        tip.classList.remove('is-active', 'is-left', 'is-top');
        active.delete(tip);
      };

      trigger.addEventListener('mouseenter', show);
      trigger.addEventListener('mouseleave', hide);
      handlers.push([trigger, 'mouseenter', show], [trigger, 'mouseleave', hide]);

      // Si el cursor ya estaba encima al registrarse, no llegaría el evento.
      if (trigger.matches(':hover')) {
        gsap.set(tip, { x: 0, y: 0 });
        tip.classList.add('is-active');
        active.add(tip);
      }
    }

    return () => {
      document.removeEventListener('mousemove', onMove);
      for (const [el, type, fn] of handlers) el.removeEventListener(type, fn);
      active.clear();
    };
  });

  return () => mm.revert();
}

export function initUi(): () => void {
  const cleanups = [cardParts(), snapSections(), fitText(), floatingTips()];
  return () => {
    for (const c of cleanups) c();
  };
}
