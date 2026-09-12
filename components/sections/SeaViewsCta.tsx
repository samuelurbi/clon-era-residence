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

import { CTA_IMAGES, type CtaImage } from '@/data/cta-images';

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
                  A short conversation is enough to understand which of the five villas fits the way you want to live in Las Terrenas — a family home facing the bay, a longer stay each season, or a place to return to year after year.
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
