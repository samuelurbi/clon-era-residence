/**
 * En el estado «hide» del h4 del Concepto (retroceder a scroll 5900),
 * ¿qué opacidad tiene .loc-info-s y se ve algo en la zona del h4?
 *
 *   node scratchpad/verify-hide-opacity.mjs
 */
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-fix-1'
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
await p.waitForTimeout(2000)
for (const y of [6100, 6050, 6000, 5900, 5800]) {
  await p.evaluate((y) => window.scrollTo(0, y), y)
  await p.waitForTimeout(900)
  const e = await p.evaluate(() => {
    const s = document.querySelector('.loc-info-s')
    const h = document.querySelector('.loc-info-w .h4')
    const r = h.getBoundingClientRect()
    const l = h.querySelector('.split-line')
    const m = new DOMMatrixReadOnly(getComputedStyle(l).transform)
    return { opacity: getComputedStyle(s).opacity, transform: getComputedStyle(s).transform, x: +r.x.toFixed(0), y: +r.y.toFixed(0), w: +r.width.toFixed(0), h: +r.height.toFixed(0), ty: +m.m42.toFixed(1) }
  })
  console.log(`scroll ${y}:`, JSON.stringify(e))
  if (e.y < 900 && e.y + e.h > 0) {
    const clip = { x: Math.max(0, e.x - 10), y: Math.max(0, e.y - 30), width: Math.min(1440 - Math.max(0, e.x - 10), e.w + 20), height: Math.min(900 - Math.max(0, e.y - 30), e.h + 60) }
    await p.screenshot({ path: `${SALIDA}/1440-hide-crop-${y}.png`, clip })
  }
}
await nav.close()
