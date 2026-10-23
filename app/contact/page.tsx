import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { ContactMain } from '@/components/pages/ContactMain';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = pageMetadata('contact', 'en', '/contact');

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.contact]} />
      <ContactMain />
      <SeaViewsCta image={CTA_IMAGES.contact} />
      <BookACall />
    </>
  );
}
