/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

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

import { gsap, ScrollTrigger } from './gsap';
import { DUR, BREAKPOINT } from './constants';
import { animateTextH, animateTextP, animateCtn } from './reveal';

/** Elemento que además cachea su tween horizontal para ScrollTrigger. */
type HorizontalArea = HTMLElement & { _horizontalTween?: gsap.core.Tween };

const q = <T extends Element>(sel: string, root: ParentNode = document) =>
  root.querySelector<T>(sel);
const qa = (sel: string, root: ParentNode = document) => [...root.querySelectorAll(sel)];

/**
 * El hero: el contenido sube más rápido que el fondo y luego el fondo se
 * acerca. Es lo que descubre el conjunto residencial y sus hotspots.
 *
 * Depende de la altura real del fondo, así que espera a que la imagen
 * cargue: medirla antes daría 0 y la animación no recorrería nada.
 */
function heroFlow(): () => void {
  const area = q<HTMLElement>('.hero-scroll-area');
  if (!area) return () => {};

  const heroS = q('.hero-s', area);
  const bg = q<HTMLElement>('.hero-w_bg', area);
  const img = bg && q<HTMLImageElement>('.img', bg);
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
  const section = q('.benefits-intro-w');
  if (!section) return () => {};

  const tl = gsap
    .timeline({
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
    })
    .fromTo(qa('[data-circle-text]', section), { wordSpacing: '0rem' }, { wordSpacing: '10rem', ease: 'none' });

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
  const wrapper = q('.loc-info-w');
  if (!wrapper) return () => {};

  return zoomInWithText(wrapper, q('.loc-info-s', wrapper), {
    paragraphs: qa('[data-part="p"]', wrapper),
    ctns: qa('[data-part="ctn"]', wrapper),
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
  const area = q<HorizontalArea>('.loc-scroll-area');
  if (!area) return () => {};

  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const track = q<HTMLElement>('.loc-scroll-area_track', area);
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
    const lines = qa('.loc-intro-s_title_line', area);
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

    const flowerIntro = q('.flower.loc-intro', area);
    if (flowerIntro) {
      gsap.fromTo(flowerIntro, { xPercent: 0 }, {
        xPercent: -25,
        ease: 'none',
        scrollTrigger: { trigger: area, start: 'top top', end: 'bottom bottom', scrub: 0.25 },
      });
    }

    const flowerPath = q('.flower.loc-path', area);
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
  const path = q('.img.loc-path');
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
  const wrapper = q('.loc-w');
  const img = wrapper && q('.loc-w_bg_img', wrapper);
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
  const area = q('.amen-scroll-area');
  if (!area) return () => {};

  const wrapper = q('.amen-w', area);
  const cms = q('.amen-cms', area);
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
  const area = q('.arch-scroll-area');
  if (!area) return () => {};

  const mm = gsap.matchMedia();

  mm.add(`(min-width: ${BREAKPOINT}px)`, () => {
    const introS = q('.arch-intro-s', area);
    const archS = q('.arch-w', area);
    if (!introS || !archS) return;

    const introBgL = q('.arch-intro-s_bg_l', introS);
    const introBgR = q('.arch-intro-s_bg_r', introS);
    const flowerL = q('.flower.arch-intro-l', introS);
    const flowerR = q('.flower.arch-intro-r', introS);
    const archBg = q('.img', archS);
    const title = q('[data-text="h"]', archS);
    const desc = q('[data-text="p"]', archS);

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
  const wrapper = q('.footer-w');
  if (!wrapper) return () => {};

  const clipTarget = q('[data-footer-clip]');
  const clipEnd = window.innerWidth >= BREAKPOINT ? 'inset(8% 22% 8% 22%)' : 'inset(4% 32% 4% 32%)';

  const cleanup = zoomInWithText(
    wrapper,
    q('.footer-s', wrapper),
    {
      headlines: qa('[data-text="h"]', wrapper),
      paragraphs: qa('[data-text="p"]', wrapper),
      ctns: qa('[data-text="ctn"]', wrapper),
    },
    (tl) => {
      if (clipTarget) {
        tl.fromTo(clipTarget, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: clipEnd, ease: 'none' }, 0);
      }
    },
  );

  // El indicador "scroll" se apaga al llegar al pie.
  const scrollDown = q('.s-down');
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
  const wrapper = q('.lot-w');
  if (!wrapper) return () => {};

  const header = q('.lot-s_info_header', wrapper);
  const line = q('.lot-s_info_line', wrapper);
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
