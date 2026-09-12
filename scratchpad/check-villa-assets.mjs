// Comprueba que todo lo que referencian VillaDetail/VillaCard (vía data/villas.ts
// y data/villa-cards.ts, incluidas las variantes del srcset) existe en public/.
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';

// data/villas.ts es TypeScript: lo transpilamos al vuelo con el tsc del proyecto.
const js = execFileSync('node', [
  join(ROOT, 'node_modules/typescript/lib/tsc.js'),
  '--outDir', join(ROOT, 'scratchpad/_tmp'),
  '--module', 'es2022', '--target', 'es2022', '--moduleResolution', 'bundler',
  '--skipLibCheck', join(ROOT, 'data/villas.ts'),
]).toString();
if (js.trim()) console.log(js);

const { villas, srcset } = await import(pathToFileURL(join(ROOT, 'scratchpad/_tmp/villas.js')).href);

const refs = new Set();
for (const v of villas) {
  refs.add(v.heroImage);
  for (const s of srcset(v.heroImage).split(', ')) refs.add(s.split(' ')[0]);
  for (const p of v.plans) refs.add(p.image);
  for (const g of v.gallery) {
    refs.add(g);
    for (const s of srcset(g).split(', ')) refs.add(s.split(' ')[0]);
  }
  refs.add(`/documents/villa-${v.slug}-plan.pdf`);
}

let missing = 0;
for (const r of [...refs].sort()) {
  if (!existsSync(join(ROOT, 'public', r))) {
    console.log(`FALTA  ${r}`);
    missing++;
  }
}
console.log(`${refs.size} rutas comprobadas, ${missing} faltan`);
process.exit(missing ? 1 : 0);
