/**
 * ¿Asoma algo por el relleno superior de las máscaras en el estado «hide»?
 * Reproduce la geometría exacta de animateTextP('hide') (yPercent: -110)
 * sobre el h4 del Concepto a 1440 y recorta la zona del titular.
 *
 *   node scratchpad/verify-hide-leak.mjs
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

// Mismo scroll que el paso 07 del QA (7 × 900), donde el h4 del Concepto está centrado
for (let i = 0; i <= 7; i++) {
  await p.evaluate((y) => window.scrollTo(0, y), i * 900)
  await p.waitForTimeout(900)
}
await p.waitForTimeout(3000)

const info = await p.evaluate(() => {
  const h = document.querySelector('.loc-info-w .h4')
  const r = h.getBoundingClientRect()
  return { x: r.x, y: r.y, w: r.width, h: r.height, masks: h.querySelectorAll('.split-line-mask').length }
})
console.log('h4', JSON.stringify(info))
const clip = { x: Math.max(0, info.x - 10), y: Math.max(0, info.y - 40), width: Math.min(1440 - Math.max(0, info.x - 10), info.w + 20), height: Math.min(900, info.h + 80) }
await p.screenshot({ path: `${SALIDA}/1440-h4-reposo.png`, clip })

// Estado hide: cada .split-line a translateY(-110%)
await p.evaluate(() => {
  document.querySelectorAll('.loc-info-w .h4 .split-line').forEach((l) => { l.style.transform = 'translate(0px, -110%)' })
})
await p.waitForTimeout(300)
await p.screenshot({ path: `${SALIDA}/1440-h4-hide.png`, clip })

// Y el estado inicial (110%), por completar
await p.evaluate(() => {
  document.querySelectorAll('.loc-info-w .h4 .split-line').forEach((l) => { l.style.transform = 'translate(0px, 110%)' })
})
await p.waitForTimeout(300)
await p.screenshot({ path: `${SALIDA}/1440-h4-inicial.png`, clip })

// Medimos píxeles no-fondo en la franja del titular en estado hide (la captura es 2x)
await p.evaluate(() => {
  document.querySelectorAll('.loc-info-w .h4 .split-line').forEach((l) => { l.style.transform = 'translate(0px, -110%)' })
})
await p.waitForTimeout(300)
const buf = await p.screenshot({ clip, omitBackground: false })
const { PNG } = await import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/pngjs/lib/png.js').href).catch(() => ({ PNG: null }))
if (PNG) {
  const png = PNG.sync.read(buf)
  const bg = [png.data[0], png.data[1], png.data[2]]
  let dark = 0
  for (let i = 0; i < png.data.length; i += 4) {
    const d = Math.abs(png.data[i] - bg[0]) + Math.abs(png.data[i + 1] - bg[1]) + Math.abs(png.data[i + 2] - bg[2])
    if (d > 60) dark++
  }
  console.log(`hide: píxeles distintos del fondo en el recorte = ${dark} de ${png.width * png.height}`)
} else {
  console.log('(pngjs no disponible; comprobar 1440-h4-hide.png a ojo)')
}
await nav.close()
