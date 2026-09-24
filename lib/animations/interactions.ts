'use client';

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

import { gsap, ScrollTrigger, SplitText } from './gsap';
import { DUR, STAGGER, BREAKPOINT } from './constants';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

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
    const magnets = qa<HTMLElement>('[data-magnetic-btn]');
    const inners = (m: HTMLElement) => qa<HTMLElement>('[data-magnetic-inner]', m);

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

  for (const btn of qa<HTMLElement>('[hover-btn-circle]')) {
    const arcs = qa('[data-arc]', btn);
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

  for (const item of qa<HTMLElement>('[hover-nav-item]')) {
    const texts = qa<HTMLElement>("[hover='text']", item);
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

  for (const item of qa<HTMLElement>('[hover-link]')) {
    const texts = qa<HTMLElement>("[hover='text']", item);
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

  for (const wrapper of qa<HTMLElement>('[data-video-playpause]')) {
    const videos = qa<HTMLVideoElement>('.video', wrapper);
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
