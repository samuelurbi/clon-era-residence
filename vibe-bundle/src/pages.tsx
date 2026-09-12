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

import { AmenitiesIntro, Arch, Architecture, Concept, Developer, Hero, Location, Pillars, PillarsMedia, SpaceToLive, VillasPreview } from '@/components-home';
import { Breadcrumbs, ScrollRail } from '@/components-layout';
import { Amenities, BookACall, ComingSoonMain, ContactMain, SeaViewsCta } from '@/components-pages';
import { LightboxModal } from '@/components/villas/LightboxModal';
import { RelatedVillas } from '@/components/villas/RelatedVillas';
import { VillaArch } from '@/components/villas/VillaArch';
import { VillaDetail } from '@/components/villas/VillaDetail';
import { VillasListing } from '@/components/villas/VillasListing';
import { CTA_IMAGES, villaBySlug, villaCards, villas } from '@/data';
import { usePageMeta } from '@/shims';
import { useParams } from 'react-router-dom';

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
    description:
      'Villa availability at Bahía Mar, Las Terrenas, Samaná, is confirmed ' +
      'directly by our team. Contact us to find out which villas are currently available.',
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
      'Get in touch with the Bahía Mar team in Las Terrenas, Samaná, for villa ' +
      'availability, floor plans and a private presentation of the project.',
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
          <a href="/villas">Browse the villas</a> or{' '}
          <a href="/">go back to the homepage</a>.
        </p>
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
  usePageMeta({
    title: villa?.seo.title,
    description: villa?.seo.description,
  });

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
          { label: 'Home', href: '/' },
          { label: 'Select a Villa', href: '/villas' },
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
  usePageMeta({
    title: 'Villas',
    description:
      'Five villa typologies at Bahía Mar, Las Terrenas, Samaná: Villa Cosón, ' +
      'Helecho, Remanso, Ámbar and Carolina — single-level and two-level villas ' +
      'with private pool, jacuzzi, solarium and views over Samaná Bay.',
  });

  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Select a Villa' }]} />
      <VillasListing />
      <SeaViewsCta image={CTA_IMAGES.villas} />
      <BookACall />
    </>
  );
}
