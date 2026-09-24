/* ============================================================
 *  DATA — 4 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */


/* ============================================================
   data/apartment-cards.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * GENERADO por scripts/extract-apartment-cards.mjs — no editar a mano.
 *
 * Lo que muestra la tarjeta de apartamento en el listado, copiado literal
 * del original. Ojo: algunas cifras NO coinciden con las de la ficha del
 * mismo apartamento (la terraza, por ejemplo), así que no se derivan de
 * data/apartments.ts.
 */

export interface ApartmentCardData {
  code: string;
  href: string;
  category: string | null;
  completion: string | null;
  block: string | null;
  floor: string | null;
  bedrooms: string | null;
  area: string | null;
  terrace: string | null;
  /** Valores por los que filtra y ordena el listado. */
  filterType: string | null;
  filterBed: string | null;
  sortArea: string | null;
  sortRelevant: string | null;
  image: string | null;
  imageSrcset: string | null;
}

export const apartmentCards: ApartmentCardData[] = [
  {
    "code": "011",
    "href": "/apartments/011",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "0",
    "bedrooms": "3",
    "area": "132 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "132 m²",
    "sortRelevant": "1",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp 2350w"
  },
  {
    "code": "012",
    "href": "/apartments/012",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "0",
    "bedrooms": "3",
    "area": "132 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "132 m²",
    "sortRelevant": "2",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp 2350w"
  },
  {
    "code": "031",
    "href": "/apartments/031",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "0",
    "bedrooms": "3",
    "area": "134 m²",
    "terrace": "44 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "134 m²",
    "sortRelevant": "3",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp 2350w"
  },
  {
    "code": "032",
    "href": "/apartments/032",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "0",
    "bedrooms": "3",
    "area": "134 m²",
    "terrace": "44 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "134 m²",
    "sortRelevant": "4",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp 2350w"
  },
  {
    "code": "033",
    "href": "/apartments/033",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "0",
    "bedrooms": "3",
    "area": "134 m²",
    "terrace": "44 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "134 m²",
    "sortRelevant": "5",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp 2350w"
  },
  {
    "code": "034",
    "href": "/apartments/034",
    "category": "Ground floor + basement",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "0",
    "bedrooms": "3",
    "area": "134 m²",
    "terrace": "45 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp",
    "filterType": "ground-floor-basement",
    "filterBed": "3",
    "sortArea": "134 m²",
    "sortRelevant": "6",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp 2350w"
  },
  {
    "code": "111",
    "href": "/apartments/111",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "1",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "7",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp 2350w"
  },
  {
    "code": "112",
    "href": "/apartments/112",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "1",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "8",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp 2350w"
  },
  {
    "code": "113",
    "href": "/apartments/113",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "1",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "9",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp 2350w"
  },
  {
    "code": "114",
    "href": "/apartments/114",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "1",
    "bedrooms": "3",
    "area": "89 m²",
    "terrace": "151 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "3",
    "sortArea": "89 m²",
    "sortRelevant": "10",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1.webp 2350w"
  },
  {
    "code": "121",
    "href": "/apartments/121",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "0",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "11",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp 2350w"
  },
  {
    "code": "122",
    "href": "/apartments/122",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "0",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "12",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp 2350w"
  },
  {
    "code": "123",
    "href": "/apartments/123",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "0",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "13",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp 2350w"
  },
  {
    "code": "124",
    "href": "/apartments/124",
    "category": "Ground Floor",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "0",
    "bedrooms": "2",
    "area": "75 m²",
    "terrace": "29 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124.webp",
    "filterType": "ground-floor",
    "filterBed": "2",
    "sortArea": "75 m²",
    "sortRelevant": "14",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124.webp 2350w"
  },
  {
    "code": "131",
    "href": "/apartments/131",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "64 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "15",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131.webp 2350w"
  },
  {
    "code": "132",
    "href": "/apartments/132",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "64 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "16",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132.webp 2350w"
  },
  {
    "code": "133",
    "href": "/apartments/133",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "64 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "17",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133.webp 2350w"
  },
  {
    "code": "134",
    "href": "/apartments/134",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B3",
    "floor": "1",
    "bedrooms": "2",
    "area": "67 m²",
    "terrace": "71 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "67 m²",
    "sortRelevant": "18",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134.webp 2350w"
  },
  {
    "code": "211",
    "href": "/apartments/211",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "2",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "61 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "19",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211.webp 2350w"
  },
  {
    "code": "212",
    "href": "/apartments/212",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "2",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "61 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "20",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212.webp 2350w"
  },
  {
    "code": "213",
    "href": "/apartments/213",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B1",
    "floor": "2",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "62 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "21",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213.webp 2350w"
  },
  {
    "code": "221",
    "href": "/apartments/221",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "61 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "22",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221.webp 2350w"
  },
  {
    "code": "222",
    "href": "/apartments/222",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "61 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "23",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222.webp 2350w"
  },
  {
    "code": "223",
    "href": "/apartments/223",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "61 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "24",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223.webp 2350w"
  },
  {
    "code": "224",
    "href": "/apartments/224",
    "category": "Penthouse duplex",
    "completion": "4Q 2026",
    "block": "B2",
    "floor": "1",
    "bedrooms": "2",
    "area": "60 m²",
    "terrace": "62 M²",
    "image": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224.webp",
    "filterType": "penthouse-duplex",
    "filterBed": "2",
    "sortArea": "60 m²",
    "sortRelevant": "25",
    "imageSrcset": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224-p-500.webp 500w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224-p-800.webp 800w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224-p-1080.webp 1080w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224-p-1600.webp 1600w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224-p-2000.webp 2000w, https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224.webp 2350w"
  }
];

/* ============================================================
   data/apartment-extras.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * GENERADO por scripts/extract-apartment-extras.mjs — no editar a mano.
 *
 * Campos por apartamento que viven sólo en el marcado de su ficha:
 * la rotación de la rosa de los vientos, la superficie de terraza, el
 * diagrama del bloque y el PDF descargable.
 */

export interface ApartmentExtras {
  /** Grados de rotación de la brújula del plano. */
  compassDeg: number | null;
  /** Etiqueta de terraza tal cual se muestra; "-" cuando no tiene. */
  terraceLabel: string | null;
  blockDiagram: string | null;
  brochure: string | null;
}

export const apartmentExtras: Record<string, ApartmentExtras> = {
  "111": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C111apt_compressed.pdf"
  },
  "112": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C112apt_compressed.pdf"
  },
  "113": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C113apt_compressed.pdf"
  },
  "114": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C114apt merged.pdf"
  },
  "121": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C121apt_compressed.pdf"
  },
  "122": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C122apt_compressed.pdf"
  },
  "123": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C123apt_compressed.pdf"
  },
  "124": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C124apt_compressed.pdf"
  },
  "131": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C131apt_compressed.pdf"
  },
  "132": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C132apt_compressed.pdf"
  },
  "133": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C133apt_compressed.pdf"
  },
  "134": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C134apt_compressed.pdf"
  },
  "211": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C211apt_compressed.pdf"
  },
  "212": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C212apt_compressed.pdf"
  },
  "213": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C213apt_compressed.pdf"
  },
  "221": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C221apt_compressed.pdf"
  },
  "222": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C222apt_compressed.pdf"
  },
  "223": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C223apt_compressed.pdf"
  },
  "224": {
    "compassDeg": -150,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-2.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C224apt_compressed.pdf"
  },
  "011": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C011apt_compressed.pdf"
  },
  "012": {
    "compassDeg": -165,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-1.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C012apt_compressed.pdf"
  },
  "031": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C031apt_compressed.pdf"
  },
  "032": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C032apt_compressed.pdf"
  },
  "033": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C033apt_compressed.pdf"
  },
  "034": {
    "compassDeg": -135,
    "terraceLabel": "29",
    "blockDiagram": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cdiagram_block-3.svg",
    "brochure": "https://puntacanadinnerinthesky.com/urbatrix/era/documents%5C034apt_compressed.pdf"
  }
};

/* ============================================================
   data/apartments.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5Cera-residence-ground-floor-basement.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d472_114_1.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c764aeb3252978e8751_11.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38d7_12.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7619f7f97bbc89d475_31.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76c1fcff139914bf10_32.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7622a1a12b6817e697_33.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c761bb0eb457f544c19_34.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76595803f21cba74c1_114_2.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a1575f46655e8c4e795ec64_era-residence-landscaping.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7668c723c7c1bc2fcd_124.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76f340b7301bf20530_131.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b4cc4746b16e875d_132.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c786da993be14f64ed5_133.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7844b8416906f3ffd8_134.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7827147ebfc4bc0f4b_211.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78b492933cc245ff76_212.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a6_213.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78ac4c78a4157613a3_221.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c789c5162a25ad50df3_222.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c788f01ce67d4e9365b_223.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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
    "heroImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a15153b797c328a9f2f5964_era-residence-terrace.webp",
    "layoutImage": "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c78a24587924e09d9dc_224.webp",
    "gallery": [
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c7661bb6f90181aecf7_111.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76e6cffe217741c680_112.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76afaf96dac2a461df_113.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c75afaf96dac2a4619d_121.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c762f8a29dd9c9b38ab_122.webp",
      "https://puntacanadinnerinthesky.com/urbatrix/era/images%5C6a345c76bd54890c94c2d280_123.webp"
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

/* ============================================================
   data/cta-images.ts
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Imágenes de fondo del CTA «Perfect sea views».
 *
 * El bloque se repite en 28 de las 29 páginas con el mismo marcado, pero
 * cada sección del sitio usa su propia foto. Se comprobó comparando el
 * original página a página: hay cuatro, no una.
 */

export interface CtaImage {
  src: string;
  srcSet: string;
}

/** Construye el srcset con las variantes que exporta Webflow. */
function responsive(name: string): CtaImage {
  return {
    src: `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}.webp`,
    srcSet: [
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-500.png 500w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-800.png 800w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-1080.png 1080w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}-p-1600.png 1600w`,
      `https://puntacanadinnerinthesky.com/urbatrix/era/images%5C${name}.webp 1920w`,
    ].join(', '),
  };
}

export const CTA_IMAGES = {
  home: responsive('img_cta_1920'),
  apartments: responsive('era-residence-garden-2'),
  contact: responsive('img_cam_09'),
  /** Las 25 fichas comparten la misma. */
  apartment: responsive('era-residence-ground-floor-2'),
} satisfies Record<string, CtaImage>;
