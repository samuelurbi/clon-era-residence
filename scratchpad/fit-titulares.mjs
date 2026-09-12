// node fit.mjs <w> <h> <ruta> — para cada titular, anchura natural sin partir vs caja → factor necesario
import { pathToFileURL } from 'node:url'
const { chromium } = await import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href)
const [w, h, ruta = '/'] = process.argv.slice(2)
const b = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const p = await b.newPage({ viewport: { width: Number(w), height: Number(h) } })
await p.goto('http://localhost:3000' + ruta, { waitUntil: 'load' })
await p.waitForTimeout(10_000)
const rows = await p.evaluate(() => {
  const out = []
  for (const el of document.querySelectorAll('.h1, .h2, .h3, .h4, .h5')) {
    const cs = getComputedStyle(el)
    const r = el.getBoundingClientRect()
    if (cs.display === 'none' || r.width === 0) continue
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim()
    if (!text) continue
    // anchura natural: cada línea "lógica" (span block / br) sin partir
    const prev = []
    const targets = [el, ...el.querySelectorAll('*')]
    for (const t of targets) { prev.push([t, t.style.whiteSpace]); t.style.whiteSpace = 'nowrap' }
    const natural = el.scrollWidth
    for (const [t, v] of prev) t.style.whiteSpace = v
    const box = el.clientWidth
    out.push({ cls: String(el.getAttribute('class') || ''), text: text.slice(0, 40), fs: Math.round(parseFloat(cs.fontSize)), natural, box, factor: box / natural })
  }
  return out
})
console.log(`${w}px ${ruta}`)
for (const r of rows) {
  const flag = r.factor < 1 ? ` ← ×${r.factor.toFixed(2)}` : ''
  console.log(`${String(r.fs).padStart(3)}px  nat ${String(r.natural).padStart(5)}  caja ${String(r.box).padStart(5)}  ${r.cls.padEnd(22).slice(0, 22)} ${r.text}${flag}`)
}
await b.close()
