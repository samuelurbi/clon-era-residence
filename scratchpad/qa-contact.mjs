/**
 * QA de /contact con Playwright + Brave (patrón de scripts/qa-capturas.mjs).
 *
 *   node scratchpad/qa-contact.mjs
 *
 * Para 1440x900 y 390x844: espera al preloader, captura viewport y página
 * completa, y vuelca consola, respuestas ≥400, imágenes rotas, desborde
 * horizontal y medidas de los textos del bloque de contacto (líneas que
 * ocupan y si se salen de su caja).
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const RUTA = '/contact'
const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/qa-contact'
const VIEWPORTS = [[1440, 900], [390, 844]]

mkdirSync(SALIDA, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

const informe = []

for (const [ancho, alto] of VIEWPORTS) {
  const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const pagina = await contexto.newPage()
  const consola = []
  const red = []
  pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
  pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))
  pagina.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })

  await pagina.goto(BASE + RUTA, { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(9_500) // preloader
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  await pagina.waitForTimeout(800)

  await pagina.screenshot({ path: `${SALIDA}/${ancho}-viewport.png` })

  // Recorrer la página para que los reveals se disparen antes de la captura completa.
  const altoDoc = await pagina.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < altoDoc; y += Math.floor(alto * 0.8)) {
    await pagina.evaluate((v) => window.scrollTo(0, v), y)
    await pagina.waitForTimeout(350)
  }
  await pagina.evaluate(() => window.scrollTo(0, 0))
  await pagina.waitForTimeout(900)
  await pagina.screenshot({ path: `${SALIDA}/${ancho}-full.png`, fullPage: true })

  // Captura recortada del bloque de contacto (mapa + textos).
  const bloque = await pagina.$('.contact-s')
  if (bloque) await bloque.screenshot({ path: `${SALIDA}/${ancho}-contact-block.png` })

  const medidas = await pagina.evaluate(() => {
    const lineas = (el) => {
      const cs = getComputedStyle(el)
      const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.2
      return Math.round(el.getBoundingClientRect().height / lh)
    }
    const textos = []
    const sel = '.contact-s h1, .contact-s h2, .contact-s h3, .contact-s .nav-item_label_text:not(.is-2) .l1, .contact-s_map_pin_info .l2'
    document.querySelectorAll(sel).forEach((el) => {
      const r = el.getBoundingClientRect()
      const padre = el.closest('.nav-item, .contact-s_title, .contact-s_map_pin_c') || el.parentElement
      const pr = padre.getBoundingClientRect()
      textos.push({
        tag: el.tagName.toLowerCase(),
        texto: el.textContent.trim().slice(0, 80),
        lineas: lineas(el),
        w: Math.round(r.width),
        seSale: el.scrollWidth > el.clientWidth + 1 || r.right > pr.right + 1 || r.left < pr.left - 1,
        fueraDeViewport: r.right > document.documentElement.clientWidth + 1 || r.left < -1,
      })
    })
    const mapa = document.querySelector('.contact-s_map_c img')
    return {
      desborde: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      imagenesRotas: [...document.images]
        .filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute('src'))
        .map((i) => i.getAttribute('src')),
      imagenesSinCargar: [...document.images].filter((i) => !i.complete).map((i) => i.getAttribute('src')),
      mapa: mapa && { currentSrc: mapa.currentSrc, natural: `${mapa.naturalWidth}x${mapa.naturalHeight}`, alt: mapa.alt, w: Math.round(mapa.getBoundingClientRect().width) },
      titulo: document.title,
      descripcion: document.querySelector('meta[name="description"]')?.content,
      textos,
    }
  })
  informe.push({ ruta: RUTA, ancho, consola, red, ...medidas })
  await contexto.close()
}

await navegador.close()
writeFileSync(`${SALIDA}/informe.json`, JSON.stringify(informe, null, 2))
for (const r of informe) {
  console.log(`\n=== ${r.ancho}px ${r.ruta}: consola=${r.consola.length} red4xx=${r.red.length} rotas=${r.imagenesRotas.length} sinCargar=${r.imagenesSinCargar.length} desborde=${r.desborde}px`)
  console.log('title:', r.titulo)
  console.log('description:', r.descripcion)
  console.log('mapa:', JSON.stringify(r.mapa))
  r.consola.forEach((c) => console.log('   consola:', c))
  r.red.forEach((c) => console.log('   red:', c))
  r.imagenesRotas.forEach((c) => console.log('   rota:', c))
  r.imagenesSinCargar.forEach((c) => console.log('   sin cargar:', c))
  r.textos.forEach((t) => console.log(`   ${t.tag} ${t.lineas}L w=${t.w}${t.seSale ? ' SE-SALE' : ''}${t.fueraDeViewport ? ' FUERA-VIEWPORT' : ''}  "${t.texto}"`))
}
