/* ============================================================
 *  Regenera el gemelo y el bundle con los valores de PRODUCCIÓN.
 *
 *  POR QUÉ EXISTE
 *
 *  El paso previo a pegar en Vibe son dos scripts encadenados y dos
 *  variables de entorno. Las variables son el punto débil: si se olvidan
 *  o se escriben mal, `vibe-export.mjs` no falla — genera rutas de asset
 *  distintas, y dentro de Vibe una imagen con la URL equivocada es un
 *  404 MUDO. No hay error en consola: la foto simplemente no está. Con
 *  643 URLs en juego, eso es descubrirlo mirando la web.
 *
 *  Así que los dos valores viven aquí, escritos una vez y comprobados
 *  contra lo que ya está subido, en vez de en la memoria de nadie.
 *
 *  LOS DOS VALORES
 *
 *  ASSET_BASE  el host externo. Vibe no aloja binarios, así que las 402
 *              rutas de `public/` se sirven desde fuera por URL absoluta.
 *
 *  ASSET_SEP   `%5C` y no `/`, por el accidente del ZIP que documenta
 *              `vibe-export.mjs`: en el host no hay carpetas, hay 365
 *              ficheros llamados literalmente `images\foo.webp`. Si algún
 *              día se sube `era-assets-v2.zip` (ya generado, con los
 *              nombres correctos), esta línea se borra y ya está.
 *
 *  Uso:
 *    node scripts/vibe-preparar.mjs        para pegar en Vibe
 *    node scripts/vibe-preparar.mjs --local  sin prefijar, para `vibe/` en local
 *
 *  Después:
 *    node scripts/vibe-copiar.mjs --cambios
 * ============================================================ */

import { spawnSync } from 'node:child_process';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));

/* Comprobados contra las URLs del bundle que está subido. */
const PRODUCCION = {
  ASSET_BASE: 'https://puntacanadinnerinthesky.com/urbatrix/era',
  ASSET_SEP: '%5C',
};

const local = process.argv.includes('--local');

/*
 * En modo local las rutas se quedan en `/images/…`, que es lo que necesita
 * `cd vibe && npm run dev`: su vite.config.ts apunta `publicDir` al
 * `public/` del repo. Es la prueba de fuego ANTES de tocar GHL.
 */
const entorno = local
  ? { ...process.env, ASSET_BASE: '', ASSET_SEP: '' }
  : { ...process.env, ...PRODUCCION };

console.log(local
  ? '\n  modo LOCAL — rutas sin prefijar, para probar en vibe/\n'
  : `\n  modo VIBE — assets desde ${PRODUCCION.ASSET_BASE}\n`);

for (const script of ['vibe-export.mjs', 'vibe-bundle.mjs']) {
  const r = spawnSync(process.execPath, [join(AQUI, script)], {
    stdio: 'inherit',
    env: entorno,
  });
  /* Si el export falla, el bundle concatenaría un árbol a medias. */
  if (r.status !== 0) {
    console.error(`\n  ✗ ${script} falló. Parado aquí: el bundle habría salido incompleto.\n`);
    process.exit(r.status ?? 1);
  }
}

console.log(local
  ? '\n  Listo. Pruébalo:  cd vibe && npm run dev\n'
  : '\n  Listo. Qué hay que repegar:  node scripts/vibe-copiar.mjs --cambios\n');
