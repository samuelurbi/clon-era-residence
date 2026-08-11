'use client';

/**
 * Slider — port de `initSlider()` del original (líneas 2060-2239).
 *
 * No usa ninguna librería: las diapositivas se apilan en el mismo hueco
 * (una `relative`, el resto `absolute`) y el cambio se orquesta con los
 * mismos animadores que los reveals, así que el texto entra igual dentro
 * del slider que fuera de él.
 *
 * Ojo con `initCarousel` del original: monta un carrusel con Swiper, pero
 * `data-carousel` no aparece en ninguna de las 29 páginas y el HTML nunca
 * carga la librería. Es código muerto; el slider de verdad es éste.
 *
 * Avance automático cada 6 s, pero sólo mientras el slider está a la vista
 * (IntersectionObserver) y la pestaña en primer plano: si no, al volver te
 * encontrarías la secuencia a mitad y la barra de progreso desincronizada.
 */

import { gsap, ScrollTrigger } from './gsap';
import { DUR } from './constants';
import { animateTextH, animateTextP, animateCtn, animateSlide } from './reveal';

/** Segundos que dura cada diapositiva antes de pasar sola. */
const AUTO_DURATION = 6;

/** Fracción del slider que debe verse para que arranque el automático. */
const VISIBLE_THRESHOLD = 0.2;

type Parts = {
  headlines: Element[];
  paragraphs: Element[];
  ctns: Element[];
  imgs: Element[];
};

const partsOf = (slide: Element): Parts => ({
  headlines: [...slide.querySelectorAll('[data-slider="h"]')],
  paragraphs: [...slide.querySelectorAll('[data-slider="p"]')],
  ctns: [...slide.querySelectorAll('[data-slider="ctn"]')],
  imgs: [...slide.querySelectorAll('[data-slider="img"]')],
});

function setupSlider(root: HTMLElement): () => void {
  const slides = [...root.querySelectorAll<HTMLElement>('[data-slider="slide"]')];
  const pag = root.querySelector<HTMLElement>('[data-slider="pag"]');
  const prevBtn = root.querySelector<HTMLElement>('[data-slider="prev"]');
  const nextBtn = root.querySelector<HTMLElement>('[data-slider="next"]');
  const currentEl = root.querySelector<HTMLElement>('[data-slider="current"]');
  const totalEl = root.querySelector<HTMLElement>('[data-slider="total"]');
  const nextNumEl = root.querySelector<HTMLElement>('[data-slider="next-num"]');
  const progressEl = root.querySelector<HTMLElement>('[data-slider="progress"]');

  if (!slides.length) return () => {};

  // Con una sola diapositiva no hay nada que paginar.
  if (slides.length === 1) {
    if (pag) pag.style.display = 'none';
    return () => {
      if (pag) pag.style.removeProperty('display');
    };
  }

  let current = 0;
  let previous: number | null = null;
  let animating = false;
  let autoTimer: ReturnType<typeof setInterval> | undefined;

  gsap.set(slides, { display: 'none', position: 'absolute' });
  gsap.set(slides[current], { display: 'block', position: 'relative' });

  /** Cruce entre la diapositiva saliente y la entrante. */
  const walk = () => {
    if (previous === null) return;
    const prevSlide = slides[previous];
    const currSlide = slides[current];
    const prev = partsOf(prevSlide);
    const curr = partsOf(currSlide);

    prevSlide.style.zIndex = '0';
    currSlide.style.zIndex = '1';
    gsap.killTweensOf([prevSlide, currSlide]);

    gsap
      .timeline({
        onComplete: () => {
          prevSlide.style.zIndex = 'auto';
          currSlide.style.zIndex = '1';
          animating = false;
        },
      })
      // La entrante pasa a ocupar el hueco y la saliente se superpone,
      // para que la altura del bloque no dé un salto durante el cruce.
      .set(currSlide, { display: 'block', position: 'relative' })
      .set(prevSlide, { display: 'block', position: 'absolute' })
      .add(() => {
        animateTextH(curr.headlines, 'initial');
        animateTextP(curr.paragraphs, 'initial');
        animateCtn(curr.ctns, 'initial');
        animateSlide(curr.imgs, 'initial');
      })
      // La entrante puede tener otra altura: sin refrescar, los
      // disparadores de scroll quedan midiendo contra la anterior.
      .add(() => ScrollTrigger.refresh())
      .add(() => {
        animateTextH(prev.headlines, 'hide', 0);
        animateTextP(prev.paragraphs, 'hide', 0);
        animateCtn(prev.ctns, 'hide', 0);
        animateSlide(prev.imgs, 'hide', 0);
        animateSlide(curr.imgs, 'reveal', 0);
      })
      .to({}, { duration: DUR.m })
      .add(() => {
        animateTextH(curr.headlines, 'reveal', 0);
        animateTextP(curr.paragraphs, 'reveal', 0);
        animateCtn(curr.ctns, 'reveal', DUR.s);
      })
      .to({}, { duration: DUR.s })
      .set(prevSlide, { display: 'none' });
  };

  const updateCounter = () => {
    if (currentEl) currentEl.textContent = String(current + 1);
    if (totalEl) totalEl.textContent = String(slides.length);
    // El «siguiente» da la vuelta al llegar al final.
    if (nextNumEl) nextNumEl.textContent = String(current === slides.length - 1 ? 1 : current + 2);
  };

  const goTo = (index: number) => {
    previous = current;
    current = index;
    animating = true;
    updateCounter();
    walk();
  };

  const goNext = () => goTo(current === slides.length - 1 ? 0 : current + 1);
  const goPrev = () => goTo(current === 0 ? slides.length - 1 : current - 1);

  const startProgress = () => {
    if (!progressEl) return;
    gsap.fromTo(progressEl, { width: '0%' }, { width: '100%', duration: AUTO_DURATION, ease: 'none' });
  };

  const stopProgress = () => {
    if (!progressEl) return;
    gsap.killTweensOf(progressEl);
    gsap.set(progressEl, { width: '0%' });
  };

  const stopAuto = () => {
    clearInterval(autoTimer);
    autoTimer = undefined;
    stopProgress();
  };

  const startAuto = () => {
    stopAuto();
    startProgress();
    autoTimer = setInterval(() => {
      goNext();
      startProgress();
    }, AUTO_DURATION * 1000);
  };

  updateCounter();

  // Sólo corre mientras se ve.
  const observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
    { threshold: VISIBLE_THRESHOLD },
  );
  observer.observe(root);

  const onVisibility = () => (document.hidden ? stopAuto() : startAuto());
  document.addEventListener('visibilitychange', onVisibility);

  const onPrev = () => {
    if (animating) return;
    goPrev();
    startAuto();
  };
  const onNext = () => {
    if (animating) return;
    startAuto();
    goNext();
  };

  prevBtn?.addEventListener('click', onPrev);
  nextBtn?.addEventListener('click', onNext);

  return () => {
    observer.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    prevBtn?.removeEventListener('click', onPrev);
    nextBtn?.removeEventListener('click', onNext);
    stopAuto();
  };
}

/**
 * `[data-slider]` marca tanto la raíz como cada pieza interna
 * (`slide`, `prev`, `next`…), así que sólo son raíces los que no llevan
 * valor: los `[data-slider=""]` del marcado.
 */
export function initSlider(): () => void {
  const roots = [...document.querySelectorAll<HTMLElement>('[data-slider]')].filter(
    (el) => !el.getAttribute('data-slider'),
  );

  const cleanups = roots.map(setupSlider);
  return () => {
    for (const c of cleanups) c();
  };
}
