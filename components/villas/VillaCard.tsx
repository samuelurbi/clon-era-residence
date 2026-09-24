/* eslint-disable @next/next/no-img-element */
/**
 * Tarjeta de villa del listado y del bloque «otras villas» de la ficha.
 * El marcado es el del sitio original (clases de Webflow intactas) con los
 * valores sustituidos por los de data/villa-cards.ts.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-apartment-card.mjs sobre
 * la tarjeta del sitio de origen; al personalizarla para Bahía Mar pasa a
 * mantenerse a mano y regenerarla desharía estos cambios.
 *
 * Los huecos de la tarjeta no son los del original (bloque, planta, m²,
 * terraza): ver la cabecera de data/villa-cards.ts. Cuando el master plan
 * no da unidades (tipos D y E) el segundo hueco enseña los niveles.
 */

import type { VillaCardData } from '@/data/villa-cards';

export function VillaCard({ card }: { card: VillaCardData }) {
  return (
    <div data-sort-item="" data-filter-item="" role="listitem" className="apart-cms_list_item w-dyn-item">
      <a data-sort-relevant={card.sortRelevant} hover-apart-card="" href={card.href} className="apart-card w-inline-block">
        <div className="apart-card_c">
          <div className="apart-card_t">
            <h2 data-type={card.filterType} className="l2 a-center">{card.name}</h2>
            <div className="u-4"></div>
            <p id="" className="l2 reg a-center">
              <span>Completion:{' '}</span>
              <span>{card.completion}</span>
            </p>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_img">
            <div className="apart-card_img_prim">
              <img src={card.image} loading="eager" alt={card.name} sizes="100vw" srcSet={card.imageSrcset} className="img contain" />
            </div>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_b">
            <div className="apart-card_data-list">
              <p id="" className="l2 reg a-center">
                <span>Type{' '}</span>
                <span>{card.type}</span>
              </p>
              <div className="data-divider"></div>
              <p id="" className="l2 reg a-center">
                <span>{card.unitsLabel ?? `${card.levels} ${card.levels === '1' ? 'level' : 'levels'}`}</span>
              </p>
              <div className="data-divider"></div>
              <p id="" className="l2 reg a-center">
                <span>{card.bathrooms}</span>
                <span>{' '}bath</span>
              </p>
            </div>
            <div className="u-16"></div>
            <div className="apart-card_info">
              <h3 id="" data-bed={card.filterBed} className="h5">
                <span>{card.bedrooms}</span>
                <span>{' '}bed</span>
              </h3>
              <div className="h5">/</div>
              <h4 data-sort-size={card.sortSize} className="h5"><span>{card.category}</span></h4>
            </div>
            <div className="u-16"></div>
            <div className="apart-card_add">
              <h5 id="" className="l1 a-center">
                <span>+</span>
                <span>{' '}{card.extra}</span>
              </h5>
            </div>
          </div>
        </div>
        <div className="apart-card_decor">
          <div data-wf--decor--variant="med" className="decor">
            <div className="frame_l-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_t-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rt w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_r-tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_b-lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_fill_tb w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="var(--_colors---other--bg)"></rect>
              </svg>
            </div>
            <div className="frame_fill_lr w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="100%" height="100%" fill="var(--_colors---other--bg)"></rect>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 lt w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 rt w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 rb w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
            <div className="frame_fill-c w-variant-db77920b-274b-9558-1ced-34e87f5b7d94 lb w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 48" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="24,0 48,24 24,48 0,24" fill="var(--_colors---other--bg)"></polygon>
              </svg>
            </div>
          </div>
        </div>
        <div hover="shadow" className="apart-card_shadow"></div>
      </a>
    </div>
  );
}
