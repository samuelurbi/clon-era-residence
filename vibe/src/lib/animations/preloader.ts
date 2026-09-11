/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Preloader — port de `initPreloader()`, `animatePreloaederIntro()` y
 * `animatePreloaederShort()` del original (líneas 47-220).
 *
 * Dos variantes según `sessionStorage`:
 *
 *   intro  primera visita de la sesión: entra el texto, corre la barra de
 *          progreso durante 4 s y el arco se lanza hacia arriba
 *   short  visitas siguientes: sin texto ni barra, sólo el arco
 *
 * El arco se anima por variables CSS (`--arch-w`, `--arch-y`) que el CSS
 * heredado usa para dibujarlo; por eso se animan sobre el propio preloader
 * y no sobre un nodo concreto.
 *
 * Mientras corre, el scroll queda bloqueado: si no, el usuario puede
 * scrollear a ciegas por detrás de la cortina.
 */

import { gsap, CustomEase } from './gsap';
import { DUR, BREAKPOINT } from './constants';
import { lockScroll, unlockScroll, scrollToTop } from './scroll-lock';
import { revealPreloaderParts } from './reveal';

const SESSION_KEY = 'hasVisited';

/** sessionStorage revienta en modo privado de algunos navegadores. */
function readVisited(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

function markVisited() {
  try {
    sessionStorage.setItem(SESSION_KEY, 'true');
  } catch {
    /* sin sessionStorage siempre verá la intro; es el mal menor */
  }
}

/**
 * Curva de la barra de progreso: arranca rápida, se atasca a media carrera
 * y remata de golpe, imitando una descarga real.
 */
const LOADER_EASE =
  'M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1';

/**
 * Lanza el preloader. Devuelve una función para abortarlo (cambio de ruta
 * o desmontaje a mitad de la animación).
 */
export function runPreloader(onDone?: () => void): () => void {
  const preloader = document.querySelector<HTMLElement>('[data-preloader]');
  const master = document.querySelector('[data-master-preloader]');

  // Sin cortina no hay nada que animar: se sigue de largo.
  if (!preloader) {
    master?.remove();
    onDone?.();
    return () => {};
  }

  const short = readVisited();
  markVisited();

  const desktop = window.innerWidth >= BREAKPOINT;
  const archWstart = desktop ? '24vw' : '40vw';
  const archWcenter = desktop ? '36vw' : '50vw';
  const heroImgScale = desktop ? 0.75 : 1.15;

  const bgA = preloader.querySelector('.preloader_bg_a');
  const bgDecor = preloader.querySelector('.preloader_bg_decor');
  const progress = preloader.querySelectorAll('.preloader_progress_track');
  const content = preloader.querySelector('.preloader_ctn');
  const heroImg = document.querySelector('.hero-w_bg_master_img');

  CustomEase.create('loaderEase', LOADER_EASE);

  const topTimer = setTimeout(scrollToTop, 100);
  lockScroll();
  if (heroImg) gsap.set(heroImg, { scale: heroImgScale, transformOrigin: 'center top' });

  const tl = gsap.timeline();

  tl.set(preloader, { '--arch-w': archWstart, '--arch-y': '104vh' });

  if (short) {
    // Sin texto: la variante corta esconde el bloque de contenido entero.
    tl.set(content, { display: 'none' });
  } else {
    tl.add(() => revealPreloaderParts(preloader)).to({}, { duration: DUR.l });
  }

  tl.fromTo(bgA, { opacity: 0 }, { opacity: 0.05, duration: DUR.l, ease: 'Out' })
    .fromTo(bgDecor, { opacity: 0 }, { opacity: 1, duration: DUR.l, ease: 'Out' }, '<');

  // La barra de carga sólo existe en la intro.
  if (!short) {
    tl.fromTo(progress, { yPercent: -100 }, { yPercent: 0, duration: 4, ease: 'loaderEase' });
  }

  tl.fromTo(
    preloader,
    { '--arch-w': archWstart, '--arch-y': '104vh' },
    { '--arch-w': archWcenter, '--arch-y': '15vh', duration: DUR.l * 1.25, ease: 'InOut' },
    short ? '<' : undefined,
  )
    // El arco sale disparado hacia arriba y descubre el hero.
    .to(preloader, { '--arch-w': '125', '--arch-y': '-100vh', duration: DUR.l * 2, ease: 'diveIn' }, '<90%')
    .add(() => {
      // El hero desamplía a la vez, para que el corte no se note.
      if (heroImg) {
        gsap.fromTo(heroImg, { scale: heroImgScale }, { scale: 1, duration: DUR.l * 1.25, ease: 'InOut' });
      }
    }, '<')
    .add(() => onDone?.(), '<25%')
    .add(() => {
      unlockScroll();
      gsap.set(preloader, { display: 'none' });
    });

  // El master-preloader es la cortina inerte que evita el flash antes de
  // que arranque el JS; una vez hay timeline, sobra.
  master?.remove();

  return () => {
    clearTimeout(topTimer);
    tl.kill();
    unlockScroll();
    gsap.set(preloader, { display: 'none' });
  };
}
