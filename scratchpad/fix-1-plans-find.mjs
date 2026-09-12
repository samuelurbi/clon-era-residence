// Localiza las hojas de planos comerciales (PRIMER/SEGUNDO NIVEL) en el
// árbol partido de Drive, saltando BACKUP / Versión Anterior / Antiguo.
import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const FUENTE = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/bahia-mar-personalizacion';

function walk(dir, out) {
  let entries;
  try { entries = readdirSync(dir, { withFileTypes: true }); } catch { return; }
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (/BACKUP|Versi[oó]n Anterior|Antiguo/i.test(e.name)) continue;
      walk(p, out);
    } else if (/NIVEL/i.test(e.name) && /\.(png|jpg|jpeg|pdf)$/i.test(e.name)) {
      out.push({ p, size: statSync(p).size });
    }
  }
}

const out = [];
walk(FUENTE, out);
for (const { p, size } of out) {
  console.log(`${(size / 1e6).toFixed(1).padStart(6)} MB  ${p.replace(FUENTE, '').replace(/\\/g, '/')}`);
}
