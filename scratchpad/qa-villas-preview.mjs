/**
 * QA del slider de tipologías de la home (components/home/VillasPreview.tsx)
 * tras reescribir los tres párrafos: captura cada slide a 1440 y 390 y mide
 * que el párrafo no desborde su columna ni pise el botón.
 *
 *   node scratchpad/qa-villas-preview.mjs [dir-salida]
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const salida = process.argv[2] || 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/capturas/villas-preview'
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
  await pagina.waitForTimeout(9_500) // preloader
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

  // Las secciones fijadas sólo pintan al llegar a ellas: se baja de
  // viewport en viewport (como scripts/qa-capturas.mjs) hasta que el
  // slider está en pantalla.
  let paso = 0
  for (; paso < 60; paso++) {
    await pagina.evaluate((y) => window.scrollTo(0, y), paso * alto)
    await pagina.waitForTimeout(900)
    const enPantalla = await pagina.evaluate((alto) => {
      const r = document.querySelector('.apart-type-slide_desc p').getBoundingClientRect()
      return r.top > 0 && r.bottom < alto
    }, alto)
    if (enPantalla) break
  }
  console.log(`slider en pantalla en el paso ${paso} (y=${paso * alto})`)
  await pagina.waitForTimeout(1_500)

  console.log(`\n== ${ancho}x${alto} ==`)
  for (let i = 0; i < 3; i++) {
    await pagina.waitForTimeout(4_000) // que termine el reveal línea a línea
    const medida = await pagina.evaluate(() => {
      const visible = (el) => {
        const r = el.getBoundingClientRect()
        const cs = getComputedStyle(el)
        return r.width > 0 && cs.visibility !== 'hidden' && parseFloat(cs.opacity) > 0.5
      }
      const slides = [...document.querySelectorAll('.apart-type-cms_list_item')]
      const activo = slides.find((s) => visible(s.querySelector('.apart-type-slide_desc p'))) || slides[0]
      const p = activo.querySelector('.apart-type-slide_desc p')
      const btn = activo.querySelector('.apart-type-slide_btn')
      const col = activo.querySelector('.apart-type-slide_desc')
      const h3 = activo.querySelector('h3')
      const rp = p.getBoundingClientRect(), rb = btn.getBoundingClientRect(), rc = col.getBoundingClientRect()
      return {
        titulo: h3.textContent.trim(),
        texto: p.textContent.trim(),
        parrafo: { w: +rp.width.toFixed(0), h: +rp.height.toFixed(0), top: +rp.top.toFixed(0), bottom: +rp.bottom.toFixed(0) },
        boton: { top: +rb.top.toFixed(0), bottom: +rb.bottom.toFixed(0) },
        columna: { w: +rc.width.toFixed(0), h: +rc.height.toFixed(0), bottom: +rc.bottom.toFixed(0) },
        desbordaAncho: p.scrollWidth > p.clientWidth + 1,
        solapaBoton: rp.bottom > rb.top + 1,
        lineas: Math.round(rp.height / parseFloat(getComputedStyle(p).lineHeight)),
        opacidad: getComputedStyle(p).opacity,
      }
    })
    console.log(JSON.stringify(medida))
    await pagina.screenshot({ path: `${salida}/${ancho}-slide-${i + 1}.png` })
    await pagina.click('.apart-type-w [data-slider="next"]')
  }
  if (consola.length) console.log('consola:', consola)
  await contexto.close()
}

await navegador.close()
