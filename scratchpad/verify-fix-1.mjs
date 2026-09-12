/**
 * Verificación final de fix-1 (styles/theme.css):
 *   - 390: apart-info con el párrafo centrado y con el párrafo al pie del
 *     viewport (peor caso del parallax); other con la etiqueta.
 *   - 768: los mismos dos huecos (la regla cubre hasta 991px).
 *   - 1440: el h4 del Concepto en estado «hide» (retroceder tras el reveal)
 *     para ver si asoma algo por el relleno superior de las máscaras.
 *
 *   node scratchpad/verify-fix-1.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-fix-1'
mkdirSync(SALIDA, { recursive: true })
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })

async function abrir(width, height) {
  const ctx = await nav.newContext({ viewport: { width, height }, deviceScaleFactor: 2, isMobile: width < 800, hasTouch: width < 800 })
  const p = await ctx.newPage()
  await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
  await p.waitForTimeout(9_500)
  await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  await p.evaluate(async () => {
    const total = document.documentElement.scrollHeight
    for (let y = 0; y < total; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)) }
  })
  await p.evaluate(() => {
    const flor = document.querySelector('.flower.apart-info')
    const sec = flor.closest('section') || flor.parentElement
    const ps = [...sec.querySelectorAll('p')].filter((e) => /LEED/.test(e.textContent))
    if (ps.length) ps[0].setAttribute('data-sonda', 'parrafo')
    const flor2 = document.querySelector('.flower.other')
    const sec2 = flor2.closest('section') || flor2.parentElement
    const el = [...sec2.querySelectorAll('h1,h2,h3,h4,h5,h6,p,div')].find((e) => /year after year/i.test(e.textContent) && e.children.length < 6 && e.textContent.trim().length < 80)
    if (el) el.setAttribute('data-sonda', 'etiqueta')
  })
  return { ctx, p }
}

async function colocar(p, selector, posViewport) {
  // posViewport: fracción del alto del viewport donde queda el CENTRO del elemento
  await p.evaluate(async ({ selector, posViewport }) => {
    const el = document.querySelector(selector)
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top + r.height / 2 - window.innerHeight * posViewport)
  }, { selector, posViewport })
  await p.waitForTimeout(3000)
}

async function rects(p, selTexto, selFlor) {
  return p.evaluate(({ selTexto, selFlor }) => {
    const t = document.querySelector(selTexto).getBoundingClientRect()
    const f = document.querySelector(selFlor).getBoundingClientRect()
    return { texto: { x: +t.x.toFixed(0), y: +t.y.toFixed(0), r: +t.right.toFixed(0), b: +t.bottom.toFixed(0) }, flor: { x: +f.x.toFixed(0), y: +f.y.toFixed(0), r: +f.right.toFixed(0), b: +f.bottom.toFixed(0) } }
  }, { selTexto, selFlor })
}

for (const [w, h] of [[390, 844], [768, 1024]]) {
  const { ctx, p } = await abrir(w, h)
  await colocar(p, '[data-sonda="parrafo"]', 0.5)
  console.log(`${w} apart-info centro`, JSON.stringify(await rects(p, '[data-sonda="parrafo"]', '.flower.apart-info')))
  await p.screenshot({ path: `${SALIDA}/${w}-apart-info-centro.png` })
  await colocar(p, '[data-sonda="parrafo"]', 0.9)
  console.log(`${w} apart-info pie`, JSON.stringify(await rects(p, '[data-sonda="parrafo"]', '.flower.apart-info')))
  await p.screenshot({ path: `${SALIDA}/${w}-apart-info-pie.png` })
  await colocar(p, '[data-sonda="etiqueta"]', 0.5)
  console.log(`${w} other centro`, JSON.stringify(await rects(p, '[data-sonda="etiqueta"]', '.flower.other')))
  await p.screenshot({ path: `${SALIDA}/${w}-other-centro.png` })
  await colocar(p, '[data-sonda="etiqueta"]', 0.85)
  console.log(`${w} other pie`, JSON.stringify(await rects(p, '[data-sonda="etiqueta"]', '.flower.other')))
  await p.screenshot({ path: `${SALIDA}/${w}-other-pie.png` })
  await colocar(p, '.flower.loc-intro', 0.6)
  await p.screenshot({ path: `${SALIDA}/${w}-loc-intro.png` })
  await ctx.close()
}

// 1440: estado «hide» del h4 del Concepto (zoomInWithText: onLeaveBack al cruzar 'top 30%')
{
  const { ctx, p } = await abrir(1440, 900)
  const wrapper = '.loc-info-w'
  // 1) reveal: wrapper top por encima del 30%
  await p.evaluate(async (sel) => {
    const el = document.querySelector(sel)
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top - window.innerHeight * 0.1)
  }, wrapper)
  await p.waitForTimeout(3000)
  await p.screenshot({ path: `${SALIDA}/1440-concept-reveal.png` })
  // 2) hide: retroceder hasta que el wrapper top quede al 60% del viewport
  await p.evaluate(async (sel) => {
    const el = document.querySelector(sel)
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top - window.innerHeight * 0.6)
  }, wrapper)
  await p.waitForTimeout(3000)
  const estado = await p.evaluate(() => {
    const h = document.querySelector('.loc-info-w .h4')
    const lines = [...h.querySelectorAll('.split-line')].map((l) => getComputedStyle(l).transform)
    const r = h.getBoundingClientRect()
    return { rect: { x: r.x, y: r.y, w: r.width, h: r.height }, transforms: lines.slice(0, 2) }
  })
  console.log('1440 concept hide', JSON.stringify(estado))
  await p.screenshot({ path: `${SALIDA}/1440-concept-hide.png` })
  const r = estado.rect
  if (r.y > -50 && r.y < 900) {
    await p.screenshot({ path: `${SALIDA}/1440-concept-hide-crop.png`, clip: { x: Math.max(0, r.x - 10), y: Math.max(0, r.y - 40), width: Math.min(1440, r.w + 20), height: Math.min(900 - Math.max(0, r.y - 40), r.h + 80) } })
  }
  await ctx.close()
}
await nav.close()
