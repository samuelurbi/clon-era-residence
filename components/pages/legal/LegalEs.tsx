/**
 * Políticas legales en español: contenido definitivo del cliente.
 *
 * Portado fielmente de `politicas-legales.html` (el documento que entregó el cliente):
 * su banda de cabecera (`.hero`) y su `<main>` (índice y cinco artículos).
 * Sin su barra superior ni su pie: aquí la página va dentro del sitio, con la
 * cabecera, el selector de idioma y el pie de siempre. NO se reescribe el
 * texto; cualquier cambio de redacción lo decide el cliente, y hay que
 * repetirlo en LegalEn.tsx.
 *
 * Diferencias con el HTML de origen, todas mecánicas:
 *   - Clases con prefijo `legal-` (estilos al final de styles/theme.css);
 *     `l1`/`l2` son las del sitio.
 *   - Anclas iguales en los dos idiomas: legal-notice, privacy, cookies,
 *     terms, project (el original español usaba aviso-legal, privacidad…).
 *   - Correo, teléfono y dominio salen de data/contact.ts.
 *   - El enlace a la otra versión apunta a la ruta del sitio (/legal ↔ /es/legal).
 *   - `<mark className="legal-ph">[…]</mark>` son huecos que el cliente aún
 *     no ha rellenado. Se dejan VISIBLES y resaltados a propósito.
 */

import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SITE_DOMAIN } from '@/data/contact';
import { localize } from '@/lib/i18n';

export function LegalEs() {
  return (
    <>
      <section data-bg="dark" className="section theme_on-dark legal-hero">
        <div className="container">
          <div className="legal-hero_c">
            <div className="legal-hero_eyebrow l2">Landmass Capital · Las Terrenas, Samaná · República Dominicana</div>
            <h1 className="legal-hero_title h2">Políticas <em>legales</em></h1>
            <p className="legal-hero_desc">Este documento reúne el aviso legal, la política de privacidad, la política de cookies, los términos de uso y la información sobre el proyecto que rigen el sitio web bahiamarterrenas.com. Le recomendamos leerlo con atención antes de utilizar el sitio o enviarnos sus datos.</p>
            <div className="legal-hero_meta l1">
              <span>Versión 1.0</span>
              <span>Última actualización: 29 de septiembre de 2026</span>
              <span>Idioma: español · <a href={localize('/legal', 'en')} hrefLang="en">English version</a></span>
            </div>
          </div>
        </div>
      </section>

      <section data-bg="light" className="section theme_on-light legal-body">
        <div className="container">
          <div className="legal-layout">

            <aside className="legal-index" aria-label="Índice">
              <div className="l2">Índice</div>
              <ol>
                <li><a href="#legal-notice"><small>01</small> Aviso legal</a></li>
                <li><a href="#privacy"><small>02</small> Política de privacidad</a></li>
                <li><a href="#cookies"><small>03</small> Política de cookies</a></li>
                <li><a href="#terms"><small>04</small> Términos y condiciones de uso</a></li>
                <li><a href="#project"><small>05</small> Información sobre el proyecto</a></li>
              </ol>
            </aside>

            <div className="legal-content">

              {/* 01 AVISO LEGAL */}
              <article className="legal-policy" id="legal-notice">
                <div className="l2">01 — Aviso legal</div>
                <h2 className="legal-policy_title h4">Aviso legal</h2>
                <p className="legal-lede">Identificación del titular del sitio web bahiamarterrenas.com y datos de contacto.</p>

                <h3><span>1.1</span>Titular del sitio web</h3>
                <p>En cumplimiento de la normativa aplicable en la República Dominicana, en particular la Ley No. 126-02 sobre Comercio Electrónico, Documentos y Firmas Digitales, se informa que el sitio web <strong>bahiamarterrenas.com</strong> (en adelante, el «Sitio») es titularidad de:</p>
                <div className="legal-card">
                  <dl>
                    <dt>Razón social</dt><dd>LANDMASS CAPITAL, S.R.L.</dd>
                    <dt>Nombre comercial</dt><dd>Landmass Capital</dd>
                    <dt>RNC</dt><dd>133382832</dd>
                    <dt>Registro Mercantil</dt><dd><mark className="legal-ph">[Nº de Registro Mercantil]</mark></dd>
                    <dt>Domicilio</dt><dd>Edificio Cedro, Punta Cana Village, Blvd. 1ro. de Noviembre, Oficinas 2008 / 2009, Punta Cana 23000, República Dominicana</dd>
                    <dt>Correo electrónico</dt><dd><a href={EMAIL_HREF}>{EMAIL}</a></dd>
                    <dt>Teléfono</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd>
                    <dt>Sitio web</dt><dd><a href={`https://${SITE_DOMAIN}/`}>{SITE_DOMAIN}</a></dd>
                  </dl>
                </div>

                <h3><span>1.2</span>Objeto del sitio</h3>
                <p>El Sitio tiene por finalidad presentar el proyecto inmobiliario <strong>Bahía Mar Boutique Residences</strong> (también identificado como «Bahía Mar Residences &amp; Beach Resort»), ubicado en Las Terrenas, provincia de Samaná, República Dominicana, y facilitar el contacto entre las personas interesadas y el equipo comercial de Landmass Capital.</p>

                <h3><span>1.3</span>Contenidos y marcas</h3>
                <p>Los textos, imágenes, renders, planos, vídeos, diseños y demás contenidos del Sitio, así como los signos distintivos «Bahía Mar», «Bahía Mar Boutique Residences» y sus logotipos, pertenecen a Landmass Capital o a sus licenciantes y están protegidos por la Ley No. 65-00 sobre Derecho de Autor y la Ley No. 20-00 sobre Propiedad Industrial. Estado de registro de la marca: <mark className="legal-ph">[indicar si está registrada ante ONAPI, en trámite, o retirar el símbolo ® de la web]</mark>. Las condiciones de uso de estos contenidos se detallan en los <a href="#terms">Términos y condiciones de uso</a>.</p>

                <h3><span>1.4</span>Alojamiento y proveedores técnicos</h3>
                <p>El Sitio se aloja en servidores de <mark className="legal-ph">[proveedor de hosting y país]</mark>. Los formularios de contacto, el chat y las comunicaciones comerciales se gestionan mediante la plataforma GoHighLevel (HighLevel, Inc., Estados Unidos). Encontrará más información en la <a href="#privacy">Política de privacidad</a>.</p>

                <h3><span>1.5</span>Contacto</h3>
                <p>Para cualquier consulta relacionada con este aviso o con el Sitio puede escribirnos a <a href={EMAIL_HREF}>{EMAIL}</a> o llamarnos al <a href={PHONE_HREF}>{PHONE}</a>.</p>
              </article>

              {/* 02 PRIVACIDAD */}
              <article className="legal-policy" id="privacy">
                <div className="l2">02 — Política de privacidad</div>
                <h2 className="legal-policy_title h4">Política de privacidad</h2>
                <p className="legal-lede">Cómo recogemos, utilizamos, compartimos y protegemos sus datos personales cuando visita el Sitio, nos contacta o se interesa por una villa de Bahía Mar.</p>

                <h3><span>2.1</span>Responsable del tratamiento</h3>
                <p>El responsable del tratamiento de sus datos personales es <strong>LANDMASS CAPITAL, S.R.L.</strong> (RNC 133382832), con domicilio en Edificio Cedro, Punta Cana Village, Blvd. 1ro. de Noviembre, Oficinas 2008 / 2009, Punta Cana 23000, República Dominicana. Puede contactar con nosotros para cualquier cuestión relativa a sus datos en <a href={EMAIL_HREF}>{EMAIL}</a>, indicando en el asunto «Protección de datos».</p>

                <h3><span>2.2</span>Normativa aplicable</h3>
                <p>Tratamos sus datos conforme a la <strong>Ley No. 172-13 sobre Protección Integral de los Datos Personales</strong> de la República Dominicana y demás normativa dominicana aplicable. Si usted reside en el Espacio Económico Europeo, el Reino Unido o Suiza, le reconocemos además los derechos y garantías del <strong>Reglamento (UE) 2016/679 (RGPD)</strong> y de la normativa equivalente de su país. Si reside en otra jurisdicción (por ejemplo, Estados Unidos o Canadá), aplicaremos las disposiciones de su legislación local en la medida en que resulten exigibles.</p>

                <h3><span>2.3</span>Qué datos tratamos y cómo los obtenemos</h3>
                <p><strong>a) Datos que usted nos facilita.</strong> Cuando rellena un formulario, nos escribe por WhatsApp o correo electrónico, nos llama o solicita una visita, podemos recoger: nombre y apellidos, correo electrónico, teléfono, país o ciudad de residencia, idioma preferido, tipología de villa de interés, mensaje o consulta, y cualquier otro dato que decida incluir voluntariamente.</p>
                <p><strong>b) Datos de navegación.</strong> Al visitar el Sitio se recogen automáticamente datos técnicos como la dirección IP, tipo de dispositivo y navegador, sistema operativo, páginas visitadas, tiempo de permanencia, origen de la visita (por ejemplo, un anuncio o una búsqueda) e interacciones con el contenido. Estos datos se obtienen mediante cookies y tecnologías similares, según se describe en la <a href="#cookies">Política de cookies</a>, y solo se activan con su consentimiento cuando así lo exige la ley.</p>
                <p><strong>c) Datos de la relación comercial.</strong> Si decide reservar o adquirir una villa, le solicitaremos la documentación necesaria para formalizar la operación (documento de identidad o pasaporte, datos fiscales, dirección, información sobre el origen de los fondos y otros datos exigidos por la normativa de prevención de lavado de activos, Ley No. 155-17). Ese tratamiento se regirá por el contrato correspondiente y por esta política.</p>
                <p>Los datos marcados como obligatorios en los formularios son necesarios para atender su solicitud; si no los facilita, no podremos responderle.</p>

                <h3><span>2.4</span>Finalidades y base jurídica</h3>
                <div className="legal-tbl-wrap">
                <table className="legal-tbl">
                  <thead><tr><th>Finalidad</th><th>Base jurídica</th></tr></thead>
                  <tbody>
                    <tr><td>Atender su solicitud de información, contactarle por el canal que haya indicado (correo, teléfono o WhatsApp) y organizar visitas o reuniones.</td><td>Su consentimiento y la aplicación de medidas precontractuales a petición suya.</td></tr>
                    <tr><td>Enviarle información comercial sobre Bahía Mar: novedades del proyecto, disponibilidad, precios, fases, eventos y contenidos relacionados.</td><td>Su consentimiento, que puede retirar en cualquier momento.</td></tr>
                    <tr><td>Gestionar la relación comercial y, en su caso, la reserva, contratación y postventa de la villa.</td><td>Ejecución del contrato y medidas precontractuales.</td></tr>
                    <tr><td>Medir el uso del Sitio y mejorar su contenido y rendimiento (analítica).</td><td>Su consentimiento (cookies analíticas).</td></tr>
                    <tr><td>Mostrarle publicidad personalizada del proyecto en plataformas de terceros y medir la eficacia de nuestras campañas (remarketing, conversiones).</td><td>Su consentimiento (cookies publicitarias).</td></tr>
                    <tr><td>Cumplir obligaciones legales, en particular fiscales, contables y de prevención de lavado de activos y financiamiento del terrorismo.</td><td>Cumplimiento de una obligación legal.</td></tr>
                    <tr><td>Garantizar la seguridad del Sitio, prevenir el fraude y el uso abusivo, y defender nuestros derechos.</td><td>Interés legítimo de Landmass Capital.</td></tr>
                  </tbody>
                </table>
                </div>
                <p>No adoptamos decisiones automatizadas con efectos jurídicos sobre usted ni elaboramos perfiles distintos de la segmentación publicitaria habitual, que solo se realiza con su consentimiento.</p>

                <h3><span>2.5</span>Destinatarios y encargados del tratamiento</h3>
                <p>No vendemos sus datos personales. Podemos compartirlos con los siguientes destinatarios, únicamente en la medida necesaria para las finalidades indicadas:</p>
                <ul>
                  <li><strong>HighLevel, Inc. (GoHighLevel)</strong>, Estados Unidos — plataforma CRM en la que se almacenan sus datos de contacto y se gestionan los formularios, el chat y las comunicaciones comerciales.</li>
                  <li><strong>Google LLC / Google Ireland Ltd.</strong> — Google Analytics 4 (analítica) y Google Ads (publicidad y medición de conversiones).</li>
                  <li><strong>Meta Platforms, Inc. / Meta Platforms Ireland Ltd.</strong> — Meta Pixel (publicidad en Facebook e Instagram) y WhatsApp Business, cuando nos contacte por ese canal.</li>
                  <li><strong>Proveedor de alojamiento web</strong>: <mark className="legal-ph">[nombre y país]</mark>; <strong>proveedor de correo electrónico</strong>: <mark className="legal-ph">[nombre y país]</mark>.</li>
                  <li><strong>Agentes comerciales autorizados</strong> que, en su caso, colaboren con Landmass Capital en la comercialización del proyecto, siempre bajo compromiso de confidencialidad.</li>
                  <li><strong>Asesores profesionales</strong> (abogados, notarios, asesores fiscales), <strong>entidades financieras</strong> y <strong>registros públicos</strong>, cuando sea necesario para formalizar una reserva o compraventa.</li>
                  <li><strong>Autoridades públicas</strong>, cuando exista una obligación legal o un requerimiento válido.</li>
                </ul>
                <p>Los proveedores que actúan como encargados del tratamiento lo hacen bajo contrato, siguiendo nuestras instrucciones y con las medidas de seguridad adecuadas.</p>

                <h3><span>2.6</span>Transferencias internacionales</h3>
                <p>Algunos de los proveedores indicados tienen sus servidores fuera de la República Dominicana, principalmente en Estados Unidos. Al facilitarnos sus datos, usted consiente esta transferencia en los términos de la Ley No. 172-13. Para las personas residentes en el Espacio Económico Europeo, las transferencias se amparan en cláusulas contractuales tipo aprobadas por la Comisión Europea o, cuando el proveedor esté certificado, en el Marco de Privacidad de Datos UE-EE. UU. (EU-US Data Privacy Framework). Puede solicitarnos más información sobre estas garantías en la dirección de contacto indicada.</p>

                <h3><span>2.7</span>Plazos de conservación</h3>
                <ul>
                  <li><strong>Consultas y contactos comerciales:</strong> mientras exista un interés activo por su parte y, como máximo, <mark className="legal-ph">[24 meses]</mark> desde su última interacción con nosotros, salvo que solicite antes la supresión de sus datos.</li>
                  <li><strong>Comunicaciones comerciales:</strong> hasta que retire su consentimiento o se dé de baja.</li>
                  <li><strong>Datos contractuales:</strong> durante la vigencia del contrato y, después, durante los plazos de prescripción legalmente aplicables (con carácter general, hasta diez (10) años conforme a la normativa fiscal y de prevención de lavado de activos).</li>
                  <li><strong>Datos de navegación:</strong> según los plazos indicados en la <a href="#cookies">Política de cookies</a>.</li>
                </ul>

                <h3><span>2.8</span>Sus derechos</h3>
                <p>Conforme a la Ley No. 172-13, usted puede ejercer los derechos de <strong>acceso, rectificación, cancelación y oposición</strong> respecto de sus datos personales, y acudir a la acción de <em>habeas data</em> ante los tribunales dominicanos. Si reside en el Espacio Económico Europeo, el Reino Unido o Suiza, dispone además de los derechos de <strong>supresión, limitación del tratamiento y portabilidad</strong>, del derecho a <strong>retirar su consentimiento</strong> en cualquier momento sin que ello afecte a la licitud del tratamiento anterior, y del derecho a presentar una reclamación ante la autoridad de control de su país (por ejemplo, la Agencia Española de Protección de Datos, <a href="https://www.aepd.es" rel="noopener noreferrer" target="_blank">aepd.es</a>).</p>
                <p>Para ejercer sus derechos, escríbanos a <a href={EMAIL_HREF}>{EMAIL}</a> con el asunto «Protección de datos», indicando el derecho que desea ejercer y adjuntando una copia de un documento que acredite su identidad. Responderemos en el plazo legalmente previsto (con carácter general, un (1) mes para residentes en el Espacio Económico Europeo).</p>

                <h3><span>2.9</span>Comunicaciones comerciales y WhatsApp</h3>
                <p>Solo le enviaremos comunicaciones comerciales si nos ha dado su consentimiento o si nos ha solicitado información sobre el proyecto. Puede darse de baja en cualquier momento mediante el enlace incluido en cada correo, respondiendo «BAJA» a un mensaje de WhatsApp o escribiéndonos a la dirección de contacto. Si nos escribe por WhatsApp, el tratamiento de sus mensajes está sujeto también a la política de privacidad de WhatsApp (Meta).</p>

                <h3><span>2.10</span>Menores de edad</h3>
                <p>El Sitio y sus formularios están dirigidos exclusivamente a personas mayores de 18 años. No recogemos conscientemente datos de menores; si tiene conocimiento de que un menor nos ha facilitado datos, contáctenos para eliminarlos.</p>

                <h3><span>2.11</span>Seguridad</h3>
                <p>Aplicamos medidas técnicas y organizativas razonables para proteger sus datos frente al acceso no autorizado, la pérdida o la alteración, entre ellas el cifrado de las comunicaciones (HTTPS/TLS), el control de accesos a las herramientas que utilizamos y la selección de proveedores con garantías de seguridad adecuadas. Ningún sistema es completamente infalible; si detectáramos una brecha que afecte a sus datos, le informaremos conforme a la normativa aplicable.</p>

                <h3><span>2.12</span>Enlaces a terceros</h3>
                <p>El Sitio puede contener enlaces a sitios o servicios de terceros (Google Maps, WhatsApp, redes sociales, portales inmobiliarios). No somos responsables de sus prácticas de privacidad; le recomendamos consultar sus respectivas políticas.</p>

                <h3><span>2.13</span>Cambios en esta política</h3>
                <p>Podemos actualizar esta política para adaptarla a cambios legales, técnicos o del proyecto. La versión vigente será siempre la publicada en el Sitio, con indicación de la fecha de última actualización. Si el cambio fuera sustancial y afectara a tratamientos basados en su consentimiento, se lo comunicaremos y, cuando proceda, se lo solicitaremos de nuevo.</p>
              </article>

              {/* 03 COOKIES */}
              <article className="legal-policy" id="cookies">
                <div className="l2">03 — Política de cookies</div>
                <h2 className="legal-policy_title h4">Política de cookies</h2>
                <p className="legal-lede">Qué cookies y tecnologías similares utiliza el Sitio, con qué finalidad y cómo puede aceptarlas, rechazarlas o configurarlas.</p>

                <h3><span>3.1</span>Qué son las cookies</h3>
                <p>Las cookies son pequeños archivos que se almacenan en su dispositivo cuando visita un sitio web y que permiten, entre otras cosas, recordar sus preferencias, reconocer su navegador en visitas posteriores o medir cómo se utiliza el sitio. Junto con las cookies, el Sitio puede utilizar tecnologías similares, como píxeles, etiquetas o almacenamiento local del navegador. En esta política nos referimos a todas ellas como «cookies».</p>

                <h3><span>3.2</span>Tipos de cookies según su finalidad</h3>
                <ul>
                  <li><strong>Técnicas o necesarias:</strong> imprescindibles para que el Sitio funcione y para recordar sus decisiones de consentimiento. No requieren su consentimiento.</li>
                  <li><strong>Analíticas:</strong> nos permiten conocer cómo navegan los usuarios (páginas vistas, tiempo, origen del tráfico) para mejorar el Sitio. Se activan solo con su consentimiento.</li>
                  <li><strong>Publicitarias y de remarketing:</strong> permiten mostrarle anuncios del proyecto en otras plataformas (Google, Facebook, Instagram) y medir si una campaña ha generado un contacto. Se activan solo con su consentimiento.</li>
                  <li><strong>Funcionales:</strong> habilitan servicios como el chat o los formularios avanzados. Se activan solo con su consentimiento salvo que sean estrictamente necesarias para el servicio que usted solicita.</li>
                </ul>

                <h3><span>3.3</span>Cookies utilizadas en este Sitio</h3>
                <p>A continuación se detallan las cookies previstas en el Sitio. Las duraciones son orientativas y pueden variar según la configuración de cada proveedor y la región desde la que navegue. <mark className="legal-ph">[Verificar con un escaneo de cookies una vez instaladas las herramientas y ajustar la tabla]</mark>.</p>
                <div className="legal-tbl-wrap">
                <table className="legal-tbl">
                  <thead><tr><th>Cookie</th><th>Proveedor</th><th>Tipo</th><th>Finalidad</th><th>Duración</th></tr></thead>
                  <tbody>
                    <tr><td><code><mark className="legal-ph">[cookie de consentimiento]</mark></code></td><td>bahiamarterrenas.com (propia)</td><td>Técnica</td><td>Recordar sus preferencias de consentimiento de cookies.</td><td>Hasta 12 meses</td></tr>
                    <tr><td><code>_ga</code>, <code>_ga_*</code></td><td>Google Analytics 4 (Google)</td><td>Analítica</td><td>Distinguir usuarios y sesiones para medir el uso del Sitio de forma agregada.</td><td>Hasta 2 años</td></tr>
                    <tr><td><code>_gcl_au</code>, <code>_gcl_aw</code></td><td>Google Ads (Google)</td><td>Publicitaria</td><td>Medir conversiones procedentes de anuncios de Google y vincular clics con contactos.</td><td>Hasta 3 meses</td></tr>
                    <tr><td><code>IDE</code>, <code>test_cookie</code></td><td>doubleclick.net (Google)</td><td>Publicitaria</td><td>Remarketing y limitación de frecuencia de los anuncios de Google.</td><td>Hasta 13 meses</td></tr>
                    <tr><td><code>_fbp</code>, <code>_fbc</code></td><td>Meta Pixel (Meta)</td><td>Publicitaria</td><td>Mostrar anuncios del proyecto en Facebook e Instagram y medir su eficacia.</td><td>Hasta 3 meses</td></tr>
                    <tr><td><code><mark className="legal-ph">[cookies del widget]</mark></code></td><td>GoHighLevel / LeadConnector (HighLevel, Inc.)</td><td>Funcional</td><td>Mantener la sesión del chat y los formularios, y asociar la conversación con su ficha de contacto.</td><td>Sesión / hasta 12 meses</td></tr>
                  </tbody>
                </table>
                </div>

                <h3><span>3.4</span>Consentimiento y cómo gestionarlo</h3>
                <p>Al acceder al Sitio se muestra un aviso que le permite aceptar todas las cookies, rechazar las no necesarias o configurarlas por categoría. Las cookies analíticas, publicitarias y funcionales no se activan hasta que usted lo acepta. Puede cambiar su decisión en cualquier momento a través del enlace <mark className="legal-ph">[«Configurar cookies» — enlace al gestor de consentimiento]</mark> disponible en el pie de página.</p>
                <p>También puede eliminar o bloquear las cookies desde la configuración de su navegador. Tenga en cuenta que bloquear las cookies técnicas puede afectar al funcionamiento del Sitio:</p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" rel="noopener noreferrer" target="_blank">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" rel="noopener noreferrer" target="_blank">Safari</a></li>
                  <li><a href="https://support.mozilla.org/es/kb/Borrar%20cookies" rel="noopener noreferrer" target="_blank">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="noopener noreferrer" target="_blank">Microsoft Edge</a></li>
                </ul>
                <p>Además, puede gestionar la publicidad personalizada directamente en <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">Configuración de anuncios de Google</a>, en las <a href="https://www.facebook.com/adpreferences" rel="noopener noreferrer" target="_blank">preferencias de anuncios de Meta</a>, instalar el <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">complemento de inhabilitación de Google Analytics</a> o utilizar <a href="https://www.youronlinechoices.com" rel="noopener noreferrer" target="_blank">YourOnlineChoices</a>.</p>

                <h3><span>3.5</span>Transferencias internacionales</h3>
                <p>Google, Meta y HighLevel tratan los datos obtenidos mediante cookies desde Estados Unidos y otros países. Las garantías aplicables a estas transferencias se describen en el apartado 2.6 de la <a href="#privacy">Política de privacidad</a>.</p>

                <h3><span>3.6</span>Actualizaciones</h3>
                <p>Esta política se revisará cuando incorporemos o retiremos herramientas que utilicen cookies. La fecha de última actualización figura en la cabecera de este documento.</p>
              </article>

              {/* 04 TÉRMINOS */}
              <article className="legal-policy" id="terms">
                <div className="l2">04 — Términos y condiciones de uso</div>
                <h2 className="legal-policy_title h4">Términos y condiciones de uso</h2>
                <p className="legal-lede">Condiciones que regulan el acceso al Sitio y el uso de sus contenidos y servicios.</p>

                <h3><span>4.1</span>Objeto y aceptación</h3>
                <p>Los presentes términos regulan el acceso y uso del sitio web bahiamarterrenas.com, titularidad de LANDMASS CAPITAL, S.R.L. (véase el <a href="#legal-notice">Aviso legal</a>). El acceso al Sitio y el uso de cualquiera de sus funciones implican la aceptación plena de estos términos, de la <a href="#privacy">Política de privacidad</a> y de la <a href="#cookies">Política de cookies</a>. Si no está de acuerdo con ellos, le rogamos que no utilice el Sitio.</p>

                <h3><span>4.2</span>Condiciones de uso</h3>
                <p>Usted se compromete a utilizar el Sitio de forma lícita y conforme a estos términos. En particular, no está permitido:</p>
                <ul>
                  <li>Utilizar el Sitio con fines fraudulentos, ilícitos o contrarios a la buena fe.</li>
                  <li>Extraer de forma masiva o automatizada sus contenidos (scraping), realizar ingeniería inversa o intentar acceder a áreas restringidas o a los sistemas que lo sostienen.</li>
                  <li>Introducir virus, código malicioso o cualquier elemento que pueda dañar el Sitio, sus proveedores o los dispositivos de otros usuarios.</li>
                  <li>Facilitar datos falsos o de terceros en los formularios, suplantar la identidad de otra persona o utilizar los canales de contacto para enviar comunicaciones no solicitadas.</li>
                  <li>Reproducir, distribuir o comunicar públicamente los contenidos del Sitio sin autorización, salvo lo previsto en el apartado 4.4.</li>
                </ul>

                <h3><span>4.3</span>Carácter informativo del Sitio</h3>
                <p>El Sitio tiene un carácter exclusivamente informativo y promocional. Sus contenidos <strong>no constituyen una oferta contractual</strong> ni una invitación vinculante a contratar, ni asesoramiento legal, fiscal, financiero o de inversión. Las características, superficies, amenidades, plazos y, en su caso, precios que se muestran son orientativos y pueden modificarse sin previo aviso. Las condiciones aplicables a cualquier reserva o compraventa serán únicamente las recogidas en la documentación contractual que se firme con Landmass Capital. Le remitimos al apartado <a href="#project">Información sobre el proyecto</a> para conocer los avisos específicos.</p>

                <h3><span>4.4</span>Propiedad intelectual e industrial</h3>
                <p>Todos los contenidos del Sitio (textos, fotografías, renders, planos, vídeos, animaciones, diseños, código y estructura), así como las marcas, nombres comerciales y logotipos que aparecen en él, son propiedad de Landmass Capital o de terceros que han autorizado su uso, y están protegidos por la Ley No. 65-00 sobre Derecho de Autor, la Ley No. 20-00 sobre Propiedad Industrial y los tratados internacionales aplicables. El acceso al Sitio no le otorga ningún derecho sobre ellos. Se permite compartir enlaces al Sitio y visualizar e imprimir sus contenidos para uso personal y no comercial; cualquier otro uso requiere la autorización previa y por escrito de Landmass Capital. Las marcas de terceros que puedan mencionarse (por ejemplo, Google, Meta o WhatsApp) pertenecen a sus respectivos titulares.</p>

                <h3><span>4.5</span>Formularios y canales de contacto</h3>
                <p>Al enviar un formulario o contactarnos por WhatsApp, teléfono o correo electrónico, usted garantiza que los datos facilitados son veraces y actuales y que es mayor de 18 años, y acepta que le contactemos por el canal indicado para atender su solicitud, en los términos de la <a href="#privacy">Política de privacidad</a>. Landmass Capital se reserva el derecho a no atender solicitudes que resulten manifiestamente abusivas, fraudulentas o ajenas al objeto del Sitio.</p>

                <h3><span>4.6</span>Enlaces y servicios de terceros</h3>
                <p>El Sitio puede incluir enlaces o integraciones de terceros (mapas, mensajería, redes sociales, vídeos). Landmass Capital no controla dichos servicios ni es responsable de sus contenidos, disponibilidad o prácticas. El uso de esos servicios se rige por sus propias condiciones.</p>

                <h3><span>4.7</span>Exclusión de garantías y responsabilidad</h3>
                <p>Landmass Capital procura que el Sitio esté disponible y actualizado, pero no garantiza la ausencia de interrupciones, errores u omisiones, ni que esté libre de virus u otros elementos dañinos. En la máxima medida permitida por la ley, Landmass Capital no será responsable de los daños derivados del uso del Sitio, de la imposibilidad de acceder a él, de decisiones adoptadas exclusivamente sobre la base de sus contenidos, ni de los contenidos o servicios de terceros. Nada de lo dispuesto en estos términos limita los derechos que le reconozca con carácter imperativo la Ley No. 358-05 General de Protección de los Derechos del Consumidor o Usuario, o la normativa de consumo de su lugar de residencia.</p>

                <h3><span>4.8</span>Modificaciones</h3>
                <p>Landmass Capital puede modificar en cualquier momento el Sitio, sus contenidos y estos términos. Las modificaciones serán aplicables desde su publicación en el Sitio, con indicación de la fecha de última actualización.</p>

                <h3><span>4.9</span>Nulidad parcial</h3>
                <p>Si alguna disposición de estos términos fuera declarada nula o inaplicable, las restantes conservarán su validez y eficacia.</p>

                <h3><span>4.10</span>Ley aplicable y jurisdicción</h3>
                <p>Estos términos se rigen por las leyes de la República Dominicana. Cualquier controversia derivada del acceso o uso del Sitio se someterá a los tribunales ordinarios del Distrito Nacional, Santo Domingo, República Dominicana, sin perjuicio de los derechos que, como consumidor, le correspondan de forma imperativa según la legislación de su lugar de residencia. En caso de discrepancia entre la versión en español y la versión en inglés de este documento, prevalecerá la versión en español.</p>

                <h3><span>4.11</span>Contacto</h3>
                <p>Para cualquier cuestión relacionada con estos términos puede escribirnos a <a href={EMAIL_HREF}>{EMAIL}</a>.</p>
              </article>

              {/* 05 PROYECTO */}
              <article className="legal-policy" id="project">
                <div className="l2">05 — Información sobre el proyecto</div>
                <h2 className="legal-policy_title h4">Información sobre el proyecto</h2>
                <p className="legal-lede">Avisos que debe tener en cuenta al valorar la información sobre Bahía Mar Boutique Residences publicada en el Sitio y en los materiales comerciales.</p>

                <div className="legal-callout">
                  <p>Bahía Mar Boutique Residences es un proyecto inmobiliario en desarrollo, gestionado por Landmass Capital en Las Terrenas, Samaná (República Dominicana). Toda la información publicada en el Sitio tiene carácter informativo y está sujeta a cambios hasta la firma de la documentación contractual correspondiente.</p>
                </div>

                <h3><span>5.1</span>Imágenes y representaciones</h3>
                <p>Las imágenes del proyecto son renders, ilustraciones artísticas y fotografías de referencia del entorno. El mobiliario, la decoración, la vegetación, los acabados, las vistas y los elementos del paisaje que aparecen en ellas son ilustrativos y no forman parte necesariamente de la villa ni de las áreas comunes. El producto final puede diferir de las representaciones mostradas.</p>

                <h3><span>5.2</span>Especificaciones y master plan</h3>
                <p>Las superficies, distribuciones, tipologías de villa, materiales, equipamientos, amenidades, fases y el master plan del proyecto son orientativos y pueden modificarse por razones técnicas, urbanísticas, legales, ambientales, de diseño o de disponibilidad de materiales, y están sujetos a la obtención de las licencias, permisos y aprobaciones correspondientes. Las características definitivas de cada villa serán las que consten en la documentación contractual y en las especificaciones técnicas anexas.</p>

                <h3><span>5.3</span>Plazos de entrega</h3>
                <p>Cualquier fecha de inicio de obra o de entrega que se comunique es estimada y está sujeta a confirmación. Los plazos vinculantes serán únicamente los establecidos en el contrato que se firme con cada comprador.</p>

                <h3><span>5.4</span>Precios y condiciones económicas</h3>
                <p>Los precios que, en su caso, se comuniquen se expresan en dólares estadounidenses (USD), son orientativos y no incluyen impuestos, gastos de transferencia de título, honorarios notariales ni otros gastos a cargo del comprador. Pueden modificarse sin previo aviso hasta la firma de la reserva o promesa de venta. Las condiciones de pago aplicables serán las recogidas en la documentación contractual.</p>

                <h3><span>5.5</span>Incentivos fiscales (CONFOTUR)</h3>
                <p>Landmass Capital gestiona la clasificación del proyecto bajo los beneficios de la Ley No. 158-01 de Fomento al Desarrollo Turístico y sus modificaciones. La aprobación es potestad exclusiva del Consejo de Fomento Turístico (CONFOTUR), por lo que ningún beneficio fiscal está garantizado hasta que se obtenga la clasificación definitiva. La aplicación de los incentivos a cada comprador depende de su situación particular y de las gestiones que realice por su cuenta; le recomendamos consultar con un asesor fiscal independiente.</p>

                <h3><span>5.6</span>Sostenibilidad</h3>
                <p>El master plan de Bahía Mar se ha diseñado siguiendo las directrices del sistema LEED for Cities and Communities. Salvo que se comunique expresamente lo contrario, esta alineación no implica que el proyecto disponga de una certificación LEED emitida.</p>

                <h3><span>5.7</span>Sin garantía de rentabilidad</h3>
                <p>La información publicada no constituye asesoramiento de inversión. Landmass Capital no garantiza rentas, plusvalías, ocupación, revalorización ni retorno alguno de la inversión. La adquisición de un inmueble conlleva riesgos, y su evolución depende de factores de mercado ajenos a nuestro control. Cualquier proyección que pudiera facilitarse se basa en hipótesis y no debe interpretarse como una promesa de resultados.</p>

                <h3><span>5.8</span>Asesoramiento independiente</h3>
                <p>Le recomendamos revisar toda la documentación con un abogado y un asesor fiscal independientes antes de firmar cualquier reserva o contrato. El comprador tiene siempre derecho a designar a su propio abogado para revisar la documentación de la operación.</p>

                <h3><span>5.9</span>Documentación contractual</h3>
                <p>Las condiciones que regirán la adquisición de una villa serán exclusivamente las establecidas en el contrato de reserva, la promesa de venta y sus anexos, y en la escritura de compraventa correspondiente, que prevalecerán sobre cualquier información publicada en el Sitio o en los materiales comerciales.</p>
              </article>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
