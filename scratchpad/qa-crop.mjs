// Recorta regiones de las capturas full para revisarlas a tamaño legible.
// Uso: node qa-crop.mjs <in.png> <out.png> <left> <top> <width> <height>
import sharp from 'sharp';
const [inp, out, l, t, w, h] = process.argv.slice(2);
const img = sharp(inp, { limitInputPixels: false });
const meta = await img.metadata();
const left = Number(l), top = Number(t);
const width = Math.min(Number(w), meta.width - left);
const height = Math.min(Number(h), meta.height - top);
await img.extract({ left, top, width, height }).png().toFile(out);
console.log(out, meta.width, meta.height, '->', width, height);
