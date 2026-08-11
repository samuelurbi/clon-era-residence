'use client';

/**
 * Filtros, ordenación y desplegables del listado — port de `initFilter()`,
 * `initSort()` e `initSelect()` del original.
 *
 * Sólo actúan en `/apartments`, que es donde está la barra de controles.
 *
 * El filtro sincroniza el estado con la query string (`?typology=...`), así
 * que una selección se puede compartir por enlace y sobrevive a recargar.
 */

import { gsap, ScrollTrigger } from './gsap';
import { DUR } from './constants';

const qa = <T extends Element>(sel: string, root: ParentNode = document) => [...root.querySelectorAll<T>(sel)];
const q = <T extends Element>(sel: string, root: ParentNode = document) => root.querySelector<T>(sel);

/** `sort-area` → `sortArea`, para leerlo del dataset. */
const camel = (s: string) => s.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());

/* ------------------------------------------------------------------
 *  Filtrado
 * ------------------------------------------------------------------ */

function filters(): () => void {
  const cleanups: Array<() => void> = [];

  for (const wrapper of qa<HTMLElement>('[data-filter]')) {
    const list = q<HTMLElement>('[data-filter-list]', wrapper);
    if (!list) continue;

    const countEl = q<HTMLElement>('[data-filter-count]', wrapper);
    const emptyEl = q<HTMLElement>('[data-filter-empty]', wrapper);
    const items = qa<HTMLElement>('[data-filter-item]', list);
    const active: Record<string, string> = {};

    /** Un item pasa si cumple TODOS los grupos activos a la vez. */
    const getVisible = () => {
      if (!Object.keys(active).length) return items;
      return items.filter((item) =>
        Object.entries(active).every(([group, value]) =>
          qa<HTMLElement>(`[data-${group}]`, item)
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

    for (const btn of qa<HTMLElement>('[data-filter-trigger]', wrapper)) {
      const onClick = () => {
        const group = btn.dataset.filterGroup;
        const value = btn.dataset.filterTrigger;
        if (!group || value === undefined) return;

        for (const b of qa(`[data-filter-group="${group}"]`, wrapper)) b.classList.remove('is-active');
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
      ...new Set(qa<HTMLElement>('[data-filter-trigger]', wrapper).map((b) => b.dataset.filterGroup)),
    ];

    for (const group of groups) {
      if (!group) continue;
      const value = params.get(group);
      const btn = value
        ? q<HTMLElement>(`[data-filter-group="${group}"][data-filter-trigger="${value}"]`, wrapper)
        : q<HTMLElement>(`[data-filter-group="${group}"][data-filter-trigger="*"]`, wrapper);
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

  for (const wrapper of qa<HTMLElement>('[data-sort]')) {
    const list = q<HTMLElement>('[data-sort-list]', wrapper);
    if (!list) continue;

    const items = qa<HTMLElement>('[data-sort-item]', list);
    const state: { key: string | null; order: string } = { key: null, order: 'asc' };

    /** Reordena moviendo los nodos: no hay copia de datos que mantener. */
    const arrange = () => {
      if (!state.key) return;
      const dataKey = camel(`sort-${state.key}`);

      [...items]
        .sort((a, b) => {
          const aVal = q<HTMLElement>(`[data-sort-${state.key}]`, a)?.dataset[dataKey] ?? '';
          const bVal = q<HTMLElement>(`[data-sort-${state.key}]`, b)?.dataset[dataKey] ?? '';
          const aNum = parseFloat(aVal);
          const bNum = parseFloat(bVal);
          // Numérico si ambos lo son; si no, alfabético.
          const isNum = !Number.isNaN(aNum) && !Number.isNaN(bNum);
          const cmp = isNum ? aNum - bNum : aVal.localeCompare(bVal);
          return state.order === 'asc' ? cmp : -cmp;
        })
        .forEach((item) => list.appendChild(item));
    };

    for (const btn of qa<HTMLElement>('[data-sort-trigger]', wrapper)) {
      const onClick = () => {
        if (btn.classList.contains('is-active')) return;

        state.key = btn.dataset.sortTrigger ?? null;
        state.order = btn.dataset.sortOrder ?? 'asc';

        for (const b of qa('[data-sort-trigger]', wrapper)) b.classList.remove('is-active');
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
    q<HTMLElement>('[data-sort-trigger]', wrapper)?.click();
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

  for (const dropdown of qa<HTMLElement>('[data-select=""]')) {
    const trigger = q<HTMLElement>('[data-select="btn"]', dropdown);
    const values = qa<HTMLElement>('[data-select="value"]', dropdown);
    const items = qa<HTMLElement>('[data-select="item"]', dropdown);
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
  const buttons = qa<HTMLElement>('[data-reset]');
  if (!buttons.length) return () => {};

  const update = () => {
    const filtered = qa<HTMLElement>('[data-filter-trigger]:not([data-filter-trigger="*"])').some((b) =>
      b.classList.contains('is-active'),
    );
    const sortTriggers = qa<HTMLElement>('[data-sort-trigger]');
    const sorted = sortTriggers.length > 0 && !sortTriggers[0].classList.contains('is-active');

    for (const btn of buttons) btn.classList.toggle('is-disabled', !filtered && !sorted);
  };

  const cleanups: Array<() => void> = [];

  for (const btn of qa<HTMLElement>('[data-filter-trigger], [data-sort-trigger]')) {
    btn.addEventListener('click', update);
    cleanups.push(() => btn.removeEventListener('click', update));
  }

  for (const btn of buttons) {
    const onReset = () => {
      if (btn.classList.contains('is-disabled')) return;
      for (const b of qa<HTMLElement>('[data-filter-trigger="*"]')) b.click();
      q<HTMLElement>('[data-sort-trigger]')?.click();
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
