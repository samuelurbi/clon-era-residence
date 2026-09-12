/* ============================================================
 *  Port de `app/villas/[slug]/page.tsx`.
 *
 *  Dos cambios respecto al original de Next, ambos del mismo motivo —
 *  aquí no hay servidor:
 *
 *    - `generateStaticParams()` desaparece. En Next las cinco fichas se
 *      prerrenderizaban (SSG); en Vibe son UNA ruta dinámica que se
 *      resuelve en el cliente. El contenido es idéntico, lo que se
 *      pierde es el HTML servido ya hecho.
 *    - `notFound()` (que lanzaba y Next capturaba) pasa a ser un render
 *      normal de la página 404.
 *
 *  El resto —orden de secciones, cálculo de las relacionadas— es
 *  literal, comentarios incluidos.
 * ============================================================ */

import { useParams } from 'react-router-dom';

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
import { usePageMeta } from '@/shims/page-meta';
import { NotFoundPage } from './NotFoundPage';

/**
 * Cuántas villas se sugieren al pie.
 *
 * En ERA eran seis de veinticinco. Aquí sólo hay cinco en total, así que
 * se muestran LAS CUATRO RESTANTES: cualquier número menor dejaría fuera
 * parte del catálogo sin motivo.
 */
const RELATED_COUNT = villas.length - 1;

export function VillaPage() {
  const { slug = '' } = useParams<{ slug: string }>();

  const villa = villaBySlug(slug);

  /*
   * El hook va SIEMPRE, antes de cualquier return: si solo se llamara
   * cuando la ficha existe, React vería un número distinto de hooks
   * entre renders al navegar de una ficha válida a una inexistente.
   */
  usePageMeta({
    title: villa?.seo.title,
    description: villa?.seo.description,
  });

  if (!villa) return <NotFoundPage />;

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
