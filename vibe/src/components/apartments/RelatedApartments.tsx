/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-detail.mjs — no editar a mano.
 *
 * Bloque «otras viviendas» del pie de la ficha. Usa la misma tarjeta que el
 * listado: se comprobó que el original repite ahí el mismo marcado.
 */

import type { ApartmentCardData } from '@/data/apartment-cards';
import { ApartmentCard } from './ApartmentCard';

export function RelatedApartments({ cards }: { cards: ApartmentCardData[] }) {
  return (
    <section data-bg="light" className="section z-2 clip">
      <div className="container">
        <div className="other-w">
          <div className="grid">
            <div className="other-s">
              <div className="u-48"></div>
              <div className="other-s_cms">
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="apart-cms w-dyn-list">
                  <div data-sort-list="" data-filter-list="" role="list" className="apart-benefits-cms_list c-2 w-dyn-items">
{cards.map((card) => (
  <ApartmentCard key={card.code} card={card} />
))}</div>
                </div>
              </div>
              <div className="u-32"></div>
              <div className="btn-list center">
                <a aria-label="View all" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="/apartments" className="btn w-inline-block">
                  <div className="btn_label">
                    <div className="btn_label_text"><div hover="text" className="l1">View all</div></div>
                    <div className="btn_label_text is-2"><div hover="text" className="l1">View all</div></div>
                  </div>
                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                </a>
              </div>
              <div className="u-48"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
