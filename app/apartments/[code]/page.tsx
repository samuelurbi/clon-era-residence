import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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

/** Cuántas viviendas se sugieren al pie de la ficha, como en el original. */
const RELATED_COUNT = 6;

type Params = { params: Promise<{ code: string }> };

export function generateStaticParams() {
  return apartments.map((a) => ({ code: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { code } = await params;
  const apartment = apartments.find((a) => a.slug === code);
  if (!apartment) return {};

  return {
    title: apartment.name,
    description: apartment.seo.description || apartment.description,
  };
}

/**
 * Ficha de apartamento.
 *
 * El orden de secciones es el del original: ficha, amenidades, el bloque de
 * arquitectura, las viviendas relacionadas, el CTA de vistas y el pie.
 */
export default async function ApartmentPage({ params }: Params) {
  const { code } = await params;

  const apartment = apartments.find((a) => a.slug === code);
  const extras = apartmentExtras[code];
  if (!apartment || !extras) notFound();

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
