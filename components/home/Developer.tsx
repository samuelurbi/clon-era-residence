/* eslint-disable @next/next/no-img-element */
/**
 * Bloque «Developer» de la home (promotor, arquitectos, sostenibilidad y
 * entrega), personalizado para Bahía Mar.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * el home.html del sitio original, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano. Regenerarlo con npm run gen:* DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Sólo cambian textos, src/srcSet/alt y href. Los hechos salen del brief
 * (brochure p.10 y p.52, master plan Fase II); la fecha de entrega es el
 * placeholder «2027 (TBC)» de la política de placeholders, no un dato.
 */

export function Developer() {
  return (
    <section data-bg="light" className="section clip">
      <div className="container">
        <div data-video-playpause="" className="other-w">
          <div className="other-s">
            <div className="u-48"></div>
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">A place to return to, year after year</p>
              </div>
            </div>
            <div className="u-48"></div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="u-64"></div>
            <div className="grid">
              <div className="other-s_cms">
                <div className="other-cms w-dyn-list">
                  <div role="list" className="other-cms_list w-dyn-items">
                    <div role="listitem" className="other-cms_list_item w-dyn-item">
                      <div data-accordion-card="" className="other-card">
                        <div className="other-card_name">
                          <div className="other-card_name_label">
                            <h4 data-scroll-reveal="h" className="h3 a-center">Developer</h4>
                            <div data-scroll-reveal="ctn" data-ico-plus="" className="other-card_ico">
                              <div className="ico-16">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-accordion-card="content" className="other-card_info">
                          <div className="u-32"></div>
                          <div className="grid _6-columns">
                            <div className="other-card_info_desc">
                              <p data-accordion-card="p" className="p1 a-center">
                                Bahía Mar Residences &amp; Beach Resort is developed by Landmass Capital, a real-estate investment and development firm operating in the Dominican Republic.
                                <br />
                                LandmassCapital.com · Plaza Comercial Atala I, Suite 203, Santo Domingo
                              </p>
                              <div className="u-32"></div>
                              <div data-accordion-card="ctn" className="info_divider"><div className="line-h"></div></div>
                              <div className="u-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="other-cms_list_item w-dyn-item">
                      <div data-accordion-card="" className="other-card">
                        <div className="other-card_name">
                          <div className="other-card_name_label">
                            <h4 data-scroll-reveal="h" className="h3 a-center">Architects</h4>
                            <div data-scroll-reveal="ctn" data-ico-plus="" className="other-card_ico">
                              <div className="ico-16">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-accordion-card="content" className="other-card_info">
                          <div className="u-32"></div>
                          <div className="grid _6-columns">
                            <div className="other-card_info_desc">
                              <div data-accordion-card="ctn" className="other-card_info_logo">
                                <img src="/images/bahiamar-developer-1.webp" srcSet="/images/bahiamar-developer-1-p-500.webp 500w, /images/bahiamar-developer-1-p-800.webp 800w, /images/bahiamar-developer-1-p-1080.webp 1080w" sizes="(max-width: 991px) 144px, 192px" loading="eager" alt="Villa Helecho at Bahía Mar: a stone and timber villa under a deep roof overhang, facing the sea." className="logo b" />
                              </div>
                              <div className="u-32"></div>
                              <p data-accordion-card="p" className="p1 a-center">
                                Estudio Dolla
                                <br />
                                The architecture of Bahía Mar and its five villa typologies is by Estudio Dolla: timber, pale stone and chukum, wide overhangs and terraces that open every villa to the landscape.
                              </p>
                              <div className="u-32"></div>
                              <div data-accordion-card="ctn" className="info_divider"><div className="line-h"></div></div>
                              <div className="u-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="other-cms_list_item w-dyn-item">
                      <div data-accordion-card="" className="other-card">
                        <div className="other-card_name">
                          <div className="other-card_name_label">
                            <h4 data-scroll-reveal="h" className="h3 a-center">Sustainability</h4>
                            <div data-scroll-reveal="ctn" data-ico-plus="" className="other-card_ico">
                              <div className="ico-16">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-accordion-card="content" className="other-card_info">
                          <div className="u-32"></div>
                          <div className="grid _6-columns">
                            <div className="other-card_info_desc">
                              <p data-accordion-card="p" className="p1 a-center">
                                The master plan is aligned with LEED for Cities and Communities certification. Every villa is fitted with solar panels, home automation, energy-efficient kitchen appliances, bamboo flooring and chukum wall finishes.
                              </p>
                              <div className="u-32"></div>
                              <div data-accordion-card="ctn" className="info_divider"><div className="line-h"></div></div>
                              <div className="u-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div role="listitem" className="other-cms_list_item w-dyn-item">
                      <div data-accordion-card="" className="other-card">
                        <div className="other-card_name">
                          <div className="other-card_name_label">
                            <h4 data-scroll-reveal="h" className="h3 a-center">2027 (TBC)</h4>
                            <div data-scroll-reveal="ctn" data-ico-plus="" className="other-card_ico">
                              <div className="ico-16">
                                <div className="ico w-embed">
                                  <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div data-accordion-card="content" className="other-card_info">
                          <div className="u-32"></div>
                          <div className="grid _6-columns">
                            <div className="other-card_info_desc">
                              <p data-accordion-card="p" className="p1 a-center">
                                Estimated delivery, to be confirmed. The Phase II master plan comprises 246 villas: 77 Villa Cosón, 88 Villa Helecho and 81 Villa Remanso, each with its own private pool.
                              </p>
                              <div className="u-32"></div>
                              <div data-accordion-card="ctn" className="info_divider"><div className="line-h"></div></div>
                              <div className="u-48"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-160"></div>
          </div>
          <div data-parallax="ctn-down" className="flower other">
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/palm-fronds_01.webp" className="video">
              <source src="/videos/palm-fronds_01.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
