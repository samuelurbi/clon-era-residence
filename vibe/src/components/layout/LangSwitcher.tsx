/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Selector de idioma, fijo abajo a la derecha en todas las páginas.
 *
 * Aspecto de interruptor: una pastilla con los dos idiomas y un «pulgar»
 * (`.lang-switch_thumb`) que marca el activo y se desliza al otro al pulsar.
 *
 * Por dentro siguen siendo enlaces normales (`/villas` ↔ `/es/villas`):
 * cambiar de idioma es navegar (ver lib/i18n.ts). Así lo intercepta
 * PageTransitions como cualquier otro enlace —misma salida animada— y la
 * capa de animación se reinicia sobre el texto nuevo.
 *
 * El pulgar se mueve EN EL CLIC, no al terminar la navegación: la salida
 * animada tarda casi un segundo y un interruptor que responde tarde parece
 * roto. Se guarda el idioma pulsado junto con la ruta desde la que se
 * pulsó; en cuanto la ruta cambia, esa marca deja de aplicar sola y manda
 * la URL. Sin efectos ni estados que limpiar.
 *
 * Este componente vive FUERA de LangKeyed, así que no se remonta al
 * cambiar de idioma: por eso la transición CSS del pulgar llega a verse.
 *
 * Se conservan la query y el ancla: en el listado de villas los filtros
 * viven en la query y no se pierden al cambiar de idioma.
 *
 * Capa: la de la cabecera (1200 en webflow.css). Por debajo de los modales
 * (5000) y del preloader (11000), que deben taparlo.
 */

import { useEffect, useRef, useState } from 'react';
import { usePathname } from '@/shims/next-navigation';
import { LANGS, langFromPath, localize, stripLang, type Lang } from '@/lib/i18n';

const LABEL: Record<Lang, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  es: { short: 'ES', name: 'Español' },
};

export function LangSwitcher() {
  const pathname = usePathname() || '/';
  const current = langFromPath(pathname);
  const base = stripLang(pathname);

  /* Idioma pulsado y desde qué ruta: vale solo mientras no cambie la ruta. */
  const [pressed, setPressed] = useState<{ lang: Lang; from: string } | null>(null);
  const shown = pressed && pressed.from === pathname ? pressed.lang : current;

  /*
   * La query y el ancla solo existen en cliente. Se añaden al enlace tras
   * montar, escribiendo el `href` en el DOM: así el primer render coincide
   * con el del servidor (sin avisos de hidratación). PageTransitions lee el
   * `href` del elemento en el clic, así que ve ya la versión completa.
   */
  const navRef = useRef<HTMLElement>(null);
  const syncHref = () => {
    const suffix = window.location.search + window.location.hash;
    for (const link of navRef.current?.querySelectorAll<HTMLAnchorElement>('a[hreflang]') ?? []) {
      link.setAttribute('href', localize(base, link.hreflang as Lang) + suffix);
    }
  };
  useEffect(syncHref);
  /*
   * Y otra vez justo antes del clic: los filtros del listado cambian la
   * query con `history.replaceState`, sin cambio de ruta ni render.
   * `pointerdown` y `focus` llegan siempre antes que el `click`.
   */

  /* `<html lang>` sigue a la ruta: lectores de pantalla y traductores. */
  useEffect(() => {
    document.documentElement.lang = current;
  }, [current]);

  return (
    <nav
      ref={navRef}
      onPointerDown={syncHref}
      onFocus={syncHref}
      className="lang-switch"
      data-active={shown}
      aria-label={current === 'es' ? 'Idioma' : 'Language'}
    >
      <span className="lang-switch_thumb" aria-hidden="true" />
      {LANGS.map((lang) =>
        lang === current ? (
          <span
            key={lang}
            className={`lang-switch_link${lang === shown ? ' is-active' : ''}`}
            aria-current="true"
            title={LABEL[lang].name}
          >
            {LABEL[lang].short}
          </span>
        ) : (
          <a
            key={lang}
            className={`lang-switch_link${lang === shown ? ' is-active' : ''}`}
            href={localize(base, lang)}
            hrefLang={lang}
            lang={lang}
            title={LABEL[lang].name}
            aria-label={LABEL[lang].name}
            onClick={() => setPressed({ lang, from: pathname })}
          >
            {LABEL[lang].short}
          </a>
        ),
      )}
    </nav>
  );
}
