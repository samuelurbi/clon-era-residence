/**
 * Extrae de las fichas originales los campos que `extract-apartments.mjs` no
 * recogió y que sí varían entre apartamentos.
 *
 * Se escriben en un módulo aparte en vez de reabrir `data/apartments.ts`:
 * ese fichero ya está generado y validado, y mezclarlos aquí obligaría a
 * regenerarlo entero por cuatro campos.
 *
 *   node scripts/extract-apartment-extras.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'node-html-parser';

const REF = 'referencia-web-original/apartments';
const OUT = 'data/apartment-extras.ts';
const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));

const localFor = (url) => {
  if (!url) return null;
  const clean = url.replace(/&amp;/g, '&');
  if (manifest[clean]) return manifest[clean];
  const file = clean.split('/').pop()?.split('?')[0];
  const hit = Object.entries(manifest).find(([k]) => k.endsWith(file));
  return hit ? hit[1] : null;
};

const extras = {};

for (const file of readdirSync(REF).filter((f) => f.endsWith('.html'))) {
  const code = file.replace('.html', '');
  const html = readFileSync(join(REF, file), 'utf8');
  const root = parse(html);

  // Rotación de la rosa de los vientos: va en un <style> incrustado.
  const compass = /\.compass\s*\{\s*rotate:\s*(-?[\d.]+)deg/.exec(html);

  // Terraza: la etiqueta viene como "46 M²" junto al literal "Terrace".
  let terrace = null;
  for (const el of root.querySelectorAll('*')) {
    const text = el.text.replace(/\s+/g, ' ').trim();
    const m = /^\+?\s*(-|\d+)\s*M²\s*Terrace$/i.exec(text);
    if (m) {
      terrace = m[1];
      break;
    }
  }

  // Diagrama del bloque (SVG) y PDF descargable.
  const diagram = root.querySelectorAll('img').find((i) => /diagram_block/.test(i.getAttribute('src') || ''));
  const pdf = root.querySelectorAll('a').find((a) => /\.pdf$/i.test(a.getAttribute('href') || ''));

  extras[code] = {
    compassDeg: compass ? Number(compass[1]) : null,
    terraceLabel: terrace,
    blockDiagram: diagram ? localFor(diagram.getAttribute('src')) : null,
    brochure: pdf ? localFor(pdf.getAttribute('href')) ?? pdf.getAttribute('href') : null,
  };
}

const body = `/**
 * GENERADO por scripts/extract-apartment-extras.mjs — no editar a mano.
 *
 * Campos por apartamento que viven sólo en el marcado de su ficha:
 * la rotación de la rosa de los vientos, la superficie de terraza, el
 * diagrama del bloque y el PDF descargable.
 */

export interface ApartmentExtras {
  /** Grados de rotación de la brújula del plano. */
  compassDeg: number | null;
  /** Etiqueta de terraza tal cual se muestra; "-" cuando no tiene. */
  terraceLabel: string | null;
  blockDiagram: string | null;
  brochure: string | null;
}

export const apartmentExtras: Record<string, ApartmentExtras> = ${JSON.stringify(extras, null, 2)};
`;

writeFileSync(OUT, body);

const conCompas = Object.values(extras).filter((e) => e.compassDeg !== null).length;
const conTerraza = Object.values(extras).filter((e) => e.terraceLabel !== null).length;
const conPdf = Object.values(extras).filter((e) => e.brochure).length;
const conDiagrama = Object.values(extras).filter((e) => e.blockDiagram).length;

console.log(`${OUT}: ${Object.keys(extras).length} apartamentos`);
console.log(`  compás ${conCompas} · terraza ${conTerraza} · diagrama ${conDiagrama} · PDF ${conPdf}`);
