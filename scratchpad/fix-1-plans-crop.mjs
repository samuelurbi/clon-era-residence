// Recorta cada plano comercial de Bahía Mar a su dibujo y lo exporta a WebP.
//
// POR QUÉ
//   Los villa-<slug>-plan-N.webp anteriores salían de UN rectángulo fijo
//   aplicado a las ocho hojas A-0N (15000x10582), pero el dibujo cae en un
//   sitio distinto en cada hoja: el resultado cortaba dormitorios, dejaba
//   el 40 % superior vacío y arrastraba media columna de la leyenda. Aquí
//   la bbox se detecta por hoja (fix-1-plans-detect.mjs), se amplía con un
//   margen y se rellena con blanco hasta la proporción 1600:1505 del hueco
//   de la ficha (object-fit: contain), centrando el dibujo.
//
// SALIDA (mismos nombres que ya referencia data/villas.ts)
//   public/images/villa-<slug>-plan-N.webp          2350 px, q82
//   public/images/villa-<slug>-plan-N-p-<W>.webp    500/800/1080/1600/2000, q82
//
// Un ffmpeg cada vez y -threads 2: la máquina anda justa de memoria.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SHEETS, DESTINO, OUT_PREVIEW, WORKTREE } from './fix-1-plans-sources.mjs';
import { leerGris, detectar } from './fix-1-plans-detect.mjs';

const ANCHO_MAX = 2350;
const ANCHOS = [500, 800, 1080, 1600, 2000];
const CALIDAD = 82;
/** Proporción del hueco (la que tenían los ficheros anteriores, 1600x1505). */
const ASPECTO = 1600 / 1505;
/** Margen alrededor del dibujo: 2,5 % del lado mayor, mínimo 150 px reales. */
const MARGEN = (cw, ch) => Math.max(150, Math.round(0.025 * Math.max(cw, ch)));

mkdirSync(OUT_PREVIEW, { recursive: true });

function dimensiones(src) {
  const out = execFileSync('ffprobe', [
    '-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', src,
  ]).toString().trim();
  const [w, h] = out.split(',').map(Number);
  return { w, h };
}

const solo = process.argv[2]; // opcional: base de una sola hoja
const informe = [];

for (const s of SHEETS) {
  if (solo && s.base !== solo) continue;
  const { w: SW, h: SH } = dimensiones(s.src);
  const g = leerGris(s.src);
  const { principal: p } = detectar(g);
  const fx = SW / g.W, fy = SH / g.H;

  // bbox real (+1 px de holgura por la cuantización de la vista previa).
  let x0 = Math.floor((p.x0 - 1) * fx), x1 = Math.ceil((p.x1 + 2) * fx);
  let y0 = Math.floor((p.y0 - 1) * fy), y1 = Math.ceil((p.y1 + 2) * fy);
  const m = MARGEN(x1 - x0, y1 - y0);
  x0 = Math.max(0, x0 - m); y0 = Math.max(0, y0 - m);
  x1 = Math.min(SW, x1 + m); y1 = Math.min(SH, y1 + m);
  const cw = x1 - x0, ch = y1 - y0;

  // Relleno blanco hasta la proporción del hueco, dibujo centrado.
  let pw = cw, ph = ch;
  if (cw / ch > ASPECTO) ph = Math.round(cw / ASPECTO); else pw = Math.round(ch * ASPECTO);

  const inter = join(OUT_PREVIEW, `${s.base}-crop.png`);
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', s.src,
    '-vf', `crop=${cw}:${ch}:${x0}:${y0},pad=${pw}:${ph}:(ow-iw)/2:(oh-ih)/2:color=white,scale=${ANCHO_MAX}:-2:flags=lanczos`,
    inter,
  ], { stdio: 'inherit' });

  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', inter,
    '-c:v', 'libwebp', '-quality', String(CALIDAD), '-compression_level', '6',
    join(DESTINO, `${s.base}.webp`),
  ], { stdio: 'inherit' });
  for (const w of ANCHOS) {
    execFileSync('ffmpeg', [
      '-v', 'error', '-y', '-threads', '2', '-i', inter,
      '-vf', `scale=${w}:-2:flags=lanczos`,
      '-c:v', 'libwebp', '-quality', String(CALIDAD), '-compression_level', '6',
      join(DESTINO, `${s.base}-p-${w}.webp`),
    ], { stdio: 'inherit' });
  }

  const fila = { base: s.base, hoja: `${SW}x${SH}`, bbox: `x ${x0}-${x1} y ${y0}-${y1}`, recorte: `${cw}x${ch}`, lienzo: `${pw}x${ph}`, margen: m };
  informe.push(fila);
  console.log(`✓ ${s.base.padEnd(24)} bbox ${fila.bbox}  recorte ${fila.recorte}  lienzo ${fila.lienzo}  (margen ${m})`);
}

writeFileSync(join(OUT_PREVIEW, 'informe.json'), JSON.stringify(informe, null, 2));
