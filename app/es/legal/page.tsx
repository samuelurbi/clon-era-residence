import type { Metadata } from 'next';
import { pageMetadata } from '@/app/page-metadata';

export { default } from '@/app/legal/page';

export const metadata: Metadata = pageMetadata('legal', 'es', '/legal');
