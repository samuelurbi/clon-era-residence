/* Port de `app/apartments/page.tsx`. */

import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ApartmentsListing } from '@/components/apartments/ApartmentsListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';

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
