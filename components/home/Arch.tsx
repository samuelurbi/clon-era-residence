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
