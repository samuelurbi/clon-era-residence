import type { Metadata } from 'next';
import { ComingSoonMain } from '@/components/pages/ComingSoonMain';

export const metadata: Metadata = {
  title: 'Coming soon',
  description: 'The next selection of ERA Residence apartments will be released shortly.',
};

/**
 * Página de espera. Es la única del sitio sin el CTA de vistas ni el pie
 * «Book a call»: en el original lleva su propio formulario dentro y nada más.
 */
export default function ComingSoonPage() {
  return <ComingSoonMain />;
}
