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
- **Vídeo aéreo.** Colocado el de WhatsApp (832×464) como fondo tras las nubes
  de Location, con la aérea del brochure de póster. El cliente dijo que
  enviará una versión en mejor calidad. El reescalado por IA se cotizó en
  Magnific a 3.497 créditos (un 41 % del saldo) y NO se hizo: a esa
  resolución se ve blando a pantalla completa.
- **Planos de las villas.** Llevan los rótulos en español horneados en la
  imagen (RECIBIDOR, COCINA, PISCINA, PICUZZI…); el resto de la web está en
  inglés. Pedir al estudio una exportación en inglés o sin rótulos.
- **Póster del vídeo aéreo.** La aérea del brochure (playa de Cosón) es otra
  escena distinta del vídeo (colinas con el lote): en conexiones lentas se ve
  el cambio. Si llega el vídeo en calidad, extraer de él un fotograma de póster.
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
