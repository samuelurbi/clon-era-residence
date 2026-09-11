/* ============================================================
 *  Auditor de assets del árbol de Vibe.
 *
 *  Dentro de Vibe, una imagen que no carga es un **404 mudo**: no hay
 *  error en consola ni aviso de build, el hueco se queda vacío y solo se
 *  descubre mirando 31 rutas a ojo, sección por sección.
 *
 *  Comprueba las DOS direcciones, que fallan por motivos distintos:
 *
 *    A. Cada fichero de `public/` responde en el host, con el
 *       content-type correcto.  -> falla si la subida salió mal.
 *    B. Cada ruta referenciada en el código existe en `public/`.
 *       -> falla si el port arrastró un enlace roto del original.
 *
 *  La comprobación B se hace contra el disco, no contra el servidor:
 *  así detecta el enlace roto aunque los assets no estén subidos todavía,
 *  y no depende de que un regex adivine dónde acaba una URL (los nombres
 *  con espacios y paréntesis hacían fracasar ese enfoque).
 *
 *  Uso:
 *    node scripts/audit-vibe-assets.mjs           # A + B
 *    node scripts/audit-vibe-assets.mjs --local   # solo B, sin red
 * ============================================================ */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = join(ROOT, 'public');

const ASSET_BASE = (process.env.ASSET_BASE || 'https://puntacanadinnerinthesky.com/urbatrix/era').replace(/\/+$/, '');
const ASSET_SEP = process.env.ASSET_SEP || '%5C';
const LOCAL_ONLY = process.argv.includes('--local');

/** Carpetas de `public/` que el sitio referencia. */
const ASSET_DIRS = ['images', 'videos', 'documents', 'icons'];

/** Dónde se buscan referencias (la fuente de verdad, no el árbol generado). */
const SOURCE_DIRS = ['components', 'lib', 'data', 'styles', 'app'];

const CONCURRENCY = 12;

const EXPECTED = {
  webp: 'image/webp', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
  avif: 'image/avif', svg: 'image/svg+xml', pdf: 'application/pdf',
  webm: 'video/webm', mov: 'video/quicktime', mp4: 'video/mp4', json: 'application/json',
};

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/* ================================================================
 *  B. Referencias del código -> ¿existe el fichero?
 * ================================================================ */

/*
 * Se captura desde `/carpeta/` hasta la siguiente comilla, backtick o
 * paréntesis de cierre — SIN cortar en el espacio, porque hay ficheros
 * que lo llevan en el nombre (`114apt merged.pdf`, `Unreal logo.svg`).
 * Lo capturado puede ser un srcset entero; se trocea después.
 */
/*
 * El paréntesis SOLO corta en CSS, donde envuelve la ruta (`url(...)`).
 * En el marcado forma parte de nombres reales —
 * `terms_of_use_era_residence (1).pdf` — y cortar ahí trunca la ruta y
 * hace ilegible el informe justo cuando hay un enlace roto que arreglar.
 */
const REF_RE_CODE = new RegExp(`/(?:${ASSET_DIRS.join('|')})/[^"'\`\\n]*`, 'g');
const REF_RE_CSS = new RegExp(`/(?:${ASSET_DIRS.join('|')})/[^"'\`)\\n]*`, 'g');

const refs = new Map(); // ruta -> [archivos donde aparece]
let dynamic = 0;

for (const dir of SOURCE_DIRS) {
  const from = join(ROOT, dir);
  if (!existsSync(from)) continue;

  for (const file of walk(from)) {
    const ext = file.slice(file.lastIndexOf('.'));
    if (!['.ts', '.tsx', '.css'].includes(ext)) continue;
    const text = readFileSync(file, 'utf8');

    for (const match of text.matchAll(ext === '.css' ? REF_RE_CSS : REF_RE_CODE)) {
      // Un srcset trae varios candidatos separados por coma.
      for (let candidate of match[0].split(',')) {
        // Quitar el descriptor de ancho del srcset (`800w`) y espacios.
        candidate = candidate.trim().replace(/\s+\d+[wx]$/, '').trim();
        if (!candidate.startsWith('/')) continue;

        // Rutas construidas en runtime: no se pueden resolver estáticamente.
        if (candidate.includes('${')) { dynamic += 1; continue; }

        if (!refs.has(candidate)) refs.set(candidate, []);
        refs.get(candidate).push(relative(ROOT, file));
      }
    }
  }
}

const missing = [];
for (const [ref, where] of refs) {
  // Las rutas del marcado vienen URL-encoded (`%20`), el disco no.
  const onDisk = join(PUBLIC, decodeURIComponent(ref));
  if (!existsSync(onDisk)) missing.push({ ref, where: [...new Set(where)] });
}

console.log(`\n  B. Referencias del código`);
console.log(`  ${'-'.repeat(52)}`);
console.log(`  referencias únicas   ${refs.size}`);
console.log(`  construidas en runtime (no verificables)  ${dynamic}`);
console.log(`  ✗ apuntan a un fichero que NO existe      ${missing.length}`);
for (const m of missing) {
  console.log(`\n    ${m.ref}`);
  for (const w of m.where) console.log(`      en ${w}`);
}

/* ================================================================
 *  A. Ficheros de public/ -> ¿responden en el host?
 * ================================================================ */

if (LOCAL_ONLY) {
  console.log(`\n  (A omitida: --local)\n`);
  process.exitCode = missing.length ? 1 : 0;
} else {
  const files = [];
  for (const dir of ASSET_DIRS) {
    const from = join(PUBLIC, dir);
    if (!existsSync(from)) continue;
    for (const f of walk(from)) {
      const rel = relative(from, f).split(/[\\/]/).map(encodeURIComponent).join('/');
      files.push({ rel: `${dir}/${relative(from, f).replace(/\\/g, '/')}`, url: `${ASSET_BASE}/${dir}${ASSET_SEP}${rel}` });
    }
  }

  console.log(`\n  A. Ficheros en el host  (${files.length})`);
  console.log(`  ${'-'.repeat(52)}`);

  const bad = [];
  const queue = [...files];

  async function check({ rel, url }) {
    try {
      let res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
      if (res.status === 405 || res.status === 501) {
        res = await fetch(url, { method: 'GET', headers: { Range: 'bytes=0-0' }, redirect: 'manual' });
      }
      const type = (res.headers.get('content-type') || '').split(';')[0].trim();
      const want = EXPECTED[rel.slice(rel.lastIndexOf('.') + 1).toLowerCase()];

      if (res.status < 200 || res.status >= 300) bad.push({ rel, problema: `código ${res.status}` });
      else if (want && type !== want) bad.push({ rel, problema: `content-type ${type || '(vacío)'} — se esperaba ${want}` });
    } catch (err) {
      bad.push({ rel, problema: `sin respuesta (${err.message})` });
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, queue.length) }, async () => {
      while (queue.length) await check(queue.shift());
    }),
  );

  console.log(`  correctos     ${files.length - bad.length}`);
  console.log(`  con problema  ${bad.length}`);

  /* Agrupado por problema: 7 vídeos con el mismo content-type mal son UN
     fallo de configuración del servidor, no siete. */
  const byProblem = new Map();
  for (const b of bad) {
    if (!byProblem.has(b.problema)) byProblem.set(b.problema, []);
    byProblem.get(b.problema).push(b.rel);
  }
  for (const [problema, items] of byProblem) {
    console.log(`\n  ✗ ${problema}  (${items.length})`);
    for (const i of items.slice(0, 5)) console.log(`      ${i}`);
    if (items.length > 5) console.log(`      … y ${items.length - 5} más`);
  }

  if (!bad.length) console.log(`\n  ✓ los ${files.length} responden con el content-type correcto`);
  console.log('');
  process.exitCode = bad.length || missing.length ? 1 : 0;
}
