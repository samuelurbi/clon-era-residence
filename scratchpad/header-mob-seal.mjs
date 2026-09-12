/**
 * Sustituye el anillo móvil de la cabecera (header-logo_bg b-mob), que aún
 * llevaba las letras del sitio de origen como <path>, por el mismo sello
 * <textPath> de Bahía Mar que ya usa la versión de escritorio, escalado al
 * viewBox 80x80 (radio 52·80/120 ≈ 34.67, circunferencia ≈ 218).
 *
 *   node scratchpad/header-mob-seal.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs'

const RUTA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/components/layout/Header.tsx'

const src = readFileSync(RUTA, 'utf8')

const inicio = src.indexOf('<div className="header-logo_bg b-mob w-embed">')
if (inicio < 0) throw new Error('no encuentro el bloque b-mob')
const finSvg = src.indexOf('</svg>', inicio)
const fin = src.indexOf('</div>', finSvg) + '</div>'.length

const nuevo = `<div className="header-logo_bg b-mob w-embed">
          <svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-mob" d="M 40,5.33 A 34.67,34.67 0 1,1 39.99,5.33" />
            </defs>
            <text
              fill="currentColor"
              style={{
                fontFamily: 'var(--_fonts---font-body, sans-serif)',
                fontSize: '5.87px',
                fontWeight: 500,
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}
            >
              {/*
                Misma receta que el sello de escritorio, a escala 80/120:
                textLength = 2π·34.67 ≈ 218 reparte el texto por todo el anillo.
              */}
              <textPath href="#sello-bahiamar-mob" startOffset="0%" textLength="218" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>
        </div>`

const out = src.slice(0, inicio) + nuevo + src.slice(fin)
writeFileSync(RUTA, out)
console.log(`reemplazado bloque b-mob: ${fin - inicio} chars -> ${nuevo.length} chars`)
