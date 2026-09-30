import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';
import { ComingSoonMain } from '@/components/pages/ComingSoonMain';

export const metadata: Metadata = pageMetadata('comingSoon', 'en', '/coming-soon');

/**
 * Página de espera. Es la única del sitio sin el CTA de vistas ni el pie
 * «Book a call»: en el original lleva su propio formulario dentro y nada más.
 */
export default function ComingSoonPage() {
  return <ComingSoonMain />;
}
