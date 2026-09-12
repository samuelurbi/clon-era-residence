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

import { villas, srcset, type Villa } from '@/data/villas';

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
