/**
 * Comprueba que todas las rutas /images/... y /videos/... de Location.tsx
 * existen bajo public/ (un 404 en este sitio es silencioso).
 */
import { readFileSync, existsSync } from 'node:fs'

const RAIZ = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish'
const fuente = readFileSync(`${RAIZ}/components/home/Location.tsx`, 'utf8')
const rutas = [...new Set(fuente.match(/\/(images|videos)\/[A-Za-z0-9_./-]+/g) || [])].sort()

let faltan = 0
for (const r of rutas) {
  const ok = existsSync(`${RAIZ}/public${r}`)
  if (!ok) faltan++
  console.log(`${ok ? 'OK     ' : 'FALTA  '} ${r}`)
}
console.log(faltan ? `\n${faltan} ruta(s) sin fichero` : '\nTodas las rutas existen')
process.exit(faltan ? 1 : 0)
