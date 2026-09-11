import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CTA_IMAGES } from '@/data/cta-images';
import { villas, villaBySlug } from '@/data/villas';
import { villaCards } from '@/data/villa-cards';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { VillaDetail } from '@/components/villas/VillaDetail';
import { VillaArch } from '@/components/villas/VillaArch';
import { RelatedVillas } from '@/components/villas/RelatedVillas';
import { LightboxModal } from '@/components/villas/LightboxModal';
import { Amenities } from '@/components/sections/Amenities';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';

/**
 * Cuántas villas se sugieren al pie.
 *
 * En ERA eran seis de veinticinco. Aquí sólo hay cinco en total, así que
 * se muestran LAS CUATRO RESTANTES: cualquier número menor dejaría fuera
 * parte del catálogo sin motivo.
 */
const RELATED_COUNT = villas.length - 1;

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return villas.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const villa = villaBySlug(slug);
  if (!villa) return {};

  return {
    title: villa.seo.title,
    description: villa.seo.description,
  };
}

/**
 * Ficha de villa.
 *
 * El orden de secciones es el del original: ficha, amenidades, el bloque
 * de arquitectura, las villas relacionadas, el CTA de vistas y el pie.
 */
export default async function VillaPage({ params }: Params) {
  const { slug } = await params;

  const villa = villaBySlug(slug);
  if (!villa) notFound();

  /*
   * Relacionadas: las siguientes por orden de catálogo, dando la vuelta al
   * llegar al final, de modo que ninguna ficha se sugiera a sí misma y
   * todas enseñen el resto del catálogo completo.
   */
  const index = villaCards.findIndex((c) => c.slug === slug);
  const related = Array.from({ length: RELATED_COUNT }, (_, i) => {
    return villaCards[(index + 1 + i) % villaCards.length];
  }).filter(Boolean);

  return (
    <>
      <Breadcrumbs
        trail={[
          { label: 'Home', href: '/' },
          { label: 'Select a Villa', href: '/villas' },
          { label: villa.name },
        ]}
      />
      <VillaDetail villa={villa} />
      <Amenities />
      <VillaArch />
      <RelatedVillas cards={related} />
      <SeaViewsCta image={CTA_IMAGES.villa} />
      <BookACall />
      <LightboxModal />
    </>
  );
}
