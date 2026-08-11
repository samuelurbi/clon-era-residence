/**
 * Extrae los datos que muestra la TARJETA de apartamento, tal cual salen en
 * el listado original.
 *
 * No se derivan de `data/apartments.ts` a propósito: la tarjeta enseña
 * cifras que no coinciden con las de la ficha (p. ej. el 011 muestra
 * "29 M² Terrace" en el listado y "46 M²" en su ficha, que son superficies
 * distintas). Copiarlas de un sitio al otro habría falseado el listado.
 *
 *   node scripts/extract-apartment-cards.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { parse } from 'node-html-parser';

const SRC = 'referencia-web-original/apartments.html';
const OUT = 'data/apartment-cards.ts';
const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));

const localFor = (url) => {
  if (!url) return null;
  const clean = url.replace(/&amp;/g, '&');
  if (manifest[clean]) return manifest[clean];
  const file = clean.split('/').pop()?.split('?')[0];
  const hit = Object.entries(manifest).find(([k]) => k.endsWith(file));
  return hit ? hit[1] : `/images/${file}`;
};

const root = parse(readFileSync(SRC, 'utf8'));
const cards = [];

for (const item of root.querySelectorAll('.apart-cms_list_item')) {
  const link = item.querySelector('a[href^="/apartments/"]');
  if (!link) continue;

  const code = (link.getAttribute('href') || '').split('/').pop();
  if (!code) continue;

  /** Los pares etiqueta/valor van en <span> consecutivos. */
  const spans = item.querySelectorAll('span').map((s) => s.text.replace(/\s+/g, ' ').trim());
  const after = (label) => {
    const i = spans.findIndex((s) => s.toLowerCase() === label.toLowerCase());
    return i >= 0 ? spans[i + 1] ?? null : null;
  };
  const before = (label) => {
    const i = spans.findIndex((s) => s.toLowerCase() === label.toLowerCase());
    return i > 0 ? spans[i - 1] ?? null : null;
  };

  const category = item.querySelector('.l2')?.text.replace(/\s+/g, ' ').trim() ?? null;
  const img = item.querySelector('img');

  /*
   * Atributos con los que filtra y ordena el listado. NO son decorativos:
   * si se dejan con el valor de una sola vivienda, los filtros dejan de
   * descartar nada y el listado siempre muestra las 25.
   */
  const dataAttr = (name) => {
    const el = item.querySelector(`[data-${name}]`);
    return el ? el.getAttribute(`data-${name}`) : null;
  };

  cards.push({
    code,
    href: link.getAttribute('href'),
    category,
    completion: after('Completion:'),
    block: after('Block'),
    // "0" precede a "floor", "3" precede a "bed"
    floor: before('floor'),
    bedrooms: before('bed'),
    // El área es el span que lleva "m²" en minúscula; la terraza, "M²".
    area: spans.find((s) => /^\d+\s*m²$/.test(s)) ?? null,
    terrace: spans.find((s) => /^[\d-]+\s*M²$/.test(s)) ?? null,
    image: img ? localFor(img.getAttribute('src')) : null,
    filterType: dataAttr('type'),
    filterBed: dataAttr('bed'),
    sortArea: dataAttr('sort-area'),
    sortRelevant: dataAttr('sort-relevant'),
    imageSrcset: img?.getAttribute('srcset')
      ? img
          .getAttribute('srcset')
          .split(',')
          .map((p) => {
            const [u, ...rest] = p.trim().split(/\s+/);
            return [localFor(u), ...rest].join(' ');
          })
          .join(', ')
      : null,
  });
}

const body = `/**
 * GENERADO por scripts/extract-apartment-cards.mjs — no editar a mano.
 *
 * Lo que muestra la tarjeta de apartamento en el listado, copiado literal
 * del original. Ojo: algunas cifras NO coinciden con las de la ficha del
 * mismo apartamento (la terraza, por ejemplo), así que no se derivan de
 * data/apartments.ts.
 */

export interface ApartmentCardData {
  code: string;
  href: string;
  category: string | null;
  completion: string | null;
  block: string | null;
  floor: string | null;
  bedrooms: string | null;
  area: string | null;
  terrace: string | null;
  /** Valores por los que filtra y ordena el listado. */
  filterType: string | null;
  filterBed: string | null;
  sortArea: string | null;
  sortRelevant: string | null;
  image: string | null;
  imageSrcset: string | null;
}

export const apartmentCards: ApartmentCardData[] = ${JSON.stringify(cards, null, 2)};
`;

writeFileSync(OUT, body);

const completos = cards.filter((c) => c.category && c.area && c.bedrooms && c.image).length;
console.log(`${OUT}: ${cards.length} tarjetas (${completos} con todos los campos clave)`);
if (cards[0]) console.log('  muestra:', JSON.stringify(cards[0]).slice(0, 190));
