/* ============================================================
 *  PAGES — 6 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { AmenitiesIntro, ApartmentsPreview, Arch, Architecture, Concept, Developer, Hero, Location, Pillars, PillarsMedia, SpaceToLive } from '@/components-home';
import { Breadcrumbs, ScrollRail } from '@/components-layout';
import { Amenities, ApartmentArch, ApartmentDetail, ApartmentsListing, BookACall, ComingSoonMain, ContactMain, LightboxModal, RelatedApartments, SeaViewsCta } from '@/components-pages';
import { CTA_IMAGES, apartmentCards, apartmentExtras, apartments } from '@/data';
import { usePageMeta } from '@/shims';
import { useParams } from 'react-router-dom';

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
  usePageMeta({ title: 'Page not found' });

  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Not found' }]} />
      <section
        style={{
          background: 'var(--_colors---other--bg)',
          color: 'var(--_colors---base-1000--primary)',
          padding: 'var(--_units---u-160) var(--_special-units---offset-l)',
          minHeight: '60svh',
        }}
      >
        <h1 style={{ fontFamily: 'var(--_fonts---font-display)' }}>Page not found</h1>
        <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
          The page you were looking for is not here.{' '}
          <a href="/apartments">Browse the apartments</a> or{' '}
          <a href="/">go back to the homepage</a>.
        </p>
      </section>
      <BookACall />
    </>
  );
}

/* ============================================================
   pages/ApartmentPage.tsx
   ============================================================ */

/* ============================================================
 *  Port de `app/apartments/[code]/page.tsx`.
 *
 *  Dos cambios respecto al original de Next, ambos del mismo motivo —
 *  aquí no hay servidor:
 *
 *    - `generateStaticParams()` desaparece. En Next las 25 fichas se
 *      prerrenderizaban (SSG); en Vibe son UNA ruta dinámica que se
 *      resuelve en el cliente. El contenido es idéntico, lo que se
 *      pierde es el HTML servido ya hecho.
 *    - `notFound()` (que lanzaba y Next capturaba) pasa a ser un render
 *      normal de la página 404.
 *
 *  El resto —orden de secciones, cálculo de las relacionadas— es
 *  literal, comentarios incluidos.
 * ============================================================ */
















/** Cuántas viviendas se sugieren al pie de la ficha, como en el original. */
const RELATED_COUNT = 6;

export function ApartmentPage() {
  const { code = '' } = useParams<{ code: string }>();

  const apartment = apartments.find((a) => a.slug === code);
  const extras = apartmentExtras[code];

  /*
   * El hook va SIEMPRE, antes de cualquier return: si solo se llamara
   * cuando la ficha existe, React vería un número distinto de hooks
   * entre renders al navegar de una ficha válida a una inexistente.
   */
  usePageMeta({
    title: apartment?.name,
    description: apartment ? apartment.seo.description || apartment.description : undefined,
  });

  if (!apartment || !extras) return <NotFoundPage />;

  /*
   * Relacionadas: las siguientes por orden de catálogo, dando la vuelta al
   * llegar al final, de modo que ninguna ficha se sugiera a sí misma y
   * todas tengan las mismas seis.
   */
  const index = apartmentCards.findIndex((c) => c.code === code);
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    return apartmentCards[(index + 1 + i) % apartmentCards.length];
  }).filter(Boolean);

  return (
    <>
      <Breadcrumbs
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Select an Apartment', href: '/apartments' },
          { label: apartment.code },
        ]}
      />
      <ApartmentDetail apartment={apartment} extras={extras} />
      <Amenities />
      <ApartmentArch />
      <RelatedApartments cards={related} />
      <SeaViewsCta image={CTA_IMAGES.apartment} />
      <BookACall />
      <LightboxModal />
    </>
  );
}

/* ============================================================
   pages/ApartmentsPage.tsx
   ============================================================ */

/* Port de `app/apartments/page.tsx`. */







export function ApartmentsPage() {
  usePageMeta({
    title: 'Apartments',
    description:
      'Browse the available residences at ERA Residence: ground floor homes, ' +
      'penthouses and duplexes on the New Golden Mile, Estepona.',
  });

  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Select an Apartment' }]} />
      <ApartmentsListing />
      <SeaViewsCta image={CTA_IMAGES.apartments} />
      <BookACall />
    </>
  );
}

/* ============================================================
   pages/ComingSoonPage.tsx
   ============================================================ */

/* Port de `app/coming-soon/page.tsx`.
 *
 * Es la única página del sitio sin el CTA de vistas ni el pie «Book a
 * call»: en el original lleva su propio formulario dentro y nada más. */



export function ComingSoonPage() {
  usePageMeta({
    title: 'Coming soon',
    description: 'The next selection of ERA Residence apartments will be released shortly.',
  });

  return <ComingSoonMain />;
}

/* ============================================================
   pages/ContactPage.tsx
   ============================================================ */

/* Port de `app/contact/page.tsx`. */







export function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description:
      'Get in touch with the ERA Residence sales office in Estepona for availability, ' +
      'floor plans and private viewings.',
  });

  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
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
  /* La home usa el título por defecto: no pasa `title`. */
  usePageMeta({});

  return (
    <>
      <ScrollRail />
      <Hero />
      <Arch />
      <Pillars />
      <PillarsMedia />
      <Concept />
      <Location />
      <ApartmentsPreview />
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
