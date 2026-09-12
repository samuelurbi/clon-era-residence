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
  /** Salas de estar: la Cosón es la única con dos. */
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
    slug: 'coson',
    type: 'A',
    name: 'Villa Cosón',
    tagline: 'Architecture of great presence, for a life without limits.',
    description: [
      'Villa Cosón is the most generous of the five Bahía Mar villas: a two-level residence for those who want an exclusive way of living in the Dominican Republic, surrounded by nature, space and privileged views.',
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
    heroImage: '/images/villa-coson-hero.webp',
    plans: [
      { label: 'First level', image: '/images/villa-coson-plan-1.webp' },
      { label: 'Second level', image: '/images/villa-coson-plan-2.webp' },
    ],
    gallery: [
      '/images/villa-coson-g1.webp',
      '/images/villa-coson-g2.webp',
      '/images/villa-coson-g3.webp',
      '/images/villa-coson-g4.webp',
      '/images/villa-coson-i1.webp',
      '/images/villa-coson-i2.webp',
      '/images/villa-coson-i3.webp',
      '/images/villa-coson-i4.webp',
    ],
    seo: {
      title: 'Villa Cosón',
      description:
        'Four-bedroom, two-level villa in Las Terrenas with private pool, jacuzzi, solarium and panoramic views over Samaná Bay.',
    },
  },

  {
    slug: 'helecho',
    type: 'B',
    name: 'Villa Helecho',
    tagline: 'Elegance in its most essential form.',
    description: [
      'Villa Helecho is a two-level luxury residence for those after a more compact, efficient proposition — without giving up visual space, architectural elegance or the connection to the landscape.',
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
    heroImage: '/images/villa-helecho-hero.webp',
    plans: [
      { label: 'First level', image: '/images/villa-helecho-plan-1.webp' },
      { label: 'Second level', image: '/images/villa-helecho-plan-2.webp' },
    ],
    gallery: [
      '/images/villa-helecho-g1.webp',
      '/images/villa-helecho-g2.webp',
      '/images/villa-helecho-g3.webp',
      '/images/villa-helecho-g4.webp',
      '/images/villa-helecho-i1.webp',
      '/images/villa-helecho-i2.webp',
      '/images/villa-helecho-i3.webp',
      '/images/villa-helecho-i4.webp',
    ],
    seo: {
      title: 'Villa Helecho',
      description:
        'Three-bedroom, two-level villa in Las Terrenas with a longitudinal plan, private pool, lounge terraces and open views.',
    },
  },

  {
    slug: 'remanso',
    type: 'C',
    name: 'Villa Remanso',
    tagline: 'All the privilege of Bahía Mar, on a single level.',
    description: [
      'Villa Remanso is a single-level luxury residence for those who want ease, privacy and a direct connection to the tropical landscape.',
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
    heroImage: '/images/villa-remanso-hero.webp',
    plans: [{ label: 'First level', image: '/images/villa-remanso-plan-1.webp' }],
    gallery: [
      '/images/villa-remanso-g1.webp',
      '/images/villa-remanso-g2.webp',
      '/images/villa-remanso-g3.webp',
      '/images/villa-remanso-g4.webp',
      '/images/villa-remanso-i1.webp',
      '/images/villa-remanso-i2.webp',
      '/images/villa-remanso-i3.webp',
      '/images/villa-remanso-i4.webp',
    ],
    seo: {
      title: 'Villa Remanso',
      description:
        'Two-bedroom single-level villa in Las Terrenas: a contemporary pavilion with private pool, solarium and direct access to the garden.',
    },
  },

  {
    slug: 'ambar',
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
    heroImage: '/images/villa-ambar-hero.webp',
    plans: [{ label: 'First level', image: '/images/villa-ambar-plan-1.webp' }],
    gallery: [
      '/images/villa-ambar-g1.webp',
      '/images/villa-ambar-g2.webp',
      '/images/villa-ambar-g3.webp',
      '/images/villa-ambar-g4.webp',
      '/images/villa-ambar-i1.webp',
      '/images/villa-ambar-i2.webp',
      '/images/villa-ambar-i3.webp',
      '/images/villa-ambar-i4.webp',
    ],
    seo: {
      title: 'Villa Ámbar',
      description:
        'Two-bedroom single-level villa in Las Terrenas: pale stone, timber and pergolas around a private pool and fire pit terrace.',
    },
  },

  {
    slug: 'carolina',
    type: 'E',
    name: 'Villa Carolina',
    tagline: 'Two levels open to an extraordinary horizon.',
    description: [
      'Villa Carolina is a two-level residence designed to make the most of the views towards the horizon, the tropical landscape and the natural surroundings of Las Terrenas, in the Dominican Republic.',
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
    heroImage: '/images/villa-carolina-hero.webp',
    plans: [
      { label: 'First level', image: '/images/villa-carolina-plan-1.webp' },
      { label: 'Second level', image: '/images/villa-carolina-plan-2.webp' },
    ],
    gallery: [
      '/images/villa-carolina-g1.webp',
      '/images/villa-carolina-g2.webp',
      '/images/villa-carolina-g3.webp',
      '/images/villa-carolina-g4.webp',
      '/images/villa-carolina-i1.webp',
      '/images/villa-carolina-i2.webp',
      '/images/villa-carolina-i3.webp',
      '/images/villa-carolina-i4.webp',
    ],
    seo: {
      title: 'Villa Carolina',
      description:
        'Three-bedroom, two-level villa in Las Terrenas that follows the slope to open every room to the horizon.',
    },
  },
];

/** Búsqueda por slug para la ruta /villas/[slug]. */
export function villaBySlug(slug: string): Villa | undefined {
  return villas.find((v) => v.slug === slug);
}
