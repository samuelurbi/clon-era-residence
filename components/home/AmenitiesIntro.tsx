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
                  WebkitMaskImage: 'url(/images/bahiamar-isotype.png)',
                  maskImage: 'url(/images/bahiamar-isotype.png)',
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
            <video muted playsInline loop disablePictureInPicture webkit-playsinline="webkit-playsinline" poster="/images/palm-fronds_01.webp" className="video">
              <source src="/videos/palm-fronds_01.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
