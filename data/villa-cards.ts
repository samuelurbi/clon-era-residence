/**
 * Lo que muestra la tarjeta de villa en el listado.
 *
 * A DIFERENCIA del `apartment-cards.ts` que sustituye, esto NO es un
 * volcado: se deriva de `data/villas.ts`, que es la única fuente. En el
 * original los dos ficheros se contradecían (la terraza de la tarjeta no
 * coincidía con la de la ficha) porque ambos venían de un CMS editado a
 * mano; aquí eso no puede pasar.
 *
 * LOS HUECOS DE LA TARJETA NO SON LOS MISMOS
 *
 * El marcado de Webflow tiene huecos pensados para un apartamento:
 * bloque, planta, superficie y terraza. De esos, a una villa exenta solo
 * le aplican dos. Como NO hay superficies construidas en el material del
 * cliente (ver la cabecera de villas.ts), los huecos se han reasignado a
 * datos que sí existen — tipología, niveles y baños — en vez de dejar
 * campos vacíos o inventar cifras.
 */

import { villas, srcset } from '@/data/villas';

export interface VillaCardData {
  slug: string;
  href: string;
  name: string;
  /** "Type A" — la letra que usa el estudio de arquitectura. */
  typeLabel: string;
  type: string;
  /** "Two levels" | "Single level". */
  category: string;
  levels: string;
  bedrooms: string;
  bathrooms: string;
  /** «77 units» o null cuando el master plan no lo dice (tipos D y E). */
  unitsLabel: string | null;
  /** Provisional, con «(TBC)» a la vista. Ver villas.ts. */
  completion: string;
  /** Lo que va tras el «+» al pie de la tarjeta. */
  extra: string;
  image: string;
  imageSrcset: string;
  /** Valores por los que filtra y ordena el listado. */
  filterType: string;
  filterBed: string;
  /** El orden del catálogo: A, B, C, D, E. */
  sortRelevant: string;
  /** Sin m², se ordena por número de habitaciones. */
  sortSize: string;
}

/** "Two levels" -> "two-levels", que es lo que leen los data-filter-*. */
function slugifyType(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export const villaCards: VillaCardData[] = villas.map((v, i) => ({
  slug: v.slug,
  href: `/villas/${v.slug}`,
  name: v.name,
  typeLabel: `Type ${v.type}`,
  type: v.type,
  category: v.category,
  levels: String(v.levels),
  bedrooms: String(v.bedrooms),
  bathrooms: String(v.bathrooms),
  unitsLabel: v.units === null ? null : String(v.units) + ' units',
  completion: v.completion,
  extra: 'Private pool',
  image: v.heroImage,
  imageSrcset: srcset(v.heroImage),
  filterType: slugifyType(v.category),
  filterBed: String(v.bedrooms),
  sortRelevant: String(i + 1),
  sortSize: String(v.bedrooms),
}));

/** Opciones del desplegable «Type» del listado, sin repetir. */
export const typeFilters = [...new Set(villas.map((v) => v.category))].map((c) => ({
  label: c,
  value: slugifyType(c),
}));

/** Opciones del desplegable «Bedrooms», de menos a más. */
export const bedFilters = [...new Set(villas.map((v) => v.bedrooms))]
  .sort((a, b) => a - b)
  .map(String);
