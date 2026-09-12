// Comprueba que todas las rutas /images/... y /videos/... referenciadas en
// components/sections/Amenities.tsx existen bajo public/ (un 404 aquí es silencioso).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const file = join(root, 'components/sections/Amenities.tsx');
const src = readFileSync(file, 'utf8');
const refs = [...new Set(src.match(/\/(?:images|videos)\/[^\s"',)]+/g) ?? [])];

let missing = 0;
for (const ref of refs) {
  const ok = existsSync(join(root, 'public', ref));
  if (!ok) missing++;
  console.log(`${ok ? 'OK     ' : 'MISSING'} ${ref}`);
}
console.log(`\n${refs.length} referencias, ${missing} faltan`);
process.exit(missing ? 1 : 0);
