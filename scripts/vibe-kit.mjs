/* ============================================================
 *  Kit de pegado para GoHighLevel Vibe: _deploy/vibe/KIT-GHL.html
 *
 *  Estándar del Cerebro (playbooks/gohighlevel-vibe-deploy.md,
 *  2026-09-30): quien sube a GHL no necesita terminal ni el repo. Abre
 *  esta página en el navegador y sigue 4 pasos, con un botón «Copiar»
 *  por bloque, casillas que se marcan solas y el progreso guardado en
 *  el navegador.
 *
 *  Este proyecto NO es uno nuevo: el Vibe de Bahía Mar ya existe
 *  (plantilla Vite antigua, no TanStack Start) y ya lleva el paquete
 *  pegado. Por eso el kit es de ACTUALIZACIÓN: solo lista los archivos
 *  que cambian respecto a lo último que hay en GHL, y la IA de Vibe solo
 *  tiene que crear los archivos nuevos.
 *
 *  Qué ha cambiado se calcula contra la referencia de lo pegado en GHL
 *  (REF_COMMIT: el commit en que se sincronizó el local con GHL). Si se
 *  vuelve a sincronizar o se publica, hay que mover esa referencia.
 *
 *  Uso (después de vibe-export y vibe-bundle):
 *    node scripts/vibe-kit.mjs
 * ============================================================ */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLE = join(ROOT, 'vibe-bundle');
const OUT = join(ROOT, '_deploy', 'vibe');

/**
 * Lo que hay ahora mismo en GHL. `f3f0fa9` = «sync(ghl): trae el envío de
 * «Book a call» al CRM hecho en Vibe (2026-10-22)»: su vibe-bundle se
 * comparó archivo a archivo con el ZIP de «Descargar base de código».
 * (Antes, `fc6fccb`: la sincronización del 2026-09-24.)
 */
const REF_COMMIT = process.env.REF_COMMIT || 'f3f0fa9';

const ASSET_HOST = 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/';

/** Orden de pegado y qué es cada archivo. Lo que no cambie se omite solo. */
const FILES = [
  ['src/site.css', 'Todo el CSS de la web (incluye el selector de idioma y la página de políticas).'],
  ['src/data.ts', 'Datos: villas en inglés y español, contacto oficial, títulos de página.'],
  ['src/animations.ts', 'Animaciones y utilidades de idioma.'],
  ['src/shims.ts', 'Adaptadores (títulos de página por idioma).'],
  ['src/components-layout.tsx', 'Cabecera, menú, modales, preloader y el selector de idioma.'],
  ['src/components-home.tsx', 'Secciones de la home, en los dos idiomas.'],
  ['src/components-legal.tsx', 'Textos de las políticas legales (inglés y español).'],
  ['src/components-pages.tsx', 'Villas, pie, contacto, próximamente y la página de políticas.'],
  ['src/pages.tsx', 'Las páginas (añade la de políticas).'],
  ['src/components/FormTracking.tsx', 'Envío del formulario «Book a call» al CRM (escrito en GHL).'],
  ['src/lib/tracking.ts', 'Llamada al CRM que usa el formulario (escrito en GHL).'],
  ['src/App.tsx', 'Las rutas: inglés en la raíz y español bajo /es.'],
  ['src/main.tsx', 'Arranque de la app.'],
  ['src/fonts.css', 'Tipografías.'],
  ['index.html', 'Cabecera HTML: añade el script que muestra la versión de escritorio con el teléfono en horizontal.'],
  ['package.json', 'Dependencias.'],
];

const norm = (s) => s.replace(/\r\n/g, '\n');

/**
 * Alternativa a REF_COMMIT: una carpeta con lo que hay pegado en GHL (por
 * ejemplo la réplica de la plantilla usada para verificar el último kit, o
 * el ZIP de «Descargar base de código» descomprimido). Si se da, manda.
 */
const REF_DIR = process.env.REF_DIR || '';

function atRef(file) {
  if (REF_DIR) {
    const p = join(REF_DIR, file);
    return existsSync(p) ? readFileSync(p, 'utf8') : null;
  }
  try {
    return execFileSync('git', ['show', `${REF_COMMIT}:vibe-bundle/${file}`], {
      cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
    });
  } catch {
    return null; // no existía: archivo nuevo
  }
}

/*
 * Con REF_DIR la carpeta de referencia trae los archivos PROPIOS de la
 * plantilla de GHL (su main.tsx, su package.json con sus dependencias…),
 * que nunca se pegan: compararlos daría «cambios» falsos, y pegar nuestro
 * package.json encima le quitaría a Vibe sus dependencias. Solo cuentan
 * los archivos que el kit gestiona.
 */
const TEMPLATE_OWNED = ['src/main.tsx', 'src/fonts.css', 'package.json'];

const plan = [];
for (const [file, what] of FILES) {
  if (REF_DIR && TEMPLATE_OWNED.includes(file)) continue;
  const path = join(BUNDLE, file);
  if (!existsSync(path)) continue;
  const text = readFileSync(path, 'utf8');
  const before = atRef(file);
  if (before !== null && norm(before) === norm(text)) continue;
  plan.push({ file, what, text, isNew: before === null });
}

const pkgChanged = plan.some((p) => p.file === 'package.json');
const toPaste = plan.filter((p) => p.file !== 'package.json');
const newFiles = toPaste.filter((p) => p.isNew).map((p) => p.file);

const PROMPT = `${newFiles.length ? `Haz SOLO esto:

Crea ${newFiles.length === 1 ? 'este archivo' : 'estos archivos'} con la ruta EXACTA, con una sola línea de contenido: un comentario que diga "pendiente". Yo pegaré después el contenido real.
${newFiles.map((f) => `   ${f}`).join('\n')}

` : 'No hace falta que crees nada. Solo ten en cuenta estas reglas:\n\n'}Reglas mientras trabajas en este proyecto:
- No crees ni modifiques ningún otro archivo. No toques index.css, tailwind.config, postcss.config.js ni vite.config.ts.
- No reescribas, no reformatees, no optimices y no refactorices el código que yo pegue. Es código generado y verificado para este proyecto. Si ves algo que te parece un error, dímelo en el chat en vez de cambiarlo.
- La web no usa Tailwind: su CSS es propio (src/site.css). No añadas clases ni directivas @tailwind.
- No generes imágenes con IA ni sustituyas ninguna URL de imagen. Las fotos se sirven desde ${ASSET_HOST}. Si alguna no carga, déjala y dímelo.
- No publiques hasta que yo te lo diga.`;

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const blobs = [];
function copyBlock(text, { label = 'Copiar', preview = true, id } = {}) {
  const key = id || `b${blobs.length}`;
  blobs.push([key, text]);
  return `<div class="block">
    ${preview ? `<pre>${esc(text)}</pre>` : ''}
    <button class="copy" data-id="${key}">${label}</button>
  </div>`;
}

const filesHtml = toPaste.map(({ file, what, text, isNew }, i) => {
  const kb = (Buffer.byteLength(text) / 1024).toFixed(0);
  return `<li class="file">
    <label><input type="checkbox"> <b>${i + 1}. ${file}</b> <span class="kb">${kb} KB</span>${isNew ? ' <span class="new">NUEVO</span>' : ''}</label>
    <p>${what} En Vibe: abre <code>${file}</code> → <kbd>Ctrl</kbd>+<kbd>A</kbd> → <kbd>Ctrl</kbd>+<kbd>V</kbd> → guarda.</p>
    ${copyBlock(text, { label: `Copiar ${file}`, preview: false, id: `file:${file}` })}
  </li>`;
}).join('\n');

const pkgStep = pkgChanged
  ? `<p>En Vibe abre <code>package.json</code> → <kbd>Ctrl</kbd>+<kbd>A</kbd> → <kbd>Ctrl</kbd>+<kbd>V</kbd> con esto → guarda. Después pídele a la IA: «instala las dependencias de package.json».</p>
    ${copyBlock(plan.find((p) => p.file === 'package.json').text, { label: 'Copiar package.json', preview: false, id: 'file:package.json' })}`
  : `<p class="ok">✓ <b>No hay que tocarlo.</b> Esta actualización no añade dependencias: el <code>package.json</code> de Vibe sigue valiendo tal cual.</p>`;

const html = `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Kit GHL · Bahía Mar</title>
<style>
  :root { --ink:#04332f; --soft:#5d6b68; --line:#dcdcd2; --bg:#efeee9; --accent:#022725; --ok:#2f8f5b; }
  * { box-sizing: border-box }
  body { margin:0; font:15px/1.55 Archivo, Inter, system-ui, sans-serif; color:var(--ink); background:var(--bg) }
  header { position:sticky; top:0; z-index:2; display:flex; gap:16px; align-items:center; padding:14px 24px; background:#fff; border-bottom:1px solid var(--line) }
  header h1 { margin:0; font-size:17px }
  .progress { margin-left:auto; color:var(--soft); font-size:14px; white-space:nowrap }
  main { max-width:900px; margin:0 auto; padding:24px 16px 80px }
  .step { background:#fff; border:1px solid var(--line); border-radius:16px; padding:20px 24px; margin-bottom:16px }
  .step h3 { display:flex; align-items:center; gap:10px; margin:0 0 8px; font-size:17px }
  .step h3 span { display:inline-grid; place-items:center; width:28px; height:28px; border-radius:50%; background:var(--accent); color:#fff; font-size:14px; flex:none }
  .block { position:relative; margin:10px 0 14px }
  pre { margin:0; padding:14px 16px; max-height:260px; overflow:auto; white-space:pre-wrap; font:13px/1.5 ui-monospace, Consolas, monospace; background:var(--bg); border-radius:10px; border:1px solid var(--line) }
  .copy { margin-top:8px; padding:9px 18px; border:0; border-radius:999px; background:var(--accent); color:#fff; font:inherit; font-weight:600; cursor:pointer }
  .copy.done { background:var(--ok) }
  code, kbd { font:13px ui-monospace, Consolas, monospace; background:var(--bg); padding:1px 6px; border-radius:6px; border:1px solid var(--line); overflow-wrap:anywhere }
  .files { list-style:none; padding:0; margin:0 }
  .file { border-top:1px solid var(--line); padding:12px 0 }
  .file p { margin:4px 0 0; color:var(--soft) }
  .kb { color:var(--soft); font-weight:400; font-size:13px }
  .new { font-size:11px; font-weight:700; letter-spacing:.08em; color:#fff; background:#b55329; border-radius:999px; padding:2px 8px }
  .file:has(input:checked) { opacity:.55 }
  .warn { background:#fff7e6; border:1px solid #f1dfb4; border-radius:10px; padding:10px 14px }
  .ok { background:#eaf5ee; border:1px solid #c5e3d0; border-radius:10px; padding:10px 14px }
  .intro { color:var(--soft); margin:0 0 20px }
  li { margin-bottom:4px }
</style></head>
<body>
<header><h1>Kit GoHighLevel · Bahía Mar</h1><span class="progress" id="progress"></span></header>
<main>
  <p class="intro"><b>Actualización</b> del proyecto Vibe que ya existe (subcuenta CARIBECLIC): web en inglés y español con selector de idioma, página de políticas legales y teléfono, email y dirección oficiales. Las imágenes ya están en su servidor: en Vibe solo se pega código. <b>Los archivos que no aparecen aquí no se tocan.</b> Las casillas se guardan en este navegador: puedes parar y seguir otro día.</p>

  <div class="step"><h3><span>1</span> package.json</h3>
    ${pkgStep}
  </div>

  <div class="step"><h3><span>2</span> Mensaje para la IA de Vibe</h3>
    <p>Si la IA tiene alguna pregunta pendiente de antes, ciérrala (o responde «olvida lo anterior»). Pega este mensaje y <b>espera</b> a que termine.${newFiles.length ? ` Después comprueba en el árbol que existe${newFiles.length > 1 ? 'n' : ''} ${newFiles.map((f) => `<code>${f}</code>`).join(', ')} con ese nombre exacto (mismas mayúsculas, dentro de <code>src/</code>, sin carpetas de más).` : ''}</p>
    ${copyBlock(PROMPT, { id: 'prompt' })}
  </div>

  <div class="step"><h3><span>3</span> Pegar los ${toPaste.length} archivos (sin IA)</h3>
    <p>Uno a uno, <b>en este orden</b>. Al pulsar «Copiar» se marca solo. Mientras no estén todos, la vista previa puede dar errores: es normal, no le pidas a la IA que los arregle.</p>
    <ol class="files">${filesHtml}</ol>
  </div>

  <div class="step"><h3><span>4</span> Comprobar la vista previa</h3>
    <ul>
      <li>Abajo a la derecha aparece el selector <b>EN / ES</b>. Púlsalo en la home, en <i>Villas</i> y en una ficha: la misma página cambia de idioma (la dirección pasa de <code>/villas</code> a <code>/es/villas</code>).</li>
      <li>En español, recorre la home entera, el menú (en móvil también), <i>Agende una llamada</i>, una ficha de villa y <i>Contacto</i>: no debería quedar texto en inglés.</li>
      <li>Pie de página: teléfono <b>+1 (829) 599-7785</b>, email <b>hola@bahiamarterrenas.com</b> y la oficina de Punta Cana. Pulsa «Política de privacidad»: abre la página de políticas en esa sección.</li>
      <li>Página de políticas (<code>/legal</code> y <code>/es/legal</code>): el índice de la izquierda lleva a cada sección.</li>
      <li>Que se vean todas las fotos y que la vegetación del hero y del pie se mueva.</li>
    </ul>
    <p class="warn">Si sale <code>Failed to resolve import "@/components-legal"</code> → el archivo del paso 2 no existe o tiene otro nombre: revisa el árbol.<br>
    Si sale <code>Cannot access … before initialization</code> → algún archivo quedó a medio pegar: vuelve a copiarlo entero.<br>
    Si los estilos se ven rotos → revisa que <code>src/site.css</code> esté pegado entero y que la IA no haya añadido <code>@tailwind</code>.<br>
    Cualquier otro error: haz captura y pásamela antes de pedirle nada a la IA de Vibe.</p>
    <p><b>No publiques</b> hasta revisarlo.</p>
  </div>
</main>
<script>
  const DATA = ${JSON.stringify(Object.fromEntries(blobs)).replace(/<\//g, '<\\/')};
  const boxes = [...document.querySelectorAll('.file input')];
  const KEY = 'kit-bahiamar-' + ${JSON.stringify(String(Date.now()))};
  let saved = []; try { saved = JSON.parse(localStorage.getItem(KEY) || '[]') } catch {}
  boxes.forEach((b, i) => { b.checked = !!saved[i]; b.addEventListener('change', save) });
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(boxes.map(b => b.checked))) } catch {}
    document.getElementById('progress').textContent = boxes.filter(b => b.checked).length + ' / ' + boxes.length + ' archivos pegados';
  }
  save();
  document.querySelectorAll('.copy').forEach(b => b.addEventListener('click', async () => {
    await navigator.clipboard.writeText(DATA[b.dataset.id]);
    const t = b.textContent; b.textContent = '✓ Copiado'; b.classList.add('done');
    const box = b.closest('.file')?.querySelector('input'); if (box) { box.checked = true; save() }
    setTimeout(() => { b.textContent = t; b.classList.remove('done') }, 1800);
  }));
</script>
</body></html>`;

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'KIT-GHL.html'), html);
/* Lo que el test del kit compara contra el portapapeles. */
writeFileSync(join(OUT, 'kit-manifest.json'), JSON.stringify(
  { ref: REF_DIR || REF_COMMIT, files: toPaste.map((p) => p.file), newFiles, pkgChanged }, null, 2));

console.log(`\n  vibe-kit  (contra ${REF_DIR || REF_COMMIT}, lo último en GHL)`);
for (const p of toPaste) console.log(`  ${p.isNew ? 'NUEVO ' : 'cambia'}  ${p.file.padEnd(28)} ${(Buffer.byteLength(p.text) / 1024).toFixed(0)} KB`);
console.log(`  package.json: ${pkgChanged ? 'CAMBIA' : 'igual'}`);
console.log(`  → ${join(OUT, 'KIT-GHL.html')} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KB)\n`);
