import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';

export { default } from '@/app/villas/page';

export const metadata: Metadata = pageMetadata('villas', 'es', '/villas');
