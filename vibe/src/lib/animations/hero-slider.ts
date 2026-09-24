/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Slider de fondo del hero — propio de Bahía Mar, no viene de ERA.
 *
 * ERA tenía una foto con dos versiones (día/noche) que se cruzaban con un
 * fundido al pulsar «by day / by night» (`heroTabs`, ya retirado de
 * chrome.ts). El cliente quiere las cinco villas pasando en bucle con el
 * mismo barrido en cortina que usa el slider de los pilares, y que la
 * línea de nombres bajo el titular ilumine la villa que está en pantalla.
 *
 * Se reutiliza `animateSlide` (reveal.ts) tal cual: la entrante se abre en
 * diagonal por `clip-path` mientras su imagen desamplía, y la saliente se
 * cierra hacia el otro lado. Todas las capas miden lo mismo (10:9), así
 * que, a diferencia del slider general, no hace falta intercambiar
 * `relative`/`absolute` ni refrescar ScrollTrigger: la primera capa da la
 * altura y las demás van encima (theme.css). La saliente no se oculta con
 * `display: none` —dejaría sin altura al hueco cuando toca a la primera—,
 * queda cerrada por el propio `clip-path`.
 *
 * Avance automático cada 6 s, como el slider, sólo con el hero a la vista
 * y la pestaña en primer plano. Pulsar un nombre salta a esa villa.
 */

import { gsap } from './gsap';
import { DUR } from './constants';
import { animateSlide } from './reveal';

/** Segundos que se queda cada villa antes de pasar sola. */
const AUTO_DURATION = 6;

/** Fracción del hero que debe verse para que el bucle corra. */
const VISIBLE_THRESHOLD = 0.2;

const FULL = 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)';

export function initHeroSlider(): () => void {
  const root = document.querySelector<HTMLElement>('[data-hero-slider]');
  if (!root) return () => {};

  const slides = [...root.querySelectorAll<HTMLElement>('[data-hero-slide]')];
  const names = [...document.querySelectorAll<HTMLElement>('[data-hero-villa]')];
  if (slides.length < 2) return () => {};

  let current = 0;
  let animating = false;
  let autoTimer: ReturnType<typeof setInterval> | undefined;
  let settle: gsap.core.Tween | undefined;

  // Estado inicial: la primera a la vista, el resto cerradas.
  slides.forEach((slide, i) => {
    slide.style.zIndex = i === 0 ? '1' : '0';
    if (i === 0) gsap.set(slide, { clipPath: FULL });
    else animateSlide([slide], 'initial');
  });

  const markActive = (index: number) => {
    names.forEach((name, i) => name.classList.toggle('is-active', i === index));
  };

  const goTo = (index: number) => {
    if (index === current || animating) return;
    const prev = slides[current];
    const next = slides[index];

    animating = true;
    slides.forEach((slide) => (slide.style.zIndex = '0'));
    prev.style.zIndex = '1';
    next.style.zIndex = '2';

    gsap.killTweensOf([prev, next, prev.firstElementChild, next.firstElementChild].filter(Boolean));
    animateSlide([next], 'reveal', 0);
    animateSlide([prev], 'hide', 0);
    settle?.kill();
    settle = gsap.delayedCall(DUR.l, () => {
      animating = false;
    });

    current = index;
    markActive(index);
  };

  const goNext = () => goTo(current === slides.length - 1 ? 0 : current + 1);

  const stopAuto = () => {
    clearInterval(autoTimer);
    autoTimer = undefined;
  };

  /*
   * El hero está a la vista desde el primer instante, pero durante el
   * preloader (~9 s) nadie lo ve: si el bucle arrancara ya, al levantarse
   * la cortina la primera villa habría pasado. Se espera a que el
   * preloader se haya retirado (termina con `display: none`).
   */
  const preloader = document.querySelector<HTMLElement>('[data-preloader]');
  const preloaderDone = () => !preloader || getComputedStyle(preloader).display === 'none';
  let waitTimer: ReturnType<typeof setInterval> | undefined;

  const startAuto = () => {
    stopAuto();
    clearInterval(waitTimer);
    if (preloaderDone()) {
      autoTimer = setInterval(goNext, AUTO_DURATION * 1000);
      return;
    }
    waitTimer = setInterval(() => {
      if (!preloaderDone()) return;
      clearInterval(waitTimer);
      autoTimer = setInterval(goNext, AUTO_DURATION * 1000);
    }, 250);
  };

  markActive(0);

  const observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
    { threshold: VISIBLE_THRESHOLD },
  );
  observer.observe(root);

  const onVisibility = () => (document.hidden ? stopAuto() : startAuto());
  document.addEventListener('visibilitychange', onVisibility);

  // Los nombres enlazan a la ficha de cada villa, pero en el hero hacen de
  // pestañas: pulsar salta a esa villa en el fondo y reinicia la cuenta.
  const handlers = names.map((name, i) => {
    const onClick = (event: Event) => {
      event.preventDefault();
      if (animating) return;
      goTo(i);
      startAuto();
    };
    name.addEventListener('click', onClick);
    return [name, onClick] as const;
  });

  return () => {
    observer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    for (const [name, fn] of handlers) name.removeEventListener('click', fn);
    stopAuto();
    clearInterval(waitTimer);
    settle?.kill();
  };
}
