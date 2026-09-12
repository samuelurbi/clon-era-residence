/**
 * Comprueba en el dev server (390x844, Brave headless) que el sello móvil de la
 * cabecera (.header-logo_bg.b-mob) lee «Bahía Mar · Boutique Residences ·
 * Samaná ·» y no las letras del sitio de origen, y que el aria-label del logo
 * es «Bahía Mar logo». Guarda capturas en bahia-mar-personalizacion/qa/fix-1/.
 *
 *   node scratchpad/fix-1-header-seal-check.mjs
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href)
)

const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const SALIDA = `${RAIZ}/bahia-mar-personalizacion/qa/fix-1`
mkdirSync(SALIDA, { recursive: true })

const RUTAS = ['/', '/villas', '/contact']
const ESPERADO = 'Bahía Mar · Boutique Residences · Samaná ·'

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
const ctx = await navegador.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
})
const page = await ctx.newPage()

let fallos = 0
for (const ruta of RUTAS) {
  await page.goto(`http://localhost:3000${ruta}`, { waitUntil: 'load', timeout: 90_000 })
  // el preloader tarda ~9 s en irse
  await page.waitForTimeout(9_500)

  const datos = await page.evaluate(() => {
    const mob = document.querySelector('.header-logo_bg.b-mob')
    const desk = document.querySelector('.header-logo_bg.b-desk')
    const visible = (el) => !!el && getComputedStyle(el).display !== 'none' && el.getBoundingClientRect().width > 0
    const texto = (el) => (el?.querySelector('textPath')?.textContent || '').replace(/\s+/g, ' ').trim()
    return {
      mobVisible: visible(mob),
      deskVisible: visible(desk),
      mobPaths: mob ? mob.querySelectorAll('path').length : -1,
      mobTexto: texto(mob),
      mobIds: mob ? [...mob.querySelectorAll('[id]')].map((n) => n.id) : [],
      deskIds: desk ? [...desk.querySelectorAll('[id]')].map((n) => n.id) : [],
      ariaLogo: document.querySelector('.logo_symbol.header')?.getAttribute('aria-label') || null,
      ariaLink: document.querySelector('a.header-logo')?.getAttribute('aria-label') || null,
      eraEnHtml: /ERA RESIDENCE|envy maison/i.test(document.documentElement.outerHTML),
    }
  })

  const nombre = ruta === '/' ? 'home' : ruta.slice(1).replace(/\//g, '_')
  await page.screenshot({ path: `${SALIDA}/390-${nombre}-header.png`, clip: { x: 0, y: 0, width: 390, height: 140 } })
  await page.screenshot({ path: `${SALIDA}/390-${nombre}-viewport.png` })

  const ok =
    datos.mobVisible &&
    !datos.deskVisible &&
    datos.mobTexto.startsWith(ESPERADO) &&
    datos.mobPaths === 1 &&
    datos.ariaLogo === 'Bahía Mar logo' &&
    !datos.eraEnHtml
  if (!ok) fallos++
  console.log(`${ok ? 'OK  ' : 'FAIL'} ${ruta}`, JSON.stringify(datos))
}

await navegador.close()
console.log(fallos ? `\n${fallos} ruta(s) con problemas` : '\nSello móvil correcto en todas las rutas')
process.exit(fallos ? 1 : 0)
