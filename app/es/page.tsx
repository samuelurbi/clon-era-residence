/**
 * Rutas en español: reutilizan la página inglesa tal cual. Los componentes
 * leen el idioma de la URL (lib/use-lang.ts), así que aquí solo cambia la
 * metadata. Ver lib/i18n.ts.
 */
import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';

export { default } from '@/app/page';

export const metadata: Metadata = pageMetadata('home', 'es', '/');
