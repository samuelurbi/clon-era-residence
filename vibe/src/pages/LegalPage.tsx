/* Port de `app/legal/page.tsx`: políticas legales, en los dos idiomas. */

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { LegalMain } from '@/components/pages/LegalMain';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { PAGE_META } from '@/data/meta';
import { useLang } from '@/lib/use-lang';
import { simplePageLd } from '@/pages/seo';

export function LegalPage() {
  const lang = useLang();
  const meta = PAGE_META.legal[lang];
  usePageMeta({ ...meta, jsonLd: simplePageLd(lang, 'WebPage', '/legal', meta.title, meta.description) });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.legal]} />
      <LegalMain />
      <BookACall />
    </>
  );
}
