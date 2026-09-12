// Previews (600 px) de los renders exteriores que AÚN no usa el sitio, para
// buscar una composición con la villa en el tercio central (LAYOUT-IMAGES-03).
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = `${ROOT}/bahia-mar-personalizacion`;
const OUT = `${ROOT}/scratchpad/fix-1-cta4`;
mkdirSync(OUT, { recursive: true });

const A0 = '00. BAHÍA MAR_RENDERS_AGOSTO';
const A2 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO';
const A3 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-003/00. BAHÍA MAR_RENDERS_AGOSTO';
const ext = (villa) => `00. RENDERS VILLA ${villa} - BAHÍA MAR/01. RENDERS EXTERIORES`;

const files = [
  ['A-R2', `${A0}/${ext('A')}/R2.png`],
  ['A-R3', `${A0}/${ext('A')}/R3.png`],
  ['A-R4', `${A0}/${ext('A')}/R4.png`],
  ['A-R5_1', `${A2}/${ext('A')}/R5_1.png`],
  ['A-R6_1', `${A2}/${ext('A')}/R6_1.png`],
  ['B-R3', `${A0}/${ext('B')}/R3.png`],
  ['B-R9', `${A2}/${ext('B')}/R9.png`],
  ['B-R10', `${A3}/${ext('B')}/R10.png`],
  ['C-R2', `${A3}/${ext('C')}/R2.png`],
  ['C-R4', `${A2}/${ext('C')}/R4.png`],
  ['C-R5', `${A2}/${ext('C')}/R5.png`],
  ['C-R8', `${A2}/${ext('C')}/R8.png`],
  ['C-R9', `${A2}/${ext('C')}/R9.png`],
  ['E-R10_2', `${A0}/${ext('E')}/R10_2.png`],
  ['E-R2_3', `${A0}/${ext('E')}/R2_3.png`],
  ['E-R5_3', `${A0}/${ext('E')}/R5_3.png`],
  ['E-R8_2', `${A3}/${ext('E')}/R8_2.png`],
];

for (const [name, rel] of files) {
  const f = `${SRC}/${rel}`;
  const out = `${OUT}/${name}-preview.png`;
  if (!existsSync(f)) { console.log(name, 'NO EXISTE', rel); continue; }
  if (existsSync(out)) continue;
  const dims = execFileSync('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries', 'stream=width,height', '-of', 'csv=p=0', f]).toString().trim();
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-threads', '2', '-i', f, '-vf', 'scale=600:-1', out]);
  console.log(name, dims);
}
