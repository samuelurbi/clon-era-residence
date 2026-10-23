/* ============================================================
 *  DATA — 7 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { Lang } from '@/animations';

/* ============================================================
   data/contact.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Datos de contacto oficiales de Bahía Mar (confirmados por el cliente,
 * 2026-09-30). Sustituyen a los placeholders del brief: el +1 (809) 000-0000,
 * info@bahiamar.example y «Las Terrenas, Samaná (address TBC)».
 *
 * Una sola fuente: el pie, la página de contacto y las políticas legales
 * leen de aquí, así que un cambio de número o de oficina se hace una vez.
 */


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

/* ============================================================
   data/crumbs.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Migas de pan compartidas. Van aparte de Breadcrumbs.tsx porque ese es un
 * componente de cliente: exportar un objeto desde un módulo `'use client'`
 * a una página de servidor lo convierte en una referencia de cliente, y en
 * el servidor llegaba `undefined` (500 en todas las páginas con migas).
 */


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

/* ============================================================
   data/cta-images.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Imágenes de fondo del CTA «Perfect sea views».
 *
 * El bloque se repite en casi todas las páginas con el mismo marcado, pero
 * cada sección del sitio usa su propia foto. Se comprobó en el sitio del que
 * se portó el marcado comparando página a página: hay cuatro, no una.
 *
 * Para Bahía Mar las cuatro son renders exteriores de las villas
 * (00. BAHÍA MAR_RENDERS_AGOSTO*, carpetas 01. RENDERS EXTERIORES),
 * recortados a la MISMA proporción que tenía cada hueco en el original para
 * que el `object-fit: cover` del fondo encuadre igual:
 *
 *   home    → bahiamar-cta-1  Villa A (Cosón)  R10_2   4:5    (0,800)
 *   villas  → bahiamar-cta-2  Villa A (Cosón)  R9_1    3:4    (0,750)
 *   contact → bahiamar-cta-3  Villa B (Helecho) R8     11:10  (1,100)
 *   villa   → bahiamar-cta-4  Villa D (Ámbar)  R5      10:11  (0,909)
 *
 * Origen y destino de cada una, en bahia-mar-personalizacion/inventario/cta.json.
 * Se convirtieron con ffmpeg (WebP calidad 82, ancho completo 2350 px) más
 * las variantes -p-500/800/1080/1600/2000, todas .webp.
 *
 * OJO con el encuadre: el hueco es MUY alto en móvil (`.cta-s` pasa a
 * aspect-ratio 2/6 por debajo de 992 px y el fondo mide el 140 % del alto
 * para el parallax), así que a 390 px sólo se ve el 29,5 % central del ancho
 * de la foto; a 1440, el 71,6 %. El sujeto tiene que estar en el tercio
 * central. Por eso bahiamar-cta-4 se re-encuadró (QA ronda 1,
 * LAYOUT-IMAGES-03): antes cogía todo el ancho del render R5, con la casa
 * pegada al borde derecho, y en móvil sólo quedaban árboles y jardinera.
 * Ahora es una ventana de 2000x2200 pegada a ese borde (pared de piedra,
 * pérgola y piscina en el centro), exportada a su ancho nativo sin escalar
 * hacia arriba: el completo mide 2000 px y no hay variante -p-2000
 * (scratchpad/fix-1-cta4-convert.mjs).
 */

export interface CtaImage {
  src: string;
  srcSet: string;
  /** Texto alternativo: el fondo lleva texto encima, pero la foto no es decorativa. */
  alt: string;
}

/**
 * Ancho completo (2350 px salvo que se indique otro) + los tamaños del srcset
 * que sean más estrechos que él, todos .webp. Así el srcset sólo lista
 * ficheros que existen: una foto exportada a 2000 px no tiene -p-2000.
 */
function responsive(name: string, alt: string, fullWidth = 2350): CtaImage {
  const variants = [500, 800, 1080, 1600, 2000].filter((w) => w < fullWidth);
  return {
    src: `https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/${name}.webp`,
    srcSet: [
      ...variants.map((w) => `https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/${name}-p-${w}.webp ${w}w`),
      `https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/${name}.webp ${fullWidth}w`,
    ].join(', '),
    alt,
  };
}

export const CTA_IMAGES = {
  home: responsive(
    'bahiamar-cta-1',
    'Sun loungers on a villa terrace beside an infinity pool, with palm trees and Samaná Bay beyond',
  ),
  villas: responsive(
    'bahiamar-cta-2',
    'Timber-clad villa opening onto its terrace and private pool, palm trees and the sea in the distance',
  ),
  contact: responsive(
    'bahiamar-cta-3',
    'Steps leading from a villa living room to a pool with planted islands, palm trees and the sea beyond',
  ),
  /** Las cinco fichas de villa comparten la misma. Ventana de 2000 px (ver cabecera). */
  villa: responsive(
    'bahiamar-cta-4',
    'Stone-and-wood villa with a pergola-shaded porch and private pool, the sea glimpsed through the trees',
    2000,
  ),
} satisfies Record<string, CtaImage>;

/* ============================================================
   data/meta.ts
   ============================================================ */

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
      title: 'Villas',
      description:
        'Five villa typologies at Bahía Mar, Las Terrenas, Samaná: Villa Horizonte, ' +
        'Esencia, Armonía, Ámbar and Remanso — single-level and two-level villas ' +
        'with private pool, jacuzzi, solarium and views over Samaná Bay.',
    },
    es: {
      title: 'Villas',
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

/* ============================================================
   data/villas.es.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Textos en español de las villas, por slug. `localizeVilla()` (data/villas.ts)
 * los mezcla sobre la villa inglesa; lo que no depende del idioma (recuentos,
 * imágenes, slugs) solo vive allí.
 *
 * DE DÓNDE SALE LA TERMINOLOGÍA
 *
 * El inglés de villas.ts es a su vez traducción de los planos comerciales
 * por tipología (lámina «PLANO POR TIPOLOGÍA», estudio Landmass), que están
 * en español. Los nombres de estancia se han recuperado de esas láminas
 * («Recibidor», «Medio baño de visitas», «Cava de vinos», «Sala TV / sala de
 * estar», «Walk-in closet principal», «Baño común», «Zona de fogata»…) en vez
 * de retraducirlos del inglés. Dos excepciones a propósito:
 *
 *   - El plano dice «Picuzzi»; aquí va «Jacuzzi», como en el glosario del
 *     sitio y en el resto de la web.
 *   - «Fire pit» como prestación es «Fogatero» (glosario); como estancia del
 *     plano se queda la «Zona de fogata» del cliente.
 *
 * Solo se importa el TIPO de villas.ts: villas.ts importa este fichero en
 * tiempo de ejecución, y un import de valor en sentido contrario haría ciclo.
 */


export const VILLAS_ES: Record<string, VillaText> = {
  horizonte: {
    tagline: 'Arquitectura de gran presencia, para una vida sin límites.',
    description: [
      'Villa Horizonte es la más generosa de las cinco villas de Bahía Mar: una residencia de dos niveles para quienes buscan una forma de vida exclusiva en República Dominicana, rodeada de naturaleza, amplitud y vistas privilegiadas.',
      'Su arquitectura contemporánea combina interiores refinados, amplias áreas sociales y exteriores pensados para el descanso: piscina, solárium, fogatero, jacuzzi, terrazas y espacios lounge. Cada ambiente ofrece una experiencia distinta, desde una cena frente al paisaje hasta una tarde junto al agua o una noche alrededor del fuego.',
      'Más que una villa, es una experiencia de resort privado. Interior y exterior se conectan con fluidez mientras la arquitectura acompaña el terreno, y cada nivel descubre de nuevo el paisaje tropical.',
    ],
    completion: '2027 (por confirmar)',
    category: 'Dos niveles',
    features: [
      'Piscina privada',
      'Jacuzzi',
      'Solárium',
      'Fogatero',
      'Zona BBQ',
      'Terrazas',
      'Cava de vinos',
      'Área de servicio',
    ],
    rooms: [
      {
        level: 'Primer nivel',
        items: [
          'Ingreso principal', 'Recibidor', 'Medio baño de visitas', 'Vestíbulo',
          'Cava de vinos', 'Escalera principal', 'Cocina', 'Comedor', 'Sala de estar',
          'Dormitorio de huéspedes', 'Baño de huéspedes', 'Baño de servicio',
          'Cuarto de servicio', 'Área de lavado', 'Zona BBQ', 'Terraza principal',
          'Terrazas laterales', 'Solárium', 'Piscina', 'Zona de fogata', 'Jacuzzi',
        ],
      },
      {
        level: 'Segundo nivel',
        items: [
          'Vestíbulo superior', 'Sala TV', 'Dormitorio secundario 01',
          'Baño del dormitorio secundario 01', 'Dormitorio secundario 02',
          'Baño del dormitorio secundario 02', 'Dormitorio principal',
          'Walk-in closet principal', 'Baño principal',
          'Terraza perimetral superior', 'Terrazas privadas superiores',
        ],
      },
    ],
    planLabels: ['Primer nivel', 'Segundo nivel'],
    seo: {
      title: 'Villa Horizonte',
      description:
        'Villa de dos niveles y cuatro habitaciones en Las Terrenas, con piscina privada, jacuzzi, solárium y vistas panorámicas a la bahía de Samaná.',
    },
  },

  esencia: {
    tagline: 'La elegancia en su forma más esencial.',
    description: [
      'Villa Esencia es una residencia de lujo de dos niveles para quienes buscan una propuesta más compacta y eficiente, sin renunciar a la amplitud visual, la elegancia arquitectónica ni la conexión con el paisaje.',
      'Su planta longitudinal ordena con claridad las áreas sociales, privadas y exteriores, y reúne cocina, comedor, sala, dormitorio de huéspedes, terrazas, piscina, solárium, fogatero y jacuzzi en un conjunto sofisticado y relajado.',
      'En el segundo nivel, la suite principal, el dormitorio secundario y las terrazas lounge elevan aún más la experiencia de confort, privacidad y contemplación.',
    ],
    completion: '2027 (por confirmar)',
    category: 'Dos niveles',
    features: [
      'Piscina privada',
      'Jacuzzi',
      'Solárium',
      'Fogatero',
      'Zona BBQ',
      'Terrazas',
      'Terrazas lounge',
      'Área de servicio',
    ],
    rooms: [
      {
        level: 'Primer nivel',
        items: [
          'Ingreso principal', 'Vestíbulo de ingreso', 'Medio baño de visitas', 'Cocina',
          'Comedor', 'Sala TV / sala de estar', 'Dormitorio de huéspedes',
          'Walk-in closet de huéspedes', 'Baño de huéspedes', 'Baño de servicio',
          'Cuarto de servicio', 'Área de lavado', 'Zona BBQ', 'Terraza exterior',
          'Solárium', 'Zona de fogata', 'Piscina', 'Jacuzzi', 'Terraza de piscina',
        ],
      },
      {
        level: 'Segundo nivel',
        items: [
          'Escalera principal', 'Vestíbulo superior / circulación', 'Dormitorio principal',
          'Walk-in closet principal', 'Baño principal', 'Dormitorio secundario',
          'Baño del dormitorio secundario', 'Terraza superior izquierda',
          'Terraza superior frontal', 'Terraza superior derecha / lounge exterior',
        ],
      },
    ],
    planLabels: ['Primer nivel', 'Segundo nivel'],
    seo: {
      title: 'Villa Esencia',
      description:
        'Villa de dos niveles y tres habitaciones en Las Terrenas, de planta longitudinal, con piscina privada, terrazas lounge y vistas abiertas.',
    },
  },

  armonia: {
    tagline: 'Todo el privilegio de Bahía Mar, en un solo nivel.',
    description: [
      'Villa Armonía es una residencia de lujo de un solo nivel para quienes buscan comodidad, privacidad y una conexión directa con el paisaje tropical.',
      'Su distribución lineal permite que cada espacio se despliegue de forma fluida y funcional, y reúne en una sola planta la cocina, el comedor, la sala, los dormitorios y las áreas exteriores. Es la villa más práctica del proyecto, fácil de habitar sin perder nada de su exclusividad.',
      'El área social se abre a una amplia terraza exterior con piscina, solárium, fogatero y jacuzzi, que crea una experiencia de resort privado. Cada espacio está pensado para disfrutar del clima caribeño, de las vistas naturales y de la vida al aire libre.',
    ],
    completion: '2027 (por confirmar)',
    category: 'Un nivel',
    features: [
      'Piscina privada',
      'Jacuzzi',
      'Solárium',
      'Fogatero',
      'Zona BBQ',
      'Terrazas',
      'Todo en un solo nivel',
      'Área de servicio',
    ],
    rooms: [
      {
        level: 'Primer nivel',
        items: [
          'Ingreso principal', 'Vestíbulo de ingreso', 'Medio baño de visitas', 'Cocina',
          'Comedor', 'Sala TV / sala de estar', 'Dormitorio secundario',
          'Walk-in closet secundario', 'Baño secundario', 'Dormitorio principal',
          'Walk-in closet principal', 'Baño principal', 'Baño de servicio',
          'Cuarto de servicio', 'Área de lavado', 'Zona BBQ', 'Terraza principal',
          'Solárium', 'Zona de fogata', 'Piscina', 'Jacuzzi', 'Terraza de piscina',
        ],
      },
    ],
    planLabels: ['Primer nivel'],
    seo: {
      title: 'Villa Armonía',
      description:
        'Villa de un nivel y dos habitaciones en Las Terrenas: un pabellón contemporáneo con piscina privada, solárium y acceso directo al jardín.',
    },
  },

  ambar: {
    tagline: 'La serenidad del Caribe, hecha arquitectura.',
    description: [
      'Villa Ámbar parte de la idea de vivir el paisaje desde una arquitectura de un solo nivel: abierta, natural y conectada con el clima caribeño.',
      'Su diseño se organiza de manera lineal y separa con claridad las áreas privadas, sociales y exteriores. Los dormitorios se disponen a un lado de la vivienda, mientras la cocina, el comedor y la sala se integran con las terrazas y las áreas abiertas.',
      'El proyecto no se plantea como una vivienda cerrada, sino como una secuencia de espacios que se expanden hacia el exterior. La terraza, el jacuzzi, el solárium, la piscina, la zona BBQ y la terraza de fogata forman parte activa de la vida diaria. La materialidad refuerza esa intención: piedra clara, madera natural, microcemento en tonos arena, mobiliario de fibras naturales, pérgolas y vegetación tropical.',
    ],
    completion: '2027 (por confirmar)',
    category: 'Un nivel',
    features: [
      'Piscina privada',
      'Jacuzzi',
      'Solárium',
      'Fogatero',
      'Zona BBQ',
      'Terrazas',
      'Pérgolas',
      'Todo en un solo nivel',
    ],
    rooms: [
      {
        level: 'Primer nivel',
        items: [
          'Ingreso principal', 'Vestíbulo de ingreso', 'Cocina', 'Área de lavado',
          'Comedor', 'Sala TV / sala de estar', 'Dormitorio secundario',
          'Baño común', 'Dormitorio principal', 'Walk-in closet principal',
          'Baño principal', 'Terrazas', 'Jacuzzi', 'Zona BBQ', 'Solárium',
          'Terraza de fogata', 'Piscina',
        ],
      },
    ],
    planLabels: ['Primer nivel'],
    seo: {
      title: 'Villa Ámbar',
      description:
        'Villa de un nivel y dos habitaciones en Las Terrenas: piedra clara, madera y pérgolas en torno a una piscina privada y una terraza de fogata.',
    },
  },

  remanso: {
    tagline: 'Dos niveles abiertos a un horizonte extraordinario.',
    description: [
      'Villa Remanso es una residencia de dos niveles diseñada para aprovechar al máximo las vistas hacia el horizonte, el paisaje tropical y el entorno natural de Las Terrenas, en República Dominicana.',
      'La villa se levanta sobre una arquitectura tropical contemporánea, cálida, rústica y natural. Su propuesta combina piedra clara, madera, microcemento en tonos arena, terrazas abiertas, pérgolas, vegetación tropical y espacios exteriores pensados para el clima caribeño.',
      'Las estancias principales miran al paisaje. Cocina, comedor, sala, dormitorios y terrazas se abren hacia el exterior, en relación constante con la luz natural, la vegetación, la piscina y el horizonte.',
    ],
    completion: '2027 (por confirmar)',
    category: 'Dos niveles',
    features: [
      'Piscina privada',
      'Jacuzzi',
      'Solárium',
      'Fogatero',
      'Zona BBQ',
      'Terrazas',
      'Balcones',
      'Vistas desde la ladera',
    ],
    rooms: [
      {
        level: 'Primer nivel',
        items: [
          'Ingreso principal', 'Vestíbulo de ingreso', 'Medio baño de visitas', 'Cocina',
          'Comedor', 'Sala TV / sala de estar', 'Dormitorio de huéspedes',
          'Walk-in closet de huéspedes', 'Baño de huéspedes', 'Baño de servicio',
          'Cuarto de servicio', 'Área de lavado', 'Zona BBQ', 'Terraza exterior',
          'Solárium', 'Zona de fogata', 'Piscina', 'Jacuzzi', 'Terraza de piscina',
        ],
      },
      {
        level: 'Segundo nivel',
        items: [
          'Escalera principal', 'Vestíbulo superior / circulación', 'Dormitorio principal',
          'Walk-in closet principal', 'Baño principal', 'Dormitorio secundario',
          'Baño del dormitorio secundario', 'Balcones',
        ],
      },
    ],
    planLabels: ['Primer nivel', 'Segundo nivel'],
    seo: {
      title: 'Villa Remanso',
      description:
        'Villa de dos niveles y tres habitaciones en Las Terrenas, que sigue la pendiente del terreno para abrir cada estancia al horizonte.',
    },
  },
};

/* ============================================================
   data/villas.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Catálogo de villas de Bahía Mar Residences & Beach Resort.
 *
 * DE DÓNDE SALEN LOS DATOS
 *
 * Este fichero SÍ se edita a mano: sustituye al `data/apartments.ts`
 * generado del JSON-LD de ERA Residence. Cada campo viene de material del
 * cliente, y conviene saber de cuál porque no todo dice lo mismo:
 *
 *   - Nombres, taglines y los recuentos de habitaciones/baños salen de las
 *     fichas «Bahía Mar - Boutique Residences / Tipos de villas» que el
 *     cliente pasó por WhatsApp (bahia-mar-personalizacion/
 *     archivos-extra-whatsapp/). Son la fuente MÁS RECIENTE y la única que
 *     nombra las villas.
 *   - Las descripciones largas y el listado de estancias vienen de los
 *     planos comerciales por tipología (00. PLANOS/PLANOS COMERCIALES),
 *     traducidos al inglés.
 *   - El brochure de agosto (BAHIA MAR/BOCHURE PAGINAS_) solo documenta
 *     cuatro tipologías y las llama A, B, C y D. NO menciona la Villa
 *     Carolina (tipo E), que es posterior. Si algo se contradice, mandan
 *     las fichas de WhatsApp.
 *
 * LO QUE NO HAY (y por eso no hay campo)
 *
 * En NINGÚN documento aparece la superficie construida ni la fecha de
 * entrega. El sitio original mostraba «132 m²» y «4Q 2026» en cada
 * tarjeta; aquí esos huecos se han sustituido por datos que sí tenemos
 * (nivel, baños, piscina privada) en vez de inventarlos. Ver
 * BACKLOG.md.
 */



export interface Villa {
  /** Slug de la ruta: /villas/<slug>. */
  slug: string;
  /**
   * Slug de los assets (imágenes, PDF): los ficheros del CDN se sirven con el
   * nombre original de cada tipología (coson, helecho, remanso, ambar,
   * carolina). Al renombrar las villas se conserva este slug para que las
   * URLs de imágenes y planos no se rompan.
   */
  assetSlug: string;
  /** Letra de tipología del estudio de arquitectura. */
  type: 'A' | 'B' | 'C' | 'D' | 'E';
  /** Nombre comercial, con su tilde. */
  name: string;
  /** Frase de una línea de la ficha del cliente. */
  tagline: string;
  /** Dos o tres párrafos para la cabecera de la ficha. */
  description: string[];
  /**
   * Unidades de esta tipología en el complejo.
   *
   * Del «FASE II MASTER PLAN - LOTIFICACIÓN»: 246 villas en total, de las
   * que 77 son tipo A, 88 tipo B y 81 tipo C. Ese master plan NO incluye
   * las tipologías D ni E, que son posteriores: hasta que el cliente
   * mande su reparto, van a null y la ficha no enseña el dato.
   */
  units: number | null;
  /**
   * PROVISIONAL. No hay fecha de entrega en ningún documento del cliente;
   * se muestra con «(TBC)» a la vista para que nadie la tome por firme.
   */
  completion: string;
  /** "Two levels" | "Single level" — es lo que separa unas de otras. */
  category: string;
  levels: 1 | 2;
  bedrooms: number;
  /** Baños completos. El de servicio NO cuenta, como marca la ficha. */
  bathrooms: number;
  /** Aseo de cortesía. La Villa Ámbar es la única que no lo lista. */
  halfBath: boolean;
  /** Salas de estar: la Horizonte es la única con dos. */
  livingAreas: number;
  /** Cuarto y baño de servicio independientes. */
  serviceQuarters: boolean;
  /** Lo que se pinta como lista de iconos en la ficha. */
  features: string[];
  /** Estancias por planta, del plano comercial. */
  rooms: { level: string; items: string[] }[];
  heroImage: string;
  /** Planos comerciales. Las de un nivel solo tienen el primero. */
  plans: { label: string; image: string }[];
  gallery: string[];
  seo: { title: string; description: string };
}

/** Ancho completo + los cinco tamaños del srcset que genera villas-assets.mjs. */
export function srcset(image: string): string {
  const base = image.replace(/\.webp$/, '');
  return [500, 800, 1080, 1600, 2000]
    .map((w) => `${base}-p-${w}.webp ${w}w`)
    .concat(`${image} 2350w`)
    .join(', ');
}

export const villas: Villa[] = [
  {
    slug: 'horizonte',
    assetSlug: 'coson',
    type: 'A',
    name: 'Villa Horizonte',
    tagline: 'Architecture of great presence, for a life without limits.',
    description: [
      'Villa Horizonte is the most generous of the five Bahía Mar villas: a two-level residence for those who want an exclusive way of living in the Dominican Republic, surrounded by nature, space and privileged views.',
      'Its contemporary architecture combines refined interiors with generous social areas and exteriors designed for rest — pool, solarium, fire pit, jacuzzi, terraces and lounge spaces. Every setting offers a different experience, from dinner facing the landscape to an afternoon by the water or a night around the fire.',
      'More than a villa, it proposes a private resort experience. Interior and exterior connect fluidly while the architecture follows the terrain, letting each level uncover the tropical landscape anew.',
    ],
    units: 77,
    completion: '2027 (TBC)',
    category: 'Two levels',
    levels: 2,
    bedrooms: 4,
    bathrooms: 4,
    halfBath: true,
    livingAreas: 2,
    serviceQuarters: true,
    features: [
      'Private pool',
      'Jacuzzi',
      'Solarium',
      'Fire pit',
      'BBQ area',
      'Terraces',
      'Wine cellar',
      'Service quarters',
    ],
    rooms: [
      {
        level: 'First level',
        items: [
          'Main entrance', 'Reception hall', 'Guest powder room', 'Vestibule',
          'Wine cellar', 'Main stair', 'Kitchen', 'Dining room', 'Living room',
          'Guest bedroom', 'Guest bathroom', 'Service bathroom', 'Service room',
          'Laundry area', 'BBQ area', 'Main terrace', 'Side terraces',
          'Solarium', 'Pool', 'Fire pit area', 'Jacuzzi',
        ],
      },
      {
        level: 'Second level',
        items: [
          'Upper vestibule', 'TV room', 'Secondary bedroom 01',
          'Secondary bedroom 01 bathroom', 'Secondary bedroom 02',
          'Secondary bedroom 02 bathroom', 'Principal bedroom',
          'Principal walk-in closet', 'Principal bathroom',
          'Upper perimeter terrace', 'Private upper terraces',
        ],
      },
    ],
    heroImage: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-hero.webp',
    plans: [
      { label: 'First level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-plan-1.webp' },
      { label: 'Second level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-plan-2.webp' },
    ],
    gallery: [
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-g4.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-i1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-i2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-i3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-coson-i4.webp',
    ],
    seo: {
      title: 'Villa Horizonte',
      description:
        'Four-bedroom, two-level villa in Las Terrenas with private pool, jacuzzi, solarium and panoramic views over Samaná Bay.',
    },
  },

  {
    slug: 'esencia',
    assetSlug: 'helecho',
    type: 'B',
    name: 'Villa Esencia',
    tagline: 'Elegance in its most essential form.',
    description: [
      'Villa Esencia is a two-level luxury residence for those after a more compact, efficient proposition — without giving up visual space, architectural elegance or the connection to the landscape.',
      'Its longitudinal plan organises social, private and outdoor areas with clarity, weaving kitchen, dining room, living room, guest bedroom, terraces, pool, solarium, fire pit and jacuzzi into one sophisticated, relaxed whole.',
      'On the second level, the principal suite, the secondary bedroom and the lounge terraces lift the experience of comfort, privacy and contemplation further still.',
    ],
    units: 88,
    completion: '2027 (TBC)',
    category: 'Two levels',
    levels: 2,
    bedrooms: 3,
    bathrooms: 3,
    halfBath: true,
    livingAreas: 1,
    serviceQuarters: true,
    features: [
      'Private pool',
      'Jacuzzi',
      'Solarium',
      'Fire pit',
      'BBQ area',
      'Terraces',
      'Lounge terraces',
      'Service quarters',
    ],
    rooms: [
      {
        level: 'First level',
        items: [
          'Main entrance', 'Entrance vestibule', 'Guest powder room', 'Kitchen',
          'Dining room', 'TV room / living room', 'Guest bedroom',
          'Guest walk-in closet', 'Guest bathroom', 'Service bathroom',
          'Service room', 'Laundry area', 'BBQ area', 'Outdoor terrace',
          'Solarium', 'Fire pit area', 'Pool', 'Jacuzzi', 'Pool terrace',
        ],
      },
      {
        level: 'Second level',
        items: [
          'Main stair', 'Upper vestibule / circulation', 'Principal bedroom',
          'Principal walk-in closet', 'Principal bathroom', 'Secondary bedroom',
          'Secondary bedroom bathroom', 'Left upper terrace',
          'Front upper terrace', 'Right upper terrace / outdoor lounge',
        ],
      },
    ],
    heroImage: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-hero.webp',
    plans: [
      { label: 'First level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-plan-1.webp' },
      { label: 'Second level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-plan-2.webp' },
    ],
    gallery: [
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-g1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-g2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-g3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-g4.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-i1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-i2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-i3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-helecho-i4.webp',
    ],
    seo: {
      title: 'Villa Esencia',
      description:
        'Three-bedroom, two-level villa in Las Terrenas with a longitudinal plan, private pool, lounge terraces and open views.',
    },
  },

  {
    slug: 'armonia',
    assetSlug: 'remanso',
    type: 'C',
    name: 'Villa Armonía',
    tagline: 'All the privilege of Bahía Mar, on a single level.',
    description: [
      'Villa Armonía is a single-level luxury residence for those who want ease, privacy and a direct connection to the tropical landscape.',
      'Its linear layout lets every space unfold fluidly and functionally, bringing kitchen, dining room, living room, bedrooms and outdoor areas onto one floor. That makes it the most practical villa of the project, easy to inhabit without losing any of its exclusivity.',
      'The social area opens onto a wide outdoor terrace with pool, solarium, fire pit and jacuzzi, creating a private resort experience. Every space is designed to enjoy the Caribbean climate, the natural views and life outdoors.',
    ],
    units: 81,
    completion: '2027 (TBC)',
    category: 'Single level',
    levels: 1,
    bedrooms: 2,
    bathrooms: 2,
    halfBath: true,
    livingAreas: 1,
    serviceQuarters: true,
    features: [
      'Private pool',
      'Jacuzzi',
      'Solarium',
      'Fire pit',
      'BBQ area',
      'Terraces',
      'Single-level living',
      'Service quarters',
    ],
    rooms: [
      {
        level: 'First level',
        items: [
          'Main entrance', 'Entrance vestibule', 'Guest powder room', 'Kitchen',
          'Dining room', 'TV room / living room', 'Secondary bedroom',
          'Secondary walk-in closet', 'Secondary bathroom', 'Principal bedroom',
          'Principal walk-in closet', 'Principal bathroom', 'Service bathroom',
          'Service room', 'Laundry area', 'BBQ area', 'Main terrace',
          'Solarium', 'Fire pit area', 'Pool', 'Jacuzzi', 'Pool terrace',
        ],
      },
    ],
    heroImage: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-hero.webp',
    plans: [{ label: 'First level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-plan-1.webp' }],
    gallery: [
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-g1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-g2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-g3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-g4.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-i1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-i2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-i3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-remanso-i4.webp',
    ],
    seo: {
      title: 'Villa Armonía',
      description:
        'Two-bedroom single-level villa in Las Terrenas: a contemporary pavilion with private pool, solarium and direct access to the garden.',
    },
  },

  {
    slug: 'ambar',
    assetSlug: 'ambar',
    type: 'D',
    name: 'Villa Ámbar',
    tagline: 'The serenity of the Caribbean, made architecture.',
    description: [
      'Villa Ámbar starts from the idea of living the landscape through single-level architecture: open, natural and connected to the Caribbean climate.',
      'Its design is organised linearly, separating private, social and outdoor areas with clarity. The bedrooms run along one side of the house while kitchen, dining room and living room fold into the terraces and open areas.',
      'The project is not conceived as a closed house but as a sequence of spaces expanding outward. Terrace, jacuzzi, solarium, pool, BBQ area and fire pit terrace are an active part of daily life. Its materials reinforce that intent: pale stone, natural timber, sand-toned microcement, natural-fibre furniture, pergolas and tropical planting.',
    ],
    units: null,
    completion: '2027 (TBC)',
    category: 'Single level',
    levels: 1,
    bedrooms: 2,
    bathrooms: 2,
    halfBath: false,
    livingAreas: 1,
    serviceQuarters: false,
    features: [
      'Private pool',
      'Jacuzzi',
      'Solarium',
      'Fire pit',
      'BBQ area',
      'Terraces',
      'Pergolas',
      'Single-level living',
    ],
    rooms: [
      {
        level: 'First level',
        items: [
          'Main entrance', 'Entrance vestibule', 'Kitchen', 'Laundry area',
          'Dining room', 'TV room / living room', 'Secondary bedroom',
          'Shared bathroom', 'Principal bedroom', 'Principal walk-in closet',
          'Principal bathroom', 'Terraces', 'Jacuzzi', 'BBQ area', 'Solarium',
          'Fire pit terrace', 'Pool',
        ],
      },
    ],
    heroImage: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-hero.webp',
    plans: [{ label: 'First level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-plan-1.webp' }],
    gallery: [
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-g1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-g2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-g3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-g4.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-i1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-i2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-i3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-ambar-i4.webp',
    ],
    seo: {
      title: 'Villa Ámbar',
      description:
        'Two-bedroom single-level villa in Las Terrenas: pale stone, timber and pergolas around a private pool and fire pit terrace.',
    },
  },

  {
    slug: 'remanso',
    assetSlug: 'carolina',
    type: 'E',
    name: 'Villa Remanso',
    tagline: 'Two levels open to an extraordinary horizon.',
    description: [
      'Villa Remanso is a two-level residence designed to make the most of the views towards the horizon, the tropical landscape and the natural surroundings of Las Terrenas, in the Dominican Republic.',
      'The villa is built on a contemporary tropical architecture that is warm, rustic and natural. Its proposal combines pale stone, timber, sand-toned microcement, open terraces, pergolas, tropical planting and outdoor spaces meant for the Caribbean climate.',
      'The principal rooms face the landscape. Kitchen, dining room, living room, bedrooms and terraces open outward, holding a constant relationship with natural light, vegetation, the pool and the horizon.',
    ],
    units: null,
    completion: '2027 (TBC)',
    category: 'Two levels',
    levels: 2,
    bedrooms: 3,
    bathrooms: 3,
    halfBath: true,
    livingAreas: 1,
    serviceQuarters: true,
    features: [
      'Private pool',
      'Jacuzzi',
      'Solarium',
      'Fire pit',
      'BBQ area',
      'Terraces',
      'Balconies',
      'Hillside views',
    ],
    rooms: [
      {
        level: 'First level',
        items: [
          'Main entrance', 'Entrance vestibule', 'Guest powder room', 'Kitchen',
          'Dining room', 'TV room / living room', 'Guest bedroom',
          'Guest walk-in closet', 'Guest bathroom', 'Service bathroom',
          'Service room', 'Laundry area', 'BBQ area', 'Outdoor terrace',
          'Solarium', 'Fire pit area', 'Pool', 'Jacuzzi', 'Pool terrace',
        ],
      },
      {
        level: 'Second level',
        items: [
          'Main stair', 'Upper vestibule / circulation', 'Principal bedroom',
          'Principal walk-in closet', 'Principal bathroom', 'Secondary bedroom',
          'Secondary bedroom bathroom', 'Balconies',
        ],
      },
    ],
    heroImage: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-hero.webp',
    plans: [
      { label: 'First level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-plan-1.webp' },
      { label: 'Second level', image: 'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-plan-2.webp' },
    ],
    gallery: [
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-g1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-g2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-g3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-g4.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-i1.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-i2.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-i3.webp',
      'https://puntacanadinnerinthesky.com/urbatrix/bahiamar/images/villa-carolina-i4.webp',
    ],
    seo: {
      title: 'Villa Remanso',
      description:
        'Three-bedroom, two-level villa in Las Terrenas that follows the slope to open every room to the horizon.',
    },
  },
];

/** Búsqueda por slug para la ruta /villas/[slug]. */
export function villaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}

/**
 * Los textos de una villa que cambian con el idioma. Lo demás (slug,
 * recuentos, imágenes) es igual en los dos.
 */
export interface VillaText {
  tagline: string;
  description: string[];
  completion: string;
  category: string;
  features: string[];
  rooms: { level: string; items: string[] }[];
  /** Rótulo de cada plano, en el mismo orden que `plans`. */
  planLabels: string[];
  seo: { title: string; description: string };
}

/**
 * La villa en el idioma dado. El inglés es el de este fichero; el español
 * vive en data/villas.es.ts, por slug. Si una villa no tuviera traducción
 * se queda en inglés en vez de romper la ficha.
 */
export function localizeVilla(villa: Villa, lang: Lang): Villa {
  if (lang === 'en') return villa;
  const t = VILLAS_ES[villa.slug];
  if (!t) return villa;
  const { planLabels, ...text } = t;
  return {
    ...villa,
    ...text,
    plans: villa.plans.map((plan, i) => ({ ...plan, label: planLabels[i] ?? plan.label })),
  };
}

/* ============================================================
   data/villa-cards.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
  // Como en ERA, la portada de la tarjeta es el PLANO recortado sobre
  // transparente (nivel 1), no el render: `img contain` lo deja flotar
  // sobre el fondo de la tarjeta. Los renders siguen en la ficha.
  image: v.plans[0].image,
  imageSrcset: srcset(v.plans[0].image),
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

/**
 * La tarjeta en el idioma dado. Solo cambian los rótulos: los valores de
 * filtro y orden (`filterType`, `sort*`) son los mismos en los dos idiomas,
 * porque son los que leen los `data-filter-*` y la query de la URL.
 */
export function localizeCard(card: VillaCardData, lang: Lang): VillaCardData {
  if (lang === 'en') return card;
  const villa = villas.find((v) => v.slug === card.slug);
  if (!villa) return card;
  const t = localizeVilla(villa, lang);
  return {
    ...card,
    typeLabel: `Tipo ${villa.type}`,
    category: t.category,
    unitsLabel: villa.units === null ? null : `${villa.units} unidades`,
    completion: t.completion,
    extra: 'Piscina privada',
  };
}

/** Opciones del desplegable «Type» en el idioma dado (mismo `value`). */
export function typeFiltersFor(lang: Lang) {
  return typeFilters.map((f) => {
    const villa = villas.find((v) => slugifyType(v.category) === f.value);
    return villa ? { ...f, label: localizeVilla(villa, lang).category } : f;
  });
}
