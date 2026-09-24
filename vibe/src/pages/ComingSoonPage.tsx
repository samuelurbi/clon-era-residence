/* Port de `app/coming-soon/page.tsx`.
 *
 * Es la única página del sitio sin el CTA de vistas ni el pie «Book a
 * call»: en el original lleva su propio formulario dentro y nada más. */

import { ComingSoonMain } from '@/components/pages/ComingSoonMain';
import { usePageMeta } from '@/shims/page-meta';

export function ComingSoonPage() {
  usePageMeta({
    title: 'Coming soon',
    description: 'The next selection of ERA Residence apartments will be released shortly.',
  });

  return <ComingSoonMain />;
}
