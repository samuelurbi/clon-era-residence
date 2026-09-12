// node measure.mjs <w> <h> <ruta> — líneas y desborde de cada titular con la fuente activa
import { pathToFileURL } from 'node:url'
const { chromium } = await import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href)
const [w, h, ruta = '/'] = process.argv.slice(2)
const b = await chromium.launch({ executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe', headless: true })
const p = await b.newPage({ viewport: { width: Number(w), height: Number(h) } })
await p.goto('http://localhost:3000' + ruta, { waitUntil: 'load' })
await p.waitForTimeout(10_000)
const rows = await p.evaluate(() => {
  const fam = getComputedStyle(document.querySelector('.h1, .h2') || document.body).fontFamily.slice(0, 40)
  const out = [{ fam }]
  for (const el of document.querySelectorAll('.h1, .h2, .h3, .h4, .h5')) {
    const cs = getComputedStyle(el)
    const text = (el.textContent || '').replace(/\s+/g, ' ').trim()
    if (!text) continue
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.1
    const r = el.getBoundingClientRect()
    const lines = Math.round(r.height / lh)
    // desborde: alguna línea hija más ancha que la caja, o scrollWidth
    const over = el.scrollWidth - el.clientWidth
    // palabra partida: una palabra más ancha que la caja
    const range = document.createRange(); let maxWord = 0
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT)
    let n; while ((n = walker.nextNode())) {
      const t = n.textContent; const re = /\S+/g; let m
      while ((m = re.exec(t))) { range.setStart(n, m.index); range.setEnd(n, m.index + m[0].length); maxWord = Math.max(maxWord, range.getBoundingClientRect().width) }
    }
    out.push({ cls: String(el.getAttribute('class') || '').split(' ').filter((c) => /^h[1-5]$|^a-|^b-/.test(c)).join('.'), text: text.slice(0, 48), fs: Math.round(parseFloat(cs.fontSize)), lines, box: Math.round(r.width), over: Math.round(over), broken: maxWord > r.width + 1 ? Math.round(maxWord) : 0, vis: cs.display !== 'none' && r.width > 0 })
  }
  return out
})
console.log(`${w}px ${ruta} — fuente: ${rows[0].fam}`)
for (const r of rows.slice(1)) {
  if (!r.vis) continue
  const flag = r.broken ? ' ⚠ PALABRA PARTIDA' : r.over > 2 ? ' ⚠ DESBORDA' : ''
  console.log(`${String(r.lines).padStart(2)} lín  ${String(r.fs).padStart(3)}px  ${String(r.box).padStart(5)}px  ${r.cls.padEnd(14)} ${r.text}${flag}`)
}
await b.close()
