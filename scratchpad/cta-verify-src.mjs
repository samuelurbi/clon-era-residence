// Side-by-side: existing bahiamar-cta-N-p-500 vs. presumed source render (scaled to 500 wide).
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const P = path.join(ROOT, 'bahia-mar-personalizacion');
const OUT = path.join(ROOT, 'scratchpad/cta-sheet');
const A2 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO';
const A3 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-003/00. BAHÍA MAR_RENDERS_AGOSTO';
const pairs = [
  ['bahiamar-cta-1', `${A2}/00. RENDERS VILLA A - BAHÍA MAR/01. RENDERS EXTERIORES/R10_2.png`],
  ['bahiamar-cta-2', `${A2}/00. RENDERS VILLA A - BAHÍA MAR/01. RENDERS EXTERIORES/R9_1.png`],
  ['bahiamar-cta-3', `${A3}/00. RENDERS VILLA B - BAHÍA MAR/01. RENDERS EXTERIORES/R8.png`],
];
const list = [];
pairs.forEach(([name, rel], i) => {
  const a = path.join(OUT, `v${i}a.png`);
  const b = path.join(OUT, `v${i}b.png`);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-threads', '2', '-i', path.join(ROOT, 'public/images', `${name}-p-500.webp`),
    '-vf', 'scale=400:400:force_original_aspect_ratio=decrease,pad=400:400:(ow-iw)/2:(oh-ih)/2:color=black', '-frames:v', '1', a]);
  execFileSync('ffmpeg', ['-v', 'error', '-y', '-threads', '2', '-i', path.join(P, rel),
    '-vf', 'scale=400:400:force_original_aspect_ratio=decrease,pad=400:400:(ow-iw)/2:(oh-ih)/2:color=0x333333', '-frames:v', '1', b]);
  list.push(`file '${a.replace(/\\/g, '/')}'`, `file '${b.replace(/\\/g, '/')}'`);
});
fs.writeFileSync(path.join(OUT, 'list-v.txt'), list.join('\n') + '\n');
execFileSync('ffmpeg', ['-v', 'error', '-y', '-threads', '2', '-f', 'concat', '-safe', '0', '-i', path.join(OUT, 'list-v.txt'),
  '-vf', 'tile=2x3', '-frames:v', '1', path.join(OUT, 'verify.png')]);
console.log(path.join(OUT, 'verify.png'));
