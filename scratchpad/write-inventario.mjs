// Genera bahia-mar-personalizacion/inventario/villa-detail.json: todo lo que
// pintan VillaDetail y VillaCard, con su origen. Galería y hero salen del
// inventario que escribió scripts/villas-assets.mjs; los planos se
// identifican por nombre en 00. PLANOS/(PLANOS )COMERCIALES.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
const FUENTE = join(ROOT, 'bahia-mar-personalizacion');
const previo = JSON.parse(readFileSync(join(FUENTE, 'INVENTARIO-IMAGENES.json'), 'utf8'));

const NOMBRES = { coson: 'Villa Cosón', helecho: 'Villa Helecho', remanso: 'Villa Remanso', ambar: 'Villa Ámbar', carolina: 'Villa Carolina' };
const LETRA = { coson: 'A', helecho: 'B', remanso: 'C', ambar: 'D', carolina: 'E' };
const NIVELES = { coson: 2, helecho: 2, remanso: 1, ambar: 1, carolina: 2 };
const VARIANTES = 'variantes -p-500/800/1080/1600/2000';

const out = [];

for (const slug of Object.keys(NOMBRES)) {
  const nombre = NOMBRES[slug];
  const letra = LETRA[slug];

  // Planos: la carpeta se llama COMERCIALES en la villa A y PLANOS COMERCIALES en el resto.
  const carpeta = letra === 'A' ? '00. PLANOS/COMERCIALES' : '00. PLANOS/PLANOS COMERCIALES';
  const villaDir = `00. BAHÍA MAR_RENDERS_AGOSTO/00. RENDERS VILLA ${letra} - BAHÍA MAR/${carpeta}`;
  const planos = [['plan-1', 'A-01-PRIMER NIVEL.png', 'First level'], ...(NIVELES[slug] === 2 ? [['plan-2', 'A-02-SEGUNDO NIVEL.png', 'Second level']] : [])];
  for (const [rol, fichero, label] of planos) {
    // Localiza en qué trozo del Drive está esa copia (misma ruta relativa).
    const trozos = ['', '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/', '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-003/', '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-004/'];
    const hallado = trozos.map((t) => `${t}${villaDir}/${fichero}`).find((p) => existsSync(join(FUENTE, p)));
    out.push({
      destino: `/images/villa-${slug}-${rol}.webp`,
      origen: hallado ?? `${villaDir}/${fichero} (no localizado en el árbol actual)`,
      uso: `Ficha /villas/${slug} > plano principal «${nombre} — ${label}» (escritorio y móvil, abre en lightbox). Procesado en una sesión anterior; origen identificado por nombre.`,
    });
  }

  // Hero: tarjeta del listado y del bloque «Other villas» de las otras fichas.
  const hero = previo.find((e) => e.villa === slug && e.rol === 'hero');
  out.push({
    destino: hero.destino,
    origen: hero.origen,
    uso: `Tarjeta de ${nombre} (VillaCard) en /villas y en el bloque «Other villas» de las otras cuatro fichas; ${VARIANTES}.`,
  });

  // Galería: g1..g4 exteriores, i1..i4 interiores.
  for (const rol of ['g1', 'g2', 'g3', 'g4', 'i1', 'i2', 'i3', 'i4']) {
    const e = previo.find((x) => x.villa === slug && x.rol === rol);
    const tipo = rol.startsWith('g') ? 'exterior' : 'interior';
    out.push({
      destino: e.destino,
      origen: e.origen,
      uso: `Ficha /villas/${slug} > galería (${tipo} ${rol[1]}): columna bajo el plano en escritorio y carrusel horizontal en móvil, con lightbox; ${VARIANTES}. En escritorio sustituye a las tres fotos de ERA que quedaban.`,
    });
  }
}

writeFileSync(join(FUENTE, 'inventario/villa-detail.json'), JSON.stringify(out, null, 2) + '\n');
console.log(`${out.length} entradas escritas`);
const noLocalizados = out.filter((e) => e.origen.includes('no localizado'));
if (noLocalizados.length) console.log('NO LOCALIZADOS:', noLocalizados.map((e) => e.destino));
