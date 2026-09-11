# Paso 1: crear los archivos vacíos — UNA sola petición

En Vibe no hay botón «+»: los archivos nuevos se crean pidiéndoselos a su IA.
Lo pesado no es pegar el contenido —eso es Ctrl+A, Ctrl+V— sino tener 10
conversaciones distintas para ir creando rutas.

Se hacen **todas de una vez** con este mensaje. Pégalo en el chat de la IA de
Vibe tal cual:

---

```
Crea estos 10 archivos vacíos en el proyecto, con las rutas EXACTAS que te
doy. Cada uno con una sola línea de contenido: un comentario que diga
"pendiente". Voy a pegar yo el contenido real después.

  src/site.css
  src/fonts.css
  src/shims.ts
  src/data.ts
  src/types/webflow-attributes.d.ts
  src/animations.ts
  src/components-layout.tsx
  src/components-home.tsx
  src/components-pages.tsx
  src/pages.tsx

Importante mientras trabajas en este proyecto:

- No crees ningún archivo más de los que te he pedido, ni carpetas extra.
- No modifiques ningún archivo que ya exista.
- No reescribas, no reformatees, no optimices y no refactorices el código que
  yo pegue después. Si ves algo que te parece mejorable, dímelo en el chat en
  vez de cambiarlo.
- No generes imágenes con IA ni sustituyas ninguna URL de imagen. Las imágenes
  de este sitio son fotografías reales de una promoción inmobiliaria y planos
  de vivienda, servidas desde un host externo por URL absoluta. Si ves una que
  no carga, déjala como está y dímelo.
```

---

Cuando termine, comprueba en el árbol de archivos que están los 10 y que las
rutas son exactamente esas. Si se ha inventado alguna carpeta o ha cambiado un
nombre, dile: *«renombra X a la ruta exacta Y»*.

Los otros 3 (`index.html`, `src/App.tsx`, `src/main.tsx`) **ya existen** en el
proyecto: esos se sobrescriben directamente.

## Paso 2: pegar el contenido

Ya sin la IA de por medio. Desde tu terminal, en la carpeta del repo:

```bash
node scripts/vibe-copiar.mjs
```

Te lista los 13 y te dice por cuál vas. Luego, para cada uno:

```bash
node scripts/vibe-copiar.mjs 2      # copia src/site.css al portapapeles
```

Vas a Vibe, abres ese archivo, **Ctrl+A**, **Ctrl+V**, guardas. Y marcas:

```bash
node scripts/vibe-copiar.mjs 2 --ok
```

Y sigues con el 3. El script lleva la cuenta, así que puedes parar y retomar
mañana sin perderte.

## Paso 3: las dependencias

Esto sí necesita a la IA otra vez. Abre el `package.json` de Vibe, añade estas
cuatro líneas dentro de `dependencies`:

```json
"@gsap/react": "^2.1.2",
"gsap": "^3.15.0",
"lenis": "1.3.21",
"react-router-dom": "^7.9.1",
```

Y pídeselo, porque escribirlas **no las instala**:

> instala las dependencias que acabo de añadir al package.json

## Paso 4: comprobar

Abre el preview. Si algo falla:

| Lo que ves | Qué es |
|---|---|
| `Failed to resolve import "gsap"` | falta el paso 3 |
| `Cannot find module "@/data"` | falta el alias `@` → `./src` en `vite.config.ts` |
| Una sección en blanco a media página | falta uno de los 13, mira el listado |
| El sitio entero en blanco | mira si `src/App.tsx` y `src/main.tsx` se pegaron |
| Una imagen que no aparece | es un 404 mudo: comprueba la URL en la consola de red |
