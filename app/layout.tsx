import type { Metadata, Viewport } from 'next';
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
import { LandscapeCover } from '@/components/layout/LandscapeCover';
import { CookieNotice } from '@/components/layout/CookieNotice';
import { fontVariables } from './fonts';
import '@/styles/globals.css';

/**
 * Dominio público del sitio. Al pasar a producción con el dominio del
 * cliente, cambiar aquí: alimenta las URLs absolutas de Open Graph.
 */
const SITE_URL = 'https://www.bahiamar.example'; // PROVISIONAL: falta el dominio real

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
  'Five villa typologies in a boutique beach resort community on the Samaná ' +
  'peninsula, combining contemporary tropical architecture, private pools and ' +
  'views over Samaná Bay, with the beach, the rainforest and Las Terrenas close by.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: '%s — Bahía Mar',
  },
  description: DESCRIPTION,
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Bahía Mar Residences & Beach Resort',
    /*
     * Sin `videos`: el /videos/open-graph.mp4 que enlazaba aquí es el del
     * sitio original (ERA), no hay equivalente de Bahía Mar. La imagen sí es
     * propia: se renderiza desde scratchpad/og-template.html.
     */
    images: [{ url: '/images/open-graph.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
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
    <html lang="en" className={fontVariables}>
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
          <LandscapeCover />
          <MasterPreloader />
          <Preloader />
          <CookieNotice />
          {/*
            `main.transition-container` es el contenedor que Barba sustituía
            en cada navegación. Aquí no se sustituye —el router de Next
            conserva el layout— pero sigue siendo el elemento que se funde en
            las transiciones de ruta, y la cabecera va DENTRO, como en el
            original.
          */}
          <main className="transition-container">
            <Header />
            <SmoothScroll>{children}</SmoothScroll>
          </main>
          <Animations />
          <PageTransitions />
          <BookCallModal />
          <MenuModal />
          <FloatingTips />
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
