/**
 * QA del CTA «Sea views from every villa» y del pie «Book a call».
 * Para cada ruta y ancho: espera al preloader, hace scroll hasta el CTA y
 * hasta el pie, captura cada bloque y vuelca imágenes rotas, respuestas
 * ≥ 400 y errores de consola. Brave + waitUntil 'load' (README de tools).
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = 'http://localhost:3000'
const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/cta-qa'
mkdirSync(OUT, { recursive: true })
const rutas = process.argv.slice(2).length ? process.argv.slice(2) : ['/', '/villas', '/contact', '/villas/ambar']
const anchos = [[1440, 900], [400, 800]]

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

for (const [ancho, alto] of anchos) {
  for (const ruta of rutas) {
    const nombre = `${ancho}-${ruta === '/' ? 'home' : ruta.replace(/^\//, '').replace(/\//g, '_')}`
    const ctx = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
    const page = await ctx.newPage()
    const consola = []
    const red = []
    page.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 200)) })
    page.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 200)}`))
    page.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })

    await page.goto(BASE + ruta, { waitUntil: 'load', timeout: 120_000 })
    await page.waitForTimeout(9_500)
    await page.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

    // Scroll progresivo hasta el CTA para que Lenis/parallax asienten.
    const altoDoc = await page.evaluate(() => document.documentElement.scrollHeight)
    for (let y = 0; y < altoDoc; y += alto) {
      await page.evaluate((v) => window.scrollTo(0, v), y)
      await page.waitForTimeout(250)
    }
    const cta = page.locator('.cta-w').first()
    await cta.scrollIntoViewIfNeeded()
    await page.waitForTimeout(2_000)
    await page.screenshot({ path: `${OUT}/${nombre}-cta.png` })

    const footer = page.locator('.footer-w').first()
    await footer.scrollIntoViewIfNeeded()
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight))
    await page.waitForTimeout(2_000)
    await page.screenshot({ path: `${OUT}/${nombre}-footer.png` })

    const info = await page.evaluate(() => {
      const img = document.querySelector('.cta-w img.img-p')
      const rotas = [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.currentSrc || i.src)
      const legal = [...document.querySelectorAll('.footer-w a, .modal a')].map((a) => `${a.textContent.trim().slice(0, 40)} → ${a.getAttribute('href')}`)
      return {
        ctaSrc: img && img.currentSrc,
        ctaAlt: img && img.alt,
        ctaTexto: document.querySelector('.cta-s_title h2')?.textContent.replace(/\s+/g, ' ').trim(),
        ctaSub: document.querySelector('.cta-s_title h3')?.textContent.trim(),
        rotas,
        legal: legal.filter((l) => /Privacy|Terms|Bah|Made|thefirst/i.test(l)),
        desborde: document.documentElement.scrollWidth > document.documentElement.clientWidth,
      }
    })
    console.log(`\n== ${nombre}`)
    console.log(JSON.stringify(info, null, 1))
    if (consola.length) console.log('consola:', consola)
    if (red.length) console.log('red>=400:', red)
    await ctx.close()
  }
}
await navegador.close()
