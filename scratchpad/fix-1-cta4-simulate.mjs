// Simula, sobre los previews de 600 px, cómo se vería cada candidato a
// bahiamar-cta-4: el recorte 10:11 completo, la franja móvil (29,5 % central
// del ancho, medida en el navegador a 390) y la franja de escritorio (71,6 %).
// Coordenadas de ventana en píxeles del render ORIGINAL.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/fix-1-cta4';

// [etiqueta, preview, anchoOriginal, x0, y0, W] — H = W*11/10
const candidatos = process.argv[2] === 'r5' ? [
  ['D-R5-w2350', 'R5', 3012, 662, 1300, 2350],
  ['D-R5-w2200', 'R5', 3012, 812, 1350, 2200],
  ['D-R5-w2000', 'R5', 3012, 1012, 1400, 2000],
  ['D-R5-w1800', 'R5', 3012, 1212, 1450, 1800],
] : [
  ['E-R10_2-a', 'E-R10_2', 5760, 1100, 0, 2945],
  ['E-R10_2-b', 'E-R10_2', 5760, 1500, 0, 2945],
  ['C-R9-a', 'C-R9', 5760, 1408, 0, 2945],
  ['B-R3-a', 'B-R3', 5760, 1440, 0, 2945],
  ['A-R4-a', 'A-R4', 5760, 1987, 0, 2945],
  ['E-R8_2-a', 'E-R8_2', 5760, 1920, 0, 2945],
  ['D-R5-narrow', 'R5', 3012, 1012, 1400, 2000],
  ['C-R4-a', 'C-R4', 5760, 1536, 0, 2945],
];

for (const [tag, prev, srcW, x0, y0, W] of candidatos) {
  const src = `${OUT}/${prev}-preview.png`;
  if (!existsSync(src)) { console.log(tag, 'falta preview', src); continue; }
  const s = 600 / srcW;
  const H = Math.round(W * 11 / 10);
  const px = Math.round(x0 * s), py = Math.round(y0 * s), pw = Math.round(W * s), ph = Math.round(H * s);
  // Recorte completo
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', src, '-vf', `crop=${pw}:${ph}:${px}:${py}`, `${OUT}/sim-${tag}-crop.png`]);
  // Franja móvil: 29,5 % central del ancho, alto completo
  const mw = Math.round(pw * 0.295), mx = px + Math.round(pw * (1 - 0.295) / 2);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', src, '-vf', `crop=${mw}:${ph}:${mx}:${py}`, `${OUT}/sim-${tag}-mobile.png`]);
  // Franja escritorio: 71,6 % central del ancho, 41 % central del alto (lo que cabe en 1440x900 de golpe)
  const dw = Math.round(pw * 0.716), dx = px + Math.round(pw * (1 - 0.716) / 2);
  const dh = Math.round(ph * 0.41), dy = py + Math.round(ph * (1 - 0.41) / 2);
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', src, '-vf', `crop=${dw}:${dh}:${dx}:${dy}`, `${OUT}/sim-${tag}-desktop.png`]);
  console.log(tag, `ventana ${W}x${H} @ (${x0},${y0})`, `preview crop ${pw}x${ph}@(${px},${py})`);
}
