/**
 * Idioma de la página actual, leído de la URL (ver lib/i18n.ts).
 *
 * Solo sirve en componentes de cliente: depende de `usePathname`. En el
 * gemelo de Vibe ese import se reapunta al shim sobre React Router, así que
 * el mismo componente funciona allí sin tocarlo.
 */

import { usePathname } from 'next/navigation';
import { langFromPath, type Lang } from '@/lib/i18n';

export function useLang(): Lang {
  return langFromPath(usePathname() || '/');
}
