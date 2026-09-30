import type { Metadata } from 'next';
import { PAGE_META } from '@/data/meta';
import { localizeVilla, type Villa } from '@/data/villas';
import { localize, type Lang } from '@/lib/i18n';

/**
 * Open Graph y Twitter en el idioma de la página. En Next, el `openGraph`
 * de una página SUSTITUYE al del layout (no se mezclan), así que aquí se
 * repite todo lo que el layout ponía: imagen, vídeo y nombre del sitio.
 */
function share(title: string, description: string, lang: Lang, path: string): Metadata {
  return {
    openGraph: {
      type: 'website',
      title,
      description,
      url: localize(path, lang),
      siteName: 'Bahía Mar Residences & Beach Resort',
      locale: lang === 'es' ? 'es_DO' : 'en_US',
      images: [{ url: '/images/open-graph.webp', width: 1200, height: 630 }],
      videos: [{ url: '/videos/open-graph.mp4', type: 'video/mp4', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/open-graph.webp'],
    },
  };
}

/**
 * Metadata de Next para una página, en su idioma, con los enlaces
 * `hreflang` a su gemela. Las rutas de `app/es/` reutilizan el componente
 * de la página inglesa y solo cambian esto.
 */
export function pageMetadata(key: keyof typeof PAGE_META, lang: Lang, path: string): Metadata {
  const { title, description } = PAGE_META[key][lang];
  return {
    ...share(
      /* La home inglesa conserva el título para compartir que ya tenía. */
      key === 'home' ? (lang === 'en' ? 'Bahía Mar® Boutique Villas on the Samaná, Dominican Republic' : title) : `${title} — Bahía Mar`,
      description,
      lang,
      path,
    ),
    title: key === 'home' ? { absolute: title } : title,
    description,
    alternates: {
      canonical: localize(path, lang),
      languages: { en: path, es: localize(path, 'es'), 'x-default': path },
    },
  };
}

/** Metadata de una ficha en su idioma; la ruta española la reutiliza. */
export function villaMetadata(villa: Villa, lang: Lang): Metadata {
  const { seo } = localizeVilla(villa, lang);
  const path = `/villas/${villa.slug}`;
  return {
    ...share(`${seo.title} — Bahía Mar`, seo.description, lang, path),
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: localize(path, lang),
      languages: { en: path, es: localize(path, 'es'), 'x-default': path },
    },
  };
}
