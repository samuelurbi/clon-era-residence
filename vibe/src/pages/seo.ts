/* ============================================================
 *  Datos estructurados (schema.org JSON-LD) de cada página.
 *
 *  Solo lo que consta en los datos del cliente: no hay precios, ni
 *  superficie, ni coordenadas, así que no se declaran (ver el comentario
 *  de data/villas.ts). La dirección de la ORGANIZACIÓN es la oficina
 *  comercial de Punta Cana; la de las villas, la zona del proyecto.
 *
 *  Los usa `usePageMeta` (shims/page-meta.ts), que los escribe en un
 *  <script type="application/ld+json"> al montar cada ruta.
 * ============================================================ */

import { siteUrl, SITE_ORIGIN } from '@/shims/page-meta';
import { EMAIL, PHONE } from '@/data/contact';
import type { Villa } from '@/data/villas';
import type { Lang } from '@/lib/i18n';

const PROJECT_NAME = 'Bahía Mar Boutique Residences';

/** El icono de la web (el `apple-touch-icon` de index.html), ya con su URL absoluta. */
function logoUrl(): string | undefined {
  return document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]')?.href || undefined;
}

const area = {
  '@type': 'PostalAddress',
  addressLocality: 'Las Terrenas',
  addressRegion: 'Samaná',
  addressCountry: 'DO',
};

function organization() {
  const logo = logoUrl();
  return {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: 'Bahía Mar',
    url: `${SITE_ORIGIN}/`,
    ...(logo ? { logo } : {}),
    email: EMAIL,
    telephone: PHONE,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Edificio Cedro, Punta Cana Village, Blvd. 1ro. de Noviembre, Offices 2008-2009',
      addressLocality: 'Punta Cana',
      postalCode: '23000',
      addressCountry: 'DO',
    },
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: `${SITE_ORIGIN}/`,
    name: 'Bahía Mar',
    inLanguage: ['en', 'es'],
    publisher: { '@id': `${SITE_ORIGIN}/#organization` },
  };
}

function project(lang: Lang, description?: string) {
  return {
    '@type': 'Residence',
    '@id': `${SITE_ORIGIN}/#project`,
    name: PROJECT_NAME,
    url: siteUrl('/', lang),
    ...(description ? { description } : {}),
    address: area,
  };
}

/** Migas de pan: `trail` va de la home a la página actual. */
function breadcrumbs(lang: Lang, trail: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: siteUrl(t.path, lang),
    })),
  };
}

const HOME = { en: 'Home', es: 'Inicio' };
const VILLAS = { en: 'Villas', es: 'Villas' };

/** `@graph` con contexto, listo para `usePageMeta({ jsonLd })`. */
function graph(...nodes: object[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}

export function homeLd(lang: Lang, description: string) {
  return graph(organization(), website(), project(lang, description));
}

export function villasLd(lang: Lang, name: string, description: string, list: { slug: string; name: string }[]) {
  return graph(
    {
      '@type': 'CollectionPage',
      '@id': `${siteUrl('/villas', lang)}#page`,
      url: siteUrl('/villas', lang),
      name,
      description,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
    },
    {
      '@type': 'ItemList',
      itemListElement: list.map((v, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: v.name,
        url: siteUrl(`/villas/${v.slug}`, lang),
      })),
    },
    breadcrumbs(lang, [
      { name: HOME[lang], path: '/' },
      { name: VILLAS[lang], path: '/villas' },
    ]),
  );
}

/** `villa` ya viene localizada (`localizeVilla`). */
export function villaLd(lang: Lang, villa: Villa) {
  const path = `/villas/${villa.slug}`;
  return graph(
    {
      '@type': 'SingleFamilyResidence',
      '@id': `${siteUrl(path, lang)}#villa`,
      url: siteUrl(path, lang),
      name: villa.name,
      description: villa.seo.description,
      inLanguage: lang,
      image: villa.heroImage,
      address: area,
      numberOfBedrooms: villa.bedrooms,
      numberOfFullBathrooms: villa.bathrooms,
      numberOfPartialBathrooms: villa.halfBath ? 1 : 0,
      numberOfBathroomsTotal: villa.bathrooms + (villa.halfBath ? 1 : 0),
      amenityFeature: villa.features.map((name) => ({ '@type': 'LocationFeatureSpecification', name, value: true })),
      containedInPlace: { '@type': 'Residence', name: PROJECT_NAME, address: area },
    },
    breadcrumbs(lang, [
      { name: HOME[lang], path: '/' },
      { name: VILLAS[lang], path: '/villas' },
      { name: villa.name, path },
    ]),
  );
}

/** Contacto y políticas: página con su ruta de migas. */
export function simplePageLd(lang: Lang, kind: 'ContactPage' | 'WebPage', path: string, name: string, description: string) {
  return graph(
    {
      '@type': kind,
      '@id': `${siteUrl(path, lang)}#page`,
      url: siteUrl(path, lang),
      name,
      description,
      inLanguage: lang,
      isPartOf: { '@id': `${SITE_ORIGIN}/#website` },
      ...(kind === 'ContactPage' ? { about: { '@id': `${SITE_ORIGIN}/#organization` } } : {}),
    },
    ...(kind === 'ContactPage' ? [organization()] : []),
    breadcrumbs(lang, [
      { name: HOME[lang], path: '/' },
      { name, path },
    ]),
  );
}
