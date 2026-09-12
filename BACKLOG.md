# Backlog

Cosas aparcadas a propósito, con el motivo. No son olvidos.

## Pendiente de confirmar con el cliente (Bahía Mar)

Datos que la web no puede inventar. Mientras llegan, cada uno lleva el
placeholder del brief (`bahia-mar-personalizacion/BRIEF.md`), pensado para
que no pueda pasar por real.

- **Municipio: Sánchez o Las Terrenas.** El master plan de Fase II sitúa la
  parcela en Agua Buena, municipio de Sánchez; los planos de las villas y todo
  el material comercial dicen Las Terrenas. La web usa Las Terrenas / Samaná.
  Afecta a los tiempos del recorrido de la home, que son estimación de mapa y
  van rotulados «approximate drive times (TBC)».
- **Unidades de Villa Ámbar (D) y Villa Carolina (E).** No están en el master
  plan (246 villas = 77 Cosón + 88 Helecho + 81 Remanso); sus tarjetas no
  muestran número de unidades.
- **Superficies construidas.** No hay dato; no se ponen m².
- **Fecha de entrega.** «2027 (TBC)» en tarjetas y en el acordeón del promotor.
- **Teléfono, correo, redes y dominio.** `+1 (809) 000-0000`,
  `info@bahiamar.example`, redes a `#`, dominio `bahiamar.example`. El enlace
  de WhatsApp (`wa.me/18090000000`) sale del mismo teléfono provisional.
- **Dirección de la oficina de ventas.** «Las Terrenas, Samaná (address TBC)»
  en pie y contacto. La única dirección real conocida es la del promotor
  (Landmass Capital, Plaza Comercial Atala I, Suite 203, Santo Domingo).
- **Descripción de Landmass Capital.** «Real-estate investment and development
  firm operating in the Dominican Republic» sale del brochure; confirmar.
- **Documentos legales.** Política de privacidad y términos de uso no existen:
  los enlaces del pie, del modal y del aviso de cookies apuntan a `#`.
- **Crédito del pie.** Se retiró la agencia de ERA (enlace y Lottie). Ahora
  dice «Las Terrenas, Samaná / Bahía Mar Residences & Beach Resort». Si el
  cliente quiere acreditar a Landmass Capital / Estudio Dolla, es decisión suya.
- **Contenedor GTM.** El de ERA se desactivó; falta el propio.
- **Planos de las villas.** Llevan los rótulos en español horneados en la
  imagen (RECIBIDOR, COCINA, PISCINA, PICUZZI…); el resto de la web está en
  inglés. Pedir al estudio una exportación en inglés o sin rótulos.
- **Pines del hero.** Los tres puntos interactivos sobre la imagen (abren
  los tips flotantes) conservan las posiciones de ERA, pensadas para una sola
  foto; ahora el fondo rota entre cinco villas y caen donde caen. Decidir si
  se quitan o se ubican por villa.

## Resuelto en la segunda pasada del hero (12-09-2026)

- **Vídeo aéreo en buena calidad.** El cliente envió `VIDEO PORTADA.mp4`
  (2560×1440, 60 fps); se sirve a 1920×1080 / 30 fps (webm + mp4) con su
  último fotograma de póster. El de WhatsApp (832×464) queda como referencia
  en `archivos-extra-whatsapp/`. No hizo falta reescalar por IA.
- **Hero como el de ERA.** Sin versión día/noche. Las cinco villas pasan de
  fondo en bucle con la cortina del slider de los pilares
  (`lib/animations/hero-slider.ts`), y sobre el botón circular, al pie de la
  imagen, van los cinco nombres con el activo iluminado: pulsar uno cambia
  de villa (no lleva a la ficha; para eso está el botón). Las imágenes
  (`bahiamar-hero-<villa>.webp`, 1920×1728) se expandieron hacia arriba con
  Magnific (5 × 50 créditos, más un duplicado por un timeout: 300 en total)
  para tener el 42 % de cielo de la foto de ERA: así al cargar sólo hay cielo
  detrás del titular y la villa aparece al hacer scroll. `bahiamar-hero-day`
  y `-night` ya no se usan.
- **Pilares por villa.** «Three reasons for Bahía Mar» pasa a «Five
  reasons»: una diapositiva por villa generada desde `data/villas.ts`
  (nombre, tagline + primera frase, tipo/niveles/dormitorios/unidades) con
  su render frontal en 4:3 (`bahiamar-pillar-<villa>`). Las tres imágenes
  anteriores (location-1, eco-1, community-1) quedan sin uso.
- **Recorrido: el isotipo como nodo.** La línea de la costa cruzaba la ola
  por la mitad; ahora un halo del color de fondo la interrumpe bajo el
  isotipo y el rótulo «Bahía Mar» va arriba como en los demás puntos.
- **Vídeo aéreo a resolución nativa.** Se servía a 1920×1080 en una caja
  8:9 que sólo enseñaba el 50 % central del fotograma ampliado ×1,5 (de
  ahí que se viera blando). Ahora 2560×1440 y caja 4:3 en escritorio
  (móvil conserva la caja alta): a 1440 el vídeo se pinta a 1920 de ancho
  sin ampliar. Ficheros: 12 MB mp4 / 7 MB webm para 7 s.
- **Planos como en ERA.** Los «planos» que servía la web eran las láminas
  enteras del estudio (marco, cajetín, logo de LANDMASS, columna de
  texto) escaladas. `scripts/planos-recorte.py` aísla el dibujo de cada
  lámina y vuelve transparente sólo el blanco exterior: los ocho planos
  son ahora recortes sobre transparente, portada de las tarjetas de
  /villas (nivel 1, `img contain`) y de la ficha. Los renders se quedan en
  las galerías.
- **Tipografía de titulares: Italiana.** El brochure titula con una romana
  sin serifas, de astas acampanadas y contraste alto («Verdadero lujo»,
  p. 9); no hay ficheros de fuente ni manual en el material del cliente, así
  que se comparó letra a letra con las libres de Google Fonts: Italiana
  coincide en formas (Bellefair lleva remates; Belleza, Tenor Sans y
  Marcellus son más anchas y sin contraste). Es un 28 % más ancha que
  Instrument Serif, así que h1/h2/h3 bajan un 15 % en bloque y hay ajustes
  medidos para pilares, «Peninsula», teléfono del pie, pestañas de
  amenidades, arco de móvil y «Similar options» (`styles/theme.css`,
  `scratchpad/fit-titulares.mjs`). Los titulares siguen en MAYÚSCULAS como
  en ERA; el brochure los pone en caja baja («Verdadero lujo») — si se
  prefiere así, es quitar `text-transform` en theme.css y remedir.
- **Nombre en el pie.** Conviven «Bahía Mar.» (línea de copyright) y «Bahía
  Mar Residences & Beach Resort» (crédito). Decisión: nombre legal en el
  crédito, marca corta en el resto.
- **Vegetación decorativa.** Se retiró la palmera `loc-intro` (la del bloque
  del Concepto que quedaba flotando en mitad de la tira crema): el hueco de
  ERA estaba pensado para un racimo suelto de flores y no hay borde al que
  anclar follaje. La sección conserva las otras dos.

## Assets de ERA sin uso

Los originales de ERA siguen en `public/` sin que nada los referencie: los
siete vídeos de buganvilla (`bougainvillea-flowers_0N.mov/.webm`, ~90 MB), las
fotos `era-residence-*.webp` e `img_cta_*`, el SVG caligráfico del preloader
(`e22485744735d6f17214f25b6157e9b5_preloader_bg.svg`), el vídeo
`open-graph.mp4` y los favicons/OG antiguos ya sobrescritos. Se pueden borrar
cuando el cliente dé el visto bueno; hasta entonces sirven de referencia.

## Formulario de contacto — pendiente de decisión del cliente

El sitio original enviaba los formularios a **Webflow Forms**, un endpoint que
sólo existe dentro de Webflow. Fuera de ahí no hay a dónde enviar.

Afecta a:

- el modal «Book a call» (presente en las 29 páginas)
- el formulario de `/contact`
- el de `/coming-soon`
- los **5 campos UTM ocultos** (`utm_source`, `utm_medium`, …), que hay que
  rellenar desde la query string al cargar (`initUtmFields` del original)

**Por qué está aparcado:** el destino de los leads (email, CRM, API propia) se
decidirá al final, probablemente después de adaptar el sitio al proyecto del
cliente. Elegirlo antes obligaría a rehacerlo.

**Qué queda hecho mientras tanto:** el marcado del formulario está portado y
maquetado. Falta sólo el envío y la captura de UTM.

---

## Lottie del crédito — rehacer con el isotipo de Caribeclic

El original anima en el pie el logo de **The First The Last**, el estudio que
hizo el sitio (`public/lottie/tftl-logo_white.json`, 754 KB). Es una animación
de 99 fotogramas enganchada al cursor: al entrar avanza hasta la mitad y al
salir completa el recorrido, sin volver atrás.

**Decisión tomada:** no se porta. Esa firma es del estudio anterior y va a
sustituirse por la de la agencia que entrega este sitio, **Caribeclic**.

**Pendiente:** crear un Lottie con el **isotipo de Caribeclic** y montarlo en
ese mismo hueco (`.credits` → `.credits_logo`, con la ruta del JSON en
`data-json`). Al hacerlo:

- añadir `lottie-web` como dependencia y auto-hospedarla, no desde CDN
- cargarlo en diferido, cuando el pie entre en pantalla: son cientos de KB
  para un elemento que vive al final de la página
- el comportamiento a replicar es el descrito arriba (`initTFTLjson` del
  original), no la reproducción automática de Lottie

Mientras tanto el hueco queda sin animación, sin romper nada.

---

## Notas

- `referencia-web-original/` es la copia del sitio original y la fuente de
  verdad para cualquier comparación. No se despliega.
- Las fuentes de pago originales (Ambroise François, Maison Neue Extended,
  Sloop Script) están sustituidas por equivalentes con licencia SIL OFL. Si el
  cliente licencia las originales, se cambian en `app/fonts.ts`.
