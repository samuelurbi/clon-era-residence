/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * Pie con el formulario «Book a call». Idéntico en todas las páginas salvo
 * por el enlace de vuelta arriba, que sólo lleva la home.
 */

export function BookACall({ showToTop = false }: { showToTop?: boolean }) {
  return (
    <section data-bg="dark" className="section theme_on-dark">
      <div className="container">
        <div className="footer-w">
          {showToTop && (
          <a href="#hero" className="footer-s_s-top w-inline-block">
            <div className="l2">To top</div>
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
                        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6.55544 9.1241C4.81712 7.38578 4.69025 4.69428 4.69025 4.69428C4.69025 4.69428 7.38176 4.82115 9.12007 6.55947C10.8584 8.29779 10.9853 10.9893 10.9853 10.9893C10.9853 10.9893 8.29376 10.8624 6.55544 9.1241Z" fill="currentColor"></path>
                          <path d="M20 0.00151769L16.1569 8.1194C15.5932 9.31006 15.5931 10.6907 16.1568 11.8814L18.4988 16.8291C17.7735 17.1796 17.1891 17.7755 16.8534 18.5091L11.8814 16.1558C10.6907 15.5923 9.31007 15.5923 8.11946 16.156L0 20V19.177C0 18.3493 0.423339 17.5792 1.12211 17.1356L7.64451 12.9953C9.08249 12.0825 10.9183 12.0824 12.3564 12.9951L14.1067 14.1059L12.9961 12.3565C12.0833 10.9184 12.0833 9.08239 12.9962 7.64431L17.1364 1.12212C17.5799 0.423353 18.3501 1.51793e-05 19.1777 1.51793e-05L20 0.00151769Z" fill="currentColor"></path>
                          <path d="M33.4446 30.8759C35.1829 32.6142 35.3097 35.3057 35.3097 35.3057C35.3097 35.3057 32.6182 35.1788 30.8799 33.4405C29.1416 31.7022 29.0147 29.0107 29.0147 29.0107C29.0147 29.0107 31.7062 29.1375 33.4446 30.8759Z" fill="currentColor"></path>
                          <path d="M20 39.9984L23.8431 31.8806C24.4068 30.6899 24.4069 29.3092 23.8432 28.1185L21.5012 23.1708C22.2265 22.8204 22.8109 22.2244 23.1466 21.4909L28.1186 23.8441C29.3093 24.4077 30.6899 24.4076 31.8805 23.8439L40 19.9999V20.8229C40 21.6506 39.5767 22.4208 38.8779 22.8643L32.3555 27.0047C30.9175 27.9175 29.0817 27.9176 27.6436 27.0049L25.8933 25.894L27.0039 27.6435C27.9167 29.0816 27.9167 30.9176 27.0038 32.3556L22.8636 38.8778C22.4201 39.5766 21.6499 39.9999 20.8223 39.9999L20 39.9984Z" fill="currentColor"></path>
                          <path d="M30.8759 6.55544C32.6142 4.81712 35.3057 4.69026 35.3057 4.69026C35.3057 4.69026 35.1789 7.38176 33.4405 9.12008C31.7022 10.8584 29.0107 10.9853 29.0107 10.9853C29.0107 10.9853 29.1376 8.29376 30.8759 6.55544Z" fill="currentColor"></path>
                          <path d="M39.9985 20L31.8806 16.1569C30.69 15.5932 29.3093 15.5931 28.1186 16.1568L23.1709 18.4988C22.8204 17.7735 22.2245 17.1891 21.4909 16.8534L23.8442 11.8814C24.4078 10.6907 24.4077 9.31007 23.844 8.11946L20 0L20.823 3.59746e-08C21.6507 7.2153e-08 22.4208 0.423339 22.8644 1.12211L27.0047 7.64451C27.9175 9.08249 27.9176 10.9183 27.0049 12.3564L25.8941 14.1067L27.6435 12.9961C29.0816 12.0833 30.9176 12.0833 32.3557 12.9962L38.8779 17.1364C39.5767 17.5799 40 18.3501 40 19.1777L39.9985 20Z" fill="currentColor"></path>
                          <path d="M9.12417 33.4445C7.38585 35.1828 4.69435 35.3097 4.69435 35.3097C4.69435 35.3097 4.82122 32.6182 6.55954 30.8799C8.29786 29.1416 10.9894 29.0147 10.9894 29.0147C10.9894 29.0147 10.8625 31.7062 9.12417 33.4445Z" fill="currentColor"></path>
                          <path d="M0.00159168 20L8.11947 23.8431C9.31013 24.4068 10.6908 24.4068 11.8815 23.8432L16.8292 21.5012C17.1796 22.2265 17.7756 22.8109 18.5092 23.1466L16.1559 28.1186C15.5923 29.3093 15.5924 30.6899 16.1561 31.8805L20.0001 40H19.1771C18.3494 40 17.5793 39.5766 17.1357 38.8779L12.9954 32.3555C12.0825 30.9175 12.0825 29.0816 12.9951 27.6436L14.106 25.8933L12.3566 27.0038C10.9185 27.9167 9.08247 27.9167 7.64438 27.0038L1.1222 22.8636C0.423427 22.42 8.89523e-05 21.6499 8.90608e-05 20.8222L0.00159168 20Z" fill="currentColor"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="u-32"></div>
                  <div className="contact-cms w-dyn-list">
                    <div role="list" className="contact-cms_list w-dyn-items">
                      <div role="listitem" className="contact-cms_list_item w-dyn-item">
                        <a href="tel:+34655408648" target="_blank" className="nav-item w-inline-block">
                          <div data-text="h" className="h2 a-center">+34 (655) 408-648</div>
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
                        <h3 className="l1 reg a-center">Sales Office</h3>
                        <div className="u-4"></div>
                        <a hover-nav-item="" aria-label="Avenida Litoral, 29680 Estepona, Málaga, Spain" href="https://maps.app.goo.gl/EzyfT2M6vR5aBdMu9" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
                            </div>
                            <div className="nav-item_label_text is-2">
                              <div hover="text" className="l1">Avenida Litoral, 29680 Estepona, Málaga, Spain</div>
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
                  <div data-text="p" className="l1">Era Residence.</div>
                  <div data-text="p" className="l1 reg no-wrap">
                    ©
                    <span className="year">2026</span>
                     All rights reserved
                  </div>
                  <div className="u-12"></div>
                  <div data-text="p" className="legal-cms w-dyn-list">
                    <div data-comma-list="" role="list" className="legal-cms_list w-dyn-items">
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Privacy policy" href="/documents/politica_privacidad_era_residence.pdf" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Privacy policy</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Privacy policy</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                      <div role="listitem" className="legal-cms_list_item w-dyn-item">
                        <a hover-nav-item="" aria-label="Terms of Use" href="/images/terms_of_use_era_residence%20(1).pdf" className="nav-item w-inline-block">
                          <div className="nav-item_label">
                            <div className="nav-item_label_text"><div hover="text" className="l1">Terms of Use</div></div>
                            <div className="nav-item_label_text is-2"><div hover="text" className="l1">Terms of Use</div></div>
                          </div>
                        </a>
                        <div data-comma="" className="l1">,</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="footer-s_credits">
                  <div hover-nav-item-trigger="" className="credits">
                    <a aria-label="The First The Last" href="https://thefirstthelast.agency/?utm_source=era-residence&utm_medium=article&utm_campaign=promo" target="_blank" className="credits_link w-inline-block"></a>
                    <div data-text="ctn" data-scrub-reveal="ctn" className="credits_logo-w">
                      <div data-json="https://pub-157506367d4c4fa1825d7a6d26b687a2.r2.dev/tftl-logo_white.json" className="credits_logo"></div>
                    </div>
                    <div className="u-12"></div>
                    <div data-text="p" className="l1 reg a-right">Made by</div>
                    <div data-text="p">
                      <a hover-nav-item="" aria-label="Thefirstthelast" href="#" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">Thefirstthelast</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">Thefirstthelast</div></div>
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
