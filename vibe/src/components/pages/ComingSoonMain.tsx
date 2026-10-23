/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/* eslint-disable @next/next/no-img-element */
/**
 * Página de espera («coming soon»).
 *
 * YA NO ESTÁ GENERADO: nació de scripts/generate-sections.mjs sobre
 * coming-soon.html del sitio original, pero al personalizarlo para Bahía
 * Mar pasa a mantenerse a mano. Regenerarlo con `npm run gen:*` devolvería
 * los textos del promotor de origen.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 *
 * Copy: ningún documento del cliente confirma una «próxima entrega» de
 * villas, así que la página no anuncia ninguna; sólo remite a contactar
 * para conocer la disponibilidad actual.
 *
 * Textos en inglés y español según la URL (lib/use-lang.ts).
 */

import { useLang } from '@/lib/use-lang';

const T = {
  en: {
    title: 'villas available on request',
    desc: 'Villa availability at Bahía Mar is confirmed directly by our team. Contact us to find out which villas in Las Terrenas are currently available.',
    book: 'Book a call now',
  },
  es: {
    title: 'villas disponibles bajo consulta',
    desc: 'Nuestro equipo confirma directamente la disponibilidad de las villas de Bahía Mar. Contáctenos para saber qué villas en Las Terrenas están disponibles en este momento.',
    book: 'Agende una llamada',
  },
};

export function ComingSoonMain() {
  const lang = useLang();
  const t = T[lang];
  return (
    <section data-footer-clip="" data-bg="light" className="section z-2 theme_on-brand">
      <div className="container">
        <div className="soon-w">
          <div className="soon-s">
            <div className="grid">
              <div className="soon-s_title">
                <div className="u-160"></div>
                <h1 data-scroll-reveal="h" className="h2 a-center">{t.title}</h1>
                <div className="u-32"></div>
                <div className="grid _4-columns">
                  <div className="soon-s_desc">
                    <p data-scroll-reveal="p" className="p1 a-center">
                      {t.desc}
                    </p>
                  </div>
                </div>
                <div className="u-64"></div>
                <div data-scroll-reveal="ctn" className="soon-s_btn">
                  <div data-magnetic-btn="" hover-nav-item-trigger="" hover-btn-circle="" className="btn-circle">
                    <div data-magnetic-inner="" className="btn-circle_label">
                      <a hover-nav-item="" aria-label={t.book} href="https://landmass.urbatrix.com/login" target="_blank" rel="noopener noreferrer" className="nav-item w-inline-block">
                        <div className="nav-item_label">
                          <div className="nav-item_label_text"><div hover="text" className="l1">{t.book}</div></div>
                          <div className="nav-item_label_text is-2"><div hover="text" className="l1">{t.book}</div></div>
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
                    <a aria-label={t.book} href="https://landmass.urbatrix.com/login" target="_blank" rel="noopener noreferrer" className="btn-circle_link w-inline-block"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
