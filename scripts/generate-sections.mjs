/**
 * Convierte secciones del HTML original en componentes React.
 *
 *   node scripts/generate-sections.mjs list <pagina>       lista las secciones
 *   node scripts/generate-sections.mjs build               genera lo configurado
 *
 * El HTML de Webflow viene aplanado, así que "componente" aquí es cada
 * hijo directo del contenedor de Barba. El mapa de abajo dice cuáles se
 * extraen y con qué nombre; lo que no está en el mapa no se genera.
 *
 * Los ficheros generados llevan aviso de no editar: si hay que retocarlos,
 * se retoca el mapa o se saca el componente de la generación (moviéndolo
 * a components/ a mano y quitándolo de aquí).
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { parse } from 'node-html-parser';
import { toJsx, makeUrlRewriter } from './lib/html-to-jsx.mjs';

const REF = 'referencia-web-original';
const manifest = JSON.parse(readFileSync('scripts/asset-manifest.json', 'utf8'));
const rewriteUrl = makeUrlRewriter(manifest);

function documentOf(page) {
  const html = readFileSync(join(REF, page), 'utf8');
  return parse(html, { blockTextElements: { script: false, style: false } });
}

/** Devuelve los hijos directos del contenedor de Barba. */
function sectionsOf(page) {
  const container = documentOf(page).querySelector('[data-barba="container"]');
  if (!container) throw new Error(`sin contenedor barba en ${page}`);
  return container.childNodes.filter((n) => n.nodeType === 1 && n.rawTagName);
}

/**
 * Busca por selector en toda la página.
 *
 * Hace falta porque no todo el cromo vive dentro del contenedor de Barba:
 * el preloader, la portada de landscape y el aviso de cookies son hermanos
 * suyos dentro de `.transition-wrapper`, y quedan fuera de `sectionsOf`.
 */
function selectIn(page, selector) {
  const el = documentOf(page).querySelector(selector);
  if (!el) throw new Error(`${page}: sin coincidencia para "${selector}"`);
  return el;
}

const label = (el) => {
  const cls = (el.getAttribute('class') || '').split(/\s+/).slice(0, 3).join('.');
  const h = el.querySelector('h1,h2,h3');
  const text = h ? h.text.replace(/\s+/g, ' ').trim().slice(0, 40) : '';
  return `<${el.rawTagName}${cls ? ' .' + cls : ''}>${text ? `  “${text}”` : ''}`;
};

/* --------------------------------------------------------------
 *  Qué se genera.
 *
 *  `page` es el HTML de origen y `index` la posición de la sección
 *  dentro del contenedor de Barba (la que imprime `list`).
 * -------------------------------------------------------------- */
const MAP = [
  // Fuera del contenedor de Barba: hermanos dentro de `.transition-wrapper`.
  { page: 'home.html', selector: '.preloader', out: 'components/layout/Preloader.tsx', name: 'Preloader' },
  { page: 'home.html', selector: '.master-preloader', out: 'components/layout/MasterPreloader.tsx', name: 'MasterPreloader' },
  { page: 'home.html', selector: '.landscape-cover', out: 'components/layout/LandscapeCover.tsx', name: 'LandscapeCover' },
  { page: 'home.html', selector: '.cookies', out: 'components/layout/CookieNotice.tsx', name: 'CookieNotice' },

  // Cromo compartido. La CABECERA no está aquí: no es igual en todas las
  // páginas y la parte scripts/generate-header.mjs en sus tres piezas.
  { page: 'home.html', index: 16, out: 'components/layout/MenuModal.tsx', name: 'MenuModal' },
  { page: 'home.html', index: 15, out: 'components/layout/BookCallModal.tsx', name: 'BookCallModal' },
  { page: 'home.html', index: 17, out: 'components/layout/FloatingTips.tsx', name: 'FloatingTips' },

  // Secciones que se repiten en varias páginas.
  { page: 'home.html', index: 9, out: 'components/sections/Amenities.tsx', name: 'Amenities' },

  // Home
  { page: 'home.html', index: 1, out: 'components/home/Hero.tsx', name: 'Hero' },
  { page: 'home.html', index: 2, out: 'components/home/Arch.tsx', name: 'Arch' },
  { page: 'home.html', index: 3, out: 'components/home/Pillars.tsx', name: 'Pillars' },
  { page: 'home.html', index: 4, out: 'components/home/PillarsMedia.tsx', name: 'PillarsMedia' },
  { page: 'home.html', index: 5, out: 'components/home/Concept.tsx', name: 'Concept' },
  { page: 'home.html', index: 6, out: 'components/home/Location.tsx', name: 'Location' },
  { page: 'home.html', index: 7, out: 'components/home/ApartmentsPreview.tsx', name: 'ApartmentsPreview' },
  { page: 'home.html', index: 8, out: 'components/home/AmenitiesIntro.tsx', name: 'AmenitiesIntro' },
  { page: 'home.html', index: 10, out: 'components/home/SpaceToLive.tsx', name: 'SpaceToLive' },
  { page: 'home.html', index: 11, out: 'components/home/Architecture.tsx', name: 'Architecture' },
  { page: 'home.html', index: 12, out: 'components/home/Developer.tsx', name: 'Developer' },

  // Páginas estáticas
  { page: 'contact.html', index: 3, out: 'components/pages/ContactMain.tsx', name: 'ContactMain' },
  { page: 'coming-soon.html', index: 3, out: 'components/pages/ComingSoonMain.tsx', name: 'ComingSoonMain' },

  // Listado y ficha los generan scripts dedicados (ver package.json).
  { page: 'apartments/011.html', index: 5, out: 'components/apartments/ApartmentArch.tsx', name: 'ApartmentArch' },
  { page: 'apartments/011.html', index: 11, out: 'components/apartments/LightboxModal.tsx', name: 'LightboxModal' },
];

const HEADER = (name, src) => `/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-sections.mjs desde ${src} — no editar a mano.
 *
 * Marcado portado del sitio original conservando las clases de Webflow,
 * que es lo que le da el aspecto (ver styles/webflow.css y components.css).
 * Las URLs del CDN ya están reescritas a /public.
 */

export function ${name}() {
  return (
`;

function build() {
  const cache = new Map();
  let total = 0;

  for (const entry of MAP) {
    let el;
    if (entry.selector) {
      el = selectIn(entry.page, entry.selector);
    } else {
      if (!cache.has(entry.page)) cache.set(entry.page, sectionsOf(entry.page));
      el = cache.get(entry.page)[entry.index];
    }
    if (!el) {
      console.error(`  !! ${entry.page}: sin sección ${entry.selector ?? entry.index}`);
      continue;
    }

    const jsx = toJsx(el, { rewriteUrl, indent: 2 });
    const code = `${HEADER(entry.name, entry.page)}${jsx}\n  );\n}\n`;

    mkdirSync(dirname(entry.out), { recursive: true });
    writeFileSync(entry.out, code);
    total++;
    console.log(`  ${entry.out.padEnd(46)} ${Math.round(code.length / 1024)} KB`);
  }
  console.log(`\n${total} componentes generados`);
}

const [cmd, arg] = process.argv.slice(2);

if (cmd === 'list') {
  const page = arg || 'home.html';
  sectionsOf(page).forEach((el, i) => console.log(String(i).padStart(3), label(el)));
} else if (cmd === 'build') {
  build();
} else {
  console.log('uso: generate-sections.mjs list <pagina> | build');
}
