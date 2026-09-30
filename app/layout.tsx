import type { Metadata, Viewport } from 'next';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import Script from 'next/script';
import { SmoothScroll } from '@/components/providers/SmoothScroll';
import { Animations } from '@/components/providers/Animations';
import { PageTransitions } from '@/components/providers/PageTransitions';
import { Header } from '@/components/layout/Header';
import { MenuModal } from '@/components/layout/MenuModal';
import { BookCallModal } from '@/components/layout/BookCallModal';
import { FloatingTips } from '@/components/layout/FloatingTips';
import { Preloader } from '@/components/layout/Preloader';
import { MasterPreloader } from '@/components/layout/MasterPreloader';
import { LangSwitcher } from '@/components/layout/LangSwitcher';
import { LangKeyed } from '@/components/providers/LangKeyed';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

/**
 * Dominio público del sitio. Al pasar a producción con el dominio del
 * cliente, cambiar aquí: alimenta las URLs absolutas de Open Graph.
 */
const SITE_URL = 'https://bahiamarterrenas.com';

/**
 * Teléfono en horizontal = web de escritorio encajada en pantalla (ver el
 * propio archivo). Se lee de disco y va EN LÍNEA en el <head>: tiene que
 * cambiar la etiqueta viewport antes del primer pintado. El gemelo de Vibe
 * inyecta el mismo archivo en su index.html (scripts/vibe-export.mjs).
 */
function phoneLandscapeScript(): string {
  // Dentro de una función y no al cargar el módulo: así `next dev` sirve
  // la versión actual del archivo sin reiniciar. En el build da igual.
  return readFileSync(join(process.cwd(), 'lib', 'phone-landscape.inline.js'), 'utf8');
}

/**
 * Contenedor de Google Tag Manager.
 *
 * VACÍO A PROPÓSITO. El valor que venía aquí (GTM-WMDRV3P6) es el del
 * sitio original de ERA Residence: dejarlo puesto mandaría la analítica
 * de Bahía Mar a la cuenta de otro promotor. Cuando el cliente dé su
 * contenedor, se pone aquí y el script vuelve solo.
 */
const GTM_ID = '';

const TITLE = 'Bahía Mar — Boutique Villas on the Samaná Peninsula, Dominican Republic';
const DESCRIPTION =
  'Luxury villas in Las Terrenas, Samaná (Dominican Republic): private pools, ' +
  'bay views and eco-friendly design between beach and mountain. Discover Bahía Mar.';

/** Título para compartir (OG / Twitter). El de la pestaña es TITLE. */
const SHARE_TITLE = 'Bahía Mar® Boutique Villas on the Samaná, Dominican Republic';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Bahía Mar',
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: SHARE_TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Bahía Mar Residences & Beach Resort',
    images: [{ url: '/images/open-graph.webp', width: 1200, height: 630 }],
    videos: [{ url: '/videos/open-graph.mp4', type: 'video/mp4', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SHARE_TITLE,
    description: DESCRIPTION,
    images: ['/images/open-graph.webp'],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/icons/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/favicon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#efeee9',
};

/*
 * `fontVariables` publica --font-display / --font-body / --font-accent en el
 * <html>; styles/theme.css las engancha a los tokens que consume el CSS
 * heredado de Webflow. Las fuentes se auto-hospedan (ver app/fonts.ts): ya no
 * hay kit de Adobe atado a un dominio concreto.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /*
      suppressHydrationWarning: el script del <head> añade la clase
      `phone-landscape` al <html> antes de hidratar, y el switcher de idioma
      le cambia el `lang`. Solo afecta a los atributos de esta etiqueta.
    */
    <html lang="en" className={fontVariables} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: phoneLandscapeScript() }} />
      </head>
      <body className="body">
        {/*
          `.transition-wrapper` es el envoltorio que el original marcaba con
          data-barba="wrapper". Barba sobra —el router de Next hace las
          transiciones—, pero la clase la usa el CSS heredado, así que se queda.
        */}
        <div className="transition-wrapper">
          {/*
            El orden es el del original: las cortinas van ANTES que nada,
            porque el master-preloader tapa la página hasta que arranca el JS.
          */}
          {/* Sin cortina de «gire el teléfono»: en horizontal se ve la web
              (ver «Móvil en horizontal» en styles/theme.css). */}
          <MasterPreloader />
          <Preloader />
          {/* Sin aviso de cookies: se quitó en GHL (2026-09-24). El
              componente sigue en components/layout/CookieNotice.tsx. */}
          {/*
            `main.transition-container` es el contenedor que Barba sustituía
            en cada navegación. Aquí no se sustituye —el router de Next
            conserva el layout— pero sigue siendo el elemento que se funde en
            las transiciones de ruta, y la cabecera va DENTRO, como en el
            original.
          */}
          <main className="transition-container">
            <LangKeyed>
              <Header />
            </LangKeyed>
            <SmoothScroll>{children}</SmoothScroll>
          </main>
          <Animations />
          <PageTransitions />
          {/* El cromo se remonta al cambiar de idioma: ver LangKeyed. */}
          <LangKeyed>
            <BookCallModal />
            <MenuModal />
            <FloatingTips />
          </LangKeyed>
          <LangSwitcher />
        </div>

        {/*
          GTM: `afterInteractive` lo saca de la ruta crítica de render.

          Sin contenedor NO se inyecta nada. Si se dejara el script con el
          id vacío, cada visita pediría un gtm.js?id= que devuelve error, y
          además el <noscript> pintaría un iframe roto.
        */}
        {GTM_ID && (
          <>
            <Script id="gtm" strategy="afterInteractive">
              {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
            </Script>
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{ display: 'none', visibility: 'hidden' }}
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
