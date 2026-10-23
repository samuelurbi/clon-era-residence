/* Port de `app/contact/page.tsx`. */

import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { ContactMain } from '@/components/pages/ContactMain';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { PAGE_META } from '@/data/meta';
import { useLang } from '@/lib/use-lang';
import { simplePageLd } from '@/pages/seo';

export function ContactPage() {
  const lang = useLang();
  const meta = PAGE_META.contact[lang];
  usePageMeta({ ...meta, jsonLd: simplePageLd(lang, 'ContactPage', '/contact', meta.title, meta.description) });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.contact]} />
      <ContactMain />
      <SeaViewsCta image={CTA_IMAGES.contact} />
      <BookACall />
    </>
  );
}
