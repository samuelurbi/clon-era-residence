/**
 * Comprueba si las funciones del script original que se dieron por muertas
 * lo están de verdad.
 *
 * Por qué existe: `initLocalLenis` se descartó buscando el atributo
 * `data-local-lenis`, deducido de su nombre. El real es `data-lenis-scroll`
 * y está en las 29 páginas — el panel de la ficha se quedó sin scroll y los
 * tabs inalcanzables. Deducir el selector del nombre no vale.
 *
 * Aquí los selectores se leen DEL CUERPO de cada función y se cuentan sobre
 * las páginas reales.
 *
 *   node scripts/audit-unported.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';

const REF = 'referencia-web-original';
const SRC = readFileSync(`${REF}/slater-custom.js`, 'utf8').split('\n');

/** Funciones que se dieron por no portadas o por código muerto. */
const FUNCTIONS = [
  'initIndexCounter',
  'initBenefitCards',
  'initCarousel',
  'initCardParts',
  'initScripts',
  'initOther',
  'initReset',
  'initResetWebflow',
  'triggerScrollReveal',
  'initUtmFields',
  'initTFTLjson',
];

const pages = [
  'home.html',
  'apartments.html',
  'contact.html',
  'coming-soon.html',
  ...readdirSync(`${REF}/apartments`).filter((f) => f.endsWith('.html')).map((f) => `apartments/${f}`),
];

const html = new Map(pages.map((p) => [p, readFileSync(`${REF}/${p}`, 'utf8')]));

/** Cuerpo de la función, de su declaración a la llave de cierre en columna 0. */
function bodyOf(name) {
  const start = SRC.findIndex((l) => new RegExp(`^(async )?function ${name}\\s*\\(`).test(l));
  if (start === -1) return null;
  let end = start + 1;
  while (end < SRC.length && SRC[end] !== '}') end++;
  return SRC.slice(start, end + 1).join('\n');
}

console.log(`${FUNCTIONS.length} funciones · ${pages.length} páginas\n`);

for (const name of FUNCTIONS) {
  const body = bodyOf(name);
  if (!body) {
    console.log(`${name}: no encontrada en el original`);
    continue;
  }

  /* Selectores tal cual aparecen en el código, sin interpretarlos. */
  const selectors = new Set();
  for (const m of body.matchAll(/querySelector(?:All)?\(\s*[`'"]([^`'"]+)[`'"]/g)) selectors.add(m[1]);
  for (const m of body.matchAll(/gsap\.utils\.toArray\(\s*[`'"]([^`'"]+)[`'"]/g)) selectors.add(m[1]);
  for (const m of body.matchAll(/closest\(\s*[`'"]([^`'"]+)[`'"]/g)) selectors.add(m[1]);

  if (!selectors.size) {
    console.log(`${name}: sin selectores (fontanería, no toca el marcado)`);
    continue;
  }

  const filas = [];
  let vivo = false;

  for (const sel of selectors) {
    /* Se busca el gancho literal: atributo o clase, sin corchetes ni punto. */
    const hook = sel.replace(/^\[|\]$/g, '').split(/[=~^$*|]/)[0].replace(/^\./, '').trim();
    if (!hook || hook.length < 3) continue;

    const hits = pages.filter((p) => html.get(p).includes(hook)).length;
    if (hits) vivo = true;
    filas.push(`      ${hook.padEnd(26)} ${String(hits).padStart(2)}/29`);
  }

  console.log(`${vivo ? '¡VIVA!' : 'muerta'}  ${name}`);
  for (const f of filas) console.log(f);
}
