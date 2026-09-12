/** Pinta public/images/landscape.svg sobre fondo oscuro para ver qué dibuja. */
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const COMPARTIDO = process.env.CLAUDE_TOOLS || 'C:/Users/kevin/.claude-work/tools'
const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL(`${COMPARTIDO}/node_modules/playwright/index.mjs`).href),
)
const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const svg = readFileSync(`${RAIZ}/public/images/landscape.svg`, 'utf8')
const navegador = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
})
const pagina = await navegador.newPage({ viewport: { width: 812, height: 372 } })
await pagina.setContent(`<body style="margin:0;background:#04332f">${svg.replace('<g opacity="0.15">', '<g opacity="1">')}</body>`)
await pagina.screenshot({ path: `${RAIZ}/scratchpad/capturas/landscape-svg.png` })
await navegador.close()
