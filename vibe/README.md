# `vibe/` — el gemelo Vite para GoHighLevel Vibe

Este directorio **no es un segundo proyecto**: es el mismo sitio, envuelto
para que pueda vivir dentro del editor de código de GoHighLevel Vibe.

## Por qué existe

Vibe es un editor de sitios **por código** dentro de GoHighLevel, pero el
proyecto que hospeda es **React + Vite**, no Next.js. No hay App Router, ni
render de servidor, ni `public/`, ni `next/font`. Y la transferencia es
**pegar archivo por archivo** en su editor.

Pegar 72 archivos a ciegas y depurar dentro de GHL es carísimo. Por eso
primero se construye aquí el equivalente exacto y se verifica en local con
`npm run build` + navegador. Lo que se pega en Vibe es exactamente el
contenido de `vibe/src/`, ya comprobado.

## Qué es generado y qué está escrito a mano

`scripts/vibe-export.mjs` (en la raíz del repo) **borra y rehace** estas
carpetas desde la fuente de verdad del repo:

    vibe/src/components/   <-  components/
    vibe/src/lib/          <-  lib/
    vibe/src/data/         <-  data/
    vibe/src/styles/       <-  styles/
    vibe/src/types/        <-  types/
    vibe/index.html        <-  vibe/index.template.html

**No edites nada ahí dentro**: se pierde en la siguiente pasada. Llevan
cabecera «GENERADO». Si hay que cambiar un componente, se cambia en el repo
y se regenera.

Escrito a mano y nunca tocado por el script — es el cascarón que sustituye
a `app/` de Next:

| archivo | sustituye a |
|---|---|
| `index.template.html` | `metadata` + `viewport` de `app/layout.tsx`, y el GTM |
| `src/main.tsx` | el arranque de Next y los imports de CSS |
| `src/App.tsx` | `app/layout.tsx` + el árbol de rutas |
| `src/pages/*.tsx` | los cinco `app/**/page.tsx` (+ una 404 nueva) |
| `src/shims/next-navigation.ts` | `next/navigation` sobre React Router |
| `src/shims/page-meta.ts` | el `export const metadata` de cada página |
| `src/fonts.css` | `app/fonts.ts` (`next/font` -> Google Fonts) |

## Uso

```bash
# 1. Regenerar tras cualquier cambio en el repo
node scripts/vibe-export.mjs

# 2. Verificar en local (los assets salen del public/ del repo)
cd vibe && npm install && npm run dev     # http://localhost:5173

# 3. Comprobar que compila antes de tocar GHL
npm run build

# 4. Generar el árbol que se pega en Vibe, con los assets ya apuntando
#    al hosting externo
ASSET_BASE=https://host.ejemplo.com/era node scripts/vibe-export.mjs
```

El paso 4 avisa si alguna ruta de asset se quedó sin prefijar. Importa
porque dentro de Vibe una ruta `/images/…` es un **404 silencioso**: la
imagen no aparece y no hay error en consola que lo delate.

## Lo que este puerto pierde respecto a Next (asumido, no olvidado)

- **SSG y SEO por ruta.** Las 25 fichas se prerrenderizaban; aquí son una
  ruta dinámica de cliente. El HTML que ve un buscador o el desplegable de
  un enlace en WhatsApp es el `index.html` genérico para las 31 rutas.
- **Métricas de respaldo de las tipografías.** `next/font` generaba
  `@font-face` con métricas ajustadas que evitaban el salto de maquetación
  al cargar. Los fallbacks encadenados de `styles/theme.css` siguen ahí,
  pero el ajuste fino no.
- **Las fuentes se piden a Google en runtime**, ya no salen de nuestro
  dominio.

## Subir Bahía Mar a GHL Vibe (12-09-2026)

El cascarón (`src/App.tsx`, `src/pages/*`, `src/fonts.css`,
`index.template.html`) ya está al día con Bahía Mar: rutas `/villas` y
`/villas/:slug`, Italiana, metadatos del sitio y sin el GTM de ERA. El orden:

1. **Assets al host externo, ANTES que el código.** Vibe no aloja binarios y
   una imagen sin subir es un 404 mudo. `python scripts/vibe-assets-zip.py`
   deja en `bahia-mar-personalizacion/bahiamar-assets.zip` (228 MB, 564
   ficheros) sólo lo que la web referencia: `images/`, `videos/`,
   `documents/` e `icons/`. Se descomprime en el host en la carpeta que
   apunta `ASSET_BASE` de `scripts/vibe-preparar.mjs`
   (`…/urbatrix/bahiamar`); si va a otra carpeta, se cambia esa línea. Es
   un ZIP con `/` correctos: NO hace falta el `%5C` de ERA.
2. **Comprobar que el host responde:** `node scripts/audit-vibe-assets.mjs`
   pide cada fichero a la URL final (parte A) y avisa del que falte.
3. **Generar lo que se pega:** `node scripts/vibe-preparar.mjs` (export +
   bundle con las URLs de producción). Luego `node scripts/vibe-copiar.mjs
   --cambios` dice qué bundles difieren de lo que ya está en Vibe.
4. **Pegar en Vibe** como explica `vibe-bundle/CREAR-ARCHIVOS.md`: si el
   proyecto es nuevo, primero se piden a la IA los archivos vacíos (un solo
   mensaje, el del documento); después `node scripts/vibe-copiar.mjs N`
   copia cada bundle al portapapeles, Ctrl+A / Ctrl+V en el editor, y
   `--ok` para dejarlo registrado. Sin la IA de por medio en el contenido.
5. **Publicar y mirar** las cinco rutas en la vista previa de Vibe.

## Estado verificado (2026-08-12)

- `tsc --noEmit` limpio y `vite build` verde: 119 módulos, 748 KB JS,
  158 KB CSS.
- Render comprobado en navegador contra `next dev`: home, `/apartments` y
  la ficha `/apartments/011` coinciden.
- 41 imágenes en la home, **0 rotas**; 8 vídeos con sus fuentes `.webm` y
  `.mov`; las tres tipografías cargadas.
- Navegación de cliente y transiciones de página funcionando (el shim de
  `useRouter` sobre React Router mantiene la coreografía).

Los dos avisos de build sobre `MaisonNeueExt-*.woff2` son referencias
muertas heredadas del CSS de Webflow (fuentes de pago ya sustituidas).
Aparecen igual en el build de Next: no son del puerto.
