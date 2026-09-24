/* ============================================================
 *  Tipografías del sitio.
 *
 *  Las tres son de licencia libre (SIL OFL 1.1), así que se pueden
 *  desplegar en cualquier dominio sin pagar licencia web ni contar
 *  pageviews. Sustituyen a las del sitio original:
 *
 *    ambroise-francois-std (Adobe)  ->  Italiana (la del brochure de Bahía Mar)
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
 * Titulares. La elección se hizo midiendo, no a ojo: Ambroise François
 * es el corte COMPRIMIDO de su superfamilia, y casi ninguna didona
 * libre se le acerca. Con el h1 a 192px, "ERA RESIDENCE" ocupaba
 * 749px con la original; en Bodoni Moda se iba a 1499px (el doble) y
 * ya no cabía en el ancho disponible (1344px a 1440 de viewport).
 * Instrument Serif se quedaba en 1029px, que sí entra en una línea.
 *
 * Para Bahía Mar se cambió a Italiana, la tipografía de su brochure
 * (decidido en GHL, 2026-09-24). Estática, un solo peso y SIN cursiva:
 * Typekit sólo servía `fvd=n4` de Ambroise, así que no se pierde ningún
 * peso, pero cualquier `font-style: italic` en titulares sale sintetizada.
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
