/* ============================================================
 *  Genera el manifiesto de pegado para GoHighLevel Vibe.
 *
 *  Vibe no tiene sincronización con git: los archivos se pegan uno a
 *  uno en su editor. Con 70+ archivos, hacerlo sin lista es garantía de
 *  olvidar alguno — y un archivo que falta no da error claro, da una
 *  pantalla rota a mitad de página.
 *
 *  El ORDEN no es cosmético, sale del playbook `gohighlevel-vibe-deploy`:
 *
 *    1. Las DEPENDENCIAS primero, y hay que pedirle a la IA que las
 *       instale. Editar package.json solo las lista, NO las instala.
 *    2. Luego config (el alias `@` sin el cual no resuelve nada).
 *    3. Luego las hojas del árbol (estilos, datos, tipos), después las
 *       ramas (lib, componentes) y por último el cascarón que las une.
 *
 *  Si se pega el código antes de instalar las dependencias, el preview
 *  dará "Failed to resolve import" hasta que existan. Es esperable y no
 *  significa que el pegado esté mal.
 *
 *  Uso:  node scripts/vibe-paste-order.mjs > vibe/PASTE-ORDER.md
 * ============================================================ */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VIBE = join(ROOT, 'vibe');

/** Bloques en el orden en que hay que pegarlos. */
const BLOQUES = [
  { titulo: 'Estilos', dir: 'src/styles',
    nota: 'El orden de `globals.css` importa: es la cascada de 5 capas del port.' },
  { titulo: 'Datos', dir: 'src/data',
    nota: 'Ficheros grandes y planos. `apartments.ts` lleva las 25 fichas.' },
  { titulo: 'Tipos', dir: 'src/types',
    nota: 'Declaraciones de los atributos `data-*` que usa el marcado de Webflow.' },
  { titulo: 'Capa de animación', dir: 'src/lib',
    nota: 'GSAP + ScrollTrigger + Lenis. No depende de React salvo en los providers.' },
  { titulo: 'Componentes', dir: 'src/components',
    nota: 'El grueso. Van DESPUÉS de lib y data, que es lo que importan.' },
  { titulo: 'Shims', dir: 'src/shims',
    nota: 'Sustituyen `next/navigation` y el `metadata` de Next.' },
  { titulo: 'Páginas y cascarón', dir: 'src/pages',
    nota: 'Lo último: son las que unen todo lo anterior.' },
];

/** Sueltos, que no viven en una carpeta. */
const SUELTOS = ['src/main.tsx', 'src/App.tsx', 'src/fonts.css'];

function walk(dir) {
  const out = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out.sort();
}

const kb = (f) => `${Math.max(1, Math.round(statSync(f).size / 1024))} KB`;

/* --- Cabecera ----------------------------------------------------- */

const deps = JSON.parse(readFileSync(join(VIBE, 'package.json'), 'utf8')).dependencies;
const nuevas = Object.entries(deps).filter(([n]) => !['react', 'react-dom'].includes(n));

let total = 0;
const salida = [];

salida.push('# Manifiesto de pegado — GoHighLevel Vibe');
salida.push('');
salida.push('GENERADO por `scripts/vibe-paste-order.mjs`. Regenéralo si cambia el árbol.');
salida.push('');
salida.push('Marca cada archivo al pegarlo. Un archivo olvidado **no da un error claro**:');
salida.push('da una sección rota a media página, que es mucho más caro de encontrar.');
salida.push('');

/* --- Paso 0: dependencias ----------------------------------------- */

salida.push('## 0. Dependencias — ANTES que el código');
salida.push('');
salida.push('Añade estas líneas al `package.json` de Vibe. **NO pegues el package.json');
salida.push('entero**: el local trae extras que allí no pintan nada.');
salida.push('');
salida.push('```json');
for (const [n, v] of nuevas) salida.push(`"${n}": "${v}",`);
salida.push('```');
salida.push('');
salida.push('Y luego **pídeselo a la IA de Vibe**, porque editar el `package.json` solo');
salida.push('las lista, no las instala:');
salida.push('');
salida.push('> instala las dependencias que acabo de añadir al package.json');
salida.push('');
salida.push('Espera a que confirme (habrá actualizado `bun.lock`) antes de seguir.');
salida.push('');

/* --- Paso 1: config ----------------------------------------------- */

salida.push('## 1. Configuración');
salida.push('');
salida.push('Comprueba que el alias `@` → `./src` existe en `vite.config.ts` y en los');
salida.push('`paths` del `tsconfig`. **Sin eso no resuelve ni un import** — todo el');
salida.push('código pegado usa `@/components/…`, `@/lib/…`, `@/data/…`.');
salida.push('');
salida.push('- [ ] `index.html`  — lleva meta, Open Graph, favicons, tipografías y el GTM');
salida.push('');

/* --- Bloques ------------------------------------------------------- */

let paso = 2;
for (const bloque of BLOQUES) {
  const from = join(VIBE, bloque.dir);
  if (!existsSync(from)) continue;
  const files = walk(from);
  total += files.length;

  salida.push(`## ${paso}. ${bloque.titulo}  (${files.length})`);
  salida.push('');
  salida.push(`${bloque.nota}`);
  salida.push('');
  for (const f of files) {
    salida.push(`- [ ] \`${relative(VIBE, f).replace(/\\/g, '/')}\`  · ${kb(f)}`);
  }
  salida.push('');
  paso += 1;
}

/* --- Sueltos ------------------------------------------------------- */

salida.push(`## ${paso}. Entrada  (${SUELTOS.length})`);
salida.push('');
salida.push('Lo último de todo: al pegar `App.tsx` el árbol queda montado y el preview');
salida.push('intentará renderizar el sitio entero.');
salida.push('');
for (const s of SUELTOS) {
  const f = join(VIBE, s);
  if (!existsSync(f)) continue;
  total += 1;
  salida.push(`- [ ] \`${s}\`  · ${kb(f)}`);
}
salida.push('');

/* --- Cierre -------------------------------------------------------- */

salida.push('---');
salida.push('');
salida.push(`**Total: ${total} archivos** (más \`index.html\` y las ${nuevas.length} dependencias).`);
salida.push('');
salida.push('## Al terminar');
salida.push('');
salida.push('1. Abre el **preview**. Errores esperables y su causa:');
salida.push('   - *Failed to resolve import "x"* → la dependencia no se instaló (paso 0).');
salida.push('   - *Cannot find module "@/…"* → falta el alias (paso 1).');
salida.push('   - Una sección en blanco → falta un archivo de esa sección.');
salida.push('2. Comprueba que las imágenes cargan. Vienen del host externo por URL');
salida.push('   absoluta; si una falla es un **404 mudo**, sin rastro en consola.');
salida.push('3. **No dejes que la IA sustituya imágenes.** Son renders reales de la');
salida.push('   promoción y planos de vivienda, no placeholders.');
salida.push('');

console.log(salida.join('\n'));
