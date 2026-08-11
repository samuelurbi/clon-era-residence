/**
 * Genera la sección del listado de apartamentos.
 *
 * El original trae las 25 tarjetas escritas uña por uña (265 KB de marcado).
 * Aquí se conserva todo el envoltorio tal cual y se sustituye la lista por
 * un `map` sobre los datos, así que el resultado es el mismo marcado pero
 * mantenible.
 *
 *   node scripts/generate-apartments-listing.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

const root = parse(readFileSync('referencia-web-original/apartments.html', 'utf8'));
const container = root.querySelector('[data-barba="container"]');
const section = container.childNodes.filter((n) => n.nodeType === 1 && n.rawTagName)[3];

const items = section.querySelectorAll('.apart-cms_list_item');
if (!items.length) throw new Error('no se encontraron tarjetas');

// La lista que las contiene: el padre común de los items.
const list = items[0].parentNode;
const total = items.length;

// Se vacía la lista y se deja una marca que luego se cambia por el map.
const MARKER = '@@CARDS@@';
for (const item of items) item.remove();
list.appendChild(parse(`<span>${MARKER}</span>`));

let jsx = toJsx(section, { rewriteUrl, indent: 2 });

jsx = jsx.replace(
  new RegExp(`\\s*<span>${MARKER}</span>`),
  '\n{apartmentCards.map((card) => (\n  <ApartmentCard key={card.code} card={card} />\n))}',
);

const file = `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-apartments-listing.mjs — no editar a mano.
 *
 * Listado de apartamentos. Envoltorio y clases idénticos al original; las
 * ${total} tarjetas, que allí venían escritas una a una, salen de los datos.
 */

import { apartmentCards } from '@/data/apartment-cards';
import { ApartmentCard } from './ApartmentCard';

export function ApartmentsListing() {
  return (
${jsx}
  );
}
`;

mkdirSync('components/apartments', { recursive: true });
writeFileSync('components/apartments/ApartmentsListing.tsx', file);
console.log(`components/apartments/ApartmentsListing.tsx (${total} tarjetas → map, ${Math.round(file.length / 1024)} KB)`);
