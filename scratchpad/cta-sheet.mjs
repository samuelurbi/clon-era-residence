// Contact sheet of every exterior render (skipping BACKUP / Versión Anterior / Antiguo).
// Thumbnails are made one at a time (low-memory machine), then tiled with the
// concat demuxer + tile filter. Prints the index → source mapping.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/bahia-mar-personalizacion';
const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/cta-sheet';
fs.mkdirSync(OUT, { recursive: true });

function walk(dir, acc = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (/backup|versi[oó]n anterior|antiguo/i.test(e.name)) continue;
    if (e.isDirectory()) walk(p, acc);
    else if (/EXTERIORES/i.test(p) && /\.(png|jpe?g|webp)$/i.test(e.name)) acc.push(p);
  }
  return acc;
}

const files = walk(ROOT).sort();
const SIZE = 260;
const list = [];
files.forEach((f, i) => {
  const thumb = path.join(OUT, `t${String(i).padStart(2, '0')}.png`);
  if (!fs.existsSync(thumb)) {
    execFileSync('ffmpeg', [
      '-v', 'error', '-y', '-threads', '2', '-i', f,
      '-vf', `scale=${SIZE - 8}:${SIZE - 8}:force_original_aspect_ratio=decrease,pad=${SIZE}:${SIZE}:(ow-iw)/2:(oh-ih)/2:color=${i % 2 ? 'black' : '0x333333'}`,
      '-frames:v', '1', thumb,
    ], { stdio: 'inherit' });
  }
  const rel = path.relative(ROOT, f).replace(/\\/g, '/');
  const dim = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', f]).toString().trim();
  console.log(`${i}\t${dim}\t${rel}`);
  list.push(`file '${thumb.replace(/\\/g, '/').replace(/'/g, "'\\''")}'`);
});
fs.writeFileSync(path.join(OUT, 'list.txt'), list.join('\n') + '\n');

const cols = 7;
const rows = Math.ceil(files.length / cols);
execFileSync('ffmpeg', [
  '-v', 'error', '-y', '-threads', '2', '-f', 'concat', '-safe', '0', '-i', path.join(OUT, 'list.txt'),
  '-vf', `tile=${cols}x${rows}`, '-frames:v', '1', path.join(OUT, 'sheet.png'),
], { stdio: 'inherit' });
console.log('sheet:', path.join(OUT, 'sheet.png'));
