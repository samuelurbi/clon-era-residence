/* ============================================================
 *  COMP-PAGES — 11 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { Apartment, ApartmentCardData, ApartmentExtras, CTA_IMAGES, apartmentCards, type CtaImage } from '@/data';

/* ============================================================
   components/apartments/ApartmentArch.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde apartments/011.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function ApartmentArch() {
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="other-title-w">
          <div className="other-title-s">
            <div className="other-title-s_t">
              <div className="u-160"></div>
              <div className="grid">
                <div className="other-title-s_title">
                  <p data-scroll-reveal="h" className="h3 a-center">similar options</p>
                </div>
              </div>
              <div className="u-48"></div>
            </div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="other-title-s_b">
              <div className="u-48"></div>
              <div className="grid">
                <div className="s_title">
                  <p data-scroll-reveal="p" className="l1 a-center">
                    Other apartments 
                    <br />
                    that might suit your needs
                  </p>
                </div>
              </div>
              <div className="u-16"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/apartments/ApartmentCard.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-card.mjs — no editar a mano.
 *
 * Tarjeta de apartamento del listado. El marcado es el del sitio original
 * (clases de Webflow intactas) con los valores sustituidos por datos.
 */


export function ApartmentCard({ card }: { card: ApartmentCardData }) {
  return (
    <div data-sort-item="" data-filter-item="" role="listitem" className="apart-cms_list_item w-dyn-item">
      <a data-sort-relevant={card.sortRelevant ?? undefined} hover-apart-card="" href={card.href} className="apart-card w-inline-block">
        <div className="apart-card_c">
          <div className="apart-card_t">
            <h2 data-type={card.filterType ?? undefined} className="l2 a-center">{card.category}</h2>
            <div className="u-4"></div>
            <p id="" className="l2 reg a-center">
              <span>Completion:</span>
              <span>{card.completion}</span>
            </p>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_img">
            <div className="apart-card_img_prim">
              <img src={card.image ?? undefined} loading="eager" alt="" sizes="100vw" srcSet={card.imageSrcset ?? undefined} className="img contain" />
            </div>
          </div>
          <div className="u-16"></div>
          <div className="apart-card_b">
            <div className="apart-card_data-list">
              <p id="" className="l2 reg a-center">
                <span>№</span>
                <span>{card.code}</span>
              </p>
              <div className="data-divider"></div>
              <p id="" className="l2 reg a-center">
                <span>Block</span>
                <span>{card.block}</span>
              </p>
              <div className="data-divider"></div>
              <p id="" className="l2 reg a-center">
                <span>{card.floor}</span>
                <span>floor</span>
              </p>
            </div>
            <div className="u-16"></div>
            <div className="apart-card_info">
              <h3 id="" data-bed={card.filterBed ?? undefined} className="h5">
                <span>{card.bedrooms}</span>
                <span>bed</span>
              </h3>
              <div className="h5">/</div>
              <h4 data-sort-area={card.sortArea ?? undefined} className="h5"><span>{card.area}</span></h4>
            </div>
            <div className="u-16"></div>
            <div className="apart-card_add">
              <h5 id="" className="l1 a-center">
                <span>+</span>
                <span>{card.terrace}</span>
                <span></span>
                <span>Terrace</span>
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

/* ============================================================
   components/apartments/ApartmentDetail.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-detail.mjs — no editar a mano.
 *
 * Ficha de apartamento. Marcado del original con las clases de Webflow
 * intactas; los valores propios de cada vivienda salen de los datos.
 */



export function ApartmentDetail({
  apartment,
  extras,
}: {
  apartment: Apartment;
  extras: ApartmentExtras;
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
                        <span>No.</span>
                        <span>{apartment.code}</span>
                      </h1>
                      <div className="b-mob">
                        <div className="lot-s_media_layout_diagrams">
                          <div className="block-diagram">
                            <img src={extras.blockDiagram ?? undefined} loading="eager" alt="" className="block-diagram_hilight" />
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cblocks-diagram.svg" loading="eager" alt="" className="img" />
                          </div>
                          <div className="compass" style={{ rotate: `${extras.compassDeg ?? 0}deg` }}>
                            <div className="l1 a-center">N</div>
                            <div className="style-css w-embed"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="u-24"></div>
                    <h2 data-type="ground-floor-basement" className="l2">{apartment.category}</h2>
                    <div className="u-4"></div>
                    <h3 id="" className="l2 reg">
                      <span>Completion:</span>
                      <span>{apartment.completion}</span>
                    </h3>
                    <div className="u-16"></div>
                  </div>
                  <div className="lot-s_media b-mob">
                    <div className="lot-s_media_c scrollbar-none">
                      <div className="lot-s_media_layout">
                        <div className="lot-s_media_layout_img-prim">
                          <img src={apartment.layoutImage} loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet={undefined} className="img contain" />
                        </div>
                      </div>
                      <div className="lot-media-cms w-dyn-list">
                        <div role="list" className="lot-media-cms_list w-dyn-items">
                          <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom.webp 1920w" className="img _w-auto" />
                          </div>
                          <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor.webp 1920w" className="img _w-auto" />
                          </div>
                          <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen.webp 1920w" className="img _w-auto" />
                          </div>
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
                        <h5 className="h5">{apartment.bedroomsLabel}</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Interior area</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{apartment.interiorAreaLabel}</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Terrace</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">29 M²</h5>
                      </div>
                      <div className="data-item">
                        <h4 className="l1 reg">Garden</h4>
                        <div className="u-8"></div>
                        <h5 className="h5">{extras.terraceLabel} M²</h5>
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
                          <p data-tab="p" className="p1">
                            {apartment.description}
                          </p>
                          <div className="u-160 b-desk"></div>
                        </div>
                        <div data-tab-content="benefits" className="lot-s_info_more_content">
                          <div className="u-16"></div>
                          <div className="benefits-tag-cms w-dyn-list">
                            <div role="list" className="benefits-tag-cms_list tag-list w-dyn-items">
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                <div className="tag"><h4 className="p2">Pool & gym</h4></div>
                              </div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item"><div className="tag"><h4 className="p2">Storage</h4></div></div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item"><div className="tag"><h4 className="p2">Energy B</h4></div></div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item"><div className="tag"><h4 className="p2">Parking</h4></div></div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                <div className="tag"><h4 className="p2">Aerothermal</h4></div>
                              </div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                <div className="tag"><h4 className="p2">Stone floors</h4></div>
                              </div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                <div className="tag"><h4 className="p2">Villeroy & Boch</h4></div>
                              </div>
                              <div data-tab="p" role="listitem" className="benefits-tag-cms_list_item w-dyn-item">
                                <div className="tag"><h4 className="p2">Underfloor heating</h4></div>
                              </div>
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
                      <a aria-label="pdf" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec-circle" href={extras.brochure ?? "#"} className="btn w-variant-9f3f61aa-a2e8-bef6-01f9-2f3463919d6d w-inline-block">
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
                        <img src={apartment.layoutImage} loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet={undefined} className="img contain" />
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
                        <div className="block-diagram">
                          <img src={extras.blockDiagram ?? undefined} loading="eager" alt="" className="block-diagram_hilight" />
                          <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cblocks-diagram.svg" loading="eager" alt="" className="img" />
                        </div>
                        <div className="compass" style={{ rotate: `${extras.compassDeg ?? 0}deg` }}>
                          <div className="l1 a-center">N</div>
                          <div className="style-css w-embed"></div>
                        </div>
                      </div>
                    </div>
                    <div className="u-48"></div>
                  </div>
                  <div className="lot-media-cms w-dyn-list">
                    <div role="list" className="lot-media-cms_list w-dyn-items">
                      <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                        <div hover-pin-trigger="" hover-media-item="" className="lot-media-item theme_on-color">
                          <div className="img-w h-auto">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-bathroom.webp 1920w" className="img h-auto" />
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
                      <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                        <div hover-pin-trigger="" hover-media-item="" className="lot-media-item theme_on-color">
                          <div className="img-w h-auto">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor.webp 1920w" className="img h-auto" />
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
                      <div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">
                        <div hover-pin-trigger="" hover-media-item="" className="lot-media-item theme_on-color">
                          <div className="img-w h-auto">
                            <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen.webp" loading="eager" data-lightbox="" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1e3e0cf0513cfd006653b6_era-residence-kitchen.webp 1920w" className="img h-auto" />
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

/* ============================================================
   components/apartments/ApartmentsListing.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartments-listing.mjs — no editar a mano.
 *
 * Listado de apartamentos. Envoltorio y clases idénticos al original; las
 * 28 tarjetas, que allí venían escritas una a una, salen de los datos.
 */



export function ApartmentsListing() {
  return (
    <section className="section clip">
      <div className="container">
        <div className="apart-w">
          <div className="apart-s">
            <div className="u-48"></div>
            <div className="u-272"></div>
            <div className="grid">
              <div data-sort="" data-filter="" className="apart-s_cms">
                <div className="apart-s_title">
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center mob_a-left">Apartments</h1>
                  <div data-prevent-flicker="" data-filter-count="" data-scroll-reveal="h" className="h1 a-right b-desk">0</div>
                </div>
                <div className="u-16"></div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="apart-s_cms_filter">
                  <div className="apart-s_cms_filter_c">
                    <div className="grid _9-columns">
                      <div className="apart-s_cms_filter_item">
                        <div data-select="" className="filter_select">
                          <div data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Typology</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="All" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">All</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">All</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-filter-group="type" data-filter-trigger="*" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">All</div></div>
                              <div className="cms w-dyn-list">
                                <div role="list" className="filter_select_drop-down_list w-dyn-items">
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="ground-floor-basement" hover-select-item="" className="filter_select_drop-down_list_item">
                                      <div hover="text" className="l1">Ground floor + basement</div>
                                    </div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="ground-floor" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Ground Floor</div></div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="type" data-filter-trigger="penthouse-duplex" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Penthouse duplex</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apart-s_cms_filter_item">
                        <div data-select="" className="filter_select">
                          <div hover-nav-item-l2-trigger="" data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Bedrooms</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="All" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">All</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">All</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-filter-group="bed" data-filter-trigger="*" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">All</div></div>
                              <div className="cms w-dyn-list">
                                <div role="list" className="filter_select_drop-down_list w-dyn-items">
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="bed" data-filter-trigger="2" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">2</div></div>
                                  </div>
                                  <div role="listitem" className="cms_list_item w-dyn-item">
                                    <div data-select="item" data-filter-group="bed" data-filter-trigger="3" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">3</div></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="apart-s_cms_filter_item is-last">
                        <div data-select="" className="filter_select">
                          <div data-select="btn" className="filter_select_btn">
                            <div className="l2 reg">Sort by</div>
                            <div className="filter_select_btn_label">
                              <a hover-nav-item-l2="" aria-label="Relevant" href="#" className="nav-item w-inline-block">
                                <div className="nav-item_label">
                                  <div hover="text" className="nav-item_label_text"><div data-select="value" className="l2">Relevant</div></div>
                                  <div hover="text" className="nav-item_label_text is-2"><div data-select="value" className="l2">Relevant</div></div>
                                </div>
                              </a>
                              <div hover="ico" className="ico-12">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.1166 8.11436C17.6048 7.62682 18.3982 7.62641 18.8862 8.11436C19.3741 8.60232 19.3737 9.39569 18.8862 9.88389L12.8862 15.8839C12.398 16.372 11.6048 16.372 11.1166 15.8839L5.11662 9.88389C4.62846 9.39574 4.62846 8.60252 5.11662 8.11436C5.60483 7.62682 6.3982 7.62641 6.88615 8.11436L12.0014 13.2296L17.1166 8.11436Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div data-select="drop-down" className="filter_select_drop-down">
                            <div className="filter_select_drop-down_list">
                              <div data-select="item" data-sort-order="asc" data-sort-trigger="relevant" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Relevant</div></div>
                              <div data-select="item" data-sort-order="asc" data-sort-trigger="area" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Smallest area</div></div>
                              <div data-select="item" data-sort-order="desc" data-sort-trigger="area" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Largest area</div></div>
                            </div>
                          </div>
                        </div>
                        <a data-reset="" aria-label="Reset" hover-nav-item-l2="" href="#" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div hover="text" className="nav-item_label_text"><div className="l2">Reset</div></div>
                            <div hover="text" className="nav-item_label_text is-2"><div className="l2">Reset</div></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="apart-s_cms_decor">
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
                    </div>
                  </div>
                </div>
                <div className="u-16 b-desk"></div>
                <div className="u-8 b-mob"></div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="apart-cms w-dyn-list">
                  <div data-sort-list="" data-filter-list="" role="list" className="apart-cms_list w-dyn-items">
{apartmentCards.map((card) => (
  <ApartmentCard key={card.code} card={card} />
))}</div>
                </div>
                <div className="apart-cms w-dyn-list">
                  <div role="list" className="apart-cms_list w-dyn-items"></div>
                </div>
                <div data-filter-empty="" className="apart-s_cms_empty">
                  <div className="apart-s_cms_decor">
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
                    </div>
                  </div>
                  <div className="grid _9-columns">
                    <div className="apart-s_cms_empty_info">
                      <div className="apart-s_cms_empty_title"><div className="c1 a-center">nothing found</div></div>
                      <div className="u-24"></div>
                      <div className="p1 a-center">
                        We didn&#x27;t find anything for your request. Please, try changing your search settings
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-16"></div>
              </div>
            </div>
            <div className="u-160"></div>
          </div>
          <div data-video-playpause="" data-parallax="ctn-down" className="flower apart">
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cbougainvillea-flowers_05.avif" className="video">
              <source src="https://puntacanadinnerinthesky.com/urbatrix/era/videos%5Cbougainvillea-flowers_05.webm" type="video/webm" />
              <source src="https://puntacanadinnerinthesky.com/urbatrix/era/videos%5Cbougainvillea-flowers_05.mov" type="video/mp4" />
            </video>
          </div>
          <div className="apart_themes">
            <div className="themes_row">
              <div data-bg="light" className="apart_themes_light-1"></div>
              <div data-bg="color" className="apart_themes_color-1"></div>
            </div>
            <div data-bg="light" className="apart_themes_light-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/apartments/LightboxModal.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde apartments/011.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function LightboxModal() {
  return (
    <div data-lightbox-modal="" className="modal">
      <div className="modal_c">
        <div className="modal_lightbox">
          <div className="modal_close">
            <div data-slider="close" hover-btn="" className="btn-ico">
              <a aria-label="Close" href="#" className="btn-ico_link w-inline-block"></a>
              <div hover="ico" className="btn_ico">
                <div className="ico-16">
                  <div className="ico w-embed">
                    <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5292 3.52827C11.7896 3.26792 12.2123 3.26792 12.4726 3.52827C12.733 3.78862 12.733 4.21128 12.4726 4.47163L8.94429 7.99995L12.4726 11.5283C12.733 11.7886 12.733 12.2113 12.4726 12.4716C12.2123 12.732 11.7896 12.732 11.5292 12.4716L8.00093 8.94331L4.47261 12.4716C4.21226 12.732 3.7896 12.732 3.52925 12.4716C3.2689 12.2113 3.2689 11.7886 3.52925 11.5283L7.05757 7.99995L3.52925 4.47163C3.2689 4.21128 3.2689 3.78862 3.52925 3.52827C3.7896 3.26792 4.21226 3.26792 4.47261 3.52827L8.00093 7.05659L11.5292 3.52827Z" fill="currentColor"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
            </div>
          </div>
          <div data-lightbox-content="" className="modal_lightbox_content">
            <img data-lightbox-img="" loading="lazy" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cplaceholder.60f9b1840c.svg" className="img modal_lightbox_img" />
          </div>
          <div className="modal_lightbox_pag">
            <div className="u-24"></div>
            <div className="modal_lightbox_pag_list">
              <div className="pag_counter">
                <div className="l2">
                  <span data-slider="current">0</span>
                  <span>/</span>
                  <span data-slider="total">0</span>
                </div>
              </div>
              <div className="btn-list">
                <div data-slider="prev" hover-btn="" className="btn-ico">
                  <a aria-label="Prev" href="#" className="btn-ico_link w-inline-block"></a>
                  <div hover="ico" className="btn_ico">
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                </div>
                <div data-slider="next" hover-btn="" className="btn-ico">
                  <a aria-label="Next" href="#" className="btn-ico_link w-inline-block"></a>
                  <div hover="ico" className="btn_ico">
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-modal-over="" className="modal_bg">
        <div className="modal_decor">
          <div data-wf--decor--variant="large" className="decor">
            <div className="frame_l-tb w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lt w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_t-lr w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rt w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_r-tb w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_rb w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="100%" x2="100%" y2="0%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_b-lr w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="50%" x2="100%" y2="50%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
            <div className="frame_lb w-embed">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <line x1="0%" y1="0%" x2="100%" y2="100%" strokeWidth="1" stroke="currentColor" vectorEffect="non-scaling-stroke"></line>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   components/apartments/RelatedApartments.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-detail.mjs — no editar a mano.
 *
 * Bloque «otras viviendas» del pie de la ficha. Usa la misma tarjeta que el
 * listado: se comprobó que el original repite ahí el mismo marcado.
 */



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

/* ============================================================
   components/pages/ComingSoonMain.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde coming-soon.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function ComingSoonMain() {
  return (
    <section data-footer-clip="" data-bg="light" className="section z-2 theme_on-brand">
      <div className="container">
        <div className="soon-w">
          <div className="soon-s">
            <div className="grid">
              <div className="soon-s_title">
                <div className="u-160"></div>
                <h1 data-scroll-reveal="h" className="h2 a-center">selection is coming soon</h1>
                <div className="u-32"></div>
                <div className="grid _4-columns">
                  <div className="soon-s_desc">
                    <p data-scroll-reveal="p" className="p1 a-center">
                      Contact us directly to find out which units are still available.
                    </p>
                  </div>
                </div>
                <div className="u-64"></div>
                <div data-scroll-reveal="ctn" className="soon-s_btn">
                  <div data-modal-cta-btn="book-a-call" data-magnetic-btn="" hover-nav-item-trigger="" hover-btn-circle="" className="btn-circle">
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a hover-nav-item="" aria-label="Book a call now" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Book a call now</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Book a call now</div></div>
                        </div>
                      </a>
                    </div>
                    <div className="btn-circle_bg w-embed">
                      <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-150 104 104)"></circle>
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 104 104)"></circle>
                        <circle cx="104" cy="104" r="103.5" stroke="var(--_colors---base-1000--line)" strokeWidth="1" fill="none"></circle>
                      </svg>
                    </div>
                    <a aria-label="Book a call now" href="#" className="btn-circle_link w-inline-block"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/pages/ContactMain.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde contact.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function ContactMain() {
  return (
    <section data-bg="light" className="section clip theme_on-brand">
      <div className="container">
        <div className="contact-w">
          <div className="contact-s">
            <div data-scroll-reveal="w" className="conatc-s_t">
              <div className="u-48"></div>
              <div className="u-272 b-mob"></div>
              <div className="grid">
                <div className="contact-s_title">
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center">Contact us</h1>
                </div>
              </div>
              <div className="u-96"></div>
              <div className="grid">
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_email">
                  <h2 className="l1 reg a-center">Write us</h2>
                  <div className="u-4"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="info@era-residence.com" href="mailto:info@era-residence.com" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">info@era-residence.com</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">info@era-residence.com</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                </div>
                <div className="contact-s_loc">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div data-prevent-flicker="" data-scroll-reveal="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">Sales Office</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="Avenida Litoral, 29680 Estepona, Málaga, Spain" href="https://maps.app.goo.gl/EzyfT2M6vR5aBdMu9" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div data-prevent-flicker="" data-scroll-reveal="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">Location</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="New Golden Mile, Estepona Costa del Sol, Spain" href="https://maps.app.goo.gl/5FY2BUESnAmcybFe8" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">New Golden Mile, Estepona Costa del Sol, Spain</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">New Golden Mile, Estepona Costa del Sol, Spain</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                </div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_phone">
                  <h3 className="l1 reg a-center">Talk to us</h3>
                  <div className="u-4"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="+34 (655) 408-648" href="tel:+34655408648" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">+34 (655) 408-648</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">+34 (655) 408-648</div></div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Whatsapp" href="https://wa.me/34655408648" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Whatsapp</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Whatsapp</div></div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                </div>
              </div>
              <div className="u-160"></div>
              <div className="grid">
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_social">
                  <div className="social-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="social-cms_list w-dyn-items">
                      <div role="listitem" className="social-cms_list_item w-dyn-item">
                        <a aria-label="Linkedin" hover-social="" href="https://www.linkedin.com/company/eraresidenceestepona/?viewAsMember=true" target="_blank" className="social-btn w-inline-block">
                          <div hover="ico" className="ico-16">
                            <div className="ico w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94048 5.00091C6.94011 5.81522 6.44608 6.548 5.69134 6.85371C4.9366 7.15943 4.07187 6.97703 3.5049 6.39253C2.93793 5.80802 2.78195 4.93813 3.1105 4.19305C3.43906 3.44797 4.18654 2.97648 5.00048 3.00091C6.08155 3.03336 6.94097 3.91935 6.94048 5.00091ZM7.00048 8.48091H3.00048V21.0009H7.00048V8.48091ZM13.3205 8.48091H9.34048V21.0009H13.2805V14.4309C13.2805 10.7709 18.0505 10.4309 18.0505 14.4309V21.0009H22.0005V13.0709C22.0005 6.90091 14.9405 7.13091 13.2805 10.1609L13.3205 8.48091Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                          <div data-comma="" className="social-btn_line"><div className="line-h"></div></div>
                        </a>
                      </div>
                      <div role="listitem" className="social-cms_list_item w-dyn-item">
                        <a aria-label="Facebook" hover-social="" href="https://www.facebook.com/era.residence.estepona" target="_blank" className="social-btn w-inline-block">
                          <div hover="ico" className="ico-16">
                            <div className="ico w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                          <div data-comma="" className="social-btn_line"><div className="line-h"></div></div>
                        </a>
                      </div>
                      <div role="listitem" className="social-cms_list_item w-dyn-item">
                        <a aria-label="Instagram" hover-social="" href="https://www.instagram.com/era.residence.estepona" target="_blank" className="social-btn w-inline-block">
                          <div hover="ico" className="ico-16">
                            <div className="ico w-embed">
                              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0281 2C14.1535 2.00186 14.7238 2.00782 15.2166 2.02249L15.4107 2.02883C15.6349 2.0368 15.8561 2.0468 16.1228 2.0593C17.1869 2.10847 17.9128 2.2768 18.5503 2.5243C19.2094 2.77847 19.7661 3.1218 20.3219 3.67764C20.8769 4.23347 21.2203 4.7918 21.4753 5.4493C21.7219 6.08597 21.8903 6.81264 21.9403 7.8768C21.9522 8.14347 21.9618 8.36467 21.9697 8.58891L21.976 8.783C21.9906 9.27574 21.9973 9.84613 21.9994 10.9716L22.0002 11.7172C22.0003 11.8083 22.0003 11.9023 22.0003 11.9993L22.0002 12.2814L21.9996 13.0271C21.9977 14.1525 21.9918 14.7229 21.9771 15.2156L21.9707 15.4097C21.9628 15.634 21.9528 15.8552 21.9403 16.1218C21.8911 17.186 21.7219 17.9118 21.4753 18.5493C21.2211 19.2085 20.8769 19.7652 20.3219 20.321C19.7661 20.876 19.2069 21.2193 18.5503 21.4743C17.9128 21.721 17.1869 21.8893 16.1228 21.9393C15.8561 21.9512 15.6349 21.9609 15.4107 21.9687L15.2166 21.975C14.7238 21.9897 14.1535 21.9963 13.0281 21.9985L12.2824 21.9993C12.1913 21.9993 12.0973 21.9993 12.0003 21.9993H11.7182L10.9725 21.9986C9.8471 21.9968 9.27672 21.9908 8.78397 21.9761L8.58989 21.9698C8.36564 21.9618 8.14444 21.9518 7.87778 21.9393C6.81361 21.8902 6.08861 21.721 5.45028 21.4743C4.79194 21.2202 4.23444 20.876 3.67861 20.321C3.12278 19.7652 2.78028 19.206 2.52528 18.5493C2.27778 17.9118 2.11028 17.186 2.06028 16.1218C2.0484 15.8552 2.03871 15.634 2.03086 15.4097L2.02457 15.2156C2.00994 14.7229 2.00327 14.1525 2.00111 13.0271L2.00098 10.9716C2.00284 9.84613 2.00879 9.27574 2.02346 8.783L2.02981 8.58891C2.03778 8.36467 2.04778 8.14347 2.06028 7.8768C2.10944 6.8118 2.27778 6.0868 2.52528 5.4493C2.77944 4.79097 3.12278 4.23347 3.67861 3.67764C4.23444 3.1218 4.79278 2.7793 5.45028 2.5243C6.08778 2.2768 6.81278 2.1093 7.87778 2.0593C8.14444 2.04743 8.36564 2.03774 8.58989 2.02989L8.78397 2.0236C9.27672 2.00896 9.8471 2.00229 10.9725 2.00013L13.0281 2ZM12.0003 6.9993C9.23738 6.9993 7.00028 9.23883 7.00028 11.9993C7.00028 14.7622 9.23981 16.9993 12.0003 16.9993C14.7632 16.9993 17.0003 14.7598 17.0003 11.9993C17.0003 9.2364 14.7607 6.9993 12.0003 6.9993ZM12.0003 8.9993C13.6572 8.9993 15.0003 10.342 15.0003 11.9993C15.0003 13.6562 13.6576 14.9993 12.0003 14.9993C10.3434 14.9993 9.00028 13.6567 9.00028 11.9993C9.00028 10.3424 10.3429 8.9993 12.0003 8.9993ZM17.2503 5.4993C16.561 5.4993 16.0003 6.05921 16.0003 6.74845C16.0003 7.4377 16.5602 7.99847 17.2503 7.99847C17.9395 7.99847 18.5003 7.43857 18.5003 6.74845C18.5003 6.05921 17.9386 5.49844 17.2503 5.4993Z" fill="currentColor"></path>
                              </svg>
                            </div>
                          </div>
                          <div data-comma="" className="social-btn_line"><div className="line-h"></div></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-parallax="w" data-scroll-reveal="ctn" data-prevent-flicker="" className="contact-s_map">
                  <div data-parallax="img" className="contact-s_map_c">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cmap_sales-office.svg" loading="eager" alt="" className="img h-auto" />
                    <div className="contact-s_map_pin">
                      <div className="contact-s_map_pin_c theme_on-dark">
                        <div className="contact-s_map_pin_info">
                          <div className="l2"><strong>sales office</strong></div>
                          <div className="l2 reg">Daily 09:00 – 21:00</div>
                        </div>
                        <div data-modal-close="menu" aria-label="logo envy maison" className="logo_symbol ico-28">
                          <div className="logo w-embed">
                            <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M6.55544 9.1241C4.81712 7.38578 4.69025 4.69428 4.69025 4.69428C4.69025 4.69428 7.38176 4.82115 9.12007 6.55947C10.8584 8.29779 10.9853 10.9893 10.9853 10.9893C10.9853 10.9893 8.29376 10.8624 6.55544 9.1241Z" fill="currentColor"></path>
                              <path d="M20 0.00151769L16.1569 8.1194C15.5932 9.31006 15.5931 10.6907 16.1568 11.8814L18.4988 16.8291C17.7735 17.1796 17.1891 17.7755 16.8534 18.5091L11.8814 16.1558C10.6907 15.5923 9.31007 15.5923 8.11946 16.156L0 20V19.177C0 18.3493 0.423339 17.5792 1.12211 17.1356L7.64451 12.9953C9.08249 12.0825 10.9183 12.0824 12.3564 12.9951L14.1067 14.1059L12.9961 12.3565C12.0833 10.9184 12.0833 9.08239 12.9962 7.64431L17.1364 1.12212C17.5799 0.423353 18.3501 1.51793e-05 19.1777 1.51793e-05L20 0.00151769Z" fill="currentColor"></path>
                              <path d="M33.4446 30.8759C35.1829 32.6142 35.3097 35.3057 35.3097 35.3057C35.3097 35.3057 32.6182 35.1788 30.8799 33.4405C29.1416 31.7022 29.0147 29.0107 29.0147 29.0107C29.0147 29.0107 31.7062 29.1375 33.4446 30.8759Z" fill="currentColor"></path>
                              <path d="M20 39.9984L23.8431 31.8806C24.4068 30.6899 24.4069 29.3092 23.8432 28.1185L21.5012 23.1708C22.2265 22.8204 22.8109 22.2244 23.1466 21.4909L28.1186 23.8441C29.3093 24.4077 30.6899 24.4076 31.8805 23.8439L40 19.9999V20.8229C40 21.6506 39.5767 22.4208 38.8779 22.8643L32.3555 27.0047C30.9175 27.9175 29.0817 27.9176 27.6436 27.0049L25.8933 25.894L27.0039 27.6435C27.9167 29.0816 27.9167 30.9176 27.0038 32.3556L22.8636 38.8778C22.4201 39.5766 21.6499 39.9999 20.8223 39.9999L20 39.9984Z" fill="currentColor"></path>
                              <path d="M30.8759 6.55544C32.6142 4.81712 35.3057 4.69026 35.3057 4.69026C35.3057 4.69026 35.1789 7.38176 33.4405 9.12008C31.7022 10.8584 29.0107 10.9853 29.0107 10.9853C29.0107 10.9853 29.1376 8.29376 30.8759 6.55544Z" fill="currentColor"></path>
                              <path d="M39.9985 20L31.8806 16.1569C30.69 15.5932 29.3093 15.5931 28.1186 16.1568L23.1709 18.4988C22.8204 17.7735 22.2245 17.1891 21.4909 16.8534L23.8442 11.8814C24.4078 10.6907 24.4077 9.31007 23.844 8.11946L20 0L20.823 3.59746e-08C21.6507 7.2153e-08 22.4208 0.423339 22.8644 1.12211L27.0047 7.64451C27.9175 9.08249 27.9176 10.9183 27.0049 12.3564L25.8941 14.1067L27.6435 12.9961C29.0816 12.0833 30.9176 12.0833 32.3557 12.9962L38.8779 17.1364C39.5767 17.5799 40 18.3501 40 19.1777L39.9985 20Z" fill="currentColor"></path>
                              <path d="M9.12417 33.4445C7.38585 35.1828 4.69435 35.3097 4.69435 35.3097C4.69435 35.3097 4.82122 32.6182 6.55954 30.8799C8.29786 29.1416 10.9894 29.0147 10.9894 29.0147C10.9894 29.0147 10.8625 31.7062 9.12417 33.4445Z" fill="currentColor"></path>
                              <path d="M0.00159168 20L8.11947 23.8431C9.31013 24.4068 10.6908 24.4068 11.8815 23.8432L16.8292 21.5012C17.1796 22.2265 17.7756 22.8109 18.5092 23.1466L16.1559 28.1186C15.5923 29.3093 15.5924 30.6899 16.1561 31.8805L20.0001 40H19.1771C18.3494 40 17.5793 39.5766 17.1357 38.8779L12.9954 32.3555C12.0825 30.9175 12.0825 29.0816 12.9951 27.6436L14.106 25.8933L12.3566 27.0038C10.9185 27.9167 9.08247 27.9167 7.64438 27.0038L1.1222 22.8636C0.423427 22.42 8.89523e-05 21.6499 8.90608e-05 20.8222L0.00159168 20Z" fill="currentColor"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_btn">
                  <div data-modal-cta-btn="book-a-call" data-magnetic-btn="" hover-nav-item-trigger="" hover-btn-circle="" className="btn-circle">
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a hover-nav-item="" aria-label="Book a call now" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Book a call now</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Book a call now</div></div>
                        </div>
                      </a>
                    </div>
                    <div className="btn-circle_bg w-embed">
                      <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-150 104 104)"></circle>
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 104 104)"></circle>
                        <circle cx="104" cy="104" r="103.5" stroke="var(--_colors---base-1000--line)" strokeWidth="1" fill="none"></circle>
                      </svg>
                    </div>
                    <a aria-label="Book a call now" href="#" className="btn-circle_link w-inline-block"></a>
                  </div>
                </div>
              </div>
              <div className="u-272 b-mob"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/sections/Amenities.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde home.html — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function Amenities() {
  return (
    <div className="amen-scroll-area">
      <div className="scroll-area_screen">
        <section className="section clip theme_on-color">
          <div className="container">
            <div className="amen-w">
              <div className="amen-s">
                <div data-tabs-hilight="ver" data-tabs="" className="amen-s_cms">
                  <div className="amen-cms w-dyn-list">
                    <div role="list" className="amen-cms_list w-dyn-items">
                      <div data-reveal-first="" data-tab-content="gated-community" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Gated community</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Instead of corridors, walking paths connect the apartments — making Era Residence feel closer to a group of private homes than a standard
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-gated-community.webp 1920w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="swimming-pool-2" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Swimming Pool</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Saltwater swimming pool, Children’s pool, Sauna, jacuzzi and wellness shower
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-pool.webp 1920w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="swimming-pool" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Parking area</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Each parking space includes pre-installation for optional EV charging.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-parking.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-parking-p-500.png 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-parking-p-800.png 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-parking.webp 1920w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="spa-gym" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Spa & gym</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Designed exclusively for residents and their guests, the amenities at ERA encourage a slower and more balanced Mediterranean lifestyle
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-spa-&-gym.webp 1920w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="landscaping" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Landscaping</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  The landscaping concept was designed to soften the architecture and strengthen the connection between the residences and the Mediterranean environment.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-landscaping.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-landscaping-p-500.png 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-landscaping-p-800.png 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-landscaping-p-1080.png 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-landscaping.webp 1920w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amm-s_cms_tabs-w">
                    <div className="grid">
                      <div className="amm-s_cms_tabs">
                        <div className="amen-tabs-cms w-dyn-list">
                          <div role="list" className="amen-tabs-cms_list w-dyn-items">
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="gated-community" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Gated community</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="swimming-pool-2" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Swimming Pool</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="swimming-pool" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Parking area</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="spa-gym" className="amen-tab"><div data-scroll-reveal="p" className="h5">Spa & gym</div></div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="landscaping" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Landscaping</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-scroll-reveal="line" className="amm-s_cms_tabs_line">
                          <div data-tab-hilight="" className="amm-s_cms_tabs_line_hilight"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="amm-s_cms_btn-w b-desk">
                    <div className="grid">
                      <div data-scroll-reveal="ctn" className="amm-s_cms_btn">
                        <div data-modal-cta-btn="book-a-call" data-magnetic-btn="" hover-nav-item-trigger="" hover-btn-circle="" className="btn-circle">
                          <div data-magnetic-inner="" className="btn-circle_label">
                            <a hover-nav-item="" aria-label="Book a call now" href="#" className="nav-item w-inline-block">
                              <div className="nav-item_label">
                                <div className="nav-item_label_text"><div hover="text" className="l1">Book a call now</div></div>
                                <div className="nav-item_label_text is-2"><div hover="text" className="l1">Book a call now</div></div>
                              </div>
                            </a>
                          </div>
                          <div className="btn-circle_bg w-embed">
                            <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                              <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-150 104 104)"></circle>
                              <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 104 104)"></circle>
                              <circle cx="104" cy="104" r="103.5" stroke="var(--_colors---base-1000--line)" strokeWidth="1" fill="none"></circle>
                            </svg>
                          </div>
                          <a aria-label="Book a call now" href="#" className="btn-circle_link w-inline-block"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="hero_themes">
        <div data-bg="color" className="hero_themes_color"></div>
        <div data-bg="light" className="hero_themes_light"></div>
      </div>
    </div>
  );
}

/* ============================================================
   components/sections/BookACall.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * Pie con el formulario «Book a call». Idéntico en todas las páginas salvo
 * por el enlace de vuelta arriba, que sólo lleva la home.
 */

export function BookACall({ showToTop = false }: { showToTop?: boolean }) {
  return (
    <section data-bg="dark" className="section theme_on-dark">
      <div className="container">
        <div className="footer-w">
          {showToTop && (
          <a href="#hero" className="footer-s_s-top w-inline-block">
            <div className="l2">To top</div>
            <div className="s-down_arrow w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.6345 9C40.8959 8.45299 41.1486 7.97436 41.3926 7.56411C41.6541 7.15385 41.9068 6.81197 42.1508 6.53846L2.99981 6.53846L2.99981 5.46154L42.1508 5.46154C41.9068 5.17094 41.6541 4.82051 41.3926 4.41026C41.1486 4 40.8959 3.52992 40.6345 3L41.5495 3C42.6475 4.24787 43.7979 5.17094 45.0005 5.76923L45.0005 6.23077C43.7979 6.81197 42.6475 7.73504 41.5495 9L40.6345 9Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          )}
          <div className="footer-s">
            <div className="footer-s_t"></div>
            <div className="footer-s_c">
              <div className="grid">
                <div className="footer-s_contact">
                  <div className="s_logo">
                    <div data-text="ctn" className="logo_symbol ico-64">
                      <div className="logo w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.55544 9.1241C4.81712 7.38578 4.69025 4.69428 4.69025 4.69428C4.69025 4.69428 7.38176 4.82115 9.12007 6.55947C10.8584 8.29779 10.9853 10.9893 10.9853 10.9893C10.9853 10.9893 8.29376 10.8624 6.55544 9.1241Z" fill="currentColor"></path>
                          <path d="M20 0.00151769L16.1569 8.1194C15.5932 9.31006 15.5931 10.6907 16.1568 11.8814L18.4988 16.8291C17.7735 17.1796 17.1891 17.7755 16.8534 18.5091L11.8814 16.1558C10.6907 15.5923 9.31007 15.5923 8.11946 16.156L0 20V19.177C0 18.3493 0.423339 17.5792 1.12211 17.1356L7.64451 12.9953C9.08249 12.0825 10.9183 12.0824 12.3564 12.9951L14.1067 14.1059L12.9961 12.3565C12.0833 10.9184 12.0833 9.08239 12.9962 7.64431L17.1364 1.12212C17.5799 0.423353 18.3501 1.51793e-05 19.1777 1.51793e-05L20 0.00151769Z" fill="currentColor"></path>
                          <path d="M33.4446 30.8759C35.1829 32.6142 35.3097 35.3057 35.3097 35.3057C35.3097 35.3057 32.6182 35.1788 30.8799 33.4405C29.1416 31.7022 29.0147 29.0107 29.0147 29.0107C29.0147 29.0107 31.7062 29.1375 33.4446 30.8759Z" fill="currentColor"></path>
                          <path d="M20 39.9984L23.8431 31.8806C24.4068 30.6899 24.4069 29.3092 23.8432 28.1185L21.5012 23.1708C22.2265 22.8204 22.8109 22.2244 23.1466 21.4909L28.1186 23.8441C29.3093 24.4077 30.6899 24.4076 31.8805 23.8439L40 19.9999V20.8229C40 21.6506 39.5767 22.4208 38.8779 22.8643L32.3555 27.0047C30.9175 27.9175 29.0817 27.9176 27.6436 27.0049L25.8933 25.894L27.0039 27.6435C27.9167 29.0816 27.9167 30.9176 27.0038 32.3556L22.8636 38.8778C22.4201 39.5766 21.6499 39.9999 20.8223 39.9999L20 39.9984Z" fill="currentColor"></path>
                          <path d="M30.8759 6.55544C32.6142 4.81712 35.3057 4.69026 35.3057 4.69026C35.3057 4.69026 35.1789 7.38176 33.4405 9.12008C31.7022 10.8584 29.0107 10.9853 29.0107 10.9853C29.0107 10.9853 29.1376 8.29376 30.8759 6.55544Z" fill="currentColor"></path>
                          <path d="M39.9985 20L31.8806 16.1569C30.69 15.5932 29.3093 15.5931 28.1186 16.1568L23.1709 18.4988C22.8204 17.7735 22.2245 17.1891 21.4909 16.8534L23.8442 11.8814C24.4078 10.6907 24.4077 9.31007 23.844 8.11946L20 0L20.823 3.59746e-08C21.6507 7.2153e-08 22.4208 0.423339 22.8644 1.12211L27.0047 7.64451C27.9175 9.08249 27.9176 10.9183 27.0049 12.3564L25.8941 14.1067L27.6435 12.9961C29.0816 12.0833 30.9176 12.0833 32.3557 12.9962L38.8779 17.1364C39.5767 17.5799 40 18.3501 40 19.1777L39.9985 20Z" fill="currentColor"></path>
                          <path d="M9.12417 33.4445C7.38585 35.1828 4.69435 35.3097 4.69435 35.3097C4.69435 35.3097 4.82122 32.6182 6.55954 30.8799C8.29786 29.1416 10.9894 29.0147 10.9894 29.0147C10.9894 29.0147 10.8625 31.7062 9.12417 33.4445Z" fill="currentColor"></path>
                          <path d="M0.00159168 20L8.11947 23.8431C9.31013 24.4068 10.6908 24.4068 11.8815 23.8432L16.8292 21.5012C17.1796 22.2265 17.7756 22.8109 18.5092 23.1466L16.1559 28.1186C15.5923 29.3093 15.5924 30.6899 16.1561 31.8805L20.0001 40H19.1771C18.3494 40 17.5793 39.5766 17.1357 38.8779L12.9954 32.3555C12.0825 30.9175 12.0825 29.0816 12.9951 27.6436L14.106 25.8933L12.3566 27.0038C10.9185 27.9167 9.08247 27.9167 7.64438 27.0038L1.1222 22.8636C0.423427 22.42 8.89523e-05 21.6499 8.90608e-05 20.8222L0.00159168 20Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a href="tel:+34655408648" target="_blank" className="nav-item w-inline-block">
                          <div data-text="h" className="h2 a-center">+34 (655) 408-648</div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-48"></div>
                </div>
                <div className="footer-s_address">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div data-text="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">Sales Office</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="Avenida Litoral, 29680 Estepona, Málaga, Spain" href="https://maps.app.goo.gl/EzyfT2M6vR5aBdMu9" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-s_b">
              <div className="grid">
                <div className="footer-s_info">
                  <div data-text="p" className="l1">Era Residence.</div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©
                    <span className="year">2026</span>
                     All rights reserved
                  </div>
                  <div className="u-12"></div>
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="legal-cms_list w-dyn-items">
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Privacy policy" href="https://puntacanadinnerinthesky.com/urbatrix/era/documents%5Cpolitica_privacidad_era_residence.pdf" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Privacy policy</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Privacy policy</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Terms of Use" href="https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cterms_of_use_era_residence%20(1).pdf" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Terms of Use</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Terms of Use</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-s_credits">
                  <div hover-nav-item-trigger="" className="credits">
                    <a aria-label="The First The Last" href="https://thefirstthelast.agency/?utm_source=era-residence&utm_medium=article&utm_campaign=promo" target="_blank" className="credits_link w-inline-block"></a>
                    <div data-text="ctn" data-scrub-reveal="ctn" className="credits_logo-w">
                      <div data-json="https://pub-157506367d4c4fa1825d7a6d26b687a2.r2.dev/tftl-logo_white.json" className="credits_logo"></div>
                    </div>
                    <div className="u-12"></div>
                    <div data-text="p" className="l1 reg a-right">Made by</div>
                    <div data-text="p">
                      <a hover-nav-item="" aria-label="Thefirstthelast" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Thefirstthelast</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Thefirstthelast</div></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-48"></div>
            </div>
          </div>
          <div className="footer-w_bg"></div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/sections/SeaViewsCta.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * CTA «Perfect sea views». El marcado es común a 28 de las 29 páginas
 * (falta en coming-soon), pero la imagen de fondo NO: cada sección del
 * sitio usa la suya. Por eso entra por props en vez de venir fijada.
 */


export function SeaViewsCta({ image = CTA_IMAGES.home }: { image?: CtaImage }) {
  return (
    <section data-bg="color" className="section theme_on-color">
      <div data-footer-clip="" className="container">
        <div className="cta-w">
          <div className="cta-s">
            <div className="u-48"></div>
            <div className="grid">
              <div className="cta-s_desc">
                <p data-scroll-reveal="p" className="l1 a-center">
                  A short conversation is enough to understand which apartment fits your use case — whether it is a family second home, a longer stay, or a place to return to year after year.
                </p>
              </div>
            </div>
            <div className="u-272"></div>
            <div className="grid">
              <div className="cta-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  Perfect 
                  <br />
                  sea views
                </h2>
                <div className="u-32"></div>
                <h3 data-scroll-reveal="h" className="c1 a-center">From rooftop terraces</h3>
                <div className="u-160"></div>
                <div data-scroll-reveal="ctn" className="cta-s_title_btn">
                  <div hover-btn-circle="" data-magnetic-btn="" hover-nav-item-trigger="" className="btn-circle">
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a hover-nav-item="" aria-label="View available apartments" href="/apartments" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text">
                            <div hover="text" className="l1">View available apartments</div>
                          </div>
                          <div className="nav-item_label_text is-2">
                            <div hover="text" className="l1">View available apartments</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="btn-circle_bg w-embed">
                      <svg data-circle="" viewBox="0 0 208 208" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(-150 104 104)"></circle>
                        <circle data-arc="" cx="104" cy="104" r="103.5" stroke="currentColor" strokeWidth="1" fill="none" transform="rotate(30 104 104)"></circle>
                        <circle cx="104" cy="104" r="103.5" stroke="var(--_colors---base-1000--line)" strokeWidth="1" fill="none"></circle>
                      </svg>
                    </div>
                    <a aria-label="View available apartments" href="/apartments" className="btn-circle_link w-inline-block"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w_bg">
            <div data-parallax="w" className="img-w">
              <img data-parallax="img" loading="eager" alt="" src={image.src} sizes="(max-width: 1920px) 100vw, 1920px" srcSet={image.srcSet} className="img-p" />
              <div className="img-over-grad from-top _4x"></div>
              <div className="img-over-grad"></div>
              <div className="img-over-grad"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
