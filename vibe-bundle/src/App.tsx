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

import { Animations, BookCallModal, CookieNotice, FloatingTips, Header, LandscapeCover, MasterPreloader, MenuModal, PageTransitions, Preloader, SmoothScroll } from '@/components-layout';
import { ComingSoonPage, ContactPage, HomePage, NotFoundPage, VillaPage, VillasPage } from '@/pages';



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
      <LandscapeCover />
      <MasterPreloader />
      <Preloader />
      <CookieNotice />
      {/*
        `main.transition-container` es el contenedor que Barba sustituía
        en cada navegación. Aquí no se sustituye —el router conserva el
        layout— pero sigue siendo el elemento que se funde en las
        transiciones de ruta, y la cabecera va DENTRO, como en el
        original.
      */}
      <main className="transition-container">
        <Header />
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/villas" element={<VillasPage />} />
            <Route path="/villas/:slug" element={<VillaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/coming-soon" element={<ComingSoonPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </SmoothScroll>
      </main>
      <Animations />
      <PageTransitions />
      <BookCallModal />
      <MenuModal />
      <FloatingTips />
    </div>
  );
}
