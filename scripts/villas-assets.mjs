/* ============================================================
 *  Selecciona los renders de Bahía Mar y los deja listos para la web.
 *
 *  POR QUÉ UN SCRIPT Y NO COPIAR A MANO
 *
 *  Los renders originales son PNG de 3-12 MB cada uno, en carpetas de
 *  Google Drive partidas en cuatro (`-002`, `-003`, `-004`) con rutas que
 *  llevan tildes y espacios. Cada imagen de la web necesita además cinco
 *  anchos para su `srcset`. Son ~50 imágenes × 6 ficheros: a mano es una
 *  tarde y un inventario imposible de reproducir.
 *
 *  Aquí la selección está declarada arriba, así que cambiar qué render va
 *  en cada hueco es editar una línea y volver a correrlo.
 *
 *  SALIDA
 *
 *    public/images/villa-<slug>-<rol>.webp          (ancho completo)
 *    public/images/villa-<slug>-<rol>-p-<N>.webp    (500/800/1080/1600/2000)
 *
 *  Uso:  node villas-assets.mjs
 * ============================================================ */

import { execFileSync } from 'node:child_process';
import { readdirSync, statSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence';
const FUENTE = join(REPO, 'bahia-mar-personalizacion');
const DESTINO = join(REPO, 'public/images');

/** Anchos del srcset, los mismos que usaba el sitio original. */
const ANCHOS = [500, 800, 1080, 1600, 2000];

/**
 * Qué render va en cada hueco, elegido sobre las hojas de contacto.
 * `hero` es la foto de la tarjeta del listado; `gallery` va en la ficha.
 * Los nombres son los del fichero dentro de la carpeta de cada villa.
 */
const VILLAS = [
  {
    slug: 'coson', letra: 'A',
    hero: 'R1_1.png',
    gallery: ['R12.png', 'R11_2.png', 'R7_1.png', 'R8_1.png'],
    interiores: ['Zona social 01.png', 'Cocina.png', 'Dormitorio Principal 01.png', 'Sala TV 01.png'],
  },
  {
    slug: 'helecho', letra: 'B',
    hero: 'R1.png',
    gallery: ['R2.png', 'R5.png', 'R6.png', 'R7.png'],
    interiores: ['Zona social 01.png', 'Zona social 03.png', 'Dormitorio principal 01.png', 'Baño principal 01.png'],
  },
  {
    slug: 'remanso', letra: 'C',
    hero: 'R1.png',
    gallery: ['R3.png', 'R6.png', 'R7.png', 'R10.png'],
    interiores: ['Zona social  01.png', 'Zona social  03.png', 'Dormitorio principal 01.png', 'Baño principal 01.png'],
  },
  {
    slug: 'ambar', letra: 'D',
    hero: 'R1.png',
    gallery: ['R2.png', 'R3.png', 'R4.png', 'R7.png'],
    interiores: ['Zona social 01.png', 'Zona social 03.png', 'Dormitorio principal 01.jpg', 'Baño principal 01.jpg'],
  },
  {
    slug: 'carolina', letra: 'E',
    hero: 'R1_3.png',
    gallery: ['R3_3.png', 'R4_4.png', 'R6_3.png', 'R9_2.png'],
    interiores: ['Zona Social 01.jpg', 'Zona Social 03.jpg', 'Dormitorio principal 01.jpg', 'Picuzzi Terraza 01.jpg'],
  },
];

/* --- Localizar ficheros dentro del árbol partido de Drive ----------- */

/**
 * Índice nombre-de-fichero -> ruta. Las carpetas `-002/-003/-004` son
 * trozos del mismo Drive y repiten ficheros; nos quedamos con el primero
 * que aparece y, a igualdad de nombre, con el más pesado (las copias de
 * `BACKUP` y `Versión Anterior` se descartan antes).
 */
const indice = new Map();

function indexar(dir) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      if (/BACKUP|Versión Anterior|Antiguo/i.test(e.name)) continue;
      indexar(p);
    } else {
      const clave = `${claveVilla(p)}|${e.name}`;
      const prev = indice.get(clave);
      if (!prev || statSync(p).size > statSync(prev).size) indice.set(clave, p);
    }
  }
}

/** Letra de villa a la que pertenece una ruta, o '' si no es de ninguna. */
function claveVilla(p) {
  const m = p.match(/RENDERS VILLA ([A-E])/);
  return m ? m[1] : '';
}

function localizar(letra, nombre) {
  const p = indice.get(`${letra}|${nombre}`);
  if (!p) throw new Error(`No encuentro "${nombre}" en la villa ${letra}`);
  return p;
}

/* --- Conversión ---------------------------------------------------- */

/**
 * Las imágenes salen CUADRADAS, y no es un capricho: las del sitio
 * original son 2350x2350 y la tarjeta las pinta con `aspect-ratio:1`.
 * Si se dejara la proporción nativa del render —2.39:1 cinematográfico—
 * el navegador recortaría por su cuenta y se comería media villa.
 *
 * El recorte es centrado, que es donde el estudio compuso el edificio en
 * todos los renders de fachada.
 */
function convertir(origen, base) {
  const salidas = [];
  // Ancho completo: tope de 2350 px, que es lo que usaba el original.
  ejecutar(origen, join(DESTINO, `${base}.webp`), 2350, 82);
  salidas.push(`${base}.webp`);
  for (const w of ANCHOS) {
    ejecutar(origen, join(DESTINO, `${base}-p-${w}.webp`), w, 80);
    salidas.push(`${base}-p-${w}.webp`);
  }
  return salidas;
}

function ejecutar(origen, destino, ancho, calidad) {
  execFileSync('ffmpeg', [
    '-v', 'error', '-y', '-i', origen,
    // `min(ancho, iw)` para no reescalar hacia arriba: el lado del cuadrado
    // que sale de un render 2.39:1 es su alto, y ahí no hay más píxeles.
    '-vf', `crop='min(iw,ih)':'min(iw,ih)',scale='min(${ancho},iw)':-1:flags=lanczos`,
    '-c:v', 'libwebp', '-quality', String(calidad), '-compression_level', '6',
    destino,
  ]);
}

/* --- Main ----------------------------------------------------------- */

if (!existsSync(DESTINO)) mkdirSync(DESTINO, { recursive: true });
console.log('  indexando renders…');
indexar(FUENTE);
console.log(`  ${indice.size} ficheros indexados\n`);

/** Inventario para el informe final: qué render acabó en qué imagen. */
const inventario = [];

for (const v of VILLAS) {
  const piezas = [
    { rol: 'hero', nombre: v.hero },
    ...v.gallery.map((n, i) => ({ rol: `g${i + 1}`, nombre: n })),
    ...v.interiores.map((n, i) => ({ rol: `i${i + 1}`, nombre: n })),
  ];

  for (const { rol, nombre } of piezas) {
    const origen = localizar(v.letra, nombre);
    const base = `villa-${v.slug}-${rol}`;
    convertir(origen, base);
    inventario.push({
      villa: v.slug,
      rol,
      origen: origen.replace(FUENTE + '\\', '').replace(/\\/g, '/'),
      destino: `/images/${base}.webp`,
    });
  }
  console.log(`  ✓ villa ${v.slug.padEnd(9)} ${piezas.length} imágenes × 6 anchos`);
}

writeFileSync(
  join(REPO, 'bahia-mar-personalizacion/INVENTARIO-IMAGENES.json'),
  JSON.stringify(inventario, null, 2),
);
console.log(`\n  ${inventario.length} imágenes. Inventario en bahia-mar-personalizacion/INVENTARIO-IMAGENES.json`);
