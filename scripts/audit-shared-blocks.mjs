/**
 * Audita, atributo a atributo, los bloques que se reutilizan entre páginas.
 *
 * Por qué existe: el marcado compartido se portó tomándolo de la home, y
 * varias cosas que allí son específicas de la home se colaron en las otras
 * 28 páginas — la barra de scroll, el enlace «to top» del pie y el destino
 * del logo. Tres fallos de la misma familia.
 *
 * Comparar el bloque entero no basta: los cuatro bloques discrepantes que se
 * detectaron pesaban EXACTAMENTE lo mismo. Esto recorre los dos árboles en
 * paralelo y canta cada atributo y cada texto que no coincida.
 *
 *   node scripts/audit-shared-blocks.mjs
 */
import { readFileSync, readdirSync } from 'node:fs';
import { parse } from 'node-html-parser';

const REF = 'referencia-web-original';
const BASE = 'home.html';

/**
 * Las 28 páginas restantes, fichas incluidas.
 *
 * Comparar sólo una ficha de muestra no bastaba: si dos fichas difirieran
 * entre sí en algo que no sea un dato, no se vería. Se comparan todas.
 */
const OTHERS = [
  'apartments.html',
  'contact.html',
  'coming-soon.html',
  ...readdirSync(`${REF}/apartments`)
    .filter((f) => f.endsWith('.html'))
    .map((f) => `apartments/${f}`),
];

/** Atributos que cambian por página sin significar nada para nosotros. */
const IGNORED = new Set(['data-w-id', 'id', 'data-wf-page-id', 'data-wf-element-id', 'style']);

const BLOCKS = {
  'logo': '.header-logo',
  'nav': '.header-nav',
  'CTA vistas': '.cta-w',
  'pie': '.footer-w',
  'modal menú': '.modal.menu',
  'modal Book a call': '[data-modal-cta]',
  'preloader': '.preloader',
  'cookies': '.cookies',
};

const docOf = (page) => parse(readFileSync(`${REF}/${page}`, 'utf8'));
const elements = (root) => [root, ...root.querySelectorAll('*')];

/** Firma estable de un nodo para poder emparejarlo entre árboles. */
const signature = (el, i) => `${i}:${el.rawTagName}.${(el.getAttribute('class') || '').split(' ')[0]}`;

const findings = [];

for (const [name, selector] of Object.entries(BLOCKS)) {
  const baseEl = docOf(BASE).querySelector(selector);
  if (!baseEl) continue;
  const baseNodes = elements(baseEl);

  for (const page of OTHERS) {
    const otherEl = docOf(page).querySelector(selector);
    if (!otherEl) continue;
    const otherNodes = elements(otherEl);

    if (baseNodes.length !== otherNodes.length) {
      findings.push({
        block: name,
        page,
        detail: `distinto nº de nodos: ${baseNodes.length} en home vs ${otherNodes.length}`,
      });
      continue;
    }

    for (let i = 0; i < baseNodes.length; i++) {
      const a = baseNodes[i];
      const b = otherNodes[i];

      const attrs = new Set([
        ...Object.keys(a.attributes ?? {}),
        ...Object.keys(b.attributes ?? {}),
      ]);

      for (const attr of attrs) {
        if (IGNORED.has(attr)) continue;
        const va = a.getAttribute(attr) ?? '(ausente)';
        const vb = b.getAttribute(attr) ?? '(ausente)';
        if (va === vb) continue;
        findings.push({
          block: name,
          page,
          detail: `${signature(a, i)} → ${attr}: "${va.slice(0, 40)}" vs "${vb.slice(0, 40)}"`,
        });
      }

      // Texto directo del nodo (sin descendientes)
      const textOf = (el) =>
        el.childNodes
          .filter((n) => n.nodeType === 3)
          .map((n) => n.rawText.replace(/\s+/g, ' ').trim())
          .join('')
          .trim();
      if (textOf(a) !== textOf(b)) {
        findings.push({
          block: name,
          page,
          detail: `${signature(a, i)} → texto: "${textOf(a).slice(0, 34)}" vs "${textOf(b).slice(0, 34)}"`,
        });
      }
    }
  }
}

if (!findings.length) {
  console.log('Sin diferencias: los bloques compartidos son idénticos entre páginas.');
} else {
  // Agrupar por bloque + diferencia, indicando en qué páginas ocurre
  const grupos = new Map();
  for (const f of findings) {
    const key = `${f.block} :: ${f.detail}`;
    if (!grupos.has(key)) grupos.set(key, []);
    grupos.get(key).push(f.page);
  }

  console.log(`${grupos.size} diferencia(s) frente a ${BASE}:\n`);
  let bloqueActual = '';
  for (const [key, pages] of grupos) {
    const [bloque, detalle] = key.split(' :: ');
    if (bloque !== bloqueActual) {
      console.log(`--- ${bloque} ---`);
      bloqueActual = bloque;
    }
    console.log(`  ${detalle}`);
    console.log(`      en: ${pages.join(', ')}`);
  }
}
