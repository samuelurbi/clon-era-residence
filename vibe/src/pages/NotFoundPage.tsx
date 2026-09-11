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
import { BookACall } from '@/components/sections/BookACall';
import { usePageMeta } from '@/shims/page-meta';

export function NotFoundPage() {
  usePageMeta({ title: 'Page not found' });

  return (
    <>
      <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Not found' }]} />
      <section
        style={{
          background: 'var(--_colors---other--bg)',
          color: 'var(--_colors---base-1000--primary)',
          padding: 'var(--_units---u-160) var(--_special-units---offset-l)',
          minHeight: '60svh',
        }}
      >
        <h1 style={{ fontFamily: 'var(--_fonts---font-display)' }}>Page not found</h1>
        <p style={{ fontFamily: 'var(--_fonts---font-body)' }}>
          The page you were looking for is not here.{' '}
          <a href="/apartments">Browse the apartments</a> or{' '}
          <a href="/">go back to the homepage</a>.
        </p>
      </section>
      <BookACall />
    </>
  );
}
