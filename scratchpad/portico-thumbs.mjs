// Thumbnails + dimensions of the PÓRTICO INGRESO candidates, one at a time.
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import fs from 'node:fs';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = path.join(ROOT, 'bahia-mar-personalizacion/00. AMENIDADES/PORTICO INGRESO');
const OUT = path.join(ROOT, 'scratchpad/portico-thumbs');
fs.mkdirSync(OUT, { recursive: true });

for (const f of fs.readdirSync(SRC).filter((n) => /\.(png|jpe?g)$/i.test(n))) {
  const src = path.join(SRC, f);
  const dims = execFileSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', src,
  ]).toString().trim();
  const out = path.join(OUT, f.replace(/\.(png|jpe?g)$/i, '.jpg'));
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', src,
    '-vf', 'scale=480:-1', '-q:v', '5', out]);
  console.log(`${f}\t${dims}\t-> ${path.basename(out)}`);
}
