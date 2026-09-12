/* ============================================================
 *  COMP-PAGES — 5 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { CTA_IMAGES, type CtaImage } from '@/data';

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
