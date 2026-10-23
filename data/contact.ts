/**
 * Datos de contacto oficiales de Bahía Mar (confirmados por el cliente,
 * 2026-09-30). Sustituyen a los placeholders del brief: el +1 (809) 000-0000,
 * info@bahiamar.example y «Las Terrenas, Samaná (address TBC)».
 *
 * Una sola fuente: el pie, la página de contacto y las políticas legales
 * leen de aquí, así que un cambio de número o de oficina se hace una vez.
 */

import type { Lang } from '@/lib/i18n';

export const PHONE = '+1 (829) 599-7785';
export const PHONE_HREF = 'tel:+18295997785';

export const EMAIL = 'hola@bahiamarterrenas.com';
export const EMAIL_HREF = `mailto:${EMAIL}`;

/** Dominio público del sitio. */
export const SITE_DOMAIN = 'bahiamarterrenas.com';

/**
 * Oficina comercial. Es la de Landmass Capital en Punta Cana, no una
 * dirección en Las Terrenas: la promoción está en Samaná, pero la venta se
 * lleva desde esta oficina.
 *
 * Se escribe por TRAMOS que no se pueden partir por dentro (espacio duro
 * entre sus palabras). En el pie y en contacto va en una columna estrecha
 * y, con espacios normales, salían líneas como «- BLVD. 1RO. DE» o
 * «CANA 23000 (DOMINICAN». Así el salto solo cae entre tramos, y los
 * separadores (· y -) quedan al final de la línea, nunca al principio.
 */
const OFFICE_PARTS: Record<Lang, string[][]> = {
  // [tramo, separador que lo sigue]
  en: [
    ['Landmass Capital', ' ·'],
    ['Edificio Cedro', ' ·'],
    ['Punta Cana Village', ' -'],
    ['Blvd. 1ro.', ''],
    ['de Noviembre,', ''],
    ['Offices 2008 · 2009', ' ·'],
    ['Punta Cana 23000', ''],
    ['(Dominican Republic)', ''],
  ],
  es: [
    ['Landmass Capital', ' ·'],
    ['Edificio Cedro', ' ·'],
    ['Punta Cana Village', ' -'],
    ['Blvd. 1ro.', ''],
    ['de Noviembre,', ''],
    ['Oficinas 2008 · 2009', ' ·'],
    ['Punta Cana 23000', ''],
    ['(República Dominicana)', ''],
  ],
};

const NBSP = '\u00A0'; // espacio duro: no se parte

export function officeAddress(lang: Lang): string {
  return OFFICE_PARTS[lang]
    .map(([part, sep]) => (part + sep).replace(/ /g, NBSP))
    .join(' ');
}

export const OFFICE_MAPS_URL =
  'https://maps.google.com/?q=Edificio+Cedro,+Punta+Cana+Village,+Blvd.+1ro.+de+Noviembre,+Punta+Cana';
