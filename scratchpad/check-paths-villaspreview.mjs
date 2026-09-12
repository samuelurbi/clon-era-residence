// Comprueba que todas las rutas /images/... y /videos/... referenciadas en
// components/home/VillasPreview.tsx existen bajo public/.
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const file = join(root, 'components/home/VillasPreview.tsx');
const src = readFileSync(file, 'utf8');
const paths = [...new Set(src.match(/\/(?:images|videos)\/[^\s"',)]+/g) ?? [])];

let missing = 0;
for (const p of paths) {
  const ok = existsSync(join(root, 'public', p));
  if (!ok) missing++;
  console.log(`${ok ? 'OK     ' : 'MISSING'} ${p}`);
}
console.log(`\n${paths.length} rutas, ${missing} faltan`);
process.exit(missing ? 1 : 0);
