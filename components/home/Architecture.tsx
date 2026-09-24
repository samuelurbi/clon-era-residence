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
 * Imagen: render exterior de la Villa Carolina (ver inventario/architecture.json).
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
                <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/palm-fronds_02.webp" className="video">
                  <source src="/videos/palm-fronds_02.webm" type="video/webm" />
                </video>
              </div>
              <div className="flower arch-intro-r">
                <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/palm-fronds_01.webp" className="video">
                  <source src="/videos/palm-fronds_01.webm" type="video/webm" />
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
                <img className="img" src="/images/bahiamar-architecture-1.webp" alt="Villa Carolina at Bahía Mar: pale stone and timber volumes under wide overhangs, terraces stepping down a palm-covered hillside towards the sea." sizes="(max-width: 1920px) 100vw, 1920px" data-parallax="img" loading="eager" srcSet="/images/bahiamar-architecture-1-p-500.webp 500w, /images/bahiamar-architecture-1-p-800.webp 800w, /images/bahiamar-architecture-1-p-1080.webp 1080w, /images/bahiamar-architecture-1-p-1600.webp 1600w, /images/bahiamar-architecture-1-p-2000.webp 2000w, /images/bahiamar-architecture-1.webp 2350w" />
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
