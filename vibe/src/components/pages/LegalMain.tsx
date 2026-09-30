/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Página de políticas legales: aviso legal, privacidad, cookies, términos de
 * uso e información del proyecto.
 *
 * El contenido es el documento definitivo del cliente, uno por idioma
 * (legal/LegalEn.tsx y legal/LegalEs.tsx): son textos jurídicos que no se
 * traducen uno del otro frase a frase, así que no comparten un objeto de
 * textos como el resto de componentes.
 *
 * Es una página para leer, no para recorrer: SIN coreografía. Nada de
 * `data-scroll-reveal`, parallax ni SplitText, y tampoco
 * `data-prevent-flicker` — ese atributo oculta el elemento hasta que una
 * animación lo destapa, y aquí no hay animación que lo haga.
 *
 * Anclas del índice: Lenis gobierna el scroll de la ventana, así que el
 * salto nativo a `#privacy` llega de golpe y sin respetar la cabecera fija.
 * Aquí se interceptan los enlaces `#…` de la propia página y se desplaza con
 * `lenis.scrollTo`, restando el `scroll-margin-top` que el CSS da a cada
 * artículo (una sola fuente para el hueco de la cabecera; sin Lenis —quien
 * pide menos movimiento— `scrollIntoView` ya lo respeta por sí solo).
 */

import { useEffect, useRef } from 'react';
import { useLang } from '@/lib/use-lang';
import { getLenis } from '@/lib/animations/scroll-lock';
import { LegalEn } from '@/components/pages/legal/LegalEn';
import { LegalEs } from '@/components/pages/legal/LegalEs';

/**
 * Desplaza hasta `target` dejando libre el hueco de la cabecera.
 *
 * El destino se calcula con `scrollY` real y no pasándole el elemento a
 * Lenis: Lenis lo mediría contra su posición interna, que va con retraso si
 * la página acaba de moverse por otra vía (scroll táctil nativo, el
 * navegador trayendo un enlace a la vista) y acabaría en otro sitio.
 */
function scrollToSection(target: HTMLElement, immediate = false) {
  const lenis = getLenis();
  if (lenis) {
    const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
    const y = target.getBoundingClientRect().top + window.scrollY - margin;
    lenis.scrollTo(Math.max(0, y), { immediate, force: true });
  } else {
    target.scrollIntoView({ behavior: immediate ? 'auto' : 'smooth', block: 'start' });
  }
  // Para teclado y lectores de pantalla: el foco sigue al salto.
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
  target.focus({ preventScroll: true });
}

/**
 * El preloader bloquea el scroll mientras está en pantalla. La cortina
 * inerte (`data-master-preloader`) desaparece cuando arranca, y el propio
 * preloader queda en `display: none` al terminar; en las navegaciones
 * internas ninguno de los dos está ya.
 */
function preloaderDone(): boolean {
  if (document.querySelector('[data-master-preloader]')) return false;
  const preloader = document.querySelector<HTMLElement>('[data-preloader]');
  if (preloader && getComputedStyle(preloader).display !== 'none') return false;
  const lenis = getLenis();
  return !lenis || !lenis.isStopped;
}

export function LegalMain() {
  const lang = useLang();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element | null)?.closest?.('a');
      if (!(link instanceof HTMLAnchorElement)) return;
      /*
       * Vale tanto `#privacy` (índice y texto) como `/legal#privacy` (los
       * enlaces legales del pie, que están fuera de esta página): lo que
       * cuenta es que apunte a ESTA ruta y lleve ancla. Por eso se escucha
       * en el documento y no solo dentro de la página.
       */
      if (!link.getAttribute('href')) return;
      const url = new URL(link.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname) return;
      if (url.hash.length < 2) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target || !root.contains(target)) return;

      e.preventDefault();
      scrollToSection(target);
      // La URL refleja la sección (se puede compartir) sin apilar historial.
      history.replaceState(history.state, '', url.hash);
    };
    document.addEventListener('click', onClick);

    // Llegada con ancla (/legal#cookies): esperar a que acabe el preloader y
    // a que SmoothScroll haga su «arriba del todo» del cambio de ruta, que
    // corre DESPUÉS de este efecto (el padre ejecuta sus efectos al final).
    let raf = 0;
    const hash = window.location.hash;
    const initial = hash.length > 1 ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (initial && root.contains(initial)) {
      const started = performance.now();
      const wait = () => {
        if (preloaderDone() || performance.now() - started > 20000) {
          scrollToSection(initial, true);
        } else {
          raf = requestAnimationFrame(wait);
        }
      };
      raf = requestAnimationFrame(() => (raf = requestAnimationFrame(wait)));
    }

    return () => {
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf);
    };
  }, [lang]);

  return (
    <div ref={rootRef} className="legal-page">
      {lang === 'es' ? <LegalEs /> : <LegalEn />}
    </div>
  );
}
