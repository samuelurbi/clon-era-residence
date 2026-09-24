/* ============================================================
 *  Copia al portapapeles el archivo que toca pegar en Vibe.
 *
 *  Pegar 13 archivos a mano tiene un paso tonto pero costoso: abrir el
 *  archivo correcto en el editor local, seleccionar todo, copiar, y no
 *  perder la cuenta de por cuál ibas. Esto lo quita: pides el número, se
 *  copia solo, y te dice cuál es el siguiente.
 *
 *  ACTUALIZAR lo que ya está subido
 *
 *  El primer pegado son 13 archivos; a partir de ahí ya no. Un cambio en
 *  el repo suele tocar uno o dos bundles, y repegar los 13 «por si acaso»
 *  es media hora tirada y trece ocasiones más de que la IA de Vibe toque
 *  algo. Por eso al marcar `--ok` se guarda el sha256 de lo que se pegó;
 *  `--cambios` compara el bundle recién generado contra esa huella y dice
 *  SOLO lo que hay que volver a pegar. El ciclo de actualización es:
 *
 *    node scripts/vibe-export.mjs && node scripts/vibe-bundle.mjs
 *    node scripts/vibe-copiar.mjs --cambios
 *
 *  Uso:
 *    node scripts/vibe-copiar.mjs            lista los 13 con su estado
 *    node scripts/vibe-copiar.mjs --cambios  solo lo que difiere de lo subido
 *    node scripts/vibe-copiar.mjs 5          copia el nº 5 al portapapeles
 *    node scripts/vibe-copiar.mjs 5 --ok     marca el 5 como pegado
 *    node scripts/vibe-copiar.mjs --reset    olvida qué hay subido
 *
 *  La huella se guarda en vibe-bundle/.pegado.json (ignorado por git).
 * ============================================================ */

import { readFileSync, writeFileSync, existsSync, statSync, unlinkSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLE = join(ROOT, 'vibe-bundle');
const SNAPSHOT = join(BUNDLE, '.pegado.json');
const PROGRESO = join(BUNDLE, '.progreso'); // formato viejo: solo se migra

/** El orden es el del manifiesto: dependencias antes que dependientes. */
const ORDEN = [
  { ruta: 'index.html', nota: 'meta, Open Graph, favicons, tipografías y GTM', existe: true },
  { ruta: 'src/site.css', nota: 'las 5 capas de CSS del port, en orden de cascada' },
  { ruta: 'src/fonts.css', nota: 'las tres variables de tipografía' },
  { ruta: 'src/shims.ts', nota: 'sustituye next/navigation y el metadata de Next' },
  { ruta: 'src/data.ts', nota: 'las 25 fichas, tarjetas, extras e imágenes de CTA' },
  { ruta: 'src/types/webflow-attributes.d.ts', nota: 'atributos data-* de Webflow' },
  { ruta: 'src/animations.ts', nota: 'los 20 módulos de GSAP + Lenis' },
  { ruta: 'src/components-layout.tsx', nota: 'cabecera, modales, preloader, providers' },
  { ruta: 'src/components-home.tsx', nota: 'las 11 secciones de la home' },
  { ruta: 'src/components-pages.tsx', nota: 'apartamentos, secciones compartidas, contacto' },
  { ruta: 'src/pages.tsx', nota: 'las 5 rutas y la 404' },
  { ruta: 'src/App.tsx', nota: 'el layout y el árbol de rutas', existe: true },
  { ruta: 'src/main.tsx', nota: 'el punto de entrada', existe: true },
];

/* --- Huellas ------------------------------------------------------- */

/** sha256 del bundle en disco, o null si todavía no se ha generado. */
function huella(ruta) {
  const archivo = join(BUNDLE, ruta);
  if (!existsSync(archivo)) return null;
  return createHash('sha256').update(readFileSync(archivo)).digest('hex');
}

/**
 * Qué hay pegado en Vibe ahora mismo, por huella.
 *
 * Si solo existe el `.progreso` de la primera tanda —números sueltos, sin
 * huella— se migra: los bundles que hay en disco SON los que se pegaron,
 * así que se sellan con su hash actual y desde ahí el diff ya funciona.
 */
function leerSubido() {
  if (existsSync(SNAPSHOT)) return JSON.parse(readFileSync(SNAPSHOT, 'utf8'));
  if (!existsSync(PROGRESO)) return {};

  const subido = {};
  for (const n of readFileSync(PROGRESO, 'utf8').split('\n').filter(Boolean).map(Number)) {
    const item = ORDEN[n - 1];
    if (!item) continue;
    const h = huella(item.ruta);
    if (h) subido[item.ruta] = h;
  }
  writeFileSync(SNAPSHOT, JSON.stringify(subido, null, 2));
  console.log(`\n  (migrado el progreso antiguo: ${Object.keys(subido).length} archivos sellados)`);
  return subido;
}

/** 'sin-generar' | 'nunca' | 'al-dia' | 'cambiado' */
function estado(item, subido) {
  const h = huella(item.ruta);
  if (!h) return 'sin-generar';
  if (!subido[item.ruta]) return 'nunca';
  return subido[item.ruta] === h ? 'al-dia' : 'cambiado';
}

const MARCA = { 'al-dia': '✓', cambiado: '●', nunca: ' ', 'sin-generar': '?' };

/* --- Comandos ------------------------------------------------------ */

const args = process.argv.slice(2);

if (args.includes('--reset')) {
  for (const f of [SNAPSHOT, PROGRESO]) if (existsSync(f)) unlinkSync(f);
  console.log('\n  olvidado lo que había subido\n');
  process.exit(0);
}

const subido = leerSubido();
const numero = args.find((a) => /^\d+$/.test(a));

/* --- Marcar como pegado -------------------------------------------- */

if (numero && args.includes('--ok')) {
  const item = ORDEN[Number(numero) - 1];
  if (!item) {
    console.error(`\n  No existe el nº ${numero}. Van del 1 al ${ORDEN.length}.\n`);
    process.exit(1);
  }
  const h = huella(item.ruta);
  if (!h) {
    console.error(`\n  Falta ${item.ruta}. ¿Has corrido scripts/vibe-bundle.mjs?\n`);
    process.exit(1);
  }
  subido[item.ruta] = h;
  writeFileSync(SNAPSHOT, JSON.stringify(subido, null, 2));
  console.log(`\n  ✓ nº ${numero} al día en Vibe`);
}

/* --- Solo lo que hay que actualizar -------------------------------- */

if (args.includes('--cambios')) {
  const pendientes = ORDEN
    .map((item, i) => ({ item, n: i + 1, e: estado(item, subido) }))
    .filter(({ e }) => e === 'cambiado' || e === 'nunca');

  if (!pendientes.length) {
    console.log('\n  ✓ Vibe está al día: ningún bundle cambió desde el último pegado.\n');
    process.exit(0);
  }

  console.log(`\n  ${pendientes.length} archivo(s) por actualizar en Vibe`);
  console.log('  ' + '-'.repeat(62));
  for (const { item, n, e } of pendientes) {
    const etiqueta = e === 'nunca' ? 'nunca pegado' : 'cambiado';
    console.log(`  ${MARCA[e]} ${String(n).padStart(2)}. ${item.ruta.padEnd(36)} ${etiqueta}`);
  }
  console.log('  ' + '-'.repeat(62));
  console.log(`\n  Empieza por:  node scripts/vibe-copiar.mjs ${pendientes[0].n}\n`);
  process.exit(0);
}

/* --- Copiar -------------------------------------------------------- */

if (numero && !args.includes('--ok')) {
  const i = Number(numero) - 1;
  if (i < 0 || i >= ORDEN.length) {
    console.error(`\n  No existe el nº ${numero}. Van del 1 al ${ORDEN.length}.\n`);
    process.exit(1);
  }
  const item = ORDEN[i];
  const archivo = join(BUNDLE, item.ruta);
  if (!existsSync(archivo)) {
    console.error(`\n  Falta ${item.ruta}. ¿Has corrido scripts/vibe-bundle.mjs?\n`);
    process.exit(1);
  }

  /*
   * Se copia con PowerShell y no con `clip`: los archivos llevan
   * comentarios en español y `clip` los pasa por la página de códigos
   * ANSI, con lo que las tildes y las eñes llegan rotas al editor.
   */
  execFileSync('powershell', [
    '-NoProfile', '-Command',
    `Get-Content -Raw -Encoding UTF8 '${archivo.replace(/'/g, "''")}' | Set-Clipboard`,
  ]);

  const kb = Math.round(statSync(archivo).size / 1024);
  console.log(`\n  📋 COPIADO  ${item.ruta}  (${kb} KB)`);
  console.log(`     ${item.nota}`);
  console.log('');
  console.log(item.existe
    ? `  En Vibe: abre ${item.ruta}, Ctrl+A, Ctrl+V, guardar.`
    : `  En Vibe: abre ${item.ruta} (ya creado), Ctrl+A, Ctrl+V, guardar.`);
  console.log('');
  console.log(`  Cuando lo hayas pegado:  node scripts/vibe-copiar.mjs ${numero} --ok`);
  console.log('');
  process.exit(0);
}

/* --- Listado ------------------------------------------------------- */

console.log('\n  Archivos a pegar en GoHighLevel Vibe');
console.log('  ' + '-'.repeat(62));

let cambiados = 0;
let alDia = 0;
for (let i = 0; i < ORDEN.length; i++) {
  const item = ORDEN[i];
  const e = estado(item, subido);
  if (e === 'cambiado') cambiados++;
  if (e === 'al-dia') alDia++;
  const archivo = join(BUNDLE, item.ruta);
  const kb = existsSync(archivo) ? `${Math.round(statSync(archivo).size / 1024)} KB` : '—';
  console.log(`  [${MARCA[e]}] ${String(i + 1).padStart(2)}. ${item.ruta.padEnd(36)} ${kb.padStart(7)}`);
}

console.log('  ' + '-'.repeat(62));
console.log('  ✓ al día en Vibe    ● cambiado, hay que repegarlo');
console.log(`  ${alDia} de ${ORDEN.length} al día` + (cambiados ? `, ${cambiados} por actualizar` : ''));

const siguiente = ORDEN.findIndex((item) => estado(item, subido) !== 'al-dia');
if (siguiente === -1) {
  console.log('\n  ✓ Todo sincronizado con lo que hay subido.\n');
} else {
  console.log(`\n  Siguiente:  node scripts/vibe-copiar.mjs ${siguiente + 1}\n`);
}
