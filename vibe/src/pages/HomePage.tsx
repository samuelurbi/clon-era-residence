/* Port de `app/page.tsx`. El orden de las secciones es el del sitio
   original; el cromo compartido vive en App.tsx. */

import { ScrollRail } from '@/components/layout/ScrollRail';
import { Hero } from '@/components/home/Hero';
import { Arch } from '@/components/home/Arch';
import { Pillars } from '@/components/home/Pillars';
import { PillarsMedia } from '@/components/home/PillarsMedia';
import { Concept } from '@/components/home/Concept';
import { Location } from '@/components/home/Location';
import { ApartmentsPreview } from '@/components/home/ApartmentsPreview';
import { AmenitiesIntro } from '@/components/home/AmenitiesIntro';
import { Amenities } from '@/components/sections/Amenities';
import { SpaceToLive } from '@/components/home/SpaceToLive';
import { Architecture } from '@/components/home/Architecture';
import { Developer } from '@/components/home/Developer';
import { SeaViewsCta } from '@/components/sections/SeaViewsCta';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';

export function HomePage() {
  /* La home usa el título por defecto: no pasa `title`. */
  usePageMeta({});

  return (
    <>
      <ScrollRail />
      <Hero />
      <Arch />
      <Pillars />
      <PillarsMedia />
      <Concept />
      <Location />
      <ApartmentsPreview />
      <AmenitiesIntro />
      <Amenities />
      <SpaceToLive />
      <Architecture />
      <Developer />
      <SeaViewsCta />
      <BookACall showToTop />
    </>
  );
}
