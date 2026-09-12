/* ============================================================
 *  ANIMATIONS — 21 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';

/* ============================================================
   lib/animations/constants.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Constantes de animación, tomadas literalmente del JS original del sitio
 * (referencia-web-original/slater-custom.js, cabecera del fichero).
 *
 * Son la unidad de medida de todo el movimiento del sitio: tocar `DUR.m`
 * recalibra decenas de transiciones a la vez.
 */

/** Duraciones en segundos. */
export const DUR = {
  s: 0.4,
  m: 0.8,
  l: 1.2,
} as const;

/** Desfase entre elementos de una misma secuencia. */
export const STAGGER = 0.1;

/** Retardo antes de que arranque una entrada por scroll. */
export const DELAY_REVEAL = 0.3;

/**
 * Punto de corte a móvil/tablet. Coincide con el breakpoint de Webflow
 * (`@media screen and (max-width: 991px)`), donde además se redefinen
 * 97 tokens — incluido `--_special-units---scale-ratio`, que reescala
 * toda la tipografía de golpe.
 */
export const BREAKPOINT = 992;

/** Curvas propias del proyecto, en formato CustomEase. */
export const EASES = {
  InOut: '0.75,0,0.25,1',
  Out: '0.25,1,0.5,1',
  In: '0.5,0,0.75,0',
  Ease: '0.25,0.1,0.25,1',
  Write: '0.333,0,0.667,1',
  diveIn: '0.6,0,0,1',
  horScroll: '0.25,0,0.75,1',
} as const;

export type EaseName = keyof typeof EASES;

/** Easing exponencial de Lenis — https://www.desmos.com/calculator/brs54l4xou */
export const LENIS_EASING = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

/** Ajustes de Lenis global y de contenedores con [data-lenis-scroll]. */
export const LENIS_OPTIONS = {
  global: {
    duration: 1.2,
    smoothWheel: true,
    touchMultiplier: 2,
    easing: LENIS_EASING,
    infinite: false,
  },
  local: {
    duration: 0.6,
    smoothWheel: true,
    touchMultiplier: 2,
    easing: LENIS_EASING,
    infinite: false,
  },
} as const;

/* ============================================================
   lib/animations/gsap.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Punto único de configuración de GSAP.
 *
 * Importa SIEMPRE gsap desde aquí, nunca desde 'gsap' directamente: así
 * los plugins y las curvas propias quedan registrados una sola vez. Al ser
 * un módulo ES, el cuerpo se ejecuta una única vez por bundle de cliente.
 */






// Los plugins tocan el DOM: en el render de servidor no hay nada que registrar.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

  for (const [name, curve] of Object.entries(EASES)) {
    // Idempotente: volver a crear una curva con el mismo nombre la sustituye.
    CustomEase.create(name, curve);
  }

  // Sin esto, GSAP "salta" tras un frame largo y desincroniza el scroll suave.
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, CustomEase, SplitText };

/* ============================================================
   lib/animations/scroll-lock.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Registro de la instancia de Lenis y bloqueo de scroll.
 *
 * En el original, `lenis` era una variable global del script y cualquier
 * función podía pararlo. Aquí Lenis lo crea `SmoothScroll` dentro de React,
 * así que hace falta un punto de encuentro: el proveedor la registra al
 * montarse y los módulos de animación la piden por aquí.
 *
 * Port de `lockScroll()`, `unlockScroll()` y `scrollToTop()`.
 */


let instance: Lenis | null = null;

export function registerLenis(lenis: Lenis | null) {
  instance = lenis;
}

export function getLenis(): Lenis | null {
  return instance;
}

/* --------------------------------------------------------------
 *  Bloqueo de scroll
 *
 *  El original hacía `overflow: hidden` en el <html> y compensaba con
 *  `padding-right` en el body. Eso arregla a los hijos del body, pero no
 *  al viewport de maquetación: al desaparecer la barra, `clientWidth`
 *  crecía 15px y la página daba un brinco lateral al bloquear y otro al
 *  soltar — visible justo al terminar el preloader.
 *
 *  Aquí el desbordamiento no se toca. La barra se fuerza siempre presente
 *  desde CSS (`html { overflow-y: scroll }`) y el bloqueo se hace cortando
 *  las vías de entrada: rueda, táctil, teclas de navegación y, como red,
 *  devolver la posición si algo consigue moverla (arrastrar la barra).
 * -------------------------------------------------------------- */

let locked = false;
let lockedY = 0;

/** Teclas que desplazan la página y hay que neutralizar mientras se bloquea. */
const SCROLL_KEYS = new Set([
  'ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' ', 'Spacebar',
]);

const block = (e: Event) => e.preventDefault();

const blockKeys = (e: KeyboardEvent) => {
  // `target` puede ser `window` (no un Element) cuando el evento llega sin
  // foco en nada: sin esta comprobación, `.closest` lanza y el manejador
  // muere antes de cancelar la tecla.
  const target = e.target;
  if (target instanceof Element && target.closest('input, textarea, select, [contenteditable]')) {
    return; // no estorbar a quien esté escribiendo en el formulario del modal
  }
  if (SCROLL_KEYS.has(e.key)) e.preventDefault();
};

const keepPosition = () => {
  if (locked) window.scrollTo(0, lockedY);
};

export function lockScroll() {
  if (locked) return;
  locked = true;
  lockedY = window.scrollY;
  instance?.stop();

  // `passive: false` es obligatorio: sin él el navegador ignora el
  // preventDefault en wheel y touchmove.
  window.addEventListener('wheel', block, { passive: false });
  window.addEventListener('touchmove', block, { passive: false });
  window.addEventListener('keydown', blockKeys);
  window.addEventListener('scroll', keepPosition);
}

export function unlockScroll() {
  if (!locked) return;
  locked = false;
  window.removeEventListener('wheel', block);
  window.removeEventListener('touchmove', block);
  window.removeEventListener('keydown', blockKeys);
  window.removeEventListener('scroll', keepPosition);
  instance?.start();
}

/**
 * Arriba del todo, por las tres vías: el navegador no coincide siempre.
 *
 * Actualiza también la posición retenida — el preloader llama a esto
 * DESPUÉS de bloquear, y sin esto la red de seguridad lo devolvería a
 * donde estuviera la página al recargar a media altura.
 */
export function scrollToTop() {
  lockedY = 0;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  instance?.scrollTo(0, { immediate: true });
}

/* ============================================================
   lib/animations/reveal.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

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

/* ============================================================
   lib/animations/accordion.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Acordeón y tips en móvil — port de `initAccordion()` y `initModalTip()`.
 *
 * Los dos van juntos porque comparten idea: contenido que se despliega bajo
 * demanda. El acordeón lo hace en línea; el tip, en un panel que sube desde
 * abajo y sólo existe en móvil (en escritorio ese contenido se muestra como
 * etiqueta flotante junto al cursor, ver `floatingTips` en ui.ts).
 */





const qa__accordion = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__accordion = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/* ------------------------------------------------------------------
 *  Acordeón
 * ------------------------------------------------------------------ */

/**
 * Sólo una tarjeta abierta a la vez: abrir una cierra la anterior.
 *
 * El original guardaba la función de cierre colgada del propio nodo
 * (`card.closeFunc = close`) para poder llamarla desde otra tarjeta. Aquí se
 * usa un Map, que hace lo mismo sin añadir propiedades al DOM.
 */
function accordion(): () => void {
  const cards = qa__accordion<HTMLElement>('[data-accordion-card]').filter(
    // El atributo marca también las partes internas; las tarjetas son las
    // que no llevan valor.
    (el) => !el.getAttribute('data-accordion-card'),
  );
  if (!cards.length) return () => {};

  const closers = new Map<HTMLElement, () => void>();
  const cleanups: Array<() => void> = [];
  let openCard: HTMLElement | null = null;

  for (const card of cards) {
    const content = q__accordion<HTMLElement>('[data-accordion-card="content"]', card);
    if (!content) continue;

    const plus = q__accordion('[data-ico-plus]', card);
    const paragraphs = qa__accordion('[data-accordion-card="p"]', card);
    const ctns = qa__accordion('[data-accordion-card="ctn"]', card);

    gsap.set(content, { height: 0, overflow: 'hidden' });

    const open = () => {
      card.classList.add('is-active');
      // `height: auto` animado: GSAP mide el destino y vuelve a auto al
      // acabar, así el contenido sigue siendo fluido después.
      gsap.to(content, {
        height: 'auto',
        duration: DUR.l,
        ease: 'Out',
        onComplete: () => ScrollTrigger.refresh(),
      });
      gsap.fromTo(plus, { rotate: 0 }, { rotate: -45, duration: DUR.m, ease: 'InOut', overwrite: true });
      animateTextP(paragraphs, 'reveal');
      animateCtn(ctns, 'reveal');
    };

    const close = () => {
      card.classList.remove('is-active');
      gsap.to(content, {
        height: 0,
        duration: DUR.l,
        ease: 'Out',
        overwrite: true,
        onComplete: () => ScrollTrigger.refresh(),
      });
      gsap.to(plus, { rotate: -90, duration: DUR.m, ease: 'InOut', overwrite: true });
      animateTextP(paragraphs, 'hide', 0);
      animateCtn(ctns, 'hide', 0);
    };

    closers.set(card, close);

    const onClick = () => {
      if (openCard && openCard !== card) closers.get(openCard)?.();

      if (openCard !== card) {
        open();
        openCard = card;
      } else {
        close();
        openCard = null;
      }
    };

    card.addEventListener('click', onClick);
    cleanups.push(() => card.removeEventListener('click', onClick));
  }

  // Las tarjetas arrancan plegadas: la altura del documento ha cambiado.
  ScrollTrigger.refresh();

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Tip como panel, sólo en móvil
 * ------------------------------------------------------------------ */

function tipModals(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(max-width: ${BREAKPOINT - 1}px)`, () => {
    const cleanups: Array<() => void> = [];

    for (const btn of qa__accordion<HTMLElement>('[data-modal-tip-btn]')) {
      const id = btn.getAttribute('data-modal-tip-btn');
      const popup = q__accordion<HTMLElement>(`[data-modal-tip="${id}"]`);
      if (!popup) continue;

      const container = q__accordion<HTMLElement>('[data-modal-container]', popup);
      const overlay = q__accordion<HTMLElement>('[data-modal-over]', popup);
      const closeBtns = qa__accordion<HTMLElement>('[data-modal-close]', popup);

      let isOpen = false;
      gsap.set(popup, { display: 'none' });

      const open = () => {
        gsap.set([popup, overlay], { display: 'block' });
        gsap.fromTo(container, { yPercent: 125 }, { yPercent: 0, duration: DUR.l, ease: 'Out', overwrite: true });
        gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: DUR.l, ease: 'Out', overwrite: true });
        lockScroll();
      };

      const close = () => {
        gsap.to(container, {
          yPercent: 125,
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

      btn.addEventListener('click', onOpen);
      for (const c of closeBtns) c.addEventListener('click', onClose);

      cleanups.push(() => {
        btn.removeEventListener('click', onOpen);
        for (const c of closeBtns) c.removeEventListener('click', onClose);
        if (isOpen) unlockScroll();
      });
    }

    return () => {
      for (const c of cleanups) c();
    };
  });

  return () => mm.revert();
}

export function initAccordion(): () => void {
  const cleanups = [accordion(), tipModals()];
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/chrome.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Cromo global: lo que vive por encima de las secciones y reacciona al
 * scroll en todas las páginas.
 *
 * Port de `initCookies`, `initThemeChange`, `initLogo`, `initScrollBar`,
 * `initPins` y `initTabsHero` del original.
 */




const q__chrome = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const qa__chrome = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

/* ------------------------------------------------------------------
 *  Aviso de cookies
 * ------------------------------------------------------------------ */

/**
 * Sube desde abajo al cargar y se retira al elegir. La elección se guarda
 * en localStorage: si ya hay una, el aviso ni se muestra.
 *
 * Sin esto el aviso se queda fijo tapando contenido para siempre, porque
 * el marcado no trae ningún mecanismo de cierre propio.
 */
function cookieNotice(): () => void {
  const banner = q__chrome<HTMLElement>('[data-cookies]');
  if (!banner) return () => {};

  let stored: string | null = null;
  try {
    stored = localStorage.getItem('cookies');
  } catch {
    /* modo privado: se mostrará cada vez, como en el original */
  }

  if (stored) {
    banner.remove();
    return () => {};
  }

  gsap.fromTo(banner, { yPercent: 100 }, { yPercent: 0, duration: DUR.m, delay: DELAY_REVEAL, ease: 'Out' });

  const dismiss = (value: string) => {
    try {
      localStorage.setItem('cookies', value);
    } catch {
      /* si no se puede guardar, al menos se cierra en esta visita */
    }
    gsap.to(banner, { yPercent: 100, duration: DUR.m, ease: 'In', onComplete: () => banner.remove() });
  };

  const accept = q__chrome('[data-cookies="accept"]');
  const decline = q__chrome('[data-cookies="decline"]');
  const onAccept = () => dismiss('accepted');
  const onDecline = () => dismiss('declined');

  accept?.addEventListener('click', onAccept);
  decline?.addEventListener('click', onDecline);

  return () => {
    accept?.removeEventListener('click', onAccept);
    decline?.removeEventListener('click', onDecline);
  };
}

/* ------------------------------------------------------------------
 *  Cambio de tema al pasar secciones
 * ------------------------------------------------------------------ */

/** Las tres paletas y qué clase pone cada `data-bg`. */
const THEMES = [
  { bg: 'color', add: 'theme_on-color', remove: ['theme_on-light', 'theme_on-dark'] },
  { bg: 'light', add: 'theme_on-light', remove: ['theme_on-dark', 'theme_on-color'] },
  { bg: 'dark', add: 'theme_on-dark', remove: ['theme_on-light', 'theme_on-color'] },
] as const;

/**
 * El logo, el menú y la barra de scroll flotan sobre el contenido y tienen
 * que cambiar de color según el fondo que tengan detrás en cada momento.
 *
 * Cada elemento marcado con `data-theme` recibe su propio disparador por
 * sección, calibrado a la altura de SU centro: dos elementos a distinta
 * altura cambian de color en momentos distintos, que es lo que hace que el
 * efecto parezca continuo. Los que caen fuera del ancho de la sección se
 * saltan (el original soporta secciones a media pantalla).
 */
function themeChange(): () => void {
  const themed = qa__chrome<HTMLElement>('[data-theme]');
  if (!themed.length) return () => {};

  const triggers: ScrollTrigger[] = [];

  for (const { bg, add, remove } of THEMES) {
    for (const section of qa__chrome<HTMLElement>(`[data-bg="${bg}"]`)) {
      if (getComputedStyle(section).display === 'none') continue;
      const sectionRect = section.getBoundingClientRect();

      for (const el of themed) {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        if (centerX < sectionRect.left || centerX > sectionRect.right) continue;

        const offset = rect.top + rect.height / 2;
        const apply = () => {
          el.classList.add(add);
          el.classList.remove(...remove);
        };

        triggers.push(
          ScrollTrigger.create({
            trigger: section,
            start: () => `top top+=${offset}`,
            end: () => `bottom top+=${offset}`,
            onEnter: apply,
            onEnterBack: apply,
          }),
        );
      }
    }
  }

  return () => {
    for (const t of triggers) t.kill();
  };
}

/* ------------------------------------------------------------------
 *  Logo giratorio
 * ------------------------------------------------------------------ */

/**
 * La flor gira sola a velocidad constante y acelera con el scroll,
 * invirtiéndose si subes. Al parar vuelve a su ritmo base.
 *
 * No arranca a reaccionar hasta el primer gesto real del usuario: si no,
 * el ajuste de posición inicial del navegador ya la haría girar sola.
 */
function rotatingLogo(): () => void {
  const logo = q__chrome('.header-logo');
  if (!logo) return () => {};

  const bg = qa__chrome<HTMLElement>('.header-logo_bg', logo).find((el) => getComputedStyle(el).display !== 'none');
  if (!bg) return () => {};

  const state = { speed: 30 };
  let lastDir = 1;
  let deg = 0;
  let userScrolled = false;
  let returnTimer: ReturnType<typeof setTimeout>;

  const markScrolled = () => {
    userScrolled = true;
  };
  window.addEventListener('wheel', markScrolled, { once: true });
  window.addEventListener('touchmove', markScrolled, { once: true });

  // El giro va por ticker, no por tween: es continuo y sin final.
  const spin = (_time: number, deltaTime: number) => {
    // Un frame largo (pestaña de fondo) daría un salto enorme; se acota.
    const dt = Math.min(deltaTime, 100);
    deg += state.speed * (dt / 1000);
    gsap.set(bg, { rotation: deg, transformOrigin: 'center center' });
  };
  gsap.ticker.add(spin);

  const onScroll = ({ velocity }: { velocity: number }) => {
    if (!userScrolled) return;
    if (velocity !== 0) lastDir = velocity > 0 ? 1 : -1;

    gsap.to(state, {
      speed: lastDir * (30 + Math.abs(velocity) * 10),
      duration: 0.3,
      ease: 'Out',
      overwrite: true,
    });

    clearTimeout(returnTimer);
    returnTimer = setTimeout(() => {
      gsap.to(state, { speed: lastDir * 30, duration: DUR.l, ease: 'Out' });
    }, 100);
  };

  const lenis = getLenis();
  lenis?.on('scroll', onScroll);

  return () => {
    window.removeEventListener('wheel', markScrolled);
    window.removeEventListener('touchmove', markScrolled);
    clearTimeout(returnTimer);
    gsap.ticker.remove(spin);
    lenis?.off('scroll', onScroll);
  };
}

/* ------------------------------------------------------------------
 *  Barra de progreso de scroll (el «00»)
 * ------------------------------------------------------------------ */

/**
 * Muestra el avance de 00 a 100 y además **se puede arrastrar** para
 * navegar por la página. Sólo en escritorio.
 */
function scrollBar(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const bar = q__chrome<HTMLElement>('[data-s-bar]');
    if (!bar) return;

    const thumb = q__chrome<HTMLElement>('[data-s-bar-thumb]', bar);
    const label = q__chrome<HTMLElement>('[data-s-bar-label]', bar);

    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        bar.style.setProperty('--progress', `${self.progress * 100}%`);
        if (label) label.textContent = String(Math.round(self.progress * 100)).padStart(2, '0');
      },
    });

    if (!thumb) return;

    let dragging = false;

    const onEnter = () => {
      document.body.style.cursor = 'grab';
    };
    const onLeave = () => {
      if (!dragging) document.body.style.cursor = '';
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      thumb.setPointerCapture(e.pointerId);
      document.body.style.cursor = 'grabbing';
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      const rect = bar.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      getLenis()?.scrollTo(progress * maxScroll, { duration: 3.2 });
    };
    const onUp = () => {
      dragging = false;
      document.body.style.cursor = 'grab';
    };

    thumb.addEventListener('pointerenter', onEnter);
    thumb.addEventListener('pointerleave', onLeave);
    thumb.addEventListener('pointerdown', onDown);
    thumb.addEventListener('pointermove', onMove);
    thumb.addEventListener('pointerup', onUp);

    return () => {
      thumb.removeEventListener('pointerenter', onEnter);
      thumb.removeEventListener('pointerleave', onLeave);
      thumb.removeEventListener('pointerdown', onDown);
      thumb.removeEventListener('pointermove', onMove);
      thumb.removeEventListener('pointerup', onUp);
      document.body.style.cursor = '';
    };
  });

  return () => mm.revert();
}

/* ------------------------------------------------------------------
 *  Hotspots del render
 * ------------------------------------------------------------------ */

/**
 * Cada pin late con anillos que se expanden en bucle, y su icono `+` gira
 * al pasar por encima.
 */
function pins(): () => void {
  const all = qa__chrome<HTMLElement>('[data-pin]');
  if (!all.length) return () => {};

  const cleanups: Array<() => void> = [];

  for (const pin of all) {
    const pulses = qa__chrome('[data-pin-pulse]', pin);
    const plus = q__chrome('[data-ico-plus="v"]', pin);
    const size = pin.offsetWidth;

    if (pulses.length) {
      const tween = gsap.fromTo(
        pulses,
        { opacity: 1, width: size, height: size },
        {
          opacity: 0,
          width: size * 1.6,
          height: size * 1.6,
          duration: DUR.l,
          ease: 'In',
          stagger: 0.2,
          repeat: -1,
        },
      );
      cleanups.push(() => tween.kill());
    }

    if (plus) {
      const forward = () =>
        gsap.fromTo(plus, { rotate: 0 }, { rotate: -90, duration: DUR.m, ease: 'Out', overwrite: true });
      const reverse = () => gsap.to(plus, { rotate: -180, duration: DUR.m, ease: 'Out', overwrite: true });

      pin.addEventListener('mouseenter', forward);
      pin.addEventListener('mouseleave', reverse);
      cleanups.push(() => {
        pin.removeEventListener('mouseenter', forward);
        pin.removeEventListener('mouseleave', reverse);
      });
    }
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  (Aquí vivía el switch BY DAY / BY NIGHT del hero de ERA, `heroTabs`.
 *  Bahía Mar no usa las dos versiones del render: el fondo del hero es
 *  un slider de las cinco villas, en lib/animations/hero-slider.ts.)
 * ------------------------------------------------------------------ */

/* ------------------------------------------------------------------
 *  Enlace de la página actual
 * ------------------------------------------------------------------ */

/** Clase con la que el CSS heredado resalta el enlace activo. */
const CURRENT_CLASS = 'w--current';

/**
 * Marca en la navegación el enlace que apunta a la página en la que estás.
 *
 * En el original lo escribía Webflow en el HTML de cada página, así que al
 * portar el marcado desde la home todas las páginas heredaban el estado de
 * la home: ningún enlace quedaba resaltado. Aquí se calcula en cliente.
 *
 * Vive en la capa de animación porque ésta ya se reinicia en cada cambio de
 * ruta, que es justo cuando hay que recalcularlo.
 */
function markCurrentLink(): () => void {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const marked: HTMLAnchorElement[] = [];

  /*
   * Antes de marcar hay que DESMARCAR.
   *
   * El marcado se portó desde la home, donde Webflow ya había escrito
   * `w--current` en el enlace «Home» del menú. Ese resto viaja a las 28
   * páginas restantes, así que sin limpiarlo primero el menú señalaría
   * «Home» estando en cualquier otra página.
   */
  const stale = qa__chrome<HTMLAnchorElement>(`a.${CURRENT_CLASS}`);
  for (const link of stale) {
    link.classList.remove(CURRENT_CLASS);
    link.removeAttribute('aria-current');
  }

  /*
   * Se recorren TODOS los enlaces del documento, no sólo los de la
   * navegación. Webflow marcaba con `w--current` cualquier enlace que
   * apuntara a la página actual, estuviera donde estuviera: la auditoría de
   * scripts/audit-shared-blocks.mjs encontró que también afecta al botón
   * «View available villas» del CTA y a los del menú.
   */
  for (const link of qa__chrome<HTMLAnchorElement>('a[href]')) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http')) continue;

    const target = href.replace(/\/+$/, '') || '/';
    if (target !== path) continue;

    link.classList.add(CURRENT_CLASS);
    link.setAttribute('aria-current', 'page');
    marked.push(link);
  }

  return () => {
    for (const link of marked) {
      link.classList.remove(CURRENT_CLASS);
      link.removeAttribute('aria-current');
    }
  };
}

/** Registra todo el cromo. Cada pieza se autodescarta si no está en la página. */
export function initChrome(): () => void {
  const cleanups = [
    cookieNotice(),
    themeChange(),
    rotatingLogo(),
    scrollBar(),
    pins(),
    markCurrentLink(),
  ];
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/filters.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Filtros, ordenación y desplegables del listado — port de `initFilter()`,
 * `initSort()` e `initSelect()` del original.
 *
 * Sólo actúan en `/villas`, que es donde está la barra de controles.
 *
 * El filtro sincroniza el estado con la query string (`?typology=...`), así
 * que una selección se puede compartir por enlace y sobrevive a recargar.
 */



const qa__filters = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__filters = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** `sort-area` → `sortArea`, para leerlo del dataset. */
const camel = (s: string) => s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

/* ------------------------------------------------------------------
 *  Filtrado
 * ------------------------------------------------------------------ */

function filters(): () => void {
  const cleanups: Array<() => void> = [];

  for (const wrapper of qa__filters<HTMLElement>('[data-filter]')) {
    const list = q__filters<HTMLElement>('[data-filter-list]', wrapper);
    if (!list) continue;

    const countEl = q__filters<HTMLElement>('[data-filter-count]', wrapper);
    const emptyEl = q__filters<HTMLElement>('[data-filter-empty]', wrapper);
    const items = qa__filters<HTMLElement>('[data-filter-item]', list);
    const active: Record<string, string> = {};

    /** Un item pasa si cumple TODOS los grupos activos a la vez. */
    const getVisible = () => {
      if (!Object.keys(active).length) return items;
      return items.filter((item) =>
        Object.entries(active).every(([group, value]) =>
          qa__filters<HTMLElement>(`[data-${group}]`, item)
            .map((el) => el.dataset[group])
            .includes(value),
        ),
      );
    };

    const arrange = () => {
      const visible = getVisible();
      const hidden = items.filter((i) => !visible.includes(i));

      for (const item of hidden) gsap.set(item, { display: 'none' });
      for (const item of visible) gsap.set(item, { display: '' });

      if (emptyEl) {
        if (!visible.length) {
          gsap.set(emptyEl, { display: '' });
          gsap.fromTo(emptyEl, { opacity: 0 }, { opacity: 1, duration: DUR.m, ease: 'Out' });
        } else {
          gsap.set(emptyEl, { display: 'none' });
        }
      }

      // El contador sube o baja contando, no de golpe.
      if (countEl) {
        const current = { val: parseInt(countEl.textContent ?? '', 10) || 0 };
        gsap.to(current, {
          val: visible.length,
          duration: DUR.m,
          ease: 'Out',
          overwrite: true,
          onUpdate: () => (countEl.textContent = String(Math.round(current.val))),
        });
      }

      gsap.fromTo(
        list,
        { opacity: 0, y: '10rem' },
        {
          opacity: 1,
          y: '0rem',
          duration: DUR.l,
          ease: 'Out',
          clearProps: 'y',
          onComplete: () => ScrollTrigger.refresh(),
        },
      );
    };

    const updateUrl = () => {
      const query = new URLSearchParams(active).toString();
      history.replaceState(null, '', query ? `?${query}` : location.pathname);
    };

    arrange();

    for (const btn of qa__filters<HTMLElement>('[data-filter-trigger]', wrapper)) {
      const onClick = () => {
        const group = btn.dataset.filterGroup;
        const value = btn.dataset.filterTrigger;
        if (!group || value === undefined) return;

        for (const b of qa__filters(`[data-filter-group="${group}"]`, wrapper)) b.classList.remove('is-active');
        btn.classList.add('is-active');

        // "*" es la opción «todos»: quita el grupo del filtro.
        if (value === '*') delete active[group];
        else active[group] = value;

        updateUrl();

        gsap
          .timeline()
          .to(list, { opacity: 0, duration: DUR.s, ease: 'Out', overwrite: true })
          .add(arrange);
      };

      btn.addEventListener('click', onClick);
      cleanups.push(() => btn.removeEventListener('click', onClick));
    }

    // Estado inicial desde la URL; si no hay, se pulsa el «todos» de cada grupo.
    const params = new URLSearchParams(location.search);
    const groups = [
      ...new Set(qa__filters<HTMLElement>('[data-filter-trigger]', wrapper).map((b) => b.dataset.filterGroup)),
    ];

    for (const group of groups) {
      if (!group) continue;
      const value = params.get(group);
      const btn = value
        ? q__filters<HTMLElement>(`[data-filter-group="${group}"][data-filter-trigger="${value}"]`, wrapper)
        : q__filters<HTMLElement>(`[data-filter-group="${group}"][data-filter-trigger="*"]`, wrapper);
      btn?.click();
    }
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Ordenación
 * ------------------------------------------------------------------ */

function sorting(): () => void {
  const cleanups: Array<() => void> = [];

  for (const wrapper of qa__filters<HTMLElement>('[data-sort]')) {
    const list = q__filters<HTMLElement>('[data-sort-list]', wrapper);
    if (!list) continue;

    const items = qa__filters<HTMLElement>('[data-sort-item]', list);
    const state: { key: string | null; order: string } = { key: null, order: 'asc' };

    /** Reordena moviendo los nodos: no hay copia de datos que mantener. */
    const arrange = () => {
      if (!state.key) return;
      const dataKey = camel(`sort-${state.key}`);

      [...items]
        .sort((a, b) => {
          const aVal = q__filters<HTMLElement>(`[data-sort-${state.key}]`, a)?.dataset[dataKey] ?? '';
          const bVal = q__filters<HTMLElement>(`[data-sort-${state.key}]`, b)?.dataset[dataKey] ?? '';
          const aNum = parseFloat(aVal);
          const bNum = parseFloat(bVal);
          // Numérico si ambos lo son; si no, alfabético.
          const isNum = !Number.isNaN(aNum) && !Number.isNaN(bNum);
          const cmp = isNum ? aNum - bNum : aVal.localeCompare(bVal);
          return state.order === 'asc' ? cmp : -cmp;
        })
        .forEach((item) => list.appendChild(item));
    };

    for (const btn of qa__filters<HTMLElement>('[data-sort-trigger]', wrapper)) {
      const onClick = () => {
        if (btn.classList.contains('is-active')) return;

        state.key = btn.dataset.sortTrigger ?? null;
        state.order = btn.dataset.sortOrder ?? 'asc';

        for (const b of qa__filters('[data-sort-trigger]', wrapper)) b.classList.remove('is-active');
        btn.classList.add('is-active');

        gsap
          .timeline()
          .to(list, { opacity: 0, duration: DUR.s, ease: 'Out', overwrite: true })
          .add(() => {
            arrange();
            gsap.fromTo(
              list,
              { opacity: 0, y: '10rem' },
              {
                opacity: 1,
                y: '0rem',
                duration: DUR.l,
                ease: 'Out',
                clearProps: 'y',
                onComplete: () => ScrollTrigger.refresh(),
              },
            );
          });
      };

      btn.addEventListener('click', onClick);
      cleanups.push(() => btn.removeEventListener('click', onClick));
    }

    // El original arranca aplicando el primer criterio.
    q__filters<HTMLElement>('[data-sort-trigger]', wrapper)?.click();
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Desplegables
 * ------------------------------------------------------------------ */

function selects(): () => void {
  const cleanups: Array<() => void> = [];

  for (const dropdown of qa__filters<HTMLElement>('[data-select=""]')) {
    const trigger = q__filters<HTMLElement>('[data-select="btn"]', dropdown);
    const values = qa__filters<HTMLElement>('[data-select="value"]', dropdown);
    const items = qa__filters<HTMLElement>('[data-select="item"]', dropdown);
    if (!trigger) continue;

    const defaultText = values[0]?.textContent ?? '';

    /** Con varias marcadas muestra «Primera +N». */
    const updateValue = () => {
      const chosen = items.filter((i) => i.classList.contains('is-active'));
      const text =
        chosen.length === 0
          ? defaultText
          : chosen.length === 1
            ? chosen[0].textContent?.trim() ?? ''
            : `${chosen[0].textContent?.trim() ?? ''} +${chosen.length - 1}`;

      for (const value of values) value.textContent = text;
    };

    const onTrigger = () => dropdown.classList.toggle('is-open');
    trigger.addEventListener('click', onTrigger);
    cleanups.push(() => trigger.removeEventListener('click', onTrigger));

    for (const item of items) {
      // El `is-active` lo pone el filtro en su propio manejador, que corre
      // después: por eso el valor se relee en el frame siguiente.
      const onItem = () => {
        dropdown.classList.remove('is-open');
        requestAnimationFrame(updateValue);
      };
      item.addEventListener('click', onItem);
      cleanups.push(() => item.removeEventListener('click', onItem));
    }

    const onOutside = (e: MouseEvent) => {
      if (!dropdown.contains(e.target as Node)) dropdown.classList.remove('is-open');
    };
    document.addEventListener('click', onOutside);
    cleanups.push(() => document.removeEventListener('click', onOutside));

    updateValue();
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Botón de reinicio
 * ------------------------------------------------------------------ */

/**
 * El botón «Reset» de la barra de filtros — port de `initReset()`.
 *
 * Se deshabilita solo cuando no hay nada que reiniciar, y al pulsarlo
 * devuelve todos los grupos a «todos» y la ordenación a su primer criterio.
 * No lo hace por su cuenta: **pulsa los propios botones**, así que reutiliza
 * la lógica de filtrado y ordenación en lugar de duplicarla.
 */
function resetButton(): () => void {
  const buttons = qa__filters<HTMLElement>('[data-reset]');
  if (!buttons.length) return () => {};

  const update = () => {
    const filtered = qa__filters<HTMLElement>('[data-filter-trigger]:not([data-filter-trigger="*"])').some((b) =>
      b.classList.contains('is-active'),
    );
    const sortTriggers = qa__filters<HTMLElement>('[data-sort-trigger]');
    const sorted = sortTriggers.length > 0 && !sortTriggers[0].classList.contains('is-active');

    for (const btn of buttons) btn.classList.toggle('is-disabled', !filtered && !sorted);
  };

  const cleanups: Array<() => void> = [];

  for (const btn of qa__filters<HTMLElement>('[data-filter-trigger], [data-sort-trigger]')) {
    btn.addEventListener('click', update);
    cleanups.push(() => btn.removeEventListener('click', update));
  }

  for (const btn of buttons) {
    const onReset = () => {
      if (btn.classList.contains('is-disabled')) return;
      for (const b of qa__filters<HTMLElement>('[data-filter-trigger="*"]')) b.click();
      q__filters<HTMLElement>('[data-sort-trigger]')?.click();
    };
    btn.addEventListener('click', onReset);
    cleanups.push(() => btn.removeEventListener('click', onReset));
  }

  update();

  return () => {
    for (const c of cleanups) c();
  };
}

export function initFilters(): () => void {
  // Orden importante: `sorting` reordena el DOM y `filters` mide sobre él.
  // `resetButton` va al final: necesita los disparadores ya registrados.
  const cleanups = [sorting(), filters(), selects(), resetButton()];
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/hero-slider.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

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




/** Segundos que se queda cada villa antes de pasar sola. */
const AUTO_DURATION__hero_slider = 6;

/** Fracción del hero que debe verse para que el bucle corra. */
const VISIBLE_THRESHOLD__hero_slider = 0.2;

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
      autoTimer = setInterval(goNext, AUTO_DURATION__hero_slider * 1000);
      return;
    }
    waitTimer = setInterval(() => {
      if (!preloaderDone()) return;
      clearInterval(waitTimer);
      autoTimer = setInterval(goNext, AUTO_DURATION__hero_slider * 1000);
    }, 250);
  };

  markActive(0);

  const observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
    { threshold: VISIBLE_THRESHOLD__hero_slider },
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

/* ============================================================
   lib/animations/home-flow.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Coreografías largas de scroll — port de `initTranistionFlow()` del
 * original (líneas 3381-3813; el nombre lleva la errata del original).
 *
 * Estas son las que dan sentido a las "zonas de scroll": bloques de varios
 * miles de píxeles de alto cuyo contenido se queda quieto mientras pasas y
 * va transformándose. Sin ellas esos bloques son huecos vacíos y da la
 * sensación de que el scroll no hace nada.
 *
 *   .hero-scroll-area   el hero se eleva y el fondo se acerca hasta
 *                       descubrir el conjunto residencial
 *   .loc-scroll-area    recorrido horizontal del mapa de localización
 *   .amen-scroll-area   las amenidades se acercan y se desvanecen
 *   .arch-scroll-area   secuencia de arquitectura por clip-path
 *   .footer-w           el pie se abre recortando la sección anterior
 *
 * Varias sólo existen en escritorio: en móvil el original las desactiva
 * con `gsap.matchMedia()` y deja el bloque en scroll normal.
 */




/** Elemento que además cachea su tween horizontal para ScrollTrigger. */
type HorizontalArea = HTMLElement & { _horizontalTween?: gsap.core.Tween };

const q__home_flow = <T extends Element>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);
const qa__home_flow = (sel: string, root: ParentNode = document) => [...root.querySelectorAll(sel)];

/**
 * El hero: el contenido sube más rápido que el fondo y luego el fondo se
 * acerca. Es lo que descubre el conjunto residencial y sus hotspots.
 *
 * Depende de la altura real del fondo, así que espera a que la imagen
 * cargue: medirla antes daría 0 y la animación no recorrería nada.
 */
function heroFlow(): () => void {
  const area = q__home_flow<HTMLElement>('.hero-scroll-area');
  if (!area) return () => {};

  const heroS = q__home_flow('.hero-s', area);
  const bg = q__home_flow<HTMLElement>('.hero-w_bg', area);
  const img = bg && q__home_flow<HTMLImageElement>('.img', bg);
  if (!bg || !img) return () => {};

  const mobile = window.innerWidth < BREAKPOINT;
  let tl: gsap.core.Timeline | null = null;

  const build = () => {
    /*
     * Las distancias van como FUNCIÓN, no como número, y el trigger lleva
     * `invalidateOnRefresh`. Medir una sola vez en una constante hacía que
     * el desplazamiento se congelara con la altura que hubiera en ese
     * instante.
     *
     * El síntoma es muy concreto: la sección del hero es `theme_on-color`,
     * o sea que su fondo BASE es el morado (velvet plum, #340c24) y el
     * cielo azul es una imagen encima. Si el fondo no sube lo que le toca,
     * asoma una franja morada por debajo justo antes de que entre la
     * sección siguiente a taparla.
     *
     * Se destapó al servir los assets desde un host externo: con latencia
     * de red la medición inicial llega mal, y además ahora hay más
     * `ScrollTrigger.refresh()` en juego (los dispara el carril horizontal
     * al cargar sus imágenes) — y un refresh no puede recalcular un valor
     * literal ya resuelto.
     */
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: area,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
      },
    });

    if (!mobile) {
      tl.fromTo(
        heroS,
        { y: 0 },
        { y: () => -(bg.offsetHeight * 1.25 - window.innerHeight), ease: 'Ease', duration: 0.6 },
      ).fromTo(
        bg,
        { y: 0 },
        { y: () => -(bg.offsetHeight - window.innerHeight), ease: 'Ease', duration: 0.6 },
        '<',
      );
    }

    tl.fromTo(
      bg,
      { scale: 1, translateZ: 10, transformOrigin: '50% 75%' },
      { scale: 2, translateZ: 10, ease: 'In', duration: 0.6 },
      mobile ? '>' : '-=0.2',
    );
  };

  if (img.complete) build();
  else img.addEventListener('load', build, { once: true });

  return () => {
    img.removeEventListener('load', build);
    tl?.scrollTrigger?.kill();
    tl?.kill();
  };
}

/** El titular de beneficios se va separando por palabras al pasar. */
function benefitsIntro(): () => void {
  const section = q__home_flow('.benefits-intro-w');
  if (!section) return () => {};

  const tl = gsap
    .timeline({
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    .fromTo(qa__home_flow('[data-circle-text]', section), { wordSpacing: '0rem' }, { wordSpacing: '10rem', ease: 'none' });

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}

/**
 * Bloques que combinan un zoom con la entrada del texto: el texto entra al
 * cruzar el 30% y se retira si vuelves hacia arriba.
 * Sirve para el bloque de localización y para el pie.
 */
function zoomInWithText(
  wrapper: Element,
  inner: Element | null,
  parts: { headlines?: Element[]; paragraphs?: Element[]; ctns?: Element[] },
  extra?: (tl: gsap.core.Timeline) => void,
): () => void {
  const { headlines = [], paragraphs = [], ctns = [] } = parts;

  if (headlines.length) animateTextH(headlines, 'initial');
  if (paragraphs.length) animateTextP(paragraphs, 'initial');
  if (ctns.length) animateCtn(ctns, 'initial');

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: wrapper,
      start: 'top 30%',
      end: 'bottom bottom',
      scrub: 0.5,
      onEnter: () => {
        if (headlines.length) animateTextH(headlines, 'reveal', 0.1);
        if (paragraphs.length) animateTextP(paragraphs, 'reveal', 0.1);
        if (ctns.length) animateCtn(ctns, 'reveal', 0.1);
      },
      onLeaveBack: () => {
        if (headlines.length) animateTextH(headlines, 'hide', 0);
        if (paragraphs.length) animateTextP(paragraphs, 'hide', 0);
        if (ctns.length) animateCtn(ctns, 'hide', 0);
      },
    },
  });

  extra?.(tl);
  if (inner) tl.fromTo(inner, { opacity: 0, scale: 0.75 }, { opacity: 1, scale: 1, ease: 'none' }, 0);

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}

/** Bloque de información de localización. */
function locationInfo(): () => void {
  const wrapper = q__home_flow('.loc-info-w');
  if (!wrapper) return () => {};

  return zoomInWithText(wrapper, q__home_flow('.loc-info-s', wrapper), {
    paragraphs: qa__home_flow('[data-part="p"]', wrapper),
    ctns: qa__home_flow('[data-part="ctn"]', wrapper),
  });
}

/**
 * Mapa de localización en scroll horizontal.
 *
 * La altura de la zona se iguala al ancho del carril, de modo que scrollear
 * hacia abajo consume exactamente el recorrido lateral. El tween resultante
 * se cachea en el nodo porque los reveals que viven dentro necesitan
 * pasárselo a ScrollTrigger como `containerAnimation` — si no, medirían
 * contra el scroll vertical y dispararían a destiempo.
 *
 * Sólo en escritorio.
 */
function locationTrack(): () => void {
  const area = q__home_flow<HorizontalArea>('.loc-scroll-area');
  if (!area) return () => {};

  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const track = q__home_flow<HTMLElement>('.loc-scroll-area_track', area);
    if (!track) return;

    /**
     * La altura de la zona se iguala al ancho del carril, así que scrollear
     * hacia abajo consume exactamente el recorrido lateral.
     */
    let applied = 0;
    const applyHeight = () => {
      const width = track.scrollWidth;
      if (width === applied) return;
      applied = width;
      area.style.height = `${width}px`;
      ScrollTrigger.refresh();
    };
    applyHeight();

    /*
     * Hay que volver a medir cuando carguen las imágenes del carril: son
     * ellas las que lo ensanchan. Con una sola medición al arrancar salían
     * 5972px donde el original tiene 6019 — 47px de recorrido perdidos.
     *
     * Dos intentos anteriores que NO funcionan, por si alguien los repite:
     *
     *   - `window.load`: cuando este código corre (tras
     *     `document.fonts.ready`) la carga ya suele haber terminado, así que
     *     el evento no vuelve a dispararse.
     *   - `ResizeObserver` sobre el carril: observa su caja, que mide 5962 y
     *     no cambia. Lo que crece es su `scrollWidth`, o sea el contenido.
     */
    const pending = [...track.querySelectorAll<HTMLImageElement>('img')].filter((img) => !img.complete);
    const onImage = () => applyHeight();
    for (const img of pending) {
      img.addEventListener('load', onImage, { once: true });
      img.addEventListener('error', onImage, { once: true });
    }

    // Y una recolocación al redimensionar, que sí cambia la caja.
    const observer = new ResizeObserver(applyHeight);
    observer.observe(area);

    /*
     * La distancia va como FUNCIÓN, no como número, y con
     * `invalidateOnRefresh`. Con un número fijo se congela en el valor que
     * hubiera al arrancar, y `applyHeight()` —que sí vuelve a medir cuando
     * cargan las imágenes— sólo podía corregir la altura: `refresh()` no
     * recalcula un valor literal ya resuelto.
     *
     * Se vio al servir los assets desde un host externo (GoHighLevel Vibe
     * no aloja binarios). En local las imágenes salían del disco y daba
     * tiempo a medir bien; con latencia de red la carrera se pierde, el
     * recorrido se queda corto y —esto es lo que se ve— la línea del
     * trazado NO APARECE: su ScrollTrigger usa este tween como
     * `containerAnimation`, así que si el recorrido no llega, el disparador
     * tampoco, y el `clipPath` se queda cerrado a cero.
     */
    const horizontal = gsap.to(track, {
      x: () => -(track.scrollWidth - area.offsetWidth),
      ease: 'horScroll',
      scrollTrigger: {
        trigger: area,
        start: '2.5% top',
        end: '97.5% bottom',
        scrub: 0.25,
        invalidateOnRefresh: true,
      },
    });
    area._horizontalTween = horizontal;

    // Las tres líneas del titular se desplazan a distinto ritmo.
    const lines = qa__home_flow('.loc-intro-s_title_line', area);
    if (lines.length) {
      gsap.fromTo(
        lines,
        { xPercent: gsap.utils.wrap([-5, 25, -15]) },
        {
          xPercent: gsap.utils.wrap([5, -25, 25]),
          ease: 'none',
          scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
        },
      );
    }

    const flowerIntro = q__home_flow('.flower.loc-intro', area);
    if (flowerIntro) {
      gsap.fromTo(flowerIntro, { xPercent: 0 }, {
        xPercent: -25,
        ease: 'none',
        scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
      });
    }

    const flowerPath = q__home_flow('.flower.loc-path', area);
    if (flowerPath) {
      gsap.fromTo(flowerPath, { yPercent: 0 }, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: area, start: 'bottom bottom', end: 'bottom top', scrub: 0.25 },
      });
    }

    return () => {
      observer.disconnect();
      for (const img of pending) {
        img.removeEventListener('load', onImage);
        img.removeEventListener('error', onImage);
      }
      delete area._horizontalTween;
      area.style.removeProperty('height');
    };
  });

  return () => mm.revert();
}

/** El trazado del recorrido se dibuja de izquierda a derecha, una vez. */
function locationPath(): () => void {
  const path = q__home_flow('.img.loc-path');
  if (!path) return () => {};

  const horizontal = path.closest('[data-scroll-horizontal]') as HorizontalArea | null;

  const tween = gsap.fromTo(
    path,
    { clipPath: 'inset(0% 100% 0% 0%)' },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: DUR.l * 2,
      ease: 'Out',
      delay: DUR.m,
      scrollTrigger: {
        trigger: path,
        containerAnimation: horizontal?._horizontalTween,
        start: horizontal ? 'left bottom' : 'top bottom',
        once: true,
      },
    },
  );

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

/** El mapa desamplía ligeramente al entrar. */
function locationMap(): () => void {
  const wrapper = q__home_flow('.loc-w');
  const img = wrapper && q__home_flow('.loc-w_bg_img', wrapper);
  if (!wrapper || !img) return () => {};

  const tween = gsap.from(img, {
    scale: 1.15,
    transformOrigin: 'center bottom',
    ease: 'Ease',
    scrollTrigger: { trigger: wrapper, start: 'top bottom', end: 'bottom bottom', scrub: 0.25 },
  });

  return () => {
    tween.scrollTrigger?.kill();
    tween.kill();
  };
}

/** Amenidades: el bloque se acerca mientras se desvanece. */
function amenitiesFlow(): () => void {
  const area = q__home_flow('.amen-scroll-area');
  if (!area) return () => {};

  const wrapper = q__home_flow('.amen-w', area);
  const cms = q__home_flow('.amen-cms', area);
  if (!wrapper || !cms) return () => {};

  const tl = gsap
    .timeline({
      scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: true },
    })
    .fromTo(cms, { scale: 1 }, { scale: 2, ease: 'In' })
    .fromTo(wrapper, { opacity: 1 }, { opacity: 0, ease: 'In' }, '<');

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}

/**
 * Arquitectura: dos planos recortados con clip-path se abren, la escena se
 * acerca y entra el bloque final. Los polígonos vienen literales del
 * original — son fotogramas clave dibujados a mano, no una fórmula.
 *
 * Sólo en escritorio.
 */
function architectureFlow(): () => void {
  const area = q__home_flow('.arch-scroll-area');
  if (!area) return () => {};

  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const introS = q__home_flow('.arch-intro-s', area);
    const archS = q__home_flow('.arch-w', area);
    if (!introS || !archS) return;

    const introBgL = q__home_flow('.arch-intro-s_bg_l', introS);
    const introBgR = q__home_flow('.arch-intro-s_bg_r', introS);
    const flowerL = q__home_flow('.flower.arch-intro-l', introS);
    const flowerR = q__home_flow('.flower.arch-intro-r', introS);
    const archBg = q__home_flow('.img', archS);
    const title = q__home_flow('[data-text="h"]', archS);
    const desc = q__home_flow('[data-text="p"]', archS);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: introS, start: 'top bottom', end: '200% top', scrub: true },
    });

    // 1 > 2: los dos planos igualan altura
    tl.fromTo(
      introBgL,
      {
        clipPath:
          'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 36.111%, 98.889% 36.111%, 98.889% 99.074%, 44.444% 99.074%, 1.111% 100%, 100% 100%, 100% 0%)',
      },
      {
        clipPath:
          'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 18.519%, 98.889% 18.519%, 98.889% 81.481%, 44.444% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
        ease: 'none',
        duration: 0.5,
      },
    ).fromTo(
      introBgR,
      {
        clipPath:
          'polygon(0% 0%, 0% 100%, 1.111% 100%, 1.111% 0.926%, 55.556% 0.926%, 55.556% 63.889%, 1.111% 63.889%, 1.111% 100%, 100% 100%, 100% 0%)',
      },
      {
        clipPath:
          'polygon(0% 0%, 0% 100%, 1.111% 100%, 1.111% 18.519%, 55.556% 18.519%, 55.556% 81.481%, 1.111% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
        ease: 'none',
        duration: 0.5,
      },
      '<',
    );

    // 2 > 3: se abren hacia fuera y la escena se acerca
    tl.to(introBgL, {
      clipPath:
        'polygon(0% 0%, 0% 100%, 44.444% 100%, 44.444% 18.519%, 100% 18.519%, 100% 81.481%, 44.444% 81.481%, 1.111% 100%, 100% 100%, 100% 0%)',
      ease: 'none',
      duration: 0.1,
    })
      .to(
        introBgR,
        {
          clipPath:
            'polygon(0% 0%, 0% 100%, 0% 100%, 0% 18.519%, 55.556% 18.519%, 55.556% 81.481%, 0% 81.481%, 0% 100%, 100% 100%, 100% 0%)',
          ease: 'none',
          duration: 0.1,
        },
        '<',
      )
      .fromTo(introS, { scale: 1 }, { scale: 1.84, ease: 'InOut', duration: 0.4 })
      .to(flowerL, { scale: 1.84, xPercent: -50, ease: 'InOut', duration: 0.4 }, '<')
      .to(flowerR, { scale: 1.84, xPercent: 50, ease: 'InOut', duration: 0.4 }, '<')
      .fromTo(
        archS,
        { scale: 0.75, transformOrigin: 'center top' },
        { scale: 1, ease: 'InOut', duration: 0.4 },
        '<',
      );

    if (title) animateTextH([title], 'initial');
    if (desc) animateTextP([desc], 'initial');

    ScrollTrigger.create({
      trigger: area,
      start: '30% top',
      onEnter: () => {
        if (title) animateTextH([title], 'reveal', 0);
        if (desc) animateTextP([desc], 'reveal', DUR.s);
      },
      onLeaveBack: () => {
        if (title) animateTextH([title], 'hide', 0);
        if (desc) animateTextP([desc], 'hide', 0);
      },
    });

    if (archBg) {
      gsap.to(archBg, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: area, start: '55% top', end: 'bottom top', scrub: true },
      });
    }
  });

  return () => mm.revert();
}

/**
 * El pie: la sección anterior se recorta hacia dentro mientras el pie se
 * acerca desde el fondo, como si se abriera una ventana.
 */
function footerFlow(): () => void {
  const wrapper = q__home_flow('.footer-w');
  if (!wrapper) return () => {};

  const clipTarget = q__home_flow('[data-footer-clip]');
  const clipEnd = window.innerWidth >= BREAKPOINT ? 'inset(8% 22% 8% 22%)' : 'inset(4% 32% 4% 32%)';

  const cleanup = zoomInWithText(
    wrapper,
    q__home_flow('.footer-s', wrapper),
    {
      headlines: qa__home_flow('[data-text="h"]', wrapper),
      paragraphs: qa__home_flow('[data-text="p"]', wrapper),
      ctns: qa__home_flow('[data-text="ctn"]', wrapper),
    },
    (tl) => {
      if (clipTarget) {
        tl.fromTo(clipTarget, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: clipEnd, ease: 'none' }, 0);
      }
    },
  );

  // El indicador "scroll" se apaga al llegar al pie.
  const scrollDown = q__home_flow('.s-down');
  const downTween = scrollDown
    ? gsap.to(scrollDown, {
        opacity: 0,
        ease: 'InOut',
        scrollTrigger: { trigger: wrapper, start: 'top bottom', end: 'center bottom', scrub: true },
      })
    : null;

  return () => {
    cleanup();
    downTween?.scrollTrigger?.kill();
    downTween?.kill();
  };
}

/** La cabecera de la ficha de unidad se despega al empezar a bajar. */
function lotHeader(): () => void {
  const wrapper = q__home_flow('.lot-w');
  if (!wrapper) return () => {};

  const header = q__home_flow('.lot-s_info_header', wrapper);
  const line = q__home_flow('.lot-s_info_line', wrapper);
  if (!header || !line) return () => {};

  const trigger = ScrollTrigger.create({
    trigger: wrapper,
    start: '100px top',
    onEnter: () => {
      header.classList.remove('is-top');
      line.classList.remove('is-top');
    },
    onLeaveBack: () => {
      header.classList.add('is-top');
      line.classList.add('is-top');
    },
  });

  return () => trigger.kill();
}

/**
 * Registra todas las coreografías presentes en la página. Cada una se
 * autodescarta si su bloque no existe, así que vale para las 29 rutas.
 */
export function initHomeFlow(): () => void {
  const cleanups = [
    heroFlow(),
    benefitsIntro(),
    locationInfo(),
    locationTrack(),
    locationPath(),
    locationMap(),
    amenitiesFlow(),
    architectureFlow(),
    footerFlow(),
    lotHeader(),
  ];

  return () => {
    for (const cleanup of cleanups) cleanup();
  };
}

/* ============================================================
   lib/animations/image-zoom.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Zoom sobre la imagen del lightbox — port de `initImageZoom()`.
 *
 * Dos implementaciones distintas según el dispositivo, como en el original:
 *
 *   escritorio  un clic amplía la imagen al ancho de la ventana y el
 *               movimiento vertical del ratón la recorre con inercia
 *   táctil      pellizco para ampliar (hasta 5x), arrastre para desplazar
 *               y doble toque para alternar
 *
 * En ambos casos, al ampliar se retira la interfaz (paginación, botón de
 * cerrar y el marco decorativo) para no tapar la foto.
 */



/** Suavizado del seguimiento vertical: cuanto menor, más inercia. */
const FOLLOW_EASE = 0.08;

/** Ampliación del doble toque y tope del pellizco. */
const TAP_SCALE = 2.5;
const MAX_SCALE = 5;

/** Ventana para considerar dos toques como doble toque. */
const DOUBLE_TAP_MS = 300;

export function initImageZoom(): () => void {
  const wrapper = document.querySelector<HTMLElement>('[data-lightbox-content]');
  if (!wrapper) return () => {};

  const img = wrapper.querySelector<HTMLImageElement>('[data-lightbox-img]');
  if (!img) return () => {};

  const pag = wrapper.parentElement?.querySelector('.modal_lightbox_pag') ?? null;
  const closeBtn = wrapper.parentElement?.querySelector('.modal_close') ?? null;
  const decor = document.querySelector('.modal_decor');

  const hideUI = () => {
    if (pag) gsap.to(pag, { yPercent: 100, duration: DUR.m, ease: 'Out' });
    if (closeBtn) gsap.to(closeBtn, { xPercent: 250, duration: DUR.m, ease: 'Out' });
    if (decor) gsap.to(decor, { scale: 1.1, duration: DUR.m, ease: 'Out' });
  };

  const showUI = () => {
    if (pag) gsap.to(pag, { yPercent: 0, duration: DUR.m, ease: 'Out' });
    if (closeBtn) gsap.to(closeBtn, { xPercent: 0, duration: DUR.m, ease: 'Out' });
    if (decor) gsap.to(decor, { scale: 1, duration: DUR.m, ease: 'Out' });
  };

  /* ----------------------------------------------------------------
   *  Escritorio: clic para ampliar, ratón para recorrer
   * ---------------------------------------------------------------- */
  if (window.innerWidth > BREAKPOINT) {
    let zoomed = false;
    let overflow = 0;
    let targetY = 0;
    let currentY = 0;

    // El seguimiento va por ticker, no por tween: persigue un objetivo que
    // cambia en cada movimiento del ratón, y un tween se reiniciaría siempre.
    const onTick = () => {
      currentY += (targetY - currentY) * FOLLOW_EASE;
      gsap.set(img, { y: currentY });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!zoomed || overflow <= 0) return;
      // Arriba del todo muestra el borde superior; abajo, el inferior.
      const ratio = e.clientY / window.innerHeight;
      targetY = overflow * (1 - 2 * ratio);
    };

    img.style.cursor = 'zoom-in';

    const open = () => {
      zoomed = true;
      const scale = window.innerWidth / img.offsetWidth;
      const scaledHeight = img.offsetHeight * scale;
      overflow = Math.max(0, (scaledHeight - window.innerHeight) / 2);
      currentY = 0;
      targetY = 0;

      gsap.to(img, { scale, duration: DUR.m, ease: 'Out' });
      gsap.ticker.add(onTick);
      document.addEventListener('mousemove', onMouseMove);

      hideUI();
      img.style.cursor = 'zoom-out';
    };

    const close = () => {
      if (!zoomed) return;
      zoomed = false;
      gsap.ticker.remove(onTick);
      document.removeEventListener('mousemove', onMouseMove);
      targetY = 0;

      gsap.to(img, { scale: 1, y: 0, duration: DUR.m, ease: 'Out' });
      showUI();
      img.style.cursor = 'zoom-in';
    };

    const onClick = () => (zoomed ? close() : open());
    // Cambiar de foto o cerrar con teclado debe deshacer el zoom primero.
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') close();
    };

    img.addEventListener('click', onClick);
    document.addEventListener('keydown', onKey);

    return () => {
      img.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onKey);
      gsap.ticker.remove(onTick);
      document.removeEventListener('mousemove', onMouseMove);
    };
  }

  /* ----------------------------------------------------------------
   *  Táctil: pellizco, arrastre y doble toque
   * ---------------------------------------------------------------- */
  let scale = 1;
  let startScale = 1;
  let startDist = 0;
  let translateX = 0;
  let translateY = 0;
  let startX = 0;
  let startY = 0;
  let midX = 0;
  let midY = 0;
  let lastTap = 0;

  // Sin esto el navegador se queda el gesto y hace su propio zoom de página.
  img.style.touchAction = 'none';

  const dist = (a: Touch, b: Touch) => Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
  const mid = (a: Touch, b: Touch) => ({ x: (a.clientX + b.clientX) / 2, y: (a.clientY + b.clientY) / 2 });

  const applyTransform = () => gsap.set(img, { scale, x: translateX, y: translateY });

  /** Devuelve la imagen dentro de los bordes si el arrastre se pasó. */
  const clampTranslate = () => {
    const rect = img.getBoundingClientRect();
    const wrapRect = wrapper.getBoundingClientRect();

    const overflowX = Math.max(0, (rect.width - wrapRect.width) / 2);
    const overflowY = Math.max(0, (rect.height - wrapRect.height) / 2);

    const clampedX = Math.max(-overflowX, Math.min(overflowX, translateX));
    const clampedY = Math.max(-overflowY, Math.min(overflowY, translateY));

    if (clampedX !== translateX || clampedY !== translateY) {
      translateX = clampedX;
      translateY = clampedY;
      gsap.to(img, { x: translateX, y: translateY, duration: DUR.s, ease: 'Out' });
    }
  };

  const resetZoom = () => {
    scale = 1;
    translateX = 0;
    translateY = 0;
    gsap.to(img, { scale: 1, x: 0, y: 0, duration: DUR.m, ease: 'Out' });
    showUI();
  };

  const zoomCenter = () => {
    scale = TAP_SCALE;
    translateX = 0;
    translateY = 0;
    gsap.to(img, { scale, x: 0, y: 0, duration: DUR.m, ease: 'Out' });
    hideUI();
  };

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      startDist = dist(e.touches[0], e.touches[1]);
      startScale = scale;
      const m = mid(e.touches[0], e.touches[1]);
      midX = m.x;
      midY = m.y;
      startX = translateX;
      startY = translateY;
      if (startScale <= 1) hideUI();
      return;
    }

    if (e.touches.length !== 1) return;

    const now = Date.now();
    if (now - lastTap < DOUBLE_TAP_MS) {
      e.preventDefault();
      if (scale > 1) resetZoom();
      else zoomCenter();
      lastTap = 0;
      return;
    }
    lastTap = now;

    // Con la imagen ampliada, un dedo arrastra en vez de pasar de foto.
    if (scale > 1) {
      e.preventDefault();
      midX = e.touches[0].clientX;
      midY = e.touches[0].clientY;
      startX = translateX;
      startY = translateY;
    }
  };

  const onTouchMove = (e: TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const d = dist(e.touches[0], e.touches[1]);
      const m = mid(e.touches[0], e.touches[1]);
      scale = Math.max(1, Math.min(startScale * (d / startDist), MAX_SCALE));
      translateX = startX + (m.x - midX);
      translateY = startY + (m.y - midY);
      applyTransform();
    } else if (e.touches.length === 1 && scale > 1) {
      e.preventDefault();
      translateX = startX + (e.touches[0].clientX - midX);
      translateY = startY + (e.touches[0].clientY - midY);
      applyTransform();
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (e.touches.length) return;
    // Un pellizco que casi vuelve al original se considera cerrado.
    if (scale <= 1.05) resetZoom();
    else clampTranslate();
  };

  img.addEventListener('touchstart', onTouchStart, { passive: false });
  img.addEventListener('touchmove', onTouchMove, { passive: false });
  img.addEventListener('touchend', onTouchEnd);

  return () => {
    img.removeEventListener('touchstart', onTouchStart);
    img.removeEventListener('touchmove', onTouchMove);
    img.removeEventListener('touchend', onTouchEnd);
  };
}

/* ============================================================
   lib/animations/interactions.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Interacciones de puntero y reproducción de vídeo.
 *
 * Port de `initMagneticEffect`, `initBtnCircleHover`, `initNavItemHover`,
 * `initLinkHover` y `initPlayPauseVideoScroll` del original.
 *
 * Los hovers de texto trocean con SplitText igual que los reveals, pero
 * aquí hay DOS copias del mismo texto en el marcado (`[hover='text']` x2):
 * una sale y la otra entra. El CSS de components.css ya hace una versión
 * simple del intercambio; esto lo sustituye por el original, carácter a
 * carácter y escalonado por posición horizontal.
 */



const qa__interactions = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

/* ------------------------------------------------------------------
 *  Botones magnéticos
 * ------------------------------------------------------------------ */

/**
 * El botón se desplaza hacia el cursor y vuelve con rebote elástico al
 * salir. `data-magnetic-inner` permite que el contenido se mueva con una
 * fuerza distinta a la del contenedor, lo que da sensación de profundidad.
 *
 * Sólo escritorio: en táctil no hay puntero que seguir.
 */
function magneticButtons(): () => void {
  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const magnets = qa__interactions<HTMLElement>('[data-magnetic-btn]');
    const inners = (m: HTMLElement) => qa__interactions<HTMLElement>('[data-magnetic-inner]', m);

    const reset = (el: Element, immediate: boolean) => {
      gsap.killTweensOf(el);
      const vars = { x: 0, y: 0, force3D: true, clearProps: 'all' };
      if (immediate) gsap.set(el, vars);
      else gsap.to(el, { ...vars, ease: 'elastic.out(1, 0.3)', duration: 1.6 });
    };

    const onEnter = (e: Event) => {
      const m = e.currentTarget as HTMLElement;
      reset(m, true);
      for (const inner of inners(m)) reset(inner, true);
    };

    const onMove = (e: Event) => {
      const ev = e as MouseEvent;
      const m = e.currentTarget as HTMLElement;
      const b = m.getBoundingClientRect();
      const strength = parseFloat(m.dataset.magneticStrength ?? '') || 25;
      const innerStrength = parseFloat(m.dataset.magneticStrengthInner ?? '') || strength;

      // Se mide en em para que el desplazamiento escale con la tipografía,
      // que en este sitio depende del ancho de viewport (font-size: 1vw).
      const ratioX = (ev.clientX - b.left) / m.offsetWidth - 0.5;
      const ratioY = (ev.clientY - b.top) / m.offsetHeight - 0.5;

      gsap.to(m, {
        x: `${ratioX * (strength / 16)}em`,
        y: `${ratioY * (strength / 16)}em`,
        force3D: true,
        ease: 'power4.out',
        duration: 1.6,
      });

      for (const inner of inners(m)) {
        gsap.to(inner, {
          x: `${ratioX * (innerStrength / 16)}em`,
          y: `${ratioY * (innerStrength / 16)}em`,
          force3D: true,
          ease: 'power4.out',
          duration: 2,
        });
      }
    };

    const onLeave = (e: Event) => {
      const m = e.currentTarget as HTMLElement;
      reset(m, false);
      for (const inner of inners(m)) reset(inner, false);
    };

    for (const m of magnets) {
      m.addEventListener('mouseenter', onEnter);
      m.addEventListener('mousemove', onMove);
      m.addEventListener('mouseleave', onLeave);
    }

    return () => {
      for (const m of magnets) {
        m.removeEventListener('mouseenter', onEnter);
        m.removeEventListener('mousemove', onMove);
        m.removeEventListener('mouseleave', onLeave);
      }
    };
  });

  return () => mm.revert();
}

/* ------------------------------------------------------------------
 *  Arco de los botones circulares
 * ------------------------------------------------------------------ */

/** Radio del círculo del SVG en el marcado original. */
const ARC_RADIUS = 103.5;

/**
 * El botón circular tiene dos arcos cortos que, al pasar por encima,
 * crecen hasta media circunferencia cada uno y cierran el círculo.
 * Se hace con `strokeDasharray`, no con rotación.
 */
function circleButtons(): () => void {
  const cleanups: Array<() => void> = [];
  const circumference = 2 * Math.PI * ARC_RADIUS;
  const arcLength = circumference * 0.0417;

  for (const btn of qa__interactions<HTMLElement>('[hover-btn-circle]')) {
    const arcs = qa__interactions('[data-arc]', btn);
    if (!arcs.length) continue;

    gsap.set(arcs, { strokeDasharray: `${arcLength} ${circumference}` });

    const tl = gsap.timeline({ paused: true }).to(arcs, {
      strokeDasharray: `${circumference / 2} ${circumference}`,
      duration: DUR.m,
      ease: 'InOut',
    });

    const play = () => tl.play();
    const reverse = () => tl.reverse();
    btn.addEventListener('mouseenter', play);
    btn.addEventListener('mouseleave', reverse);

    cleanups.push(() => {
      btn.removeEventListener('mouseenter', play);
      btn.removeEventListener('mouseleave', reverse);
      tl.kill();
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Intercambio de texto al pasar el cursor
 * ------------------------------------------------------------------ */

/**
 * Escalona por posición horizontal en vez de por orden en el DOM: los
 * caracteres más a la izquierda salen antes, y el barrido se lee como una
 * ola. Con el stagger normal de GSAP el efecto se pierde en textos que
 * ocupan varias líneas.
 */
function xPositionStagger(maxDelay: number) {
  return (i: number, _target: Element, targets: Element[]) => {
    const lefts = targets.map((t) => t.getBoundingClientRect().left);
    const min = Math.min(...lefts);
    const max = Math.max(...lefts);
    const range = max - min || 1;
    return ((lefts[i] - min) / range) * maxDelay;
  };
}

/** Items de navegación: el texto sube y entra el de repuesto. */
function navItemHover(): () => void {
  const cleanups: Array<() => void> = [];

  for (const item of qa__interactions<HTMLElement>('[hover-nav-item]')) {
    const texts = qa__interactions<HTMLElement>("[hover='text']", item);
    if (texts.length < 2) continue;

    const vars = {
      type: 'words,chars',
      tag: 'span',
      smartWrap: true,
      wordsClass: 'split-word',
      charsClass: 'split-char',
      mask: 'words',
    } as const;

    const a = new SplitText(texts[0], vars);
    const b = new SplitText(texts[1], vars);
    const stagger = xPositionStagger(STAGGER * 2);

    gsap.set(b.chars, { yPercent: 100, opacity: 0 });

    const common = { duration: DUR.m, ease: 'Ease', stagger, overwrite: true, force3D: true } as const;

    const forward = () => {
      gsap.fromTo(a.chars, { opacity: 1, yPercent: 0 }, { opacity: 0, yPercent: -100, ...common });
      gsap.fromTo(b.chars, { yPercent: 100, opacity: 0 }, { opacity: 1, yPercent: 0, ...common });
    };
    const reverse = () => {
      gsap.to(a.chars, { opacity: 1, yPercent: 0, ...common });
      gsap.to(b.chars, { opacity: 0, yPercent: 100, ...common });
    };

    const trigger = item.closest('[hover-nav-item-trigger]') ?? item;
    trigger.addEventListener('mouseenter', forward);
    trigger.addEventListener('mouseleave', reverse);

    cleanups.push(() => {
      trigger.removeEventListener('mouseenter', forward);
      trigger.removeEventListener('mouseleave', reverse);
      a.revert();
      b.revert();
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/**
 * Enlaces: además del intercambio, el subrayado se retrae desde la derecha
 * y vuelve desde la izquierda. El subrayado no está en el marcado — se
 * inyecta un `<span>` por línea, que es como lo resolvía el original.
 */
function linkHover(): () => void {
  const cleanups: Array<() => void> = [];

  for (const item of qa__interactions<HTMLElement>('[hover-link]')) {
    const texts = qa__interactions<HTMLElement>("[hover='text']", item);
    if (texts.length < 2) continue;

    const a = new SplitText(texts[0], {
      type: 'lines,words,chars',
      tag: 'span',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });
    /*
     * La copia de repuesto se parte por líneas igual que la primera.
     *
     * El original la partía sólo en palabras, y funcionaba porque con
     * Ambroise François las dos copias rompían en el mismo sitio. Con
     * Instrument Serif, que es un 37% más ancha, «a Villa» ya no cabe
     * en la caja: la copia 1 conserva las 2 líneas que SplitText le fijó y
     * la 2 refluía a 3, así que el enlace crecía de alto al pasar el cursor.
     * Partiendo ambas igual, las dos comparten el mismo corte.
     */
    const b = new SplitText(texts[1], {
      type: 'lines,words,chars',
      tag: 'span',
      linesClass: 'split-line',
      wordsClass: 'split-word',
      charsClass: 'split-char',
      smartWrap: true,
    });

    const lines = a.lines.map((line) => {
      const underline = document.createElement('span');
      underline.classList.add('link_line');
      line.appendChild(underline);
      return underline;
    });

    gsap.set(lines, { scaleX: 1, transformOrigin: 'right center' });
    gsap.set(b.chars, { opacity: 0, x: '-0.4em', yPercent: 25, rotateY: 90 });

    const charVars = { duration: DUR.m, ease: 'Out', stagger: STAGGER / 4, overwrite: true, force3D: true } as const;

    const forward = () => {
      gsap.fromTo(
        a.chars,
        { opacity: 1, x: '0em', yPercent: 0, rotateY: 0 },
        { opacity: 0, x: '0.4em', yPercent: -25, rotateY: -90, ...charVars },
      );
      gsap.fromTo(
        b.chars,
        { opacity: 0, x: '-0.4em', yPercent: 25, rotateY: 90 },
        { opacity: 1, x: '0em', yPercent: 0, rotateY: 0, delay: 0.2, ...charVars },
      );
      gsap.fromTo(
        lines,
        { scaleX: 1, transformOrigin: 'right center' },
        { scaleX: 0, duration: DUR.m, ease: 'Out', stagger: STAGGER, overwrite: true },
      );
    };

    const reverse = () => {
      gsap.to(a.chars, { opacity: 1, x: '0em', yPercent: 0, rotateY: 0, delay: 0.2, ...charVars });
      gsap.to(b.chars, { opacity: 0, x: '-0.4em', yPercent: 25, rotateY: 90, ...charVars });
      gsap.to(lines, {
        scaleX: 1,
        transformOrigin: 'left center',
        duration: DUR.m,
        ease: 'Out',
        stagger: STAGGER,
        overwrite: true,
      });
    };

    const trigger = item.closest('[hover-link-trigger]') ?? item;
    trigger.addEventListener('mouseenter', forward);
    trigger.addEventListener('mouseleave', reverse);

    cleanups.push(() => {
      trigger.removeEventListener('mouseenter', forward);
      trigger.removeEventListener('mouseleave', reverse);
      for (const l of lines) l.remove();
      a.revert();
      b.revert();
    });
  }

  return () => {
    for (const c of cleanups) c();
  };
}

/* ------------------------------------------------------------------
 *  Vídeo: reproducir sólo mientras se ve
 * ------------------------------------------------------------------ */

/**
 * Arranca los vídeos al entrar en pantalla y los pausa al salir. Ahorra
 * batería y ancho de banda: hay 8 vídeos en la home y reproducirlos todos
 * a la vez es lo que hace que un portátil se ponga a soplar.
 *
 * El `play()` puede rechazar (política de autoplay del navegador); se
 * ignora a propósito, igual que en el original.
 */
function videoPlayPause(): () => void {
  const triggers: ScrollTrigger[] = [];

  for (const wrapper of qa__interactions<HTMLElement>('[data-video-playpause]')) {
    const videos = qa__interactions<HTMLVideoElement>('.video', wrapper);
    if (!videos.length) continue;

    for (const video of videos) {
      video.load();
      video.currentTime = 0;
    }

    const play = () => {
      for (const v of videos) v.play().catch(() => {});
    };
    const pause = () => {
      for (const v of videos) v.pause();
    };

    triggers.push(
      ScrollTrigger.create({
        trigger: wrapper,
        start: 'top bottom',
        end: 'bottom top',
        onEnter: play,
        onEnterBack: play,
        onLeave: pause,
        onLeaveBack: pause,
      }),
    );
  }

  return () => {
    for (const t of triggers) t.kill();
  };
}

/** Registra todas las interacciones presentes en la página. */
export function initInteractions(): () => void {
  const cleanups = [magneticButtons(), circleButtons(), navItemHover(), linkHover(), videoPlayPause()];
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/lightbox.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Lightbox de la galería — port de `initLightbox()` del original.
 *
 * Sólo existe en las 25 fichas de apartamento; en la home no hay ninguna
 * imagen marcada, así que en el resto de páginas se autodescarta.
 *
 * El zoom con arrastre (`initImageZoom`, 207 líneas) se deja fuera a
 * propósito por ahora: es una capa aparte sobre este mismo modal y merece
 * su propia verificación con una ficha real delante.
 */




const qa__lightbox = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__lightbox = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

export function initLightbox(): () => void {
  // `offsetParent === null` descarta las que están en un bloque oculto: el
  // marcado incluye variantes por breakpoint y sólo una está viva.
  const items = qa__lightbox<HTMLImageElement>('[data-lightbox]').filter((el) => el.offsetParent !== null);
  if (!items.length) return () => {};

  const modal = q__lightbox<HTMLElement>('[data-lightbox-modal]');
  if (!modal) return () => {};

  const img = q__lightbox<HTMLImageElement>('[data-lightbox-img]', modal);
  const btnClose = q__lightbox<HTMLElement>('[data-slider="close"]', modal);
  const btnPrev = q__lightbox<HTMLElement>('[data-slider="prev"]', modal);
  const btnNext = q__lightbox<HTMLElement>('[data-slider="next"]', modal);
  const elCurrent = q__lightbox<HTMLElement>('[data-slider="current"]', modal);
  const elTotal = q__lightbox<HTMLElement>('[data-slider="total"]', modal);
  const elProgress = q__lightbox<HTMLElement>('[data-slider="progress"]', modal);
  if (!img) return () => {};

  const srcs = items.map((el) => el.src || el.dataset.src || '');
  let current = 0;
  let isOpen = false;

  gsap.set(modal, { display: 'none' });

  const updateCounter = () => {
    if (elCurrent) elCurrent.textContent = String(current + 1).padStart(2, '0');
    if (elTotal) elTotal.textContent = String(srcs.length).padStart(2, '0');
    if (elProgress) {
      gsap.to(elProgress, {
        width: `${((current + 1) / srcs.length) * 100}%`,
        duration: DUR.s,
        ease: 'Out',
      });
    }
  };

  const open = (index: number) => {
    current = index;
    img.src = srcs[current];
    updateCounter();

    gsap.set(modal, { display: 'block' });
    gsap.fromTo(modal, { opacity: 0 }, { opacity: 1, duration: DUR.m, ease: 'Out' });
    gsap.fromTo(img, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: DUR.m, ease: 'Out' });

    isOpen = true;
    lockScroll();
  };

  const close = () => {
    if (!isOpen) return;
    gsap.to(modal, {
      opacity: 0,
      duration: DUR.s,
      ease: 'In',
      onComplete: () => gsap.set(modal, { display: 'none' }),
    });
    isOpen = false;
    unlockScroll();
  };

  /** La saliente se va por un lado y la entrante llega por el otro. */
  const slide = (direction: 1 | -1) => {
    if (!isOpen) return;
    const outX = direction === 1 ? -125 : 125;
    const inX = direction === 1 ? 125 : -125;

    gsap.to(img, {
      xPercent: outX,
      duration: DUR.s,
      ease: 'In',
      onComplete: () => {
        current = (current + direction + srcs.length) % srcs.length;
        img.src = srcs[current];
        updateCounter();
        gsap.fromTo(img, { xPercent: inX }, { xPercent: 0, duration: DUR.m, ease: 'Out' });
      },
    });
  };

  const handlers: Array<[Element, string, EventListener]> = [];
  const on = (el: Element | null, type: string, fn: EventListener) => {
    if (!el) return;
    el.addEventListener(type, fn);
    handlers.push([el, type, fn]);
  };

  // Botones que abren por índice explícito (`data-lightbox-btn="3"`).
  for (const trigger of qa__lightbox<HTMLElement>('[data-lightbox-btn]')) {
    on(trigger, 'click', () => open(Number(trigger.dataset.lightboxBtn) || 0));
  }
  items.forEach((el, i) => on(el, 'click', () => open(i)));

  on(btnClose, 'click', close);
  on(btnPrev, 'click', () => slide(-1));
  on(btnNext, 'click', () => slide(1));

  const onKey = (e: KeyboardEvent) => {
    if (!isOpen) return; // sin esto, las flechas moverían la galería cerrada
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') slide(-1);
    if (e.key === 'ArrowRight') slide(1);
  };
  document.addEventListener('keydown', onKey);

  return () => {
    for (const [el, type, fn] of handlers) el.removeEventListener(type, fn);
    document.removeEventListener('keydown', onKey);
    if (isOpen) unlockScroll();
  };
}

/* ============================================================
   lib/animations/local-scroll.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Scroll suave dentro de paneles — port de `initLocalLenis()`.
 *
 * Además del scroll global hay contenedores que scrollean por su cuenta,
 * marcados con `data-lenis-scroll`. Están en las 29 páginas:
 *
 *   .lot-s_info_t   el panel de la derecha de la ficha de apartamento,
 *                   donde viven las pestañas INFO / BENEFITS
 *   .modal_cta_c    el cuerpo del modal «Book a call»
 *
 * Sin esto el panel no scrollea y su contenido de más abajo —las propias
 * pestañas— queda inalcanzable. El marcado sí traía el atributo; lo que
 * faltaba era instanciar Lenis sobre él.
 *
 * Cada instancia necesita su propio `raf`, enganchado al ticker de GSAP
 * igual que el global, para que todo avance con el mismo reloj.
 */




export function initLocalScroll(root: ParentNode = document): () => void {
  const containers = [...root.querySelectorAll<HTMLElement>('[data-lenis-scroll]')];
  if (!containers.length) return () => {};

  const instances: Array<{ lenis: Lenis; ticker: (time: number) => void }> = [];

  for (const wrapper of containers) {
    const lenis = new Lenis({ wrapper, ...LENIS_OPTIONS.local });

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    instances.push({ lenis, ticker });
  }

  return () => {
    for (const { lenis, ticker } of instances) {
      gsap.ticker.remove(ticker);
      lenis.destroy();
    }
  };
}

/* ============================================================
   lib/animations/misc.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Detalles sueltos — port de las partes vivas de `initOther()`.
 *
 * El original agrupa aquí seis arreglos pequeños. Dos no aplican: el botón
 * «atrás» (`data-btn-back`) y el refresco por `data-scroll-trigger` no
 * aparecen en ninguna de las 29 páginas.
 *
 * Se descubrieron auditando lo que había dado por muerto (ver
 * scripts/audit-unported.mjs): son invisibles de uno en uno, pero se notan
 * — una coma suelta al final de una lista, el año del pie sin actualizar.
 */



const qa__misc = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

export function initMisc(): () => void {
  /* Año en curso, para el aviso del pie. */
  const year = String(new Date().getFullYear());
  for (const el of qa__misc('.year')) el.textContent = year;

  /*
   * Última coma fuera.
   *
   * Las listas se escriben con una coma tras cada elemento; la del último
   * sobra y se elimina. Es destructivo —quita el nodo— así que sólo debe
   * correr una vez por render, cosa que garantiza el ciclo de la capa de
   * animación.
   */
  for (const list of qa__misc('[data-comma-list]')) {
    const commas = qa__misc('[data-comma]', list);
    commas.at(-1)?.remove();
  }

  /*
   * La miga de la página actual se marca como activa. El original la
   * distingue por `href="#"`, que es lo que Webflow deja en la miga que no
   * enlaza a ningún sitio.
   */
  const marked: Element[] = [];
  for (const el of qa__misc('[data-crumb-item]')) {
    if (el.getAttribute('href') !== '#') continue;
    el.classList.add('is-active');
    marked.push(el);
  }

  /* En móvil, el trazado del mapa arranca centrado en vez de a la izquierda. */
  const mm = gsap.matchMedia();
  mm.add(`(max-width: ${BREAKPOINT - 1}px)`, () => {
    const path = document.querySelector('.loc-path-s_path');
    if (path) path.scrollLeft = (path.scrollWidth - path.clientWidth) / 2;
  });

  return () => {
    for (const el of marked) el.classList.remove('is-active');
    mm.revert();
  };
}

/* ============================================================
   lib/animations/modals.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

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





const qa__modals = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__modals = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** Anima las partes de texto de un panel, marcadas con `data-part`. */
function animateParts(root: ParentNode, direction: Direction) {
  animateTextA(qa__modals('[data-part="a"]', root), direction);
  animateTextH(qa__modals('[data-part="h"]', root), direction);
  animateTextP(qa__modals('[data-part="p"]', root), direction);
  animateCtn(qa__modals('[data-part="ctn"]', root), direction);
}

/* ------------------------------------------------------------------
 *  Menú
 * ------------------------------------------------------------------ */

function menuModals(): () => void {
  const cleanups: Array<() => void> = [];

  for (const btn of qa__modals<HTMLElement>('[data-modal-menu-btn]')) {
    const id = btn.getAttribute('data-modal-menu-btn');
    const popup = q__modals<HTMLElement>(`[data-modal-menu="${id}"]`);
    if (!popup) continue;

    const container = q__modals<HTMLElement>('[data-modal-container]', popup);
    const overlay = q__modals<HTMLElement>('[data-modal-over]', popup);
    const closeBtns = qa__modals<HTMLElement>(`[data-modal-close="${id}"]`);
    const labels = qa__modals<HTMLElement>('.btn-menu_label', btn);
    const ico1 = q__modals('[data-ico-menu="is-1"]', btn);
    const ico2 = q__modals('[data-ico-menu="is-2"]', btn);
    const themed = qa__modals<HTMLElement>('[data-theme]');

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

  for (const btn of qa__modals<HTMLElement>('[data-modal-cta-btn]')) {
    const id = btn.getAttribute('data-modal-cta-btn');
    const popup = q__modals<HTMLElement>(`[data-modal-cta="${id}"]`);
    if (!popup) continue;

    const container = q__modals<HTMLElement>('[data-modal-container]', popup);
    const overlay = q__modals<HTMLElement>('[data-modal-over]', popup);
    const closeBtns = qa__modals<HTMLElement>('[data-modal-close]', popup);

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

/* ============================================================
   lib/animations/parallax.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Parallax al scroll — port de `initAllParallax()` del original
 * (referencia-web-original/slater-custom.js, líneas 1177-1283).
 *
 * Cinco variantes, todas declaradas en el marcado con `data-parallax`:
 *
 *   img      la imagen recorre el encuadre de arriba abajo
 *   img-out  sólo al salir el bloque por arriba
 *   img-in   sólo mientras el bloque entra
 *   ctn-down un contenedor que baja más despacio que el scroll
 *   ctn-up   ídem, subiendo
 *
 * Las de imagen necesitan un ancestro `data-parallax="w"` que hace de
 * encuadre; sin él no hay nada que recortar y se omiten.
 *
 * `data-mob="off"` / `data-desk="off"` en el encuadre desactivan el efecto
 * en ese lado del breakpoint.
 */



/** `translateZ: 10` fuerza capa propia en GPU: evita el parpadeo al hacer scrub. */
const LAYER = { translateZ: 10 };

type Variant = {
  /** Valor de data-parallax. */
  key: string;
  /** Si necesita el encuadre `data-parallax="w"`. */
  needsWrapper: boolean;
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  scroll: (trigger: Element) => ScrollTrigger.Vars;
};

const VARIANTS: Variant[] = [
  {
    key: 'img',
    needsWrapper: true,
    from: { yPercent: -15, ...LAYER },
    to: { yPercent: 15, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'top bottom', scrub: 0.5 }),
  },
  {
    key: 'img-out',
    needsWrapper: true,
    from: { yPercent: 0, ...LAYER },
    to: { yPercent: 20, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'bottom bottom', end: 'bottom top', scrub: 0.5 }),
  },
  {
    key: 'img-in',
    needsWrapper: true,
    from: { yPercent: -20, ...LAYER },
    to: { yPercent: 0, ...LAYER },
    scroll: (trigger) => ({ trigger, start: 'top bottom', end: 'bottom bottom', scrub: true }),
  },
  {
    key: 'ctn-down',
    needsWrapper: false,
    from: { yPercent: -10 },
    to: { yPercent: 10 },
    scroll: (trigger) => ({ trigger, start: 'top 125%', end: 'bottom -25%', scrub: 0.5 }),
  },
  {
    key: 'ctn-up',
    needsWrapper: false,
    from: { yPercent: 10 },
    to: { yPercent: -10 },
    scroll: (trigger) => ({ trigger, start: 'top 125%', end: 'bottom -25%', scrub: 0.5 }),
  },
];

/** ¿Está desactivado para el ancho actual? */
function disabledHere(el: HTMLElement): boolean {
  const mobile = window.innerWidth < BREAKPOINT;
  return mobile ? el.dataset.mob === 'off' : el.dataset.desk === 'off';
}

/**
 * Registra los parallax dentro de `root`. Devuelve la limpieza.
 */
export function initParallax(root: ParentNode = document): () => void {
  const tweens: gsap.core.Tween[] = [];

  for (const variant of VARIANTS) {
    for (const el of root.querySelectorAll<HTMLElement>(`[data-parallax="${variant.key}"]`)) {
      // El encuadre manda sobre el desactivado; sin encuadre, el propio nodo.
      const wrapper = variant.needsWrapper
        ? (el.closest('[data-parallax="w"]') as HTMLElement | null)
        : el;
      if (!wrapper) continue;
      if (disabledHere(wrapper)) continue;

      tweens.push(
        gsap.fromTo(el, variant.from, {
          ...variant.to,
          ease: 'none',
          scrollTrigger: variant.scroll(wrapper),
        }),
      );
    }
  }

  return () => {
    for (const t of tweens) {
      t.scrollTrigger?.kill();
      t.kill();
    }
  };
}

/* ============================================================
   lib/animations/preloader.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

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

/* ============================================================
   lib/animations/slider.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

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




/** Segundos que dura cada diapositiva antes de pasar sola. */
const AUTO_DURATION__slider = 6;

/** Fracción del slider que debe verse para que arranque el automático. */
const VISIBLE_THRESHOLD__slider = 0.2;

type Parts = {
  headlines: Element[];
  paragraphs: Element[];
  ctns: Element[];
  imgs: Element[];
};

const partsOf__slider = (slide: Element): Parts => ({
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
    const prev = partsOf__slider(prevSlide);
    const curr = partsOf__slider(currSlide);

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
    gsap.fromTo(progressEl, { width: '0%' }, { width: '100%', duration: AUTO_DURATION__slider, ease: 'none' });
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
    }, AUTO_DURATION__slider * 1000);
  };

  updateCounter();

  // Sólo corre mientras se ve.
  const observer = new IntersectionObserver(
    ([entry]) => (entry.isIntersecting ? startAuto() : stopAuto()),
    { threshold: VISIBLE_THRESHOLD__slider },
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

/* ============================================================
   lib/animations/tabs-hilight.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Indicador de la pestaña activa — port de `initTabsHilight()`.
 *
 * Es la línea que sigue a la pestaña seleccionada. Se desplaza y se
 * redimensiona hasta encajar con ella, en horizontal o en vertical según
 * `data-tabs-hilight="hor" | "ver"`.
 *
 * Sin esto la línea se queda clavada en la primera pestaña: no da ningún
 * error, simplemente no sigue al activo.
 */



const qa__tabs_hilight = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__tabs_hilight = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/**
 * Margen para medir DESPUÉS de que el cambio de pestaña haya recolocado el
 * contenido. Es el mismo valor que usaba el original.
 */
const SETTLE_MS = 40;

function setupHilight(wrapper: HTMLElement): () => void {
  /*
   * Ojo con el selector: `[data-tab]` no marca sólo las pestañas. Dentro
   * del bloque de amenidades hay 20 elementos con ese atributo y sólo 5 son
   * pestañas — el resto son párrafos (`data-tab="p"`) y diapositivas
   * (`data-tab="slide"`) del contenido.
   *
   * El original les engancha el click a los 20 y le sale bien de milagro,
   * porque `is-active` sólo lo lleva la pestaña. Aquí se filtra por los que
   * además son disparadores, que es lo que de verdad son las pestañas.
   */
  const tabs = qa__tabs_hilight<HTMLElement>('[data-tab]', wrapper).filter((el) => el.hasAttribute('data-tab-trigger'));
  const hilight = q__tabs_hilight<HTMLElement>('[data-tab-hilight]', wrapper);
  if (!tabs.length || !hilight) return () => {};

  const horizontal = wrapper.dataset.tabsHilight === 'hor';
  let timer: ReturnType<typeof setTimeout>;

  const update = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const active = tabs.find((t) => t.classList.contains('is-active'));
      if (!active) return;

      gsap.to(hilight, {
        ...(horizontal
          ? { x: active.offsetLeft, width: active.offsetWidth }
          : { y: active.offsetTop, height: active.offsetHeight }),
        duration: DUR.m,
        ease: 'InOut',
      });
    }, SETTLE_MS);
  };

  update();

  const handlers: Array<[HTMLElement, () => void]> = [];
  for (const tab of tabs) {
    tab.addEventListener('click', update);
    handlers.push([tab, update]);
  }

  /*
   * Añadido sobre el original: recolocar al cambiar el tamaño de ventana.
   *
   * El sitio escala TODO con `html { font-size: 1vw }`, así que al
   * redimensionar cambian el ancho y el alto de las pestañas y el indicador
   * se queda descuadrado. El original no lo contempla; aquí sí, porque el
   * fallo se ve enseguida al mover la ventana.
   */
  const onResize = () => update();
  window.addEventListener('resize', onResize);

  return () => {
    clearTimeout(timer);
    for (const [el, fn] of handlers) el.removeEventListener('click', fn);
    window.removeEventListener('resize', onResize);
  };
}

export function initTabsHilight(): () => void {
  const cleanups = qa__tabs_hilight<HTMLElement>('[data-tabs-hilight]').map(setupHilight);
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/tabs.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Pestañas — port de `initTabs()` del original.
 *
 * Presente en 26 de las 29 páginas: son las pestañas INFO / BENEFITS de la
 * ficha de apartamento y las de amenidades (piscina, gimnasio, jardines…).
 *
 * El cruce es el mismo patrón que usa el slider: la entrante pasa a
 * `relative` y la saliente a `absolute` para que compartan hueco durante la
 * transición y el bloque no dé un salto de altura. Aquí además entra el
 * texto, animado con los mismos animadores que los reveals. (El hero ya no
 * lleva pestañas: su fondo es el slider de villas de hero-slider.ts.)
 */




const qa__tabs = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q__tabs = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** Las cuatro clases de contenido que un panel puede animar. */
const partsOf__tabs = (panel: Element) => ({
  headlines: qa__tabs('[data-tab="h"]', panel),
  paragraphs: qa__tabs('[data-tab="p"]', panel),
  ctns: qa__tabs('[data-tab="ctn"]', panel),
  slides: qa__tabs('[data-tab="slide"]', panel),
});

function setupTabs(component: HTMLElement): () => void {
  const triggers = qa__tabs<HTMLElement>('[data-tab-trigger]', component);
  const contents = qa__tabs<HTMLElement>('[data-tab-content]', component);
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
      const oldPanel = q__tabs<HTMLElement>(
        `[data-tab-content="${oldTrigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      const newPanel = q__tabs<HTMLElement>(
        `[data-tab-content="${trigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      if (!oldPanel || !newPanel) return;

      const oldParts = partsOf__tabs(oldPanel);
      const newParts = partsOf__tabs(newPanel);

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
   * `[data-tabs-hero]` era el switch día/noche del hero de ERA, con su propio
   * cruce; ya no existe en el marcado, pero se sigue excluyendo por si el
   * generador de secciones volviera a emitirlo.
   */
  const components = qa__tabs<HTMLElement>('[data-tabs]').filter((el) => !el.hasAttribute('data-tabs-hero'));

  const cleanups = components.map(setupTabs);
  return () => {
    for (const c of cleanups) c();
  };
}

/* ============================================================
   lib/animations/ui.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Comportamientos sueltos de interfaz — port de `initCardParts`,
 * `initSnapSections`, `fitText` y `initFloatingTips` del original.
 */





const qa__ui = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

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

  for (const card of qa__ui<HTMLElement>('[hover-card]')) {
    const headlines = qa__ui('[hover="h"]', card);
    const paragraphs = qa__ui('[hover="p"]', card);
    const lines = qa__ui('[hover="line"]', card);

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
    const sections = qa__ui<HTMLElement>('[data-snap]');
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
    for (const el of qa__ui<HTMLElement>('[data-fit-text]')) {
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
      qa__ui<HTMLElement>('[floating-tip]').map((el) => [el.getAttribute('floating-tip'), el]),
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

    for (const trigger of qa__ui<HTMLElement>('[floating-tip-trigger]')) {
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
