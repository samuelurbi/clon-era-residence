/**
 * PALETTE-BRAND-02 · Candidatos para el hueco del «mapa» de /contact.
 *
 * Recorta cada render a la proporción del hueco (1.895:1, la del SVG
 * original 1440x760), lo reduce a 480 px, mide la luminancia media (YAVG,
 * 0-255) en las zonas que cubre el cromo fijo —columna izquierda (sello),
 * columna derecha (nav), zona de la caja de redes— y monta una hoja de
 * contactos. Un ffmpeg cada vez, -threads 2: la máquina va justa de RAM.
 *
 *   node scratchpad/fix-1-contact-candidates.mjs
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const SRC = join(ROOT, 'bahia-mar-personalizacion');
const OUT = join(ROOT, 'scratchpad/fix-1-contact-candidates');
mkdirSync(OUT, { recursive: true });

const AM = '00. AMENIDADES';
const candidates = [
  `${AM}/PORTICO INGRESO/PÓRTICO INGRESO 01.png`,
  `${AM}/PORTICO INGRESO/PÓRTICO INGRESO 02.png`,
  `${AM}/PORTICO INGRESO/PÓRTICO INGRESO 03.png`,
  `${AM}/PORTICO INGRESO/PÓRTICO INGRESO 04.png`,
  ...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((n) => `${AM}/CASA CLUB/INGRESO CASA CLUB ${String(n).padStart(2, '0')}.png`),
  ...[1, 2, 3, 4, 5].map((n) => `${AM}/PISCINA/PISCINA 0${n}.png`),
  ...[1, 2, 3, 4, 5, 6, 7].map((n) => `${AM}/SENDERO/SENDERO 0${n}.png`),
  `${AM}/COWORKING EXTERIOR 01.png`,
  `${AM}/COWORKING EXTERIOR 02.png`,
  ...[1, 2, 3, 4, 5].map((n) => `${AM}/CAFETERÍA 0${n}.png`),
];

const ASPECT = 1440 / 760;
const rows = [];

function yavg(file, crop) {
  // movie= no admite rutas con «C:» ni espacios: se ejecuta con cwd en la
  // carpeta de thumbnails y se le pasa sólo el nombre (ASCII).
  const out = execFileSync(
    'ffprobe',
    [
      '-v', 'error', '-f', 'lavfi',
      '-i', `movie=${file},crop=${crop},signalstats`,
      '-show_entries', 'frame_tags=lavfi.signalstats.YAVG', '-of', 'csv=p=0',
    ],
    { encoding: 'utf8', cwd: OUT },
  );
  return Number(out.trim().split('\n')[0]);
}

candidates.forEach((rel, i) => {
  const src = join(SRC, rel);
  const id = String(i + 1).padStart(2, '0');
  const thumb = join(OUT, `cand-${id}.png`);
  if (!existsSync(src)) {
    rows.push({ id, rel, missing: true });
    return;
  }
  if (!existsSync(thumb)) {
    execFileSync('ffmpeg', [
      '-v', 'error', '-y', '-threads', '2', '-i', src,
      '-vf', `crop='min(iw,ih*${ASPECT})':'min(ih,iw/${ASPECT})',scale=480:-1`,
      '-frames:v', '1', thumb,
    ]);
  }
  const name = `cand-${id}.png`;
  const all = yavg(name, 'iw:ih:0:0');
  const left = yavg(name, 'iw*0.10:ih:0:0');
  const right = yavg(name, 'iw*0.10:ih:iw*0.90:0');
  const social = yavg(name, 'iw*0.08:ih*0.20:iw*0.18:ih*0.40');
  rows.push({ id, rel, all, left, right, social });
});

// Hoja de contactos: 4 columnas.
execFileSync('ffmpeg', [
  '-v', 'error', '-y', '-threads', '2',
  '-i', join(OUT, 'cand-%02d.png'),
  '-vf', `scale=320:-1,tile=4x${Math.ceil(candidates.length / 4)}:padding=6:margin=6:color=white`,
  '-frames:v', '1', join(OUT, 'sheet.png'),
]);

const fmt = (n) => (n === undefined ? '  -  ' : String(Math.round(n)).padStart(5));
console.log(' id  all   left  right social  file');
for (const r of rows) {
  if (r.missing) console.log(`${r.id}  MISSING  ${r.rel}`);
  else console.log(`${r.id} ${fmt(r.all)} ${fmt(r.left)} ${fmt(r.right)} ${fmt(r.social)}  ${r.rel}`);
}
console.log('\nsheet:', join(OUT, 'sheet.png'));
