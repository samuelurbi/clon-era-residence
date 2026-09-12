/**
 * Mide la caja del dibujo caligráfico original del preloader (el SVG
 * «Estepona») para colocar el <text> «Samaná» en el mismo sitio.
 */
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)

const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const svg = readFileSync(`${RAIZ}/public/images/e22485744735d6f17214f25b6157e9b5_preloader_bg.svg`, 'utf8')

const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
const pagina = await navegador.newPage()
await pagina.setContent(`<body style="margin:0">${svg}</body>`)
const medidas = await pagina.evaluate(() => {
  const g = document.querySelector('svg g')
  const b = g.getBBox()
  const paths = [...document.querySelectorAll('svg path')].map((p) => {
    const r = p.getBBox()
    return { x: +r.x.toFixed(1), y: +r.y.toFixed(1), w: +r.width.toFixed(1), h: +r.height.toFixed(1) }
  })
  return { grupo: { x: b.x, y: b.y, w: b.width, h: b.height }, paths }
})
console.log(JSON.stringify(medidas, null, 2))
await navegador.close()
