/**
 * Recomprobación rápida: /coming-soon a 1440 tras acortar el h1, y el sello
 * móvil de la cabecera a 3x para verlo con nitidez.
 *
 *   node scratchpad/qa-chrome-recheck.mjs
 */
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const salida = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/capturas'

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

// 1) coming-soon a 1440
{
  const ctx = await navegador.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/coming-soon`, { waitUntil: 'load', timeout: 120_000 })
  await p.waitForTimeout(9_500)
  const h1 = await p.evaluate(() => {
    const el = document.querySelector('.soon-s_title h1')
    const r = el.getBoundingClientRect()
    return { texto: el.innerText, lineas: Math.round(r.height / parseFloat(getComputedStyle(el).lineHeight)), alto: r.height }
  })
  console.log('coming-soon h1:', h1)
  await p.screenshot({ path: `${salida}/chrome-coming-soon-1440-v2.png` })
  await ctx.close()
}

// 2) sello móvil a 3x
{
  const ctx = await navegador.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 3 })
  const p = await ctx.newPage()
  await p.goto(`${BASE}/villas`, { waitUntil: 'load', timeout: 120_000 })
  await p.waitForTimeout(9_500)
  const logo = await p.$('.header-logo')
  await logo.screenshot({ path: `${salida}/chrome-villas-390-logo-3x.png` })
  const medidas = await p.evaluate(() => {
    const el = document.querySelector('.header-logo_bg.b-mob')
    const r = el.getBoundingClientRect()
    return { w: r.width, h: r.height }
  })
  console.log('sello móvil box:', medidas)
  await ctx.close()
}

await navegador.close()
