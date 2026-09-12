import type { Metadata } from 'next';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { VillasListing } from '@/components/villas/VillasListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = {
  title: 'Villas',
  description:
    'Five villa typologies at Bahía Mar, Las Terrenas, Samaná: Villa Cosón, ' +
    'Helecho, Remanso, Ámbar and Carolina — single-level and two-level villas ' +
    'with private pool, jacuzzi, solarium and views over Samaná Bay.',
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
