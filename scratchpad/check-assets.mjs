/**
 * Comprueba que toda ruta "/images/…" o "/videos/…" referenciada en
 * app/, components/ y data/ existe bajo public/. Una imagen que falta es
 * un 404 silencioso en esta web.
 *
 *   node scratchpad/check-assets.mjs
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs'
import { join, extname } from 'node:path'

const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const PUBLIC = join(RAIZ, 'public')
const EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.css', '.json'])

function* archivos(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n)
    if (statSync(p).isDirectory()) yield* archivos(p)
    else if (EXT.has(extname(n))) yield p
  }
}

const RE = /\/(images|videos)\/[A-Za-z0-9_\-./%]+?\.(webp|png|jpg|jpeg|svg|gif|mp4|webm|avif|ico)/g

const refs = new Map() // ruta -> [ficheros]
for (const carpeta of ['app', 'components', 'data']) {
  for (const f of archivos(join(RAIZ, carpeta))) {
    const txt = readFileSync(f, 'utf8')
    for (const m of txt.matchAll(RE)) {
      const ruta = decodeURIComponent(m[0])
      if (!refs.has(ruta)) refs.set(ruta, new Set())
      refs.get(ruta).add(f.replace(RAIZ + '\\', '').replace(RAIZ + '/', ''))
    }
  }
}

let faltan = 0
const lista = [...refs.keys()].sort()
for (const ruta of lista) {
  const ok = existsSync(join(PUBLIC, ruta))
  if (!ok) {
    faltan++
    console.log(`FALTA  ${ruta}   <- ${[...refs.get(ruta)].join(', ')}`)
  }
}
console.log(`\n${lista.length} rutas referenciadas, ${faltan} faltan`)
if (process.argv.includes('--todas')) lista.forEach((r) => console.log('  ' + r))
process.exit(faltan ? 1 : 0)
