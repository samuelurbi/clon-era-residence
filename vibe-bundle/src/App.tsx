/* ============================================================
 *  Equivalente de `app/layout.tsx` + el árbol de rutas.
 *
 *  El marcado es CALCADO del layout de Next, comentarios incluidos:
 *  el CSS heredado de Webflow depende de esa jerarquía de clases
 *  (`.transition-wrapper`, `main.transition-container`), así que no se
 *  reordena nada.
 *
 *  Las dos diferencias, ambas obligadas por Vibe:
 *
 *    - `{children}` pasa a ser un `<Routes>` de React Router. Es el
 *      mismo hueco: el layout envuelve, la ruta rellena.
 *    - El `<html>` y el `<body>` los pone `index.html`, no React. Por
 *      eso `<div id="root">` lleva `display: contents` (ver index.html):
 *      así no mete una caja de más entre `body.body` y
 *      `.transition-wrapper`. Comprobado que ningún selector del CSS ni
 *      del JS de animación usa `body > …`, que es lo que esto rompería.
 * ============================================================ */

import { Route, Routes } from 'react-router-dom';

import { Animations, BookCallModal, FloatingTips, Header, LangKeyed, LangSwitcher, MasterPreloader, MenuModal, PageTransitions, Preloader, SmoothScroll } from '@/components-layout';
import { ComingSoonPage, ContactPage, HomePage, LegalPage, NotFoundPage, VillaPage, VillasPage } from '@/pages';

import { FormTracking } from '@/components/FormTracking';


export function App() {
  return (
    /*
      `.transition-wrapper` es el envoltorio que el original marcaba con
      data-barba="wrapper". Barba sobra —el router hace las
      transiciones—, pero la clase la usa el CSS heredado, así que se queda.
    */
    <div className="transition-wrapper">
      {/*
        El orden es el del original: las cortinas van ANTES que nada,
        porque el master-preloader tapa la página hasta que arranca el JS.
      */}
      {/* Sin cortina de «gire el teléfono»: en horizontal se ve la web
          (ver «Móvil en horizontal» en styles/theme.css). */}
      <MasterPreloader />
      <Preloader />
      {/* Sin aviso de cookies: se quitó en GHL (2026-09-24). El
          componente sigue en components/layout/CookieNotice.tsx. */}
      {/*
        `main.transition-container` es el contenedor que Barba sustituía
        en cada navegación. Aquí no se sustituye —el router conserva el
        layout— pero sigue siendo el elemento que se funde en las
        transiciones de ruta, y la cabecera va DENTRO, como en el
        original.
      */}
      <main className="transition-container">
        <LangKeyed>
          <Header />
        </LangKeyed>
        <SmoothScroll>
          {/*
            Cada ruta dos veces: en inglés en la raíz y en español bajo
            `/es` (ver lib/i18n.ts). Las páginas son las mismas; leen el
            idioma de la URL. Es lo que hace `app/es/` en Next.
          */}
          {/*
            LangKeyed también aquí, y es imprescindible: `/villas` y
            `/es/villas` pintan el MISMO componente en la misma posición,
            así que React Router lo reutiliza en vez de montarlo de nuevo y
            React solo cambia los textos. Pero SplitText ya ha troceado
            titulares y botones en letras sueltas: React escribía en los
            nodos de texto originales, que ya no están en pantalla, y lo
            visible se quedaba en el idioma anterior (53 textos en la home
            al pasar de EN a ES). Con la `key` del idioma la página se monta
            limpia y la capa de animación la trocea de nuevo. En Next no
            pasa: app/villas y app/es/villas son rutas distintas.
          */}
          <LangKeyed>
          <Routes>
            {['', '/es'].map((prefix) => (
              <Route key={prefix || 'en'} path={prefix || '/'}>
                <Route index element={<HomePage />} />
                <Route path="villas" element={<VillasPage />} />
                <Route path="villas/:slug" element={<VillaPage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="coming-soon" element={<ComingSoonPage />} />
                <Route path="legal" element={<LegalPage />} />
              </Route>
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          </LangKeyed>
        </SmoothScroll>
      </main>
      <Animations />
      <PageTransitions />
      <FormTracking />
      {/* El cromo se remonta al cambiar de idioma: ver LangKeyed. */}
      <LangKeyed>
        <BookCallModal />
        <MenuModal />
        <FloatingTips />
      </LangKeyed>
      <LangSwitcher />
    </div>
  );
}
