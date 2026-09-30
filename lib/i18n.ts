/**
 * Idiomas del sitio: inglés en la raíz y español bajo `/es`.
 *
 * El idioma vive en la URL, no en un estado ni en localStorage, por tres
 * motivos:
 *
 *   - Cambiar de idioma es navegar, así que pasa por la transición de
 *     página que ya existe y la capa de animación se reinicia sola (vuelve a
 *     trocear el texto con SplitText sobre el idioma nuevo). Cambiar el
 *     texto en caliente, con el DOM ya troceado, rompería esos nodos.
 *   - Un enlace compartido abre en el idioma en que se compartió.
 *   - Funciona igual en Next y en el gemelo de Vibe: los dos derivan el
 *     idioma del `pathname`, sin proveedor ni contexto que montar.
 *
 * Las rutas son las mismas en los dos idiomas (`/villas` ↔ `/es/villas`):
 * traducir los segmentos obligaría a una tabla de equivalencias para el
 * switcher y para cada enlace, a cambio de nada que el cliente haya pedido.
 */

export type Lang = 'en' | 'es';

export const LANGS: readonly Lang[] = ['en', 'es'];

const ES_PREFIX = /^\/es(?=\/|$)/;

/** Idioma de una ruta: `/es` y `/es/...` son español; el resto, inglés. */
export function langFromPath(pathname: string): Lang {
  return ES_PREFIX.test(pathname) ? 'es' : 'en';
}

/** La ruta sin el prefijo de idioma: `/es/villas` → `/villas`. */
export function stripLang(pathname: string): string {
  return pathname.replace(ES_PREFIX, '') || '/';
}

/**
 * Ruta interna en el idioma dado: `localize('/villas', 'es')` → `/es/villas`.
 *
 * Lo que no es una ruta del sitio (anclas `#…`, `mailto:`, `tel:`, URLs
 * absolutas) pasa tal cual, para poder usarla sin mirar qué enlace es.
 */
export function localize(path: string, lang: Lang): string {
  if (lang === 'en' || !path.startsWith('/') || path.startsWith('//')) return path;
  if (ES_PREFIX.test(path)) return path;
  return path === '/' ? '/es' : `/es${path}`;
}

/** Atajo para los textos en línea: `pick(lang, 'Contact', 'Contacto')`. */
export function pick<T>(lang: Lang, en: T, es: T): T {
  return lang === 'es' ? es : en;
}
