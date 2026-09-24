/* Port de `app/contact/page.tsx`. */

import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { ContactMain } from '@/components/pages/ContactMain';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';

export function ContactPage() {
  usePageMeta({
    title: 'Contact',
    description:
      'Get in touch with the ERA Residence sales office in Estepona for availability, ' +
      'floor plans and private viewings.',
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
