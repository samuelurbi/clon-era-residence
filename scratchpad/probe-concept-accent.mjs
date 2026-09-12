/**
 * Sonda: ¿por qué el h3 de «The concept» pinta «BAHIA» sin tilde?
 * Desplaza hasta la sección, espera al reveal y examina los wrappers.
 */
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad'
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

// Scroll progresivo hasta que el h3 esté visible en pantalla
const info = await p.evaluate(async () => {
  const h3 = document.querySelector('.info-s_lead h3')
  let y = 0
  for (let i = 0; i < 80; i++) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 250))
    const b = h3.getBoundingClientRect()
    if (b.top > 60 && b.bottom < window.innerHeight - 40 && b.left > 0 && b.right < window.innerWidth) break
    y += 300
  }
  await new Promise((r) => setTimeout(r, 2500))
  const cs = getComputedStyle(h3)
  const hijos = [...h3.querySelectorAll('*')].slice(0, 12).map((el) => {
    const s = getComputedStyle(el)
    return { tag: el.tagName, cls: el.className, ov: s.overflow, lh: s.lineHeight, txt: el.textContent.slice(0, 30) }
  })
  return {
    y: window.scrollY, rect: h3.getBoundingClientRect().toJSON(),
    font: cs.fontFamily, tt: cs.textTransform, lh: cs.lineHeight, fs: cs.fontSize, ov: cs.overflow,
    html: h3.innerHTML.slice(0, 600), hijos,
    fontsLoaded: [...document.fonts].filter((f) => f.status === 'loaded').map((f) => `${f.family} ${f.weight} ${f.style}`),
  }
})
console.log(JSON.stringify(info, null, 2))
const r = info.rect
await p.screenshot({ path: `${SALIDA}/concept-h3.png`, clip: { x: Math.max(0, r.x - 20), y: Math.max(0, r.y - 40), width: Math.min(1440, r.width + 40), height: Math.min(900, r.height + 80) } })
await nav.close()
