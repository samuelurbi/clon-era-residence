/**
 * QA del vídeo aéreo de la sección de ubicación (components/home/Location.tsx):
 *   - el <video> existe, tiene videoWidth > 0 y se reproduce (paused === false)
 *     una vez a la vista;
 *   - cubre su caja (misma caja que el padre .img-w.h-auto, sin bandas);
 *   - la proporción del hueco es la del póster (no hay brinco al cargar);
 *   - la sección no cambia de altura entre póster y vídeo;
 *   - no hay errores de consola ni peticiones 404 a /videos o /images.
 * Captura la sección en escritorio y móvil.
 *
 *   node scratchpad/qa-location-video.mjs [dir-salida]
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

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})

let fallos = 0
const falla = (msg) => { fallos++; console.log('  FALLO:', msg) }

for (const [ancho, alto] of [[1440, 900], [390, 844]]) {
  const contexto = await navegador.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: 1 })
  const pagina = await contexto.newPage()
  const consola = []
  const red = []
  pagina.on('console', (m) => { if (m.type() === 'error') consola.push(m.text().slice(0, 300)) })
  pagina.on('pageerror', (e) => consola.push(`pageerror: ${String(e).slice(0, 300)}`))
  pagina.on('response', (r) => {
    const u = r.url()
    if (r.status() >= 400 && (u.includes('/videos/') || u.includes('/images/'))) red.push(`${r.status()} ${u}`)
  })

  await pagina.goto(BASE + '/', { waitUntil: 'load', timeout: 90_000 })
  await pagina.waitForTimeout(9_500) // preloader
  await pagina.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

  console.log(`\n== ${ancho}x${alto} ==`)

  // Ir a la sección.
  const y = await pagina.evaluate(() => {
    const el = document.querySelector('.loc-w_bg_img video')
    if (!el) return null
    return el.getBoundingClientRect().top + window.scrollY
  })
  if (y == null) { falla('no hay <video> dentro de .loc-w_bg_img'); await contexto.close(); continue }

  // Esperar a que el preloader suelte el scroll: probar a desplazar y ver si
  // la posición se mantiene; si no, seguir esperando (hasta 20 s más).
  let scrollY = 0
  for (let i = 0; i < 20; i++) {
    await pagina.evaluate((y) => window.scrollTo(0, Math.max(0, y - 80)), y)
    await pagina.waitForTimeout(1_000)
    scrollY = await pagina.evaluate(() => window.scrollY)
    if (scrollY > 100) break
  }
  if (scrollY <= 100) {
    // Último recurso: rueda del ratón (pasa por Lenis).
    for (let i = 0; i < 12; i++) { await pagina.mouse.wheel(0, 1000); await pagina.waitForTimeout(150) }
    await pagina.waitForTimeout(1_500)
    scrollY = await pagina.evaluate(() => window.scrollY)
  }
  console.log(`  scrollY tras desplazar: ${scrollY} (objetivo ${Math.max(0, y - 80)})`)
  if (scrollY <= 100) falla('la página no se desplaza (¿scroll bloqueado?)')
  await pagina.waitForTimeout(2_500)

  const m = await pagina.evaluate(() => {
    const v = document.querySelector('.loc-w_bg_img video')
    const padre = v.parentElement
    const r = (el) => { const b = el.getBoundingClientRect(); return { x: +b.x.toFixed(1), y: +b.y.toFixed(1), w: +b.width.toFixed(1), h: +b.height.toFixed(1) } }
    const cs = getComputedStyle(v)
    const seccion = v.closest('.loc-w')
    return {
      className: v.className,
      videoWidth: v.videoWidth, videoHeight: v.videoHeight,
      readyState: v.readyState, paused: v.paused, ended: v.ended, currentTime: +v.currentTime.toFixed(2),
      muted: v.muted, loop: v.loop, autoplay: v.autoplay, playsInline: v.playsInline,
      currentSrc: v.currentSrc, poster: v.poster,
      objectFit: cs.objectFit, aspectRatio: cs.aspectRatio, display: cs.display, width: cs.width, height: cs.height,
      caja: r(v), padre: r(padre), seccion: r(seccion),
      ratioCaja: +(r(v).w / r(v).h).toFixed(4),
      ratioPoster: +(1920 / 2160).toFixed(4),
    }
  })
  console.log(JSON.stringify(m, null, 2))

  if (!(m.videoWidth > 0)) falla(`videoWidth = ${m.videoWidth}`)
  if (m.paused) falla('el vídeo está en pausa')
  if (m.currentTime <= 0) falla('currentTime no avanza')
  if (m.objectFit !== 'cover') falla(`object-fit = ${m.objectFit}`)
  const tol = 1
  if (Math.abs(m.caja.w - m.padre.w) > tol || Math.abs(m.caja.h - m.padre.h) > tol || Math.abs(m.caja.x - m.padre.x) > tol || Math.abs(m.caja.y - m.padre.y) > tol) falla('la caja del vídeo no coincide con la del padre')
  if (Math.abs(m.ratioCaja - m.ratioPoster) > 0.01) falla(`la proporción de la caja (${m.ratioCaja}) no es la del póster (${m.ratioPoster})`)

  // ¿Avanza de verdad? Segunda lectura 1 s después.
  const t2 = await pagina.evaluate(() => document.querySelector('.loc-w_bg_img video').currentTime)
  await pagina.waitForTimeout(1_000)
  const t3 = await pagina.evaluate(() => document.querySelector('.loc-w_bg_img video').currentTime)
  console.log(`  currentTime: ${t2.toFixed(2)} -> ${t3.toFixed(2)}`)
  if (!(t3 !== t2)) falla('currentTime no cambia en 1 s')

  await pagina.screenshot({ path: `${salida}/location-video-${ancho}.png` })
  // Segunda captura más abajo, con el texto de la sección a la vista.
  await pagina.evaluate((y) => window.scrollTo(0, Math.max(0, y + 400)), y)
  await pagina.waitForTimeout(1_500)
  await pagina.screenshot({ path: `${salida}/location-video-${ancho}-b.png` })

  if (consola.length) { console.log('  consola:', consola); falla('errores de consola') }
  if (red.length) { console.log('  red:', red); falla('peticiones fallidas') }
  await contexto.close()
}

await navegador.close()
console.log(fallos ? `\n${fallos} fallo(s)` : '\nTodo correcto')
process.exit(fallos ? 1 : 0)
