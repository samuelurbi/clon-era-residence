/* ============================================================
 *  Render de la imagen Open Graph de Bahía Mar.
 *
 *  Abre scratchpad/og-template.html en Brave (Playwright), espera a que
 *  carguen fuentes e imagen, captura exactamente 1200x630 a escala 1 y
 *  convierte el PNG a WebP (calidad 85) en public/images/open-graph.webp,
 *  pisando el de ERA.
 *
 *  Uso: node scratchpad/og-render.mjs
 * ============================================================ */

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const ROOT =
  'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const TEMPLATE = `${ROOT}/scratchpad/og-template.html`;
const PNG = `${ROOT}/scratchpad/og-render.png`;
const WEBP = `${ROOT}/public/images/open-graph.webp`;

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools';
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
);

const BRAVE = 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe';
if (!existsSync(BRAVE)) {
  console.error('No se encuentra Brave en', BRAVE);
  process.exit(1);
}

const browser = await chromium.launch({ executablePath: BRAVE, headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 1,
  });

  await page.goto(pathToFileURL(TEMPLATE).href, { waitUntil: 'load' });

  // Fuentes de Google e imagen de fondo: esperar a que estén de verdad.
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.addEventListener('load', res, { once: true });
              img.addEventListener('error', res, { once: true });
            }),
      ),
    );
  });
  await page.waitForTimeout(600);

  const estado = await page.evaluate(() => ({
    serif: document.fonts.check('80px "Instrument Serif"'),
    sans: document.fonts.check('20px "Archivo"'),
    imagenes: [...document.images].map(
      (i) => `${i.getAttribute('src')} -> ${i.naturalWidth}x${i.naturalHeight}`,
    ),
  }));
  console.log('fuentes/imágenes:', estado);
  if (estado.imagenes.some((s) => s.endsWith('0x0'))) {
    throw new Error('Alguna imagen de la plantilla no cargó (0x0).');
  }

  await page.screenshot({
    path: PNG,
    type: 'png',
    clip: { x: 0, y: 0, width: 1200, height: 630 },
  });
  console.log('png ->', PNG);
} finally {
  await browser.close();
}

const res = spawnSync(
  'ffmpeg',
  ['-y', '-threads', '2', '-i', PNG, '-c:v', 'libwebp', '-quality', '85', '-frames:v', '1', WEBP],
  { stdio: ['ignore', 'ignore', 'pipe'] },
);
if (res.status !== 0) {
  console.error('ffmpeg falló:\n' + res.stderr.toString());
  process.exit(1);
}
console.log('webp ->', WEBP);
