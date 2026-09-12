/**
 * ¿Se ve en pantalla el h4 del Concepto en estado «hide»? Baja hasta que
 * se revela y luego retrocede en pasos cortos, anotando la posición del
 * h4 y el transform de su primera línea; captura cuando está oculto y
 * dentro del viewport.
 *
 *   node scratchpad/verify-hide-onscreen.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-fix-1'
mkdirSync(SALIDA, { recursive: true })
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

for (let i = 0; i <= 7; i++) {
  await p.evaluate((y) => window.scrollTo(0, y), i * 900)
  await p.waitForTimeout(900)
}
await p.waitForTimeout(2500)

const estado = () => p.evaluate(() => {
  const h = document.querySelector('.loc-info-w .h4')
  const r = h.getBoundingClientRect()
  const l = h.querySelector('.split-line')
  const m = new DOMMatrixReadOnly(getComputedStyle(l).transform)
  return { x: +r.x.toFixed(0), y: +r.y.toFixed(0), w: +r.width.toFixed(0), h: +r.height.toFixed(0), ty: +m.m42.toFixed(1), scrollY: window.scrollY }
})
console.log('revelado', JSON.stringify(await estado()))

let capturas = 0
for (let y = 6300; y >= 4500; y -= 100) {
  await p.evaluate((y) => window.scrollTo(0, y), y)
  await p.waitForTimeout(700)
  const e = await estado()
  const enPantalla = e.x + e.w > 0 && e.x < 1440 && e.y + e.h > 0 && e.y < 900
  console.log(`scroll ${y}: h4 x=${e.x} y=${e.y} ty=${e.ty} enPantalla=${enPantalla}`)
  if (enPantalla && e.ty < -20 && capturas < 3) {
    capturas++
    await p.screenshot({ path: `${SALIDA}/1440-hide-onscreen-${y}.png` })
  }
}
await nav.close()
