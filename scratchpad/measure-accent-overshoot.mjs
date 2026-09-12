/**
 * Mide cuánto sobresale la tilde de una mayúscula (Í/Á) por encima de la
 * caja de línea de cada .split-line-mask con texto acentuado en mayúsculas.
 *
 *   node scratchpad/measure-accent-overshoot.mjs [ancho]   (por defecto 1440)
 *
 * Método: baseline real de la línea (un <span> inline de altura 0 con
 * vertical-align: baseline) + actualBoundingBoxAscent de la letra acentuada
 * medido con canvas en la misma fuente. overshoot = mask.top - (baseline - ascent).
 */
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const width = Number(process.argv[2] || 1440)
const height = width < 800 ? 844 : 900
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width, height }, deviceScaleFactor: 2, isMobile: width < 800, hasTouch: width < 800 })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

// Recorremos la página para que todos los reveals se disparen y se creen las máscaras
await p.evaluate(async () => {
  const total = document.documentElement.scrollHeight
  for (let y = 0; y < total; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)) }
  window.scrollTo(0, 0)
})
await p.waitForTimeout(800)

const res = await p.evaluate(() => {
  const out = []
  const canvas = document.createElement('canvas')
  const c2d = canvas.getContext('2d')
  document.querySelectorAll('.split-line-mask').forEach((mask) => {
    const t = mask.textContent
    const cs = getComputedStyle(mask)
    if (cs.textTransform !== 'uppercase' || !/[ÁÉÍÓÚáéíóú]/.test(t)) return
    const line = mask.querySelector('.split-line') || mask
    // el transform del reveal puede no haber terminado; lo neutralizamos para medir
    const prev = line.style.transform
    line.style.transform = 'none'
    const probe = document.createElement('span')
    probe.style.cssText = 'display:inline-block;width:0;height:0;vertical-align:baseline;'
    line.appendChild(probe)
    const baseline = probe.getBoundingClientRect().top
    probe.remove()
    line.style.transform = prev
    const font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`
    c2d.font = font
    const m = t.match(/[ÁÉÍÓÚáéíóú]/)[0].toUpperCase()
    const asc = c2d.measureText(m).actualBoundingBoxAscent
    const capAsc = c2d.measureText('H').actualBoundingBoxAscent
    const r = mask.getBoundingClientRect()
    const fs = parseFloat(cs.fontSize)
    const heading = mask.closest('h1,h2,h3,h4,h5,h6,p')
    out.push({
      cls: heading ? heading.className : '?',
      txt: t.trim().slice(0, 40),
      fontSize: fs.toFixed(1),
      lineHeight: cs.lineHeight,
      padTop: cs.paddingTop,
      letter: m,
      accentAscentEm: (asc / fs).toFixed(3),
      capAscentEm: (capAsc / fs).toFixed(3),
      baselineFromMaskTopEm: ((baseline - r.top) / fs).toFixed(3),
      overshootEm: ((r.top - (baseline - asc)) / fs).toFixed(3),
      overshootPx: (r.top - (baseline - asc)).toFixed(1),
    })
  })
  return out
})
console.log(JSON.stringify(res, null, 2))
await nav.close()
