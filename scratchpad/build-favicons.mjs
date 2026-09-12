/* ============================================================
 *  Favicons de Bahía Mar a partir del isotipo (la ola).
 *
 *  El isotipo es una silueta verde oscuro sobre alfa (512x371). Aquí se
 *  usa SÓLO su canal alfa como máscara y se rellena con arena #E8D8C8,
 *  centrado sobre un lienzo cuadrado verde profundo #022725 con ~12 % de
 *  margen por lado. Se generan los cinco PNG que enlaza app/layout.tsx.
 *
 *  Uso: node scratchpad/build-favicons.mjs
 * ============================================================ */

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';

const ROOT =
  'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const ISOTYPE = `${ROOT}/public/images/bahiamar-isotype.png`;
const ICONS = `${ROOT}/public/icons`;

const BG = '#022725'; // verde profundo (brief: fondo oscuro profundo)
const FG = '#E8D8C8'; // arena (brief: acento suave, isotipo ICON2)
const PADDING = 0.12; // proporción del lado que queda libre a cada lado
const ISO_W = 512;
const ISO_H = 371;

const TARGETS = [
  { size: 32, file: 'favicon-32.png' },
  { size: 48, file: 'favicon-48.png' },
  { size: 192, file: 'favicon-192.png' },
  { size: 512, file: 'favicon-512.png' },
  { size: 180, file: 'apple-touch-icon.png' },
];

if (!existsSync(ISOTYPE)) {
  console.error('No existe el isotipo:', ISOTYPE);
  process.exit(1);
}

for (const { size, file } of TARGETS) {
  // La ola es más ancha que alta: se ajusta al ancho disponible.
  const w = Math.round(size * (1 - 2 * PADDING));
  const h = Math.round((w * ISO_H) / ISO_W);
  const out = `${ICONS}/${file}`;

  const filter = [
    `[0:v]scale=${w}:${h}:flags=lanczos,format=rgba[iso]`,
    `[iso]alphaextract,format=gray[mask]`,
    `color=c=${FG}:s=${w}x${h},format=rgba[fill]`,
    `[fill][mask]alphamerge[wave]`,
    `color=c=${BG}:s=${size}x${size},format=rgba[bg]`,
    `[bg][wave]overlay=(W-w)/2:(H-h)/2:format=auto,format=rgb24[out]`,
  ].join(';');

  const args = [
    '-y',
    '-threads', '2',
    '-i', ISOTYPE,
    '-filter_complex', filter,
    '-map', '[out]',
    '-frames:v', '1',
    out,
  ];

  const res = spawnSync('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
  if (res.status !== 0) {
    console.error(`ffmpeg falló en ${file}:\n${res.stderr.toString()}`);
    process.exit(1);
  }
  console.log(`ok ${file} (${size}px, ola ${w}x${h})`);
}
