/**
 * Titular del Concepto a 1440: busca el scrollY en el que el h4 queda
 * dentro del viewport (la sección es un scroll horizontal anclado, así
 * que no sirve el top del wrapper) y captura para ver la tilde de BAHÍA.
 *
 *   node scratchpad/verify-concept-h4-1440.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-concept-fix'
mkdirSync(SALIDA, { recursive: true })
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

const hallado = await p.evaluate(async () => {
  const h = document.querySelector('.loc-info-w .h4')
  const total = document.documentElement.scrollHeight
  for (let y = 0; y < total; y += 120) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 120))
    const r = h.getBoundingClientRect()
    const op = parseFloat(getComputedStyle(document.querySelector('.loc-info-s')).opacity)
    if (r.x > 0 && r.right < innerWidth && r.y > 80 && r.bottom < innerHeight && op > 0.95) return { y, op, rect: { x: r.x, y: r.y, w: r.width, h: r.height } }
  }
  return null
})
console.log('hallado', JSON.stringify(hallado))
if (hallado) {
  await p.waitForTimeout(4000)
  const r = await p.evaluate(() => {
    const h = document.querySelector('.loc-info-w .h4')
    const b = h.getBoundingClientRect()
    const m = h.querySelector('.split-line-mask')
    const cs = m ? getComputedStyle(m) : null
    return { x: b.x, y: b.y, w: b.width, h: b.height, paddingTop: cs?.paddingTop, marginTop: cs?.marginTop }
  })
  console.log('h4', JSON.stringify(r))
  await p.screenshot({ path: `${SALIDA}/1440-concept-h4.png` })
  const y0 = Math.max(0, r.y - 30)
  await p.screenshot({ path: `${SALIDA}/1440-concept-h4-crop.png`, clip: { x: Math.max(0, r.x - 10), y: y0, width: Math.min(1440, r.w + 20), height: 130 } })
}
await ctx.close()
await nav.close()
