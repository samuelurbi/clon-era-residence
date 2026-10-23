/* ============================================================
 *  PAGES — 8 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { Lang, localize, useLang } from '@/animations';
import { AmenitiesIntro, Arch, Architecture, Concept, Developer, Hero, Location, Pillars, PillarsMedia, SpaceToLive, VillasPreview } from '@/components-home';
import { Breadcrumbs, ScrollRail } from '@/components-layout';
import { Amenities, BookACall, ComingSoonMain, ContactMain, LegalMain, LightboxModal, RelatedVillas, SeaViewsCta, VillaArch, VillaDetail, VillasListing } from '@/components-pages';
import { CRUMB, CTA_IMAGES, EMAIL, PAGE_META, PHONE, Villa, localizeVilla, villaBySlug, villaCards, villas } from '@/data';
import { SITE_ORIGIN, siteUrl, usePageMeta } from '@/shims';
import { useParams } from 'react-router-dom';

/* ============================================================
   pages/ComingSoonPage.tsx
   ============================================================ */

/* Port de `app/coming-soon/page.tsx`.
 *
 * Es la única página del sitio sin el CTA de vistas ni el pie «Book a
 * call»: en el original lleva su propio formulario dentro y nada más. */





export function ComingSoonPage() {
  /* Sin enlace desde el sitio y casi sin contenido: no se indexa. */
  usePageMeta({ ...PAGE_META.comingSoon[useLang()], noindex: true });

  return <ComingSoonMain />;
}

/* ============================================================
   pages/seo.ts
   ============================================================ */

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

/* ============================================================
   pages/ContactPage.tsx
   ============================================================ */

/* Port de `app/contact/page.tsx`. */











export function ContactPage() {
  const lang = useLang();
  const meta = PAGE_META.contact[lang];
  usePageMeta({ ...meta, jsonLd: simplePageLd(lang, 'ContactPage', '/contact', meta.title, meta.description) });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.contact]} />
      <ContactMain />
      <SeaViewsCta image={CTA_IMAGES.contact} />
      <BookACall />
    </>
  );
}

/* ============================================================
   pages/HomePage.tsx
   ============================================================ */

/* Port de `app/page.tsx`. El orden de las secciones es el del sitio
   original; el cromo compartido vive en App.tsx. */




















export function HomePage() {
  /* La home lleva el título completo, sin sufijo (como en Next). */
  const lang = useLang();
  const meta = PAGE_META.home[lang];
  usePageMeta({ ...meta, absolute: true, jsonLd: homeLd(lang, meta.description) });

  return (
    <>
      <ScrollRail />
      <Hero />
      <Arch />
      <Pillars />
      <PillarsMedia />
      <Concept />
      <Location />
      <VillasPreview />
      <AmenitiesIntro />
      <Amenities />
      <SpaceToLive />
      <Architecture />
      <Developer />
      <SeaViewsCta />
      <BookACall showToTop />
    </>
  );
}

/* ============================================================
   pages/LegalPage.tsx
   ============================================================ */

/* Port de `app/legal/page.tsx`: políticas legales, en los dos idiomas. */









export function LegalPage() {
  const lang = useLang();
  const meta = PAGE_META.legal[lang];
  usePageMeta({ ...meta, jsonLd: simplePageLd(lang, 'WebPage', '/legal', meta.title, meta.description) });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.legal]} />
      <LegalMain />
      <BookACall />
    </>
  );
}

/* ============================================================
   pages/NotFoundPage.tsx
   ============================================================ */

/* ============================================================
 *  404.
 *
 *  El repo no portó la 404 del original (no estaba entre las 29
 *  páginas descargadas), así que esto es NUEVO, no un port. Se queda
 *  deliberadamente mínima y escrita sobre los design tokens del sitio,
 *  no sobre clases de Webflow: cuando se decida la 404 de verdad, se
 *  sustituye entera sin arrastrar nada.
 * ============================================================ */







export function NotFoundPage() {
  const lang = useLang();
  const es = lang === 'es';
  /* El servidor responde 200 a cualquier ruta: sin `noindex` Google la tomaría por página real. */
  usePageMeta({ title: es ? 'Página no encontrada' : 'Page not found', noindex: true });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, { label: { en: 'Not found', es: 'No encontrada' } }]} />
      <section
        style={{
          background: 'var(--_colors---other--bg)',
          color: 'var(--_colors---base-1000--primary)',
          padding: 'var(--_units---u-160) var(--_special-units---offset-l)',
          minHeight: '60svh',
        }}
      >
        <h1 style={{ fontFamily: 'var(--_fonts---font-display)' }}>
          {es ? 'Página no encontrada' : 'Page not found'}
        </h1>
        {es ? (
          <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
            La página que buscaba no está aquí.{' '}
            <a href={localize('/villas', lang)}>Vea las villas</a> o{' '}
            <a href={localize('/', lang)}>vuelva al inicio</a>.
          </p>
        ) : (
          <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
            The page you were looking for is not here.{' '}
            <a href="/villas">Browse the villas</a> or{' '}
            <a href="/">go back to the homepage</a>.
          </p>
        )}
      </section>
      <BookACall />
    </>
  );
}

/* ============================================================
   pages/VillaPage.tsx
   ============================================================ */

/* ============================================================
 *  Port de `app/villas/[slug]/page.tsx`.
 *
 *  Dos cambios respecto al original de Next, ambos del mismo motivo —
 *  aquí no hay servidor:
 *
 *    - `generateStaticParams()` desaparece. En Next las cinco fichas se
 *      prerrenderizaban (SSG); en Vibe son UNA ruta dinámica que se
 *      resuelve en el cliente. El contenido es idéntico, lo que se
 *      pierde es el HTML servido ya hecho.
 *    - `notFound()` (que lanzaba y Next capturaba) pasa a ser un render
 *      normal de la página 404.
 *
 *  El resto —orden de secciones, cálculo de las relacionadas— es
 *  literal, comentarios incluidos.
 * ============================================================ */


















/**
 * Cuántas villas se sugieren al pie.
 *
 * En ERA eran seis de veinticinco. Aquí sólo hay cinco en total, así que
 * se muestran LAS CUATRO RESTANTES: cualquier número menor dejaría fuera
 * parte del catálogo sin motivo.
 */
const RELATED_COUNT = villas.length - 1;

export function VillaPage() {
  const { slug = '' } = useParams<{ slug: string }>();

  const villa = villaBySlug(slug);

  /*
   * El hook va SIEMPRE, antes de cualquier return: si solo se llamara
   * cuando la ficha existe, React vería un número distinto de hooks
   * entre renders al navegar de una ficha válida a una inexistente.
   */
  const lang = useLang();
  const localized = villa ? localizeVilla(villa, lang) : undefined;
  /*
   * Ficha inexistente: se pinta la 404 y su título/noindex deben ganar. Este
   * hook corre DESPUÉS del de NotFoundPage (el del padre va último), así
   * que repite lo mismo en vez de dejar el título por defecto.
   */
  usePageMeta(
    localized
      ? { title: localized.seo.title, description: localized.seo.description, jsonLd: villaLd(lang, localized) }
      : { title: lang === 'es' ? 'Página no encontrada' : 'Page not found', noindex: true },
  );

  if (!villa) return <NotFoundPage />;

  /*
   * Relacionadas: las siguientes por orden de catálogo, dando la vuelta al
   * llegar al final, de modo que ninguna ficha se sugiera a sí misma y
   * todas enseñen el resto del catálogo completo.
   */
  const index = villaCards.findIndex((c) => c.slug === slug);
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    return villaCards[(index + 1 + i) % villaCards.length];
  }).filter(Boolean);

  return (
    <>
      <Breadcrumbs
        trail={[
          CRUMB.home,
          { ...CRUMB.villas, href: '/villas' },
          { label: villa.name },
        ]}
      />
      <VillaDetail villa={villa} />
      <Amenities />
      <VillaArch />
      <RelatedVillas cards={related} />
      <SeaViewsCta image={CTA_IMAGES.villa} />
      <BookACall />
      <LightboxModal />
    </>
  );
}

/* ============================================================
   pages/VillasPage.tsx
   ============================================================ */

/* Port de `app/villas/page.tsx`. */












export function VillasPage() {
  const lang = useLang();
  const meta = PAGE_META.villas[lang];
  usePageMeta({
    ...meta,
    jsonLd: villasLd(lang, meta.title, meta.description, villas.map((v) => ({ slug: v.slug, name: localizeVilla(v, lang).name }))),
  });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.villas]} />
      <VillasListing />
      <SeaViewsCta image={CTA_IMAGES.villas} />
      <BookACall />
    </>
  );
}
