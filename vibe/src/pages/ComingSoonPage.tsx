/* Port de `app/coming-soon/page.tsx`.
 *
 * Es la única página del sitio sin el CTA de vistas ni el pie «Book a
 * call»: en el original lleva su propio formulario dentro y nada más. */

import { ComingSoonMain } from '@/components/pages/ComingSoonMain';
import { usePageMeta } from '@/shims/page-meta';

export function ComingSoonPage() {
  usePageMeta({
    title: 'Coming soon',
    description:
      'Villa availability at Bahía Mar, Las Terrenas, Samaná, is confirmed ' +
      'directly by our team. Contact us to find out which villas are currently available.',
  });

  return <ComingSoonMain />;
}
