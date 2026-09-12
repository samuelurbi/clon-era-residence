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

import { CTA_IMAGES, VillaCardData, bedFilters, srcset, type CtaImage, type Villa, typeFilters, villaCards } from '@/data';
import { Fragment } from 'react';

/* ============================================================
   components/pages/ComingSoonMain.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Página de espera («coming soon»).
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * coming-soon.html del sitio original, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo con `npm run gen:*` devolvería
 * los textos del promotor de origen.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 *
 * Copy: ningún documento del cliente confirma una «próxima entrega» de
 * villas, así que la página no anuncia ninguna; sólo remite a contactar
 * para conocer la disponibilidad actual.
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
                <h1 data-scroll-reveal="h" className="h2 a-center">villas available on request</h1>
                <div className="u-32"></div>
                <div className="grid _4-columns">
                  <div className="soon-s_desc">
                    <p data-scroll-reveal="p" className="p1 a-center">
                      Villa availability at Bahía Mar is confirmed directly by our team. Contact us to find out which villas in Las Terrenas are currently available.
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
 * Página de contacto de Bahía Mar.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * contact.html del sitio original, pero al personalizarlo para Bahía Mar
 * pasa a mantenerse a mano. Regenerarlo DESHARÍA el trabajo (volvería a
 * los datos y al mapa de la oficina de ventas de la promoción original).
 *
 * Marcado portado conservando las clases de Webflow, que es lo que le da
 * el aspecto (ver styles/webflow.css y components.css). Sólo cambian
 * textos, src/srcSet/alt y href. Teléfono, correo, redes y dirección de
 * la oficina de ventas son placeholders (ver BRIEF.md): el cliente no ha
 * facilitado ninguno. El horario tampoco se conoce, así que el pin sobre
 * la imagen no inventa horas ni política de visitas: sólo dice «Bahía Mar ·
 * Las Terrenas, Samaná», que es lo que muestra la foto.
 *
 * La imagen del hueco del mapa es la entrada de la casa club («INGRESO CASA
 * CLUB 08» de 00. AMENIDADES), recortada a la proporción del SVG original
 * (1440x760). Antes era el pórtico de entrada (bahiamar-entrance-1), pero
 * ese render es oscuro y la sección sigue siendo `data-bg="light"`: el
 * sello, el menú y la caja de redes se pintaban en verde profundo sobre
 * follaje y no se leían (QA ronda 1, PALETTE-BRAND-02). El cromo se fija por
 * marcadores `data-bg` con geometría propia de Webflow (hero_themes…), que
 * aquí no existen y no se pueden crear sin clases nuevas, así que la
 * solución es una imagen de tono claro en la que el verde sí contrasta.
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
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center">Get in touch</h1>
                </div>
              </div>
              <div className="u-96"></div>
              <div className="grid">
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_email">
                  <h2 className="l1 reg a-center">Write to us</h2>
                  <div className="u-4"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="info@bahiamar.example" href="mailto:info@bahiamar.example" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">info@bahiamar.example</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">info@bahiamar.example</div>
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
                        <h3 className="l1 reg a-center">Sales office</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="Las Terrenas, Samaná (address TBC)" href="https://maps.google.com/?q=Las+Terrenas,+Saman%C3%A1,+Dominican+Republic" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Las Terrenas, Samaná (address TBC)</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Las Terrenas, Samaná (address TBC)</div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div data-prevent-flicker="" data-scroll-reveal="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">The site</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="Bahía Mar, Las Terrenas, Samaná, Dominican Republic" href="https://maps.google.com/?q=Las+Terrenas,+Saman%C3%A1,+Dominican+Republic" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Bahía Mar, Las Terrenas, Samaná, Dominican Republic</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Bahía Mar, Las Terrenas, Samaná, Dominican Republic</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                </div>
                <div data-prevent-flicker="" data-scroll-reveal="ctn" className="contact-s_phone">
                  <h3 className="l1 reg a-center">Call or message us</h3>
                  <div className="u-4"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="+1 (809) 000-0000" href="tel:+18090000000" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">+1 (809) 000-0000</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">+1 (809) 000-0000</div></div>
                          </div>
                        </a>
                      </div>
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="WhatsApp" href="https://wa.me/18090000000" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">WhatsApp</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">WhatsApp</div></div>
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
                <div data-parallax="w" data-scroll-reveal="ctn" data-prevent-flicker="" className="contact-s_map">
                  <div data-parallax="img" className="contact-s_map_c">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1.webp" loading="eager" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-clubhouse-1.webp 2350w" alt="The clubhouse entrance at Bahía Mar: pale stone arcades around a paved forecourt, a planted island of palms and ferns in the middle, and light canopies shaped like leaves opening overhead." className="img h-auto" />
                    <div className="contact-s_map_pin">
                      <div className="contact-s_map_pin_c theme_on-dark">
                        <div className="contact-s_map_pin_info">
                          <div className="l2"><strong>Bahía Mar</strong></div>
                          <div className="l2 reg">Las Terrenas, Samaná</div>
                        </div>
                        <div data-modal-close="menu" aria-label="Bahía Mar" className="logo_symbol ico-28">
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
 * Amenidades de Bahía Mar: cinco diapositivas con pestañas.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * home.html del sitio original, pero al personalizarlo para Bahía Mar pasa
 * a mantenerse a mano. Regenerarlo lo devolvería a las amenidades del
 * sitio clonado y desharía este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Los textos salen del brochure y del master plan (bahia-mar-personalizacion/
 * BRIEF.md); las fotos, de 00. AMENIDADES (inventario/amenities.json).
 * Hay exactamente cinco elementos porque la animación los cuenta.
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
                      <div data-reveal-first="" data-tab-content="entrance" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Entrance</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Past the entrance arches, the first funicular in the Caribbean links the whole community, together with a network of cart paths.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="Entrance to Bahía Mar: a sequence of arches over the access road with a whale-tail sculpture at sunset" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-1.webp 2350w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="pools" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Beach & pools</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Three community pools set among the palms, a lagoon, and a Beach Club with its own access to the beach.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="Community pool of Bahía Mar surrounded by palms and rocks, with the sea on the horizon" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-2.webp 2350w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="thermal" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Thermal waters</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Thermal waters, a spa with meditation huts, a center for meditation and healing, and a wellness center for yoga and pilates.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="Circular thermal pool of the Bahía Mar spa under an open oculus draped with hanging plants" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-3.webp 2350w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="coworking" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Coworking</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  A coworking space, a clubhouse and boutique hotel, seven restaurants and shops, a gym, a party hall, courts and children’s parks.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="Bahía Mar coworking lounge with a reflecting pool down its center and floor-to-ceiling glass towards the palms and the sea" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-4.webp 2350w" className="img-p" />
                              </div>
                              <div className="img-over-grad from-top"></div>
                              <div className="img-over-grad from-bot _4x bot"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-reveal-first="" data-tab-content="trails" role="listitem" className="amen-cms_list_item w-dyn-item">
                        <div data-parallax="w" className="amen-slide">
                          <div className="amen-slide_b">
                            <div className="grid">
                              <div className="amen-slide_title">
                                <h3 data-scroll-reveal="p" data-tab="p" className="l1">Forest trails</h3>
                                <div className="u-32"></div>
                              </div>
                              <div className="amen-slide_desc w-clearfix">
                                <div className="red-line"></div>
                                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                                  Hiking trails, waterfalls and climbing, mountain bridges and two viewpoints — and an area of BBQs and fire pits for the evenings.
                                </h4>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                          <div className="amen-slide_img">
                            <div data-tab="slide" className="img-w">
                              <div className="img-w">
                                <img data-parallax="img-in" loading="eager" alt="Raised wooden walkway winding through the forest of Bahía Mar beside a stream, under a sculpted white canopy" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5.webp" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-amenities-5.webp 2350w" className="img-p" />
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
                              <div data-tab="" data-tab-trigger="entrance" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Entrance</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="pools" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Beach & pools</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="thermal" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Thermal waters</div>
                              </div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="coworking" className="amen-tab"><div data-scroll-reveal="p" className="h5">Coworking</div></div>
                            </div>
                            <div role="listitem" className="amen-tabs-cms_list_item w-dyn-item">
                              <div data-tab="" data-tab-trigger="trails" className="amen-tab">
                                <div data-scroll-reveal="p" className="h5">Forest trails</div>
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
 * Pie con el formulario «Book a call». Idéntico en todas las páginas salvo
 * por el enlace de vuelta arriba, que sólo lleva la home.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-shared-sections.mjs
 * sobre el marcado de ERA Residence, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo devolvería la marca, los PDF
 * legales y el crédito de agencia del sitio de Estepona.
 *
 * Pendiente (ver BACKLOG.md): política de privacidad y términos de uso de
 * Bahía Mar todavía no existen, por eso los enlaces apuntan a «#». El
 * teléfono es el placeholder de la política del brief, no un número real.
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
                  <div className="u-32"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a href="tel:+18090000000" target="_blank" className="nav-item w-inline-block">
                          <div data-text="h" className="h2 a-center">+1 (809) 000-0000</div>
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
                        <a hover-nav-item="" aria-label="Las Terrenas, Samaná, Dominican Republic (address TBC)" href="https://maps.google.com/?q=Las+Terrenas,+Saman%C3%A1,+Dominican+Republic" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Las Terrenas, Samaná, Dominican Republic (address TBC)</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Las Terrenas, Samaná, Dominican Republic (address TBC)</div>
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
                  <div data-text="p" className="l1">Bahía Mar.</div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©<span className="year">2026</span>{' '}All rights reserved
                  </div>
                  <div className="u-12"></div>
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="legal-cms_list w-dyn-items">
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Privacy policy" href="#" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Privacy policy</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Privacy policy</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Terms of Use" href="#" className="nav-item w-inline-block">
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
                    <a aria-label="Bahía Mar Residences & Beach Resort" href="#" className="credits_link w-inline-block"></a>
                    <div data-text="ctn" data-scrub-reveal="ctn" className="credits_logo-w">
                      <div data-json="" className="credits_logo"></div>
                    </div>
                    <div className="u-12"></div>
                    <div data-text="p" className="l1 reg a-right">Las Terrenas, Samaná</div>
                    <div data-text="p">
                      <a hover-nav-item="" aria-label="Bahía Mar Residences & Beach Resort" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Bahía Mar Residences &amp; Beach Resort</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Bahía Mar Residences &amp; Beach Resort</div></div>
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
 * CTA «Sea views from every villa». El marcado es común a casi todas las
 * páginas, pero la imagen de fondo NO: cada sección del sitio usa la suya
 * (data/cta-images.ts). Por eso entra por props en vez de venir fijada.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-shared-sections.mjs
 * sobre el marcado de ERA Residence, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo devolvería el texto y el
 * fondo de Estepona.
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
                  A short conversation is enough to understand which of the five villas fits the way you want to live in Las Terrenas — a family home facing the bay, a longer stay each season, or a base for the winter months.
                </p>
              </div>
            </div>
            <div className="u-272"></div>
            <div className="grid">
              <div className="cta-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  Sea views
                  <br />
                  from every villa
                </h2>
                <div className="u-32"></div>
                <h3 data-scroll-reveal="h" className="c1 a-center">Samaná Bay through the palms</h3>
                <div className="u-160"></div>
                <div data-scroll-reveal="ctn" className="cta-s_title_btn">
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
            </div>
          </div>
          <div className="w_bg">
            <div data-parallax="w" className="img-w">
              <img data-parallax="img" loading="eager" alt={image.alt} src={image.src} sizes="(max-width: 2350px) 100vw, 2350px" srcSet={image.srcSet} className="img-p" />
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

/* ============================================================
   components/villas/LightboxModal.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde villas/011.html — no editar a mano.
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
            <img data-lightbox-img="" loading="lazy" alt="" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/placeholder.60f9b1840c.svg" className="img modal_lightbox_img" />
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
   components/villas/VillaCard.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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

/* ============================================================
   components/villas/RelatedVillas.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-villa-detail.mjs — no editar a mano.
 *
 * Bloque «otras viviendas» del pie de la ficha. Usa la misma tarjeta que el
 * listado: se comprobó que el original repite ahí el mismo marcado.
 */



export function RelatedVillas({ cards }: { cards: VillaCardData[] }) {
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
  <VillaCard key={card.slug} card={card} />
))}</div>
                </div>
              </div>
              <div className="u-32"></div>
              <div className="btn-list center">
                <a aria-label="View all" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="/villas" className="btn w-inline-block">
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
   components/villas/VillaArch.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Título del bloque «otras villas» que precede a RelatedVillas en la ficha
 * (/villas/<slug>). Sólo texto: no lleva imagen.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre la
 * ficha de apartamento del sitio de origen; al personalizarlo para Bahía
 * Mar («Other villas» en vez de «Other apartments») pasa a mantenerse a
 * mano y regenerarlo desharía el cambio.
 *
 * Marcado portado conservando las clases de Webflow, que es lo que le da
 * el aspecto (ver styles/webflow.css y components.css).
 */

export function VillaArch() {
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
                    Other villas 
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
   components/villas/VillaDetail.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
                      <a aria-label="pdf" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec-circle" href={`https://puntacanadinnerinthesky.com/urbatrix/bahiamar/documents/villa-${villa.slug}-plan.pdf`} className="btn w-variant-9f3f61aa-a2e8-bef6-01f9-2f3463919d6d w-inline-block">
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

/* ============================================================
   components/villas/VillasListing.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Listado de villas. Envoltorio y clases idénticos al original; las
 * tarjetas y las opciones de los filtros salen de data/villas.ts.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-apartments-listing.mjs
 * sobre el marcado de ERA Residence, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo lo devolvería a los 25
 * apartamentos de Estepona.
 */



export function VillasListing() {
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
                  <h1 data-prevent-flicker="" data-scroll-reveal="h" className="h1 a-center mob_a-left">Villas</h1>
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
                                  {typeFilters.map((t) => (
                                    <div key={t.value} role="listitem" className="cms_list_item w-dyn-item">
                                      <div data-select="item" data-filter-group="type" data-filter-trigger={t.value} hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">{t.label}</div></div>
                                    </div>
                                  ))}
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
                                  {bedFilters.map((b) => (
                                    <div key={b} role="listitem" className="cms_list_item w-dyn-item">
                                      <div data-select="item" data-filter-group="bed" data-filter-trigger={b} hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">{b}</div></div>
                                    </div>
                                  ))}
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
                              <div data-select="item" data-sort-order="asc" data-sort-trigger="size" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Fewest bedrooms</div></div>
                              <div data-select="item" data-sort-order="desc" data-sort-trigger="size" hover-select-item="" className="filter_select_drop-down_list_item"><div hover="text" className="l1">Most bedrooms</div></div>
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
{villaCards.map((card) => (
                      <VillaCard key={card.slug} card={card} />
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
                        We didn&#x27;t find any villa matching your selection. Please try changing the typology or bedroom filters.
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
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_02.webp" className="video">
              <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_02.webm" type="video/webm" />
            </video>
          </div>
          <div className="apart_themes">
            <div className="themes_row">
              <div data-bg="light" className="apart_themes_light-1"></div>
              <div data-bg="light" className="apart_themes_color-1"></div>
            </div>
            <div data-bg="light" className="apart_themes_light-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
