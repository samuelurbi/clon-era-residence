# Bahía Mar — brief de personalización

Todo lo que hay que saber para convertir el clon de ERA Residence en la web de
Bahía Mar. Es la fuente de verdad para cualquier agente o persona que toque el
copy, las imágenes o el color. Si algo de aquí contradice al código, manda esto.

## El proyecto

- **Nombre completo:** Bahía Mar Residences & Beach Resort. En interfaz: «Bahía Mar».
  Subtítulo de marca: «Boutique Residences». SIEMPRE con tilde en «Bahía».
- **Promotor:** Landmass Capital (LandmassCapital.com). Arquitectura: Estudio Dolla.
- **Ubicación comercial:** Las Terrenas, península de Samaná, República Dominicana.
  La registral (master plan) es «Agua Buena, sección Los Naranjos, municipio de
  Sánchez, provincia Samaná», parcela 824, posesión 31, **349.146 m²**.
  → En la web se usa **Las Terrenas / Samaná** (es lo que dice el material
  comercial del cliente). Los tiempos de trayecto del recorrido son estimación y
  están marcados como pendientes de confirmar.
- **Escala:** 246 villas en Fase II (tipo A: 77, tipo B: 88, tipo C: 81). Las
  tipologías D y E NO aparecen en ese master plan; su nº de unidades es desconocido.
- **Concepto (del brochure):** «Verdadero lujo ecofriendly». Residencias boutique
  para mezclarse con un entorno lleno de vegetación e inolvidables vistas.
  Master plan alineado con la certificación **LEED for Cities and Communities**.
- **Cada unidad cuenta con:** vistas a la playa, a la bahía de Samaná y a Los
  Haitises; piscina privada; terraza con BBQ y lounge garden; porche bajo pérgola;
  pavimentos en bambú y acabados de pared en chukum; domótica; cocina con
  electrodomésticos ecoeficientes en vitrocerámica; paneles solares.
- **Amenidades del complejo (master plan + brochure):** Beach Club con acceso a
  playa; casa club; hotel boutique; 3 piscinas comunitarias; aguas termales;
  spa y chozas de meditación; centro de meditación y sanación; wellness center
  (yoga, pilates, guías); gimnasio; coworking; restaurantes (7) y comercios;
  salón de fiestas; canchas (3); parque infantil (2); laguna; mirador (2);
  área de parrilla y fogatas; senderismo, cascadas y escalada; puentes en montaña;
  **el primer funicular del Caribe** (transporte interno por todo el complejo);
  senderos de golf cart. Fotos: `00. AMENIDADES/` (CAFETERIA, CASA CLUB, COWORK,
  PISCINA, PORTICO INGRESO, SAUNA RELAX, SENDERO, SPA).
- **Cerca (brochure p.45–47):** Bahía de Samaná, Los Haitises, salto El Limón,
  Las Terrenas (restaurantes, clubes, bares, gift shops), kayak, senderismo,
  playa Cosón. Aeropuerto: El Catey (AZS).
- **Gastronomía (p.49):** mariscos, especias isleñas, frutos; cocina italiana,
  asiática y mediterránea.

## Las cinco villas (fuente: fichas «Tipos de villas» de WhatsApp)

| Tipo | Nombre | Niveles | Hab. | Baños | Extra | Unidades |
|---|---|---|---|---|---|---|
| A | Villa Cosón | 2 | 4 | 4 + aseo | 2 salas, cava de vinos | 77 |
| B | Villa Helecho | 2 | 3 | 3 + aseo | terrazas lounge | 88 |
| C | Villa Remanso | 1 | 2 | 2 + aseo | pabellón de un nivel | 81 |
| D | Villa Ámbar | 1 | 2 | 2 | piedra, madera, pérgolas | ? |
| E | Villa Carolina | 2 | 3 | 3 + aseo | aprovecha la pendiente | ? |

Todas: piscina privada, picuzzi (jacuzzi), solárium, fogata, zona BBQ, terrazas.
Datos completos, descripciones en inglés, planos e imágenes: `data/villas.ts`.
Tagline del conjunto: «Cinco villas. Cinco maneras de vivir Bahía Mar».

## Idioma y tono

- **Inglés** en toda la web (decisión del cliente). Traducir del brochure, no
  inventar. Tono: sereno, sensorial, sin superlativos vacíos. Como el original de
  ERA pero tropical: «a place to return to», «a life lived outdoors».
- Vocabulario: villas (nunca apartments), typology (tipología), levels, private
  pool, jacuzzi, solarium, fire pit, BBQ area, Samaná Bay, Cosón Bay, Las Terrenas.

## Paleta (medida sobre el brochure y el logo, ya aplicada en styles/theme.css)

| Rol | Valor | Origen |
|---|---|---|
| Oscuro / texto | `#04332F` | paneles del brochure |
| Fondo oscuro profundo | `#022725` | panel p.9 |
| Claro | `#EFEEE9` | fondo p.52 |
| Acento suave (arena) | `#E8D8C8` | isotipo ICON2 |
| Acento vivo (verde) | `#6ED809` | cursivas del brochure |

**Prohibido:** celeste (#b5cedb), ciruela (#340c24), rosa (#f8bbcb), navy (#17233b).
Nada debe recordar a ERA. Los tokens ya están sobreescritos; no hace falta tocar
color en componentes, y NO se edita `tokens.css` ni `webflow.css` (se regeneran).

## Identidad

- Isotipo: `public/images/bahiamar-isotype.png` (ola). Se pinta con máscara CSS y
  `background-color: currentColor` para heredar el color de la sección (ver
  Header.tsx). Logo completo: `public/images/bahiamar-logo.png`.
- Sello circular: `<textPath>` con «Bahía Mar · Boutique Residences · Samaná ·».
- Vegetación decorativa: `public/videos/palm-fronds_01|02|03.webm` (VP9 con alfa)
  + póster `public/images/palm-fronds_0N.webp`. Ya colocados; no tocar.

## Placeholders (política)

Lo que no sabemos se marca de forma que NO pueda pasar por real:
- Teléfono `+1 (809) 000-0000`, correo `info@bahiamar.example`, redes `#`.
- Entrega `2027 (TBC)`. Sin m² (no hay dato: no se inventa).
- Dominio `https://www.bahiamar.example`. GTM vacío (el de ERA se desactivó).

## Imágenes disponibles y cómo procesarlas

- Renders de villas ya procesados: `public/images/villa-<slug>-{hero,g1..g4,i1..i4}.webp`
  con srcset `-p-500/800/1080/1600/2000`. Helper `srcset()` en `data/villas.ts`.
- Aérea de la bahía: `public/images/bahiamar-aerial.webp` (+ `-p-500…1600`).
- Fuente original: `bahia-mar-personalizacion/` (11 GB). Renders en
  `00. BAHÍA MAR_RENDERS_AGOSTO*/00. RENDERS VILLA X/01. RENDERS EXTERIORES|02. RENDERS INTERIORES`.
  Las carpetas `-002/-003/-004` son trozos del mismo Drive: buscar en todas.
  Ignorar `BACKUP`, `Versión Anterior`, `Antiguo`.
- Amenidades: `00. AMENIDADES/<carpeta>/`. Brochure por páginas:
  `BAHIA MAR/BOCHURE PAGINAS_/` (páginas 9, 10, 45–52 son las generales).
- **Para procesar una imagen nueva:** ffmpeg → WebP, calidad 82, ancho completo
  máx. 2350 (cuadradas si van a tarjeta) + variantes `-p-500/800/1080/1600/2000`.
  Patrón en `scripts/villas-assets.mjs`. Nombrar `bahiamar-<tema>-<n>.webp`.
  Registrar cada imagen usada en `bahia-mar-personalizacion/INVENTARIO-IMAGENES.json`
  (villa/rol/origen/destino) — el cliente pide saber qué se usó y de dónde.

## Reglas de edición

- Los componentes vienen de Webflow: **conservar clases y estructura**, cambiar
  sólo textos, `src/srcSet/alt` y `href`. No crear clases nuevas ni estilos en línea
  salvo casos como la máscara del isotipo.
- Componentes marcados «GENERADO … no editar a mano»: al personalizarlos, se
  cambia esa cabecera por una nota de que ahora se mantienen a mano (ver
  VillasListing.tsx como ejemplo). Regenerarlos con `npm run gen:*` DESHARÍA el trabajo.
- Nunca inventar hechos (m², fechas, distancias, precios). Si falta un dato, usar
  la política de placeholders y anotarlo en `BACKLOG.md`.
- Comprobar siempre: `npx tsc --noEmit` limpio, y `grep -rniE "ERA Residence|Estepona|Marbella|Costa del Sol|Golden Mile|Gibraltar|Mediterranean|Spain|Málaga|Kempinski|Puerto Ban" <fichero>` sin resultados.
- Verificación visual: Playwright + Brave (`scripts/…` y `scratchpad/qa-villas.mjs`
  como patrón; `waitUntil: 'load'`, nunca `networkidle`; esperar ~9 s al preloader).
- El dev server corre en `http://localhost:3000`.
