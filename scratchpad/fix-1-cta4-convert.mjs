// LAYOUT-IMAGES-03 — re-encuadre de bahiamar-cta-4 (Villa D / Ámbar, R5).
//
// El CTA de las fichas muestra a 390 px sólo el 29,5 % central del ancho de
// la imagen (medido: .cta-s con aspect-ratio 2/6 y el fondo al 140 % de alto
// con object-fit: cover). El recorte anterior usaba el ancho completo del
// render (3012 px) con la casa pegada al borde derecho, así que en móvil
// quedaban árboles y jardinera. Ahora la ventana es de 2000x2200 (10:11, la
// misma proporción del hueco original) pegada al borde derecho del render:
// la pared de piedra, la pérgola, la jardinera y la piscina caen en el
// tercio central. Se exporta a su ancho nativo (2000) sin escalar hacia
// arriba, más -p-500/800/1080/1600; la variante -p-2000 sobra (sería igual
// al completo) y se borra la antigua.
//
// WebP calidad 82, -threads 2, una conversión cada vez.
import { execFileSync } from 'node:child_process';
import { existsSync, unlinkSync } from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = path.join(ROOT, 'bahia-mar-personalizacion/00. BAHÍA MAR_RENDERS_AGOSTO/00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES/R5.png');
const DEST = path.join(ROOT, 'public/images');
const BASE = 'bahiamar-cta-4';

// Render 3012x4518. Ventana 10:11 de 2000x2200 con origen en (1012, 1400):
// borde derecho = borde del render; arriba las vigas de la pérgola y un poco
// de cielo, abajo la piscina con las tumbonas.
const CROP_W = 2000;
const CROP_H = 2200;
const CROP_X = 1012;
const CROP_Y = 1400;

function run(width, out) {
  const scale = width < CROP_W ? `,scale=${width}:-1:flags=lanczos` : '';
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', SRC,
    '-vf', `crop=${CROP_W}:${CROP_H}:${CROP_X}:${CROP_Y}${scale}`,
    '-c:v', 'libwebp', '-quality', '82', '-compression_level', '6',
    path.join(DEST, out),
  ], { stdio: 'inherit' });
  const dim = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', path.join(DEST, out)]).toString().trim();
  console.log(`${out}\t${dim}`);
}

run(CROP_W, `${BASE}.webp`);
for (const w of [500, 800, 1080, 1600]) run(w, `${BASE}-p-${w}.webp`);

const stale = path.join(DEST, `${BASE}-p-2000.webp`);
if (existsSync(stale)) { unlinkSync(stale); console.log(`borrada ${BASE}-p-2000.webp (sería idéntica al completo de 2000 px)`); }
