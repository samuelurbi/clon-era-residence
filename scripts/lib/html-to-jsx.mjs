/**
 * Conversor de HTML de Webflow a JSX.
 *
 * El sitio original son 29 HTML planos exportados por Webflow, con el árbol
 * completo sin componentes. Portarlos a mano sería inviable y propenso a
 * erratas, así que se convierten mecánicamente y luego se organizan en
 * componentes. Este módulo sólo transforma; no decide qué es un componente.
 *
 * Se ocupa de las diferencias que rompen React:
 *   - atributos renombrados (class, for, tabindex, srcset…)
 *   - elementos vacíos que hay que autocerrar
 *   - style="..." → objeto JS
 *   - llaves en el texto, que JSX interpretaría como expresión
 *   - URLs del CDN de Webflow → rutas locales (vía asset-manifest.json)
 *   - atributos booleanos, y los `data-` y `aria-` que pasan tal cual
 */

/** Atributos HTML cuyo nombre cambia en JSX. */
const RENAMED = {
  class: 'className',
  for: 'htmlFor',
  srcset: 'srcSet',
  tabindex: 'tabIndex',
  colspan: 'colSpan',
  rowspan: 'rowSpan',
  maxlength: 'maxLength',
  minlength: 'minLength',
  readonly: 'readOnly',
  autocomplete: 'autoComplete',
  autofocus: 'autoFocus',
  autoplay: 'autoPlay',
  playsinline: 'playsInline',
  disablepictureinpicture: 'disablePictureInPicture',
  disableremoteplayback: 'disableRemotePlayback',
  novalidate: 'noValidate',
  enctype: 'encType',
  usemap: 'useMap',
  contenteditable: 'contentEditable',
  spellcheck: 'spellCheck',
  crossorigin: 'crossOrigin',
  datetime: 'dateTime',
  formaction: 'formAction',
  accesskey: 'accessKey',
  'accept-charset': 'acceptCharset',
  'http-equiv': 'httpEquiv',
  // SVG
  'stroke-width': 'strokeWidth',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'fill-rule': 'fillRule',
  'clip-rule': 'clipRule',
  'clip-path': 'clipPath',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'fill-opacity': 'fillOpacity',
  'stroke-opacity': 'strokeOpacity',
  viewbox: 'viewBox',
  startoffset: 'startOffset',
  // En el HTML vienen con guion; sin la clave exacta no casaban y React
  // avisaba de "Invalid DOM property".
  'text-anchor': 'textAnchor',
  'vector-effect': 'vectorEffect',
  'text-length': 'textLength',
  'dominant-baseline': 'dominantBaseline',
  'letter-spacing': 'letterSpacing',
  'paint-order': 'paintOrder',
  'shape-rendering': 'shapeRendering',
  'color-interpolation-filters': 'colorInterpolationFilters',
  preserveaspectratio: 'preserveAspectRatio',
  gradientunits: 'gradientUnits',
  patternunits: 'patternUnits',
  markerwidth: 'markerWidth',
  markerheight: 'markerHeight',
  xmlnsxlink: 'xmlnsXlink',
};

/** Atributos booleanos: en JSX van como {true}, no como cadena vacía. */
const BOOLEAN = new Set([
  'disabled', 'checked', 'selected', 'readonly', 'required', 'multiple',
  'autofocus', 'autoplay', 'controls', 'loop', 'muted', 'playsinline',
  'novalidate', 'open', 'hidden', 'default', 'reversed', 'async', 'defer',
  'disablepictureinpicture', 'disableremoteplayback',
]);

/**
 * Elementos SVG cuyo nombre lleva mayúsculas en JSX. El parser de HTML los
 * baja a minúsculas y React no los reconocería como SVG.
 */
const SVG_TAGS = {
  textpath: 'textPath',
  lineargradient: 'linearGradient',
  radialgradient: 'radialGradient',
  clippath: 'clipPath',
  foreignobject: 'foreignObject',
  feblend: 'feBlend',
  fecolormatrix: 'feColorMatrix',
  fecomposite: 'feComposite',
  fegaussianblur: 'feGaussianBlur',
  feoffset: 'feOffset',
  femerge: 'feMerge',
  femergenode: 'feMergeNode',
  fedropshadow: 'feDropShadow',
  animatetransform: 'animateTransform',
  animatemotion: 'animateMotion',
};

/**
 * Atributos que React tipa como número: en JSX van entre llaves, no
 * entre comillas, o TypeScript los rechaza.
 */
const NUMERIC = new Set([
  'maxlength', 'minlength', 'tabindex', 'rows', 'cols', 'size', 'span',
  'colspan', 'rowspan', 'start', 'marginwidth', 'marginheight',
]);

/** Elementos vacíos: en JSX hay que autocerrarlos. */
const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link',
  'meta', 'param', 'source', 'track', 'wbr',
]);

/**
 * Atributos que se descartan: son del runtime de Webflow o de su editor y
 * no significan nada fuera de él. `data-w-id` sí se conserva porque las
 * interacciones originales lo usan como ancla.
 */
const DROP = new Set([
  'data-wf-domain', 'data-wf-page', 'data-wf-site', 'data-wf-collection',
  'data-wf-item-slug', 'data-wf-element-count', 'data-wf-item-id',
]);

const camel = (prop) =>
  prop.startsWith('--') ? prop : prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

/** `style="a:b;c:d"` → `{{a:'b',c:'d'}}`, respetando las custom properties. */
function styleToObject(value) {
  const entries = [];
  // Partimos por ';' que no esté dentro de paréntesis: url(a;b), calc(...)
  let depth = 0;
  let current = '';
  for (const ch of value) {
    if (ch === '(') depth++;
    if (ch === ')') depth--;
    if (ch === ';' && depth === 0) {
      if (current.trim()) entries.push(current);
      current = '';
    } else current += ch;
  }
  if (current.trim()) entries.push(current);

  const pairs = entries
    .map((decl) => {
      const i = decl.indexOf(':');
      if (i === -1) return null;
      const prop = decl.slice(0, i).trim();
      const val = decl.slice(i + 1).trim();
      if (!prop) return null;
      const k = camel(prop);
      const quoted = `'${val.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
      return /^[a-zA-Z][a-zA-Z0-9]*$/.test(k) ? `${k}: ${quoted}` : `'${k}': ${quoted}`;
    })
    .filter(Boolean);

  return pairs.length ? `{{ ${pairs.join(', ')} }}` : null;
}

/** Texto plano → texto seguro dentro de JSX. */
function escapeText(text) {
  return text
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&rsquo;/g, '’')
    .replace(/&lsquo;/g, '‘')
    .replace(/&ldquo;/g, '“')
    .replace(/&rdquo;/g, '”')
    .replace(/[{}]/g, (c) => `{'${c}'}`)
    // `>` y `}` sueltos son legales pero confunden; `<` no lo es.
    .replace(/</g, '{\'<\'}');
}

/**
 * @param {import('node-html-parser').HTMLElement} node
 * @param {object} opts
 * @param {(url: string) => string} opts.rewriteUrl  CDN → ruta local
 * @param {number} opts.indent
 */
export function toJsx(node, opts = {}) {
  const { rewriteUrl = (u) => u, indent = 0 } = opts;
  const pad = '  '.repeat(indent);

  // Nodo de texto
  if (node.nodeType === 3) {
    const raw = node.rawText ?? '';
    if (!raw.trim()) return '';
    const text = escapeText(raw.replace(/\s+/g, ' '));
    return pad + text;
  }

  // Comentarios fuera
  if (node.nodeType === 8) return '';
  if (!node.rawTagName) {
    return node.childNodes
      .map((c) => toJsx(c, { ...opts, indent }))
      .filter(Boolean)
      .join('\n');
  }

  const rawTag = node.rawTagName.toLowerCase();
  if (rawTag === 'script' || rawTag === 'style' || rawTag === 'noscript') return '';
  const tag = SVG_TAGS[rawTag] ?? rawTag;

  const attrs = [];
  for (const [rawName, rawValue] of Object.entries(node.attributes ?? {})) {
    const lower = rawName.toLowerCase();
    if (DROP.has(lower)) continue;

    if (lower === 'style') {
      const obj = styleToObject(rawValue);
      if (obj) attrs.push(`style=${obj}`);
      continue;
    }

    let value = rawValue;
    if (lower === 'src' || lower === 'href' || lower === 'poster') value = rewriteUrl(value);
    if (lower === 'srcset') {
      value = value
        .split(',')
        .map((part) => {
          const [url, ...rest] = part.trim().split(/\s+/);
          return [rewriteUrl(url), ...rest].join(' ');
        })
        .join(', ');
    }

    const name = RENAMED[lower] ?? lower;

    if (BOOLEAN.has(lower) && (value === '' || value === lower || value === 'true')) {
      attrs.push(`${name}`);
      continue;
    }

    if (NUMERIC.has(lower) && value !== '' && !Number.isNaN(Number(value))) {
      attrs.push(`${name}={${Number(value)}}`);
      continue;
    }

    // data-* y aria-* conservan el guion; el resto ya viene mapeado.
    const safe = value.replace(/"/g, '&quot;');
    attrs.push(`${name}="${safe}"`);
  }

  const attrText = attrs.length ? ' ' + attrs.join(' ') : '';

  if (VOID.has(tag)) return `${pad}<${tag}${attrText} />`;

  const children = node.childNodes
    .map((c) => toJsx(c, { ...opts, indent: indent + 1 }))
    .filter(Boolean);

  if (!children.length) return `${pad}<${tag}${attrText}></${tag}>`;

  // Un único hijo de texto corto cabe en una línea
  if (children.length === 1 && !children[0].includes('\n') && children[0].trim().length < 60) {
    return `${pad}<${tag}${attrText}>${children[0].trim()}</${tag}>`;
  }

  return `${pad}<${tag}${attrText}>\n${children.join('\n')}\n${pad}</${tag}>`;
}

/** Construye el reescritor de URLs a partir del manifiesto de assets. */
export function makeUrlRewriter(manifest) {
  const byUrl = new Map(Object.entries(manifest));
  // También indexamos por nombre de fichero, porque el srcset trae variantes
  // (-p-500, -p-800…) que no siempre están en el manifiesto.
  const byFile = new Map();
  for (const [url, local] of byUrl) {
    byFile.set(url.split('/').pop(), local);
  }

  return (url) => {
    if (!url) return url;
    const clean = url.replace(/&amp;/g, '&');
    if (byUrl.has(clean)) return byUrl.get(clean);
    const file = clean.split('/').pop()?.split('?')[0];
    if (file && byFile.has(file)) return byFile.get(file);
    // Assets del CDN que no se descargaron: los dejamos señalados para
    // que el build no los oculte en silencio.
    if (clean.includes('website-files.com')) {
      const guess = file?.replace(/^[0-9a-f]{24}_/, '');
      return guess ? `/images/${guess}` : clean;
    }
    return clean;
  };
}
