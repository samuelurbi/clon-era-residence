/**
 * QA del fix CONTENT-TRUTH-10 en AmenitiesIntro: espera al preloader,
 * hace scroll progresivo hasta la sección .apart-info-w y la captura a
 * 390 y 1440 px. Brave + waitUntil 'load' (README de tools).
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = 'http://localhost:3000'
const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/fix-1-amenities-intro'
mkdirSync(OUT, { recursive: true })
const anchos = [[390, 844], [1440, 900]]

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

for (const [ancho, alto] of anchos) {
  const ctx = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  const consola = []
  const red = []
  page.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 200)) })
  page.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 200)}`))
  page.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })

  await page.goto(BASE + '/', { waitUntil: 'load', timeout: 120_000 })
  await page.waitForTimeout(9_500)
  await page.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

  const altoDoc = await page.evaluate(() => document.documentElement.scrollHeight)
  for (let y = 0; y < altoDoc; y += alto) {
    await page.evaluate((v) => window.scrollTo(0, v), y)
    await page.waitForTimeout(200)
  }
  const sec = page.locator('.apart-info-w').first()
  await sec.scrollIntoViewIfNeeded()
  await page.waitForTimeout(2_000)
  await page.screenshot({ path: `${OUT}/${ancho}-amenities-intro.png` })

  const info = await page.evaluate(() => {
    const s = document.querySelector('.apart-info-w')
    const t = (sel) => s?.querySelector(sel)?.textContent.replace(/\s+/g, ' ').trim()
    return {
      kicker: t('.s_title .l1'),
      lead: t('.info-s_lead h3'),
      desc: t('.info-s_desc p'),
      desborde: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    }
  })
  console.log(`\n== ${ancho}`)
  console.log(JSON.stringify(info, null, 1))
  if (consola.length) console.log('consola:', consola)
  if (red.length) console.log('red>=400:', red)
  await ctx.close()
}
await navegador.close()
