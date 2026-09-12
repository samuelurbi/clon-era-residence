/**
 * LAYOUT-IMAGES-03 — mide qué franja de bahiamar-cta-4 se ve en el CTA
 * «Sea views from every villa» de las fichas de villa, a 390 y a 1440, y
 * captura la sección con el título centrado. Sirve antes (diagnóstico) y
 * después (verificación) del re-encuadre.
 *
 *   node scratchpad/fix-1-cta4-measure.mjs [sufijo]
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SUFIJO = process.argv[2] || 'antes'
const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/fix-1-cta4'
mkdirSync(SALIDA, { recursive: true })
const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })

const VISTAS = process.argv[3] === 'tablet' ? [[768, 1024, 'ambar']] : [[390, 844, 'coson'], [390, 844, 'ambar'], [1440, 900, 'ambar']]
for (const [w, h, slug] of VISTAS) {
  const ctx = await nav.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1, isMobile: w < 800, hasTouch: w < 800 })
  const p = await ctx.newPage()
  await p.goto(`http://localhost:3000/villas/${slug}`, { waitUntil: 'load', timeout: 90_000 })
  await p.waitForTimeout(9_500)
  await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  // Recorre la página para disparar los reveals y cargar el fondo.
  await p.evaluate(async () => {
    const total = document.documentElement.scrollHeight
    for (let y = 0; y < total; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)) }
  })
  // Centrar el h2 del CTA en el viewport.
  await p.evaluate(async () => {
    const h2 = [...document.querySelectorAll('.cta-s_title h2')].find((e) => /Sea views/i.test(e.textContent))
    const r = h2.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top + r.height / 2 - window.innerHeight * 0.5)
  })
  await p.waitForTimeout(3000)
  const m = await p.evaluate(() => {
    const cta = [...document.querySelectorAll('.cta-w')].find((e) => /Sea views/i.test(e.textContent))
    const clip = cta.querySelector('.img-w').getBoundingClientRect()
    const img = cta.querySelector('img.img-p')
    const box = img.getBoundingClientRect()
    const nat = { w: img.naturalWidth, h: img.naturalHeight }
    const ar = nat.w / nat.h
    // object-fit: cover → la imagen se escala al mayor de los dos ejes.
    const rendW = Math.max(box.width, box.height * ar)
    const rendH = rendW / ar
    const visW = clip.width / rendW // fracción del ancho de la imagen visible dentro del clip
    const visH = Math.min(clip.height, window.innerHeight) / rendH // fracción del alto visible en el viewport
    const x0 = (1 - visW) / 2
    return {
      src: img.currentSrc.replace(/^.*\/images\//, ''), natural: nat, clip: { w: +clip.width.toFixed(0), h: +clip.height.toFixed(0) }, imgBox: { w: +box.width.toFixed(0), h: +box.height.toFixed(0) },
      franjaAncho: `${(x0 * 100).toFixed(1)}%..${((x0 + visW) * 100).toFixed(1)}% del ancho de la imagen (${(visW * 100).toFixed(1)}%)`,
      franjaAltoViewport: `${(visH * 100).toFixed(1)}% del alto de la imagen`,
    }
  })
  console.log(`${w} /villas/${slug}`, JSON.stringify(m))
  await p.screenshot({ path: `${SALIDA}/${SUFIJO}-${w}-${slug}-cta.png` })
  if (w < 992) {
    // Parte baja de la sección (botón al pie del viewport): ¿se ve la piscina?
    await p.evaluate(async () => {
      const cta = [...document.querySelectorAll('.cta-w')].find((e) => /Sea views/i.test(e.textContent))
      const r = cta.getBoundingClientRect()
      window.scrollTo(0, window.scrollY + r.bottom - window.innerHeight)
    })
    await p.waitForTimeout(2500)
    await p.screenshot({ path: `${SALIDA}/${SUFIJO}-${w}-${slug}-cta-pie.png` })
  }
  await ctx.close()
}
await nav.close()
