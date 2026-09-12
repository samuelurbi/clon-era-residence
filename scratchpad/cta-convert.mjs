// bahiamar-cta-4: Villa D (Ámbar) exterior R5 → aspect of the ERA slot it
// replaces (era-residence-ground-floor-2, 1920x2112 = 0.909), full width 2350
// plus -p-500/800/1080/1600/2000. WebP quality 82, -threads 2, sequential.
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = path.join(ROOT, 'bahia-mar-personalizacion/00. BAHÍA MAR_RENDERS_AGOSTO/00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES/R5.png');
const DEST = path.join(ROOT, 'public/images');
const BASE = 'bahiamar-cta-4';

// Source 3012x4518. Target ratio 1920/2112. Crop keeps the full width and a
// 3313 px tall window starting at y=800: a little sky above the palm, the
// pergola, pool and horizon in the middle, most of the foliage below.
const SRC_W = 3012;
const CROP_H = Math.round(SRC_W * (2112 / 1920)); // 3313
const CROP_Y = 800;

function run(width, out) {
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', SRC,
    '-vf', `crop=${SRC_W}:${CROP_H}:0:${CROP_Y},scale=${width}:-1:flags=lanczos`,
    '-c:v', 'libwebp', '-quality', '82', '-compression_level', '6',
    path.join(DEST, out),
  ], { stdio: 'inherit' });
  const dim = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path.join(DEST, out)]).toString().trim();
  console.log(`${out}\t${dim}`);
}

run(2350, `${BASE}.webp`);
for (const w of [500, 800, 1080, 1600, 2000]) run(w, `${BASE}-p-${w}.webp`);
