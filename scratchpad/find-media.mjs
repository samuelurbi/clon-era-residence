// Localiza en qué @media cae cada regla .flower de webflow.css (minificado)
import { readFileSync } from 'node:fs';
const css = readFileSync('C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/styles/webflow.css', 'utf8');

// Pre-cálculo: pila de bloques abiertos en cada posición (solo nos interesan las @media)
const opens = []; // { index, media }
const stackAt = []; // no lo guardamos para todo el fichero: recorremos y al encontrar una regla .flower volcamos la pila
const stack = [];
const re = /\.flower(?:\.[\w-]+)?\{[^}]*\}/g;
const targets = [];
let m;
while ((m = re.exec(css))) targets.push(m);
let t = 0;
for (let i = 0; i < css.length && t < targets.length; i++) {
  if (i === targets[t].index) {
    const enclosing = stack.filter(Boolean);
    console.log((enclosing.length ? enclosing.join(' > ') : '(root)') + '  ::  ' + targets[t][0].slice(0, 100));
    t++;
  }
  const c = css[i];
  if (c === '{') {
    const back = css.lastIndexOf('@media', i);
    const between = back === -1 ? null : css.slice(back, i);
    const isMedia = between !== null && !between.includes('{') && !between.includes('}');
    stack.push(isMedia ? between : null);
  } else if (c === '}') stack.pop();
}
