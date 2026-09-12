/**
 * Sonda: recorta a 2x cada elemento con texto en mayúsculas (text-transform
 * uppercase) que contenga una vocal acentuada, tras hacerle scrollIntoView y
 * esperar al reveal. Sirve para ver si la tilde queda recortada por la
 * máscara de línea (.split-line-mask { overflow: clip }).
 *
 *   node scratchpad/probe-accents.mjs <ruta>
 */
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/accents'
import { mkdirSync } from 'node:fs'
mkdirSync(SALIDA, { recursive: true })
const ruta = process.argv[2] || '/'
const etiqueta = ruta === '/' ? 'home' : ruta.replace(/^\//, '').replace(/\//g, '_')

const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000' + ruta, { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

const candidatos = await p.evaluate(() => {
  const res = []
  const vistos = new Set()
  document.querySelectorAll('h1,h2,h3,h4,h5,h6,p,a,div,span').forEach((el) => {
    if (el.closest('svg')) return
    const cs = getComputedStyle(el)
    if (cs.textTransform !== 'uppercase') return
    // sólo el ancestro más alto con uppercase que tenga texto acentuado propio
    const t = el.textContent
    if (!/[ÁÉÍÓÚÑ]/i.test(t)) return
    if (el.parentElement && getComputedStyle(el.parentElement).textTransform === 'uppercase') return
    const clave = t.trim().slice(0, 80)
    if (vistos.has(clave)) return
    vistos.add(clave)
    el.setAttribute('data-sonda', String(res.length))
    res.push({ i: res.length, tag: el.tagName, cls: el.className, txt: clave, fs: cs.fontSize, lh: cs.lineHeight })
  })
  return res
})
console.log(`${candidatos.length} candidatos en ${ruta}`)
for (const c of candidatos) {
  const r = await p.evaluate(async (i) => {
    const el = document.querySelector(`[data-sonda="${i}"]`)
    el.scrollIntoView({ block: 'center' })
    await new Promise((r) => setTimeout(r, 2800))
    const b = el.getBoundingClientRect()
    return { x: b.x, y: b.y, w: b.width, h: b.height }
  }, c.i)
  const clip = { x: Math.max(0, r.x - 8), y: Math.max(0, r.y - 16), width: Math.min(1440 - Math.max(0, r.x - 8), r.w + 16), height: Math.min(900 - Math.max(0, r.y - 16), r.h + 32) }
  const ok = clip.width > 4 && clip.height > 4 && r.y < 900 && r.y + r.h > 0
  console.log(`${c.i}: <${c.tag} class="${c.cls}"> fs=${c.fs} lh=${c.lh} ${ok ? '' : '(fuera de pantalla)'} :: ${c.txt}`)
  if (ok) await p.screenshot({ path: `${SALIDA}/${etiqueta}-${c.i}.png`, clip })
}
await nav.close()
