/**
 * Parte la cabecera en sus tres piezas reales.
 *
 * En el original NO es la misma en todas las páginas:
 *
 *   home        logo + nav + barra de progreso «00» + indicador «Scroll»
 *   interiores  logo + nav + migas de pan
 *
 * Al portar se tomó la cabecera de la home y se puso en el layout global,
 * con lo que las páginas interiores heredaban la barra de scroll y se
 * quedaban sin migas. Esto genera las piezas separadas para montar cada
 * página con la suya.
 *
 *   node scripts/generate-header.mjs
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

const HEADER = (name, extra = '') => `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-header.mjs — no editar a mano.
${extra}
 */

`;

/* ------------------------------------------------------------------
 *  Común: logo + navegación (idénticos en las 29 páginas)
 * ------------------------------------------------------------------ */

const home = parse(readFileSync('referencia-web-original/home.html', 'utf8'));
const homeWrapper = home
  .querySelector('[data-barba="container"]')
  .childNodes.filter((n) => n.nodeType === 1 && n.rawTagName)[0];

const homeKids = homeWrapper.childNodes.filter((n) => n.nodeType === 1 && n.rawTagName);
const logo = homeKids.find((el) => (el.getAttribute('class') || '').includes('header-logo'));
const nav = homeKids.find((el) => (el.getAttribute('class') || '').includes('header-nav'));
const sBar = homeKids.find((el) => (el.getAttribute('class') || '').includes('s-bar-w'));
const sDown = homeKids.find((el) => (el.getAttribute('class') || '').includes('s-down'));

const wrapperClass = homeWrapper.getAttribute('class') || '';
const wrapperAttrs = Object.entries(homeWrapper.attributes ?? {})
  .filter(([k]) => k !== 'class')
  .map(([k, v]) => `${k}="${v}"`)
  .join(' ');

/*
 * El logo no apunta al mismo sitio en todas las páginas: en la home es
 * «volver arriba» (`#hero`) y en las otras 28 es «Home» (`/`). Como se toma
 * el marcado de la home, sin esto el logo de las interiores saltaría a un
 * ancla que allí no existe y no volvería al inicio.
 */
let logoJsx = toJsx(logo, { rewriteUrl, indent: 3 });
const logoReport = [];
const bindLogo = (label, pattern, replacement) => {
  const n = (logoJsx.match(pattern) || []).length;
  logoReport.push([label, n]);
  logoJsx = logoJsx.replace(pattern, replacement);
};

bindLogo('href del logo', /href="#hero"/, 'href={isHome ? "#hero" : "/"}');
bindLogo('aria-label del logo', /aria-label="Back to top"/, 'aria-label={isHome ? "Back to top" : "Home"}');

writeFileSync(
  'components/layout/Header.tsx',
  `'use client';\n\n` +
    HEADER(
      'Header',
      ` * Logo y navegación: la parte de la cabecera que SÍ es igual en las 29\n` +
        ` * páginas. Lo que cambia (barra de scroll en la home, migas en las\n` +
        ` * interiores) se monta aparte desde cada página.\n` +
        ` *\n` +
        ` * Es cliente sólo para saber en qué ruta estamos: el logo enlaza a\n` +
        ` * «volver arriba» en la home y a «Home» en el resto.`,
    ) +
    `import { usePathname } from 'next/navigation';\n\n` +
    `export function Header() {\n  const isHome = usePathname() === '/';\n\n  return (\n` +
    `    <div${wrapperAttrs ? ' ' + wrapperAttrs : ''} className="${wrapperClass}">\n` +
    `${logoJsx}\n${toJsx(nav, { rewriteUrl, indent: 3 })}\n    </div>\n  );\n}\n`,
);

/* ------------------------------------------------------------------
 *  Sólo home: barra de progreso e indicador de scroll
 * ------------------------------------------------------------------ */

writeFileSync(
  'components/layout/ScrollRail.tsx',
  HEADER(
    'ScrollRail',
    ` * Carril izquierdo de la home: la barra de progreso «00» —que además se\n` +
      ` * puede arrastrar, ver scrollBar() en lib/animations/chrome.ts— y el\n` +
      ` * indicador «Scroll». En las páginas interiores NO existe: ahí va el\n` +
      ` * rastro de migas.`,
  ) +
    `export function ScrollRail() {\n  return (\n    <>\n` +
    `${toJsx(sBar, { rewriteUrl, indent: 3 })}\n${toJsx(sDown, { rewriteUrl, indent: 3 })}\n    </>\n  );\n}\n`,
);

/* ------------------------------------------------------------------
 *  Sólo interiores: migas de pan
 * ------------------------------------------------------------------ */

const inner = parse(readFileSync('referencia-web-original/apartments/011.html', 'utf8'));
const crumbs = inner.querySelector('.header-cramps');
const crumbKids = crumbs.childNodes.filter((n) => n.nodeType === 1 && n.rawTagName);

const crumbTemplate = crumbKids[0]; // <a class="nav-item"> con el rótulo duplicado
const separator = crumbKids[1]; // <div class="l2 text-disabled">/</div>

let crumbJsx = toJsx(crumbTemplate, { rewriteUrl, indent: 4 });
crumbJsx = crumbJsx
  .replace(/href="[^"]*"/, 'href={crumb.href ?? "#"}')
  .replace(/aria-label="[^"]*"/, 'aria-label={crumb.label}')
  .split('>Home<')
  .join('>{crumb.label}<');

/*
 * Se conservan TODOS los atributos del contenedor, no sólo la clase.
 *
 * Llevaba `data-theme=""`, que es lo que hace que el cambio de tema al
 * scroll (themeChange en lib/animations/chrome.ts) lo tenga en cuenta y lo
 * pase a la versión blanca sobre las imágenes. Al construir este envoltorio
 * a mano copiando sólo la clase, las migas se quedaban siempre oscuras
 * mientras el logo —que sí lo conservaba— sí cambiaba.
 */
const crumbsClass = crumbs.getAttribute('class') || '';
const crumbsAttrs = Object.entries(crumbs.attributes ?? {})
  .filter(([k]) => k !== 'class')
  .map(([k, v]) => (v === '' ? `${k}=""` : `${k}="${v}"`))
  .join(' ');
const separatorJsx = toJsx(separator, { rewriteUrl, indent: 4 });

writeFileSync(
  'components/layout/Breadcrumbs.tsx',
  HEADER(
    'Breadcrumbs',
    ` * Rastro de migas de las páginas interiores. Sustituye a la barra de\n` +
      ` * progreso de la home en el mismo hueco de la cabecera.\n` +
      ` *\n` +
      ` * El rótulo va DUPLICADO en el marcado a propósito: el intercambio al\n` +
      ` * pasar el cursor necesita dos copias (ver navItemHover en\n` +
      ` * lib/animations/interactions.ts).`,
  ) +
    `export interface Crumb {\n  label: string;\n  /** Sin href, la miga es la página actual y no enlaza a ningún sitio. */\n  href?: string;\n}\n\n` +
    `export function Breadcrumbs({ trail }: { trail: Crumb[] }) {\n  return (\n    <div ${crumbsAttrs} className="${crumbsClass}">\n` +
    `      {trail.map((crumb, i) => (\n        <Fragment key={crumb.label}>\n` +
    `          {i > 0 && (\n${separatorJsx}\n          )}\n${crumbJsx}\n        </Fragment>\n      ))}\n    </div>\n  );\n}\n`,
);

// `Fragment` hace falta para la clave sin envolver en un nodo extra.
for (const file of ['components/layout/Breadcrumbs.tsx']) {
  const body = readFileSync(file, 'utf8').replace(
    /^(\/\* eslint[^\n]*\n)/,
    `$1import { Fragment } from 'react';\n`,
  );
  writeFileSync(file, body);
}

mkdirSync('components/layout', { recursive: true });
console.log('components/layout/Header.tsx        (logo + nav, común)');
for (const [l,n] of logoReport) console.log('   ' + String(n).padStart(2) + 'x  ' + l);
console.log('components/layout/ScrollRail.tsx    (barra «00» + Scroll, sólo home)');
console.log('components/layout/Breadcrumbs.tsx   (migas, páginas interiores)');
