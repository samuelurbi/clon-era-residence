/* ============================================================
 *  SHIMS — 2 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* ============================================================
   shims/next-navigation.ts
   ============================================================ */

/* ============================================================
 *  Shim de `next/navigation` sobre React Router.
 *
 *  Vibe hospeda un proyecto React + Vite: `next/navigation` no existe.
 *  Los cuatro componentes del repo que lo importan (Header, Animations,
 *  PageTransitions, SmoothScroll) NO se tocan: `vibe-export.mjs` les
 *  reapunta el import aquí, y así el código que se pega en GHL sigue
 *  siendo el mismo que el del repo.
 *
 *  Solo se implementa lo que el sitio usa de verdad —comprobado con
 *  grep sobre `components/` y `lib/`—: `usePathname` y el `push` de
 *  `useRouter`. El resto de métodos está por compatibilidad de forma.
 * ============================================================ */



/** Equivalente de `usePathname()`: la ruta actual, sin query ni hash. */
export function usePathname(): string {
  return useLocation().pathname;
}

/**
 * Equivalente reducido de `useRouter()`.
 *
 * El objeto se memoiza porque `PageTransitions` lo lleva en las
 * dependencias de su `useEffect` (`[router, pathname]`): si cambiara de
 * identidad en cada render, el listener de clics se desmontaría y se
 * volvería a montar sin parar. `navigate` de React Router ya es estable,
 * así que el `useMemo` basta.
 */
export function useRouter() {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
      back: () => navigate(-1),
      forward: () => navigate(1),
      /* En Next fuerzan una recarga de datos del servidor; aquí no hay
         servidor que consultar, así que no hacen nada. */
      refresh: () => {},
      prefetch: () => {},
    }),
    [navigate],
  );
}

/* ============================================================
   shims/page-meta.ts
   ============================================================ */

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



/** Título por defecto y plantilla, calcados de `app/layout.tsx`. */
const SITE = 'Bahía Mar';
const DEFAULT_TITLE = `${SITE} — Boutique Villas on the Samaná Peninsula, Dominican Republic`;

/** Origen público del sitio: canonical, og:url, hreflang y sitemap salen de aquí. */
export const SITE_ORIGIN = 'https://bahiamarterrenas.com';

/**
 * Imagen para compartir. Vibe no guarda binarios en `public/`: la subida por el
 * chat de su IA queda en la CDN del proyecto (vibe.filesafe.space). Es la misma
 * URL que lleva `index.html`; si cambia, cambia en los dos sitios.
 */
const OG_IMAGE = 'https://vibe.filesafe.space/1786543022118088456/attachments/e2426776-fbb7-44a5-ac05-75044e735238.jpg';

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

    setTag('meta', 'property', 'og:image', 'content', OG_IMAGE);
    setTag('meta', 'name', 'twitter:image', 'content', OG_IMAGE);
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
