/* ============================================================
 *  robots.txt y sitemap.xml del sitio publicado en GHL Vibe.
 *
 *  Vibe sirve lo que haya en `public/` del proyecto tal cual. Esto genera
 *  `vibe-bundle/public/robots.txt` y `vibe-bundle/public/sitemap.xml`, y
 *  `scripts/vibe-kit.mjs` los incluye en el kit.
 *
 *  El sitemap lleva cada página en inglés y en español, y cada una con sus
 *  `hreflang` (en, es y x-default). Las URLs salen de las MISMAS reglas que
 *  el canonical de `vibe/src/shims/page-meta.ts` (`siteUrl`): inglés en la
 *  raíz, español bajo `/es`, sin barra final salvo la home inglesa.
 *
 *  Fuera del sitemap, a propósito: `/coming-soon` (marcada `noindex`).
 *
 *  Uso (después de vibe-export y vibe-bundle):
 *    node scripts/vibe-seo.mjs
 * ============================================================ */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://bahiamarterrenas.com';
const OUT = join(ROOT, 'vibe-bundle', 'public');

const slugs = [...readFileSync(join(ROOT, 'vibe', 'src', 'data', 'villas.ts'), 'utf8').matchAll(/^\s{4}slug: '([^']+)',/gm)].map((m) => m[1]);
if (slugs.length !== 5) throw new Error(`Se esperaban 5 villas y salieron ${slugs.length}: ${slugs.join(', ')}`);

const PATHS = ['/', '/villas', ...slugs.map((s) => `/villas/${s}`), '/contact', '/legal'];

const url = (path, lang) => {
  if (lang === 'en') return path === '/' ? `${ORIGIN}/` : `${ORIGIN}${path}`;
  return path === '/' ? `${ORIGIN}/es` : `${ORIGIN}/es${path}`;
};

const entries = PATHS.flatMap((path) =>
  ['en', 'es'].map((lang) => {
    const alternates = [['en', url(path, 'en')], ['es', url(path, 'es')], ['x-default', url(path, 'en')]]
      .map(([hl, href]) => `    <xhtml:link rel="alternate" hreflang="${hl}" href="${href}"/>`)
      .join('\n');
    return `  <url>\n    <loc>${url(path, lang)}</loc>\n${alternates}\n  </url>`;
  }),
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;

/* Lo mismo que ya tenía el sitio (todos los rastreadores permitidos) + el sitemap. */
const robots = ['Googlebot', 'Bingbot', 'Twitterbot', 'facebookexternalhit', '*']
  .map((ua) => `User-agent: ${ua}\nAllow: /\n`)
  .join('\n') + `\nSitemap: ${ORIGIN}/sitemap.xml\n`;

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, 'sitemap.xml'), sitemap);
writeFileSync(join(OUT, 'robots.txt'), robots);
console.log(`vibe-seo: ${PATHS.length * 2} URLs en public/sitemap.xml + public/robots.txt`);
