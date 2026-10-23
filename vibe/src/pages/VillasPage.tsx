/* Port de `app/villas/page.tsx`. */

import { CTA_IMAGES } from '@/data/cta-images';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { VillasListing } from '@/components/villas/VillasListing';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { PAGE_META } from '@/data/meta';
import { useLang } from '@/lib/use-lang';
import { villas, localizeVilla } from '@/data/villas';
import { villasLd } from '@/pages/seo';

export function VillasPage() {
  const lang = useLang();
  const meta = PAGE_META.villas[lang];
  usePageMeta({
    ...meta,
    jsonLd: villasLd(lang, meta.title, meta.description, villas.map((v) => ({ slug: v.slug, name: localizeVilla(v, lang).name }))),
  });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.villas]} />
      <VillasListing />
      <SeaViewsCta image={CTA_IMAGES.villas} />
      <BookACall />
    </>
  );
}
