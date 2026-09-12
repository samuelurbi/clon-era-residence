// Comprueba que cada ruta /images/... que produce data/cta-images.ts existe en
// public/ (un 404 de imagen es silencioso en este sitio). Lee el .ts como
// texto y reproduce la lógica del helper, sin transpilar nada.
import { readFileSync, existsSync } from 'node:fs';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const ts = readFileSync(`${ROOT}/data/cta-images.ts`, 'utf8');

const entries = [...ts.matchAll(/responsive\(\s*'([^']+)',\s*'[^']*',?\s*(\d+)?\s*,?\s*\)/g)].map((m) => [m[1], m[2] ? Number(m[2]) : 2350]);
let bad = 0;
for (const [name, full] of entries) {
  const paths = [
    ...[500, 800, 1080, 1600, 2000].filter((w) => w < full).map((w) => `/images/${name}-p-${w}.webp`),
    `/images/${name}.webp`,
  ];
  for (const p of paths) {
    const ok = existsSync(`${ROOT}/public${p}`);
    if (!ok) bad++;
    console.log(`${ok ? 'OK ' : 'FALTA'} ${p}`);
  }
}
console.log(bad ? `${bad} rutas faltan` : 'todas las rutas existen');
process.exit(bad ? 1 : 0);
