// Vista previa (1500 px de ancho) de cada hoja de plano comercial, para
// ver dónde cae el dibujo, la columna de leyenda y el cajetín en cada una.
// Una conversión ffmpeg cada vez (-threads 2): la máquina anda justa de RAM.
import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { SHEETS, OUT_PREVIEW } from './fix-1-plans-sources.mjs';

mkdirSync(OUT_PREVIEW, { recursive: true });

for (const s of SHEETS) {
  const dest = join(OUT_PREVIEW, `${s.base}-sheet.png`);
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-threads', '2', '-i', s.src,
    '-vf', 'scale=1500:-1:flags=area',
    dest,
  ], { stdio: 'inherit' });
  console.log('✓', s.base);
}
