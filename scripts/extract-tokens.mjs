/**
 * Extrae la capa de design tokens del CSS compilado de Webflow y la vuelca
 * formateada en styles/tokens.css, conservando el contexto de @media.
 *
 *   node scripts/extract-tokens.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'referencia-web-original', 'era-residence.webflow.shared.c9555a234.min.css');

const css = readFileSync(SRC, 'utf8');

/* --- Parser mínimo: recorre llaves y va apilando at-rules --- */

const rules = []; // { at: string[], selector, decls: [[prop, value]] }
let i = 0, buf = '', stack = [];

while (i < css.length) {
  const ch = css[i];

  if (ch === '{') {
    const head = buf.trim();
    buf = '';
    if (head.startsWith('@')) {
      stack.push(head);
      i++;
      continue;
    }
    // Rule: leemos hasta la llave de cierre que le corresponde
    let depth = 1, body = '';
    i++;
    while (i < css.length && depth > 0) {
      if (css[i] === '{') depth++;
      else if (css[i] === '}') { depth--; if (!depth) break; }
      body += css[i];
      i++;
    }
    i++;

    const decls = [];
    for (const decl of body.split(';')) {
      const idx = decl.indexOf(':');
      if (idx === -1) continue;
      const prop = decl.slice(0, idx).trim();
      const value = decl.slice(idx + 1).trim();
      if (prop.startsWith('--')) decls.push([prop, value]);
    }
    if (decls.length) rules.push({ at: [...stack], selector: head, decls });
    continue;
  }

  if (ch === '}') { stack.pop(); buf = ''; i++; continue; }

  buf += ch;
  i++;
}

/* --- Agrupar por contexto (@media) + selector --- */

const groups = new Map();
for (const r of rules) {
  const key = JSON.stringify([r.at, r.selector]);
  if (!groups.has(key)) groups.set(key, { at: r.at, selector: r.selector, decls: [] });
  groups.get(key).decls.push(...r.decls);
}

/* --- Agrupar declaraciones por familia de token (--_fonts---, --_colors---, ...) --- */

function family(prop) {
  const m = prop.match(/^--_([a-z0-9-]+?)---/i);
  if (m) return m[1];
  if (/^--\d/.test(prop)) return 'primitivas-px';
  return 'otros';
}

const out = [];
out.push('/* ============================================================');
out.push(' *  Design tokens — extraídos del CSS compilado de Webflow.');
out.push(' *  Generado por scripts/extract-tokens.mjs — editable a mano.');
out.push(' *');
out.push(' *  Dos niveles:');
out.push(' *    --_global-colors---*  primitivas (paleta cruda)');
out.push(' *    --_colors---*         semánticas (uso: primary, bg, line…)');
out.push(' *');
out.push(' *  La escala tipográfica usa calc(Nrem / --_special-units---scale-ratio):');
out.push(' *  cambiar scale-ratio en un breakpoint reescala TODA la tipografía.');
out.push(' * ============================================================ */');
out.push('');

let count = 0;
for (const g of groups.values()) {
  const indent = g.at.length ? '  '.repeat(g.at.length) : '';
  for (const at of g.at) out.push(`${'  '.repeat(g.at.indexOf(at))}${at} {`);

  out.push(`${indent}${g.selector} {`);

  const byFam = new Map();
  for (const [p, v] of g.decls) {
    const f = family(p);
    if (!byFam.has(f)) byFam.set(f, []);
    byFam.get(f).push([p, v]);
    count++;
  }

  const order = ['global-colors', 'colors', 'fonts', 'units', 'special-units', 'primitivas-px', 'otros'];
  const fams = [...byFam.keys()].sort((a, b) => {
    const ia = order.indexOf(a), ib = order.indexOf(b);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib) || a.localeCompare(b);
  });

  for (const f of fams) {
    out.push(`${indent}  /* ${f} */`);
    // Dedupe conservando la última definición (la que gana en cascada)
    const seen = new Map();
    for (const [p, v] of byFam.get(f)) seen.set(p, v);
    for (const [p, v] of seen) out.push(`${indent}  ${p}: ${v};`);
    out.push('');
  }
  if (out[out.length - 1] === '') out.pop();

  out.push(`${indent}}`);
  for (let k = g.at.length - 1; k >= 0; k--) out.push(`${'  '.repeat(k)}}`);
  out.push('');
}

mkdirSync(join(ROOT, 'styles'), { recursive: true });
writeFileSync(join(ROOT, 'styles', 'tokens.css'), out.join('\n'), 'utf8');

console.log(`Bloques con tokens : ${groups.size}`);
console.log(`Declaraciones      : ${count}`);
console.log('\nSelectores:');
for (const g of groups.values()) {
  console.log(`  ${g.at.join(' ')} ${g.selector}  (${g.decls.length})`);
}
console.log('\n-> styles/tokens.css');
