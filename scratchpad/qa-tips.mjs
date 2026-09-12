/**
 * Pasa el ratón por los tres pines del hero y captura la tarjeta flotante
 * que aparece, volcando su texto y si desborda su caja.
 *
 *   node scratchpad/qa-tips.mjs [dir-salida]
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const salida = process.argv[2] || 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/capturas'
mkdirSync(salida, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
const contexto = await navegador.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const pagina = await contexto.newPage()
const consola = []
pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))

await pagina.goto(BASE + '/', { waitUntil: 'load', timeout: 90_000 })
await pagina.waitForTimeout(9_500)
await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
await pagina.waitForTimeout(500)

const ids = await pagina.evaluate(() =>
  [...document.querySelectorAll('.pins-cms.b-desk [floating-tip-trigger]')].map((el) => el.getAttribute('floating-tip-trigger')),
)
for (const id of ids) {
  const pin = pagina.locator(`.pins-cms.b-desk [floating-tip-trigger="${id}"] .pin`).first()
  await pin.hover()
  await pagina.mouse.move((await pin.boundingBox()).x + 12, (await pin.boundingBox()).y + 12)
  await pagina.waitForTimeout(1_200)
  const estado = await pagina.evaluate((id) => {
    const tip = document.querySelector(`[floating-tip="${id}"]`)
    const card = tip.querySelector('.floating-tip-card')
    const r = card.getBoundingClientRect()
    const p = card.querySelector('p')
    return {
      id,
      titulo: card.querySelector('h1').textContent.trim(),
      texto: p.textContent.replace(/\s+/g, ' ').trim(),
      opacidad: getComputedStyle(tip).opacity,
      visible: r.width > 0 && r.height > 0 && getComputedStyle(tip).display !== 'none',
      caja: { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) },
      desbordaTexto: p.scrollWidth > p.clientWidth + 1 || p.scrollHeight > p.clientHeight + 1,
    }
  }, id)
  console.log(JSON.stringify(estado))
  await pagina.screenshot({ path: `${salida}/tip-${id}.png` })
}
if (consola.length) console.log('consola:', consola)
await navegador.close()
