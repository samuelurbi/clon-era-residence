/**
 * Sonda móvil (390×844) para las vegetaciones apart-info / other / loc-intro.
 *
 *   node scratchpad/probe-flowers-390.mjs
 *
 * Para cada bloque: lleva el texto de referencia al centro del viewport,
 * espera a que terminen los reveals, y captura. Para apart-info y other
 * prueba además varios candidatos de CSS inyectados como <style> (la
 * última hoja gana) y captura cada uno con el mismo scroll, para elegir
 * el valor definitivo con los ojos y con los rectángulos medidos.
 */
import { mkdirSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href))

const SALIDA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/flowers-390'
mkdirSync(SALIDA, { recursive: true })

const nav = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const ctx = await nav.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true })
const p = await ctx.newPage()
await p.goto('http://localhost:3000/', { waitUntil: 'load', timeout: 90_000 })
await p.waitForTimeout(9_500)
await p.evaluate(() => document.querySelectorAll('.cookies').forEach((n) => n.remove()))

// Recorrido completo para que todo se inicialice (secciones fijadas, splits)
await p.evaluate(async () => {
  const total = document.documentElement.scrollHeight
  for (let y = 0; y < total; y += 300) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 90)) }
})

async function centrar(selector, offset = 0) {
  await p.evaluate(async ({ selector, offset }) => {
    const el = document.querySelector(selector)
    const r = el.getBoundingClientRect()
    window.scrollTo(0, window.scrollY + r.top + r.height / 2 - window.innerHeight / 2 + offset)
  }, { selector, offset })
  await p.waitForTimeout(3000)
}

async function rects(selTexto, selFlor) {
  return p.evaluate(({ selTexto, selFlor }) => {
    const t = document.querySelector(selTexto).getBoundingClientRect()
    const f = document.querySelector(selFlor).getBoundingClientRect()
    return { texto: { x: +t.x.toFixed(0), y: +t.y.toFixed(0), r: +t.right.toFixed(0), b: +t.bottom.toFixed(0) }, flor: { x: +f.x.toFixed(0), y: +f.y.toFixed(0), r: +f.right.toFixed(0), b: +f.bottom.toFixed(0) } }
  }, { selTexto, selFlor })
}

async function candidato(nombre, css) {
  await p.evaluate(({ css }) => {
    let s = document.getElementById('sonda-css')
    if (!s) { s = document.createElement('style'); s.id = 'sonda-css'; document.head.appendChild(s) }
    s.textContent = css
  }, { css })
  await p.waitForTimeout(400)
  await p.screenshot({ path: `${SALIDA}/${nombre}.png` })
}

// ---- apart-info: el párrafo de AmenitiesIntro (el .p1 dentro de .apart-info-s o similar)
const selParrafo = await p.evaluate(() => {
  const flor = document.querySelector('.flower.apart-info')
  const sec = flor.closest('section') || flor.parentElement
  const ps = [...sec.querySelectorAll('p')].filter((e) => /LEED/.test(e.textContent))
  if (!ps.length) return null
  ps[0].setAttribute('data-sonda', 'parrafo')
  return '[data-sonda="parrafo"]'
})
console.log('parrafo:', selParrafo)
await centrar(selParrafo, 120)
console.log('apart-info actual', JSON.stringify(await rects(selParrafo, '.flower.apart-info')))
await candidato('apart-info-actual', '')
const candidatosApart = {
  'apart-info-b96-l64': '',
  'apart-info-b128-l96': '@media (max-width:991px){.flower.flower.apart-info{bottom:calc((128rem/var(--_special-units---scale-ratio))*-1);left:calc(((96rem/var(--_special-units---scale-ratio))*-1) - var(--_special-units---offset-l))}}',
  'apart-info-b160-l96': '@media (max-width:991px){.flower.flower.apart-info{bottom:calc((160rem/var(--_special-units---scale-ratio))*-1);left:calc(((96rem/var(--_special-units---scale-ratio))*-1) - var(--_special-units---offset-l))}}',
  'apart-info-w7-b64-l64': '@media (max-width:991px){.flower.flower.apart-info{width:calc(var(--40px)*7);height:calc(var(--40px)*7);bottom:calc((64rem/var(--_special-units---scale-ratio))*-1);left:calc(((64rem/var(--_special-units---scale-ratio))*-1) - var(--_special-units---offset-l))}}',
}
for (const [n, css] of Object.entries(candidatosApart)) {
  await candidato(n, css)
  console.log(n, JSON.stringify(await rects(selParrafo, '.flower.apart-info')))
}
await candidato('reset', '')

// ---- other: la etiqueta «A place to return to, year after year»
const selEtiqueta = await p.evaluate(() => {
  const flor = document.querySelector('.flower.other')
  const sec = flor.closest('section') || flor.parentElement
  const el = [...sec.querySelectorAll('h1,h2,h3,h4,h5,h6,p,div')].find((e) => /year after year/i.test(e.textContent) && e.children.length < 6 && e.textContent.trim().length < 80)
  if (!el) return null
  el.setAttribute('data-sonda', 'etiqueta')
  return '[data-sonda="etiqueta"]'
})
console.log('etiqueta:', selEtiqueta)
await centrar(selEtiqueta, 0)
console.log('other actual', JSON.stringify(await rects(selEtiqueta, '.flower.other')))
await candidato('other-actual', '')
await centrar(selEtiqueta, -250)
await candidato('other-actual-alto', '')
console.log('other alto', JSON.stringify(await rects(selEtiqueta, '.flower.other')))

// ---- loc-intro
await centrar('.flower.loc-intro', -150)
await candidato('loc-intro-actual', '')

await nav.close()
