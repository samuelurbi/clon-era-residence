/**
 * Captura del bloque del mapa de /contact con los overlays asentados
 * (redes, pin y botón circular), a 1440 y 390 de ancho.
 *   node scratchpad/qa-contact-map.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)
const BASE = process.env.QA_BASE || 'http://localhost:3000'
const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/qa-contact'
mkdirSync(SALIDA, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const pagina = await contexto.newPage()
  await pagina.goto(BASE + '/contact', { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(9_500)
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  // Scroll suave por pasos hasta el mapa (Lenis/GSAP necesitan eventos de scroll reales).
  const objetivo = await pagina.evaluate(() => {
    const el = document.querySelector('.contact-s_map')
    const r = el.getBoundingClientRect()
    return r.top + window.scrollY - 80
  })
  await pagina.mouse.move(ancho / 2, alto / 2)
  for (let y = 0; y <= objetivo; y += 200) {
    await pagina.mouse.wheel(0, 200)
    await pagina.waitForTimeout(60)
  }
  await pagina.waitForTimeout(1_000)
  // Si Lenis ignoró la rueda, forzar el scroll nativo.
  const actual = await pagina.evaluate(() => window.scrollY)
  if (actual < objetivo - 100) {
    await pagina.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), objetivo)
    await pagina.waitForTimeout(300)
    await pagina.mouse.wheel(0, 1)
  }
  await pagina.waitForTimeout(2_000)
  console.log(ancho, 'scrollY', await pagina.evaluate(() => window.scrollY), 'objetivo', Math.round(objetivo))
  await pagina.screenshot({ path: `${SALIDA}/${ancho}-map-settled.png` })
  if (ancho < 500) {
    await pagina.mouse.wheel(0, 500)
    await pagina.waitForTimeout(1_500)
    await pagina.screenshot({ path: `${SALIDA}/${ancho}-map-settled-2.png` })
  }
  const info = await pagina.evaluate(() => {
    const q = (s) => document.querySelector(s)
    const r = (el) => { const b = el.getBoundingClientRect(); return { x: Math.round(b.x), y: Math.round(b.y), w: Math.round(b.width), h: Math.round(b.height), op: getComputedStyle(el).opacity } }
    return {
      social: r(q('.contact-s_social')),
      btn: r(q('.contact-s_btn')),
      pin: r(q('.contact-s_map_pin_c')),
      pinText: q('.contact-s_map_pin_info').textContent.trim(),
    }
  })
  console.log(ancho, JSON.stringify(info))
  await contexto.close()
}
await navegador.close()
