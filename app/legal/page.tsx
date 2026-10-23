import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { LegalMain } from '@/components/pages/LegalMain';
import { BookACall } from '@/components/sections/BookACall';

export const metadata: Metadata = pageMetadata('legal', 'en', '/legal');

/**
 * Políticas legales (aviso legal, privacidad, cookies, términos e
 * información del proyecto). Misma estética que el resto del sitio pero sin
 * la coreografía: es una página para leer, no para recorrer.
 */
export default function LegalPage() {
  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, CRUMB.legal]} />
      <LegalMain />
      <BookACall />
    </>
  );
}
