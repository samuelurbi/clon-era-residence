# Backlog

Cosas aparcadas a propósito, con el motivo. No son olvidos.

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
sustituirse por la marca del cliente, **Caribeclic**.

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
