// Replace the modal's mobile seal (24 glyph paths spelling the old brand)
// with the same <textPath> seal used on desktop, scaled to the 80x80 viewBox,
// and give both modal seals their own ids (the Header already uses
// #sello-bahiamar in the same document).
import fs from 'node:fs';

const FILE = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/components/layout/BookCallModal.tsx';
let src = fs.readFileSync(FILE, 'utf8');

const start = src.indexOf('<div className="header-logo_bg b-mob w-embed">');
const svgOpen = src.indexOf('<svg', start);
const svgClose = src.indexOf('</svg>', svgOpen) + '</svg>'.length;
if (start < 0 || svgOpen < 0 || svgClose < 6) throw new Error('mobile seal block not found');

const pathCount = (src.slice(svgOpen, svgClose).match(/<path /g) || []).length;
console.log('glyph paths in mobile seal:', pathCount);

// 120-viewBox desktop seal: r=52, font 8.8px, spacing 1.2px, textLength 326.
// Scaled by 80/120: r=34.67 (centre 40), font 5.87px, spacing 0.8px,
// circumference 2π·34.67 ≈ 218.
const mobileSeal = `<svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path id="sello-bahiamar-modal-mob" d="M 40,5.33 A 34.67,34.67 0 1,1 39.99,5.33" />
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
              {/* Mismo sello que el de escritorio, escalado 80/120 (ver más abajo). */}
              <textPath href="#sello-bahiamar-modal-mob" startOffset="0%" textLength="218" lengthAdjust="spacing">
                Bahía Mar · Boutique Residences · Samaná ·&nbsp;
              </textPath>
            </text>
          </svg>`;

src = src.slice(0, svgOpen) + mobileSeal + src.slice(svgClose);

// Desktop seal inside the modal: own id.
const before = src;
src = src.replace('<path id="sello-bahiamar" d=', '<path id="sello-bahiamar-modal" d=')
         .replace('<textPath href="#sello-bahiamar" startOffset', '<textPath href="#sello-bahiamar-modal" startOffset');
if (src === before) throw new Error('desktop seal id not renamed');

fs.writeFileSync(FILE, src);
console.log('done');
