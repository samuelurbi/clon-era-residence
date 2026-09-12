// Imprime ancho x alto de las imágenes que coincidan con un patrón.
// Uso: node qa-dims.mjs <regex>
import sharp from 'sharp';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
const dir = fileURLToPath(new URL('../public/images/', import.meta.url));
const re = new RegExp(process.argv[2] || '.');
for (const f of readdirSync(dir).filter((f) => re.test(f)).sort()) {
  const m = await sharp(join(dir, f)).metadata();
  console.log(f, m.width + 'x' + m.height);
}
