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

import type { VillaText } from '@/data/villas';

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
