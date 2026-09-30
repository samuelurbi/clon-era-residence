/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Migas de pan compartidas. Van aparte de Breadcrumbs.tsx porque ese es un
 * componente de cliente: exportar un objeto desde un módulo `'use client'`
 * a una página de servidor lo convierte en una referencia de cliente, y en
 * el servidor llegaba `undefined` (500 en todas las páginas con migas).
 */

import type { Lang } from '@/lib/i18n';

export interface Crumb {
  /** Un texto fijo (el nombre de una villa) o uno por idioma. */
  label: string | Record<Lang, string>;
  /** Sin href, la miga es la página actual y no enlaza a ningún sitio. */
  href?: string;
}

/** Las migas que se repiten entre páginas. */
export const CRUMB = {
  home: { label: { en: 'Home', es: 'Inicio' }, href: '/' },
  villas: { label: { en: 'Select a Villa', es: 'Elija su villa' } },
  contact: { label: { en: 'Contact', es: 'Contacto' } },
  legal: { label: { en: 'Legal policies', es: 'Políticas legales' } },
} satisfies Record<string, Crumb>;
