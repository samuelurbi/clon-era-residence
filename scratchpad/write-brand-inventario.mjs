/* Escribe bahia-mar-personalizacion/inventario/brand-assets.json (sólo ese fichero). */
import { writeFileSync } from 'node:fs';

const ROOT =
  'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const OUT = `${ROOT}/bahia-mar-personalizacion/inventario/brand-assets.json`;

const ISO = '(derivado) public/images/bahiamar-isotype.png';
const inventario = [
  {
    destino: 'public/icons/favicon-32.png',
    origen: `${ISO} — ola recoloreada a arena #E8D8C8 sobre verde profundo #022725 (scratchpad/build-favicons.mjs)`,
    uso: 'app/layout.tsx → metadata.icons.icon (32x32)',
  },
  {
    destino: 'public/icons/favicon-48.png',
    origen: `${ISO} — scratchpad/build-favicons.mjs`,
    uso: 'app/layout.tsx → metadata.icons.icon (48x48)',
  },
  {
    destino: 'public/icons/favicon-192.png',
    origen: `${ISO} — scratchpad/build-favicons.mjs`,
    uso: 'app/layout.tsx → metadata.icons.icon (192x192)',
  },
  {
    destino: 'public/icons/favicon-512.png',
    origen: `${ISO} — scratchpad/build-favicons.mjs`,
    uso: 'app/layout.tsx → metadata.icons.icon (512x512)',
  },
  {
    destino: 'public/icons/apple-touch-icon.png',
    origen: `${ISO} — scratchpad/build-favicons.mjs`,
    uso: 'app/layout.tsx → metadata.icons.apple (180x180)',
  },
  {
    destino: 'public/images/open-graph.webp',
    origen:
      '(render) scratchpad/og-template.html → Playwright/Brave 1200x630 → WebP q85 (scratchpad/og-render.mjs). ' +
      'Fondo: public/images/bahiamar-hero-day-p-1600.webp (render diurno de la villa, ya procesado); ' +
      'isotipo: public/images/bahiamar-isotype.png recoloreado a arena (scratchpad/og-isotype-sand.png)',
    uso: 'app/layout.tsx → metadata.openGraph.images y metadata.twitter.images (vista previa al compartir)',
  },
];

writeFileSync(OUT, JSON.stringify(inventario, null, 2) + '\n', 'utf8');
console.log('escrito', OUT);
