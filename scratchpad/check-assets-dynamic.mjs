/**
 * Complemento de check-assets.mjs: rutas construidas en tiempo de ejecución
 * (srcset() de data/villas.ts sobre heroImage y gallery; responsive() de
 * data/cta-images.ts). Comprueba que existan las cinco variantes -p-N.
 *
 *   node scratchpad/check-assets-dynamic.mjs
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const PUBLIC = join(RAIZ, 'public')
const ANCHOS = [500, 800, 1080, 1600, 2000]

const villasTxt = readFileSync(join(RAIZ, 'data/villas.ts'), 'utf8')
const ctaTxt = readFileSync(join(RAIZ, 'data/cta-images.ts'), 'utf8')

// heroImage: '/images/…' y todo lo de gallery: [...]
const bases = new Set()
for (const m of villasTxt.matchAll(/heroImage:\s*'([^']+)'/g)) bases.add(m[1])
for (const m of villasTxt.matchAll(/gallery:\s*\[([^\]]+)\]/gs)) {
  for (const s of m[1].matchAll(/'([^']+\.webp)'/g)) bases.add(s[1])
}
for (const m of ctaTxt.matchAll(/responsive\(\s*'([^']+)'/g)) bases.add(`/images/${m[1]}.webp`)

let faltan = 0, total = 0
for (const img of [...bases].sort()) {
  const base = img.replace(/\.webp$/, '')
  for (const w of ANCHOS) {
    total++
    const ruta = `${base}-p-${w}.webp`
    if (!existsSync(join(PUBLIC, ruta))) { faltan++; console.log(`FALTA  ${ruta}`) }
  }
  total++
  if (!existsSync(join(PUBLIC, img))) { faltan++; console.log(`FALTA  ${img}`) }
}
console.log(`\n${bases.size} imágenes base, ${total} rutas derivadas, ${faltan} faltan`)
process.exit(faltan ? 1 : 0)
