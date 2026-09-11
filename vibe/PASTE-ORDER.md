# Manifiesto de pegado — GoHighLevel Vibe

GENERADO por `scripts/vibe-paste-order.mjs`. Regenéralo si cambia el árbol.

Marca cada archivo al pegarlo. Un archivo olvidado **no da un error claro**:
da una sección rota a media página, que es mucho más caro de encontrar.

## 0. Dependencias — ANTES que el código

Añade estas líneas al `package.json` de Vibe. **NO pegues el package.json
entero**: el local trae extras que allí no pintan nada.

```json
"@gsap/react": "^2.1.2",
"gsap": "^3.15.0",
"lenis": "1.3.21",
"react-router-dom": "^7.9.1",
```

Y luego **pídeselo a la IA de Vibe**, porque editar el `package.json` solo
las lista, no las instala:

> instala las dependencias que acabo de añadir al package.json

Espera a que confirme (habrá actualizado `bun.lock`) antes de seguir.

## 1. Configuración

Comprueba que el alias `@` → `./src` existe en `vite.config.ts` y en los
`paths` del `tsconfig`. **Sin eso no resuelve ni un import** — todo el
código pegado usa `@/components/…`, `@/lib/…`, `@/data/…`.

- [ ] `index.html`  — lleva meta, Open Graph, favicons, tipografías y el GTM

## 2. Estilos  (5)

El orden de `globals.css` importa: es la cascada de 5 capas del port.

- [ ] `src/styles/components.css`  · 16 KB
- [ ] `src/styles/globals.css`  · 2 KB
- [ ] `src/styles/theme.css`  · 4 KB
- [ ] `src/styles/tokens.css`  · 18 KB
- [ ] `src/styles/webflow.css`  · 125 KB

## 3. Datos  (4)

Ficheros grandes y planos. `apartments.ts` lleva las 25 fichas.

- [ ] `src/data/apartment-cards.ts`  · 28 KB
- [ ] `src/data/apartment-extras.ts`  · 7 KB
- [ ] `src/data/apartments.ts`  · 36 KB
- [ ] `src/data/cta-images.ts`  · 1 KB

## 4. Tipos  (1)

Declaraciones de los atributos `data-*` que usa el marcado de Webflow.

- [ ] `src/types/webflow-attributes.d.ts`  · 1 KB

## 5. Capa de animación  (20)

GSAP + ScrollTrigger + Lenis. No depende de React salvo en los providers.

- [ ] `src/lib/animations/accordion.ts`  · 6 KB
- [ ] `src/lib/animations/chrome.ts`  · 16 KB
- [ ] `src/lib/animations/constants.ts`  · 2 KB
- [ ] `src/lib/animations/filters.ts`  · 11 KB
- [ ] `src/lib/animations/gsap.ts`  · 1 KB
- [ ] `src/lib/animations/home-flow.ts`  · 17 KB
- [ ] `src/lib/animations/image-zoom.ts`  · 8 KB
- [ ] `src/lib/animations/interactions.ts`  · 12 KB
- [ ] `src/lib/animations/lightbox.ts`  · 5 KB
- [ ] `src/lib/animations/local-scroll.ts`  · 2 KB
- [ ] `src/lib/animations/misc.ts`  · 2 KB
- [ ] `src/lib/animations/modals.ts`  · 8 KB
- [ ] `src/lib/animations/parallax.ts`  · 3 KB
- [ ] `src/lib/animations/preloader.ts`  · 5 KB
- [ ] `src/lib/animations/reveal.ts`  · 13 KB
- [ ] `src/lib/animations/scroll-lock.ts`  · 4 KB
- [ ] `src/lib/animations/slider.ts`  · 7 KB
- [ ] `src/lib/animations/tabs-hilight.ts`  · 3 KB
- [ ] `src/lib/animations/tabs.ts`  · 4 KB
- [ ] `src/lib/animations/ui.ts`  · 7 KB

## 6. Componentes  (35)

El grueso. Van DESPUÉS de lib y data, que es lo que importan.

- [ ] `src/components/apartments/ApartmentArch.tsx`  · 2 KB
- [ ] `src/components/apartments/ApartmentCard.tsx`  · 8 KB
- [ ] `src/components/apartments/ApartmentDetail.tsx`  · 24 KB
- [ ] `src/components/apartments/ApartmentsListing.tsx`  · 20 KB
- [ ] `src/components/apartments/LightboxModal.tsx`  · 7 KB
- [ ] `src/components/apartments/RelatedApartments.tsx`  · 2 KB
- [ ] `src/components/home/AmenitiesIntro.tsx`  · 6 KB
- [ ] `src/components/home/ApartmentsPreview.tsx`  · 16 KB
- [ ] `src/components/home/Arch.tsx`  · 6 KB
- [ ] `src/components/home/Architecture.tsx`  · 6 KB
- [ ] `src/components/home/Concept.tsx`  · 15 KB
- [ ] `src/components/home/Developer.tsx`  · 12 KB
- [ ] `src/components/home/Hero.tsx`  · 13 KB
- [ ] `src/components/home/Location.tsx`  · 9 KB
- [ ] `src/components/home/Pillars.tsx`  · 12 KB
- [ ] `src/components/home/PillarsMedia.tsx`  · 4 KB
- [ ] `src/components/home/SpaceToLive.tsx`  · 14 KB
- [ ] `src/components/layout/BookCallModal.tsx`  · 46 KB
- [ ] `src/components/layout/Breadcrumbs.tsx`  · 1 KB
- [ ] `src/components/layout/CookieNotice.tsx`  · 5 KB
- [ ] `src/components/layout/FloatingTips.tsx`  · 12 KB
- [ ] `src/components/layout/Header.tsx`  · 31 KB
- [ ] `src/components/layout/LandscapeCover.tsx`  · 1 KB
- [ ] `src/components/layout/MasterPreloader.tsx`  · 1 KB
- [ ] `src/components/layout/MenuModal.tsx`  · 7 KB
- [ ] `src/components/layout/Preloader.tsx`  · 8 KB
- [ ] `src/components/layout/ScrollRail.tsx`  · 2 KB
- [ ] `src/components/pages/ComingSoonMain.tsx`  · 3 KB
- [ ] `src/components/pages/ContactMain.tsx`  · 19 KB
- [ ] `src/components/providers/Animations.tsx`  · 5 KB
- [ ] `src/components/providers/PageTransitions.tsx`  · 5 KB
- [ ] `src/components/providers/SmoothScroll.tsx`  · 3 KB
- [ ] `src/components/sections/Amenities.tsx`  · 17 KB
- [ ] `src/components/sections/BookACall.tsx`  · 11 KB
- [ ] `src/components/sections/SeaViewsCta.tsx`  · 4 KB

## 7. Shims  (2)

Sustituyen `next/navigation` y el `metadata` de Next.

- [ ] `src/shims/next-navigation.ts`  · 2 KB
- [ ] `src/shims/page-meta.ts`  · 2 KB

## 8. Páginas y cascarón  (6)

Lo último: son las que unen todo lo anterior.

- [ ] `src/pages/ApartmentPage.tsx`  · 3 KB
- [ ] `src/pages/ApartmentsPage.tsx`  · 1 KB
- [ ] `src/pages/ComingSoonPage.tsx`  · 1 KB
- [ ] `src/pages/ContactPage.tsx`  · 1 KB
- [ ] `src/pages/HomePage.tsx`  · 1 KB
- [ ] `src/pages/NotFoundPage.tsx`  · 1 KB

## 9. Entrada  (3)

Lo último de todo: al pegar `App.tsx` el árbol queda montado y el preview
intentará renderizar el sitio entero.

- [ ] `src/main.tsx`  · 1 KB
- [ ] `src/App.tsx`  · 4 KB
- [ ] `src/fonts.css`  · 1 KB

---

**Total: 76 archivos** (más `index.html` y las 4 dependencias).

## Al terminar

1. Abre el **preview**. Errores esperables y su causa:
   - *Failed to resolve import "x"* → la dependencia no se instaló (paso 0).
   - *Cannot find module "@/…"* → falta el alias (paso 1).
   - Una sección en blanco → falta un archivo de esa sección.
2. Comprueba que las imágenes cargan. Vienen del host externo por URL
   absoluta; si una falla es un **404 mudo**, sin rastro en consola.
3. **No dejes que la IA sustituya imágenes.** Son renders reales de la
   promoción y planos de vivienda, no placeholders.

