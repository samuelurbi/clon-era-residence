import type { Metadata } from 'next';
import { ComingSoonMain } from '@/components/pages/ComingSoonMain';

export const metadata: Metadata = {
  title: 'Coming soon',
  description:
    'Villa availability at Bahía Mar, Las Terrenas, Samaná, is confirmed ' +
    'directly by our team. Contact us to find out which villas are currently available.',
};

/**
 * Página de espera. Es la única del sitio sin el CTA de vistas ni el pie
 * «Book a call»: en el original lleva su propio formulario dentro y nada más.
 */
export default function ComingSoonPage() {
  return <ComingSoonMain />;
}
