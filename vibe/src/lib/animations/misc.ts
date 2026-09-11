/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

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

import { gsap } from './gsap';
import { BREAKPOINT } from './constants';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];

export function initMisc(): () => void {
  /* Año en curso, para el aviso del pie. */
  const year = String(new Date().getFullYear());
  for (const el of qa('.year')) el.textContent = year;

  /*
   * Última coma fuera.
   *
   * Las listas se escriben con una coma tras cada elemento; la del último
   * sobra y se elimina. Es destructivo —quita el nodo— así que sólo debe
   * correr una vez por render, cosa que garantiza el ciclo de la capa de
   * animación.
   */
  for (const list of qa('[data-comma-list]')) {
    const commas = qa('[data-comma]', list);
    commas.at(-1)?.remove();
  }

  /*
   * La miga de la página actual se marca como activa. El original la
   * distingue por `href="#"`, que es lo que Webflow deja en la miga que no
   * enlaza a ningún sitio.
   */
  const marked: Element[] = [];
  for (const el of qa('[data-crumb-item]')) {
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
