'use client';
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

import { type Lang } from '@/lib/i18n';
import { useLang } from '@/lib/use-lang';

const T = {
  en: {
    title1: 'The',
    title2: 'space',
    title3: 'to',
    titleA: 'Live in',
    alt1: 'Covered porch under a timber pergola with a private jacuzzi, woven lounge seating and tropical planting.',
    listIntro: 'Every villa opens outdoors:',
    list1: '• Private pool and jacuzzi',
    list2: '• Terrace with BBQ and lounge garden',
    list3: '• Porch under a pergola',
    alt2: 'Open-plan living area with sliding glass walls onto the hills, woven pendant lamps and a linen sofa.',
    lead: 'Every material was chosen so the house breathes with the landscape: bamboo underfoot, chukum on the walls, the bay in every opening',
    desc: 'Bamboo floors throughout. Chukum wall finishes. Home automation. Kitchens with eco-efficient appliances and glass-ceramic hobs. Solar panels. Views of the beach, Samaná Bay and Los Haitises from every villa.',
    cta: 'Explore the villas',
    alt3: 'Kitchen and dining room in pale timber and stone, open to the terrace and the private pool.',
    alt4: 'Principal bedroom with a glass wall sliding open onto a terrace that faces the sea.',
    alt5: 'Bathroom with chukum-finished walls, a timber vanity and a walk-in shower beside a window onto the palms.',
    alt6: 'Living and dining area with bamboo floors, timber joinery and full-height openings onto the palms and the pool.',
  },
  es: {
    title1: 'El',
    title2: 'espacio',
    title3: 'para',
    titleA: 'Vivir',
    alt1: 'Porche cubierto bajo una pérgola de madera, con jacuzzi privado, asientos tejidos y vegetación tropical.',
    listIntro: 'Cada villa se abre al exterior:',
    list1: '• Piscina privada y jacuzzi',
    list2: '• Terraza con BBQ y jardín de estar',
    list3: '• Porche bajo una pérgola',
    alt2: 'Salón de planta abierta con paredes de vidrio correderas hacia las colinas, lámparas colgantes tejidas y un sofá de lino.',
    lead: 'Cada material se eligió para que la casa respire con el paisaje: bambú bajo los pies, chukum en los muros y la bahía en cada ventana',
    desc: 'Pisos de bambú en toda la casa. Muros acabados en chukum. Domótica. Cocinas con electrodomésticos eficientes y vitrocerámica. Paneles solares. Vistas a la playa, la bahía de Samaná y Los Haitises desde cada villa.',
    cta: 'Descubrir las villas',
    alt3: 'Cocina y comedor en madera clara y piedra, abiertos a la terraza y a la piscina privada.',
    alt4: 'Habitación principal con una pared de vidrio que se desliza hacia una terraza frente al mar.',
    alt5: 'Baño con muros acabados en chukum, mueble de madera y ducha abierta junto a una ventana hacia las palmeras.',
    alt6: 'Salón comedor con pisos de bambú, carpintería de madera y vanos de piso a techo hacia las palmeras y la piscina.',
  },
} satisfies Record<Lang, Record<string, string>>;

export function SpaceToLive() {
  const lang = useLang();
  const t = T[lang];
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="interior-w">
          <div className="interior-s">
            <div className="u-272"></div>
            <div className="grid">
              <div className="interior-s_title">
                <h2 data-scroll-reveal="h" className="h1 a-center">
                  {t.title1}
                  <br />
                  {t.title2}
                  <br />
                  {t.title3}
                </h2>
                <div className="interior-s_title_a">
                  <h3 data-scroll-reveal="a" className="a1 a-center">{t.titleA}</h3>
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
                        <img src="/images/bahiamar-space-1.webp" loading="eager" sizes="(max-width: 1920px) 100vw, 1920px" srcSet="/images/bahiamar-space-1-p-500.webp 500w, /images/bahiamar-space-1-p-800.webp 800w, /images/bahiamar-space-1-p-1080.webp 1080w, /images/bahiamar-space-1-p-1600.webp 1600w, /images/bahiamar-space-1-p-2000.webp 2000w, /images/bahiamar-space-1.webp 2350w" alt={t.alt1} className="img" />
                      </div>
                    </div>
                    <div data-parallax="ctn-up" className="flower interior">
                      <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/palm-fronds_03.webp" className="video">
                        <source src="/videos/palm-fronds_03.webm" type="video/webm" />
                      </video>
                    </div>
                  </div>
                  <div className="interior-s_l_desc">
                    <div className="u-16"></div>
                    <h4 data-scroll-reveal="p" className="l1">
                      {t.listIntro}
                      <br />
                      {t.list1}
                      <br />
                      {t.list2}
                      <br />
                      {t.list3}
                    </h4>
                    <div className="u-160 b-mob"></div>
                  </div>
                </div>
              </div>
              <div data-mob="off" data-parallax="ctn-up" className="interior-s_r">
                <div className="grid _5-columns">
                  <div className="interior-s_r_img">
                    <div data-scroll-reveal="slide" className="img-w">
                      <img src="/images/bahiamar-space-2.webp" loading="eager" sizes="(max-width: 1920px) 100vw, 1920px" srcSet="/images/bahiamar-space-2-p-500.webp 500w, /images/bahiamar-space-2-p-800.webp 800w, /images/bahiamar-space-2-p-1080.webp 1080w, /images/bahiamar-space-2-p-1600.webp 1600w, /images/bahiamar-space-2-p-2000.webp 2000w, /images/bahiamar-space-2.webp 2350w" alt={t.alt2} className="img" />
                    </div>
                  </div>
                  <div className="interior-s_r_lead w-clearfix">
                    <div className="u-16"></div>
                    <div className="red-line"></div>
                    <h4 data-scroll-reveal="p" className="h5">
                      {t.lead}
                    </h4>
                  </div>
                  <div className="interior-s_r_desc">
                    <div className="u-64"></div>
                    <p data-scroll-reveal="p" className="p1">
                      {t.desc}
                    </p>
                    <div className="u-96"></div>
                  </div>
                  <div data-scroll-reveal="ctn" className="interior-s_r_btn">
                    <div hover-btn-circle="" data-magnetic-btn="" hover-nav-item-trigger="" className="btn-circle">
                      <div data-magnetic-inner="" className="btn-circle_label">
                        <a hover-nav-item="" aria-label={t.cta} href="https://landmass.urbatrix.com/login" target="_blank" rel="noopener noreferrer" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">{t.cta}</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">{t.cta}</div>
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
                      <a aria-label={t.cta} href="https://landmass.urbatrix.com/login" target="_blank" rel="noopener noreferrer" className="btn-circle_link w-inline-block"></a>
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
                          <img src="/images/bahiamar-space-3.webp" loading="eager" alt={t.alt3} sizes="100vw" srcSet="/images/bahiamar-space-3-p-500.webp 500w, /images/bahiamar-space-3-p-800.webp 800w, /images/bahiamar-space-3-p-1080.webp 1080w, /images/bahiamar-space-3-p-1600.webp 1600w, /images/bahiamar-space-3-p-2000.webp 2000w, /images/bahiamar-space-3.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="/images/bahiamar-space-4.webp" loading="eager" alt={t.alt4} sizes="100vw" srcSet="/images/bahiamar-space-4-p-500.webp 500w, /images/bahiamar-space-4-p-800.webp 800w, /images/bahiamar-space-4-p-1080.webp 1080w, /images/bahiamar-space-4-p-1600.webp 1600w, /images/bahiamar-space-4-p-2000.webp 2000w, /images/bahiamar-space-4.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="/images/bahiamar-space-5.webp" loading="eager" alt={t.alt5} sizes="100vw" srcSet="/images/bahiamar-space-5-p-500.webp 500w, /images/bahiamar-space-5-p-800.webp 800w, /images/bahiamar-space-5-p-1080.webp 1080w, /images/bahiamar-space-5-p-1600.webp 1600w, /images/bahiamar-space-5-p-2000.webp 2000w, /images/bahiamar-space-5.webp 2350w" className="img" />
                        </div>
                      </div>
                    </div>
                    <div data-reveal-first="" data-slider="slide" role="listitem" className="gallery-cms_list_item w-dyn-item">
                      <div className="gallery-slide">
                        <div data-scroll-reveal="slide" data-slider="img" className="img-w">
                          <img src="/images/bahiamar-space-6.webp" loading="eager" alt={t.alt6} sizes="100vw" srcSet="/images/bahiamar-space-6-p-500.webp 500w, /images/bahiamar-space-6-p-800.webp 800w, /images/bahiamar-space-6-p-1080.webp 1080w, /images/bahiamar-space-6-p-1600.webp 1600w, /images/bahiamar-space-6-p-2000.webp 2000w, /images/bahiamar-space-6.webp 2350w" className="img" />
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
