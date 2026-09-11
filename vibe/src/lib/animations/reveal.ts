/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Entradas por scroll — port de `initScrollElementsReveal()` del original
 * (referencia-web-original/slater-custom.js, líneas 616-970 y 1284-1424).
 *
 * El marcado declara qué animación quiere con `data-scroll-reveal`:
 *
 *   a      titulares por caracteres, con rotación 3D  (acentos)
 *   h      titulares por caracteres, agrupados en palabras
 *   p      párrafos por líneas, enmascaradas
 *   ctn    contenedores: desplazamiento + opacidad
 *   line   filetes: barrido con clip-path
 *   slide  imágenes de carrusel: clip-path en polígono + zoom
 *
 * `data-scroll-reveal="w"` en un ancestro agrupa a sus descendientes para
 * que compartan disparador y entren en cascada, en vez de uno a uno.
 *
 * Importante: el CSS oculta con `[data-prevent-flicker]{visibility:hidden}`
 * y es este módulo quien devuelve la visibilidad. Si no se ejecuta, buena
 * parte de la página queda invisible — no es un fallo de maquetación.
 */

import { gsap, ScrollTrigger, SplitText } from './gsap';
import { DUR, STAGGER, DELAY_REVEAL, BREAKPOINT } from './constants';

export type Direction = 'reveal' | 'hide' | 'initial';
export type Animator = (targets: Element[], direction: Direction, delay?: number) => void;

/**
 * SplitText es caro y destructivo (reescribe el DOM del elemento), así que
 * cada elemento se parte una sola vez. El original lo cacheaba en
 * `element._split`; un WeakMap hace lo mismo sin ensuciar el nodo y deja
 * que el recolector se lleve la entrada cuando el elemento desaparece.
 */
const splits = new WeakMap<Element, SplitText>();

/** Marcas que deja SplitText en el DOM; su ausencia delata un split revertido. */
const SPLIT_NODES = '.split-char, .split-word, .split-line';

function splitOnce(element: Element, vars: SplitText.Vars): SplitText {
  const cached = splits.get(element);

  // Ojo con el ciclo de vida: `gsap.context().revert()` revierte también los
  // SplitText —deshace el troceado y restaura el HTML original—, pero esta
  // caché vive en el módulo y le sobrevive. Pasa en cada cambio de ruta (y en
  // dev, en el doble montaje de StrictMode). Reutilizar esa instancia daría
  // `chars` vacío y ninguna animación, sin lanzar ningún error.
  // Por eso no basta con "¿está cacheado?": hay que comprobar que el troceado
  // sigue existiendo en el DOM.
  if (cached && element.querySelector(SPLIT_NODES)) return cached;
  if (cached) cached.revert();

  const split = new SplitText(element, vars);
  splits.set(element, split);
  return split;
}

const isMobile = () => window.innerWidth < BREAKPOINT;

/** Acentos: carácter a carácter, girando sobre su base. */
export const animateTextA: Animator = (targets, direction, delay) => {
  for (const [i, element] of targets.entries()) {
    if (!element.textContent?.trim()) continue;

    const { chars } = splitOnce(element, {
      type: 'chars',
      tag: 'span',
      charsClass: 'split-char',
      smartWrap: true,
    });
    const elementDelay = i * STAGGER;

    if (direction === 'reveal') {
      gsap.fromTo(
        chars,
        { opacity: 0, rotateX: 90, x: '10rem', transformOrigin: 'center bottom' },
        {
          opacity: 1,
          rotateX: 0,
          x: '0rem',
          duration: DUR.l,
          delay: (delay ?? DELAY_REVEAL) + elementDelay,
          stagger: STAGGER,
          ease: 'Out',
          overwrite: true,
        },
      );
    } else if (direction === 'hide') {
      gsap.to(chars, {
        opacity: 0,
        rotateX: -90,
        x: '-10rem',
        transformOrigin: 'center top',
        duration: DUR.s,
        delay: delay ?? 0,
        stagger: STAGGER * 0.5,
        ease: 'In',
        overwrite: true,
      });
    } else {
      gsap.set(chars, {
        opacity: 0,
        rotateX: -90,
        x: '-10rem',
        transformOrigin: 'center top',
      });
    }
  }
};

/** Titulares: caracteres agrupados por palabra para que no se corten. */
export const animateTextH: Animator = (targets, direction, delay) => {
  for (const [i, element] of targets.entries()) {
    if (!element.textContent?.trim()) continue;

    const { chars } = splitOnce(element, {
      type: 'words,chars',
      tag: 'span',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });
    const elementDelay = i * STAGGER;

    if (direction === 'reveal') {
      gsap.fromTo(
        chars,
        { opacity: 0, yPercent: 50, rotateY: 90 },
        {
          opacity: 1,
          yPercent: 0,
          rotateY: 0,
          duration: DUR.l,
          delay: (delay ?? DELAY_REVEAL) + elementDelay,
          stagger: STAGGER * 0.5,
          ease: 'Out',
          overwrite: true,
        },
      );
    } else if (direction === 'hide') {
      gsap.to(chars, {
        opacity: 0,
        yPercent: -50,
        rotateY: -90,
        duration: DUR.s,
        delay: delay ?? 0,
        stagger: STAGGER * 0.25,
        ease: 'In',
        overwrite: true,
      });
    } else {
      gsap.set(chars, { opacity: 0, yPercent: 50, rotateY: 90 });
    }
  }
};

/** Párrafos: línea a línea, subiendo tras una máscara. */
export const animateTextP: Animator = (targets, direction, delay) => {
  for (const [i, element] of targets.entries()) {
    if (!element.textContent?.trim()) continue;

    const existing = splits.get(element);
    const { lines } = splitOnce(element, {
      type: 'lines,words',
      tag: 'span',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      mask: 'lines',
    });

    // Al partir por líneas, un <br> suelto se come el salto: el original
    // duplica el que no venga ya seguido de otro. Sólo la primera vez.
    if (!existing) {
      for (const br of element.querySelectorAll('br')) {
        if (br.nextSibling?.nodeName !== 'BR') br.after(document.createElement('br'));
      }
    }

    const elementDelay = i * STAGGER;

    if (direction === 'reveal') {
      gsap.fromTo(
        lines,
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: DUR.l,
          delay: (delay ?? DELAY_REVEAL) + elementDelay,
          stagger: STAGGER,
          ease: 'Out',
          overwrite: true,
        },
      );
    } else if (direction === 'hide') {
      gsap.to(lines, {
        yPercent: -110,
        duration: DUR.s,
        delay: delay ?? 0,
        stagger: STAGGER * 0.5,
        ease: 'In',
        overwrite: true,
      });
    } else {
      gsap.set(lines, { yPercent: 110 });
    }
  }
};

/** Contenedores: suben y aparecen. El desplazamiento es mayor en móvil. */
export const animateCtn: Animator = (targets, direction, delay) => {
  if (!targets.length) return;
  const initialY = isMobile() ? '11.54rem' : '3.333rem';

  if (direction === 'reveal') {
    gsap.fromTo(
      targets,
      { opacity: 0, y: initialY },
      {
        opacity: 1,
        y: '0rem',
        duration: DUR.l,
        delay: delay ?? DELAY_REVEAL,
        stagger: STAGGER,
        ease: 'Out',
        overwrite: true,
      },
    );
  } else if (direction === 'hide') {
    gsap.to(targets, {
      opacity: 0,
      y: '0rem',
      duration: DUR.s,
      delay: delay ?? 0,
      stagger: STAGGER * 0.5,
      ease: 'In',
      overwrite: true,
    });
  } else {
    gsap.set(targets, { opacity: 0, y: initialY });
  }
};

/** Filetes: se dibujan de arriba abajo. */
export const animateLine: Animator = (targets, direction, delay) => {
  if (!targets.length) return;

  if (direction === 'reveal') {
    gsap.fromTo(
      targets,
      { clipPath: 'inset(0% 0% 100% 0%)' },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        duration: DUR.l,
        delay: delay ?? DELAY_REVEAL,
        stagger: STAGGER,
        ease: 'Out',
        overwrite: true,
      },
    );
  } else if (direction === 'hide') {
    gsap.to(targets, {
      clipPath: 'inset(100% 0% 0% 0%)',
      duration: DUR.s,
      delay: delay ?? 0,
      stagger: STAGGER * 0.5,
      ease: 'In',
      overwrite: true,
    });
  } else {
    gsap.set(targets, { clipPath: 'inset(0% 0% 100% 0%)' });
  }
};

/** Diapositivas: el marco se abre en diagonal y la imagen desamplía. */
export const animateSlide: Animator = (targets, direction, delay) => {
  if (!targets.length) return;
  // Alguna diapositiva es un marco vacío; sin esto GSAP avisa por destino vacío.
  const imgs = targets.map((el) => el.firstElementChild).filter(Boolean) as Element[];
  const tweenImgs = (vars: gsap.TweenVars, from?: gsap.TweenVars) => {
    if (!imgs.length) return;
    if (from) gsap.fromTo(imgs, from, vars);
    else gsap.to(imgs, vars);
  };

  if (direction === 'reveal') {
    gsap.fromTo(
      targets,
      { clipPath: 'polygon(100% 0%, 100% 0%, 101% 100%, 125% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        duration: DUR.l,
        delay: delay ?? DELAY_REVEAL,
        ease: 'InOut',
        overwrite: true,
      },
    );
    tweenImgs(
      { scale: 1, xPercent: 0, duration: DUR.l, delay: delay ?? DELAY_REVEAL, ease: 'InOut', overwrite: true },
      { scale: 1.5, xPercent: 25 },
    );
  } else if (direction === 'hide') {
    gsap.fromTo(
      targets,
      { clipPath: 'polygon(0% 0%, 100% 0%, 125% 100%, 0% 100%)' },
      {
        clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
        duration: DUR.l,
        delay: delay ?? 0,
        ease: 'InOut',
        overwrite: true,
      },
    );
    tweenImgs({ scale: 1.5, xPercent: -25, duration: DUR.l, delay: delay ?? 0, ease: 'InOut', overwrite: true });
  } else {
    gsap.set(targets, { clipPath: 'inset(100% 0% 0% 0%)' });
    if (imgs.length) gsap.set(imgs, { scale: 1.5, xPercent: 25 });
  }
};

/** Tabla tipo → animador. El original repetía este bloque seis veces. */
const ANIMATORS: Record<string, Animator> = {
  a: animateTextA,
  h: animateTextH,
  p: animateTextP,
  ctn: animateCtn,
  line: animateLine,
  slide: animateSlide,
};

/**
 * En un carrusel, sólo la primera diapositiva debe animar: las demás
 * entrarían fuera de pantalla y llegarían ya "gastadas".
 * Port de `initScrollRevealFirst()`.
 */
function keepOnlyFirstSlideRevealing(root: ParentNode) {
  const slides = root.querySelectorAll('[data-reveal-first]');
  if (!slides.length) return;

  const groups = new Map<Element | null, Element[]>();
  for (const slide of slides) {
    const parent = slide.parentElement;
    if (!groups.has(parent)) groups.set(parent, []);
    groups.get(parent)!.push(slide);
  }

  for (const items of groups.values()) {
    for (const slide of items.slice(1)) {
      for (const el of slide.querySelectorAll('[data-scroll-reveal]')) {
        el.removeAttribute('data-scroll-reveal');
      }
    }
  }
}

/**
 * Registra todas las entradas por scroll dentro de `root`.
 * Devuelve la función de limpieza.
 */
export function initScrollReveal(root: ParentNode = document): () => void {
  keepOnlyFirstSlideRevealing(root);

  const triggers: ScrollTrigger[] = [];

  for (const [type, animate] of Object.entries(ANIMATORS)) {
    const elements = [...root.querySelectorAll(`[data-scroll-reveal="${type}"]`)];
    if (!elements.length) continue;

    // Agrupa por ancestro marcado como "w": comparten disparador.
    const groups = new Map<Element, Element[]>();
    for (const el of elements) {
      const key = el.closest('[data-scroll-reveal="w"]') ?? el;
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key)!.push(el);
    }

    for (const [trigger, items] of groups) {
      // Quitamos el velo antiflicker ANTES de fijar el estado inicial, o el
      // primer fotograma se vería sin animar.
      gsap.set(items, { visibility: 'visible' });

      // Un área de scroll horizontal mide el avance con su propio tween.
      const horizontal = trigger.closest('[data-scroll-horizontal]') as
        | (HTMLElement & { _horizontalTween?: gsap.core.Tween })
        | null;

      triggers.push(
        ScrollTrigger.create({
          trigger,
          containerAnimation: horizontal?._horizontalTween,
          start: horizontal ? 'left bottom' : 'top bottom',
          once: true,
          onEnter: () => animate(items, 'reveal'),
        }),
      );

      animate(items, 'initial');
    }
  }

  return () => {
    for (const t of triggers) t.kill();
  };
}

/**
 * Entrada del texto del preloader.
 *
 * Ahí el marcado usa `data-part` en vez de `data-scroll-reveal`: no hay
 * scroll que dispare nada, la cortina lo lanza todo a la vez. Los
 * contenedores llevan el retardo corto que usaba el original.
 */
export function revealPreloaderParts(root: ParentNode) {
  const parts = (type: string) => [...root.querySelectorAll(`[data-part="${type}"]`)];

  animateTextA(parts('a'), 'reveal');
  animateTextH(parts('h'), 'reveal');
  animateTextP(parts('p'), 'reveal');
  animateCtn(parts('ctn'), 'reveal', DUR.s);
  animateLine(parts('line'), 'reveal');
}

/**
 * Anima de golpe lo que ya esté en pantalla. Lo usan las transiciones de
 * página, donde no hay scroll que dispare nada.
 * Port de `animateVisibleElements()`.
 */
export function animateVisibleElements(root: ParentNode = document, direction: Direction) {
  for (const [type, animate] of Object.entries(ANIMATORS)) {
    const elements = [...root.querySelectorAll(`[data-scroll-reveal="${type}"], [data-part="${type}"]`)];
    const visible = elements.filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    });
    if (visible.length) animate(visible, direction, 0);
  }
}
