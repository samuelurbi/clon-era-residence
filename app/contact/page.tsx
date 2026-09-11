import type { Metadata } from 'next';
import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactMain } from '@/components/pages/ContactMain';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Bahía Mar team in Las Terrenas, Samaná, for villa ' +
    'availability, floor plans and a private presentation of the project.',
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
      <ContactMain />
      <SeaViewsCta image={CTA_IMAGES.contact} />
      <BookACall />
    </>
  );
}
