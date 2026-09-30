/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
import { useLang } from '@/lib/use-lang';
import { localize } from '@/lib/i18n';
import type { Crumb } from '@/data/crumbs';
/**
 * Rastro de migas de las páginas interiores. Sustituye a la barra de
 * progreso de la home en el mismo hueco de la cabecera.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-header.mjs, pero con los
 * dos idiomas pasa a mantenerse a mano. Es cliente para leer el idioma de
 * la URL: las páginas son las mismas en inglés y en español, así que les
 * pasan los rótulos en los dos y aquí se elige. Los `href` se escriben en
 * inglés (`/villas`) y se localizan aquí.
 *
 * El rótulo va DUPLICADO en el marcado a propósito: el intercambio al
 * pasar el cursor necesita dos copias (ver navItemHover en
 * lib/animations/interactions.ts).
 */

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const lang = useLang();

  return (
    <div data-theme="" className="header-cramps">
      {trail.map((crumb, i) => {
        const label = typeof crumb.label === 'string' ? crumb.label : crumb.label[lang];
        return (
        <Fragment key={label}>
          {i > 0 && (
        <div className="l2 text-disabled">/</div>
          )}
        <a hover-tab="" aria-label={label} hover-nav-item-l2="" data-crumb-item="" href={crumb.href ? localize(crumb.href, lang) : "#"} className="nav-item w-inline-block">
          <div className="nav-item_label">
            <div hover="text" className="nav-item_label_text"><div className="l2">{label}</div></div>
            <div hover="text" className="nav-item_label_text is-2"><div className="l2">{label}</div></div>
          </div>
        </a>
        </Fragment>
        );
      })}
    </div>
  );
}
