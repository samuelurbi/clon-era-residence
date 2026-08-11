/**
 * Extrae los 25 apartamentos desde el JSON-LD de cada ficha descargada
 * y genera data/apartments.ts tipado, con rutas de assets ya locales.
 *
 *   node scripts/extract-apartments.mjs
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'referencia-web-original', 'apartments');
const manifest = JSON.parse(readFileSync(join(ROOT, 'scripts', 'asset-manifest.json'), 'utf8'));

/** URL remota -> ruta local de /public (o la propia URL si no se descargó). */
const localize = (url) => manifest[url?.split('#')[0]] ?? url ?? '';

/** Webflow genera variantes responsive `nombre-p-500.webp`; agrupamos por base. */
const baseName = (u) => u.replace(/-p-\d+(\.\w+)$/, '$1');

const files = readdirSync(DIR).filter(f => f.endsWith('.html')).sort();

/* --- Pasada 1: JSON-LD + inventario de imágenes por página --- */

const raw = [];
for (const file of files) {
  const code = file.replace('.html', '');
  const html = readFileSync(join(DIR, file), 'utf8');

  const m = html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/i);
  if (!m) { console.warn(`  ! sin JSON-LD: ${file}`); continue; }
  const ld = JSON.parse(m[1].trim());

  const title = (html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '').trim();
  const metaDesc = (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? '').trim();

  const images = new Set();
  for (const im of html.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^"'\s)]+?\.(?:webp|avif|jpg|png)/gi)) {
    images.add(baseName(im[0]));
  }

  raw.push({ code, ld, title, metaDesc, images });
}

/* --- Pasada 2: imágenes presentes en TODAS las fichas = chrome compartido --- */

const shared = new Set(
  [...raw[0].images].filter(img => raw.every(r => r.images.has(img)))
);
console.log(`Imágenes compartidas (nav/footer/comunes): ${shared.size}`);

/* --- Construir registros --- */

const prop = (ld, name) =>
  ld.additionalProperty?.find(p => p.name?.toLowerCase() === name.toLowerCase())?.value ?? '';

const apartments = raw.map(({ code, ld, title, metaDesc, images }) => {
  const layout = prop(ld, 'Layout');
  const hero = ld.image ?? '';

  const gallery = [...images]
    .filter(img => !shared.has(img) && baseName(img) !== baseName(layout) && baseName(img) !== baseName(hero))
    .sort()
    .map(localize);

  const area = prop(ld, 'Interior Area');
  // Los penthouses declaran un rango ("2-3"), no un número suelto.
  const beds = prop(ld, 'Bedrooms');
  const bedNums = (beds.match(/\d+/g) ?? []).map(Number);

  return {
    code,
    slug: code,
    name: ld.name ?? `Apartment №${code}`,
    description: ld.description ?? '',
    category: ld.category ?? '',
    series: Number(code[0]),
    block: prop(ld, 'Block'),
    blockNumber: Number(code[1]),
    bedroomsLabel: beds,
    bedroomsMin: bedNums[0] ?? 0,
    bedroomsMax: bedNums[bedNums.length - 1] ?? 0,
    interiorAreaSqm: Number(area.replace(/[^\d.]/g, '')) || 0,
    interiorAreaLabel: area,
    completion: prop(ld, 'Completion'),
    heroImage: localize(hero),
    layoutImage: localize(layout),
    gallery,
    seo: { title, description: metaDesc },
  };
});

/* --- Emitir data/apartments.ts --- */

const ts = `/**
 * Catálogo de apartamentos de ERA Residence.
 *
 * GENERADO por scripts/extract-apartments.mjs a partir del JSON-LD de las
 * fichas originales. Al personalizar el sitio, este fichero pasa a editarse
 * a mano (o a sustituirse por un CMS) — la firma de \`Apartment\` es el
 * contrato que consumen los componentes.
 */

export interface Apartment {
  /**
   * Código de 3 dígitos y slug de la ruta.
   * El 2º dígito es el bloque (verificado contra el campo \`Block\` en las 25
   * fichas). El 1º agrupa series de vivienda y el 3º es el número de unidad.
   */
  code: string;
  slug: string;
  name: string;
  description: string;
  /** Tipología: "Ground floor + basement" | "Ground Floor" | "Penthouse duplex" */
  category: string;
  /**
   * Primer dígito del código. Correlaciona con la tipología pero NO de forma
   * limpia (la serie 1 mezcla "Ground Floor" y "Penthouse duplex"), así que no
   * lo uses como planta hasta confirmarlo con el promotor.
   */
  series: number;
  /** Etiqueta del bloque: "B1" | "B2" | "B3". */
  block: string;
  blockNumber: number;
  /** Tal cual se muestra: "3" en pisos, "2-3" en los duplex. */
  bedroomsLabel: string;
  bedroomsMin: number;
  bedroomsMax: number;
  interiorAreaSqm: number;
  /** Etiqueta tal cual aparece en el sitio, p. ej. "132 m²". */
  interiorAreaLabel: string;
  completion: string;
  heroImage: string;
  /** Plano de la vivienda. */
  layoutImage: string;
  gallery: string[];
  seo: { title: string; description: string };
}

export const apartments: Apartment[] = ${JSON.stringify(apartments, null, 2)};

export const getApartment = (code: string): Apartment | undefined =>
  apartments.find((a) => a.code === code);

export const apartmentCodes = apartments.map((a) => a.code);

/** Agrupados por bloque (B1 · B2 · B3). */
export const apartmentsByBlock = apartments.reduce<Record<string, Apartment[]>>(
  (acc, a) => {
    (acc[a.block] ??= []).push(a);
    return acc;
  },
  {},
);

/** Agrupados por tipología. */
export const apartmentsByCategory = apartments.reduce<Record<string, Apartment[]>>(
  (acc, a) => {
    (acc[a.category] ??= []).push(a);
    return acc;
  },
  {},
);
`;

mkdirSync(join(ROOT, 'data'), { recursive: true });
writeFileSync(join(ROOT, 'data', 'apartments.ts'), ts, 'utf8');

/* --- Informe --- */
console.log(`\nApartamentos: ${apartments.length}\n`);
console.log('code  dorm   área     bloque  galería  categoría');
for (const a of apartments) {
  console.log(
    `${a.code}   ${a.bedroomsLabel.padEnd(5)} ${a.interiorAreaLabel.padEnd(8)} ${a.block.padEnd(6)}  ${String(a.gallery.length).padStart(2)}       ${a.category}`
  );
}

// El 2º dígito debería ser el número de bloque: si no cuadra, el esquema es otro.
const mismatched = apartments.filter(a => `B${a.blockNumber}` !== a.block);
console.log(
  mismatched.length
    ? `\n! El 2º dígito NO coincide con Block en: ${mismatched.map(a => a.code).join(', ')}`
    : `\n✓ El 2º dígito coincide con el bloque en las ${apartments.length} fichas.`
);

const missing = apartments.filter(a => !a.layoutImage || !a.heroImage || !a.bedroomsMin || !a.gallery.length);
if (missing.length) console.log(`! Revisar (campos vacíos): ${missing.map(a => a.code).join(', ')}`);
else console.log('✓ Sin campos vacíos.');
console.log('\n-> data/apartments.ts');
