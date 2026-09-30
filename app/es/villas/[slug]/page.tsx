import type { Metadata } from 'next';
import { villaBySlug } from '@/data/villas';
import { villaMetadata } from '@/app/page-metadata';

export { default, generateStaticParams } from '@/app/villas/[slug]/page';

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const villa = villaBySlug(slug);
  return villa ? villaMetadata(villa, 'es') : {};
}
