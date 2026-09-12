/**
 * QA del plano principal de cada ficha tras el recorte por hoja
 * (LAYOUT-IMAGES-01): captura el hueco del plano a 1440 y 390 y comprueba
 * que la imagen carga (naturalWidth 2350) sin 404.
 *
 *   node scratchpad/fix-1-plans-qa.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const salida = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/fix-1-plans/qa'
mkdirSync(salida, { recursive: true })

const SLUGS = ['coson', 'helecho', 'remanso', 'ambar', 'carolina']

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

let fallos = 0
for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  for (const slug of SLUGS) {
    const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
    const pagina = await contexto.newPage()
    const red = []
    pagina.on('response', (r) => { if (r.status() >= 400 && /plan/.test(r.url())) red.push(`${r.status()} ${r.url()}`) })

    await pagina.goto(`${BASE}/villas/${slug}`, { waitUntil: 'load', timeout: 120_000 })
    await pagina.waitForTimeout(9_500)

    const sel = ancho >= 992 ? '.lot-s_media.b-desk .lot-s_media_layout_img-prim img' : '.lot-s_media.b-mob .lot-s_media_layout_img-prim img'
    const datos = await pagina.evaluate((sel) => {
      const img = document.querySelector(sel)
      if (!img) return null
      const r = img.getBoundingClientRect()
      const c = img.parentElement.getBoundingClientRect()
      return {
        src: img.getAttribute('src'), natural: `${img.naturalWidth}x${img.naturalHeight}`,
        caja: `${Math.round(c.width)}x${Math.round(c.height)} @${Math.round(c.left)},${Math.round(c.top)}`,
        img: `${Math.round(r.width)}x${Math.round(r.height)}`,
      }
    }, sel)
    const ok = datos && datos.natural === '2350x2210' && red.length === 0
    if (!ok) fallos++
    console.log(`${ok ? 'OK ' : 'MAL'} ${ancho} ${slug.padEnd(9)} ${JSON.stringify(datos)} ${red.join(' ')}`)

    const caja = await pagina.$(sel.replace(/ img$/, ''))
    if (caja) await caja.screenshot({ path: `${salida}/${ancho}-${slug}-plan.png` })
    await contexto.close()
  }
}
await navegador.close()
console.log(fallos ? `${fallos} fallos` : 'todo OK')
process.exit(fallos ? 1 : 0)
