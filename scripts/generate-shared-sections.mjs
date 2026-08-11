/**
 * Genera los dos bloques que se repiten en casi todas las páginas pero que
 * NO son idénticos entre ellas.
 *
 * Se descubrió comparando el marcado página a página:
 *
 *   .cta-w     el fondo de «Perfect sea views» cambia en cada página
 *              (4 imágenes distintas para 29 páginas)
 *   .footer-w  sólo la home lleva el enlace de vuelta arriba
 *
 * Ojo: los cuatro bloques discrepantes pesaban EXACTAMENTE lo mismo. Fiarse
 * del tamaño para decidir si dos bloques son iguales no sirve.
 *
 *   node scripts/generate-shared-sections.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

const docOf = (page) => parse(readFileSync(`referencia-web-original/${page}`, 'utf8'));
const sectionOf = (page, index) =>
  docOf(page)
    .querySelector('[data-barba="container"]')
    .childNodes.filter((n) => n.nodeType === 1 && n.rawTagName)[index];

/* ------------------------------------------------------------------
 *  CTA «Perfect sea views»
 * ------------------------------------------------------------------ */

let cta = toJsx(sectionOf('home.html', 13), { rewriteUrl, indent: 2 });

const report = [];
const bind = (label, pattern, replacement) => {
  const n = (cta.match(pattern) || []).length;
  report.push([label, n]);
  cta = cta.replace(pattern, replacement);
};

bind('src del fondo', /src="\/images\/[^"]*img_cta_1920[^"]*"/, 'src={image.src}');
bind('srcSet del fondo', /srcSet="[^"]*"/, 'srcSet={image.srcSet}');

const ctaFile = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * CTA «Perfect sea views». El marcado es común a 28 de las 29 páginas
 * (falta en coming-soon), pero la imagen de fondo NO: cada sección del
 * sitio usa la suya. Por eso entra por props en vez de venir fijada.
 */

import { CTA_IMAGES, type CtaImage } from '@/data/cta-images';

export function SeaViewsCta({ image = CTA_IMAGES.home }: { image?: CtaImage }) {
  return (
${cta}
  );
}
`;

writeFileSync('components/sections/SeaViewsCta.tsx', ctaFile);

/* ------------------------------------------------------------------
 *  Pie «Book a call»
 * ------------------------------------------------------------------ */

let footer = toJsx(sectionOf('home.html', 14), { rewriteUrl, indent: 2 });

/*
 * El enlace de vuelta arriba (`.footer-s_s-top`) sólo existe en la home.
 * Se envuelve en una condición en lugar de generar dos componentes.
 */
const TOP_LINK = /^(\s*)(<a href="#hero"[\s\S]*?<\/a>)$/m;
const hadTop = TOP_LINK.test(footer);
footer = footer.replace(TOP_LINK, '$1{showToTop && (\n$1$2\n$1)}');
report.push(['enlace «to top» condicionado', hadTop ? 1 : 0]);

const footerFile = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-shared-sections.mjs — no editar a mano.
 *
 * Pie con el formulario «Book a call». Idéntico en todas las páginas salvo
 * por el enlace de vuelta arriba, que sólo lleva la home.
 */

export function BookACall({ showToTop = false }: { showToTop?: boolean }) {
  return (
${footer}
  );
}
`;

writeFileSync('components/sections/BookACall.tsx', footerFile);

console.log('components/sections/SeaViewsCta.tsx');
console.log('components/sections/BookACall.tsx');
console.log('  sustituciones (deberían ser 1 cada una):');
for (const [label, n] of report) console.log(`   ${String(n).padStart(2)}x  ${label}`);
