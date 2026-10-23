/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Título y descripción de cada página, en los dos idiomas.
 *
 * Vive fuera de `app/` porque lo leen dos sitios: las rutas de Next
 * (`export const metadata`) y las páginas del gemelo de Vibe
 * (`usePageMeta`). Las fichas de villa no están aquí: su SEO va con cada
 * villa en data/villas.ts.
 */

import type { Lang } from '@/lib/i18n';

export interface PageMeta {
  /** Sin la coletilla « — Bahía Mar», que añade la plantilla del layout. */
  title: string;
  description: string;
}

type PageKey = 'home' | 'villas' | 'contact' | 'comingSoon' | 'legal';

export const PAGE_META: Record<PageKey, Record<Lang, PageMeta>> = {
  /* La home lleva el título completo, sin plantilla (ver app/layout.tsx). */
  home: {
    en: {
      title: 'Bahía Mar — Boutique Villas on the Samaná Peninsula, Dominican Republic',
      description:
        'Luxury villas in Las Terrenas, Samaná (Dominican Republic): private pools, ' +
        'bay views and eco-friendly design between beach and mountain. Discover Bahía Mar.',
    },
    es: {
      title: 'Bahía Mar — Villas boutique en la península de Samaná, República Dominicana',
      description:
        'Villas de lujo en Las Terrenas, Samaná (República Dominicana): piscina privada, ' +
        'vistas a la bahía y diseño sostenible entre playa y montaña. Descubra Bahía Mar.',
    },
  },
  villas: {
    en: {
      title: 'Villas in Las Terrenas, Samaná',
      description:
        'Five villa typologies at Bahía Mar, Las Terrenas, Samaná: Villa Horizonte, ' +
        'Esencia, Armonía, Ámbar and Remanso — single-level and two-level villas ' +
        'with private pool, jacuzzi, solarium and views over Samaná Bay.',
    },
    es: {
      title: 'Villas en Las Terrenas, Samaná',
      description:
        'Cinco tipologías de villa en Bahía Mar, Las Terrenas, Samaná: Villa Horizonte, ' +
        'Esencia, Armonía, Ámbar y Remanso — villas de una y dos plantas con piscina ' +
        'privada, jacuzzi, solárium y vistas a la bahía de Samaná.',
    },
  },
  contact: {
    en: {
      title: 'Contact',
      description:
        'Get in touch with the Bahía Mar team for villa availability, floor plans ' +
        'and a private presentation of the project in Las Terrenas, Samaná.',
    },
    es: {
      title: 'Contacto',
      description:
        'Póngase en contacto con el equipo de Bahía Mar para conocer la disponibilidad ' +
        'de villas, los planos y una presentación privada del proyecto en Las Terrenas, Samaná.',
    },
  },
  comingSoon: {
    en: {
      title: 'Coming soon',
      description:
        'Villa availability at Bahía Mar, Las Terrenas, Samaná, is confirmed ' +
        'directly by our team. Contact us to find out which villas are currently available.',
    },
    es: {
      title: 'Próximamente',
      description:
        'La disponibilidad de villas en Bahía Mar, Las Terrenas, Samaná, la confirma ' +
        'directamente nuestro equipo. Contáctenos para saber qué villas están disponibles.',
    },
  },
  legal: {
    en: {
      title: 'Legal policies',
      description:
        'Legal notice, privacy policy, cookie policy, terms of use and project information ' +
        'for Bahía Mar Boutique Residences, Las Terrenas (Samaná). Landmass Capital.',
    },
    es: {
      title: 'Políticas legales',
      description:
        'Aviso legal, política de privacidad, política de cookies, términos de uso e información ' +
        'del proyecto de Bahía Mar Boutique Residences, Las Terrenas (Samaná). Landmass Capital.',
    },
  },
};
