/* Port de `app/coming-soon/page.tsx`.
 *
 * Es la única página del sitio sin el CTA de vistas ni el pie «Book a
 * call»: en el original lleva su propio formulario dentro y nada más. */

import { ComingSoonMain } from '@/components/pages/ComingSoonMain';
import { usePageMeta } from '@/shims/page-meta';
import { PAGE_META } from '@/data/meta';
import { useLang } from '@/lib/use-lang';

export function ComingSoonPage() {
  usePageMeta(PAGE_META.comingSoon[useLang()]);

  return <ComingSoonMain />;
}
