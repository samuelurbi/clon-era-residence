// Every /images/... and /videos/... path referenced by the four CTA files must exist under public/.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const files = [
  'components/sections/SeaViewsCta.tsx',
  'data/cta-images.ts',
  'components/sections/BookACall.tsx',
  'components/layout/BookCallModal.tsx',
];
const refs = new Set();
for (const f of files) {
  const src = fs.readFileSync(path.join(ROOT, f), 'utf8');
  for (const m of src.matchAll(/\/(images|videos)\/[A-Za-z0-9_.\-]+/g)) refs.add(m[0]);
}
// cta-images.ts builds names dynamically: expand the four bases explicitly.
for (const n of [1, 2, 3, 4]) {
  refs.add(`/images/bahiamar-cta-${n}.webp`);
  for (const w of [500, 800, 1080, 1600, 2000]) refs.add(`/images/bahiamar-cta-${n}-p-${w}.webp`);
}
let missing = 0;
for (const r of [...refs].sort()) {
  const ok = fs.existsSync(path.join(ROOT, 'public', r));
  if (!ok) missing++;
  console.log(`${ok ? 'OK ' : 'MISSING'}\t${r}`);
}
console.log(missing ? `\n${missing} missing` : '\nall present');
process.exit(missing ? 1 : 0);
