/**
 * Catálogo de apartamentos de ERA Residence.
 *
 * GENERADO por scripts/extract-apartments.mjs a partir del JSON-LD de las
 * fichas originales. Al personalizar el sitio, este fichero pasa a editarse
 * a mano (o a sustituirse por un CMS) — la firma de `Apartment` es el
 * contrato que consumen los componentes.
 */

export interface Apartment {
  /**
   * Código de 3 dígitos y slug de la ruta.
   * El 2º dígito es el bloque (verificado contra el campo `Block` en las 25
   * fichas). El 1º agrupa series de vivienda y el 3º es el número de unidad.
   */
  code: string;
  slug: string;
  name: string;
  description: string;
  /** Tipología: "Ground floor + basement" | "Ground Floor" | "Penthouse duplex" */
  category: string;
  /**
   * Primer dígito del código. Correlaciona con la tipología pero NO de forma
   * limpia (la serie 1 mezcla "Ground Floor" y "Penthouse duplex"), así que no
   * lo uses como planta hasta confirmarlo con el promotor.
   */
  series: number;
  /** Etiqueta del bloque: "B1" | "B2" | "B3". */
  block: string;
  blockNumber: number;
  /** Tal cual se muestra: "3" en pisos, "2-3" en los duplex. */
  bedroomsLabel: string;
  bedroomsMin: number;
  bedroomsMax: number;
  interiorAreaSqm: number;
  /** Etiqueta tal cual aparece en el sitio, p. ej. "132 m²". */
  interiorAreaLabel: string;
  completion: string;
  heroImage: string;
  /** Plano de la vivienda. */
  layoutImage: string;
  gallery: string[];
  seo: { title: string; description: string };
}

export const apartments: Apartment[] = [
  {
    "code": "011",
    "slug": "011",
    "name": "Apartment №011",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 132,
    "interiorAreaLabel": "132 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c764aeb3252978e8751_11.webp",
    "gallery": [
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp"
    ],
    "seo": {
      "title": "Apartment №011 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "012",
    "slug": "012",
    "name": "Apartment №012",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 132,
    "interiorAreaLabel": "132 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c762f8a29dd9c9b38d7_12.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp"
    ],
    "seo": {
      "title": "Apartment №012 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "031",
    "slug": "031",
    "name": "Apartment №031",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 134,
    "interiorAreaLabel": "134 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c7619f7f97bbc89d475_31.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp"
    ],
    "seo": {
      "title": "Apartment №031 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "032",
    "slug": "032",
    "name": "Apartment №032",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 134,
    "interiorAreaLabel": "134 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c76c1fcff139914bf10_32.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp"
    ],
    "seo": {
      "title": "Apartment №032 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "033",
    "slug": "033",
    "name": "Apartment №033",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 134,
    "interiorAreaLabel": "134 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c7622a1a12b6817e697_33.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp"
    ],
    "seo": {
      "title": "Apartment №033 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "034",
    "slug": "034",
    "name": "Apartment №034",
    "description": "Three bedrooms, open-plan living, and a large terrace that connects directly to the communal garden and pool area.",
    "category": "Ground floor + basement",
    "series": 0,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "3",
    "bedroomsMin": 3,
    "bedroomsMax": 3,
    "interiorAreaSqm": 134,
    "interiorAreaLabel": "134 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/era-residence-ground-floor-basement.webp",
    "layoutImage": "/images/6a345c761bb0eb457f544c19_34.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp"
    ],
    "seo": {
      "title": "Apartment №034 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "111",
    "slug": "111",
    "name": "Apartment №111",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c7661bb6f90181aecf7_111.webp",
    "gallery": [
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №111 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "112",
    "slug": "112",
    "name": "Apartment №112",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c76e6cffe217741c680_112.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №112 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "113",
    "slug": "113",
    "name": "Apartment №113",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c76afaf96dac2a461df_113.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №113 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "114",
    "slug": "114",
    "name": "Apartment №114",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Penthouse duplex",
    "series": 1,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 89,
    "interiorAreaLabel": "89 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c7619f7f97bbc89d472_114_1.webp",
    "gallery": [
      "/images/6a345c764aeb3252978e8751_11.webp",
      "/images/6a345c762f8a29dd9c9b38d7_12.webp",
      "/images/6a345c7619f7f97bbc89d475_31.webp",
      "/images/6a345c76c1fcff139914bf10_32.webp",
      "/images/6a345c7622a1a12b6817e697_33.webp",
      "/images/6a345c761bb0eb457f544c19_34.webp",
      "/images/6a345c76595803f21cba74c1_114_2.webp"
    ],
    "seo": {
      "title": "Apartment №114 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "121",
    "slug": "121",
    "name": "Apartment №121",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c75afaf96dac2a4619d_121.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №121 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "122",
    "slug": "122",
    "name": "Apartment №122",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c762f8a29dd9c9b38ab_122.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №122 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "123",
    "slug": "123",
    "name": "Apartment №123",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c76bd54890c94c2d280_123.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp"
    ],
    "seo": {
      "title": "Apartment №123 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "124",
    "slug": "124",
    "name": "Apartment №124",
    "description": "Step directly onto your terrace and into thecommunal gardens, blending indoor comfortwith outdoor living.",
    "category": "Ground Floor",
    "series": 1,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2",
    "bedroomsMin": 2,
    "bedroomsMax": 2,
    "interiorAreaSqm": 75,
    "interiorAreaLabel": "75 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "/images/6a345c7668c723c7c1bc2fcd_124.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №124 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "131",
    "slug": "131",
    "name": "Apartment №131",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 1,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c76f340b7301bf20530_131.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №131 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "132",
    "slug": "132",
    "name": "Apartment №132",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 1,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c78b4cc4746b16e875d_132.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №132 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "133",
    "slug": "133",
    "name": "Apartment №133",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 1,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c786da993be14f64ed5_133.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №133 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "134",
    "slug": "134",
    "name": "Apartment №134",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 1,
    "block": "B3",
    "blockNumber": 3,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 67,
    "interiorAreaLabel": "67 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c7844b8416906f3ffd8_134.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №134 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "211",
    "slug": "211",
    "name": "Apartment №211",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c7827147ebfc4bc0f4b_211.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №211 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "212",
    "slug": "212",
    "name": "Apartment №212",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c78b492933cc245ff76_212.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №212 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "213",
    "slug": "213",
    "name": "Apartment №213",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B1",
    "blockNumber": 1,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c78ac4c78a4157613a6_213.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №213 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "221",
    "slug": "221",
    "name": "Apartment №221",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c78ac4c78a4157613a3_221.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №221 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "222",
    "slug": "222",
    "name": "Apartment №222",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c789c5162a25ad50df3_222.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №222 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "223",
    "slug": "223",
    "name": "Apartment №223",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c788f01ce67d4e9365b_223.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №223 — ERA Residence Estepona",
      "description": ""
    }
  },
  {
    "code": "224",
    "slug": "224",
    "name": "Apartment №224",
    "description": "Two floors crowned with panoramic viewsand a private rooftop solarium — the ultimateexpression of luxury living",
    "category": "Penthouse duplex",
    "series": 2,
    "block": "B2",
    "blockNumber": 2,
    "bedroomsLabel": "2-3",
    "bedroomsMin": 2,
    "bedroomsMax": 3,
    "interiorAreaSqm": 60,
    "interiorAreaLabel": "60 m²",
    "completion": "4Q 2026",
    "heroImage": "/images/6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "/images/6a345c78a24587924e09d9dc_224.webp",
    "gallery": [
      "/images/6a345c7661bb6f90181aecf7_111.webp",
      "/images/6a345c76e6cffe217741c680_112.webp",
      "/images/6a345c76afaf96dac2a461df_113.webp",
      "/images/6a345c75afaf96dac2a4619d_121.webp",
      "/images/6a345c762f8a29dd9c9b38ab_122.webp",
      "/images/6a345c76bd54890c94c2d280_123.webp"
    ],
    "seo": {
      "title": "Apartment №224 — ERA Residence Estepona",
      "description": ""
    }
  }
];

export const getApartment = (code: string): Apartment | undefined =>
  apartments.find((a) => a.code === code);

export const apartmentCodes = apartments.map((a) => a.code);

/** Agrupados por bloque (B1 · B2 · B3). */
export const apartmentsByBlock = apartments.reduce<Record<string, Apartment[]>>(
  (acc, a) => {
    (acc[a.block] ??= []).push(a);
    return acc;
  },
  {},
);

/** Agrupados por tipología. */
export const apartmentsByCategory = apartments.reduce<Record<string, Apartment[]>>(
  (acc, a) => {
    (acc[a.category] ??= []).push(a);
    return acc;
  },
  {},
);
