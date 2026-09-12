/* ============================================================
 *  Tipografías del sitio.
 *
 *  Las tres son de licencia libre (SIL OFL 1.1), así que se pueden
 *  desplegar en cualquier dominio sin pagar licencia web ni contar
 *  pageviews. Sustituyen a las del sitio original:
 *
 *    ambroise-francois-std (Adobe)  ->  Italiana  (antes Instrument Serif)
 *    Maison Neue Extended (Milieu)  ->  Archivo
 *    sloop-script-three (Adobe)     ->  Pinyon Script
 *
 *  `next/font/google` descarga los ficheros en tiempo de BUILD y los
 *  sirve desde nuestro propio dominio: en runtime no se pide nada a
 *  Google. Además genera el `@font-face` con métricas de respaldo
 *  ajustadas, que es lo que evita el salto de maquetación al cargar.
 * ============================================================ */

import { Archivo, Italiana, Pinyon_Script } from 'next/font/google';

/**
 * Titulares. Bahía Mar no hereda la didona de ERA: el brochure del cliente
 * titula con una romana sin serifas, de astas acampanadas y contraste alto
 * («Verdadero lujo», pág. 9). Italiana es la libre que comparte esas formas
 * (comparada letra a letra con el brochure: V, a, d, e, r, o y el gancho de
 * la j coinciden; sólo es un punto más fina). Un solo peso y sin cursiva,
 * que el sitio no usa en los titulares.
 *
 * Es ~28% más ancha que Instrument Serif (la sustituta anterior, comprimida),
 * así que los ajustes de anchura de styles/theme.css se remidieron con ella.
 */
export const fontDisplay = Italiana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display',
});

/** Texto corrido e interfaz. Grotesca variable, 100–900. */
export const fontBody = Archivo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

/** Floritura de los acentos. Estática: sólo existe en regular. */
export const fontAccent = Pinyon_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-accent',
});

/** Clases que publican las tres variables CSS. Van en el <html>. */
export const fontVariables = [
  fontDisplay.variable,
  fontBody.variable,
  fontAccent.variable,
].join(' ');
