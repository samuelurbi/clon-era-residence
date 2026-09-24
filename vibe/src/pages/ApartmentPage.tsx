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

import { useParams } from 'react-router-dom';

import { CTA_IMAGES } from '@/data/cta-images';
import { apartments } from '@/data/apartments';
import { apartmentExtras } from '@/data/apartment-extras';
import { apartmentCards } from '@/data/apartment-cards';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ApartmentDetail } from '@/components/apartments/ApartmentDetail';
import { ApartmentArch } from '@/components/apartments/ApartmentArch';
import { RelatedApartments } from '@/components/apartments/RelatedApartments';
import { LightboxModal } from '@/components/apartments/LightboxModal';
import { Amenities } from '@/components/sections/Amenities';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { NotFoundPage } from './NotFoundPage';

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
