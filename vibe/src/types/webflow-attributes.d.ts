/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * El sitio original construye sus hovers con atributos, no con clases:
 * un contenedor marcado `hover-btn` expone variables CSS y los hijos
 * marcados `hover="text"` o `hover="bg"` las consumen (ver el bloque
 * COMPONENTS en styles/components.css).
 *
 * Los atributos con guion (`hover-btn`, `data-*`) TypeScript ya los deja
 * pasar. `hover` no lleva guion, así que hay que declararlo o los 335 usos
 * del marcado portado darían error de tipos. Renombrarlo no es opción:
 * los selectores `[hover='text']` del CSS heredado dejarían de casar.
 */
import 'react';

declare module 'react' {
  interface HTMLAttributes<T> {
    hover?: string;
  }
  interface SVGAttributes<T> {
    hover?: string;
  }
}
