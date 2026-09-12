/**
 * Captura el preloader de la home (intro completa: contexto nuevo, sin
 * sessionStorage) y mide el <text> «Samaná» del fondo: fuente que se ha
 * usado de verdad (document.fonts), caja y cuánto desborda el viewBox.
 *
 *   node scratchpad/qa-preloader.mjs [dir-salida]
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

for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const pagina = await contexto.newPage()
  const consola = []
  pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
  pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))

  await pagina.goto(BASE + '/', { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(1_500)
  await pagina.screenshot({ path: `${salida}/preloader-${ancho}-1500ms.png` })
  await pagina.waitForTimeout(1_500)
  await pagina.screenshot({ path: `${salida}/preloader-${ancho}-3000ms.png` })

  const medidas = await pagina.evaluate(() => {
    const svg = document.querySelector('.preloader_bg_a svg')
    const texto = svg?.querySelector('text')
    const caja = svg?.getBoundingClientRect()
    const box = texto?.getBBox()
    const cs = texto ? getComputedStyle(texto) : null
    const fuentes = [...document.fonts].map((f) => `${f.family} ${f.weight} ${f.status}`)
    const pinyon = fuentes.filter((f) => /pinyon/i.test(f))
    const bgA = document.querySelector('.preloader_bg_a')
    return {
      svgCaja: caja && { x: caja.x, y: caja.y, w: caja.width, h: caja.height },
      textoBBox: box && { x: box.x, y: box.y, w: box.width, h: box.height },
      textLength: texto?.getComputedTextLength(),
      fontFamily: cs?.fontFamily,
      fontSize: cs?.fontSize,
      fill: cs?.fill,
      opacidadBgA: bgA && getComputedStyle(bgA).opacity,
      pinyon,
      textos: [...document.querySelectorAll('.preloader_title-l, .preloader_logo .h3, .preloader_a, .preloader_title-r, .preloader_b .l1')].map((n) => n.textContent.replace(/\s+/g, ' ').trim()),
    }
  })
  console.log(`\n== ${ancho}x${alto} ==`)
  console.log(JSON.stringify(medidas, null, 2))
  if (consola.length) console.log('consola:', consola)

  // Captura con el fondo a opacidad 1, sólo para ver la palabra con claridad.
  await pagina.evaluate(() => { document.querySelector('.preloader_bg_a').style.opacity = '1' })
  await pagina.screenshot({ path: `${salida}/preloader-${ancho}-bg-opaco.png` })

  await contexto.close()
}

await navegador.close()
