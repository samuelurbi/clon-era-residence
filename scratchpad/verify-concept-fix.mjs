/**
 * Verificación de fix-1 (components/home/Concept.tsx):
 *   - 1440 y 390: el recorrido de lugares con los tiempos «~N min» y la
 *     nota «Approximate drive times (TBC)» visible y sin solaparse.
 *   - 1440 y 390: el h4 del Concepto tras el reveal, para comprobar que la
 *     tilde de «BAHÍA» ya no la corta la máscara (regla en styles/theme.css).
 *
 *   node scratchpad/verify-concept-fix.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-concept-fix'
mkdirSync(SALIDA, { recursive: true })
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })

async function abrir(width, height) {
  const ctx = await nav.newContext({ viewport: { width, height }, deviceScaleFactor: 2, isMobile: width < 800, hasTouch: width < 800 })
  const p = await ctx.newPage()
  const errores = []
  p.on('console', (m) => { if (m.type() === 'error') errores.push(m.text()) })
  p.on('response', (r) => { if (r.status() >= 400) errores.push(`${r.status()} ${r.url()}`) })
  await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
  await p.waitForTimeout(9_500)
  await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  await p.evaluate(async () => {
    const total = document.documentElement.scrollHeight
    for (let y = 0; y < total; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)) }
  })
  return { ctx, p, errores }
}

async function colocar(p, selector, posViewport) {
  await p.evaluate(async ({ selector, posViewport }) => {
    const el = document.querySelector(selector)
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top + r.height / 2 - window.innerHeight * posViewport)
  }, { selector, posViewport })
  await p.waitForTimeout(3500)
}

for (const [w, h] of [[1440, 900], [390, 844]]) {
  const { ctx, p, errores } = await abrir(w, h)

  // 1) Titular del Concepto: reveal y recorte de la primera línea.
  await p.evaluate(async () => {
    const el = document.querySelector('.loc-info-w')
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top - window.innerHeight * 0.1)
  })
  await p.waitForTimeout(3500)
  const h4 = await p.evaluate(() => {
    const h = document.querySelector('.loc-info-w .h4')
    const r = h.getBoundingClientRect()
    const first = h.querySelector('.split-line-mask')
    const fr = first ? first.getBoundingClientRect() : null
    const cs = first ? getComputedStyle(first) : null
    return {
      texto: h.textContent.trim().slice(0, 40),
      rect: { x: +r.x.toFixed(0), y: +r.y.toFixed(0), w: +r.width.toFixed(0), h: +r.height.toFixed(0) },
      mask: fr ? { y: +fr.y.toFixed(0), h: +fr.height.toFixed(0), paddingTop: cs.paddingTop, marginTop: cs.marginTop, overflow: cs.overflow } : null,
    }
  })
  console.log(`${w} concept h4`, JSON.stringify(h4))
  await p.screenshot({ path: `${SALIDA}/${w}-concept-h4.png` })
  if (h4.rect.y > -50 && h4.rect.y < h) {
    const y0 = Math.max(0, h4.rect.y - 30)
    await p.screenshot({ path: `${SALIDA}/${w}-concept-h4-crop.png`, clip: { x: Math.max(0, h4.rect.x - 10), y: y0, width: Math.min(w, h4.rect.w + 20), height: Math.min(h - y0, 120) } })
  }

  // 2) Recorrido de lugares.
  await colocar(p, '.loc-path-s_path_c svg', 0.6)
  const mapa = await p.evaluate(() => {
    const svg = document.querySelector('.loc-path-s_path_c svg')
    const sr = svg.getBoundingClientRect()
    const textos = [...svg.querySelectorAll('text')].map((t) => {
      const r = t.getBoundingClientRect()
      return { t: t.textContent.trim(), x: +r.x.toFixed(0), y: +r.y.toFixed(0), r: +r.right.toFixed(0), b: +r.bottom.toFixed(0) }
    })
    const scroller = document.querySelector('.loc-path-s_path')
    return { svg: { x: +sr.x.toFixed(0), y: +sr.y.toFixed(0), w: +sr.width.toFixed(0), h: +sr.height.toFixed(0) }, scrollLeft: scroller.scrollLeft, clientWidth: scroller.clientWidth, textos }
  })
  console.log(`${w} mapa`, JSON.stringify(mapa))
  // Solapes entre cajas de texto
  const solapes = []
  for (let i = 0; i < mapa.textos.length; i++) for (let j = i + 1; j < mapa.textos.length; j++) {
    const a = mapa.textos[i], b = mapa.textos[j]
    if (a.x < b.r && b.x < a.r && a.y < b.b && b.y < a.b) solapes.push([a.t, b.t])
  }
  console.log(`${w} solapes`, JSON.stringify(solapes))
  await p.screenshot({ path: `${SALIDA}/${w}-mapa.png` })
  const s = mapa.svg
  if (s.y > -50 && s.y < h) {
    const y0 = Math.max(0, s.y - 10)
    await p.screenshot({ path: `${SALIDA}/${w}-mapa-crop.png`, clip: { x: 0, y: y0, width: w, height: Math.min(h - y0, s.h + 20) } })
  }
  console.log(`${w} errores`, JSON.stringify(errores.filter((e) => !/favicon/.test(e))))
  await ctx.close()
}
await nav.close()
