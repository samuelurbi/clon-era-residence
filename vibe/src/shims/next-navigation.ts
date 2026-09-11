/* ============================================================
 *  Shim de `next/navigation` sobre React Router.
 *
 *  Vibe hospeda un proyecto React + Vite: `next/navigation` no existe.
 *  Los cuatro componentes del repo que lo importan (Header, Animations,
 *  PageTransitions, SmoothScroll) NO se tocan: `vibe-export.mjs` les
 *  reapunta el import aquí, y así el código que se pega en GHL sigue
 *  siendo el mismo que el del repo.
 *
 *  Solo se implementa lo que el sitio usa de verdad —comprobado con
 *  grep sobre `components/` y `lib/`—: `usePathname` y el `push` de
 *  `useRouter`. El resto de métodos está por compatibilidad de forma.
 * ============================================================ */

import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/** Equivalente de `usePathname()`: la ruta actual, sin query ni hash. */
export function usePathname(): string {
  return useLocation().pathname;
}

/**
 * Equivalente reducido de `useRouter()`.
 *
 * El objeto se memoiza porque `PageTransitions` lo lleva en las
 * dependencias de su `useEffect` (`[router, pathname]`): si cambiara de
 * identidad en cada render, el listener de clics se desmontaría y se
 * volvería a montar sin parar. `navigate` de React Router ya es estable,
 * así que el `useMemo` basta.
 */
export function useRouter() {
  const navigate = useNavigate();

  return useMemo(
    () => ({
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
      back: () => navigate(-1),
      forward: () => navigate(1),
      /* En Next fuerzan una recarga de datos del servidor; aquí no hay
         servidor que consultar, así que no hacen nada. */
      refresh: () => {},
      prefetch: () => {},
    }),
    [navigate],
  );
}
