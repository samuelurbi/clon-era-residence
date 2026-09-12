/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Arranque de la capa de animación.
 *
 * En el original, Barba destruía y reconstruía el DOM en cada navegación y
 * el script se reinicializaba entero. Aquí el equivalente es el cambio de
 * `pathname`: se vuelven a registrar los disparadores sobre el árbol nuevo
 * y se matan los del anterior, que apuntan a nodos que ya no existen.
 *
 * `gsap.context()` recoge todo lo creado dentro para poder revertirlo de
 * una vez; los ScrollTrigger se matan explícitamente porque viven fuera
 * del contexto.
 */

import { useEffect } from 'react';
import { usePathname } from '@/shims/next-navigation';
import { gsap, ScrollTrigger } from '@/lib/animations/gsap';
import { initScrollReveal } from '@/lib/animations/reveal';
import { initParallax } from '@/lib/animations/parallax';
import { initHomeFlow } from '@/lib/animations/home-flow';
import { initChrome } from '@/lib/animations/chrome';
import { initInteractions } from '@/lib/animations/interactions';
import { initModals } from '@/lib/animations/modals';
import { initUi } from '@/lib/animations/ui';
import { initSlider } from '@/lib/animations/slider';
import { initHeroSlider } from '@/lib/animations/hero-slider';
import { initAccordion } from '@/lib/animations/accordion';
import { initLightbox } from '@/lib/animations/lightbox';
import { initFilters } from '@/lib/animations/filters';
import { initImageZoom } from '@/lib/animations/image-zoom';
import { initTabs } from '@/lib/animations/tabs';
import { initTabsHilight } from '@/lib/animations/tabs-hilight';
import { initLocalScroll } from '@/lib/animations/local-scroll';
import { initMisc } from '@/lib/animations/misc';
import { runPreloader } from '@/lib/animations/preloader';

/**
 * El preloader va una sola vez por CARGA de página, no por montaje del
 * componente. La bandera vive en el módulo, no en un `useRef`, a propósito:
 * un ref sobrevive al doble montaje de StrictMode igual que ésta, pero lo
 * que no puede sobrevivir es abortar la animación entre medias. Por eso
 * este efecto no devuelve limpieza: matar el timeline a mitad dejaba la
 * imagen del hero congelada en `scale: 0.75` y la cortina sin retirar.
 *
 * No hay nada que limpiar: si el layout se desmonta es porque hay una carga
 * completa de documento, y ahí se va todo.
 */
let preloaderStarted = false;

export function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    if (preloaderStarted) return;
    preloaderStarted = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('[data-preloader], [data-master-preloader]', { display: 'none' });
      return;
    }
    // Igual que abajo: el preloader también trocea texto, así que espera a
    // la tipografía. La cortina ya está pintada por CSS, no se ve el retraso.
    void document.fonts.ready.then(() => runPreloader());
  }, []);

  useEffect(() => {
    // Quien pide menos movimiento no debe quedarse con la página en blanco:
    // se retira el velo antiflicker y se sale sin animar nada.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('[data-prevent-flicker], [data-scroll-reveal]', { visibility: 'visible' });
      return;
    }

    let cancelled = false;
    let ctx: gsap.Context | null = null;

    /*
     * SplitText parte el texto midiendo lo que hay renderizado en ese
     * instante. Si se ejecuta antes de que la tipografía esté lista, calcula
     * las líneas con la métrica de la fuente de respaldo y las congela en
     * contenedores; cuando entra la definitiva, el texto refluye y ya no
     * coincide con el corte guardado.
     *
     * (Esta espera se añadió sospechando que causaba el salto de líneas de
     * «Select a Villa». Se comprobó que NO era eso —lo era la asimetría
     * al partir las dos copias, ver lib/animations/interactions.ts— pero se
     * mantiene porque el problema que evita es real de todos modos.)
     */
    void document.fonts.ready.then(() => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const cleanups = [
          initScrollReveal(document),
          initParallax(document),
          initHomeFlow(),
          initChrome(),
          initInteractions(),
          initModals(),
          initUi(),
          initSlider(),
          initHeroSlider(),
          initAccordion(),
          initLightbox(),
          initFilters(),
          initImageZoom(),
          initTabs(),
          initTabsHilight(),
          initLocalScroll(document),
          initMisc(),
        ];

        // Las imágenes cambian la altura del documento al cargar; sin este
        // refresco los disparadores quedan calculados sobre medidas viejas.
        const onLoad = () => ScrollTrigger.refresh(true);
        window.addEventListener('load', onLoad);

        return () => {
          window.removeEventListener('load', onLoad);
          for (const cleanup of cleanups) cleanup();
        };
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}
