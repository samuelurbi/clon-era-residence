# Manifiesto de pegado — versión agrupada

**13 archivos** en vez de 76. Marca cada uno al pegarlo.

## Por qué esta versión y no la de `vibe/`

En GoHighLevel Vibe no hay botón «+» para crear archivos: cada archivo nuevo
hay que pedírselo a su IA de uno en uno, y esa IA reinterpreta el código si la
dejas. Se intentó primero escribir por su API interna, pero su limitador
devuelve **429** a cualquier tanteo. Así que se reduce el número de archivos.

`scripts/vibe-bundle.mjs` concatena los módulos por grupos. Verificado que el
resultado es equivalente: `tsc` limpio, build verde y el **DOM renderizado
coincide carácter a carácter** con el de la versión sin agrupar.

La fuente de verdad sigue siendo el repo, un archivo por componente. Esto es
solo el **formato de entrega**. Dentro de cada archivo, los separadores dicen
de qué módulo del repo viene cada bloque.

---

## 0. Dependencias — ANTES que el código

Añade estas líneas al `package.json` de Vibe (solo estas, no pegues el
`package.json` entero):

```json
"@gsap/react": "^2.1.2",
"gsap": "^3.15.0",
"lenis": "1.3.21",
"react-router-dom": "^7.9.1",
```

Y pídeselo a la IA, porque escribirlas **no las instala**:

> instala las dependencias que acabo de añadir al package.json

Espera a que confirme antes de seguir.

## 1. Configuración

- [ ] Comprobar que el alias `@` → `./src` está en `vite.config.ts` y en los
      `paths` del `tsconfig`. **Sin eso no resuelve ni un import.**
- [ ] Comprobar que **no** hay `tailwind.config.*` ni `components.json`.
- [ ] `index.html` · 5 KB — meta, Open Graph, favicons, tipografías y GTM

## 2. Estilos  (2)

- [ ] `src/site.css` · **166 KB** — las 5 capas del port en su orden de cascada
- [ ] `src/fonts.css` · 2 KB — las tres variables de tipografía

## 3. Base, sin dependencias entre sí  (3)

- [ ] `src/shims.ts` · 5 KB — sustituye `next/navigation` y el `metadata` de Next
- [ ] `src/data.ts` · 74 KB — las 25 fichas, tarjetas, extras e imágenes de CTA
- [ ] `src/types/webflow-attributes.d.ts` · 1 KB — atributos `data-*` de Webflow

## 4. Capa de animación  (1)

- [ ] `src/animations.ts` · **141 KB** — los 20 módulos de GSAP + Lenis

## 5. Componentes  (3)

Van partidos en tres porque juntos son 362 KB y el editor de Vibe corre dentro
del navegador. Ninguno importa a otro, así que el orden entre ellos da igual.

- [ ] `src/components-layout.tsx` · 128 KB — cabecera, modales, preloader, providers
- [ ] `src/components-home.tsx` · 116 KB — las 11 secciones de la home
- [ ] `src/components-pages.tsx` · 119 KB — apartamentos, secciones compartidas, contacto

## 6. Montaje — lo último  (3)

- [ ] `src/pages.tsx` · 8 KB — las 5 rutas y la 404
- [ ] `src/App.tsx` · 3 KB — el layout y el árbol de rutas
- [ ] `src/main.tsx` · 1 KB — el punto de entrada

Al pegar `App.tsx` el árbol queda montado y el preview intentará renderizar el
sitio entero.

---

## Al terminar

1. Abre el **preview**. Errores esperables y su causa:
   - *Failed to resolve import "x"* → la dependencia no se instaló (paso 0)
   - *Cannot find module "@/…"* → falta el alias (paso 1)
   - Una sección en blanco → falta uno de los tres archivos de componentes

2. **Comprueba las imágenes.** Vienen del host externo por URL absoluta. Si
   una falla es un **404 mudo**: no aparece y la consola no dice nada.

3. **No dejes que la IA sustituya imágenes.** Vibe lo hace por su cuenta con
   los placeholders; aquí son renders reales de la promoción y planos de
   vivienda. Si te ofrece «mejorarlas», dile que no.

4. **Deuda conocida:** las URLs de los assets llevan `%5C` en vez de `/` porque
   el primer ZIP se subió con los nombres mal. Funciona, pero si algún día
   entra un CDN por delante hay que subir `era-assets-v2.zip` y regenerar sin
   `ASSET_SEP`.

## Para regenerar

```bash
ASSET_BASE=https://puntacanadinnerinthesky.com/urbatrix/era \
ASSET_SEP='%5C' node scripts/vibe-export.mjs

node scripts/vibe-bundle.mjs
```
