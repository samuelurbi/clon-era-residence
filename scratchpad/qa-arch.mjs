/**
 * Mide el texto circular de la sección «arch» (Three reasons…) frente a
 * la longitud del trazado, con el word-spacing en reposo (0) y al final
 * del scrub (10rem, ver lib/animations/home-flow.ts), para varias frases
 * candidatas. Después captura la sección al llegar a ella.
 *
 *   node scratchpad/qa-arch.mjs [dir-salida]
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

const CANDIDATAS = [
  'Three reasons to choose Era',
  'Three reasons to choose Bahía Mar',
  'Three reasons for Bahía Mar',
]

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
  await pagina.waitForTimeout(9_500) // preloader
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

  const medidas = await pagina.evaluate((candidatas) => {
    const visible = (el) => getComputedStyle(el).display !== 'none' && el.getBoundingClientRect().width > 0
    const cajas = [...document.querySelectorAll('.benefits-intro-s_title_svg')].filter(visible)
    return cajas.map((caja) => {
      const svg = caja.querySelector('svg')
      const path = svg.querySelector('path')
      const text = svg.querySelector('text')
      const tp = svg.querySelector('textPath')
      const original = tp.textContent
      const largoTrazado = path.getTotalLength()
      const res = { clase: caja.className, largoTrazado, mitad: largoTrazado / 2, fontSize: getComputedStyle(text).fontSize, fontFamily: getComputedStyle(text).fontFamily, candidatas: {} }
      for (const frase of candidatas) {
        tp.textContent = frase
        text.style.wordSpacing = '0rem'
        const en0 = tp.getComputedTextLength()
        text.style.wordSpacing = '10rem'
        const en10 = tp.getComputedTextLength()
        text.style.wordSpacing = ''
        res.candidatas[frase] = { en0: +en0.toFixed(1), en10: +en10.toFixed(1), pctEn0: +(en0 / largoTrazado * 100).toFixed(1), pctEn10: +(en10 / largoTrazado * 100).toFixed(1) }
      }
      tp.textContent = original
      res.actual = original
      return res
    })
  }, CANDIDATAS)
  console.log(`\n== ${ancho}x${alto} ==`)
  console.log(JSON.stringify(medidas, null, 2))
  if (consola.length) console.log('consola:', consola)

  // Captura de la sección al llegar a ella, y con el arco ya en el centro.
  const y = await pagina.evaluate(() => {
    const el = document.querySelector('.benefits-intro-s_title')
    return el.getBoundingClientRect().top + window.scrollY
  })
  await pagina.evaluate((y) => window.scrollTo(0, Math.max(0, y - 120)), y)
  await pagina.waitForTimeout(1_800)
  await pagina.screenshot({ path: `${salida}/arch-${ancho}-titulo.png` })
  await pagina.evaluate((y) => window.scrollTo(0, Math.max(0, y - 500)), y)
  await pagina.waitForTimeout(1_800)
  await pagina.screenshot({ path: `${salida}/arch-${ancho}-seccion.png` })

  await contexto.close()
}

await navegador.close()
