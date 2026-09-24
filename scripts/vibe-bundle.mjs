/* ============================================================
 *  Empaquetador para GoHighLevel Vibe: 76 archivos -> 10.
 *
 *  POR QUÉ EXISTE
 *
 *  En Vibe no hay sincronización con git ni botón «+» para crear
 *  archivos: cada archivo nuevo hay que pedírselo a su IA, uno por uno,
 *  y esa IA reinterpreta el código si la dejas. Con 76 archivos eso es
 *  una tarde entera y decenas de oportunidades de que algo se cambie
 *  por el camino.
 *
 *  Se intentó primero la vía limpia —escribir por la API interna de
 *  GHL—, pero su limitador devuelve 429 a cualquier tanteo. Así que
 *  toca reducir el número de archivos.
 *
 *  QUÉ HACE
 *
 *  Concatena cada grupo en un solo módulo, quitando los imports que
 *  quedan DENTRO del propio grupo (ya no hacen falta) y reapuntando los
 *  que van a otro grupo. El resultado es equivalente: mismo código,
 *  mismo orden de cascada, menos archivos.
 *
 *  El grafo de imports lo permite porque va en una sola dirección:
 *
 *      data  <-  components  <-  pages  <-  App
 *      animations  <-  components (solo los providers)
 *      shims  <-  components y pages
 *
 *  `shims` va SUELTO a propósito: si se metiera dentro de `pages`, los
 *  componentes tendrían que importar de `pages` y se crearía un ciclo.
 *
 *  Uso:
 *    ASSET_BASE=… ASSET_SEP=… node scripts/vibe-export.mjs   # primero
 *    node scripts/vibe-bundle.mjs                            # después
 * ============================================================ */

import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync, existsSync, cpSync } from 'node:fs';
import { join, dirname, relative, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'vibe', 'src');
const OUT = join(ROOT, 'vibe-bundle');

/**
 * Los grupos, en orden de dependencia. `destino` es la ruta final y
 * `alias` es cómo lo importarán los demás grupos.
 */
const GRUPOS = [
  { nombre: 'shims', dirs: ['shims'], destino: 'src/shims.ts', alias: '@/shims' },
  { nombre: 'data', dirs: ['data'], destino: 'src/data.ts', alias: '@/data' },
  { nombre: 'animations', dirs: ['lib'], destino: 'src/animations.ts', alias: '@/animations' },
  /*
   * Los componentes van en TRES archivos, no en uno.
   *
   * Juntos son 362 KB / 4.778 líneas, y hay que pegarlos a mano en un
   * editor que corre dentro del navegador. Partirlo en tres bloques de
   * ~120 KB es la diferencia entre pegar y que se atragante.
   *
   * El corte es por zonas del sitio y es seguro: ningún componente
   * importa a otro de un bloque distinto (comprobado en el grafo — la
   * única importación entre componentes es ApartmentCard, y se queda
   * dentro de su propio bloque).
   */
  { nombre: 'comp-layout', dirs: ['components/layout', 'components/providers'], destino: 'src/components-layout.tsx', alias: '@/components-layout' },
  { nombre: 'comp-home', dirs: ['components/home'], destino: 'src/components-home.tsx', alias: '@/components-home' },
  { nombre: 'comp-pages', dirs: ['components/apartments', 'components/sections', 'components/pages'], destino: 'src/components-pages.tsx', alias: '@/components-pages' },
  { nombre: 'pages', dirs: ['pages'], destino: 'src/pages.tsx', alias: '@/pages' },
];

/** Reescrituras de especificador: de la ruta vieja al alias del grupo. */
const REESCRITURAS = [
  [/^@\/shims\/.+$/, '@/shims'],
  [/^@\/data\/.+$/, '@/data'],
  [/^@\/lib\/.+$/, '@/animations'],
  // El orden importa: lo específico antes que lo general.
  [/^@\/components\/(layout|providers)\/.+$/, '@/components-layout'],
  [/^@\/components\/home\/.+$/, '@/components-home'],
  [/^@\/components\/(apartments|sections|pages)\/.+$/, '@/components-pages'],
  [/^@\/pages\/.+$/, '@/pages'],
];

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const f = join(dir, e);
    if (statSync(f).isDirectory()) out.push(...walk(f));
    else out.push(f);
  }
  return out;
}

/* ================================================================
 *  Análisis de imports
 * ================================================================ */

/*
 * Captura sentencias `import … from '…'` completas, incluidas las que
 * ocupan varias líneas. También los `import '…'` sin bindings (efectos
 * secundarios, como los CSS).
 */
const IMPORT_RE = /^import\s+(?:([^;]*?)\s+from\s+)?'([^']+)';?\s*$/gms;

/** Parte la lista de bindings de un import en sus tres formas. */
function parseBindings(texto) {
  const res = { def: null, ns: null, named: [] };
  if (!texto) return res;

  const llave = texto.indexOf('{');
  const cierre = texto.lastIndexOf('}');

  let antes = llave >= 0 ? texto.slice(0, llave) : texto;
  antes = antes.replace(/,\s*$/, '').trim();

  if (antes.startsWith('* as ')) res.ns = antes.slice(5).trim();
  else if (antes && antes !== 'type') res.def = antes;

  if (llave >= 0 && cierre > llave) {
    for (const parte of texto.slice(llave + 1, cierre).split(',')) {
      const p = parte.trim();
      if (p) res.named.push(p);
    }
  }
  return res;
}

/** Nombre local que declara un binding (para detectar duplicados). */
function nombreLocal(spec) {
  const m = spec.match(/\s+as\s+(\w+)$/);
  if (m) return m[1];
  return spec.replace(/^type\s+/, '').trim();
}

/* ================================================================
 *  Renombrado de declaraciones privadas que colisionan
 * ================================================================ */

/*
 * Al concatenar módulos, los helpers PRIVADOS con el mismo nombre chocan.
 * En la capa de animación pasa mucho: `q` y `qa` (atajos de
 * querySelector) están copiados en 8 y 11 módulos, y hay dos `partsOf`
 * que son funciones DISTINTAS. También chocan tipos locales como `Parts`.
 *
 * No vale deduplicar: aunque `q` sea idéntico en los 8, `partsOf` no lo
 * es, y quedarse con el primero rompería el segundo en silencio. Se
 * renombra, que siempre es correcto.
 *
 * Y no vale un replace normal: `q` aparece dentro de cadenas y
 * comentarios. Por eso el renombrador de abajo recorre el texto sabiendo
 * dónde está — fuera de cadenas, comentarios y plantillas — y solo toca
 * identificadores de código real.
 */

/** Declaraciones de primer nivel NO exportadas, con su nombre. */
function declaracionesPrivadas(txt) {
  const nombres = new Set();
  const re = /^(?!export\b)(?:const|let|var|function|class|type|interface)\s+(\w+)/gm;
  for (const m of txt.matchAll(re)) nombres.add(m[1]);
  return nombres;
}

/**
 * Renombra identificadores respetando cadenas, comentarios y plantillas.
 * Dentro de `${…}` de una plantilla SÍ renombra: ahí hay código.
 */
function renombrar(txt, mapa) {
  if (!mapa.size) return txt;

  let out = '';
  let i = 0;
  const n = txt.length;
  /*
   * Último carácter de CÓDIGO emitido, sin contar comentarios, cadenas
   * ni espacios. Sirve para distinguir `obj.q` (propiedad, no se toca)
   * de un uso normal de `q`. Mirar el último carácter del texto a secas
   * no vale: un comentario que acaba en punto —«…primer criterio.»—
   * haría pasar por propiedad al identificador de la línea siguiente.
   */
  let ultimoCodigo = '';
  /* Pila de plantillas abiertas, para saber si un `}` cierra una
     interpolación o un bloque normal. */
  const plantillas = [];

  while (i < n) {
    const c = txt[i];
    const d = txt[i + 1];

    // Comentario de línea
    if (c === '/' && d === '/') {
      const fin = txt.indexOf('\n', i);
      const hasta = fin === -1 ? n : fin;
      out += txt.slice(i, hasta);
      i = hasta;
      continue;
    }
    // Comentario de bloque
    if (c === '/' && d === '*') {
      const fin = txt.indexOf('*/', i + 2);
      const hasta = fin === -1 ? n : fin + 2;
      out += txt.slice(i, hasta);
      i = hasta;
      continue;
    }
    // Cadena normal
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < n && txt[j] !== c) j += txt[j] === '\\' ? 2 : 1;
      out += txt.slice(i, Math.min(j + 1, n));
      // Una cadena SÍ es código: tras ella puede venir `.split(…)`.
      ultimoCodigo = c;
      i = j + 1;
      continue;
    }
    // Plantilla: se copia literal salvo el interior de ${…}
    if (c === '`') {
      plantillas.push(true);
      out += c;
      i += 1;
      while (i < n && plantillas.length) {
        if (txt[i] === '\\') { out += txt.slice(i, i + 2); i += 2; continue; }
        if (txt[i] === '`') { plantillas.pop(); out += '`'; i += 1; continue; }
        if (txt[i] === '$' && txt[i + 1] === '{') {
          // Interior de la interpolación: es código, se procesa aparte.
          let prof = 1;
          let j = i + 2;
          while (j < n && prof > 0) {
            if (txt[j] === '{') prof += 1;
            else if (txt[j] === '}') prof -= 1;
            j += 1;
          }
          out += '${' + renombrar(txt.slice(i + 2, j - 1), mapa) + '}';
          i = j;
          continue;
        }
        out += txt[i];
        i += 1;
      }
      ultimoCodigo = '`';
      continue;
    }
    // Identificador
    if (/[A-Za-z_$]/.test(c)) {
      let j = i;
      while (j < n && /[\w$]/.test(txt[j])) j += 1;
      const palabra = txt.slice(i, j);
      /* Un identificador precedido de `.` es una propiedad (obj.q) y no
         se toca. Se mira el último carácter de CÓDIGO, no el del texto:
         ver el comentario de `ultimoCodigo`. */
      out += ultimoCodigo === '.' ? palabra : (mapa.get(palabra) ?? palabra);
      ultimoCodigo = palabra.slice(-1);
      i = j;
      continue;
    }

    out += c;
    if (!/\s/.test(c)) ultimoCodigo = c;
    i += 1;
  }
  return out;
}

/* ================================================================
 *  Construcción de cada bundle
 * ================================================================ */

const informe = [];
const colisiones = [];
const informeRenombres = [];

for (const grupo of GRUPOS) {
  const archivos = [];
  for (const d of grupo.dirs) {
    const dir = join(SRC, d);
    if (!existsSync(dir)) continue;
    archivos.push(...walk(dir).filter((f) => /\.tsx?$/.test(f) && !f.endsWith('.d.ts')));
  }
  if (!archivos.length) continue;

  /* Orden topológico por imports relativos: si A importa de B, B va
     antes. Importa para los `const` que se evalúan al cargar el módulo
     (las funciones se elevan solas, pero las constantes no). */
  const porNombre = new Map(archivos.map((f) => [basename(f).replace(/\.tsx?$/, ''), f]));
  const deps = new Map();
  for (const f of archivos) {
    const txt = readFileSync(f, 'utf8');
    const d = new Set();
    for (const m of txt.matchAll(/from '\.\/([^']+)'/g)) {
      const objetivo = porNombre.get(m[1].replace(/\.tsx?$/, ''));
      if (objetivo) d.add(objetivo);
    }
    deps.set(f, d);
  }

  const ordenados = [];
  const visto = new Set();
  const enCurso = new Set();
  (function visitar(f) {
    if (visto.has(f) || enCurso.has(f)) return;
    enCurso.add(f);
    for (const d of deps.get(f) || []) visitar(d);
    enCurso.delete(f);
    visto.add(f);
    ordenados.push(f);
  });
  for (const f of archivos.sort()) {
    (function visitar(g) {
      if (visto.has(g) || enCurso.has(g)) return;
      enCurso.add(g);
      for (const d of deps.get(g) || []) visitar(d);
      enCurso.delete(g);
      visto.add(g);
      ordenados.push(g);
    })(f);
  }

  /* Detectar qué declaraciones privadas se repiten entre archivos del
     grupo, y preparar un renombrado por archivo para las que choquen. */
  const privadasPorArchivo = new Map();
  const cuentaNombres = new Map();
  for (const f of ordenados) {
    const nombres = declaracionesPrivadas(readFileSync(f, 'utf8'));
    privadasPorArchivo.set(f, nombres);
    for (const nm of nombres) cuentaNombres.set(nm, (cuentaNombres.get(nm) || 0) + 1);
  }

  const mapasRenombre = new Map();
  const renombrados = [];
  for (const f of ordenados) {
    const mapa = new Map();
    const sufijo = basename(f).replace(/\.tsx?$/, '').replace(/[^\w]/g, '_');
    for (const nm of privadasPorArchivo.get(f)) {
      if ((cuentaNombres.get(nm) || 0) > 1) {
        mapa.set(nm, `${nm}__${sufijo}`);
        renombrados.push(`${grupo.nombre}: ${nm} -> ${nm}__${sufijo}`);
      }
    }
    mapasRenombre.set(f, mapa);
  }
  if (renombrados.length) informeRenombres.push(...renombrados);

  /* Recolectar imports externos y cuerpos. */
  const importsPorModulo = new Map(); // modulo -> {def, ns, named:Set}
  const efectos = new Set();          // import 'x' sin bindings
  const cuerpos = [];
  const declarados = new Map();       // nombre -> archivo (para colisiones)

  for (const f of ordenados) {
    let txt = readFileSync(f, 'utf8');

    txt = txt.replace(IMPORT_RE, (completo, bindings, modulo) => {
      // Import del propio grupo: sobra, todo queda en el mismo archivo.
      if (modulo.startsWith('./') || modulo.startsWith('../')) return '';

      let destino = modulo;
      for (const [re, alias] of REESCRITURAS) {
        if (re.test(modulo)) { destino = alias; break; }
      }
      // Reapuntado a su propio grupo: también sobra.
      if (destino === grupo.alias) return '';

      if (!bindings) { efectos.add(destino); return ''; }

      if (!importsPorModulo.has(destino)) importsPorModulo.set(destino, { def: null, ns: null, named: new Map() });
      const acc = importsPorModulo.get(destino);
      const b = parseBindings(bindings);
      if (b.def) acc.def = b.def;
      if (b.ns) acc.ns = b.ns;
      for (const n of b.named) acc.named.set(nombreLocal(n), n);
      return '';
    });

    // La directiva 'use client' es de Next y aquí no pinta nada.
    txt = txt.replace(/^\s*'use client';\s*$/gm, '');

    // Renombrar los privados que chocarían con los de otro módulo.
    txt = renombrar(txt, mapasRenombre.get(f));

    // Detectar nombres duplicados entre archivos del mismo bundle.
    for (const m of txt.matchAll(/^export\s+(?:async\s+)?(?:function|const|class|interface|type)\s+(\w+)/gm)) {
      if (declarados.has(m[1])) colisiones.push(`${grupo.nombre}: "${m[1]}" en ${basename(f)} y ${basename(declarados.get(m[1]))}`);
      else declarados.set(m[1], f);
    }

    cuerpos.push(`/* ${'='.repeat(60)}\n   ${relative(SRC, f).replace(/\\/g, '/')}\n   ${'='.repeat(60)} */\n\n${txt.trim()}\n`);
  }

  /* Emitir el bundle. */
  const lineas = [];
  lineas.push('/* ' + '='.repeat(60));
  lineas.push(` *  ${grupo.nombre.toUpperCase()} — ${ordenados.length} módulos del repo en un solo archivo.`);
  lineas.push(' *');
  lineas.push(' *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.');
  lineas.push(' *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que');
  lineas.push(' *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,');
  lineas.push(' *  un archivo por componente; esto es solo el formato de entrega.');
  lineas.push(' *');
  lineas.push(' *  Los separadores de abajo dicen de qué archivo del repo viene cada');
  lineas.push(' *  bloque, para poder volver atrás sin adivinar.');
  lineas.push(' */');
  lineas.push('');

  for (const e of [...efectos].sort()) lineas.push(`import '${e}';`);
  for (const [modulo, acc] of [...importsPorModulo.entries()].sort()) {
    const partes = [];
    if (acc.def) partes.push(acc.def);
    if (acc.ns) partes.push(`* as ${acc.ns}`);
    if (acc.named.size) partes.push(`{ ${[...acc.named.values()].sort().join(', ')} }`);
    lineas.push(`import ${partes.join(', ')} from '${modulo}';`);
  }
  lineas.push('');
  lineas.push(cuerpos.join('\n'));

  const destino = join(OUT, grupo.destino);
  mkdirSync(dirname(destino), { recursive: true });
  writeFileSync(destino, lineas.join('\n'));

  informe.push({ grupo: grupo.nombre, origen: ordenados.length, kb: Math.round(lineas.join('\n').length / 1024) });
}

/* ================================================================
 *  CSS: una sola hoja, respetando el orden de la cascada
 * ================================================================ */

/*
 * `globals.css` es una lista de @import y el ORDEN es el contrato del
 * port (webflow -> lenis -> tokens -> components -> theme). Se inlinea
 * en ese mismo orden. El @import de lenis se queda como import real y
 * ARRIBA DEL TODO, porque CSS exige que los @import precedan a
 * cualquier regla; si queda en medio, el navegador lo descarta en
 * silencio y se pierde el CSS del scroll suave.
 */
const globals = readFileSync(join(SRC, 'styles', 'globals.css'), 'utf8');
const orden = [...globals.matchAll(/@import\s+"([^"]+)"/g)].map((m) => m[1]);

const cssExternos = [];
const cssPartes = [];
for (const ref of orden) {
  if (ref.startsWith('./')) {
    const f = join(SRC, 'styles', ref.slice(2));
    cssPartes.push(`/* ${'='.repeat(56)}\n   ${ref.slice(2)}\n   ${'='.repeat(56)} */\n\n${readFileSync(f, 'utf8')}`);
  } else {
    cssExternos.push(ref);
  }
}
// Lo que globals.css trae DESPUÉS de los @import (ajustes propios del port).
cssPartes.push(`/* ${'='.repeat(56)}\n   ajustes propios (de globals.css)\n   ${'='.repeat(56)} */\n\n${globals.replace(/@import\s+"[^"]+";\s*/g, '')}`);

const css = [
  '/* ' + '='.repeat(60),
  ' *  Hoja única del sitio — GENERADO por scripts/vibe-bundle.mjs.',
  ' *',
  ' *  Es la cascada de 5 capas del port, en su orden exacto:',
  ' *  webflow -> lenis -> tokens -> components -> theme. NO reordenar:',
  ' *  cada capa está escrita para pisar a la anterior.',
  ' */',
  '',
  ...cssExternos.map((e) => `@import "${e}";`),
  '',
  cssPartes.join('\n\n'),
].join('\n');

mkdirSync(join(OUT, 'src'), { recursive: true });
writeFileSync(join(OUT, 'src', 'site.css'), css);

/* ================================================================
 *  Resto: entrada, config, index.html, tipos
 * ================================================================ */

for (const f of ['src/main.tsx', 'src/App.tsx', 'src/fonts.css', 'index.html', 'vite.config.ts', 'tsconfig.json', 'package.json']) {
  const desde = join(ROOT, 'vibe', f);
  if (!existsSync(desde)) continue;
  const hasta = join(OUT, f);
  mkdirSync(dirname(hasta), { recursive: true });

  if (f === 'src/main.tsx') {
    // Ya no hay styles/globals.css: ahora es site.css.
    writeFileSync(hasta, readFileSync(desde, 'utf8').replace("@/styles/globals.css", "@/site.css"));
  } else if (f === 'src/App.tsx') {
    /*
     * App.tsx importa 12 componentes y 6 páginas, cada uno de su
     * archivo. Ahora viven repartidos en 4 bundles, así que hay que
     * reapuntar cada import y FUSIONAR los que caen en el mismo destino:
     * 12 líneas `import { X } from '@/components-layout'` seguidas serían
     * válidas, pero ilegibles justo en el archivo que explica el montaje.
     */
    let t = readFileSync(desde, 'utf8');
    const porDestino = new Map();

    /*
     * La línea se consume ENTERA, salto de línea incluido.
     *
     * Nada de sustituirla por una marca y borrar la marca con un segundo
     * regex: la primera versión hacía eso y el borrado se comía un
     * carácter de indentación de cada línea del JSX. No dio ningún error
     * —compilaba y construía igual—, solo se detectó porque el DOM
     * renderizado dejó de coincidir carácter a carácter con el de la
     * versión sin agrupar. Por eso la verificación compara huellas del
     * DOM y no impresiones.
     */
    t = t.replace(/^import \{ ([^}]+) \} from '(@\/[^']+)';[ \t]*\r?\n/gm, (completo, bindings, modulo) => {
      let destino = null;
      for (const [re, alias] of REESCRITURAS) if (re.test(modulo)) { destino = alias; break; }
      if (!destino) return completo;
      if (!porDestino.has(destino)) porDestino.set(destino, new Set());
      for (const b of bindings.split(',')) porDestino.get(destino).add(b.trim());
      return '';
    });

    const cabecera = [...porDestino.entries()]
      .sort()
      .map(([mod, set]) => `import { ${[...set].sort().join(', ')} } from '${mod}';`)
      .join('\n');

    t = t.replace(
      "import { Route, Routes } from 'react-router-dom';",
      `import { Route, Routes } from 'react-router-dom';\n\n${cabecera}`,
    );
    writeFileSync(hasta, t);
  } else {
    cpSync(desde, hasta);
  }
}

// Los tipos de los atributos data-* de Webflow: se copian tal cual.
const tipos = join(SRC, 'types');
if (existsSync(tipos)) cpSync(tipos, join(OUT, 'src', 'types'), { recursive: true });

/* ================================================================
 *  Informe
 * ================================================================ */

const totalOrigen = informe.reduce((a, b) => a + b.origen, 0);
console.log('\n  vibe-bundle');
console.log('  ' + '-'.repeat(50));
for (const i of informe) {
  console.log(`  ${i.grupo.padEnd(12)} ${String(i.origen).padStart(3)} archivos -> 1  (${i.kb} KB)`);
}
console.log(`  css            5 archivos -> 1  (${Math.round(css.length / 1024)} KB)`);
console.log('  ' + '-'.repeat(50));
console.log(`  ${totalOrigen + 5} archivos de origen -> ${informe.length + 1} bundles`);
console.log(`  más main.tsx, App.tsx, fonts.css, index.html y los tipos`);

if (informeRenombres.length) {
  console.log(`\n  ${informeRenombres.length} helper(s) privado(s) renombrados por colisión:`);
  const porNombre = new Map();
  for (const r of informeRenombres) {
    const base = r.split(' ')[1];
    porNombre.set(base, (porNombre.get(base) || 0) + 1);
  }
  for (const [nm, veces] of [...porNombre].sort((a, b) => b[1] - a[1])) {
    console.log(`     ${nm.padEnd(12)} ×${veces}`);
  }
}

if (colisiones.length) {
  console.log(`\n  ⚠ ${colisiones.length} nombre(s) declarados dos veces en el mismo bundle:`);
  for (const c of colisiones) console.log(`     ${c}`);
  console.log('     Hay que renombrar en el repo antes de empaquetar.');
  process.exitCode = 1;
} else {
  console.log('\n  ✓ sin nombres duplicados dentro de ningún bundle');
}
console.log('');
