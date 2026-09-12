/**
 * QA de las cinco fichas de villa (/villas/<slug>): errores de consola,
 * respuestas 404, imágenes rotas (naturalWidth 0) y lo que pinta la
 * sección de la ficha (imágenes del listado de medios, beneficios, párrafos).
 *
 *   node scratchpad/qa-villa-detail.mjs [dir-salida]
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

const SLUGS = ['coson', 'helecho', 'remanso', 'ambar', 'carolina']
const PROHIBIDO = /ERA Residence|Estepona|Marbella|Costa del Sol|Golden Mile|Gibraltar|Mediterranean|Spain|M[áa]laga|Kempinski|Puerto Ban|Andalus|golf|apartment|era-residence/i

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

let fallos = 0

for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  for (const slug of SLUGS) {
    const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
    const pagina = await contexto.newPage()
    const consola = []
    const red = []
    pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
    pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))
    pagina.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })
    pagina.on('requestfailed', (r) => red.push(`FAILED ${r.url()} ${r.failure()?.errorText ?? ''}`))

    await pagina.goto(`${BASE}/villas/${slug}`, { waitUntil: 'load', timeout: 120_000 })
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
      const detalle = document.querySelector('.lot-w')
      const mediosDesk = [...document.querySelectorAll('.lot-s_media.b-desk .lot-media-cms_list_item img')].map((i) => i.getAttribute('src'))
      const mediosMob = [...document.querySelectorAll('.lot-s_media.b-mob .lot-media-cms_list_item img')].map((i) => i.getAttribute('src'))
      const beneficios = [...document.querySelectorAll('[data-tab-content="benefits"] .tag h4')].map((n) => n.textContent.trim())
      const parrafos = [...document.querySelectorAll('[data-tab-content="desc"] p')].map((n) => n.textContent.replace(/\s+/g, ' ').trim().slice(0, 60))
      const textoDetalle = (detalle?.innerText || '') + ' ' + (document.querySelector('.section.arch')?.innerText || '') + ' ' + (document.querySelector('.other-w')?.innerText || '')
      const re = new RegExp(prohibido, 'i')
      const prohibidos = textoDetalle.match(new RegExp(prohibido, 'gi')) || []
      const tarjetas = [...document.querySelectorAll('.other-w .apart-card')].map((a) => ({
        href: a.getAttribute('href'),
        nombre: a.querySelector('h2')?.textContent.trim(),
        completion: a.querySelector('.apart-card_t p')?.innerText.replace(/\s+/g, ' ').trim(),
        datos: [...a.querySelectorAll('.apart-card_data-list p')].map((p) => p.innerText.replace(/\s+/g, ' ').trim()),
        extra: a.querySelector('.apart-card_add h5')?.innerText.replace(/\s+/g, ' ').trim(),
      }))
      const desbordeH = document.documentElement.scrollWidth > document.documentElement.clientWidth
      return { totalImgs: imgs.length, rotas, mediosDesk, mediosMob, beneficios, parrafos, prohibidos, tarjetas, desbordeH, alturaPagina: document.body.scrollHeight }
    }, PROHIBIDO.source)

    await pagina.screenshot({ path: `${salida}/villa-${slug}-${ancho}.png` })

    // Sólo en la primera villa: pestaña BENEFITS y captura completa de la ficha.
    if (slug === SLUGS[0]) {
      await pagina.click('[data-tab-trigger="benefits"]')
      await pagina.waitForTimeout(1_800)
      await pagina.screenshot({ path: `${salida}/villa-${slug}-${ancho}-benefits.png` })
      await pagina.click('[data-tab-trigger="desc"]')
      await pagina.waitForTimeout(1_800)
      const ficha = await pagina.$('.lot-w')
      if (ficha) await ficha.screenshot({ path: `${salida}/villa-${slug}-${ancho}-ficha.png` })
    }

    const problemas = [
      ...consola.map((c) => `consola: ${c}`),
      ...red.map((r) => `red: ${r}`),
      ...datos.rotas.map((r) => `img rota: ${r}`),
      ...datos.prohibidos.map((p) => `texto prohibido: ${p}`),
      ...(datos.desbordeH ? ['desborde horizontal'] : []),
    ]
    fallos += problemas.length

    console.log(`\n== /villas/${slug} @ ${ancho}x${alto} ==`)
    console.log(`  imgs: ${datos.totalImgs}  altura: ${datos.alturaPagina}px`)
    console.log(`  medios desktop (${datos.mediosDesk.length}): ${datos.mediosDesk.join(', ')}`)
    console.log(`  medios móvil   (${datos.mediosMob.length}): ${datos.mediosMob.join(', ')}`)
    console.log(`  beneficios: ${datos.beneficios.join(' | ')}`)
    console.log(`  párrafos (${datos.parrafos.length}): ${datos.parrafos.join(' || ')}`)
    console.log(`  relacionadas: ${datos.tarjetas.map((t) => `${t.nombre} [${t.href}] ${t.completion} · ${t.datos.join(' / ')} · ${t.extra}`).join('\n                ')}`)
    if (problemas.length) console.log(`  PROBLEMAS:\n    ${problemas.join('\n    ')}`)
    else console.log('  sin problemas')

    await contexto.close()
  }
}

await navegador.close()
console.log(`\nTotal problemas: ${fallos}`)
process.exit(fallos ? 1 : 0)
