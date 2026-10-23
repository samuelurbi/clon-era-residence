/* ============================================================
 *  Capturas de la home por tamaño, a disco, y una hoja de contacto
 *  por tamaño (montaje en una sola imagen) para revisarlas de un
 *  vistazo sin abrir decenas de PNG.
 *
 *  Uso:
 *    node scripts/qa-shots.mjs <carpeta> [baseUrl] [--sizes 884x1104,…] [--route /es]
 * ============================================================ */

import { createRequire } from 'node:module';
import { mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const pw = require(process.env.PW_CORE || 'playwright-core');

const args = process.argv.slice(2);
const dir = args[0];
const BASE = (args.find((a) => /^https?:/.test(a)) || 'http://localhost:3000').replace(/\/$/, '');
const sizes = (args.includes('--sizes') ? args[args.indexOf('--sizes') + 1] : '884x1104,1104x884,768x1024,1000x1000,1440x900,390x844')
  .split(',').map((s) => s.split('x').map(Number));
const route = args.includes('--route') ? args[args.indexOf('--route') + 1] : '/';
mkdirSync(dir, { recursive: true });

/* Lo que se fotografía: [nombre, selector al que llevar el scroll | null = arriba | 'menu'] */
const STOPS = [
  ['1-hero', null],
  ['2-razones', '.benefits-intro-w'],
  ['3-villas', '.villas-preview, [class*="villas-w"], .apt-s, [data-villas-preview]'],
  ['4-menu', 'menu'],
];

const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });
for (const [w, h] of sizes) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  await ctx.addInitScript(() => { try { sessionStorage.setItem('hasVisited', 'true'); localStorage.setItem('cookies', 'accepted'); } catch {} });
  const page = await ctx.newPage();
  await page.goto(BASE + route, { waitUntil: 'load', timeout: 60000 });
  await page.waitForTimeout(4000);
  const files = [];
  for (const [n, sel] of STOPS) {
    if (sel === 'menu') {
      await page.mouse.move(w / 2, h / 2);
      await page.evaluate(() => scrollTo(0, 0));
      await page.mouse.wheel(0, -50000);
      await page.waitForTimeout(1200);
      const b = page.locator('[data-modal-menu-btn="mob"] a, [data-modal-menu-btn] a').first();
      if (await b.isVisible().catch(() => false)) { await b.click().catch(() => {}); await page.waitForTimeout(1800); }
    } else if (sel) {
      const y = await page.evaluate((s) => { const el = document.querySelector(s); return el ? el.getBoundingClientRect().top + scrollY : null; }, sel);
      if (y == null) continue;
      // Rueda, para que Lenis y ScrollTrigger se enteren.
      await page.mouse.move(w / 2, h / 2);
      let cur = await page.evaluate(() => scrollY);
      while (Math.abs(cur - y) > 30) {
        await page.mouse.wheel(0, Math.max(-h, Math.min(h, y - cur)));
        await page.waitForTimeout(250);
        const nxt = await page.evaluate(() => scrollY);
        if (nxt === cur) break;
        cur = nxt;
      }
      await page.waitForTimeout(1500);
    }
    const f = join(dir, `${w}x${h}-${n}.png`);
    await page.screenshot({ path: f });
    files.push(f);
  }
  await ctx.close();
  // Hoja de contacto: las 4 paradas en fila, a escala.
  const sheet = await browser.newPage({ viewport: { width: 1600, height: 600 } });
  const imgs = files.map((f) => `<img src="data:image/png;base64,${readFileSync(f).toString('base64')}">`).join('');
  await sheet.setContent(`<body style="margin:0;background:#222;display:flex;gap:8px;padding:8px;align-items:flex-start">
    <style>img{height:${w > h ? 300 : 520}px;width:auto;outline:1px solid #555}</style>${imgs}
    <div style="color:#fff;font:16px sans-serif;position:fixed;bottom:4px;left:8px">${w}×${h} ${route}</div></body>`);
  await sheet.waitForTimeout(300);
  await sheet.screenshot({ path: join(dir, `hoja-${w}x${h}.png`), fullPage: true });
  await sheet.close();
  console.log(`✓ ${w}x${h}`);
}
await browser.close();
