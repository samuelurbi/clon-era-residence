import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';

export { default } from '@/app/coming-soon/page';

export const metadata: Metadata = pageMetadata('comingSoon', 'es', '/coming-soon');
