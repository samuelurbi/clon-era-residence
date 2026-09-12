// Larger previews (640px) of a few candidate renders, tiled in one sheet.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/bahia-mar-personalizacion';
const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/cta-sheet';
const A2 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO';
const A3 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-003/00. BAHÍA MAR_RENDERS_AGOSTO';
const A1 = '00. BAHÍA MAR_RENDERS_AGOSTO';

const candidates = process.argv[2] === 'b'
  ? [
      `${A1}/00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES/R5.png`,
      `${A1}/00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES/R6.png`,
      `${A1}/00. RENDERS VILLA D - BAHÍA MAR/01. RENDERS EXTERIORES/R7.png`,
      `${A2}/00. RENDERS VILLA C - BAHÍA MAR/01. RENDERS EXTERIORES/R9.png`,
      `${A2}/00. RENDERS VILLA E - BAHÍA MAR/01. RENDERS EXTERIORES/R7_3.png`,
      `${A1}/00. RENDERS VILLA E - BAHÍA MAR/01. RENDERS EXTERIORES/R9_2.png`,
    ]
  : [
      `${A2}/00. RENDERS VILLA B - BAHÍA MAR/01. RENDERS EXTERIORES/R7.png`,
      `${A3}/00. RENDERS VILLA A - BAHÍA MAR/01. RENDERS EXTERIORES/R7_1.png`,
      `${A3}/00. RENDERS VILLA B - BAHÍA MAR/01. RENDERS EXTERIORES/R8.png`,
      `${A3}/00. RENDERS VILLA B - BAHÍA MAR/01. RENDERS EXTERIORES/R10.png`,
    ];

const SIZE = 640;
const list = [];
candidates.forEach((rel, i) => {
  const f = path.join(ROOT, rel);
  const thumb = path.join(OUT, `c${process.argv[2] || 'a'}${i}.png`);
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', f,
    '-vf', `scale=${SIZE - 8}:${SIZE - 8}:force_original_aspect_ratio=decrease,pad=${SIZE}:${SIZE}:(ow-iw)/2:(oh-ih)/2:color=${i % 2 ? 'black' : '0x333333'}`,
    '-frames:v', '1', thumb,
  ], { stdio: 'inherit' });
  console.log(`${i}\t${rel}`);
  list.push(`file '${thumb.replace(/\\/g, '/')}'`);
});
const listFile = path.join(OUT, `list-${process.argv[2] || 'a'}.txt`);
fs.writeFileSync(listFile, list.join('\n') + '\n');
const cols = 2;
const rows = Math.ceil(candidates.length / cols);
const sheet = path.join(OUT, `cand-${process.argv[2] || 'a'}.png`);
execFileSync('ffmpeg', [
  '-v', 'error', '-y', '-threads', '2', '-f', 'concat', '-safe', '0', '-i', listFile,
  '-vf', `tile=${cols}x${rows}`, '-frames:v', '1', sheet,
], { stdio: 'inherit' });
console.log('sheet:', sheet);
