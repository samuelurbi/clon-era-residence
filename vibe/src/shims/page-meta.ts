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

import { useEffect } from 'react';

/** Título por defecto y plantilla, calcados de `app/layout.tsx`. */
const SITE = 'Bahía Mar';
const DEFAULT_TITLE = `${SITE} — Boutique Villas on the Samaná Peninsula, Dominican Republic`;

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
