/* Port de `app/legal/page.tsx`: políticas legales, en los dos idiomas. */

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { LegalMain } from '@/components/pages/LegalMain';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { PAGE_META } from '@/data/meta';
import { useLang } from '@/lib/use-lang';

export function LegalPage() {
  usePageMeta(PAGE_META.legal[useLang()]);

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.legal]} />
      <LegalMain />
      <BookACall />
    </>
  );
}
