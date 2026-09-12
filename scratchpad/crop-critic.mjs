// Recorta regiones de capturas para inspección (crítico visual palms-seal).
import sharp from 'sharp'
const dir = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/bahia-mar-personalizacion/qa/round-1/'
const out = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad/crops/'
import fs from 'fs'
fs.mkdirSync(out, { recursive: true })
const jobs = JSON.parse(process.argv[2])
for (const j of jobs) {
  await sharp(dir + j.src).extract({ left: j.x, top: j.y, width: j.w, height: j.h }).toFile(out + j.name)
  console.log('ok', j.name)
}
