/**
 * Genera el componente de tarjeta de apartamento a partir del marcado real
 * del listado, sustituyendo los valores del 011 por las propiedades del
 * objeto de datos.
 *
 * Se hace por sustitución mecánica y no a mano para que el marcado quede
 * idéntico al original, clases de Webflow incluidas.
 *
 *   node scripts/generate-apartment-card.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

const root = parse(readFileSync('referencia-web-original/apartments.html', 'utf8'));
const card = root.querySelector('.apart-cms_list_item');
if (!card) throw new Error('no se encontró .apart-cms_list_item');

let jsx = toJsx(card, { rewriteUrl, indent: 2 });

/**
 * Sustituciones. El orden importa: las cadenas largas primero, para que
 * "011" no se coma parte de "/apartments/011".
 */
const BINDINGS = [
  ['href="/apartments/011"', 'href={card.href}'],
  ['>Ground floor + basement<', '>{card.category}<'],
  ['>4Q 2026<', '>{card.completion}<'],
  ['>132 m²<', '>{card.area}<'],
  ['>29 M²<', '>{card.terrace}<'],
  ['>011<', '>{card.code}<'],
  ['>B1<', '>{card.block}<'],
  ['>0<', '>{card.floor}<'],
  ['>3<', '>{card.bedrooms}<'],
];

const report = [];
for (const [from, to] of BINDINGS) {
  const n = jsx.split(from).length - 1;
  report.push(`${from} → ${n}`);
  jsx = jsx.split(from).join(to);
}

/*
 * Atributos con los que el listado filtra y ordena. Van aparte de las
 * sustituciones de texto porque no son visibles: si se quedan con el valor
 * de una sola vivienda, los filtros dejan de descartar nada y el listado
 * muestra siempre las 25 (pasó, y no da ningún error).
 */
const DATA_BINDINGS = [
  [/data-type="[^"]*"/, 'data-type={card.filterType ?? undefined}'],
  [/data-bed="[^"]*"/, 'data-bed={card.filterBed ?? undefined}'],
  [/data-sort-area="[^"]*"/, 'data-sort-area={card.sortArea ?? undefined}'],
  [/data-sort-relevant="[^"]*"/, 'data-sort-relevant={card.sortRelevant ?? undefined}'],
];

for (const [pattern, replacement] of DATA_BINDINGS) {
  const n = (jsx.match(new RegExp(pattern.source, 'g')) || []).length;
  report.push(`${pattern.source} → ${n}`);
  jsx = jsx.replace(new RegExp(pattern.source, 'g'), replacement);
}

// Imagen: src y srcSet salen de los datos.
jsx = jsx.replace(/src="\/images\/[^"]*\.webp"/, 'src={card.image ?? undefined}');
jsx = jsx.replace(/srcSet="[^"]*"/, 'srcSet={card.imageSrcset ?? undefined}');

const file = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-card.mjs — no editar a mano.
 *
 * Tarjeta de apartamento del listado. El marcado es el del sitio original
 * (clases de Webflow intactas) con los valores sustituidos por datos.
 */

import type { ApartmentCardData } from '@/data/apartment-cards';

export function ApartmentCard({ card }: { card: ApartmentCardData }) {
  return (
${jsx}
  );
}
`;

mkdirSync('components/apartments', { recursive: true });
writeFileSync('components/apartments/ApartmentCard.tsx', file);

console.log('components/apartments/ApartmentCard.tsx');
console.log('  sustituciones (deberían ser 1 cada una):');
for (const line of report) console.log('   ', line);
