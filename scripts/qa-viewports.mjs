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

/*
 * Hero de la portada: las piezas no se pueden pisar entre sí (pestañas
 * de villa, «BAHÍA MAR», «Las Terrenas», botón circular) y el botón no
 * puede crecer sin tope. Las cajas son las del TEXTO (letra a letra si
 * SplitText lo ha troceado; «Las Terrenas» va girado y su caja entera
 * sería un rectángulo enorme), y la del botón, el cuadrado inscrito en
 * el círculo.
 *
 * Tope del botón: en el teléfono (390) mide ~152px y en 1440×900
 * ~187px. Se permite max(160px, 22% del lado corto de la pantalla):
 * pasa en los dos y caza el botón de 258px del Fold abierto.
 */
function heroCheck() {
  const out = [];
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  const rectsOf = (el) => {
    if (!el) return [];
    const chars = el.querySelectorAll('.split-char');
    if (chars.length) return [...chars].map((c) => c.getBoundingClientRect()).filter((r) => r.width && r.height);
    const range = document.createRange();
    range.selectNodeContents(el);
    return [...range.getClientRects()].filter((r) => r.width && r.height);
  };
  const parts = [];
  const h1 = document.querySelector('.hero-s_logo .h1');
  parts.push({ n: '«Bahía Mar»', rs: rectsOf(h1) });
  parts.push({ n: '«Las Terrenas»', rs: rectsOf(document.querySelector('.hero-s_logo_a .a2')) });
  for (const a of document.querySelectorAll('.hero-s_tabs .nav-item')) {
    const label = a.querySelector('.nav-item_label_text:not(.is-2)') || a;
    parts.push({ n: `pestaña «${a.textContent.trim().slice(0, a.textContent.trim().length / 2)}»`, rs: rectsOf(label), tab: true });
  }
  const btn = document.querySelector('.hero-s_btn .btn-circle');
  if (btn) {
    const b = btn.getBoundingClientRect();
    const d = Math.min(b.width, b.height);
    const cap = Math.max(160, 0.22 * Math.min(vw, vh));
    if (d > cap + 1) out.push({ k: 'botón', d: `botón circular de ${Math.round(d)}px (tope ${Math.round(cap)}px)` });
    const k = (1 - Math.SQRT1_2) / 2; // cuadrado inscrito
    parts.push({ n: 'botón circular', rs: [new DOMRect(b.left + b.width * k, b.top + b.height * k, b.width * Math.SQRT1_2, b.height * Math.SQRT1_2)] });
  }
  // Se exige un poco de aire (AIR px), no solo que no se crucen: dos
  // textos que se rozan también se leen como «pisados».
  const AIR = 8;
  const hit = (a, b) => Math.min(a.right, b.right) - Math.max(a.left, b.left) > -AIR && Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top) > -AIR;
  for (let i = 0; i < parts.length; i++) {
    for (let j = i + 1; j < parts.length; j++) {
      if (parts[i].tab && parts[j].tab) continue; // pestañas entre sí: es una fila con hueco
      // «Las Terrenas» monta sobre «BAHÍA MAR» a propósito: es el logotipo
      // (margen negativo en webflow.css), igual a 390 y a 1440.
      if (i === 0 && j === 1) continue;
      if (parts[i].rs.some((a) => parts[j].rs.some((b) => hit(a, b)))) {
        out.push({ k: 'solape', d: `${parts[i].n} pisa ${parts[j].n}` });
      }
    }
  }
  // Pestañas que se salen por abajo de la pantalla (el bloque o entra entero o no asoma).
  const tabs = document.querySelector('.hero-s_tabs')?.getBoundingClientRect();
  if (tabs && btn) {
    const b = btn.getBoundingClientRect();
    if (tabs.top < vh && b.bottom > vh + 1 && b.top < vh - 1) out.push({ k: 'cortado', d: `botón circular cortado por el borde (${Math.round(b.top)}…${Math.round(b.bottom)}, alto ${vh})` });
  }
  return out;
}

const HERO_ONLY = args.includes('--hero');
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
      if (route === '/' || route === '/es') add(await page.evaluate(heroCheck), 'hero');
      if (shotsDir) await page.screenshot({ path: join(shotsDir, `${w}x${h}${route.replace(/\//g, '_') || '_'}.png`) });
      if (HERO_ONLY) throw Object.assign(new Error('hero'), { heroOnly: true });
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
      if (!e.heroOnly) found.set('err', { k: 'error', d: String(e.message).slice(0, 120), where: '' });
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
