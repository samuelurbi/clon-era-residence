/* eslint-disable @next/next/no-img-element */
/**
 * Ficha de villa de Bahía Mar. Marcado del original con las clases de
 * Webflow intactas; todos los valores salen de data/villas.ts.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-apartment-detail.mjs
 * sobre el marcado del sitio de origen (ERA Residence, del que ya no queda
 * ninguna imagen ni texto aquí). Al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano; regenerarlo desharía estos cambios.
 *
 * Qué se pinta y de dónde:
 *   - Plano principal: `villa.plans[0]`.
 *   - Galería (móvil en carrusel horizontal, escritorio en columna bajo el
 *     plano): `villa.gallery`, cuatro exteriores (g1..g4) y cuatro
 *     interiores (i1..i4) de cada villa; con srcset() de data/villas.ts.
 *   - Pestaña INFO: `villa.description`, un <p> por párrafo.
 *   - Pestaña BENEFITS: la lista «cada unidad cuenta con» del brochure
 *     (BRIEF.md), común a las cinco tipologías.
 */

import { Fragment } from 'react';
import { srcset, type Villa } from '@/data/villas';

/**
 * Lo que trae cada villa según el brochure («cada unidad cuenta con»).
 * Es común a las cinco tipologías; lo específico de cada una (cava,
 * terrazas lounge, pérgolas…) va en `villa.features`.
 */
const BENEFITS = [
  'Beach, bay & Los Haitises views',
  'Private pool',
  'BBQ terrace & lounge garden',
  'Pergola porch',
  'Bamboo floors',
  'Chukum walls',
  'Home automation',
  'Eco-efficient kitchen',
  'Solar panels',
];

/**
 * Texto alternativo de cada imagen de la galería a partir de su nombre
 * (`villa-<slug>-g1..g4` exteriores, `i1..i4` interiores; ver villas.ts).
 */
function galleryAlt(villa: Villa, src: string): string {
  const m = src.match(/-([gi])(\d)\.webp$/);
  if (!m) return villa.name;
  const kind = m[1] === 'g' ? 'exterior' : 'interior';
  return `${villa.name} — ${kind} render ${m[2]}`;
}

export function VillaDetail({
  villa,
}: {
  villa: Villa;
}) {
  return (
    <section data-bg="light" className="section clip">
      <div className="container">
        <div className="lot-w">
          <div className="lot-s">
            <div className="lot-s_info">
              <div className="grid h-100">
                <div className="lot-s_info_c">
                  <div className="lot-s_info_header is-top">
                    <div className="u-48"></div>
                    <div className="u-272 b-mob"></div>
                    <div className="lot-s_info_header_num">
                      <h1 id="" className="h3">
                        <span>{villa.name}</span>
                      </h1>
                      <div className="b-mob">
                        <div className="lot-s_media_layout_diagrams">
                        </div>
                      </div>
                    </div>
                    <div className="u-24"></div>
                    <h2 className="l2">{villa.category}</h2>
                    <div className="u-4"></div>
                    <h3 id="" className="l2 reg">
                      <span>Typology:{' '}</span>
                      <span>Type {villa.type}</span>
                    </h3>
                    <div className="u-16"></div>
                  </div>
                  <div className="lot-s_media b-mob">
                    <div className="lot-s_media_c scrollbar-none">
                      <div className="lot-s_media_layout">
                        <div className="lot-s_media_layout_img-prim">
                          <img src={villa.plans[0].image} loading="eager" data-lightbox="" alt={`${villa.name} — ${villa.plans[0].label}`} sizes="100vw" className="img contain" />
                        </div>
                      </div>
                      <div className="lot-media-cms w-dyn-list">
                        <div role="list" className="lot-media-cms_list w-dyn-items">
                          {villa.gallery.map((src) => (
                            <div key={src} role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                              <img src={src} loading="lazy" data-lightbox="" alt={galleryAlt(villa, src)} sizes="100vw" srcSet={srcset(src)} className="img _w-auto" />
                            </div>
                          ))}
                          
                          
                        </div>
                        <div className="cms_empty-none w-dyn-hide w-dyn-empty"></div>
                      </div>
                    </div>
                  </div>
                  <div data-lenis-scroll="" className="lot-s_info_t scrollbar-none">
                    <div className="u-64"></div>
                    <div className="lot-s_info_data">
                      <div className="data-item">
                        <h4 className="l1 reg">Bedrooms</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{villa.bedrooms}</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Bathrooms</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{villa.bathrooms}{villa.halfBath ? ' + ½' : ''}</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Levels</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{villa.levels}</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Living areas</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{villa.livingAreas}</h5>
                      </div>
                    </div>
                    <div className="u-48"></div>
                    <div data-tabs="" className="lot-s_info_more">
                      <div data-tabs-hilight="hor" className="tabs">
                        <div data-tab="" data-tab-trigger="desc" hover-tab="" className="tab"><div className="l1">Info</div></div>
                        <div data-tab="" data-tab-trigger="benefits" hover-tab="" className="tab"><div className="l1">Benefits</div></div>
                        <div className="tabs_line"><div className="line-h"></div></div>
                        <div data-tab-hilight="" className="tabs_hilight"></div>
                      </div>
                      <div className="lot-s_info_more_contents">
                        <div data-tab-content="desc" className="lot-s_info_more_content is-1">
                          <div className="u-16"></div>
                          {villa.description.map((paragraph, i) => (
                            <Fragment key={i}>
                              {i > 0 && <div className="u-16"></div>}
                              <p data-tab="p" className="p1">
                                {paragraph}
                              </p>
                            </Fragment>
                          ))}
                          <div className="u-160 b-desk"></div>
                        </div>
                        <div data-tab-content="benefits" className="lot-s_info_more_content">
                          <div className="u-16"></div>
                          <div className="benefits-tag-cms w-dyn-list">
                            <div role="list" className="benefits-tag-cms_list tag-list w-dyn-items">
                              {BENEFITS.map((benefit) => (
                                <div key={benefit} data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                  <div className="tag"><h4 className="p2">{benefit}</h4></div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="u-160 b-desk"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lot-s_info_b">
                    <div className="u-48 b-mob"></div>
                    <div className="u-16 b-desk"></div>
                    <div className="btn-list">
                      <a data-modal-cta-btn="book-a-call" hover-btn="" hover-nav-item="" aria-label="Submit a request" data-wf--btn--variant="sec" href="#" className="btn w-inline-block">
                        <div className="btn_label">
                          <div className="btn_label_text"><div hover="text" className="l1">Submit a request</div></div>
                          <div className="btn_label_text is-2"><div hover="text" className="l1">Submit a request</div></div>
                        </div>
                        <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                      </a>
                      <a aria-label="pdf" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec-circle" href={`/documents/villa-${villa.slug}-plan.pdf`} className="btn w-variant-9f3f61aa-a2e8-bef6-01f9-2f3463919d6d w-inline-block">
                        <div className="btn_label">
                          <div className="btn_label_text"><div hover="text" className="l1">pdf</div></div>
                          <div className="btn_label_text is-2"><div hover="text" className="l1">pdf</div></div>
                        </div>
                        <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                      </a>
                    </div>
                    <div className="u-48"></div>
                  </div>
                  <div className="lot-s_info_line is-top"><div data-scroll-reveal="line" className="line-v"></div></div>
                </div>
              </div>
            </div>
            <div className="lot-s_media b-desk">
              <div className="grid">
                <div className="lot-s_media_c">
                  <div className="lot-s_media_layout">
                    <div className="grid _5-columns">
                      <div hover-pin-trigger="" hover-media-item="" className="lot-s_media_layout_img-prim theme_on-color">
                        <img src={villa.plans[0].image} loading="eager" data-lightbox="" alt={`${villa.name} — ${villa.plans[0].label}`} sizes="100vw" className="img contain" />
                        <div hover="btn" className="lot-media-item_btn">
                          <div hover-pin="" className="pin">
                            <div hover="bg" className="pin_dot">
                              <div hover="ico" className="ico-16 theme_on-light">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5292 3.52827C11.7896 3.26792 12.2123 3.26792 12.4726 3.52827C12.733 3.78862 12.733 4.21128 12.4726 4.47163L8.94429 7.99995L12.4726 11.5283C12.733 11.7886 12.733 12.2113 12.4726 12.4716C12.2123 12.732 11.7896 12.732 11.5292 12.4716L8.00093 8.94331L4.47261 12.4716C4.21226 12.732 3.7896 12.732 3.52925 12.4716C3.2689 12.2113 3.2689 11.7886 3.52925 11.5283L7.05757 7.99995L3.52925 4.47163C3.2689 4.21128 3.2689 3.78862 3.52925 3.52827C3.7896 3.26792 4.21226 3.26792 4.47261 3.52827L8.00093 7.05659L11.5292 3.52827Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                            <div className="pin_bg">
                              <div data-pin-pulse="" className="pin_bg_pulse"></div>
                              <div data-pin-pulse="" className="pin_bg_pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="lot-s_media_layout_diagrams">
                      </div>
                    </div>
                    <div className="u-48"></div>
                  </div>
                  <div className="lot-media-cms w-dyn-list">
                    <div role="list" className="lot-media-cms_list w-dyn-items">
                      {villa.gallery.map((src) => (
                        <div key={src} role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                          <div hover-pin-trigger="" hover-media-item="" className="lot-media-item theme_on-color">
                            <div className="img-w h-auto">
                              <img src={src} loading="eager" data-lightbox="" alt={galleryAlt(villa, src)} sizes="100vw" srcSet={srcset(src)} className="img h-auto" />
                              <div hover="btn" className="lot-media-item_btn">
                                <div hover-pin="" className="pin">
                                  <div hover="bg" className="pin_dot">
                                    <div hover="ico" className="ico-16 theme_on-light">
                                      <div className="ico w-embed">
                                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M11.5292 3.52827C11.7896 3.26792 12.2123 3.26792 12.4726 3.52827C12.733 3.78862 12.733 4.21128 12.4726 4.47163L8.94429 7.99995L12.4726 11.5283C12.733 11.7886 12.733 12.2113 12.4726 12.4716C12.2123 12.732 11.7896 12.732 11.5292 12.4716L8.00093 8.94331L4.47261 12.4716C4.21226 12.732 3.7896 12.732 3.52925 12.4716C3.2689 12.2113 3.2689 11.7886 3.52925 11.5283L7.05757 7.99995L3.52925 4.47163C3.2689 4.21128 3.2689 3.78862 3.52925 3.52827C3.7896 3.26792 4.21226 3.26792 4.47261 3.52827L8.00093 7.05659L11.5292 3.52827Z" fill="currentColor"></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="pin_bg">
                                    <div data-pin-pulse="" className="pin_bg_pulse"></div>
                                    <div data-pin-pulse="" className="pin_bg_pulse"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="cms_empty-none w-dyn-hide w-dyn-empty"></div>
                  </div>
                  <div className="u-48"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
