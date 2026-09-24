/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Transiciones entre rutas — equivalente de `initPageTransitions()`.
 *
 * No es un port: el original usaba Barba, que interceptaba la navegación,
 * pedía el HTML de destino y **mantenía vivo el DOM viejo** mientras lo
 * animaba hacia fuera. El App Router no da ese hueco — al cambiar la ruta
 * el árbol se sustituye y no hay un instante con los dos.
 *
 * Se reproduce la misma coreografía adelantando la salida a ANTES de
 * navegar:
 *
 *   1. clic en un enlace interno → se cancela la navegación
 *   2. los elementos visibles se animan hacia fuera (`hide`)
 *   3. el contenedor se funde a 0
 *   4. entonces sí, se navega
 *   5. al montar la ruta nueva, el contenedor entra de 0 a 1
 *
 * Efecto secundario deseable: el marcado portado usa `<a>` planos, que en
 * Next provocan recarga completa del documento. Al interceptarlos pasan a
 * ser navegación de cliente de verdad.
 *
 * Límite conocido, que el original también tenía: **atrás y adelante del
 * navegador no se pueden retrasar**. Cuando llega el evento la navegación ya
 * ocurrió, así que ahí sólo hay entrada. Barba se comportaba igual.
 */

import { useEffect } from 'react';
import { usePathname, useRouter } from '@/shims/next-navigation';
import { gsap } from '@/lib/animations/gsap';
import { DUR } from '@/lib/animations/constants';
import { animateVisibleElements } from '@/lib/animations/reveal';

const CONTAINER = '.transition-container';

/** Protocolos que no son navegación dentro del sitio. */
const EXTERNAL_PROTOCOLS = /^(mailto:|tel:|sms:|https?:\/\/)/i;

export function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();

  /* Entrada: al montar cada ruta, el contenedor aparece. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = document.querySelector<HTMLElement>(CONTAINER);
    if (!container) return;

    const tween = gsap.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: DUR.m, ease: 'InOut', overwrite: true },
    );
    return () => {
      tween.kill();
    };
  }, [pathname]);

  /* Salida: se intercepta el clic y se animan las dos fases antes de navegar. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onClick = (e: MouseEvent) => {
      // Respetar las formas de abrir en otra pestaña o ventana.
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.('a');
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') || EXTERNAL_PROTOCOLS.test(href)) return;
      if (link.hasAttribute('download')) return;
      if (link.target && link.target !== '_self') return;

      // Enlace a la ruta actual: no hay nada que animar.
      const [to] = href.split('#');
      const normalise = (p: string) => p.replace(/\/+$/, '') || '/';
      if (normalise(to) === normalise(pathname)) return;

      const container = document.querySelector<HTMLElement>(CONTAINER);
      if (!container) return;

      e.preventDefault();

      /*
       * La navegación NO puede depender de que el tween termine.
       *
       * Si la animación no completa —pestaña en segundo plano, donde el
       * navegador congela requestAnimationFrame y GSAP deja de avanzar— el
       * `onComplete` no llega nunca y el enlace se queda muerto: se cancela
       * el clic y no se va a ninguna parte. Un enlace que no navega es peor
       * que una transición fea.
       *
       * Por eso navega el primero de los dos que llegue, y el otro se
       * descarta con esta bandera.
       */
      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        router.push(to);
      };

      // Primero se van los elementos, luego se apaga el conjunto: es el
      // orden del original, y por eso se ve el texto salir antes del fundido.
      animateVisibleElements(container, 'hide');

      gsap.to(container, {
        opacity: 0,
        duration: DUR.m,
        ease: 'In',
        overwrite: true,
        onComplete: go,
      });

      // Red de seguridad, con un margen sobre la duración real del fundido.
      setTimeout(go, DUR.m * 1000 + 250);
    };

    // En captura, para adelantarse a los manejadores de los modales, que
    // cierran el menú al pulsar un enlace de dentro.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router, pathname]);

  return null;
}
