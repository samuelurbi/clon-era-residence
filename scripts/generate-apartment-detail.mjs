/**
 * Genera la ficha de apartamento y el bloque de fichas relacionadas a
 * partir del marcado real de `/apartments/011`, sustituyendo los valores
 * de ese apartamento por datos.
 *
 * Se comprobó comparando dos fichas que sólo varían: código, categoría,
 * dormitorios, superficie, terraza, descripción, el diagrama del bloque, el
 * plano y el PDF. Las fotos de interior son las mismas en las 25, así que
 * se dejan tal cual.
 *
 * La rotación de la rosa de los vientos vivía en un <style> incrustado —que
 * el conversor descarta— así que se reinyecta como estilo en línea.
 *
 *   node scripts/generate-apartment-detail.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

const root = parse(readFileSync('referencia-web-original/apartments/011.html', 'utf8'));
const sections = root.querySelector('[data-barba="container"]').childNodes.filter(
  (n) => n.nodeType === 1 && n.rawTagName,
);

/* ------------------------------------------------------------------ */
/*  Ficha                                                              */
/* ------------------------------------------------------------------ */

let detail = toJsx(sections[3], { rewriteUrl, indent: 2 });

const DETAIL_BINDINGS = [
  ['>Ground floor + basement<', '>{apartment.category}<'],
  ['>4Q 2026<', '>{apartment.completion}<'],
  ['>132 m²<', '>{apartment.interiorAreaLabel}<'],
  ['>46 M²<', '>{extras.terraceLabel} M²<'],
  ['>011<', '>{apartment.code}<'],
  ['>3<', '>{apartment.bedroomsLabel}<'],
];

/*
 * La descripción va sola en su línea dentro del <p>, no pegada a las
 * etiquetas, así que la sustitución por `>texto<` no casa. Se localiza por
 * el párrafo que la contiene.
 */
const DESCRIPTION = /(<p data-tab="p" className="p1">\n)\s*Three bedrooms[^\n]*\n/;

const report = [];
for (const [from, to] of DETAIL_BINDINGS) {
  const n = detail.split(from).length - 1;
  report.push([from.slice(0, 42), n]);
  detail = detail.split(from).join(to);
}

const descBefore = detail;
detail = detail.replace(DESCRIPTION, '$1                            {apartment.description}\n');
report.push(['descripción', descBefore === detail ? 0 : 1]);

// Imágenes y PDF
const before = detail;
detail = detail.replace(/src="\/images\/[^"]*diagram_block-1\.svg"/g, 'src={extras.blockDiagram ?? undefined}');
detail = detail.replace(/src="\/images\/[^"]*_11\.webp"/g, 'src={apartment.layoutImage}');
detail = detail.replace(/srcSet="[^"]*_11[^"]*"/g, 'srcSet={undefined}');
detail = detail.replace(/href="[^"]*apt_compressed\.pdf"/g, 'href={extras.brochure ?? "#"}');
report.push(['imágenes/PDF sustituidas', before === detail ? 0 : 1]);

// Rosa de los vientos: rotación en línea
const compassBefore = detail;
detail = detail.replace(
  /className="([^"]*\bcompass\b[^"]*)"/g,
  'className="$1" style={{ rotate: `${extras.compassDeg ?? 0}deg` }}',
);
report.push(['compass con rotación', compassBefore === detail ? 0 : 1]);

const detailFile = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-detail.mjs — no editar a mano.
 *
 * Ficha de apartamento. Marcado del original con las clases de Webflow
 * intactas; los valores propios de cada vivienda salen de los datos.
 */

import type { Apartment } from '@/data/apartments';
import type { ApartmentExtras } from '@/data/apartment-extras';

export function ApartmentDetail({
  apartment,
  extras,
}: {
  apartment: Apartment;
  extras: ApartmentExtras;
}) {
  return (
${detail}
  );
}
`;

/* ------------------------------------------------------------------ */
/*  Relacionados                                                       */
/* ------------------------------------------------------------------ */

const relatedSection = sections[6];
const relItems = relatedSection.querySelectorAll('.apart-cms_list_item');
const relList = relItems[0]?.parentNode;
const MARKER = '@@RELATED@@';

if (relList) {
  for (const item of relItems) item.remove();
  relList.appendChild(parse(`<span>${MARKER}</span>`));
}

let related = toJsx(relatedSection, { rewriteUrl, indent: 2 });
related = related.replace(
  new RegExp(`\\s*<span>${MARKER}</span>`),
  '\n{cards.map((card) => (\n  <ApartmentCard key={card.code} card={card} />\n))}',
);

const relatedFile = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartment-detail.mjs — no editar a mano.
 *
 * Bloque «otras viviendas» del pie de la ficha. Usa la misma tarjeta que el
 * listado: se comprobó que el original repite ahí el mismo marcado.
 */

import type { ApartmentCardData } from '@/data/apartment-cards';
import { ApartmentCard } from './ApartmentCard';

export function RelatedApartments({ cards }: { cards: ApartmentCardData[] }) {
  return (
${related}
  );
}
`;

mkdirSync('components/apartments', { recursive: true });
writeFileSync('components/apartments/ApartmentDetail.tsx', detailFile);
writeFileSync('components/apartments/RelatedApartments.tsx', relatedFile);

console.log('components/apartments/ApartmentDetail.tsx');
for (const [label, n] of report) console.log(`  ${String(n).padStart(2)}x  ${label}`);
console.log(`components/apartments/RelatedApartments.tsx (${relItems.length} tarjetas → map)`);
