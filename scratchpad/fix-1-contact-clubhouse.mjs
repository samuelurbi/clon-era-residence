/**
 * PALETTE-BRAND-02 · Imagen de tono claro para el hueco del «mapa» de /contact.
 *
 * Convierte «INGRESO CASA CLUB 08» (5504x3072) en bahiamar-clubhouse-1.webp
 * con la proporción del SVG original del hueco (1440x760 = 1.895:1): recorte
 * centrado a 5504x2904 y escalado a 2350 px de ancho, más las variantes
 * -p-500/800/1080/1600/2000. WebP calidad 82, un ffmpeg cada vez, -threads 2.
 *
 *   node scratchpad/fix-1-contact-clubhouse.mjs
 */
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = join(ROOT, 'bahia-mar-personalizacion/00. AMENIDADES/CASA CLUB/INGRESO CASA CLUB 08.png');
const DEST = join(ROOT, 'public/images');
const BASE = 'bahiamar-clubhouse-1';

const ASPECT = 1440 / 760;
const WIDTHS = [2350, 2000, 1600, 1080, 800, 500];

for (const w of WIDTHS) {
  const out = join(DEST, w === 2350 ? `${BASE}.webp` : `${BASE}-p-${w}.webp`);
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', SRC,
    '-vf', `crop='min(iw,ih*${ASPECT})':'min(ih,iw/${ASPECT})',scale=${w}:-1:flags=lanczos`,
    '-c:v', 'libwebp', '-quality', '82', '-compression_level', '6',
    out,
  ]);
  const dims = execFileSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', out,
  ], { encoding: 'utf8' }).trim();
  console.log(out.replace(ROOT, ''), dims);
}
