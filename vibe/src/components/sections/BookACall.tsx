/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/* eslint-disable @next/next/no-img-element */
/**
 * Pie con el formulario «Book a call». Idéntico en todas las páginas salvo
 * por el enlace de vuelta arriba, que sólo lleva la home.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-shared-sections.mjs
 * sobre el marcado de ERA Residence, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo devolvería la marca, los PDF
 * legales y el crédito de agencia del sitio de Estepona.
 *
 * Teléfono, correo y oficina de ventas son los datos oficiales de
 * data/contact.ts; el correo va bajo el teléfono con el mismo marcado de
 * enlace que el de la página de contacto. Los enlaces legales llevan a
 * /legal (#privacy, #terms). Textos en inglés y español según la URL
 * (lib/use-lang.ts).
 */

import { EMAIL, EMAIL_HREF, OFFICE_MAPS_URL, PHONE, PHONE_HREF, officeAddress } from '@/data/contact';
import { localize } from '@/lib/i18n';
import { useLang } from '@/lib/use-lang';

const T = {
  en: {
    toTop: 'To top',
    office: 'Sales Office',
    rights: 'All rights reserved',
    privacy: 'Privacy policy',
    terms: 'Terms of Use',
  },
  es: {
    toTop: 'Arriba',
    office: 'Oficina de ventas',
    rights: 'Todos los derechos reservados',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
  },
};

export function BookACall({ showToTop = false }: { showToTop?: boolean }) {
  const lang = useLang();
  const t = T[lang];
  const office = officeAddress(lang);
  const legal = localize('/legal', lang);
  return (
    <section data-bg="dark" className="section theme_on-dark">
      <div className="container">
        <div className="footer-w">
          {showToTop && (
          <a href="#hero" className="footer-s_s-top w-inline-block">
            <div className="l2">{t.toTop}</div>
            <div className="s-down_arrow w-embed">
              <svg width="100%" height="100%" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.6345 9C40.8959 8.45299 41.1486 7.97436 41.3926 7.56411C41.6541 7.15385 41.9068 6.81197 42.1508 6.53846L2.99981 6.53846L2.99981 5.46154L42.1508 5.46154C41.9068 5.17094 41.6541 4.82051 41.3926 4.41026C41.1486 4 40.8959 3.52992 40.6345 3L41.5495 3C42.6475 4.24787 43.7979 5.17094 45.0005 5.76923L45.0005 6.23077C43.7979 6.81197 42.6475 7.73504 41.5495 9L40.6345 9Z" fill="currentColor"></path>
              </svg>
            </div>
          </a>
          )}
          <div className="footer-s">
            <div className="footer-s_t"></div>
            <div className="footer-s_c">
              <div className="grid">
                <div className="footer-s_contact">
                  <div className="s_logo">
                    <div data-text="ctn" className="logo_symbol ico-64">
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
                  <div className="u-32"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a href={PHONE_HREF} target="_blank" className="nav-item w-inline-block">
                          <div data-text="h" className="h2 a-center">{PHONE}</div>
                        </a>
                      </div>
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label={EMAIL} href={EMAIL_HREF} className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">{EMAIL}</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">{EMAIL}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="u-48"></div>
                </div>
                <div className="footer-s_address">
                  <div className="loc-cms w-dyn-list">
                    <div role="list" className="loc-cms_list w-dyn-items">
                      <div data-text="ctn" role="listitem" className="loc-cms_list_item w-dyn-item">
                        <h3 className="l1 reg a-center">{t.office}</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label={office} href={OFFICE_MAPS_URL} className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">{office}</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">{office}</div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-s_b">
              <div className="grid">
                <div className="footer-s_info">
                  <div data-text="p" className="l1">Bahía Mar.</div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©<span className="year">2026</span> {t.rights}
                  </div>
                  <div className="u-12"></div>
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="legal-cms_list w-dyn-items">
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label={t.privacy} href={legal + '#privacy'} className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">{t.privacy}</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">{t.privacy}</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label={t.terms} href={legal + '#terms'} className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">{t.terms}</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">{t.terms}</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-s_credits">
                  <div hover-nav-item-trigger="" className="credits">
                    <a aria-label="Bahía Mar Residences & Beach Resort" href="#" className="credits_link w-inline-block"></a>
                    <div data-text="ctn" data-scrub-reveal="ctn" className="credits_logo-w">
                      <div data-json="" className="credits_logo"></div>
                    </div>
                    <div className="u-12"></div>
                    <div data-text="p" className="l1 reg a-right">Las Terrenas, Samaná</div>
                    <div data-text="p">
                      <a hover-nav-item="" aria-label="Bahía Mar Residences & Beach Resort" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Bahía Mar Residences &amp; Beach Resort</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Bahía Mar Residences &amp; Beach Resort</div></div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-48"></div>
            </div>
          </div>
          <div className="footer-w_bg"></div>
        </div>
      </div>
    </section>
  );
}
