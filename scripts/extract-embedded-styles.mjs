/**
 * Extrae los bloques <style> embebidos de las páginas originales.
 *
 * Webflow deja el CSS compartido en un .css externo (ya volcado en
 * styles/webflow.css), pero el "custom code" del proyecto vive incrustado
 * en el HTML de cada página. Ahí está el sistema de hovers por atributo
 * ([hover-btn], [hover-img-card], …) y las variables --dur-* / --ease-*,
 * que no aparecen en ningún otro sitio: sin esto los botones, las tarjetas
 * y el menú quedan sin interacción.
 *
 * Muchos bloques se repiten entre páginas, así que se deduplican por
 * contenido normalizado y se conserva el orden de primera aparición.
 *
 *   node scripts/extract-embedded-styles.mjs
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const REF = 'referencia-web-original';
const OUT = 'styles/components.css';

/** El orden importa: la home trae la mayoría y define las bases. */
const pages = [
  'home.html',
  'apartments.html',
  'contact.html',
  'coming-soon.html',
  ...readdirSync(join(REF, 'apartments')).map((f) => join('apartments', f)),
];

/** Clave de deduplicación: ignora espacios para no duplicar por formato. */
const key = (css) => css.replace(/\s+/g, ' ').trim();

const blocks = new Map(); // key -> { css, from }
let scanned = 0;

for (const page of pages) {
  let html;
  try {
    html = readFileSync(join(REF, page), 'utf8');
  } catch {
    continue;
  }
  scanned++;
  for (const m of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) {
    const css = m[1].trim();
    // Webflow inyecta un <style> con las @font-face de Typekit y otro con
    // reglas del editor; ninguno aporta y el primero reintroduce Adobe.
    if (!css || /@font-face|w-editor|\.w-webflow-badge/.test(css)) continue;
    const k = key(css);
    if (!blocks.has(k)) blocks.set(k, { css, from: page });
  }
}

const parts = [...blocks.values()];

const header = `/* ============================================================
 *  GENERADO por scripts/extract-embedded-styles.mjs — no editar a mano.
 *
 *  CSS "custom code" que el sitio original llevaba incrustado en el
 *  HTML de cada página (Webflow no lo compila al .css compartido).
 *  Contiene el sistema de hovers por atributo y las variables de
 *  duración y easing que usan las animaciones.
 *
 *  ${parts.length} bloques únicos extraídos de ${scanned} páginas.
 * ============================================================ */\n\n`;

const body = parts
  .map(({ css, from }) => `/* --- de ${from} --- */\n${css}\n`)
  .join('\n');

writeFileSync(OUT, header + body);

console.log(`${OUT}: ${parts.length} bloques únicos de ${scanned} páginas`);
console.log(`${Math.round((header + body).length / 1024)} KB`);
