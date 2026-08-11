'use client';

/**
 * Cromo global: lo que vive por encima de las secciones y reacciona al
 * scroll en todas las páginas.
 *
 * Port de `initCookies`, `initThemeChange`, `initLogo`, `initScrollBar`,
 * `initPins` y `initTabsHero` del original.
 */

import { gsap, ScrollTrigger } from './gsap';
import { DUR, DELAY_REVEAL, BREAKPOINT } from './constants';
import { getLenis } from './scroll-lock';

const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);
const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

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
  const banner = q<HTMLElement>('[data-cookies]');
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

  const accept = q('[data-cookies="accept"]');
  const decline = q('[data-cookies="decline"]');
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
  const themed = qa<HTMLElement>('[data-theme]');
  if (!themed.length) return () => {};

  const triggers: ScrollTrigger[] = [];

  for (const { bg, add, remove } of THEMES) {
    for (const section of qa<HTMLElement>(`[data-bg="${bg}"]`)) {
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
  const logo = q('.header-logo');
  if (!logo) return () => {};

  const bg = qa<HTMLElement>('.header-logo_bg', logo).find((el) => getComputedStyle(el).display !== 'none');
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
    const bar = q<HTMLElement>('[data-s-bar]');
    if (!bar) return;

    const thumb = q<HTMLElement>('[data-s-bar-thumb]', bar);
    const label = q<HTMLElement>('[data-s-bar-label]', bar);

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
  const all = qa<HTMLElement>('[data-pin]');
  if (!all.length) return () => {};

  const cleanups: Array<() => void> = [];

  for (const pin of all) {
    const pulses = qa('[data-pin-pulse]', pin);
    const plus = q('[data-ico-plus="v"]', pin);
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
 *  Switch BY DAY / BY NIGHT del hero
 * ------------------------------------------------------------------ */

/**
 * Cruza las dos versiones del render del hero. El truco del original: la
 * entrante pasa a `relative` y la saliente a `absolute` para que ocupen el
 * mismo hueco durante el fundido y no haya salto de maquetación.
 */
function heroTabs(): () => void {
  const component = q('[data-tabs-hero]');
  if (!component) return () => {};

  const triggers = qa<HTMLElement>('[data-tab-trigger]', component);
  const hilight = q<HTMLElement>('.hero-s_tabs_divider', component);
  if (!triggers.length) return () => {};

  let activeIndex = 0;
  let animating = false;

  triggers[0].classList.add('is-active');

  const updateHilight = () => {
    const active = q<HTMLElement>('[data-tab-trigger].is-active', component);
    if (!active || !hilight) return;
    hilight.className = hilight.className.replace(/\bis-\S+/g, '').trim();
    hilight.classList.add(`is-${active.getAttribute('data-tab-trigger')}`);
  };

  updateHilight();

  const handlers: Array<[HTMLElement, () => void]> = [];

  triggers.forEach((trigger, newIndex) => {
    const onClick = () => {
      if (newIndex === activeIndex || animating) return;

      const oldTrigger = triggers[activeIndex];
      const oldContent = q<HTMLElement>(
        `[data-tab-content="${oldTrigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      const newContent = q<HTMLElement>(
        `[data-tab-content="${trigger.getAttribute('data-tab-trigger')}"]`,
        component,
      );
      if (!oldContent || !newContent) return;

      const newImg = q('[data-tab="img"]', newContent);

      gsap.killTweensOf([oldContent, newContent]);
      animating = true;

      gsap
        .timeline({ onComplete: () => (animating = false) })
        .set(newContent, { display: 'block', position: 'relative', zIndex: 1 })
        .set(oldContent, { display: 'block', position: 'absolute', zIndex: 0 })
        // El alto cambia al intercambiar: sin refrescar, las coreografías
        // del hero seguirían midiendo contra el render anterior.
        .add(() => ScrollTrigger.refresh())
        .fromTo(newImg, { opacity: 0 }, { opacity: 1, duration: DUR.m, ease: 'InOut', overwrite: true })
        .set(oldContent, { display: 'none' });

      oldTrigger.classList.remove('is-active');
      trigger.classList.add('is-active');
      activeIndex = newIndex;
      updateHilight();
    };

    trigger.addEventListener('click', onClick);
    handlers.push([trigger, onClick]);
  });

  return () => {
    for (const [el, fn] of handlers) el.removeEventListener('click', fn);
  };
}

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
  const stale = qa<HTMLAnchorElement>(`a.${CURRENT_CLASS}`);
  for (const link of stale) {
    link.classList.remove(CURRENT_CLASS);
    link.removeAttribute('aria-current');
  }

  /*
   * Se recorren TODOS los enlaces del documento, no sólo los de la
   * navegación. Webflow marcaba con `w--current` cualquier enlace que
   * apuntara a la página actual, estuviera donde estuviera: la auditoría de
   * scripts/audit-shared-blocks.mjs encontró que también afecta al botón
   * «View available apartments» del CTA y a los del menú.
   */
  for (const link of qa<HTMLAnchorElement>('a[href]')) {
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
    heroTabs(),
    markCurrentLink(),
  ];
  return () => {
    for (const c of cleanups) c();
  };
}
