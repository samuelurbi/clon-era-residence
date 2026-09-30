/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';
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

import { localize, type Lang } from '@/lib/i18n';
import { useLang } from '@/lib/use-lang';

const T = {
  en: {
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    twoDesc:
      'Villa Horizonte, Esencia and Remanso: living areas, pool and terraces on the first level; the principal suite and its upper terraces on the second, following the slope of the land.',
    twoBtn: 'Explore two-level villas',
    twoTitle: 'Two levels',
    singleDesc:
      'Villa Armonía and Ámbar: kitchen, living areas and bedrooms on one floor, opening straight onto the pool terrace, solarium and fire pit.',
    singleBtn: 'Explore single-level villas',
    singleTitle: 'Single level',
    allDesc:
      'Five typologies on one or two levels, each with private pool, jacuzzi, solarium, fire pit and BBQ area — and views over the beach, Samaná Bay and Los Haitises.',
    allBtn: 'Explore all villas',
    allTitle: 'All five villas',
  },
  es: {
    bedrooms: 'Habitaciones',
    bathrooms: 'Baños',
    twoDesc:
      'Villa Horizonte, Esencia y Remanso: salones, piscina y terrazas en el primer nivel; la suite principal y sus terrazas altas en el segundo, siguiendo la pendiente del terreno.',
    twoBtn: 'Descubrir las villas de dos niveles',
    twoTitle: 'Dos niveles',
    singleDesc:
      'Villa Armonía y Ámbar: cocina, salones y habitaciones en una sola planta, abiertos directamente a la terraza de la piscina, el solárium y el fogatero.',
    singleBtn: 'Descubrir las villas de un nivel',
    singleTitle: 'Un nivel',
    allDesc:
      'Cinco tipologías de uno o dos niveles, todas con piscina privada, jacuzzi, solárium, fogatero y zona de BBQ, y vistas a la playa, la bahía de Samaná y Los Haitises.',
    allBtn: 'Descubrir todas las villas',
    allTitle: 'Las cinco villas',
  },
} satisfies Record<Lang, Record<string, string>>;

export function VillasPreview() {
  const lang = useLang();
  const t = T[lang];
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
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bedrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">3 — 4</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bathrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">3 — 4</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                {t.twoDesc}
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label={t.twoBtn} hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href="https://landmass.urbatrix.com/login" target="_blank" rel="noopener noreferrer" className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text">
                                      <div hover="text" className="l1">{t.twoBtn}</div>
                                    </div>
                                    <div className="btn_label_text is-2">
                                      <div hover="text" className="l1">{t.twoBtn}</div>
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
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">{t.twoTitle}</h3>
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
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bedrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bathrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                {t.singleDesc}
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label={t.singleBtn} hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href={localize('/villas?type=single-level', lang)} className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text"><div hover="text" className="l1">{t.singleBtn}</div></div>
                                    <div className="btn_label_text is-2"><div hover="text" className="l1">{t.singleBtn}</div></div>
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
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">{t.singleTitle}</h3>
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
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bedrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2 — 4</h5>
                                </div>
                                <div className="data-item">
                                  <h4 data-scroll-reveal="p" data-slider="p" className="l1 reg">{t.bathrooms}</h4>
                                  <div className="u-8"></div>
                                  <h5 data-scroll-reveal="p" data-slider="p" className="h5">2 — 4</h5>
                                </div>
                              </div>
                              <div className="u-48 b-mob"></div>
                            </div>
                            <div className="apart-type-slide_desc">
                              <p data-scroll-reveal="p" data-slider="p" className="p1 mob_a-center">
                                {t.allDesc}
                              </p>
                              <div className="u-24"></div>
                              <div data-scroll-reveal="ctn" data-slider="ctn" className="apart-type-slide_btn">
                                <a aria-label={t.allBtn} hover-btn="" hover-nav-item="" data-wf--btn--variant="sec" href={localize('/villas', lang)} className="btn w-inline-block">
                                  <div className="btn_label">
                                    <div className="btn_label_text"><div hover="text" className="l1">{t.allBtn}</div></div>
                                    <div className="btn_label_text is-2"><div hover="text" className="l1">{t.allBtn}</div></div>
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
                          <h3 data-scroll-reveal="h" data-slider="h" className="h2 a-center">{t.allTitle}</h3>
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
