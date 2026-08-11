'use client';

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

import { gsap } from './gsap';
import { DUR } from './constants';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

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
  const tabs = qa<HTMLElement>('[data-tab]', wrapper).filter((el) => el.hasAttribute('data-tab-trigger'));
  const hilight = q<HTMLElement>('[data-tab-hilight]', wrapper);
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
  const cleanups = qa<HTMLElement>('[data-tabs-hilight]').map(setupHilight);
  return () => {
    for (const c of cleanups) c();
  };
}
