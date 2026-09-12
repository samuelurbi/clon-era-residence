// Extrae texto visible (entre etiquetas) y alt/aria de los TSX para revisión de copy.
import fs from 'node:fs';
import path from 'node:path';

const root = process.argv[2];
const dirs = ['components', 'app'];
const out = [];
function walk(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(e.name)) scan(p);
  }
}
function scan(p) {
  const src = fs.readFileSync(p, 'utf8');
  const rel = path.relative(root, p);
  const lines = src.split('\n');
  lines.forEach((line, i) => {
    const texts = [];
    // texto entre > y <
    for (const m of line.matchAll(/>([^<>{}]*[A-Za-zÁÉÍÓÚáéíóúñÑ]{2,}[^<>{}]*)</g)) texts.push(m[1].trim());
    // líneas que son solo texto (JSX multilinea)
    if (/^\s*[^<>{}\/\*]*[A-Za-z]{3,}[^<>{}]*$/.test(line) && !/^\s*(import|export|const|let|return|function|\/\/|\*|if|\}|\))/.test(line) && !/[=:;]\s*$/.test(line) && !/^\s*[a-zA-Z]+[:=]/.test(line)) texts.push(line.trim());
    for (const m of line.matchAll(/(?:alt|aria-label|title|placeholder|description|content)=["']([^"']{3,})["']/g)) texts.push(`[attr] ${m[1]}`);
    for (const t of texts) if (t && !/^[\d\s.,%-]+$/.test(t)) out.push(`${rel}:${i + 1}: ${t}`);
  });
}
for (const d of dirs) walk(path.join(root, d));
fs.writeFileSync(path.join(root, 'scratchpad', 'visible-text.txt'), out.join('\n'));
console.log(out.length, 'lines');
