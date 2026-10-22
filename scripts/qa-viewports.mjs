/* ============================================================
 *  QA de maquetación por tamaño de pantalla (tablet, Z Fold, casi
 *  cuadradas), medido por código y no a ojo.
 *
 *  Para cada página EN/ES y cada tamaño, recorre la página entera con
 *  la rueda (para que GSAP/ScrollTrigger revelen lo que toca) y apunta:
 *    hscroll   la página se puede desplazar en horizontal
 *    fuera     un texto visible que se sale del viewport en horizontal
 *    recorte   un texto cortado por su contenedor (overflow hidden)
 *    tapado    un botón/enlace fijo (cabecera, idioma, «Book a call»)
 *              que queda debajo de otro elemento fijo
 *    alto      un titular más alto que la pantalla
 *
 *  Uso (con next dev o vite preview en marcha):
 *    node scripts/qa-viewports.mjs [baseUrl] [--shots carpeta] [--only /ruta]
 *
 *  Necesita playwright-core; si el repo no lo tiene, PW_CORE apunta a
 *  otro node_modules (p. ej. el de la centralita).
 * ============================================================ */

import { createRequire } from 'node:module';
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(import.meta.url);
const pw = require(process.env.PW_CORE || 'playwright-core');

const args = process.argv.slice(2);
const BASE = (args.find((a) => /^https?:/.test(a)) || 'http://localhost:3000').replace(/\/$/, '');
const shotsDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const only = args.includes('--only') ? args[args.indexOf('--only') + 1].split(',') : null;
const sizesArg = args.includes('--sizes') ? args[args.indexOf('--sizes') + 1] : null;

const SIZES = (sizesArg ||
  '884x1104,1104x884,768x840,768x1024,820x1180,1024x768,1024x1366,900x900,1000x1000,1440x900,390x844')
  .split(',').map((s) => s.split('x').map(Number));

const SLUGS = ['horizonte', 'esencia', 'armonia', 'ambar', 'remanso'];
const EN = ['/', '/villas', ...SLUGS.map((s) => `/villas/${s}`), '/contact', '/coming-soon', '/legal'];
const ROUTES = only || [...EN, ...EN.map((p) => (p === '/' ? '/es' : `/es${p}`))];

const browser = await pw.chromium.launch({ executablePath: process.env.CHROME || undefined });

function measure() {
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const out = [];
  const name = (el) => {
    const c = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
    return `${el.tagName.toLowerCase()}${c ? '.' + c : ''}`;
  };
  const visible = (el) => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const s = getComputedStyle(n);
      if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false;
    }
    return true;
  };
  // Elementos cerrados (menú, modales) no cuentan.
  const closed = (el) => el.closest('[data-modal]:not(.is-open), [aria-hidden="true"], [data-preloader], [data-master-preloader]');

  const sw = document.documentElement.scrollWidth;
  if (sw > vw + 1) out.push({ k: 'hscroll', d: `${sw}px > ${vw}px` });

  const texts = new Set();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = walker.nextNode(); t; t = walker.nextNode()) {
    if (!t.textContent.trim()) continue;
    const el = t.parentElement;
    if (!el || texts.has(el)) continue;
    texts.add(el);
  }
  const range = document.createRange();
  for (const el of texts) {
    if (closed(el) || !visible(el)) continue;
    // Texto en arco (SVG): su caja no es la de las letras; va aparte.
    if (el.closest('svg')) continue;
    // Las pestañas de villa del hero se abren en abanico al hacer scroll
    // (animación de diseño, igual a 390 y a 1440).
    if (scrollY > 0 && el.closest('.hero-w')) continue;
    // Tamaño real del texto (no de la caja): Range sobre el contenido.
    range.selectNodeContents(el);
    const r = range.getBoundingClientRect();
    if (!r.width || !r.height) continue;
    const label = `${name(el)} «${el.textContent.trim().slice(0, 40)}»`;
    // ¿Lo recorta algún ancestro?
    let clip = null;
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const s = getComputedStyle(n);
      if (/(hidden|clip|auto|scroll)/.test(s.overflowX + s.overflowY) && !n.matches('.split-line, .line-mask, [class*="mask"]')) { clip = n; break; }
    }
    // Contenedores que se desplazan a propósito (tablas legales en móvil).
    if (clip && /(auto|scroll)/.test(getComputedStyle(clip).overflowX)) continue;
    if (clip) {
      const c = clip.getBoundingClientRect();
      if (c.width > 0 && (r.left < c.left - 2 || r.right > c.right + 2) && r.width < c.width * 3) {
        out.push({ k: 'recorte', d: `${label} ${Math.round(r.width)}px en ${name(clip)} de ${Math.round(c.width)}px` });
      }
    }
    // Fuera de la pantalla en horizontal (sliders/marquees aparte).
    if ((r.right > vw + 2 || r.left < -2) && !el.closest('[class*="slider"], [class*="marquee"], [class*="swiper"], [class*="track"]')) {
      if (r.width > vw * 0.5 || (r.left > -vw * 0.3 && r.right < vw * 1.3)) {
        out.push({ k: 'fuera', d: `${label} x=${Math.round(r.left)}…${Math.round(r.right)} (vw ${vw})` });
      }
    }
  }
  // Texto en arco: la frase tiene que caber en el ancho de su SVG.
  for (const t of document.querySelectorAll('svg text')) {
    if (closed(t) || !visible(t)) continue;
    const svg = t.ownerSVGElement.getBoundingClientRect();
    const r = t.getBoundingClientRect();
    if (svg.width > 50 && r.width > svg.width * 1.02) {
      out.push({ k: 'arco', d: `«${t.textContent.trim().slice(0, 30)}» ${Math.round(r.width)}px en un SVG de ${Math.round(svg.width)}px` });
    }
  }
  for (const h of document.querySelectorAll('h1, h2, h3, .h1, .h2, .h3, .h4')) {
    if (closed(h) || !visible(h)) continue;
    const r = h.getBoundingClientRect();
    if (r.height > vh * 0.95 && h.textContent.trim().length < 80) {
      out.push({ k: 'alto', d: `${name(h)} «${h.textContent.trim().slice(0, 30)}» ${Math.round(r.height)}px > ${vh}px` });
    }
  }
  return out;
}

function fixedOverlaps() {
  const out = [];
  const name = (el) => {
    const c = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
    return `${el.tagName.toLowerCase()}${c ? '.' + c : ''}`;
  };
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const isFixed = (el) => {
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      const p = getComputedStyle(n).position;
      if (p === 'fixed' || p === 'sticky') return true;
    }
    return false;
  };
  const items = [...document.querySelectorAll('a, button, [role="button"], .lang-switch')].filter((el) => {
    if (el.closest('[aria-hidden="true"], [data-preloader]')) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4 || r.bottom < 0 || r.top > vh || r.right < 0 || r.left > vw) return false;
    const s = getComputedStyle(el);
    if (s.visibility === 'hidden' || s.pointerEvents === 'none') return false;
    return isFixed(el);
  });
  for (const el of items) {
    const r = el.getBoundingClientRect();
    // Puntos de muestra: centro y 4 puntos interiores.
    const pts = [[0.5, 0.5], [0.2, 0.5], [0.8, 0.5], [0.5, 0.2], [0.5, 0.8]];
    let covered = 0; let by = null;
    for (const [fx, fy] of pts) {
      const x = r.left + r.width * fx; const y = r.top + r.height * fy;
      if (x < 0 || y < 0 || x >= vw || y >= vh) { covered++; by = 'fuera de pantalla'; continue; }
      const top = document.elementFromPoint(x, y);
      if (!top || el.contains(top) || top.contains(el)) continue;
      // Dos capas del mismo botón (enlace + superficie del círculo).
      const same = el.closest('.btn-circle') || el.closest('.lang-switch');
      if (same && same.contains(top)) continue;
      if (getComputedStyle(top).pointerEvents === 'none') continue;
      covered++; by = name(top);
    }
    if (covered >= 3) out.push({ k: 'tapado', d: `${name(el)} «${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 25)}» bajo ${by}` });
  }
  return out;
}

const results = [];
if (shotsDir) mkdirSync(shotsDir, { recursive: true });

for (const [w, h] of SIZES) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  await ctx.addInitScript(() => {
    try { sessionStorage.setItem('hasVisited', 'true'); localStorage.setItem('cookies', 'accepted'); } catch {}
  });
  const page = await ctx.newPage();
  for (const route of ROUTES) {
    const found = new Map();
    const add = (list, where) => list.forEach((f) => { const key = f.k + f.d; if (!found.has(key)) found.set(key, { ...f, where }); });
    try {
      await page.goto(BASE + route, { waitUntil: 'load', timeout: 60000 });
      await page.waitForTimeout(6000);
      add(await page.evaluate(fixedOverlaps), 'top');
      add(await page.evaluate(measure), 'top');
      if (shotsDir) await page.screenshot({ path: join(shotsDir, `${w}x${h}${route.replace(/\//g, '_') || '_'}.png`) });
      // Recorrer la página: rueda en pasos de 0,8 pantallas.
      const total = await page.evaluate(() => document.documentElement.scrollHeight);
      const steps = Math.min(40, Math.ceil(total / (h * 0.8)));
      for (let i = 0; i < steps; i++) {
        await page.mouse.move(w / 2, h / 2);
        await page.mouse.wheel(0, h * 0.8);
        await page.waitForTimeout(450);
        const y = await page.evaluate(() => Math.round(scrollY));
        add(await page.evaluate(measure), `y=${y}`);
      }
      // Menú abierto: que quepa.
      const menuBtn = await page.$('[data-modal-menu-btn="mob"] .btn-menu_label.is-active a');
      if (menuBtn && await menuBtn.isVisible()) {
        await menuBtn.click().catch(() => {});
        await page.waitForTimeout(1500);
        add((await page.evaluate(measure)).filter((f) => f.k !== 'alto'), 'menú');
      }
    } catch (e) {
      found.set('err', { k: 'error', d: String(e.message).slice(0, 120), where: '' });
    }
    results.push({ size: `${w}x${h}`, route, issues: [...found.values()] });
    const n = found.size;
    console.log(`${n ? '✗' : '✓'} ${w}x${h} ${route}${n ? `  (${n})` : ''}`);
    for (const f of found.values()) console.log(`    ${f.k.padEnd(7)} ${f.where.padEnd(7)} ${f.d}`);
  }
  await ctx.close();
}
await browser.close();
const bad = results.filter((r) => r.issues.length).length;
console.log(`\n${results.length - bad}/${results.length} combinaciones limpias`);
