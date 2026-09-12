/**
 * Recorre la home a pasos de viewport (las secciones fijadas sólo pintan
 * al llegar a ellas) y captura los pasos en los que el texto circular de
 * «arch» está dentro del viewport. También vuelca la posición y el
 * word-spacing actual del <text> en cada captura.
 *
 *   node scratchpad/qa-arch-captura.mjs [dir-salida]
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
  await pagina.goto(BASE + '/', { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(9_500)
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  await pagina.waitForTimeout(500)

  const altoDoc = await pagina.evaluate(() => document.documentElement.scrollHeight)
  const pasos = Math.min(60, Math.ceil(altoDoc / alto))
  let capturas = 0
  for (let i = 0; i < pasos && capturas < 4; i++) {
    await pagina.evaluate((y) => window.scrollTo(0, y), i * (alto / 2))
    await pagina.waitForTimeout(900)
    const estado = await pagina.evaluate(() => {
      const cajas = [...document.querySelectorAll('.benefits-intro-s_title_svg')]
        .filter((el) => getComputedStyle(el).display !== 'none')
      const caja = cajas[0]
      if (!caja) return null
      const r = caja.getBoundingClientRect()
      const text = caja.querySelector('text')
      const tp = caja.querySelector('textPath')
      return {
        top: r.top, bottom: r.bottom, h: r.height,
        wordSpacing: getComputedStyle(text).wordSpacing,
        largoTexto: tp.getComputedTextLength(),
        texto: tp.textContent,
        opacidad: getComputedStyle(text).opacity,
      }
    })
    if (!estado) continue
    // El texto va en la cima del círculo: nos vale cuando esa parte está en pantalla.
    if (estado.top > -estado.h * 0.1 && estado.top < alto * 0.7) {
      capturas++
      const ruta = `${salida}/arch-${ancho}-paso-${String(i).padStart(2, '0')}.png`
      await pagina.screenshot({ path: ruta })
      console.log(`${ancho}: paso ${i} -> ${ruta}`, JSON.stringify(estado))
    }
  }
  if (!capturas) console.log(`${ancho}: el arco no llegó a aparecer en ${pasos} pasos`)
  await contexto.close()
}

await navegador.close()
