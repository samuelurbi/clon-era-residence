/* eslint-disable @next/next/no-img-element */
/**
 * Título del bloque «otras villas» que precede a RelatedVillas en la ficha
 * (/villas/<slug>). Sólo texto: no lleva imagen.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre la
 * ficha de apartamento del sitio de origen; al personalizarlo para Bahía
 * Mar («Other villas» en vez de «Other apartments») pasa a mantenerse a
 * mano y regenerarlo desharía el cambio.
 *
 * Marcado portado conservando las clases de Webflow, que es lo que le da
 * el aspecto (ver styles/webflow.css y components.css).
 */

export function VillaArch() {
  return (
    <section className="section arch clip">
      <div className="container">
        <div className="other-title-w">
          <div className="other-title-s">
            <div className="other-title-s_t">
              <div className="u-160"></div>
              <div className="grid">
                <div className="other-title-s_title">
                  <p data-scroll-reveal="h" className="h3 a-center">similar options</p>
                </div>
              </div>
              <div className="u-48"></div>
            </div>
            <div className="divider"><div data-scroll-reveal="line" className="line-v"></div></div>
            <div className="other-title-s_b">
              <div className="u-48"></div>
              <div className="grid">
                <div className="s_title">
                  <p data-scroll-reveal="p" className="l1 a-center">
                    Other villas 
                    <br />
                    that might suit your needs
                  </p>
                </div>
              </div>
              <div className="u-16"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
