/**
 * Descarga todos los assets remotos de era-residence a /public y genera
 * un manifiesto (URL original -> ruta local) para reescribir CSS y componentes.
 *
 *   node scripts/download-assets.mjs
 */
import { mkdirSync, writeFileSync, readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, extname, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REF = join(ROOT, 'referencia-web-original');
const PUBLIC = join(ROOT, 'public');
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36';

// Hosts cuyos assets rehospedamos. El resto (libs CDN, redes sociales) se queda fuera.
const ASSET_HOSTS = new Set([
  'cdn.prod.website-files.com',
  'assets.era-residence.com',
  'pub-157506367d4c4fa1825d7a6d26b687a2.r2.dev',
]);

const FOLDER_BY_EXT = {
  '.webp': 'images', '.png': 'images', '.jpg': 'images', '.jpeg': 'images',
  '.avif': 'images', '.svg': 'images', '.gif': 'images', '.ico': 'images',
  '.mp4': 'videos', '.webm': 'videos', '.mov': 'videos',
  '.woff2': 'fonts', '.woff': 'fonts', '.ttf': 'fonts', '.otf': 'fonts',
  '.json': 'lottie',
  '.pdf': 'documents',
};

/* ---------- 1. Recolectar URLs de todos los HTML + el CSS ---------- */

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (/\.(html?|css)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

const found = new Set();

for (const file of walk(REF)) {
  const txt = readFileSync(file, 'utf8');

  const push = (raw) => {
    if (!raw) return;
    let u = raw.trim().replace(/^['"]|['"]$/g, '').replace(/&amp;/g, '&');
    if (!u.startsWith('http')) return;
    let host;
    try { host = new URL(u).host; } catch { return; }
    if (ASSET_HOSTS.has(host)) found.add(u.split('#')[0]);
  };

  for (const m of txt.matchAll(/https?:\/\/[^"'`)\s\\<>]+/g)) push(m[0]);
  for (const m of txt.matchAll(/url\(\s*([^)]+?)\s*\)/g)) push(m[1]);
  for (const m of txt.matchAll(/srcset\s*=\s*"([^"]+)"/g))
    for (const part of m[1].split(',')) push(part.trim().split(/\s+/)[0]);
}

console.log(`URLs de assets encontradas: ${found.size}\n`);

/* ---------- 2. Asignar ruta local, evitando colisiones ---------- */

const HASH_PREFIX = /^[0-9a-f]{16,32}_/i; // Webflow antepone el id del asset
const taken = new Map(); // ruta local -> url origen
const manifest = {};

for (const url of [...found].sort()) {
  const { pathname } = new URL(url);
  const ext = (extname(pathname) || '').toLowerCase();
  const folder = FOLDER_BY_EXT[ext] ?? 'misc';

  let name = decodeURIComponent(basename(pathname)) || 'asset';
  const clean = name.replace(HASH_PREFIX, '');

  // Preferimos el nombre legible; si ya está cogido, caemos al nombre con hash.
  let local = `${folder}/${clean}`;
  if (taken.has(local) && taken.get(local) !== url) local = `${folder}/${name}`;
  let n = 2;
  while (taken.has(local) && taken.get(local) !== url) {
    local = `${folder}/${clean.replace(/(\.[^.]+)$/, `-${n++}$1`)}`;
  }

  taken.set(local, url);
  manifest[url] = `/${local}`;
}

/* ---------- 3. Descargar ---------- */

for (const folder of new Set(Object.values(manifest).map(p => p.split('/')[1]))) {
  mkdirSync(join(PUBLIC, folder), { recursive: true });
}

const entries = Object.entries(manifest);
let ok = 0, skip = 0, fail = 0, bytes = 0;
const failures = [];
const LIMIT = 8;

async function fetchOne([url, local]) {
  const dest = join(PUBLIC, local.slice(1));

  if (existsSync(dest) && statSync(dest).size > 0) {
    skip++; bytes += statSync(dest).size; return;
  }

  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      writeFileSync(dest, buf);
      ok++; bytes += buf.length;
      if ((ok + skip) % 25 === 0) console.log(`  ... ${ok + skip}/${entries.length}`);
      return;
    } catch (e) {
      if (attempt === 3) { fail++; failures.push(`${url} -> ${e.message}`); }
      else await new Promise(r => setTimeout(r, 600 * attempt));
    }
  }
}

const queue = [...entries];
await Promise.all(Array.from({ length: LIMIT }, async () => {
  while (queue.length) await fetchOne(queue.shift());
}));

writeFileSync(join(ROOT, 'scripts', 'asset-manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');

const mb = (bytes / 1024 / 1024).toFixed(1);
console.log(`\n--- Resumen ---`);
console.log(`Descargados : ${ok}`);
console.log(`Ya existían : ${skip}`);
console.log(`Fallidos    : ${fail}`);
console.log(`Peso total  : ${mb} MB`);
if (failures.length) {
  console.log(`\nFallos:`);
  for (const f of failures) console.log(`  ${f}`);
}
console.log(`\nManifiesto -> scripts/asset-manifest.json`);
