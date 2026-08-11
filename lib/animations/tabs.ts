'use client';

/**
 * Pestañas — port de `initTabs()` del original.
 *
 * Presente en 26 de las 29 páginas: son las pestañas INFO / BENEFITS de la
 * ficha de apartamento y las de amenidades (piscina, gimnasio, jardines…).
 *
 * El cruce es el mismo patrón que usa el slider: la entrante pasa a
 * `relative` y la saliente a `absolute` para que compartan hueco durante la
 * transición y el bloque no dé un salto de altura. La diferencia con el
 * switch día/noche del hero (`heroTabs` en chrome.ts) es que aquí también
 * entra el texto, animado con los mismos animadores que los reveals.
 */

import { gsap, ScrollTrigger } from './gsap';
import { DUR } from './constants';
import { animateTextH, animateTextP, animateCtn, animateSlide } from './reveal';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** Las cuatro clases de contenido que un panel puede animar. */
const partsOf = (panel: Element) => ({
  headlines: qa('[data-tab="h"]', panel),
  paragraphs: qa('[data-tab="p"]', panel),
  ctns: qa('[data-tab="ctn"]', panel),
  slides: qa('[data-tab="slide"]', panel),
});

function setupTabs(component: HTMLElement): () => void {
  const triggers = qa<HTMLElement>('[data-tab-trigger]', component);
  const contents = qa<HTMLElement>('[data-tab-content]', component);
  if (triggers.length < 2 || !contents.length) return () => {};

  let activeIndex = 0;
  let animating = false;

  triggers[0].classList.add('is-active');
  contents[0].classList.add('is-active');

  const handlers: Array<[HTMLElement, () => void]> = [];

  triggers.forEach((trigger, newIndex) => {
    const onClick = () => {
      if (newIndex === activeIndex || animating) return;

      const oldTrigger = triggers[activeIndex];
      const oldPanel = q<HTMLElement>(
        `[data-tab-content="${oldTrigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      const newPanel = q<HTMLElement>(
        `[data-tab-content="${trigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      if (!oldPanel || !newPanel) return;

      const oldParts = partsOf(oldPanel);
      const newParts = partsOf(newPanel);

      gsap.killTweensOf([oldPanel, newPanel]);
      animating = true;

      gsap
        .timeline({ onComplete: () => (animating = false) })
        .set(newPanel, { display: 'block', position: 'relative', zIndex: 1 })
        .set(oldPanel, { display: 'block', position: 'absolute', zIndex: 0 })
        .add(() => {
          animateTextH(newParts.headlines, 'initial');
          animateTextP(newParts.paragraphs, 'initial');
          animateCtn(newParts.ctns, 'initial');
          animateSlide(newParts.slides, 'initial');
        })
        // El panel nuevo puede medir otra cosa: sin refrescar, los
        // disparadores de scroll siguen midiendo contra el anterior.
        .add(() => ScrollTrigger.refresh())
        .add(() => {
          animateTextH(oldParts.headlines, 'hide', 0);
          animateTextP(oldParts.paragraphs, 'hide', 0);
          animateCtn(oldParts.ctns, 'hide', 0);
          animateSlide(oldParts.slides, 'hide', 0);
          animateSlide(newParts.slides, 'reveal', 0);
        })
        .to({}, { duration: DUR.m })
        .add(() => {
          animateTextH(newParts.headlines, 'reveal', 0);
          animateTextP(newParts.paragraphs, 'reveal', 0);
          animateCtn(newParts.ctns, 'reveal', DUR.s);
        })
        .to({}, { duration: DUR.s })
        .set(oldPanel, { display: 'none' });

      oldTrigger.classList.remove('is-active');
      trigger.classList.add('is-active');
      activeIndex = newIndex;
    };

    trigger.addEventListener('click', onClick);
    handlers.push([trigger, onClick]);
  });

  return () => {
    for (const [el, fn] of handlers) el.removeEventListener('click', fn);
  };
}

export function initTabs(): () => void {
  /*
   * `[data-tabs-hero]` lo gobierna `heroTabs` en chrome.ts, que hace un
   * cruce distinto (sólo imagen, sin texto). Se excluye para que no lo
   * manejen dos módulos a la vez.
   */
  const components = qa<HTMLElement>('[data-tabs]').filter((el) => !el.hasAttribute('data-tabs-hero'));

  const cleanups = components.map(setupTabs);
  return () => {
    for (const c of cleanups) c();
  };
}
