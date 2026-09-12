/* eslint-disable @next/next/no-img-element */
/**
 * Personalizado para Bahía Mar: se mantiene A MANO. Venía de
 * scripts/generate-sections.mjs (home.html de ERA); regenerarlo lo desharía.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 *
 * Diferencias con ERA, pedidas por el cliente:
 *
 *  - El fondo no es una foto con versión de día y de noche, sino las CINCO
 *    villas pasando en bucle con el mismo barrido en cortina del slider de
 *    los pilares (lib/animations/hero-slider.ts reutiliza `animateSlide`).
 *    Las capas se apilan en el hueco de la antigua «day»: la primera es
 *    `relative` y da la altura, el resto `absolute` (regla en theme.css).
 *  - Las imágenes (public/images/bahiamar-hero-<villa>.webp, 1920×1728)
 *    tienen la proporción 10:9 de la de ERA: los renders frontales se
 *    expandieron hacia arriba con Magnific para que, como en el original,
 *    al principio sólo se vea cielo detrás del titular y la villa aparezca
 *    al hacer scroll (coreografía en lib/animations/home-flow.ts).
 *  - La línea «A place · by day / by night · to return to» desaparece del
 *    titular. Los nombres de las cinco villas van abajo, con el botón
 *    circular (`.hero-s_b`, fijo al pie de la imagen): así acompañan a la
 *    villa cuando ya se ve entera, en vez de subir con el titular. El
 *    activo se ilumina al ritmo del fondo y pulsar uno cambia de villa
 *    (href="#": PageTransitions ignora esos enlaces y no navega).
 */

import { villas } from '@/data/villas';

/** Ancho completo + variantes de los heros del slider (1920 de ancho). */
function heroSrcset(slug: string): string {
  const base = `/images/bahiamar-hero-${slug}`;
  return [500, 800, 1080, 1600].map((w) => `${base}-p-${w}.webp ${w}w`).concat(`${base}.webp 1920w`).join(', ');
}

export function Hero() {
  return (
    <section id="hero" className="section clip theme_on-color">
      <div className="container">
        <div className="hero-scroll-area">
          <div className="hero-w">
            <div className="hero-s">
              <div className="u-48"></div>
              <div className="u-272 b-mob"></div>
              <div className="grid">
                <div className="hero-s_logo">
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center">
                    Bahía
                    <br />
                    Mar
                  </h1>
                  <div className="hero-s_logo_a">
                    <h2 data-prevent-flicker="" data-scroll-reveal="a" className="a2">Las Terrenas</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-w_bg">
              <div className="hero-w_bg_master">
                <div className="hero-w_bg_master_img">
                  <div className="pins-cms b-desk w-dyn-list">
                    <div role="list" className="pins-cms_list w-dyn-items">
                      <div data-modal-tip-btn="crafted-to-endure" data-pin="crafted-to-endure" floating-tip-trigger="crafted-to-endure" role="listitem" className="pins-cms_list_item w-dyn-item">
                        <div hover-pin="" className="pin">
                          <div hover="bg" className="pin_dot">
                            <div hover="ico" className="ico-16 theme_on-light">
                              <div className="ico w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="pin_bg">
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                          </div>
                        </div>
                        <div className="style-css w-embed"></div>
                      </div>
                      <div data-modal-tip-btn="light-flow" data-pin="light-flow" floating-tip-trigger="light-flow" role="listitem" className="pins-cms_list_item w-dyn-item">
                        <div hover-pin="" className="pin">
                          <div hover="bg" className="pin_dot">
                            <div hover="ico" className="ico-16 theme_on-light">
                              <div className="ico w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="pin_bg">
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                          </div>
                        </div>
                        <div className="style-css w-embed"></div>
                      </div>
                      <div data-modal-tip-btn="your-private-sanctuary" data-pin="your-private-sanctuary" floating-tip-trigger="your-private-sanctuary" role="listitem" className="pins-cms_list_item w-dyn-item">
                        <div hover-pin="" className="pin">
                          <div hover="bg" className="pin_dot">
                            <div hover="ico" className="ico-16 theme_on-light">
                              <div className="ico w-embed">
                                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 2.66602C8.36819 2.66602 8.66699 2.96579 8.66699 3.33398V7.33301H12.667L12.8008 7.34668C13.1046 7.40886 13.3339 7.67787 13.334 8C13.334 8.36803 13.035 8.66673 12.667 8.66699H8.66699V12.667C8.66673 13.035 8.36803 13.334 8 13.334C7.63205 13.3339 7.33327 13.0349 7.33301 12.667V8.66699H3.33398C2.96579 8.66699 2.66602 8.36819 2.66602 8C2.6661 7.63188 2.96585 7.33301 3.33398 7.33301H7.33301V3.33398C7.33301 2.96585 7.63188 2.6661 8 2.66602Z" fill="currentColor"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="pin_bg">
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                            <div data-pin-pulse="" className="pin_bg_pulse"></div>
                          </div>
                        </div>
                        <div className="style-css w-embed"></div>
                      </div>
                    </div>
                  </div>
                  <div data-hero-slider="" className="hero-w_bg_master_img_day">
                    {villas.map((villa, i) => (
                      <div key={villa.slug} data-hero-slide={villa.slug} className="img-w h-auto">
                        <img
                          loading={i === 0 ? 'eager' : 'lazy'}
                          src={`/images/bahiamar-hero-${villa.slug}.webp`}
                          alt={`${villa.name} at Bahía Mar: front view of the villa, its private pool and the palm trees under a clear sky`}
                          sizes="(max-width: 1920px) 100vw, 1920px"
                          srcSet={heroSrcset(villa.slug)}
                          className="img h-auto hero-img"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="img-over-grad from-top _100vh"></div>
                  <div className="img-over-grad from-bot bot _6x"></div>
                  <div className="img-over-grad from-bot bot _6x"></div>
                </div>
                <div className="hero-s_b">
                  <div className="grid">
                    <h3 className="hero-s_title h5">
                      <div data-prevent-flicker="" data-scroll-reveal="ctn" data-hero-villas="" className="hero-s_tabs">
                        {villas.map((villa, i) => (
                          <a
                            key={villa.slug}
                            hover-tab=""
                            aria-label={villa.name}
                            hover-nav-item-l2=""
                            data-hero-villa={villa.slug}
                            href="#"
                            className={`nav-item w-inline-block${i === 0 ? ' is-active' : ''}`}
                          >
                            <div className="nav-item_label">
                              <div hover="text" className="nav-item_label_text"><div className="span">{villa.name.replace('Villa ', '')}</div></div>
                              <div hover="text" className="nav-item_label_text is-2"><div className="span">{villa.name.replace('Villa ', '')}</div></div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </h3>
                  </div>
                  <div className="u-32"></div>
                  <div data-prevent-flicker="" data-scroll-reveal="ctn" className="hero-s_btn">
                    <div className="e-auto">
                      <div hover-btn-circle="" data-magnetic-btn="" hover-nav-item-trigger="" className="btn-circle">
                        <div data-magnetic-inner="" className="btn-circle_label">
                          <a hover-nav-item="" aria-label="View available villas" href="/villas" className="nav-item w-inline-block">
                            <div className="nav-item_label">
                              <div className="nav-item_label_text">
                                <div hover="text" className="l1">View available villas</div>
                              </div>
                              <div className="nav-item_label_text is-2">
                                <div hover="text" className="l1">View available villas</div>
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
                        <a aria-label="View available villas" href="/villas" className="btn-circle_link w-inline-block"></a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                  <div className="grid">
                    <div className="hero-s_desc"><p className="l1 a-center"></p></div>
                  </div>
                  <div className="u-48"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero_themes">
            <div data-bg="color" className="hero_themes_color"></div>
            <div data-bg="light" className="hero_themes_light"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
