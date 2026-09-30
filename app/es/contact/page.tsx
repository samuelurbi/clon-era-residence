import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';

export { default } from '@/app/contact/page';

export const metadata: Metadata = pageMetadata('contact', 'es', '/contact');
