/**
 * Capturas de QA de la web de Bahía Mar con Playwright + Brave.
 *
 *   node scripts/qa-capturas.mjs <dir-salida> [ruta ...]
 *
 * Para cada ruta: espera al preloader, quita el aviso de cookies, hace
 * captura de página completa y, en la home, también una captura por
 * cada paso de viewport (las secciones fijadas sólo pintan su contenido
 * al llegar a ellas). Además recorta cada vegetación de esquina
 * (`.flower`) y el sello circular, y vuelca un JSON con errores de
 * consola, respuestas ≥ 400, imágenes rotas y desborde horizontal.
 *
 * Basado en el patrón de `C:/Users/kevin/.claude-work/tools/README.md`:
 * Brave, `waitUntil: 'load'` (nunca networkidle) y esperas explícitas.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const BASE = process.env.QA_BASE || 'http://localhost:3000'
const [salida = 'qa-capturas', ...rutasArg] = process.argv.slice(2)
const rutas = rutasArg.length ? rutasArg : ['/', '/villas', '/villas/coson', '/contact']
const anchos = (process.env.QA_WIDTHS || '1440x900').split(',').map((s) => s.split('x').map(Number))

mkdirSync(salida, { recursive: true })

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

const informe = []

for (const [ancho, alto] of anchos) {
  for (const ruta of rutas) {
    const nombre = `${ancho}-${ruta === '/' ? 'home' : ruta.replace(/^\//, '').replace(/\//g, '_')}`
    const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
    const pagina = await contexto.newPage()
    const consola = []
    const red = []
    pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
    pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))
    pagina.on('response', (r) => { if (r.status() >= 400) red.push(`${r.status()} ${r.url()}`) })

    await pagina.goto(BASE + ruta, { waitUntil: 'load', timeout: 90_000 })
    // Dos fotogramas del preloader (dura ~9 s) antes de esperar a que acabe.
    await pagina.waitForTimeout(1_200)
    await pagina.screenshot({ path: `${salida}/${nombre}-preloader-1s.png` })
    await pagina.waitForTimeout(3_800)
    await pagina.screenshot({ path: `${salida}/${nombre}-preloader-5s.png` })
    await pagina.waitForTimeout(4_500)
    await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))
    await pagina.waitForTimeout(500)

    // Pasos de viewport (para las secciones fijadas) y página completa.
    // Con QA_SMOOTH=1 se baja con la rueda del ratón en tramos cortos, que
    // es lo que dispara los cambios de tema del header (ScrollTrigger +
    // Lenis) igual que para un visitante; `scrollTo` salta y los deja atrás.
    const suave = process.env.QA_SMOOTH === '1'
    const altoDoc = await pagina.evaluate(() => document.documentElement.scrollHeight)
    const pasos = Math.min(60, Math.ceil(altoDoc / alto))
    if (suave) await pagina.mouse.move(ancho / 2, alto / 2)
    for (let i = 0; i < pasos; i++) {
      if (suave) {
        if (i > 0) {
          for (let k = 0; k < 6; k++) { await pagina.mouse.wheel(0, alto / 6); await pagina.waitForTimeout(90) }
          await pagina.waitForTimeout(ruta === '/' ? 1_100 : 700)
        }
      } else {
        await pagina.evaluate((y) => window.scrollTo(0, y), i * alto)
        await pagina.waitForTimeout(ruta === '/' ? 900 : 500)
      }
      await pagina.screenshot({ path: `${salida}/${nombre}-step-${String(i).padStart(2, '0')}.png` })
    }
    await pagina.evaluate(() => window.scrollTo(0, 0))
    await pagina.waitForTimeout(800)
    // La de página completa es opcional: en páginas muy altas con vídeo puede
    // agotar el tiempo (visto con el dev server de Vite) y no debe tumbar el resto.
    await pagina.screenshot({ path: `${salida}/${nombre}-full.png`, fullPage: true, timeout: 20_000 }).catch(() => console.warn(`   (sin captura completa de ${nombre})`))

    // Recortes: vegetación de esquina y sello.
    const recortes = await pagina.evaluate(() => {
      const res = []
      document.querySelectorAll('.flower').forEach((el, i) => {
        const r = el.getBoundingClientRect()
        res.push({ tipo: 'flower', i, clase: el.className, x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height })
      })
      document.querySelectorAll('textPath').forEach((el, i) => {
        const svg = el.closest('svg')
        const r = svg.getBoundingClientRect()
        res.push({ tipo: 'sello', i, x: r.x + window.scrollX, y: r.y + window.scrollY, w: r.width, h: r.height })
      })
      return res
    })
    for (const c of recortes) {
      if (c.w < 4 || c.h < 4) continue
      await pagina.evaluate((y) => window.scrollTo(0, Math.max(0, y - 200)), c.y)
      await pagina.waitForTimeout(700)
      const r = await pagina.evaluate((sel) => {
        const el = document.querySelectorAll(sel.tipo === 'flower' ? '.flower' : 'textPath')[sel.i]
        const b = (sel.tipo === 'flower' ? el : el.closest('svg')).getBoundingClientRect()
        return { x: b.x, y: b.y, w: b.width, h: b.height }
      }, c)
      const pad = 24
      const clip = {
        x: Math.max(0, r.x - pad), y: Math.max(0, r.y - pad),
        width: Math.min(ancho - Math.max(0, r.x - pad), r.w + pad * 2),
        height: Math.min(alto - Math.max(0, r.y - pad), r.h + pad * 2),
      }
      if (clip.width < 4 || clip.height < 4) continue
      const etiqueta = c.tipo === 'flower' ? `flower-${c.i}-${c.clase.replace(/\s+/g, '_')}` : `sello-${c.i}`
      await pagina.screenshot({ path: `${salida}/${nombre}-${etiqueta}.png`, clip })
    }

    const medidas = await pagina.evaluate(() => ({
      desborde: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      imagenesRotas: [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.getAttribute('src')).map((i) => i.getAttribute('src')),
      videos: [...document.querySelectorAll('video')].map((v) => ({ src: v.currentSrc, ready: v.readyState, w: v.videoWidth, h: v.videoHeight, paused: v.paused })),
    }))
    informe.push({ ruta, ancho, consola, red, ...medidas })
    await contexto.close()
  }
}

await navegador.close()
writeFileSync(`${salida}/informe.json`, JSON.stringify(informe, null, 2))
for (const r of informe) {
  console.log(`${r.ancho} ${r.ruta}: consola=${r.consola.length} red4xx=${r.red.length} rotas=${r.imagenesRotas.length} desborde=${r.desborde}px videos=${r.videos.length}`)
  r.consola.slice(0, 5).forEach((c) => console.log('   consola:', c))
  r.red.slice(0, 5).forEach((c) => console.log('   red:', c))
  r.imagenesRotas.slice(0, 5).forEach((c) => console.log('   rota:', c))
}
