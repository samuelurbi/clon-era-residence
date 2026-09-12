// Previews (600 px de ancho) de los renders exteriores de Villa D para elegir
// el encuadre del CTA de las fichas (bahiamar-cta-4). Una conversión cada vez,
// -threads 2: la máquina anda justa de memoria.
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = `${ROOT}/bahia-mar-personalizacion`;
const OUT = `${ROOT}/scratchpad/fix-1-cta4`;
mkdirSync(OUT, { recursive: true });

const D = '00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES';
const files = [
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R1.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R2.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R3.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-003/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R4.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R5.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R6.png`,
  `${SRC}/00. BAHÍA MAR_RENDERS_AGOSTO/${D}/R7.png`,
];

for (const f of files) {
  const name = path.basename(f, '.png');
  const out = `${OUT}/${name}-preview.png`;
  if (existsSync(out)) continue;
  const dims = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', f]).toString().trim();
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', f, '-vf', 'scale=600:-1', out]);
  console.log(name, dims, '->', out);
}
