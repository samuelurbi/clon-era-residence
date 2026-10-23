import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { VillasListing } from '@/components/villas/VillasListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = pageMetadata('villas', 'en', '/villas');

export default function VillasPage() {
  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.villas]} />
      <VillasListing />
      <SeaViewsCta image={CTA_IMAGES.villas} />
      <BookACall />
    </>
  );
}
