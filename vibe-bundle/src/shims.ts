/* ============================================================
 *  SHIMS — 2 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/* ============================================================
   shims/next-navigation.ts
   ============================================================ */

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

/* ============================================================
   shims/page-meta.ts
   ============================================================ */

/* ============================================================
 *  Sustituto del `export const metadata` de Next.
 *
 *  El App Router resolvía los títulos y descripciones en el servidor.
 *  Vibe sirve una SPA: no hay render de servidor, así que el título se
 *  escribe desde el cliente al montar cada ruta.
 *
 *  LÍMITE CONOCIDO Y ASUMIDO: esto NO es equivalente en SEO. El HTML que
 *  recibe un buscador o el desplegable de un enlace en WhatsApp es el
 *  `index.html` genérico, idéntico para las 31 rutas; solo los
 *  rastreadores que ejecutan JS ven el título correcto. Las 25 fichas de
 *  apartamento eran SSG en Next y aquí dejan de serlo. Es el precio de
 *  Vibe, no un descuido.
 * ============================================================ */


/** Título por defecto y plantilla, calcados de `app/layout.tsx`. */
const SITE = 'ERA Residence';
const DEFAULT_TITLE = `${SITE} — Contemporary Mediterranean Residences in Estepona`;

type Meta = {
  /** Sin el sufijo del sitio: se añade aquí, como hacía `template`. */
  title?: string;
  description?: string;
};

/** Escribe (o crea) un `<meta name="…">` del `<head>`. */
function setMeta(name: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export function usePageMeta({ title, description }: Meta) {
  useEffect(() => {
    document.title = title ? `${title} — ${SITE}` : DEFAULT_TITLE;
    if (description) setMeta('description', description);
  }, [title, description]);
}
