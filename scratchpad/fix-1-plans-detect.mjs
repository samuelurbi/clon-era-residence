// Detecta el rectángulo del dibujo en cada hoja de plano comercial.
//
// CÓMO
//   1. ffmpeg baja la hoja (15000x10582) a 1500 px de ancho en gris crudo
//      (1 px de la vista previa = 10 px reales) — una hoja cada vez.
//   2. "Tinta" = gris < UMBRAL (el papel es 255 puro; el fantasma del otro
//      nivel en las hojas A-02 queda en torno a 235-252).
//   3. Se dilata la tinta RADIO px y se etiquetan componentes conexas: el
//      dibujo (muros, rellenos, rótulos pegados) queda en una sola pieza y
//      la columna de leyenda, el cajetín y el rótulo «1 PRIMER NIVEL» —a
//      ≥ 45 px de distancia en todas las hojas— quedan fuera.
//   4. La componente con más tinta es el dibujo; su bbox (sobre la tinta
//      sin dilatar) es lo que se recorta.
//
// Exporta detectar() para el script de recorte y, ejecutado directamente,
// imprime la bbox de cada hoja en coordenadas de la vista previa para
// contrastarla a ojo con scratchpad/fix-1-plans/<base>-sheet.png.
import { execFileSync } from 'node:child_process';
import { SHEETS } from './fix-1-plans-sources.mjs';

export const PREVIEW_W = 1500;
export const UMBRAL = 250;
export const RADIO = 15;

export function leerGris(src) {
  const buf = execFileSync('ffmpeg', [
    '-v', 'error', '-threads', '2', '-i', src,
    '-vf', `scale=${PREVIEW_W}:-1:flags=area`,
    '-f', 'rawvideo', '-pix_fmt', 'gray', '-',
  ], { maxBuffer: 64 * 1024 * 1024 });
  const H = buf.length / PREVIEW_W;
  return { buf, W: PREVIEW_W, H };
}

function dilatar(mask, W, H, r) {
  // Dilatación separable con caja (r px a cada lado): horizontal y luego vertical.
  const tmp = new Uint8Array(W * H);
  for (let y = 0; y < H; y++) {
    let cnt = 0;
    const row = y * W;
    for (let x = -r; x < W; x++) {
      if (x + r < W && mask[row + x + r]) cnt++;
      if (x - r - 1 >= 0 && mask[row + x - r - 1]) cnt--;
      if (x >= 0) tmp[row + x] = cnt > 0 ? 1 : 0;
    }
  }
  const out = new Uint8Array(W * H);
  for (let x = 0; x < W; x++) {
    let cnt = 0;
    for (let y = -r; y < H; y++) {
      if (y + r < H && tmp[(y + r) * W + x]) cnt++;
      if (y - r - 1 >= 0 && tmp[(y - r - 1) * W + x]) cnt--;
      if (y >= 0) out[y * W + x] = cnt > 0 ? 1 : 0;
    }
  }
  return out;
}

export function detectar({ buf, W, H }, opts = {}) {
  const umbral = opts.umbral ?? UMBRAL;
  const radio = opts.radio ?? RADIO;
  const ink = new Uint8Array(W * H);
  for (let i = 0; i < W * H; i++) ink[i] = buf[i] < umbral ? 1 : 0;

  const dil = dilatar(ink, W, H, radio);

  // Etiquetado por BFS (4-conexo basta tras dilatar).
  const label = new Int32Array(W * H);
  const stats = []; // por etiqueta: tinta real, bbox de tinta real
  const stack = new Int32Array(W * H);
  let next = 0;
  for (let s = 0; s < W * H; s++) {
    if (!dil[s] || label[s]) continue;
    next++;
    const st = { id: next, tinta: 0, x0: W, y0: H, x1: -1, y1: -1 };
    let sp = 0;
    stack[sp++] = s;
    label[s] = next;
    while (sp) {
      const p = stack[--sp];
      const x = p % W, y = (p - x) / W;
      if (ink[p]) {
        st.tinta++;
        if (x < st.x0) st.x0 = x;
        if (x > st.x1) st.x1 = x;
        if (y < st.y0) st.y0 = y;
        if (y > st.y1) st.y1 = y;
      }
      if (x > 0 && dil[p - 1] && !label[p - 1]) { label[p - 1] = next; stack[sp++] = p - 1; }
      if (x < W - 1 && dil[p + 1] && !label[p + 1]) { label[p + 1] = next; stack[sp++] = p + 1; }
      if (y > 0 && dil[p - W] && !label[p - W]) { label[p - W] = next; stack[sp++] = p - W; }
      if (y < H - 1 && dil[p + W] && !label[p + W]) { label[p + W] = next; stack[sp++] = p + W; }
    }
    stats.push(st);
  }
  stats.sort((a, b) => b.tinta - a.tinta);
  return { principal: stats[0], otras: stats.slice(1, 6), W, H };
}

function histograma(buf) {
  const h = new Array(256).fill(0);
  for (let i = 0; i < buf.length; i++) h[buf[i]]++;
  return h;
}

const esMain = process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, '/').split('/').pop());
if (esMain) {
  for (const s of SHEETS) {
    const g = leerGris(s.src);
    const h = histograma(g.buf);
    const claros = [255, 254, 253, 252, 251, 250, 245, 240].map((v) => `${v}:${h[v]}`).join(' ');
    const { principal: p, otras } = detectar(g);
    console.log(`${s.base.padEnd(24)} ${g.W}x${g.H}  bbox x ${p.x0}-${p.x1}  y ${p.y0}-${p.y1}  (${p.x1 - p.x0 + 1}x${p.y1 - p.y0 + 1}, tinta ${p.tinta})`);
    console.log(`   gris: ${claros}`);
    console.log(`   otras: ${otras.map((o) => `[x ${o.x0}-${o.x1} y ${o.y0}-${o.y1} t${o.tinta}]`).join(' ')}`);
  }
}
