/**
 * QA de /coming-soon y /villas (target «chrome-pages»): errores de consola,
 * respuestas >= 400, imágenes rotas, vocabulario prohibido en el texto
 * visible, textos de cabecera / menú / cookies, y captura del sello móvil.
 *
 *   node scratchpad/qa-chrome-pages.mjs [dir-salida]
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

const RUTAS = ['/coming-soon', '/villas']
const PROHIBIDO = /ERA Residence|Estepona|Marbella|Costa del Sol|Golden Mile|Gibraltar|Mediterranean|Spain|M[áa]laga|Kempinski|Puerto Ban|Andalus|golf|apartment|era-residence|envy maison/i

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

let fallos = 0

for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  for (const ruta of RUTAS) {
    const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
    const pagina = await contexto.newPage()
    const consola = []
    const red = []
    pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
    pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))
    pagina.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })
    pagina.on('requestfailed', (r) => red.push(`FAILED ${r.url()} ${r.failure()?.errorText ?? ''}`))

    await pagina.goto(`${BASE}${ruta}`, { waitUntil: 'load', timeout: 120_000 })
    // El preloader tarda ~9 s; después se desplaza para forzar los lazy.
    await pagina.waitForTimeout(9_500)
    await pagina.evaluate(async () => {
      const paso = window.innerHeight * 0.8
      for (let y = 0; y < document.body.scrollHeight; y += paso) {
        window.scrollTo(0, y)
        await new Promise((r) => setTimeout(r, 120))
      }
      window.scrollTo(0, 0)
    })
    await pagina.waitForTimeout(2_500)

    const datos = await pagina.evaluate((prohibido) => {
      const imgs = [...document.querySelectorAll('img')]
      const rotas = imgs
        .filter((i) => i.complete && i.naturalWidth === 0 && (i.currentSrc || i.src))
        .map((i) => i.currentSrc || i.src)
      const texto = document.body.innerText || ''
      const prohibidos = texto.match(new RegExp(prohibido, 'gi')) || []
      const meta = document.querySelector('meta[name="description"]')?.getAttribute('content') || ''
      const metaProhibido = meta.match(new RegExp(prohibido, 'gi')) || []
      const titulo = document.title
      const h1 = [...document.querySelectorAll('h1')].map((n) => n.innerText.replace(/\s+/g, ' ').trim())
      const soonP = document.querySelector('.soon-s_desc p')?.innerText.replace(/\s+/g, ' ').trim()
      const contador = document.querySelector('[data-filter-count]')?.innerText.trim()
      const tarjetas = [...document.querySelectorAll('.apart-cms_list .apart-card')].map((a) => ({
        href: a.getAttribute('href'),
        nombre: a.querySelector('h2')?.textContent.trim(),
        img: a.querySelector('img')?.currentSrc,
      }))
      const filtros = [...document.querySelectorAll('.filter_select_drop-down_list_item .l1')].map((n) => n.textContent.trim())
      const vacio = document.querySelector('[data-filter-empty] .p1')?.innerText.replace(/\s+/g, ' ').trim()
      const menuLinks = [...document.querySelectorAll('[data-modal-menu="mob"] .modal_menu_list a')].map((a) => `${a.getAttribute('aria-label')} -> ${a.getAttribute('href')}`)
      const headerLinks = [...document.querySelectorAll('.header-nav a')].map((a) => `${a.getAttribute('aria-label')} -> ${a.getAttribute('href')}`)
      const logoLabel = document.querySelector('.logo_symbol.header')?.getAttribute('aria-label')
      const cookies = document.querySelector('.cookies_card_b .l1')?.innerText.replace(/\s+/g, ' ').trim()
      const cookieLinks = [...document.querySelectorAll('.cookies a')].map((a) => `${a.getAttribute('aria-label')} -> ${a.getAttribute('href')}`)
      const migas = [...document.querySelectorAll('.header-cramps a')].map((a) => `${a.innerText.replace(/\s+/g, ' ').trim()} -> ${a.getAttribute('href')}`)
      const selloDesk = document.querySelector('.header-logo_bg.b-desk textPath')?.textContent.trim()
      const selloMob = document.querySelector('.header-logo_bg.b-mob textPath')?.textContent.trim()
      const selloMobPaths = document.querySelectorAll('.header-logo_bg.b-mob path[fill]').length
      const mobVisible = (() => {
        const el = document.querySelector('.header-logo_bg.b-mob')
        if (!el) return false
        const cs = getComputedStyle(el)
        return cs.display !== 'none' && cs.visibility !== 'hidden'
      })()
      const desbordeH = document.documentElement.scrollWidth > document.documentElement.clientWidth
      return { totalImgs: imgs.length, rotas, prohibidos, meta, metaProhibido, titulo, h1, soonP, contador, tarjetas, filtros, vacio, menuLinks, headerLinks, logoLabel, cookies, cookieLinks, migas, selloDesk, selloMob, selloMobPaths, mobVisible, desbordeH, alturaPagina: document.body.scrollHeight }
    }, PROHIBIDO.source)

    const nombre = ruta.replace(/\//g, '') || 'home'
    await pagina.screenshot({ path: `${salida}/chrome-${nombre}-${ancho}.png` })
    if (ancho === 390) {
      const logo = await pagina.$('.header-logo')
      if (logo) await logo.screenshot({ path: `${salida}/chrome-${nombre}-${ancho}-logo.png` })
    }

    const problemas = [
      ...consola.map((c) => `consola: ${c}`),
      ...red.map((r) => `red: ${r}`),
      ...datos.rotas.map((r) => `img rota: ${r}`),
      ...datos.prohibidos.map((p) => `texto prohibido: ${p}`),
      ...datos.metaProhibido.map((p) => `meta prohibido: ${p}`),
      ...(datos.desbordeH ? ['desborde horizontal'] : []),
      ...(datos.selloMobPaths ? [`sello móvil aún con ${datos.selloMobPaths} paths de letras`] : []),
    ]
    fallos += problemas.length

    console.log(`\n== ${ruta} @ ${ancho}x${alto} ==`)
    console.log(`  title: ${datos.titulo}`)
    console.log(`  meta: ${datos.meta}`)
    console.log(`  h1: ${datos.h1.join(' | ')}`)
    if (datos.soonP) console.log(`  soon p: ${datos.soonP}`)
    if (datos.contador !== undefined) console.log(`  contador: ${datos.contador}`)
    if (datos.tarjetas.length) console.log(`  tarjetas (${datos.tarjetas.length}): ${datos.tarjetas.map((t) => `${t.nombre} [${t.href}] ${t.img?.split('/').pop()}`).join(' · ')}`)
    if (datos.filtros.length) console.log(`  filtros: ${datos.filtros.join(' | ')}`)
    if (datos.vacio) console.log(`  vacío: ${datos.vacio}`)
    console.log(`  imgs: ${datos.totalImgs}  altura: ${datos.alturaPagina}px`)
    console.log(`  menú: ${datos.menuLinks.join(' | ')}`)
    console.log(`  header: ${datos.headerLinks.join(' | ')}`)
    console.log(`  logo aria: ${datos.logoLabel}`)
    console.log(`  sello desk: ${datos.selloDesk}`)
    console.log(`  sello mob: ${datos.selloMob} (visible: ${datos.mobVisible})`)
    console.log(`  cookies: ${datos.cookies} [${datos.cookieLinks.join(' | ')}]`)
    console.log(`  migas: ${datos.migas.join(' | ')}`)
    if (problemas.length) console.log(`  PROBLEMAS:\n    ${problemas.join('\n    ')}`)
    else console.log('  sin problemas')

    await contexto.close()
  }
}

await navegador.close()
console.log(`\nTotal problemas: ${fallos}`)
process.exit(fallos ? 1 : 0)
