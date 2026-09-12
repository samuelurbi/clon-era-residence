/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/* eslint-disable @next/next/no-img-element */
/**
 * Menú a pantalla completa (móvil).
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * home.html del sitio original, pero al personalizarlo para Bahía Mar
 * (isotipo con máscara CSS al pie) pasa a mantenerse a mano. Regenerarlo
 * con `npm run gen:*` desharía ese trabajo.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function MenuModal() {
  return (
    <div data-modal-menu="mob" className="modal menu theme_on-dark">
      <div className="modal_c">
        <div data-modal-container="" className="modal_menu">
          <div className="modal_menu_t">
            <div className="u-48 b-desk"></div>
            <div className="u-272 b-mob"></div>
            <div className="grid">
              <div className="modal_menu_title">
                <div className="modal_menu_a"><div data-part="a" className="a1 a-center">The</div></div>
                <div data-part="h" className="h1 a-center">Menu</div>
              </div>
            </div>
          </div>
          <div className="modal_menu_c">
            <div className="grid">
              <div className="modal_menu_list">
                <a data-part="ctn" aria-label="Home" hover-link="" data-modal-close="mob" href="/" aria-current="page" className="link w-inline-block w--current">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Home</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Home</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Select a Villa" hover-link="" data-modal-close="mob" href="/villas" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Select a Villa</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Select a Villa</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Book a call" hover-link="" data-modal-cta-btn="book-a-call" data-modal-close="mob" href="#" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Book a call</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Book a call</div></div>
                  </div>
                </a>
                <a data-part="ctn" aria-label="Contact" hover-link="" data-modal-close="mob" href="/contact" className="link w-inline-block">
                  <div className="link_label">
                    <div className="link_label_text"><div hover="text" className="h6">Contact</div></div>
                    <div className="link_label_text is-2"><div hover="text" className="h6">Contact</div></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="modal_menu_b">
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
            <div className="u-48"></div>
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_bg"></div>
    </div>
  );
}
