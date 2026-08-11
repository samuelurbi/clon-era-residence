/* eslint-disable @next/next/no-img-element */
import { Fragment } from 'react';
/**
 * GENERADO por scripts/generate-header.mjs — no editar a mano.
 * Rastro de migas de las páginas interiores. Sustituye a la barra de
 * progreso de la home en el mismo hueco de la cabecera.
 *
 * El rótulo va DUPLICADO en el marcado a propósito: el intercambio al
 * pasar el cursor necesita dos copias (ver navItemHover en
 * lib/animations/interactions.ts).
 */

export interface Crumb {
  label: string;
  /** Sin href, la miga es la página actual y no enlaza a ningún sitio. */
  href?: string;
}

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <div data-theme="" className="header-cramps">
      {trail.map((crumb, i) => (
        <Fragment key={crumb.label}>
          {i > 0 && (
        <div className="l2 text-disabled">/</div>
          )}
        <a hover-tab="" aria-label={crumb.label} hover-nav-item-l2="" data-crumb-item="" href={crumb.href ?? "#"} className="nav-item w-inline-block">
          <div className="nav-item_label">
            <div hover="text" className="nav-item_label_text"><div className="l2">{crumb.label}</div></div>
            <div hover="text" className="nav-item_label_text is-2"><div className="l2">{crumb.label}</div></div>
          </div>
        </a>
        </Fragment>
      ))}
    </div>
  );
}
