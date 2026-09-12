/**
 * Verificación de PALETTE-BRAND-02 (components/pages/ContactMain.tsx):
 * el hueco del mapa de /contact con la imagen clara de la casa club.
 *   - 1440 y 390: captura con el mapa arriba del viewport (sello y menú
 *     sobre la imagen) y otra con el mapa medio pasado.
 *   - Comprueba que la <img> carga (naturalWidth), qué fichero eligió el
 *     srcSet y que no hay respuestas 4xx/5xx de /images/ ni /videos/.
 *
 *   node scratchpad/verify-fix-1-contact.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)
const BASE = process.env.QA_BASE || 'http://localhost:3000'
const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/verify-fix-1-contact'
mkdirSync(SALIDA, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const pagina = await contexto.newPage()
  const fallos = []
  pagina.on('response', (r) => {
    const u = r.url()
    if (r.status() >= 400 && /\/(images|videos)\//.test(u)) fallos.push(`${r.status()} ${u}`)
  })
  await pagina.goto(BASE + '/contact', { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(9_500)
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

  const objetivo = await pagina.evaluate(() => {
    const el = document.querySelector('.contact-s_map')
    return el.getBoundingClientRect().top + window.scrollY
  })
  await pagina.mouse.move(ancho / 2, alto / 2)
  for (let y = 0; y <= objetivo; y += 200) {
    await pagina.mouse.wheel(0, 200)
    await pagina.waitForTimeout(60)
  }
  await pagina.waitForTimeout(1_000)
  const actual = await pagina.evaluate(() => window.scrollY)
  if (actual < objetivo - 100) {
    await pagina.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), objetivo)
    await pagina.waitForTimeout(300)
    await pagina.mouse.wheel(0, 1)
  }
  await pagina.waitForTimeout(2_000)
  await pagina.screenshot({ path: `${SALIDA}/${ancho}-map-top.png` })

  // Medio mapa más abajo: el sello y el menú caen sobre el centro de la imagen.
  await pagina.mouse.wheel(0, ancho < 500 ? 150 : 300)
  await pagina.waitForTimeout(2_000)
  await pagina.screenshot({ path: `${SALIDA}/${ancho}-map-mid.png` })

  const info = await pagina.evaluate(() => {
    const img = document.querySelector('.contact-s_map_c img')
    const chrome = [...document.querySelectorAll('[data-theme]')].map((el) => ({
      cls: [...el.classList].filter((c) => c.startsWith('theme_')).join(' '),
      color: getComputedStyle(el).color,
    }))
    return {
      currentSrc: img.currentSrc.replace(location.origin, ''),
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      rendered: { w: Math.round(img.getBoundingClientRect().width), h: Math.round(img.getBoundingClientRect().height) },
      chrome,
    }
  })
  console.log(ancho, JSON.stringify(info))
  console.log(ancho, 'fallos /images|/videos:', fallos.length ? fallos : 'ninguno')
  await contexto.close()
}
await navegador.close()
