# Análisis técnico — era-residence.com

> Sitio original: https://www.era-residence.com/
> Analizado el 2026-08-10 (descarga directa del HTML + headers + sitemap).

---

## Resumen en una línea

Es un **sitio Webflow** de 29 páginas estáticas, con navegación tipo SPA vía **Barba.js** y animaciones con **GSAP + Lenis + Lottie**. No es un "único archivo HTML" — esa es la impresión que da Barba al no recargar nunca el documento.

---

## 1. Hosting e infraestructura

Confirmado por los headers de respuesta:

| Señal | Valor |
|---|---|
| Plataforma | Webflow (hosting propio) |
| CDN de assets | `cdn.prod.website-files.com` |
| Proxy / edge | Cloudflare (`CF-Ray`, `CF-Cache-Status: HIT`) |
| Región | `x-wf-region: us-east-1` |
| Site ID | `6a068da7ad91b057365bf967` |
| Page ID (home) | `6a068da7ad91b057365bf968` |
| Última publicación | `Mon Jul 20 2026 01:18:11 GMT+0000` |
| HSTS | `max-age=31536000` |
| Cache edge | `surrogate-control: max-age=432000` (5 días) |

Headers que delatan Webflow: `x-wf-region`, `x-lambda-id`, `surrogate-key` con el pageId, y los atributos `data-wf-domain` / `data-wf-page` / `data-wf-site` en el `<html>`.

---

## 2. El malentendido del "archivo único"

Tres cosas se combinan y crean la ilusión:

### 2.1 Barba.js — la causa principal

La home carga `@barba/core` y marca el DOM así:

```
data-barba="wrapper"
data-barba="container"
data-barba-namespace="home"
```

Barba intercepta los clics de navegación, hace `fetch` del HTML de destino y **reemplaza solo el contenido del contenedor**. El navegador nunca ejecuta una carga completa de documento, así que en DevTools ves siempre el mismo `document` aunque la URL cambie. Parece una SPA de un archivo; por debajo son HTML estáticos independientes.

### 2.2 Webflow compila TODO el CSS en un archivo

Esto sí es literal:

```
era-residence.webflow.shared.c9555a234.min.css  →  127.610 bytes (~125 KB)
```

Un único `.css` con los estilos de las 29 páginas. Es cómo funciona Webflow por diseño, no una decisión del desarrollador. Lleva SRI (`integrity="sha384-..."`) y `crossorigin="anonymous"`.

### 2.3 La home es un scroll largo y el DOM va aplanado

Webflow exporta el árbol completo sin componentes ni partials. La home tiene:

- **223.581 bytes** de HTML
- **41** etiquetas `<img>`
- **11** bloques `<style>` embebidos (custom code por página/sección)

220 KB de HTML plano es normal para una landing de este tipo.

---

## 3. Stack front-end

Todo cargado desde CDNs externos:

| Librería | Versión | Origen | Para qué |
|---|---|---|---|
| jQuery | 3.5.1 | `d3e54v103j8qbb.cloudfront.net` | dependencia de Webflow |
| webflow.js | `a0aa6ca1.b7683852b8a60d8e` | CDN Webflow | interacciones nativas WF |
| @barba/core | latest (sin pin) | unpkg | transiciones entre páginas |
| GSAP | 3.15 | jsDelivr | motor de animación |
| GSAP ScrollTrigger | 3.15 | jsDelivr | animaciones al scroll |
| GSAP SplitText | 3.15 | jsDelivr | animación de texto por letra/línea |
| GSAP CustomEase | 3.15 | jsDelivr | curvas de easing propias |
| Lenis | 1.3.21 | unpkg | smooth scroll (JS + su propio CSS) |
| lottie-web | 5.12.2 | jsDelivr | animaciones vectoriales |
| Typekit | `pig8glj` | use.typekit.net | fuentes Adobe |

Hojas de estilo (2 en total):
1. `era-residence.webflow.shared.c9555a234.min.css` — el CSS global de Webflow
2. `https://unpkg.com/lenis@1.3.21/dist/lenis.css` — el CSS de Lenis

⚠️ **Nota:** `@barba/core` se carga **sin versión fijada** desde unpkg. Es un riesgo de rotura si publican un major.

---

## 4. Mapa completo del sitio (29 URLs)

### Páginas estáticas (4)

```
/
/contact
/apartments
/coming-soon
```

### Fichas de apartamento (25)

Items de una **CMS Collection** de Webflow, todas bajo `/apartments/<código>`:

| Grupo | Códigos | Nº |
|---|---|---|
| `01x` | 011, 012 | 2 |
| `03x` | 031, 032, 033, 034 | 4 |
| `11x` | 111, 112, 113, 114 | 4 |
| `12x` | 121, 122, 123, 124 | 4 |
| `13x` | 131, 132, 133, 134 | 4 |
| `21x` | 211, 212, 213 | 3 |
| `22x` | 221, 222, 223, 224 | 4 |

**Lectura del código:** parece `planta / bloque / unidad` — primer dígito = planta (0, 1, 2). La numeración **no es uniforme**: falta el grupo `02x` entero, el `21x` tiene 3 y no 4, y no existe `13x` en planta 2. O hay unidades sin publicar, o el esquema es específico del proyecto. *(Interpretación, no confirmada por el cliente.)*

### Lista plana

```
https://www.era-residence.com
https://www.era-residence.com/contact
https://www.era-residence.com/apartments
https://www.era-residence.com/coming-soon
https://www.era-residence.com/apartments/011
https://www.era-residence.com/apartments/012
https://www.era-residence.com/apartments/031
https://www.era-residence.com/apartments/032
https://www.era-residence.com/apartments/033
https://www.era-residence.com/apartments/034
https://www.era-residence.com/apartments/111
https://www.era-residence.com/apartments/112
https://www.era-residence.com/apartments/113
https://www.era-residence.com/apartments/114
https://www.era-residence.com/apartments/121
https://www.era-residence.com/apartments/122
https://www.era-residence.com/apartments/123
https://www.era-residence.com/apartments/124
https://www.era-residence.com/apartments/131
https://www.era-residence.com/apartments/132
https://www.era-residence.com/apartments/133
https://www.era-residence.com/apartments/134
https://www.era-residence.com/apartments/211
https://www.era-residence.com/apartments/212
https://www.era-residence.com/apartments/213
https://www.era-residence.com/apartments/221
https://www.era-residence.com/apartments/222
https://www.era-residence.com/apartments/223
https://www.era-residence.com/apartments/224
```

---

## 5. Pesos medidos

| Recurso | Bytes | ~KB |
|---|---:|---:|
| `/` (HTML) | 223.581 | 218 |
| `/apartments` (HTML) | 305.379 | 298 |
| `/contact` (HTML) | 133.509 | 130 |
| `/apartments/011` (HTML) | 194.532 | 190 |
| CSS compartido | 127.610 | 125 |

`/apartments` es la más pesada — probablemente el listado con todas las tarjetas de las 25 unidades renderizadas.

---

## 6. SEO / metadatos de la home

```
title:       ERA Residence — Contemporary Mediterranean Residences in Estepona
description: Boutique residences on the New Golden Mile combining contemporary
             architecture, natural materials and resort-style living near
             Marbella and Estepona.
og:type:     website
og:image:    .../6a39f0aba46d0d055c0476ff_open-graph.webp
twitter:card: summary_large_image
lang:        en
```

Favicons en PNG a 32×32 (con variantes `prefers-color-scheme` light/dark), 48×48 y apple-touch-icon 180×180.

**Solo hay idioma inglés** — no hay `hreflang` ni rutas `/es/`. Un proyecto inmobiliario en Estepona sin versión española es algo a considerar si el clon busca ese mercado.

---

## 7. Implicaciones para el clon

1. **Hay que bajar las 29 páginas**, no solo la home. El sitemap es la fuente de verdad.
2. **Las 25 fichas comparten una sola plantilla** de Webflow (`/apartments/[slug]`). Su HTML será casi idéntico salvo los datos → conviene clonar una, parametrizarla y alimentarla con datos, en vez de tratarlas como 25 páginas distintas.
3. **El CSS único de 125 KB trae los estilos de todo el sitio** en cada carga. Si se reconstruye desde cero, ahí hay margen claro de optimización (CSS por ruta).
4. **Barba.js es opcional.** Si el clon se hace en Next.js / Astro / cualquier framework con router propio, el efecto de transición ya viene resuelto y Barba sobra.
5. **Assets desde el CDN de Webflow** — imágenes en `.webp` bajo `cdn.prod.website-files.com/6a068da7ad91b057365bf967/`. Hay que descargarlas y rehospedarlas; no se puede depender de ese CDN.
6. **Typekit (`pig8glj`) requiere licencia Adobe Fonts** vinculada al dominio. En un clon no funcionará: hay que licenciar las mismas fuentes o buscar equivalentes.
7. **Fijar la versión de Barba** si se acaba usando (ahora está sin pin).

---

## 8. Cómo se obtuvo esto

```bash
# HTML + headers
curl -sSL -A "Mozilla/5.0 ..." https://www.era-residence.com/ -o era.html -D headers.txt

# Sitemap
curl -sSL https://www.era-residence.com/sitemap.xml | grep -o "<loc>[^<]*</loc>"

# Scripts externos
grep -o '<script src="[^"]*"' era.html

# Hojas de estilo
grep -o '<link[^>]*rel="stylesheet"[^>]*>' era.html
```

---

## Pendiente de verificar

- [ ] Contenido y estructura real de `/apartments` (el listado)
- [ ] Inventario completo de imágenes y su peso total
- [ ] Qué hacen exactamente los 11 bloques `<style>` embebidos
- [ ] Formularios de `/contact` (endpoint de Webflow Forms → hay que sustituirlo)
- [ ] Animaciones Lottie: cuántas y de dónde salen los JSON
- [ ] Si `/coming-soon` está enlazada o es huérfana
