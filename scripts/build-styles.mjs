/**
 * Prepara la capa de estilos heredada:
 *   1. Copia el CSS compilado de Webflow a styles/webflow.css
 *   2. Reescribe las URLs de assets remotos a rutas locales de /public
 *   3. Limpia nombres de variables corruptos que Webflow deja al borrarlas
 *
 *   node scripts/build-styles.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'referencia-web-original', 'era-residence.webflow.shared.c9555a234.min.css');
const manifest = JSON.parse(readFileSync(join(ROOT, 'scripts', 'asset-manifest.json'), 'utf8'));

let rewritten = 0, cleaned = 0;

/** Webflow deja restos tipo `--_colors---x\<deleted|variable-uuid\>` al borrar variables. */
function cleanDeletedVars(css) {
  return css.replace(/\\?<deleted\\?\|variable-[0-9a-f-]+\\?>/gi, () => {
    cleaned++;
    return '--deleted';
  });
}

function rewriteUrls(css) {
  return css.replace(/url\(\s*(['"]?)(https?:\/\/[^)'"]+)\1\s*\)/gi, (whole, q, url) => {
    const local = manifest[url.split('#')[0]];
    if (!local) return whole;
    rewritten++;
    return `url(${local})`;
  });
}

let css = readFileSync(SRC, 'utf8');
css = cleanDeletedVars(css);
css = rewriteUrls(css);

const header = `/* ============================================================
 *  CAPA HEREDADA — CSS compilado de Webflow.
 *
 *  Generado por scripts/build-styles.mjs. NO editar a mano: se
 *  regenera. Al personalizar una sección, mueve sus estilos a un
 *  .module.css junto al componente y borra aquí lo que sobre.
 *
 *  styles/tokens.css se carga DESPUÉS y por tanto gana: es ahí
 *  donde se tocan colores, tipografía y espaciados.
 * ============================================================ */
`;

writeFileSync(join(ROOT, 'styles', 'webflow.css'), header + css, 'utf8');

// Mismo saneado en la capa de tokens, que se extrajo de la misma fuente.
const tokensPath = join(ROOT, 'styles', 'tokens.css');
let tokens = readFileSync(tokensPath, 'utf8');
const before = cleaned;
tokens = cleanDeletedVars(tokens);
writeFileSync(tokensPath, tokens, 'utf8');

console.log(`URLs reescritas a /public : ${rewritten}`);
console.log(`Variables corruptas sane. : ${cleaned} (${cleaned - before} en tokens.css)`);
console.log(`\n-> styles/webflow.css`);
console.log(`-> styles/tokens.css (saneado)`);
