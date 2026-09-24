/* ============================================================
 *  Generador del gemelo Vite para GoHighLevel Vibe.
 *
 *  Vibe es un editor de sitios por CÓDIGO dentro de GoHighLevel, pero
 *  el proyecto que hospeda es **React + Vite**, no Next.js. Este script
 *  produce, a partir del repo, un árbol Vite equivalente en `vibe/src/`
 *  que es EXACTAMENTE lo que se pega en el editor de Vibe.
 *
 *  Por qué generarlo y no mantener dos copias: el repo ya funciona así
 *  («los componentes se generan, no se copian»). La fuente de verdad
 *  sigue siendo `components/`, `lib/`, `data/` y `styles/`; aquí abajo
 *  solo se aplican las tres diferencias que Vibe impone:
 *
 *    1. `next/navigation` no existe  ->  se reapunta al shim sobre
 *       React Router (`@/shims/next-navigation`).
 *    2. No hay `public/`: Vibe no aloja binarios. Las 402 rutas de
 *       assets se prefijan con la base HTTPS externa (ASSET_BASE).
 *    3. Cabecera de procedencia, para que quede claro dentro de GHL
 *       que el archivo se regenera desde el repo.
 *
 *  Uso:
 *    node scripts/vibe-export.mjs                  # verificación local
 *    ASSET_BASE=https://cdn.ejemplo.com/era \
 *      node scripts/vibe-export.mjs                # árbol para pegar
 *
 *  Sin ASSET_BASE las rutas quedan tal cual (`/images/…`), que es lo
 *  que necesita el `npm run dev` local: `vite.config.ts` apunta
 *  `publicDir` al `public/` del repo, así que los assets se sirven
 *  igual que en Next. Esa es la prueba de fuego ANTES de tocar GHL.
 * ============================================================ */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'vibe', 'src');

/**
 * Base pública de los assets. Vacía = rutas relativas al dominio, que es
 * lo correcto en local. En Vibe hay que darle la URL absoluta del host
 * externo, SIN barra final.
 */
const ASSET_BASE = (process.env.ASSET_BASE || '').replace(/\/+$/, '');

/**
 * Separador entre la carpeta y el nombre del fichero en el host de assets.
 *
 * Debería ser siempre `/`. Es `%5C` (una barra invertida codificada) por un
 * accidente que conviene entender antes de "arreglarlo":
 *
 * El ZIP de la primera subida se hizo con `Compress-Archive` de Windows
 * PowerShell, que escribe los nombres de entrada con `\` — viola la
 * especificación ZIP, que exige `/`. Al descomprimir en el LiteSpeed de
 * Hostinger no se crearon carpetas: se crearon 365 ficheros llamados
 * literalmente `images\foo.webp`. Se sirven bien (200 y content-type
 * correcto, SVG y PDF incluidos), así que se tira con ello.
 *
 * DEUDA CONOCIDA: si algún día entra un CDN o proxy por delante, muchos
 * normalizan `%5C` a `/` y las 641 URLs caen a la vez. El arreglo es subir
 * `era-assets-v2.zip` (ya generado, con los nombres correctos) y regenerar
 * SIN esta variable.
 */
const ASSET_SEP = process.env.ASSET_SEP || '/';

/**
 * Carpetas que se copian tal cual desde el repo. Se BORRAN y se
 * rehacen en cada pasada: nunca edites nada dentro de ellas en
 * `vibe/src/`, se pierde. Lo escrito a mano vive fuera (ver ORPHANS).
 */
const MIRRORED = ['components', 'lib', 'data', 'styles', 'types'];

/**
 * Lo que NO toca este script dentro de `vibe/src/`: el cascarón que
 * sustituye a `app/` de Next (entrada, rutas, shims, páginas).
 */
const HANDWRITTEN = ['main.tsx', 'App.tsx', 'shims', 'pages', 'fonts.css', 'vite-env.d.ts'];

/** Carpetas de `public/` cuyas rutas hay que prefijar con ASSET_BASE. */
const ASSET_DIRS = ['images', 'videos', 'documents', 'icons', 'lottie', 'misc'];

/*
 * Un asset solo se reescribe si delante lleva un carácter que garantiza
 * que la ruta EMPIEZA ahí: comilla, backtick, paréntesis, `=`, espacio,
 * coma o principio de línea. Es lo que distingue `src="/images/x.webp"`
 * y los `srcSet` (que separan candidatos con `, /images/…`) de una URL
 * absoluta ajena tipo `https://cdn.otro.com/images/x.webp`, que NO debe
 * tocarse. Ver la comprobación de fugas al final.
 */
const ASSET_RE = new RegExp(`(^|[\\s"'\`(,=])/(${ASSET_DIRS.join('|')})/`, 'gm');

const BANNER_JS = [
  '/* GENERADO por scripts/vibe-export.mjs — no editar aquí.',
  ' * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */',
  '',
].join('\n');

const BANNER_CSS = [
  '/* GENERADO por scripts/vibe-export.mjs — no editar aquí.',
  '   La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */',
  '',
].join('\n');

/* ---------------------------------------------------------------- */

let files = 0;
let assetHits = 0;
let navHits = 0;

/** Recorre un directorio devolviendo rutas absolutas de todos sus archivos. */
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

/** Aplica las tres transformaciones a un archivo de texto. */
function transform(source, ext) {
  let out = source;

  // 1. next/navigation -> shim sobre React Router.
  const nav = out.match(/from 'next\/navigation'/g);
  if (nav) {
    navHits += nav.length;
    out = out.replace(/from 'next\/navigation'/g, "from '@/shims/next-navigation'");
  }

  // 2. Rutas de assets -> host externo. Sin ASSET_BASE no se toca nada.
  if (ASSET_BASE) {
    out = out.replace(ASSET_RE, (_m, pre, dir) => {
      assetHits += 1;
      return `${pre}${ASSET_BASE}/${dir}${ASSET_SEP}`;
    });
  }

  // 3. Cabecera de procedencia.
  return (ext === '.css' ? BANNER_CSS : BANNER_JS) + out;
}

/* --- Copia de las carpetas espejo -------------------------------- */

for (const dir of MIRRORED) {
  const from = join(ROOT, dir);
  const to = join(OUT, dir);

  rmSync(to, { recursive: true, force: true });

  for (const file of walk(from)) {
    const ext = file.slice(file.lastIndexOf('.'));
    const dest = join(to, relative(from, file));
    mkdirSync(dirname(dest), { recursive: true });

    if (['.ts', '.tsx', '.css'].includes(ext)) {
      writeFileSync(dest, transform(readFileSync(file, 'utf8'), ext));
    } else {
      // Cualquier otra cosa (json, d.ts sueltos…) se copia verbatim.
      writeFileSync(dest, readFileSync(file));
    }
    files += 1;
  }
}

/* --- index.html --------------------------------------------------- */

/*
 * El `index.html` también lleva rutas de asset (favicons y la imagen de
 * Open Graph), y esas NO pasan por el bundler: se renderiza desde una
 * plantilla para que la base entre por el mismo sitio que en el código
 * y no haya que acordarse de cambiarla a mano en dos lugares.
 */
const template = join(ROOT, 'vibe', 'index.template.html');
const indexOut = join(ROOT, 'vibe', 'index.html');
let html = readFileSync(template, 'utf8').replaceAll('{{ASSET_BASE}}', ASSET_BASE);

/* La plantilla escribe las rutas con `/`; si el host usa otro separador,
   se aplica aquí también — anclando en la base ya sustituida, para no tocar
   ninguna otra barra del documento (las de las URLs de Google Fonts, p.ej.). */
if (ASSET_BASE && ASSET_SEP !== '/') {
  for (const dir of ASSET_DIRS) {
    html = html.replaceAll(`${ASSET_BASE}/${dir}/`, `${ASSET_BASE}/${dir}${ASSET_SEP}`);
  }
}
writeFileSync(indexOut, html);
files += 1;

/* --- Comprobación de fugas --------------------------------------- */

/*
 * Con ASSET_BASE puesta, NINGUNA ruta de asset puede haber quedado sin
 * prefijar: dentro de Vibe una ruta `/images/…` es un 404 silencioso —
 * la imagen simplemente no aparece y no hay error en consola que lo
 * delate. Por eso se cuenta, no se mira a ojo.
 */
const leaks = [];
if (ASSET_BASE) {
  for (const file of walk(OUT)) {
    const ext = file.slice(file.lastIndexOf('.'));
    if (!['.ts', '.tsx', '.css'].includes(ext)) continue;
    const text = readFileSync(file, 'utf8');
    for (const dir of ASSET_DIRS) {
      // Una barra + carpeta de asset que NO vaya precedida de la base.
      const re = new RegExp(`(?<!${ASSET_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})/${dir}/`, 'g');
      const found = text.match(re);
      if (found) leaks.push(`${relative(ROOT, file)}: ${found.length}× /${dir}/`);
    }
  }
}

/* --- Informe ------------------------------------------------------ */

console.log(`\n  vibe-export`);
console.log(`  ${'-'.repeat(46)}`);
console.log(`  archivos generados   ${files}`);
console.log(`  imports reapuntados  ${navHits}  (next/navigation -> shim)`);
console.log(`  base de assets       ${ASSET_BASE || '(ninguna — modo local)'}`);
if (ASSET_BASE) console.log(`  rutas prefijadas     ${assetHits}`);
if (ASSET_SEP !== '/') console.log(`  separador            ${ASSET_SEP}  ⚠ deuda: ver comentario en este script`);
console.log(`  a mano, intactos     ${HANDWRITTEN.join(', ')}`);

if (leaks.length) {
  console.log(`\n  ⚠  ${leaks.length} archivo(s) con rutas de asset SIN prefijar:`);
  for (const l of leaks.slice(0, 20)) console.log(`     ${l}`);
  process.exitCode = 1;
} else if (ASSET_BASE) {
  console.log(`\n  ✓ sin fugas: ninguna ruta de asset quedó relativa`);
}
console.log('');
