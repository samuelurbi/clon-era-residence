/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
'use client';

/**
 * Remonta el cromo compartido (cabecera, menú, modales, tips) al cambiar de
 * idioma.
 *
 * Las páginas se remontan solas porque cambian de ruta; el cromo vive en el
 * layout y React solo actualizaría sus textos en su sitio. Eso no vale aquí:
 * SplitText ya ha troceado esos textos en `<div>` por letra, y React
 * escribiría sobre nodos que ya no son los suyos. Con la `key` del idioma
 * se tira el árbol entero y se monta limpio; la capa de animación, que se
 * reinicia en el mismo cambio de `pathname`, lo trocea de nuevo.
 */

import { Fragment, type ReactNode } from 'react';
import { useLang } from '@/lib/use-lang';

export function LangKeyed({ children }: { children: ReactNode }) {
  const lang = useLang();
  return <Fragment key={lang}>{children}</Fragment>;
}
