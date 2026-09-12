// Comprueba que existen los 6 ficheros de cada plano y sus dimensiones.
import { execFileSync } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { SHEETS, DESTINO } from './fix-1-plans-sources.mjs';

let ok = true;
for (const s of SHEETS) {
  const names = [`${s.base}.webp`, ...[500, 800, 1080, 1600, 2000].map((w) => `${s.base}-p-${w}.webp`)];
  const partes = [];
  for (const n of names) {
    const p = join(DESTINO, n);
    if (!existsSync(p)) { ok = false; partes.push(`${n}: FALTA`); continue; }
    const dim = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', p]).toString().trim();
    partes.push(`${dim} ${(statSync(p).size / 1024).toFixed(0)}K`);
  }
  console.log(`${s.base.padEnd(24)} ${partes.join(' | ')}`);
}
console.log(ok ? 'OK: todos los ficheros existen' : 'FALTAN ficheros');
