import type { Metadata } from 'next';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ApartmentsListing } from '@/components/apartments/ApartmentsListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = {
  title: 'Apartments',
  description:
    'Browse the available residences at ERA Residence: ground floor homes, ' +
    'penthouses and duplexes on the New Golden Mile, Estepona.',
};

export default function ApartmentsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Select an Apartment' }]} />
      <ApartmentsListing />
      <SeaViewsCta image={CTA_IMAGES.apartments} />
      <BookACall />
    </>
  );
}
