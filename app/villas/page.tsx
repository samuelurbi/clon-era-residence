import type { Metadata } from 'next';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { VillasListing } from '@/components/villas/VillasListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = {
  title: 'Villas',
  description:
    'Browse the available residences at ERA Residence: ground floor homes, ' +
    'penthouses and duplexes on the New Golden Mile, Estepona.',
};

export default function VillasPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Select a Villa' }]} />
      <VillasListing />
      <SeaViewsCta image={CTA_IMAGES.villas} />
      <BookACall />
    </>
  );
}
