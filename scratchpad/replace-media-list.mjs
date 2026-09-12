// Sustituye los tres <div role="listitem"> de ERA del listado de medios de
// escritorio de VillaDetail.tsx por un único item mapeado sobre villa.gallery.
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/components/villas/VillaDetail.tsx';
const src = readFileSync(FILE, 'utf8');
const lines = src.split('\n');

// Segundo `lot-media-cms_list w-dyn-items` = el de escritorio.
const openers = lines.map((l, i) => (l.includes('className="lot-media-cms_list w-dyn-items"') ? i : -1)).filter((i) => i >= 0);
if (openers.length !== 2) throw new Error(`esperaba 2 listas, hay ${openers.length}`);
const start = openers[1] + 1; // primera línea del primer listitem
const closers = lines.map((l, i) => (l.includes('cms_empty-none') ? i : -1)).filter((i) => i >= 0);
const end = closers[1] - 1; // la línea `</div>` que cierra el role="list"
if (!lines[end].trim().startsWith('</div>')) throw new Error(`no cierra donde esperaba: ${lines[end]}`);

const bloque = lines.slice(start, end);
const eraCount = bloque.filter((l) => l.includes('era-residence')).length;
if (eraCount !== 3) throw new Error(`esperaba 3 imágenes de ERA en el bloque, hay ${eraCount}`);

// Tomamos el primer item como plantilla y le cambiamos la <img>.
const firstEnd = bloque.findIndex((l, i) => i > 0 && l.trim() === '<div role="listitem" className="lot-media-cms_list_item w-dyn-item w-dyn-repeater-item">');
const item = bloque.slice(0, firstEnd);
const out = item.map((l) => {
  if (l.trim().startsWith('<div role="listitem"')) {
    return l.replace('<div role="listitem"', '<div key={src} role="listitem"');
  }
  if (l.includes('era-residence-bathroom')) {
    const indent = l.match(/^\s*/)[0];
    return `${indent}<img src={src} loading="eager" data-lightbox="" alt={galleryAlt(villa, src)} sizes="100vw" srcSet={srcset(src)} className="img h-auto" />`;
  }
  return l;
});
const indent = item[0].match(/^\s*/)[0];
const mapped = [
  `${indent}{villa.gallery.map((src) => (`,
  ...out.map((l) => '  ' + l),
  `${indent}))}`,
];

const result = [...lines.slice(0, start), ...mapped, ...lines.slice(end)].join('\n');
writeFileSync(FILE, result);
console.log(`sustituidas líneas ${start + 1}-${end} (${bloque.length} líneas) por ${mapped.length}`);
