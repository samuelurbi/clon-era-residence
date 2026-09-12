// Hojas de origen de los planos comerciales (las mismas que registró
// bahia-mar-personalizacion/inventario/villa-detail.json) y rutas de salida.
import { join } from 'node:path';

export const WORKTREE = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish';
export const FUENTE = join(WORKTREE, 'bahia-mar-personalizacion');
export const DESTINO = join(WORKTREE, 'public/images');
export const OUT_PREVIEW = join(WORKTREE, 'scratchpad/fix-1-plans');

const D002 = '00. BAHÍA MAR_RENDERS_AGOSTO-20260911T175532Z-1-002/00. BAHÍA MAR_RENDERS_AGOSTO';
const D000 = '00. BAHÍA MAR_RENDERS_AGOSTO';

/** origen relativo a bahia-mar-personalizacion/ (para el inventario). */
export const SHEETS = [
  { base: 'villa-coson-plan-1',    villa: 'coson',    label: 'First level',  rel: `${D002}/00. RENDERS VILLA A - BAHÍA MAR/00. PLANOS/COMERCIALES/A-01-PRIMER NIVEL.png` },
  { base: 'villa-coson-plan-2',    villa: 'coson',    label: 'Second level', rel: `${D002}/00. RENDERS VILLA A - BAHÍA MAR/00. PLANOS/COMERCIALES/A-02-SEGUNDO NIVEL.png` },
  { base: 'villa-helecho-plan-1',  villa: 'helecho',  label: 'First level',  rel: `${D000}/00. RENDERS VILLA B - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-01-PRIMER NIVEL.png` },
  { base: 'villa-helecho-plan-2',  villa: 'helecho',  label: 'Second level', rel: `${D000}/00. RENDERS VILLA B - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-02-SEGUNDO NIVEL.png` },
  { base: 'villa-remanso-plan-1',  villa: 'remanso',  label: 'First level',  rel: `${D002}/00. RENDERS VILLA C - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-01-PRIMER NIVEL.png` },
  { base: 'villa-ambar-plan-1',    villa: 'ambar',    label: 'First level',  rel: `${D002}/00. RENDERS VILLA D - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-01-PRIMER NIVEL.png` },
  { base: 'villa-carolina-plan-1', villa: 'carolina', label: 'First level',  rel: `${D002}/00. RENDERS VILLA E - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-01-PRIMER NIVEL.png` },
  { base: 'villa-carolina-plan-2', villa: 'carolina', label: 'Second level', rel: `${D002}/00. RENDERS VILLA E - BAHÍA MAR/00. PLANOS/PLANOS COMERCIALES/A-02-SEGUNDO NIVEL.png` },
].map((s) => ({ ...s, src: join(FUENTE, s.rel) }));
