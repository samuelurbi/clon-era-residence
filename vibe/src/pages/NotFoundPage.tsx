/* ============================================================
 *  404.
 *
 *  El repo no portó la 404 del original (no estaba entre las 29
 *  páginas descargadas), así que esto es NUEVO, no un port. Se queda
 *  deliberadamente mínima y escrita sobre los design tokens del sitio,
 *  no sobre clases de Webflow: cuando se decida la 404 de verdad, se
 *  sustituye entera sin arrastrar nada.
 * ============================================================ */

import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { CRUMB } from '@/data/crumbs';
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';
import { useLang } from '@/lib/use-lang';
import { localize } from '@/lib/i18n';

export function NotFoundPage() {
  const lang = useLang();
  const es = lang === 'es';
  /* El servidor responde 200 a cualquier ruta: sin `noindex` Google la tomaría por página real. */
  usePageMeta({ title: es ? 'Página no encontrada' : 'Page not found', noindex: true });

  return (
    <>
      <Breadcrumbs trail={[CRUMB.home, { label: { en: 'Not found', es: 'No encontrada' } }]} />
      <section
        style={{
          background: 'var(--_colors---other--bg)',
          color: 'var(--_colors---base-1000--primary)',
          padding: 'var(--_units---u-160) var(--_special-units---offset-l)',
          minHeight: '60svh',
        }}
      >
        <h1 style={{ fontFamily: 'var(--_fonts---font-display)' }}>
          {es ? 'Página no encontrada' : 'Page not found'}
        </h1>
        {es ? (
          <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
            La página que buscaba no está aquí.{' '}
            <a href={localize('/villas', lang)}>Vea las villas</a> o{' '}
            <a href={localize('/', lang)}>vuelva al inicio</a>.
          </p>
        ) : (
          <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
            The page you were looking for is not here.{' '}
            <a href="/villas">Browse the villas</a> or{' '}
            <a href="/">go back to the homepage</a>.
          </p>
        )}
      </section>
      <BookACall />
    </>
  );
}
