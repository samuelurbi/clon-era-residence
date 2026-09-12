// Open the «Book a call» modal at desktop and phone width and capture it.
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)
const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/cta-qa'
mkdirSync(OUT, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
for (const [ancho, alto] of [[1440, 900], [400, 800]]) {
  const ctx = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const page = await ctx.newPage()
  const consola = []
  page.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 200)) })
  page.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 200)}`))
  await page.goto('http://localhost:3000/contact', { waitUntil: 'load', timeout: 120_000 })
  await page.waitForTimeout(9_500)
  await page.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
  // Fire the same click the header button would get (mobile keeps it inside the menu).
  await page.evaluate(() => {
    const btn = document.querySelector('[data-modal-cta-btn="book-a-call"]')
    btn && btn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
  })
  await page.waitForTimeout(2_500)
  await page.screenshot({ path: `${OUT}/${ancho}-modal.png` })
  const info = await page.evaluate(() => {
    const m = document.querySelector('[data-modal-cta="book-a-call"]')
    const cs = m && getComputedStyle(m)
    const seal = [...m.querySelectorAll('.header-logo_bg')].map((s) => `${s.className} → ${getComputedStyle(s).display} / ${s.textContent.replace(/\s+/g, ' ').trim().slice(0, 60)}`)
    return { visible: cs && cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0', seal,
      privacy: m.querySelector('.form_block_legal a')?.getAttribute('href'),
      labels: [...m.querySelectorAll('[aria-label]')].map((e) => e.getAttribute('aria-label')).filter((l) => /logo|envy/i.test(l)) }
  })
  console.log(`\n== ${ancho}`, JSON.stringify(info, null, 1))
  if (consola.length) console.log('consola:', consola)
  await ctx.close()
}
await navegador.close()
