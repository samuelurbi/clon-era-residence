/* ============================================================
 *  Sustituto del `export const metadata` de Next.
 *
 *  El App Router resolvía los títulos y descripciones en el servidor.
 *  Vibe sirve una SPA: no hay render de servidor, así que todo lo que
 *  antes iba en `<head>` se escribe desde el cliente al montar cada ruta:
 *  título, descripción, canonical, hreflang, Open Graph/Twitter, robots y
 *  los datos estructurados (JSON-LD).
 *
 *  LÍMITES CONOCIDOS Y ASUMIDOS
 *
 *  - Buscadores que ejecutan JS (Google, Bing) ven el `<head>` de cada
 *    página. Los rastreadores que NO lo ejecutan (vista previa de enlaces
 *    de WhatsApp, Facebook, X) ven solo el `index.html`, igual en las 31
 *    rutas: por eso `index.html` NO lleva canonical ni og:url fijos (una
 *    URL fija ahí apuntaría todas las fichas a la portada).
 *  - El servidor responde 200 a cualquier ruta (fallback de SPA). Una
 *    ruta inexistente se marca `noindex` y se quita su canonical.
 *
 *  Las etiquetas que crea este hook llevan `data-seo` para poder
 *  retirarlas al cambiar de página sin tocar las de `index.html`.
 * ============================================================ */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Título por defecto y plantilla, calcados de `app/layout.tsx`. */
const SITE = 'Bahía Mar';
const DEFAULT_TITLE = `${SITE} — Boutique Villas on the Samaná Peninsula, Dominican Republic`;

/** Origen público del sitio: canonical, og:url, hreflang y sitemap salen de aquí. */
export const SITE_ORIGIN = 'https://bahiamarterrenas.com';

/** Título para compartir de la home inglesa (el que ya tenía; ver app/page-metadata.ts). */
const HOME_SHARE_EN = 'Bahía Mar® Boutique Villas on the Samaná, Dominican Republic';

type Lang = 'en' | 'es';

const ES_PREFIX = /^\/es(?=\/|$)/;

/** `/villas/` → `/villas`; la raíz se queda en `/`. */
function cleanPath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

/** URL absoluta de una ruta (con o sin `/es`) en el idioma dado. */
export function siteUrl(path: string, lang: Lang): string {
  const base = cleanPath(path).replace(ES_PREFIX, '') || '/';
  if (lang === 'en') return base === '/' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}${base}`;
  return base === '/' ? `${SITE_ORIGIN}/es` : `${SITE_ORIGIN}/es${base}`;
}

type Meta = {
  /** Sin el sufijo del sitio: se añade aquí, como hacía `template`. */
  title?: string;
  description?: string;
  /** El título va tal cual, sin sufijo (la home, como `absolute` en Next). */
  absolute?: boolean;
  /** Página que no debe indexarse (404, páginas sin enlazar): sin canonical ni hreflang. */
  noindex?: boolean;
  /** Datos estructurados de la página (uno o varios nodos schema.org). */
  jsonLd?: object | object[];
};

/** Escribe (o crea) una etiqueta del `<head>` identificada por `attr`=`key`. */
function setTag(tagName: 'meta' | 'link', attr: string, key: string, valueAttr: string, value: string) {
  let tag = document.head.querySelector<HTMLElement>(`${tagName}[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement(tagName);
    tag.setAttribute(attr, key);
    tag.setAttribute('data-seo', '');
    document.head.appendChild(tag);
  }
  tag.setAttribute(valueAttr, value);
}

function removeTag(selector: string) {
  document.head.querySelectorAll(`${selector}[data-seo]`).forEach((el) => el.remove());
}

export function usePageMeta({ title, description, absolute = false, noindex = false, jsonLd }: Meta) {
  const { pathname } = useLocation();
  const json = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const lang: Lang = ES_PREFIX.test(pathname) ? 'es' : 'en';
    const fullTitle = title ? (absolute ? title : `${title} — ${SITE}`) : DEFAULT_TITLE;
    const shareTitle = absolute && lang === 'en' ? HOME_SHARE_EN : fullTitle;

    document.documentElement.lang = lang;
    document.title = fullTitle;
    if (description) setTag('meta', 'name', 'description', 'content', description);

    // Etiquetas que dependen de la página: se limpian y se vuelven a escribir.
    for (const sel of ['link[rel="canonical"]', 'link[rel="alternate"][hreflang]', 'meta[property="og:url"]', 'meta[name="robots"]', 'meta[property="og:locale:alternate"]']) {
      removeTag(sel);
    }

    if (noindex) {
      /* Etiqueta propia, no `setTag`: si el host ya trae un `robots` (las vistas previas de Vibe lo hacen) no se toca. */
      const robots = document.createElement('meta');
      robots.setAttribute('name', 'robots');
      robots.setAttribute('content', 'noindex, follow');
      robots.setAttribute('data-seo', '');
      document.head.appendChild(robots);
    } else {
      const here = siteUrl(pathname, lang);
      setTag('link', 'rel', 'canonical', 'href', here);
      for (const [code, url] of [['en', siteUrl(pathname, 'en')], ['es', siteUrl(pathname, 'es')], ['x-default', siteUrl(pathname, 'en')]]) {
        const link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', code);
        link.setAttribute('href', url);
        link.setAttribute('data-seo', '');
        document.head.appendChild(link);
      }
      setTag('meta', 'property', 'og:url', 'content', here);
    }

    setTag('meta', 'property', 'og:locale', 'content', lang === 'es' ? 'es_DO' : 'en_US');
    const alt = document.createElement('meta');
    alt.setAttribute('property', 'og:locale:alternate');
    alt.setAttribute('content', lang === 'es' ? 'en_US' : 'es_DO');
    alt.setAttribute('data-seo', '');
    document.head.appendChild(alt);

    setTag('meta', 'property', 'og:title', 'content', shareTitle);
    setTag('meta', 'name', 'twitter:title', 'content', shareTitle);
    if (description) {
      setTag('meta', 'property', 'og:description', 'content', description);
      setTag('meta', 'name', 'twitter:description', 'content', description);
    }

    // JSON-LD: un solo <script> que se reescribe en cada ruta.
    removeTag('script[type="application/ld+json"]');
    if (json && !noindex) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', '');
      script.textContent = json;
      document.head.appendChild(script);
    }
  }, [pathname, title, description, absolute, noindex, json]);
}
