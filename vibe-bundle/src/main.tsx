/* ============================================================
 *  Punto de entrada — equivalente del arranque de Next.
 *
 *  El orden de los imports de CSS es el mismo que tenía
 *  `app/layout.tsx`: primero las variables de tipografía y luego
 *  `globals.css`, que encadena las cinco capas por orden de cascada
 *  (webflow -> lenis -> tokens -> components -> theme).
 * ============================================================ */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

import './fonts.css';
import '@/site.css';

const container = document.getElementById('root');
if (!container) throw new Error('Falta <div id="root"> en index.html');

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
