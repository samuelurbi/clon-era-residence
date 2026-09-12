/* ============================================================
 *  COMP-HOME — 11 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { srcset, type Villa, villas } from '@/data';

/* ============================================================
   components/home/AmenitiesIntro.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Introducción a las amenidades de Bahía Mar (puente entre el avance de
 * villas y el bloque de amenidades).
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * home.html del sitio original, pero al personalizarlo para Bahía Mar pasa
 * a mantenerse a mano. Regenerarlo lo devolvería al texto del sitio
 * clonado y desharía este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Los textos salen del brochure (bahia-mar-personalizacion/BRIEF.md).
 */

export function AmenitiesIntro() {
  return (
    <section data-bg="light" className="section clip theme_on-brand">
      <div className="container">
        <div data-video-playpause="" className="apart-info-w">
          <div className="apart-info-s">
            <div className="u-48"></div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="u-48"></div>
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">Life inside the community</p>
              </div>
            </div>
            <div className="u-160"></div>
            <div className="grid">
              <div className="info-s_lead">
                <h3 data-scroll-reveal="p" className="h4 a-center">
                  Every villa is private. Everything around it is shared: a beach to swim from, thermal waters to soak in, trails to walk and places to gather.
                </h3>
              </div>
            </div>
            <div className="u-160"></div>
            <div className="grid">
              <div className="info-s_desc">
                <p data-scroll-reveal="p" className="p1 a-center">Beach Club and pools, spa and wellness center, coworking, restaurants and shops, trails and viewpoints — a community planned around slow days and quiet evenings, with all of it within easy reach.</p>
                <div className="u-32"></div>
                <div className="s_logo">
                  <div data-scroll-reveal="ctn" className="logo_symbol ico-48">
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
            <div className="u-48"></div>
          </div>
          <div data-parallax="ctn-down" className="flower apart-info">
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_01.webp" className="video">
              <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_01.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Arch.tsx
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
 * El texto del arco corre sobre un círculo (startOffset 25% = la cima)
 * del que sólo se ve la mitad superior, y el scroll le va abriendo el
 * word-spacing hasta 10rem (lib/animations/home-flow.ts). Medido con
 * Playwright (scratchpad/qa-arch.mjs): «Three reasons to choose Bahía
 * Mar» cabía en escritorio pero en móvil ya ocupaba el 51% del círculo
 * en reposo y se cortaba por los lados; «Three reasons for Bahía Mar»
 * ocupa lo mismo que la frase original (42% / 57% en móvil, 15% / 29%
 * en escritorio), así que se usa esa sin tocar el trazado.
 */

export function Arch() {
  return (
    <section className="section arch clip theme_on-brand">
      <div className="container">
        <div className="benefits-intro-w">
          <div className="benefits-intro-s">
            <div className="u-48 b-mob"></div>
            <div className="u-272 b-mob"></div>
            <div className="s_logo">
              <div className="info-s_logo_l">
                <div data-scroll-reveal="p" className="l1 a-center">Samaná</div>
              </div>
              <div data-scroll-reveal="ctn" className="logo_symbol ico-48">
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
              <div className="info-s_logo_r">
                <div data-scroll-reveal="p" className="l1 a-center">Peninsula</div>
              </div>
            </div>
            <div className="u-48"></div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="u-48"></div>
            <div className="grid">
              <div className="s_title">
                <p data-scroll-reveal="p" className="l1 a-center">Life on the Samaná peninsula</p>
              </div>
            </div>
            <div className="u-96"></div>
            <div className="benefits-intro-s_title">
              <div className="benefits-intro-s_title_svg b-desk w-embed">
                <svg viewBox="0 0 1600 1600" width="100%" height="100%">
                  <defs>
                    <path id="circle-desk" d="M 800,800 m -676,0 a 676,676 0 1,1 1352,0 a 676,676 0 1,1 -1352,0"></path>
                  </defs>
                  <text data-circle-text="" className="h4" textAnchor="middle" fill="currentColor">
                    <textPath href="#circle-desk" startOffset="25%">Five reasons for Bahía Mar</textPath>
                  </text>
                </svg>
              </div>
              <div className="benefits-intro-s_title_svg b-mob w-embed">
                <svg viewBox="0 0 416 416" width="100%" height="100%">
                  <defs>
                    <path id="circle-mob" d="M 208,208 m -160,0 a 160,160 0 1,1 320,0 a 160,160 0 1,1 -320,0"></path>
                  </defs>
                  <text data-circle-text="" className="h4" textAnchor="middle" fill="currentColor">
                    <textPath href="#circle-mob" startOffset="25%">Five reasons for Bahía Mar</textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Architecture.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Sección «Architecture» de la home, personalizada para Bahía Mar.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * el home.html del sitio original, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano. Regenerarlo con npm run gen:* DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Sólo cambian textos, src/srcSet/alt y href. Copy: brief y data/villas.ts.
 * Imagen: render exterior de la Villa Cosón, R8_1, recortado a 4:3 anclado a la
 * izquierda para que el voladizo de madera cubra la franja alta y el título
 * blanco no caiga sobre cielo claro (ver inventario/architecture.json).
 */

export function Architecture() {
  return (
    <section className="section clip">
      <div className="container">
        <div data-video-playpause="" className="arch-scroll-area">
          <div className="arch-intro-s b-desk">
            <div className="w_bg">
              <div className="arch-intro-s_bg_l"></div>
              <div className="arch-intro-s_bg_r"><div className="w-embed"></div></div>
              <div className="flower arch-intro-l">
                <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_02.webp" className="video">
                  <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_02.webm" type="video/webm" />
                </video>
              </div>
              <div className="flower arch-intro-r">
                <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_01.webp" className="video">
                  <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_01.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>
          <div className="arch-w theme_on-color">
            <div className="arch-s">
              <div className="arch-s_t">
                <div className="u-48"></div>
                <h2 data-text="h" data-fit-text="" className="h1 a-center">Architecture</h2>
                <div className="u-32"></div>
                <div className="grid">
                  <div className="arch-s_desc"><p data-text="p" className="l1 a-center">Contemporary tropical architecture, made for a life lived outdoors</p></div>
                </div>
              </div>
              <div className="arch-s_b">
                <div className="grid">
                  <div className="arch-s_quote w-clearfix">
                    <div className="red-line"></div>
                    <h3 data-part="p" className="h5">
                      The architecture of Bahía Mar pairs timber, pale stone and chukum with wide overhangs and terraces that open each villa to the landscape
                    </h3>
                    <div className="u-64"></div>
                    <div className="grid _4-columns">
                      <div className="arch-s_author">
                        <div data-part="p" className="l1">By Estudio Dolla</div>
                        <div data-part="p" className="l1 reg">Architects</div>
                      </div>
                    </div>
                    <div className="u-160 b-desk"></div>
                  </div>
                  <div data-part="ctn" className="arch-s_btn b-desk">
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
                <div className="u-96"></div>
              </div>
            </div>
            <div className="w_bg">
              <div data-desk="off" data-parallax="w" className="img-w">
                <img className="img" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2.webp" alt="Villa Cosón at Bahía Mar: a wide timber overhang over the pool terrace, glass fronts opening the living area to the garden and a dark stone wall on the side." sizes="(max-width: 1920px) 100vw, 1920px" data-parallax="img" loading="eager" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-architecture-2.webp 2350w" />
                <div className="img-over-grad bot _100vh"></div>
                <div className="img-over-grad bot _100vh"></div>
              </div>
            </div>
          </div>
          <div className="_100vh b-desk"></div>
          <div className="_100vh b-desk"></div>
          <div className="arch_themes">
            <div data-bg="light" className="arch_themes_light b-desk"></div>
            <div data-bg="color" className="arch_themes_color"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Concept.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * home.html del sitio original, pero al personalizarlo para Bahía Mar pasa
 * a mantenerse a mano (textos, imágenes, alt y el recorrido de lugares en
 * SVG). Regenerarlo con `npm run gen:sections` DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function Concept() {
  return (
    <section data-bg="light" data-slow-scroll="" className="section clip">
      <div className="container loc">
        <div data-video-playpause="" data-scroll-horizontal="" className="loc-scroll-area">
          <div className="loc-scroll-area_screen">
            <div className="loc-scroll-area_track">
              <div data-parallax="w" className="loc-info-w">
                <div data-parallax="img-in" className="loc-info-s">
                  <div className="loc-info-s_t">
                    <div className="u-48"></div>
                    <div className="u-160 b-mob"></div>
                  </div>
                  <div className="loc-info-s_c">
                    <div className="grid">
                      <div className="s_title"><h2 data-part="p" className="l1 a-center">The concept</h2></div>
                    </div>
                    <div className="u-32 b-desk"></div>
                    <div className="u-160 b-mob"></div>
                    <div className="grid">
                      <div className="info-s_lead">
                        <h3 data-part="p" className="h4 a-center">
                          Bahía Mar is a boutique resort community of villas across 349,146 m² of tropical landscape on the Samaná peninsula, designed around privacy, wellbeing and a life lived outdoors
                        </h3>
                      </div>
                    </div>
                    <div className="u-96 b-mob"></div>
                  </div>
                  <div className="loc-info-s_b">
                    <div className="grid">
                      <div className="info-s_desc">
                        <p data-part="p" className="p1 a-center">
                          Shaped by the calm of Samaná Bay, the project combines contemporary tropical architecture with warm natural materials, native planting and spaces that open straight onto the landscape.
                        </p>
                        <div className="u-32"></div>
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
                    </div>
                    <div className="u-48"></div>
                  </div>
                </div>
                <div data-parallax="ctn-down" className="flower loc-info">
                  <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_01.webp" className="video">
                    <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_01.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="loc-intro-w">
                <div className="loc-intro-s">
                  <div className="u-48 b-desk"></div>
                  <div className="u-160 b-mob"></div>
                  <div className="grid _13-columns fill">
                    <div className="loc-intro-s_cap">
                      <h4 data-scroll-reveal="h" className="c1 a-center">Dominican Republic</h4>
                    </div>
                    <div className="loc-intro-s_title">
                      <h3 data-scroll-reveal="h" className="h1">
                        <span className="loc-intro-s_title_line is-1">The</span>
                        <span className="loc-intro-s_title_line is-2 mob_a-right">Samaná</span>
                        <span className="loc-intro-s_title_line">Peninsula</span>
                      </h3>
                    </div>
                    <div className="loc-intro-s_img">
                      <div className="u-32 b-mob"></div>
                      <div data-scroll-reveal="slide" className="img-w">
                        <img loading="eager" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3.webp" alt="Villa terrace with sun loungers beside an infinity pool, palm trees and the Caribbean sea beyond." sizes="(max-width: 2350px) 100vw, 2350px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3.webp 2350w" className="img" />
                      </div>
                    </div>
                    <div className="loc-intro-s_desc">
                      <div className="u-32 b-mob"></div>
                      <h3 data-scroll-reveal="p" className="h5">Between Las Terrenas and Cosón Bay</h3>
                      <div className="u-16"></div>
                      <p data-scroll-reveal="p" className="p1">
                        Surrounded by white-sand beaches, waterfalls, rainforest and the unhurried rhythm of the Samaná peninsula, the project combines privacy with easy reach of everything that makes Caribbean living effortless. A location designed not around movement — but around returning.
                      </p>
                      <div className="u-96 b-mob"></div>
                    </div>
                    <div data-scroll-reveal="ctn" className="loc-intro-s_btn">
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
                  <div className="u-48"></div>
                </div>
                <div className="flower loc-intro">
                  <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_02.webp" className="video">
                    <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_02.webm" type="video/webm" />
                  </video>
                </div>
              </div>
              <div className="loc-path-w">
                <div className="loc-path-s">
                  <div className="loc-path-s_t">
                    <div className="u-48 b-desk"></div>
                    <div className="u-160 b-mob"></div>
                  </div>
                  <div className="loc-path-s_c">
                    <div className="grid">
                      <div className="loc-path-s_title">
                        <h2 className="h3 a-center">
                          <span data-scroll-reveal="h" className="loc-path-s_title_line">The coast you wanted</span>
                          <span data-scroll-reveal="a" className="loc-path-s_title_a a2">yours</span>
                          <span data-scroll-reveal="h" className="loc-path-s_title_line">year after year</span>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="loc-path-s_b">
                    <div className="u-48 b-mob"></div>
                    <div className="grid">
                      <div className="loc-path-s_path scrollbar-none">
                        <div className="loc-path-s_path_c">
                          {/*
                            Recorrido de lugares cercanos. Antes eran dos SVG
                            externos con el texto trazado; ahora va en línea
                            para que herede tipografía y color, y para poder
                            cambiar un nombre sin redibujar nada.
                          */}
                          <svg
                            data-scroll-reveal="ctn"
                            viewBox="0 0 1072 208"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            /*
                              width/height EN LÍNEA y no las clases del original:
                              `.loc-path` es `position:absolute; inset:0`, y el alto
                              del contenedor lo daba el segundo <img> (el de las
                              etiquetas). Al unificar los dos en un solo SVG, ese
                              segundo elemento ya no existe: si este también fuera
                              absoluto, el contenedor mediría 0 y no se vería nada.
                            */
                            style={{ width: "100%", height: "auto", display: "block" }}
                            role="img"
                            aria-label="Places near Bahía Mar and approximate drive times, to be confirmed"
                          >
                            {/* La costa: una línea que ondula de oeste a este. */}
                            <path
                              d="M24 168C96 166 140 150 196 146C252 142 268 156 324 152C380 148 404 132 460 130C516 128 524 142 580 140C636 138 660 120 716 118C772 116 792 130 848 126C904 122 936 106 1048 102"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                            />
                            {/*
                              Los tiempos son una ESTIMACIÓN pendiente de que
                              el cliente la confirme (BRIEF.md): van con «~»
                              delante y con la nota «(TBC)» al pie del mapa,
                              para que nada se lea como dato firme. Al
                              confirmarlos, quitar el «~» y la nota.
                            */}
                            {[
                              { x: 62, y: 167, nombre: 'El Catey Airport', tiempo: '~40 min' },
                              { x: 216, y: 147, nombre: 'Sánchez', tiempo: '~30 min' },
                              { x: 372, y: 150, nombre: 'Playa Cosón', tiempo: '~5 min' },
                              { x: 700, y: 118, nombre: 'Las Terrenas', tiempo: '~15 min' },
                              { x: 856, y: 126, nombre: 'El Limón Waterfall', tiempo: '~30 min' },
                              { x: 1006, y: 104, nombre: 'Samaná', tiempo: '~50 min' },
                            ].map((p) => (
                              <g key={p.nombre}>
                                <circle cx={p.x} cy={p.y} r="3" fill="currentColor" />
                                <text
                                  x={p.x}
                                  y={p.y - 46}
                                  textAnchor="middle"
                                  fill="currentColor"
                                  style={{
                                    fontFamily: 'var(--_fonts---font-body, sans-serif)',
                                    fontSize: '12px',
                                    fontWeight: 700,
                                    letterSpacing: '0.6px',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {p.nombre}
                                </text>
                                <text
                                  x={p.x}
                                  y={p.y - 28}
                                  textAnchor="middle"
                                  fill="currentColor"
                                  style={{
                                    fontFamily: 'var(--_fonts---font-body, sans-serif)',
                                    fontSize: '11px',
                                    letterSpacing: '0.6px',
                                    textTransform: 'uppercase',
                                    opacity: 0.7,
                                  }}
                                >
                                  {p.tiempo}
                                </text>
                              </g>
                            ))}

                            {/*
                              El proyecto, en el centro del recorrido: el isotipo
                              es un NODO de la línea, no un adorno encima. Un halo
                              del color de fondo de la sección interrumpe la costa
                              justo bajo la ola (antes la línea la cruzaba por la
                              mitad), y el rótulo va arriba como en los demás
                              puntos. La línea sigue entera debajo: si cambia el
                              fondo de la sección, el halo lo sigue por el token.
                            */}
                            <circle cx="540" cy="138" r="36" fill="var(--_colors---other--bg)" />
                            <image
                              href="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-isotype.png"
                              x="508"
                              y="115"
                              width="64"
                              height="46"
                              preserveAspectRatio="xMidYMid meet"
                            />
                            <text
                              x="540"
                              y="90"
                              textAnchor="middle"
                              fill="currentColor"
                              style={{
                                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                                fontSize: '12px',
                                fontWeight: 700,
                                letterSpacing: '1.2px',
                                textTransform: 'uppercase',
                              }}
                            >
                              Bahía Mar
                            </text>

                            {/*
                              Nota visible de que los tiempos son aproximados y
                              están por confirmar. Va centrada bajo el proyecto
                              porque en móvil el mapa se desplaza a su centro
                              (lib/animations/misc.ts) y es la zona que se ve.
                            */}
                            <text
                              x="540"
                              y="184"
                              textAnchor="middle"
                              fill="currentColor"
                              style={{
                                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                                fontSize: '10px',
                                letterSpacing: '0.8px',
                                textTransform: 'uppercase',
                                opacity: 0.7,
                              }}
                            >
                              Approximate drive times (TBC)
                            </text>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="u-48"></div>
                  </div>
                </div>
                <div className="loc-path-w_flower">
                  <div className="flower loc-path">
                    <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_03.webp" className="video">
                      <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_03.webm" type="video/webm" />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slow-scroll="" className="slow-scroll-trigger"></div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Developer.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
 *
 * Tarjeta «Developer»: el brochure (p.52) sólo dice «es un proyecto gestionado
 * por Landmass Capital» + LandmassCapital.com. No añadir dirección postal ni
 * descripción de la firma sin fuente documentada (QA ronda 1, CONTENT-TRUTH-05).
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
                <p data-scroll-reveal="p" className="l1 a-center">The people behind Bahía Mar</p>
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
                                Bahía Mar Residences &amp; Beach Resort is a project managed by Landmass Capital.
                                <br />
                                LandmassCapital.com
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
                                <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-developer-1.webp" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-developer-1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-developer-1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-developer-1-p-1080.webp 1080w" sizes="(max-width: 991px) 144px, 192px" loading="eager" alt="Villa Helecho at Bahía Mar: a stone and timber villa under a deep roof overhang, facing the sea." className="logo b" />
                              </div>
                              <div className="u-32"></div>
                              <p data-accordion-card="p" className="p1 a-center">
                                Estudio Dolla
                                <br />
                                Estudio Dolla designed the master plan and the five villa typologies, from the two-level Villa Cosón to the single-level Villa Ámbar, each with its own private pool and terraces.
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
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_01.webp" className="video">
              <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_01.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Hero.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
 *  - Las imágenes (bahiamar-hero-<villa>.webp en public, 1920×1728)
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


/** Ancho completo + variantes de los heros del slider (1920 de ancho). */
function heroSrcset(slug: string): string {
  const base = `https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-hero-${slug}`;
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
                  {/*
                    ERA ponía aquí tres pines (hotspots) sobre la foto del
                    conjunto, que abrían los tips flotantes. Con cinco villas
                    rotando de fondo no hay dónde anclarlos y el cliente pidió
                    quitarlos (12-09-2026). FloatingTips.tsx sigue montado por
                    si vuelven, sin disparadores.
                  */}
                  <div data-hero-slider="" className="hero-w_bg_master_img_day">
                    {villas.map((villa, i) => (
                      <div key={villa.slug} data-hero-slide={villa.slug} className="img-w h-auto">
                        <img
                          loading={i === 0 ? 'eager' : 'lazy'}
                          src={`https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-hero-${villa.slug}.webp`}
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

/* ============================================================
   components/home/Location.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Ubicación: Las Terrenas, Samaná. Tras las tres capas de nubes, el fondo a
 * sangre es el vídeo aéreo de la finca (sobrevuelo de las lomas con el
 * perímetro del master plan dibujado), con la aérea fija como póster.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * home.html de ERA Residence, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano. Regenerarlo desharía este trabajo (volvería el master
 * plan de Estepona como <img>).
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * El <video> hereda las clases del <img> al que sustituye; lo que el <img>
 * recibía por etiqueta (object-fit) se lo da styles/theme.css.
 *
 * Vídeo: sobrevuelo de la finca con el lote del master plan dibujándose,
 * enviado por el cliente en 2560×1440 (sustituye al de WhatsApp de 832×464);
 * servido a 1920×1080 / 30 fps en webm y mp4. Póster: su último fotograma,
 * con el lote ya dibujado, para que no haya salto de escena al arrancar.
 */

export function Location() {
  return (
    <section data-bg="color" className="section clip theme_on-color">
      <div className="container">
        <div data-parallax="w" className="loc-w">
          <div className="loc-w_over-grad"></div>
          <div className="loc-w_over-grad"></div>
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif" loading="eager" sizes="(max-width: 2146px) 100vw, 2146px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33-p-500.avif 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif 2146w" alt="" className="clouds is-33" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif" loading="eager" sizes="(max-width: 2146px) 100vw, 2146px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33-p-500.avif 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif 2146w" alt="" className="clouds is-33" />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif" loading="eager" sizes="(max-width: 2146px) 100vw, 2146px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33-p-500.avif 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif 2146w" alt="" className="clouds is-33" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif" loading="eager" sizes="(max-width: 2146px) 100vw, 2146px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33-p-500.avif 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_33.avif 2146w" alt="" className="clouds is-33" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_47.avif" loading="eager" alt="" className="clouds is-47" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_47.avif" loading="eager" alt="" className="clouds is-47" />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_47.avif" loading="eager" alt="" className="clouds is-47" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_47.avif" loading="eager" alt="" className="clouds is-47" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-w_clouds">
            <div data-marquee-css="" className="marquee">
              <div data-marquee-css="track" className="marquee_track">
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_02.avif" loading="eager" alt="" className="clouds is-02" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_02.avif" loading="eager" alt="" className="clouds is-02" />
                  </div>
                </div>
                <div data-marquee-css="list" className="marquee_list">
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_02.avif" loading="eager" alt="" className="clouds is-02" />
                  </div>
                  <div className="marquee_list_item">
                    <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/img_clouds_02.avif" loading="eager" alt="" className="clouds is-02" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loc-s">
            <div className="grid">
              <div className="loc-s_desc">
                <div className="b-desk">
                  <div className="loc-s_desc_line"><div data-scroll-reveal="line" className="line-v"></div></div>
                  <h3 data-scroll-reveal="p" className="l1">Las Terrenas, Samaná</h3>
                  <div className="u-32"></div>
                  <h4 data-scroll-reveal="p" className="p1">Samaná Peninsula</h4>
                  <div className="u-32"></div>
                  <h5 data-scroll-reveal="p" className="p1">Dominican Republic</h5>
                </div>
                <div className="b-mob">
                  <div className="l1-list">
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="l1">Drag to see more</div>
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48"></div>
            <div className="loc-w_decor theme_on-brand"><div className="w-embed"></div></div>
          </div>
          <div data-parallax="img" className="loc-w_bg">
            <div className="loc-w_bg_img">
              <div className="pins-cms w-dyn-list"><div className="cms_empty-none w-dyn-empty"></div></div>
              <div className="img-w h-auto">
                <video muted playsInline loop autoPlay disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-aerial-poster.webp" aria-label="Aerial flyover of the Bahía Mar hills above Las Terrenas, with the master plan outlined over the terrain." className="img h-auto">
                  <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/bahiamar-aerial.webm" type="video/webm" />
                  <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/bahiamar-aerial.mp4" type="video/mp4" />
                </video>
                <div className="img-over-grad from-bot bot _100vh"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/Pillars.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * marcado del sitio original, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano (textos, imágenes y alt). Regenerarlo con
 * `npm run gen:sections` DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 *
 * ERA tenía aquí tres razones («Real-Life Location», «Built to stay»,
 * «Boutique concept»); el cliente pide CINCO, una por villa. Las
 * diapositivas salen de data/villas.ts: nombre, tagline + primera frase
 * de la descripción, y una línea con tipo, niveles, dormitorios y
 * unidades. Imágenes: bahiamar-pillar-<villa>.webp (4:3, del mismo
 * render frontal que el hero). El slider (lib/animations/slider.ts)
 * cuenta las diapositivas solo, así que la paginación pasa a 1/5.
 */


/** Primera frase de un párrafo, para el pie de cada villa. */
function firstSentence(text: string): string {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}

/** «Type A · Two levels · 4 bedrooms · 77 units». */
function caption(villa: Villa): string {
  return [
    `Type ${villa.type}`,
    villa.category,
    `${villa.bedrooms} bedrooms`,
    villa.units ? `${villa.units} units` : null,
  ].filter(Boolean).join(' · ');
}

export function Pillars() {
  return (
    <section data-bg="light" data-snap="" className="section z-2 theme_on-brand">
      <div className="container">
        <div className="benefits-w">
          <div className="benefits-s">
            <div className="grid fill">
              <div data-slider="" className="benefits-s_cms">
                <div className="benefits-s_cms_pag">
                  <div className="u-48"></div>
                  <div className="u-16"></div>
                  <div className="benefit-slide_img"></div>
                  <div className="u-16"></div>
                  <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                    <div data-slider="prev" className="pag_prev">
                      <div className="ico-16">
                        <div className="ico w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="pag_prev_label"><div data-slider="current" className="l1">00</div></div>
                    </div>
                    <div className="pag_progress">
                      <div data-slider="progress" className="pag_progress_fill"></div>
                    </div>
                    <div data-slider="next" className="pag_next">
                      <div className="pag_prev_label"><div data-slider="next-num" className="l1">00</div></div>
                      <div className="ico-16">
                        <div className="ico w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="benefits-cms w-dyn-list">
                  <div role="list" className="benefits-cms_list w-dyn-items">
                    {villas.map((villa) => (
                      <div key={villa.slug} data-reveal-first="" data-slider="slide" role="listitem" className="benefits-cms_list_item w-dyn-item">
                        <div className="benefit-slide">
                          <div className="benefit-slide_t">
                            <div className="u-48 b-desk"></div>
                            <div className="u-272 b-mob"></div>
                            <h3 data-scroll-reveal="h" data-slider="h" className="h1 a-center b-desk">{villa.name}</h3>
                            <div data-scroll-reveal="h" data-slider="h" className="h2 a-center b-mob">{villa.name}</div>
                            <div className="u-48"></div>
                          </div>
                          <div className="benefit-slide_c">
                            <div className="u-16"></div>
                            <div className="benefit-slide_img">
                              <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                                <img
                                  src={`https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-pillar-${villa.slug}.webp`}
                                  loading="eager"
                                  alt={`${villa.name}: front view of the villa with its private pool and the palm trees behind`}
                                  sizes="(max-width: 2350px) 100vw, 2350px"
                                  srcSet={srcset(`https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-pillar-${villa.slug}.webp`)}
                                  className="img"
                                />
                              </div>
                            </div>
                            <div className="u-16"></div>
                          </div>
                          <div className="benefit-slide_b">
                            <div className="u-48"></div>
                            <div className="grid _8-columns">
                              <div className="benefit-slide_desc">
                                <p data-scroll-reveal="p" data-slider="p" className="p1 a-center">
                                  {villa.tagline} {firstSentence(villa.description[0])}
                                </p>
                              </div>
                            </div>
                            <div className="u-48"></div>
                            <div className="grid _8-columns">
                              <div className="benefit-slide_cap">
                                <p data-scroll-reveal="p" data-slider="p" className="l1 a-center">{caption(villa)}</p>
                              </div>
                            </div>
                            <div className="u-48"></div>
                          </div>
                        </div>
                      </div>
                    ))}
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
   components/home/PillarsMedia.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * marcado del sitio original, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano (textos, imágenes y alt). Regenerarlo con
 * `npm run gen:sections` DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function PillarsMedia() {
  return (
    <section className="section z-2 theme_on-brand">
      <div className="container">
        <div className="quote-w">
          <div className="quote-s b-desk theme_on-color">
            <div className="grid">
              <div className="quote-s_c w-clearfix">
                <div className="grid _4-columns">
                  <div className="quote-s_ico">
                    <div data-scroll-reveal="ctn" className="ico-48">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.232 30.912C23.232 34.752 20.544 38.208 16.32 38.208C11.328 38.208 5.76 33.984 5.76 22.272C5.76 14.016 9.408 6.14399 19.392 6.14399C19.968 6.14399 23.616 6.336 23.616 7.488C23.616 7.87199 23.424 8.63999 22.656 8.63999C21.888 8.63999 20.928 8.256 19.008 8.256C11.904 8.256 8.64 14.4 8.64 20.928C8.64 23.808 9.984 25.536 12.096 25.536C14.016 25.536 14.592 23.808 17.472 23.808C20.736 23.808 23.232 26.88 23.232 30.912ZM43.2 30.912C43.2 34.752 40.512 38.208 36.096 38.208C31.296 38.208 25.536 33.984 25.536 22.272C25.536 14.016 29.376 6.14399 39.36 6.14399C39.936 6.14399 43.584 6.336 43.584 7.488C43.584 7.87199 43.392 8.63999 42.624 8.63999C41.664 8.63999 40.704 8.256 38.976 8.256C31.68 8.256 28.608 14.4 28.608 20.928C28.608 23.808 29.952 25.536 32.064 25.536C33.984 25.536 34.56 23.808 37.248 23.808C40.704 23.808 43.2 26.88 43.2 30.912Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="u-32"></div>
                  </div>
                </div>
                <div className="red-line"></div>
                <h4 data-scroll-reveal="p" data-tab="p" className="h5">
                  Walking trails, mountain bridges and the first funicular in the Caribbean link the villas — so Bahía Mar feels less like a complex and more like a landscape you move through.
                </h4>
                <div className="u-64"></div>
                <div className="grid _4-columns">
                  <div className="quote-s_author">
                    <div data-scroll-reveal="p" className="l1">Master plan</div>
                    <div data-scroll-reveal="p" className="l1 reg">Bahía Mar Residences &amp; Beach Resort</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48"></div>
          </div>
          <div data-parallax="w" className="quote-w_bg">
            <div className="img-w h-auto quote-w_bg_img">
              <div className="img-over-grad from-bot bot _4x b-desk"></div>
              <div className="img-over-grad from-bot bot _4x b-desk"></div>
              <img className="img h-auto quote-w_bg_img" src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1.webp" alt="Two-level Villa Cosón with timber cladding over a stone base, its private pool and terrace among the palms, the sea behind." sizes="(max-width: 2350px) 100vw, 2350px" data-parallax="img-out" loading="eager" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-quote-1.webp 2350w" />
            </div>
          </div>
          <div className="w_themes">
            <div className="w_themes_row fill">
              <div data-bg="color" className="quote-w_themes_color-1"></div>
              <div data-bg="light" className="quote-w_themes_light-1"></div>
            </div>
            <div className="w_themes_row">
              <div data-bg="color" className="quote-w_themes_color-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/SpaceToLive.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Sección «The space to live in» de la home: interiores y terrazas de
 * las villas de Bahía Mar.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre el
 * home.html del sitio original, pero al personalizarlo para Bahía Mar pasa
 * a mantenerse a mano. Regenerarlo DESHARÍA este trabajo y devolvería los
 * textos e imágenes del sitio clonado.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Textos: traducidos del brochure (bahia-mar-personalizacion/BRIEF.md).
 * Imágenes: renders interiores, inventario en
 * bahia-mar-personalizacion/inventario/space.json.
 */

export function SpaceToLive() {
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="interior-w">
          <div className="interior-s">
            <div className="u-272"></div>
            <div className="grid">
              <div className="interior-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  The
                  <br />
                  space
                  <br />
                  to
                </h2>
                <div className="interior-s_title_a">
                  <h3 data-scroll-reveal="a" className="a1 a-center">Live in</h3>
                </div>
              </div>
            </div>
            <div className="interior-s_imgs">
              <div data-mob="off" data-parallax="ctn-down" className="interior-s_l">
                <div className="u-272"></div>
                <div className="grid _5-columns">
                  <div data-video-playpause="" className="interior-s_l_img-w">
                    <div className="interior-s_l_img">
                      <div data-scroll-reveal="slide" className="img-w">
                        <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1.webp" loading="eager" sizes="(max-width: 1920px) 100vw, 1920px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-1.webp 2350w" alt="Covered porch under a timber pergola with a private jacuzzi, woven lounge seating and tropical planting." className="img" />
                      </div>
                    </div>
                    <div data-parallax="ctn-up" className="flower interior">
                      <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/palm-fronds_03.webp" className="video">
                        <source src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/videos/palm-fronds_03.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                  <div className="interior-s_l_desc">
                    <div className="u-16"></div>
                    <h4 data-scroll-reveal="p" className="l1">
                      Every villa opens outdoors:
                      <br />
                      • Private pool and jacuzzi
                      <br />
                      • Terrace with BBQ and lounge garden
                      <br />
                      • Porch under a pergola
                    </h4>
                    <div className="u-160 b-mob"></div>
                  </div>
                </div>
              </div>
              <div data-mob="off" data-parallax="ctn-up" className="interior-s_r">
                <div className="grid _5-columns">
                  <div className="interior-s_r_img">
                    <div data-scroll-reveal="slide" className="img-w">
                      <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2.webp" loading="eager" sizes="(max-width: 1920px) 100vw, 1920px" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-2.webp 2350w" alt="Open-plan living area with sliding glass walls onto the hills, woven pendant lamps and a linen sofa." className="img" />
                    </div>
                  </div>
                  <div className="interior-s_r_lead w-clearfix">
                    <div className="u-16"></div>
                    <div className="red-line"></div>
                    <h4 data-scroll-reveal="p" className="h5">
                      Every material was chosen so the house breathes with the landscape: bamboo underfoot, chukum on the walls, the bay in every opening
                    </h4>
                  </div>
                  <div className="interior-s_r_desc">
                    <div className="u-64"></div>
                    <p data-scroll-reveal="p" className="p1">
                      Bamboo floors throughout. Chukum wall finishes. Home automation. Kitchens with eco-efficient appliances and glass-ceramic hobs. Solar panels. Views of the beach, Samaná Bay and Los Haitises from every villa.
                    </p>
                    <div className="u-96"></div>
                  </div>
                  <div data-scroll-reveal="ctn" className="interior-s_r_btn">
                    <div hover-btn-circle="" data-magnetic-btn="" hover-nav-item-trigger="" className="btn-circle">
                      <div data-magnetic-inner="" className="btn-circle_label">
                        <a hover-nav-item="" aria-label="Explore the villas" href="/villas" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Explore the villas</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Explore the villas</div>
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
                      <a aria-label="Explore the villas" href="/villas" className="btn-circle_link w-inline-block"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-272"></div>
            <div className="grid">
              <div data-slider="" className="interior-s_gallery-cms">
                <div className="gallery-cms w-dyn-list">
                  <div role="list" className="gallery-cms_list w-dyn-items">
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3.webp" loading="eager" alt="Kitchen and dining room in pale timber and stone, open to the terrace and the private pool." sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-3.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4.webp" loading="eager" alt="Principal bedroom with a glass wall sliding open onto a terrace that faces the sea." sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-4.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5.webp" loading="eager" alt="Bathroom with chukum-finished walls, a timber vanity and a walk-in shower beside a window onto the palms." sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-5.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6.webp" loading="eager" alt="Living and dining area with bamboo floors, timber joinery and full-height openings onto the palms and the pool." sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/bahiamar-space-6.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-16"></div>
                <div className="interior-s_gallery-cms_pag">
                  <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                    <div data-slider="prev" className="pag_prev">
                      <div className="ico-16">
                        <div className="ico w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="pag_prev_label"><div data-slider="current" className="l1">00</div></div>
                    </div>
                    <div className="pag_progress">
                      <div data-slider="progress" className="pag_progress_fill"></div>
                    </div>
                    <div data-slider="next" className="pag_next">
                      <div className="pag_prev_label"><div data-slider="next-num" className="l1">00</div></div>
                      <div className="ico-16">
                        <div className="ico w-embed">
                          <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-96"></div>
          </div>
          <div className="interior_themes">
            <div data-bg="light" className="interior_themes_light-1"></div>
            <div className="themes_row">
              <div data-bg="dark" className="interior_themes_dark-2"></div>
              <div data-bg="light" className="interior_themes_light-2"></div>
            </div>
            <div data-bg="light" className="interior_themes_light-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   components/home/VillasPreview.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Slider de tipologías de la home: «Two levels» (Cosón, Helecho, Carolina),
 * «Single level» (Remanso, Ámbar) y «All five villas». Los textos salen de
 * data/villas.ts y del brief; las cifras de habitaciones/baños son el rango
 * de cada grupo.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * el home.html del sitio original, pero al personalizarlo para Bahía Mar pasa a
 * mantenerse a mano. Regenerarlo con npm run gen:* DESHARÍA este trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function VillasPreview() {
  return (
    <section data-bg="light" data-snap="" className="section theme_on-brand">
      <div className="container">
        <div className="apart-type-w">
          <div className="apart-type-s">
            <div className="u-48 b-desk"></div>
            <div className="u-96 b-mob"></div>
            <div className="grid fill">
              <div data-slider="" className="apart-type-s_cms">
                <div className="apart-type-cms w-dyn-list">
                  <div role="list" className="apart-type-cms_list w-dyn-items">
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="apart-type-cms_list_item w-dyn-item">
                      <div className="apart-type-slide">
                        <div className="apart-type-slide_t b-desk"></div>
                        <div className="apart-type-slide_c">
                          <div className="grid _8-columns">
                            <div className="apart-type-slide_data">
                              <div className="data-list">
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bedrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">3 — 4</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bathrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">3 — 4</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                Villa Cosón, Helecho and Carolina: living areas, pool and terraces on the first level; the principal suite and its upper terraces on the second, following the slope of the land.
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label="Explore two-level villas" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="/villas?type=two-levels" className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text">
                                      <div hover="text" className="l1">Explore two-level villas</div>
                                    </div>
                                    <div className="btn_label_text is-2">
                                      <div hover="text" className="l1">Explore two-level villas</div>
                                    </div>
                                  </div>
                                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                                </a>
                              </div>
                              <div className="u-16 b-mob"></div>
                            </div>
                          </div>
                        </div>
                        <div className="apart-type-slide_b">
                          <div className="u-48 b-desk"></div>
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">Two levels</h3>
                          <div className="u-32 b-mob"></div>
                        </div>
                        <div className="apart-type-slide_img-w">
                          <div className="apart-type-slide_img">
                            <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                              <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero.webp" loading="eager" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero.webp 2350w" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="apart-type-cms_list_item w-dyn-item">
                      <div className="apart-type-slide">
                        <div className="apart-type-slide_t b-desk"></div>
                        <div className="apart-type-slide_c">
                          <div className="grid _8-columns">
                            <div className="apart-type-slide_data">
                              <div className="data-list">
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bedrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bathrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                Villa Remanso and Ámbar: kitchen, living areas and bedrooms on one floor, opening straight onto the pool terrace, solarium and fire pit.
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label="Explore single-level villas" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="/villas?type=single-level" className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text"><div hover="text" className="l1">Explore single-level villas</div></div>
                                    <div className="btn_label_text is-2"><div hover="text" className="l1">Explore single-level villas</div></div>
                                  </div>
                                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                                </a>
                              </div>
                              <div className="u-16 b-mob"></div>
                            </div>
                          </div>
                        </div>
                        <div className="apart-type-slide_b">
                          <div className="u-48 b-desk"></div>
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">Single level</h3>
                          <div className="u-32 b-mob"></div>
                        </div>
                        <div className="apart-type-slide_img-w">
                          <div className="apart-type-slide_img">
                            <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                              <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero.webp" loading="eager" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero.webp 2350w" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="apart-type-cms_list_item w-dyn-item">
                      <div className="apart-type-slide">
                        <div className="apart-type-slide_t b-desk"></div>
                        <div className="apart-type-slide_c">
                          <div className="grid _8-columns">
                            <div className="apart-type-slide_data">
                              <div className="data-list">
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bedrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2 — 4</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">Bathrooms</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2 — 4</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                Five typologies on one or two levels, each with private pool, jacuzzi, solarium, fire pit and BBQ area — and views over the beach, Samaná Bay and Los Haitises.
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label="Explore all villas" hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="/villas" className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text"><div hover="text" className="l1">Explore all villas</div></div>
                                    <div className="btn_label_text is-2"><div hover="text" className="l1">Explore all villas</div></div>
                                  </div>
                                  <div className="btn_bg"><div hover="bg" className="btn_bg_fill"></div></div>
                                </a>
                              </div>
                              <div className="u-16 b-mob"></div>
                            </div>
                          </div>
                        </div>
                        <div className="apart-type-slide_b">
                          <div className="u-48 b-desk"></div>
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">All five villas</h3>
                          <div className="u-32 b-mob"></div>
                        </div>
                        <div className="apart-type-slide_img-w">
                          <div className="apart-type-slide_img">
                            <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                              <img src="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero.webp" loading="eager" alt="" sizes="100vw" srcSet="https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero.webp 2350w" className="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-16"></div>
                <div data-scroll-reveal="ctn" data-slider="pag" className="pag">
                  <div data-slider="prev" className="pag_prev">
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.4717 12.4717C10.2113 12.7321 9.78866 12.7321 9.52831 12.4717L5.52831 8.47173C5.26796 8.21138 5.26796 7.78872 5.52831 7.52837L9.52831 3.52837C9.78866 3.26802 10.2113 3.26802 10.4717 3.52837C10.732 3.78872 10.732 4.21138 10.4717 4.47173L6.94335 8.00005L10.4717 11.5284C10.732 11.7887 10.732 12.2114 10.4717 12.4717Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="pag_prev_label"><div data-slider="current" className="l1">00</div></div>
                  </div>
                  <div className="pag_progress">
                    <div data-slider="progress" className="pag_progress_fill"></div>
                  </div>
                  <div data-slider="next" className="pag_next">
                    <div className="pag_prev_label"><div data-slider="next-num" className="l1">00</div></div>
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.52833 3.52827C5.78868 3.26792 6.21134 3.26792 6.47169 3.52827L10.4717 7.52827C10.732 7.78862 10.732 8.21128 10.4717 8.47163L6.47169 12.4716C6.21134 12.732 5.78868 12.732 5.52833 12.4716C5.26798 12.2113 5.26798 11.7886 5.52833 11.5283L9.05665 7.99995L5.52833 4.47163C5.26798 4.21128 5.26798 3.78862 5.52833 3.52827Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="u-48"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
