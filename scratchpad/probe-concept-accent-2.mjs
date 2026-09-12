/** Sonda 2: fuerza el reveal del h3 y compara overflow clip vs visible. */
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad'
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
await p.evaluate(async () => {
  const h3 = document.querySelector('.info-s_lead h3'); let y = 0
  for (let i = 0; i < 80; i++) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 250)); const b = h3.getBoundingClientRect(); if (b.top > 60 && b.bottom < window.innerHeight - 40 && b.left > 0 && b.right < window.innerWidth) break; y += 300 }
  await new Promise((r) => setTimeout(r, 1500))
})

const rect = await p.evaluate(() => {
  const h3 = document.querySelector('.info-s_lead h3')
  h3.querySelectorAll('.split-line').forEach((l) => { l.style.transform = 'none' })
  return h3.getBoundingClientRect().toJSON()
})
const clip = { x: Math.max(0, rect.x - 10), y: Math.max(0, rect.y - 30), width: Math.min(1440, rect.width + 20), height: 120 }
console.log(JSON.stringify(rect)); await p.screenshot({ path: `${SALIDA}/concept-h3-clip.png` })
await p.evaluate(() => {
  document.querySelectorAll('.info-s_lead h3 .split-line-mask').forEach((m) => { m.style.overflow = 'visible' })
})
await p.waitForTimeout(300)
await p.screenshot({ path: `${SALIDA}/concept-h3-visible.png` })

// ¿Hay más h/​p con máscara y letra mayúscula acentuada en primera línea?
const otros = await p.evaluate(() => {
  const res = []
  document.querySelectorAll('.split-line-mask').forEach((m) => {
    const t = m.textContent.trim()
    const cs = getComputedStyle(m)
    if (/[ÁÉÍÓÚÑáéíóúñ]/.test(t) && cs.textTransform === 'uppercase') {
      res.push({ txt: t.slice(0, 60), lh: cs.lineHeight, fs: cs.fontSize, ratio: (parseFloat(cs.lineHeight) / parseFloat(cs.fontSize)).toFixed(2), padTop: cs.paddingTop })
    }
  })
  return res
})
console.log(JSON.stringify(otros, null, 2))
await nav.close()
