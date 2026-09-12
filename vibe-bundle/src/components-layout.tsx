/* ============================================================
 *  COMP-LAYOUT — 13 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { DUR, LENIS_OPTIONS, ScrollTrigger, animateVisibleElements, gsap, initAccordion, initChrome, initFilters, initHeroSlider, initHomeFlow, initImageZoom, initInteractions, initLightbox, initLocalScroll, initMisc, initModals, initParallax, initScrollReveal, initSlider, initTabs, initTabsHilight, initUi, registerLenis, runPreloader } from '@/animations';
import { usePathname, useRouter } from '@/shims';
import Lenis from 'lenis';
import { Fragment, useEffect, useRef } from 'react';

/* ============================================================
   components/layout/BookCallModal.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Modal «Book a call». Marcado portado del sitio original conservando las
 * clases de Webflow, que es lo que le da el aspecto (ver styles/webflow.css
 * y components.css). Las URLs del CDN ya están reescritas a /public.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs desde
 * home.html (marcado de ERA Residence), pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo devolvería el isotipo, el sello
 * y el PDF legal de Estepona.
 *
 * Pendiente (ver BACKLOG.md): la política de privacidad de Bahía Mar aún
 * no existe; el enlace del formulario apunta a «#» hasta que llegue.
 */

export function BookCallModal() {
  return (
    <div data-modal-cta="book-a-call" className="modal">
      <div className="modal_c">
        <div className="modal_cta theme_on-brand">
          <div className="grid">
            <div data-lenis-scroll="" data-modal-container="" className="modal_cta_c">
              <div className="modal_cta_close">
                <div data-modal-close="" hover-btn="" className="btn-ico">
                  <a aria-label="Label" href="#" className="btn-ico_link w-inline-block"></a>
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
              <div id="book-a-call" className="modal_cta_form w-form">
                <form id="wf-form-Book-a-call" name="wf-form-Book-a-call" data-name="Book a call" method="post" className="form_block" data-wf-page-id="6a068da7ad91b057365bf968" data-wf-element-id="029ceda9-d3d8-57d0-9f94-1e73d2fa398c">
                  <div className="modal_cta_l">
                    <div className="modal_cta_l_t">
                      <div className="modal_cta_a">
                        <h1 className="a2 b-desk">Book a call</h1>
                        <div className="a1 b-mob">Book a call</div>
                      </div>
                      <div className="u-24"></div>
                    </div>
                    <div className="modal_cta_l_b">
                      <div className="modal_cta_desc">
                        <div data-modal-close="menu" aria-label="Bahía Mar logo" className="logo_symbol ico-48 b-mob">
                          <div className="logo w-embed">
                            <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  maskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
                          </div>
                        </div>
                        <div className="u-32 b-mob"></div>
                        <p className="l1 mob_a-center">
                          Leave your details and the sales team will get back to you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal_cta_c_c">
                    <div className="modal_cta_c_line"><div data-scroll-reveal="line" className="line-v"></div></div>
                    <div className="modal_cta_c_logo">
                      <div data-modal-close="menu" aria-label="Bahía Mar logo" className="logo_symbol header">
                        <div className="logo w-embed">
                          <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  maskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
                        </div>
                      </div>
                      <div className="header-logo_bg b-mob w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-modal-mob" d="M 40,5.33 A 34.67,34.67 0 1,1 39.99,5.33" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '5.87px',
                fontWeight: 500,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              {/* Mismo sello que el de escritorio, escalado 80/120 (ver más abajo). */}
              <textPath href="#sello-bahiamar-modal-mob" startOffset="0%" textLength="218" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
                      </div>
                      <div className="header-logo_bg b-desk w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-modal" d="M 60,8 A 52,52 0 1,1 59.99,8" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '8.8px',
                fontWeight: 500,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                textLength = longitud de la circunferencia (2π·52 ≈ 326):
                el navegador reparte los glifos por TODO el anillo, sin
                hueco al final. Sin esto el texto acababa donde acababa y
                dejaba un cuarto de círculo vacío.
              */}
              <textPath href="#sello-bahiamar-modal" startOffset="0%" textLength="326" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
                      </div>
                    </div>
                    <div className="modal_cta_c_line"><div data-scroll-reveal="line" className="line-v"></div></div>
                  </div>
                  <div className="modal_cta_r">
                    <div className="modal_cta_form_c">
                      <div className="form_block_t">
                        <div className="u-32 b-desk"></div>
                        <div className="u-96 b-mob"></div>
                      </div>
                      <div className="form_block_list">
                        <input className="d-none w-input" maxLength={256} name="title" data-name="title" placeholder="" type="text" id="title" />
                        <div className="input">
                          <div className="input_label"><label htmlFor="name" className="l1 reg">Name:</label></div>
                          <input className="input_field l1 w-input" autoComplete="name" maxLength={256} name="name" data-name="name" placeholder="" type="text" id="name" required />
                        </div>
                        <div className="input">
                          <div className="input_label"><label htmlFor="email" className="l1 reg">Email:</label></div>
                          <input className="input_field l1 w-input" autoComplete="email" maxLength={256} name="email" data-name="email" placeholder="" type="email" id="email" required />
                        </div>
                        <div className="input">
                          <div className="input_label"><label htmlFor="phone" className="l1 reg">Phone:</label></div>
                          <input className="input_field l1 w-input" autoComplete="phone" maxLength={256} name="phone" data-name="phone" placeholder="" type="tel" id="phone" required />
                        </div>
                        <div className="input">
                          <div className="input_label">
                            <label htmlFor="message" className="l1 reg">Message:</label>
                          </div>
                          <textarea id="message" name="message" maxLength={5000} data-name="message" placeholder="" className="input_field area l1 w-input"></textarea>
                        </div>
                        <input className="d-none w-input" maxLength={256} name="utm_source" data-name="utm_source" placeholder="" type="text" id="utm_source" />
                        <input className="d-none w-input" maxLength={256} name="utm_medium" data-name="utm_medium" placeholder="" type="text" id="utm_medium" />
                        <input className="d-none w-input" maxLength={256} name="utm_campaign" data-name="utm_campaign" placeholder="" type="text" id="utm_campaign" />
                        <input className="d-none w-input" maxLength={256} name="utm_content" data-name="utm_content" placeholder="" type="text" id="utm_content" />
                        <input className="d-none w-input" maxLength={256} name="utm_url" data-name="utm_url" placeholder="" type="text" id="utm_url" />
                        <input className="d-none w-input" maxLength={256} name="page_url" data-name="page_url" placeholder="" type="text" id="page_url" />
                        <div className="u-160 b-mob"></div>
                      </div>
                      <div className="form_block_b">
                        <div className="form_block_legal">
                          <div className="p2 inline">By submitting, you agree to our&nbsp;</div>
                          <div data-text="p" className="legal-cms inline w-dyn-list">
                            <div data-comma-list="" role="list" className="legal-cms_list inline w-dyn-items">
                              <div role="listitem" className="legal-cms_list_item inline w-dyn-item">
                                <a href="#" className="text-link inline w-inline-block"><div className="p2 inline">Privacy policy</div></a>
                                <div data-comma="" className="p2 inline">,</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a data-form-btn="" hover-btn="" hover-nav-item="" aria-label="Submit" data-wf--btn--variant="sec" href="#" className="btn w-inline-block">
                          <div className="btn_label">
                            <div className="btn_label_text"><div hover="text" className="l1">Submit</div></div>
                            <div className="btn_label_text is-2"><div hover="text" className="l1">Submit</div></div>
                          </div>
                          <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form_success w-form-done">
                  <div className="form_success_c">
                    <div className="form_success_title">
                      <p className="l1 a-center">We’ve received your request</p>
                      <div className="u-160 b-mob"></div>
                    </div>
                    <div className="form_success_a"><p className="a2 a-center">Thank you</p></div>
                    <div className="form_success_social">
                      <div className="u-96 b-mob"></div>
                      <div className="social-cms w-dyn-list">
                        <div data-comma-list="" role="list" className="social-cms_list w-dyn-items">
                          <div role="listitem" className="social-cms_list_item w-dyn-item">
                            <a aria-label="Linkedin" hover-social="" href="#" target="_blank" className="social-btn w-inline-block">
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
                            <a aria-label="Facebook" hover-social="" href="#" target="_blank" className="social-btn w-inline-block">
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
                            <a aria-label="Instagram" hover-social="" href="#" target="_blank" className="social-btn w-inline-block">
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
                    <div className="form_success_desc">
                      <div className="u-48 b-mob"></div>
                      <p className="p1 a-center">
                        Our sales team will review your message and respond personally.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form_error theme_on-dark w-form-fail">
                  <div className="l1 a-center">Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_over"></div>
    </div>
  );
}

/* ============================================================
   components/layout/Breadcrumbs.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */

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

/* ============================================================
   components/layout/CookieNotice.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Aviso de cookies.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * home.html del sitio original, pero al personalizarlo para Bahía Mar
 * pasa a mantenerse a mano. Regenerarlo con `npm run gen:*` desharía el
 * texto. No hay enlace a política de privacidad: el cliente aún no la ha
 * facilitado (pendiente de anotar en BACKLOG.md).
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function CookieNotice() {
  return (
    <div data-cookies="" className="cookies">
      <div className="cookies_c">
        <div className="grid">
          <div id="w-node-a93c3093-e77a-7926-27af-e0a2d9898e16-d9898e13" className="cookies_card">
            <div className="cookies_card_t">
              <div className="l1 reg b-mob">Cookies</div>
              <div className="cookies_card_title b-desk"><div className="a1 a-center">Cookies</div></div>
            </div>
            <div className="cookies_card_b">
              <div className="l1 a-center mob_a-left">
                This website uses cookies to ensure you get the best experience on our website.
              </div>
              <div className="u-24"></div>
              <div className="cookies_card_btn-list">
                <a data-cookies="accept" aria-label="Accept" hover-link="" href="#" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Accept</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Accept</div></div>
                  </div>
                </a>
                <div className="h6">/</div>
                <a data-cookies="decline" aria-label="Decline" hover-link="" href="#" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Decline</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Decline</div></div>
                  </div>
                </a>
              </div>
            </div>
            <div className="card_decor">
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
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   components/layout/FloatingTips.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * marcado de ERA Residence (home.html), pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo lo devolvería a los textos de
 * Estepona.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 *
 * Los tres textos salen de los hechos del brief (materiales, terrazas,
 * villas independientes); los atributos `floating-tip="…"` son los ids
 * que disparan los pines del hero (Hero.tsx) y NO se cambian.
 */

export function FloatingTips() {
  return (
    <div className="floating-tips w-dyn-list">
      <div role="list" className="floating-tips_list w-dyn-items">
        <div floating-tip="crafted-to-endure" role="listitem" className="floating-tip w-dyn-item">
          <div className="floating-tip-card">
            <div className="floating-tip-card_t"><h1 className="h5">Crafted to Endure</h1></div>
            <div className="floating-tip-card_b">
              <p className="p1">
                Bamboo floors, chukum wall finishes, stone and natural timber, with solar panels on every villa — materials chosen to belong to the landscape and settle into it over time.
              </p>
            </div>
            <div className="card_decor">
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
        </div>
        <div floating-tip="light-flow" role="listitem" className="floating-tip w-dyn-item">
          <div className="floating-tip-card">
            <div className="floating-tip-card_t"><h1 className="h5">Light & Flow</h1></div>
            <div className="floating-tip-card_b">
              <p className="p1">
                Terraces, solariums, pergola-shaded porches and wide openings draw in the light and let the day flow from inside to out.
              </p>
            </div>
            <div className="card_decor">
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
        </div>
        <div floating-tip="your-private-sanctuary" role="listitem" className="floating-tip w-dyn-item">
          <div className="floating-tip-card">
            <div className="floating-tip-card_t"><h1 className="h5">Your Private Sanctuary</h1></div>
            <div className="floating-tip-card_b">
              <p className="p1">
                Every villa stands apart, with its own pool, jacuzzi, fire pit and terraces set into the vegetation — closer to a private home in the hills than a room in a resort.
              </p>
            </div>
            <div className="card_decor">
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
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   components/layout/Header.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/* eslint-disable @next/next/no-img-element */
/**
 * Logo y navegación: la parte de la cabecera que SÍ es igual en las 29
 * páginas. Lo que cambia (barra de scroll en la home, migas en las
 * interiores) se monta aparte desde cada página.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-header.mjs sobre la
 * cabecera del sitio original, pero al personalizarlo para Bahía Mar
 * (isotipo con máscara CSS, sello circular con <textPath> en escritorio y
 * móvil) pasa a mantenerse a mano. Regenerarlo con `npm run gen:*`
 * desharía ese trabajo.
 *
 * Es cliente sólo para saber en qué ruta estamos: el logo enlaza a
 * «volver arriba» en la home y a «Home» en el resto.
 */


export function Header() {
  const isHome = usePathname() === '/';

  return (
    <div className="theme_on-color">
      <a aria-label={isHome ? "Back to top" : "Home"} data-theme="" href={isHome ? "#hero" : "/"} className="header-logo w-inline-block">
        <div data-modal-close="menu" aria-label="Bahía Mar logo" className="logo_symbol header">
          <div className="logo w-embed">
            <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  maskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
          </div>
        </div>
        <div className="header-logo_bg b-desk w-embed">
          <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar" d="M 60,8 A 52,52 0 1,1 59.99,8" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '8.8px',
                fontWeight: 500,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                textLength = longitud de la circunferencia (2π·52 ≈ 326):
                el navegador reparte los glifos por TODO el anillo, sin
                hueco al final. Sin esto el texto acababa donde acababa y
                dejaba un cuarto de círculo vacío.
              */}
              <textPath href="#sello-bahiamar" startOffset="0%" textLength="326" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
        <div className="header-logo_bg b-mob w-embed">
          <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-mob" d="M 40,5.33 A 34.67,34.67 0 1,1 39.99,5.33" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '5.87px',
                fontWeight: 500,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                Misma receta que el sello de escritorio, a escala 80/120:
                textLength = 2π·34.67 ≈ 218 reparte el texto por todo el anillo.
              */}
              <textPath href="#sello-bahiamar-mob" startOffset="0%" textLength="218" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
      </a>
      <div data-theme="" className="header-nav">
        <div className="header-nav_list f-mob">
          <div hover-nav-item-l2-trigger="" data-modal-menu-btn="mob" className="btn-menu">
            <div className="btn-menu_label is-active">
              <a hover-nav-item-l2="" aria-label="Menu" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Menu</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Menu</div></div>
                </div>
              </a>
            </div>
            <div className="btn-menu_label">
              <a hover-nav-item-l2="" aria-label="Close" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Close</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Close</div></div>
                </div>
              </a>
            </div>
            <div className="ico-24">
              <div className="ico">
                <div data-ico-menu="is-1" className="ico w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div data-ico-menu="is-2" className="ico ia-2 w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav_list f-desk">
          <a hover-link="" aria-label="Select  a Villa" href="/villas" className="link w-inline-block">
            <div className="link_label">
              <div className="link_label_text">
                <div hover="text" className="h6">
                  Select 
                  <br />
                  a Villa
                </div>
              </div>
              <div className="link_label_text is-2">
                <div hover="text" className="h6">
                  Select 
                  <br />
                  a Villa
                </div>
              </div>
            </div>
          </a>
          <div className="u-24"></div>
          <a data-modal-cta-btn="book-a-call" aria-label="Book a call" hover-nav-item-l2="" href="#" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Book a call</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Book a call</div></div>
            </div>
          </a>
          <div className="u-4"></div>
          <a hover-nav-item-l2="" aria-label="Contact" href="/contact" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Contact</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Contact</div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   components/layout/LandscapeCover.tsx
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

export function LandscapeCover() {
  return (
    <div className="landscape-cover">
      <div className="landscape-cover_img">
        <img loading="eager" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/landscape.svg" alt="" className="img contain" />
      </div>
      <div className="landscape-cover_bg"></div>
    </div>
  );
}

/* ============================================================
   components/layout/MasterPreloader.tsx
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

export function MasterPreloader() {
  return (
    <div data-master-preloader="" className="master-preloader theme_on-dark"></div>
  );
}

/* ============================================================
   components/layout/MenuModal.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Menú a pantalla completa (móvil).
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * home.html del sitio original, pero al personalizarlo para Bahía Mar
 * (isotipo con máscara CSS al pie) pasa a mantenerse a mano. Regenerarlo
 * con `npm run gen:*` desharía ese trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function MenuModal() {
  return (
    <div data-modal-menu="mob" className="modal menu theme_on-dark">
      <div className="modal_c">
        <div data-modal-container="" className="modal_menu">
          <div className="modal_menu_t">
            <div className="u-48 b-desk"></div>
            <div className="u-272 b-mob"></div>
            <div className="grid">
              <div className="modal_menu_title">
                <div className="modal_menu_a"><div data-part="a" className="a1 a-center">The</div></div>
                <div data-part="h" className="h1 a-center">Menu</div>
              </div>
            </div>
          </div>
          <div className="modal_menu_c">
            <div className="grid">
              <div className="modal_menu_list">
                <a data-part="ctn" aria-label="Home" hover-link="" data-modal-close="mob" href="/" aria-current="page" className="link w-inline-block w--current">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Home</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Home</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Select a Villa" hover-link="" data-modal-close="mob" href="/villas" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Select a Villa</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Select a Villa</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Book a call" hover-link="" data-modal-cta-btn="book-a-call" data-modal-close="mob" href="#" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Book a call</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Book a call</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Contact" hover-link="" data-modal-close="mob" href="/contact" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Contact</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Contact</div></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="modal_menu_b">
            <div className="s_logo">
              <div data-part="ctn" className="logo_symbol ico-48">
                <div className="logo w-embed">
                  <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  maskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
                </div>
              </div>
            </div>
            <div className="u-48"></div>
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_bg"></div>
    </div>
  );
}

/* ============================================================
   components/layout/Preloader.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * marcado de ERA Residence (home.html), pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo lo devolvería a los textos de
 * Estepona.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 *
 * El fondo caligráfico: el original era un SVG con la palabra «Estepona»
 * dibujada a mano como trazados. Aquí es un <svg> en línea con un <text>
 * «Samaná» en la fuente de floritura del sitio (Pinyon Script, publicada
 * como --_fonts---font-accent). Mismo viewBox (1440×864) y misma clase
 * `.img`, así que webflow.css lo dimensiona igual que a la imagen; la
 * palabra desborda el borde derecho a propósito, como el original.
 */

export function Preloader() {
  return (
    <div data-preloader="" className="preloader theme_on-dark">
      <div className="preloader_ctn">
        <div className="preloader_t">
          <div className="u-48"></div>
          <div className="s_logo">
            <div data-part="ctn" className="logo_symbol ico-48">
              <div className="logo w-embed">
                <div
                aria-hidden="true"
                style={{
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'currentColor',
                  WebkitMaskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  maskImage: 'url(https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png)',
                  WebkitMaskSize: 'contain',
                  maskSize: 'contain',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskPosition: 'center',
                  maskPosition: 'center',
                }}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="preloader_c">
          <div className="grid">
            <div className="preloader_title-l"><div data-part="h" className="c1 a-center">Samaná</div></div>
            <div className="preloader_logo">
              <div data-part="h" className="h3 a-center">
                Bahía
                <br />
                Mar
              </div>
              <div className="preloader_logo_a">
                <div data-part="a" className="a2 preloader_a a-center">Las Terrenas</div>
              </div>
            </div>
            <div className="preloader_title-r"><div data-part="h" className="c1 a-center">Peninsula</div></div>
          </div>
        </div>
        <div className="preloader_b">
          <div className="grid">
            <div className="s_title">
              <div data-part="line" className="preloader_progress">
                <div className="preloader_progress_fill"><div className="preloader_progress_track"></div></div>
              </div>
              <div className="u-32"></div>
              <p data-part="p" className="l1 a-center">
                Bahía Mar
                <br />
                A place to return to.
              </p>
            </div>
          </div>
          <div className="u-48"></div>
        </div>
      </div>
      <div className="preloader_bg_arch">
        <div className="preloader_bg_arch_is-1"></div>
        <div className="preloader_bg_arch_is-2"></div>
      </div>
      <div className="preloader_bg">
        <div className="preloader_bg_a">
          <svg className="img" viewBox="0 0 1440 864" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
            <text
              x="-40"
              y="600"
              fontSize="520"
              fill="currentColor"
              style={{ fontFamily: 'var(--_fonts---font-accent)' }}
            >
              Samaná
            </text>
          </svg>
        </div>
        <div className="preloader_bg_decor">
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
   components/layout/ScrollRail.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-header.mjs — no editar a mano.
 * Carril izquierdo de la home: la barra de progreso «00» —que además se
 * puede arrastrar, ver scrollBar() en lib/animations/chrome.ts— y el
 * indicador «Scroll». En las páginas interiores NO existe: ahí va el
 * rastro de migas.
 */

export function ScrollRail() {
  return (
    <>
      <div data-theme="" className="s-bar-w">
        <div data-s-bar="" className="s-bar">
          <div data-s-bar-thumb="" className="s-bar_thumb"><div data-s-bar-label="" className="l1 a-center">00</div></div>
          <div data-s-bar-fill="" className="s-bar_fill"></div>
          <div data-s-bar-track="" className="s-bar_track"></div>
        </div>
      </div>
      <div data-theme="" className="s-down">
        <div className="s-down_arrow w-embed">
          <svg width="100%" height="100%" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.36533 3C7.10389 3.54701 6.85117 4.02564 6.60716 4.4359C6.34572 4.84615 6.09299 5.18804 5.84899 5.46154L45 5.46154L45 6.53846L5.84899 6.53846C6.09299 6.82906 6.34572 7.17949 6.60716 7.58974C6.85117 8 7.10389 8.47009 7.36533 9L6.45029 9C5.35226 7.75214 4.20193 6.82906 2.99932 6.23077L2.99932 5.76923C4.20193 5.18804 5.35226 4.26496 6.45029 3L7.36533 3Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="l2">Scroll</div>
      </div>
    </>
  );
}

/* ============================================================
   components/providers/Animations.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Arranque de la capa de animación.
 *
 * En el original, Barba destruía y reconstruía el DOM en cada navegación y
 * el script se reinicializaba entero. Aquí el equivalente es el cambio de
 * `pathname`: se vuelven a registrar los disparadores sobre el árbol nuevo
 * y se matan los del anterior, que apuntan a nodos que ya no existen.
 *
 * `gsap.context()` recoge todo lo creado dentro para poder revertirlo de
 * una vez; los ScrollTrigger se matan explícitamente porque viven fuera
 * del contexto.
 */






















/**
 * El preloader va una sola vez por CARGA de página, no por montaje del
 * componente. La bandera vive en el módulo, no en un `useRef`, a propósito:
 * un ref sobrevive al doble montaje de StrictMode igual que ésta, pero lo
 * que no puede sobrevivir es abortar la animación entre medias. Por eso
 * este efecto no devuelve limpieza: matar el timeline a mitad dejaba la
 * imagen del hero congelada en `scale: 0.75` y la cortina sin retirar.
 *
 * No hay nada que limpiar: si el layout se desmonta es porque hay una carga
 * completa de documento, y ahí se va todo.
 */
let preloaderStarted = false;

export function Animations() {
  const pathname = usePathname();

  useEffect(() => {
    if (preloaderStarted) return;
    preloaderStarted = true;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('[data-preloader], [data-master-preloader]', { display: 'none' });
      return;
    }
    // Igual que abajo: el preloader también trocea texto, así que espera a
    // la tipografía. La cortina ya está pintada por CSS, no se ve el retraso.
    void document.fonts.ready.then(() => runPreloader());
  }, []);

  useEffect(() => {
    // Quien pide menos movimiento no debe quedarse con la página en blanco:
    // se retira el velo antiflicker y se sale sin animar nada.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('[data-prevent-flicker], [data-scroll-reveal]', { visibility: 'visible' });
      return;
    }

    let cancelled = false;
    let ctx: gsap.Context | null = null;

    /*
     * SplitText parte el texto midiendo lo que hay renderizado en ese
     * instante. Si se ejecuta antes de que la tipografía esté lista, calcula
     * las líneas con la métrica de la fuente de respaldo y las congela en
     * contenedores; cuando entra la definitiva, el texto refluye y ya no
     * coincide con el corte guardado.
     *
     * (Esta espera se añadió sospechando que causaba el salto de líneas de
     * «Select a Villa». Se comprobó que NO era eso —lo era la asimetría
     * al partir las dos copias, ver lib/animations/interactions.ts— pero se
     * mantiene porque el problema que evita es real de todos modos.)
     */
    void document.fonts.ready.then(() => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const cleanups = [
          initScrollReveal(document),
          initParallax(document),
          initHomeFlow(),
          initChrome(),
          initInteractions(),
          initModals(),
          initUi(),
          initSlider(),
          initHeroSlider(),
          initAccordion(),
          initLightbox(),
          initFilters(),
          initImageZoom(),
          initTabs(),
          initTabsHilight(),
          initLocalScroll(document),
          initMisc(),
        ];

        // Las imágenes cambian la altura del documento al cargar; sin este
        // refresco los disparadores quedan calculados sobre medidas viejas.
        const onLoad = () => ScrollTrigger.refresh(true);
        window.addEventListener('load', onLoad);

        return () => {
          window.removeEventListener('load', onLoad);
          for (const cleanup of cleanups) cleanup();
        };
      });
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}

/* ============================================================
   components/providers/PageTransitions.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Transiciones entre rutas — equivalente de `initPageTransitions()`.
 *
 * No es un port: el original usaba Barba, que interceptaba la navegación,
 * pedía el HTML de destino y **mantenía vivo el DOM viejo** mientras lo
 * animaba hacia fuera. El App Router no da ese hueco — al cambiar la ruta
 * el árbol se sustituye y no hay un instante con los dos.
 *
 * Se reproduce la misma coreografía adelantando la salida a ANTES de
 * navegar:
 *
 *   1. clic en un enlace interno → se cancela la navegación
 *   2. los elementos visibles se animan hacia fuera (`hide`)
 *   3. el contenedor se funde a 0
 *   4. entonces sí, se navega
 *   5. al montar la ruta nueva, el contenedor entra de 0 a 1
 *
 * Efecto secundario deseable: el marcado portado usa `<a>` planos, que en
 * Next provocan recarga completa del documento. Al interceptarlos pasan a
 * ser navegación de cliente de verdad.
 *
 * Límite conocido, que el original también tenía: **atrás y adelante del
 * navegador no se pueden retrasar**. Cuando llega el evento la navegación ya
 * ocurrió, así que ahí sólo hay entrada. Barba se comportaba igual.
 */






const CONTAINER = '.transition-container';

/** Protocolos que no son navegación dentro del sitio. */
const EXTERNAL_PROTOCOLS = /^(mailto:|tel:|sms:|https?:\/\/)/i;

export function PageTransitions() {
  const router = useRouter();
  const pathname = usePathname();

  /* Entrada: al montar cada ruta, el contenedor aparece. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = document.querySelector<HTMLElement>(CONTAINER);
    if (!container) return;

    const tween = gsap.fromTo(
      container,
      { opacity: 0 },
      { opacity: 1, duration: DUR.m, ease: 'InOut', overwrite: true },
    );
    return () => {
      tween.kill();
    };
  }, [pathname]);

  /* Salida: se intercepta el clic y se animan las dos fases antes de navegar. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const onClick = (e: MouseEvent) => {
      // Respetar las formas de abrir en otra pestaña o ventana.
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = (e.target as Element | null)?.closest?.('a');
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.getAttribute('href');
      if (!href) return;
      if (href.startsWith('#') || EXTERNAL_PROTOCOLS.test(href)) return;
      if (link.hasAttribute('download')) return;
      if (link.target && link.target !== '_self') return;

      // Enlace a la ruta actual: no hay nada que animar.
      const [to] = href.split('#');
      const normalise = (p: string) => p.replace(/\/+$/, '') || '/';
      if (normalise(to) === normalise(pathname)) return;

      const container = document.querySelector<HTMLElement>(CONTAINER);
      if (!container) return;

      e.preventDefault();

      /*
       * La navegación NO puede depender de que el tween termine.
       *
       * Si la animación no completa —pestaña en segundo plano, donde el
       * navegador congela requestAnimationFrame y GSAP deja de avanzar— el
       * `onComplete` no llega nunca y el enlace se queda muerto: se cancela
       * el clic y no se va a ninguna parte. Un enlace que no navega es peor
       * que una transición fea.
       *
       * Por eso navega el primero de los dos que llegue, y el otro se
       * descarta con esta bandera.
       */
      let navigated = false;
      const go = () => {
        if (navigated) return;
        navigated = true;
        router.push(to);
      };

      // Primero se van los elementos, luego se apaga el conjunto: es el
      // orden del original, y por eso se ve el texto salir antes del fundido.
      animateVisibleElements(container, 'hide');

      gsap.to(container, {
        opacity: 0,
        duration: DUR.m,
        ease: 'In',
        overwrite: true,
        onComplete: go,
      });

      // Red de seguridad, con un margen sobre la duración real del fundido.
      setTimeout(go, DUR.m * 1000 + 250);
    };

    // En captura, para adelantarse a los manejadores de los modales, que
    // cierran el menú al pulsar un enlace de dentro.
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [router, pathname]);

  return null;
}

/* ============================================================
   components/providers/SmoothScroll.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */

/**
 * Scroll suave global (Lenis) sincronizado con el ticker de GSAP.
 *
 * Réplica de `initLenis()` del sitio original. La diferencia está en el ciclo
 * de vida: allí Barba destruía y recreaba todo en cada navegación; aquí la
 * instancia vive en el layout y sobrevive a los cambios de ruta, que es como
 * debe ser en el App Router.
 */







export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // Quien pide menos movimiento se queda con el scroll nativo.
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    // Si no, el navegador restaura la posición ANTES de que Lenis exista.
    history.scrollRestoration = 'manual';

    const lenis = new Lenis({ wrapper: window, ...LENIS_OPTIONS.global });
    lenisRef.current = lenis;
    // El preloader y los modales necesitan pararlo desde fuera de React.
    registerLenis(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);

    // El original refresca ScrollTrigger 40 ms después del último resize.
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => ScrollTrigger.refresh(true), 40);
      // Altura real del viewport, sin la barra de direcciones móvil.
      document.documentElement.style.setProperty('--_100svh', `${window.innerHeight}px`);
    };
    window.addEventListener('resize', onResize);
    onResize();

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      gsap.ticker.remove(raf);
      lenis.destroy();
      lenisRef.current = null;
      registerLenis(null);
    };
  }, []);

  // Al cambiar de ruta: arriba del todo y recalcular disparadores. Sin esto,
  // ScrollTrigger conserva las medidas de la página anterior.
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh(true);
  }, [pathname]);

  return <>{children}</>;
}
