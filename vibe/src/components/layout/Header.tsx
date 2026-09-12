/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/* eslint-disable @next/next/no-img-element */
/**
 * Logo y navegación: la parte de la cabecera que SÍ es igual en las 29
 * páginas. Lo que cambia (barra de scroll en la home, migas en las
 * interiores) se monta aparte desde cada página.
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-header.mjs sobre la
 * cabecera del sitio original, pero al personalizarlo para Bahía Mar
 * (isotipo con máscara CSS, sello circular con <textPath> en escritorio y
 * móvil) pasa a mantenerse a mano. Regenerarlo con `npm run gen:*`
 * desharía ese trabajo.
 *
 * Es cliente sólo para saber en qué ruta estamos: el logo enlaza a
 * «volver arriba» en la home y a «Home» en el resto.
 */

import { usePathname } from '@/shims/next-navigation';

export function Header() {
  const isHome = usePathname() === '/';

  return (
    <div className="theme_on-color">
      <a aria-label={isHome ? "Back to top" : "Home"} data-theme="" href={isHome ? "#hero" : "/"} className="header-logo w-inline-block">
        <div data-modal-close="menu" aria-label="Bahía Mar logo" className="logo_symbol header">
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
        <div className="header-logo_bg b-desk w-embed">
          <svg width="100%" height="100%" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar" d="M 60,8 A 52,52 0 1,1 59.99,8" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '8.8px',
                fontWeight: 500,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                textLength = longitud de la circunferencia (2π·52 ≈ 326):
                el navegador reparte los glifos por TODO el anillo, sin
                hueco al final. Sin esto el texto acababa donde acababa y
                dejaba un cuarto de círculo vacío.
              */}
              <textPath href="#sello-bahiamar" startOffset="0%" textLength="326" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
        <div className="header-logo_bg b-mob w-embed">
          <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-mob" d="M 40,5.33 A 34.67,34.67 0 1,1 39.99,5.33" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '5.87px',
                fontWeight: 500,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                Misma receta que el sello de escritorio, a escala 80/120:
                textLength = 2π·34.67 ≈ 218 reparte el texto por todo el anillo.
              */}
              <textPath href="#sello-bahiamar-mob" startOffset="0%" textLength="218" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
        </div>
      </a>
      <div data-theme="" className="header-nav">
        <div className="header-nav_list f-mob">
          <div hover-nav-item-l2-trigger="" data-modal-menu-btn="mob" className="btn-menu">
            <div className="btn-menu_label is-active">
              <a hover-nav-item-l2="" aria-label="Menu" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Menu</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Menu</div></div>
                </div>
              </a>
            </div>
            <div className="btn-menu_label">
              <a hover-nav-item-l2="" aria-label="Close" href="#" className="nav-item w-inline-block">
                <div className="nav-item_label">
                  <div hover="text" className="nav-item_label_text"><div className="l2">Close</div></div>
                  <div hover="text" className="nav-item_label_text is-2"><div className="l2">Close</div></div>
                </div>
              </a>
            </div>
            <div className="ico-24">
              <div className="ico">
                <div data-ico-menu="is-1" className="ico w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
                <div data-ico-menu="is-2" className="ico ia-2 w-embed">
                  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 19C13.5 19.8284 12.8284 20.5 12 20.5C11.1716 20.5 10.5 19.8284 10.5 19C10.5 18.1716 11.1716 17.5 12 17.5C12.8284 17.5 13.5 18.1716 13.5 19Z" fill="currentColor"></path>
                    <path d="M13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12Z" fill="currentColor"></path>
                    <path d="M13.5 5C13.5 5.82843 12.8284 6.5 12 6.5C11.1716 6.5 10.5 5.82843 10.5 5C10.5 4.17157 11.1716 3.5 12 3.5C12.8284 3.5 13.5 4.17157 13.5 5Z" fill="currentColor"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-nav_list f-desk">
          <a hover-link="" aria-label="Select  a Villa" href="/villas" className="link w-inline-block">
            <div className="link_label">
              <div className="link_label_text">
                <div hover="text" className="h6">
                  Select 
                  <br />
                  a Villa
                </div>
              </div>
              <div className="link_label_text is-2">
                <div hover="text" className="h6">
                  Select 
                  <br />
                  a Villa
                </div>
              </div>
            </div>
          </a>
          <div className="u-24"></div>
          <a data-modal-cta-btn="book-a-call" aria-label="Book a call" hover-nav-item-l2="" href="#" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Book a call</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Book a call</div></div>
            </div>
          </a>
          <div className="u-4"></div>
          <a hover-nav-item-l2="" aria-label="Contact" href="/contact" className="nav-item w-inline-block">
            <div className="nav-item_label">
              <div hover="text" className="nav-item_label_text"><div className="l2">Contact</div></div>
              <div hover="text" className="nav-item_label_text is-2"><div className="l2">Contact</div></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
