'use client';

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

import type Lenis from 'lenis';

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
