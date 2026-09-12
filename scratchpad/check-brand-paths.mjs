/* Comprueba que cada /images/... /icons/... /videos/... de app/layout.tsx existe en public/. */
import { readFileSync, existsSync, statSync } from 'node:fs';

const ROOT =
  'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const src = readFileSync(`${ROOT}/app/layout.tsx`, 'utf8');
const refs = [...new Set(src.match(/\/(images|icons|videos)\/[\w./-]+/g) || [])];

let bad = 0;
for (const ref of refs) {
  const p = `${ROOT}/public${ref}`;
  const ok = existsSync(p);
  const size = ok ? statSync(p).size : 0;
  console.log(`${ok ? 'OK ' : 'MISSING'} ${ref}${ok ? ` (${size} bytes)` : ''}`);
  if (!ok) bad++;
}
process.exit(bad ? 1 : 0);
