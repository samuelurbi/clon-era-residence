// Escribe el inventario de este fix (mismos destinos que villa-detail.json,
// regenerados con recorte por hoja).
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { SHEETS, FUENTE } from './fix-1-plans-sources.mjs';

const NOMBRES = { coson: 'Villa Cosón', helecho: 'Villa Helecho', remanso: 'Villa Remanso', ambar: 'Villa Ámbar', carolina: 'Villa Carolina' };

const inventario = SHEETS.map((s) => ({
  destino: `/images/${s.base}.webp`,
  origen: s.rel,
  uso: `Ficha /villas/${s.villa} > plano principal «${NOMBRES[s.villa]} — ${s.label}» (escritorio y móvil, abre en lightbox${s.label === 'Second level' ? '; hoy VillaDetail.tsx solo pinta plans[0], el segundo nivel queda referenciado en data/villas.ts' : ''}). REGENERADO en fix-1 (LAYOUT-IMAGES-01): recorte detectado por hoja al dibujo completo, sin leyenda ni cajetín, relleno blanco a 1600:1505 y exportado a 2350 px con variantes -p-500/800/1080/1600/2000 (scratchpad/fix-1-plans-crop.mjs).`,
}));

const out = join(FUENTE, 'inventario', 'fix-1-public_images_villa_ambar_plan_1_webp_and_villa_remanso_plan_1_villa_carolina_plan_1_villa_carolina_plan_2_villa_coson_plan_1_2_villa_helecho_plan_1_2_referenced_from_data_villas_ts_rendered_by_components_villas_VillaDetail_tsx_.json');
writeFileSync(out, JSON.stringify(inventario, null, 2) + '\n');
console.log(`${inventario.length} entradas -> ${out}`);
