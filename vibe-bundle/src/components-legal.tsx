/* ============================================================
 *  COMP-LEGAL — 2 módulos del repo en un solo archivo.
 *
 *  GENERADO por scripts/vibe-bundle.mjs — no editar aquí.
 *  Se agrupa porque en GoHighLevel Vibe cada archivo nuevo hay que
 *  pedírselo a su IA de uno en uno. La fuente sigue estando en el repo,
 *  un archivo por componente; esto es solo el formato de entrega.
 *
 *  Los separadores de abajo dicen de qué archivo del repo viene cada
 *  bloque, para poder volver atrás sin adivinar.
 */

import { localize } from '@/animations';
import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SITE_DOMAIN } from '@/data';

/* ============================================================
   components/pages/legal/LegalEn.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
/**
 * Políticas legales en inglés: contenido definitivo del cliente.
 *
 * Portado fielmente de `legal-policies.html` (el documento que entregó el cliente):
 * su banda de cabecera (`.hero`) y su `<main>` (índice y cinco artículos).
 * Sin su barra superior ni su pie: aquí la página va dentro del sitio, con la
 * cabecera, el selector de idioma y el pie de siempre. NO se reescribe el
 * texto; cualquier cambio de redacción lo decide el cliente, y hay que
 * repetirlo en LegalEs.tsx.
 *
 * Diferencias con el HTML de origen, todas mecánicas:
 *   - Clases con prefijo `legal-` (estilos al final de styles/theme.css);
 *     `l1`/`l2` son las del sitio.
 *   - Anclas iguales en los dos idiomas: legal-notice, privacy, cookies,
 *     terms, project.
 *   - Correo, teléfono y dominio salen de data/contact.ts.
 *   - El enlace a la otra versión apunta a la ruta del sitio (/legal ↔ /es/legal).
 *   - `<mark className="legal-ph">[…]</mark>` son huecos que el cliente aún
 *     no ha rellenado. Se dejan VISIBLES y resaltados a propósito.
 */



export function LegalEn() {
  return (
    <>
      <section data-bg="dark" className="section theme_on-dark legal-hero">
        <div className="container">
          <div className="legal-hero_c">
            <div className="legal-hero_eyebrow l2">Landmass Capital · Las Terrenas, Samaná · Dominican Republic</div>
            <h1 className="legal-hero_title h2">Legal <em>policies</em></h1>
            <p className="legal-hero_desc">This document brings together the legal notice, privacy policy, cookie policy, terms of use and project information that govern the website bahiamarterrenas.com. Please read it carefully before using the site or sending us your details.</p>
            <div className="legal-hero_meta l1">
              <span>Version 1.0</span>
              <span>Last updated: 29 September 2026</span>
              <span>Language: English · <a href={localize('/legal', 'es')} hrefLang="es">Versión en español</a></span>
            </div>
          </div>
        </div>
      </section>

      <section data-bg="light" className="section theme_on-light legal-body">
        <div className="container">
          <div className="legal-layout">

            <aside className="legal-index" aria-label="Contents">
              <div className="l2">Contents</div>
              <ol>
                <li><a href="#legal-notice"><small>01</small> Legal notice</a></li>
                <li><a href="#privacy"><small>02</small> Privacy policy</a></li>
                <li><a href="#cookies"><small>03</small> Cookie policy</a></li>
                <li><a href="#terms"><small>04</small> Terms and conditions of use</a></li>
                <li><a href="#project"><small>05</small> Project information</a></li>
              </ol>
            </aside>

            <div className="legal-content">

              {/* 01 LEGAL NOTICE */}
              <article className="legal-policy" id="legal-notice">
                <div className="l2">01 — Legal notice</div>
                <h2 className="legal-policy_title h4">Legal notice</h2>
                <p className="legal-lede">Identification of the owner of the website bahiamarterrenas.com and contact details.</p>

                <h3><span>1.1</span>Website owner</h3>
                <p>In accordance with the legislation applicable in the Dominican Republic, in particular Law No. 126-02 on Electronic Commerce, Documents and Digital Signatures, please be informed that the website <strong>bahiamarterrenas.com</strong> (the &quot;Site&quot;) is owned by:</p>
                <div className="legal-card">
                  <dl>
                    <dt>Legal name</dt><dd>LANDMASS CAPITAL, S.R.L.</dd>
                    <dt>Trade name</dt><dd>Landmass Capital</dd>
                    <dt>Tax ID (RNC)</dt><dd>133382832</dd>
                    <dt>Commercial Registry</dt><dd><mark className="legal-ph">[Commercial Registry No.]</mark></dd>
                    <dt>Registered office</dt><dd>Edificio Cedro, Punta Cana Village, Blvd. 1ro. de Noviembre, Offices 2008 / 2009, Punta Cana 23000, Dominican Republic</dd>
                    <dt>E-mail</dt><dd><a href={EMAIL_HREF}>{EMAIL}</a></dd>
                    <dt>Telephone</dt><dd><a href={PHONE_HREF}>{PHONE}</a></dd>
                    <dt>Website</dt><dd><a href={`https://${SITE_DOMAIN}/`}>{SITE_DOMAIN}</a></dd>
                  </dl>
                </div>

                <h3><span>1.2</span>Purpose of the Site</h3>
                <p>The Site presents the real estate development <strong>Bahía Mar Boutique Residences</strong> (also referred to as &quot;Bahía Mar Residences &amp; Beach Resort&quot;), located in Las Terrenas, Samaná province, Dominican Republic, and enables interested parties to get in touch with the Landmass Capital sales team.</p>

                <h3><span>1.3</span>Content and trademarks</h3>
                <p>The texts, images, renderings, floor plans, videos, designs and other content on the Site, together with the distinctive signs &quot;Bahía Mar&quot;, &quot;Bahía Mar Boutique Residences&quot; and their logos, belong to Landmass Capital or its licensors and are protected by Law No. 65-00 on Copyright and Law No. 20-00 on Industrial Property. Trademark registration status: <mark className="legal-ph">[state whether registered with ONAPI, pending, or remove the ® symbol from the website]</mark>. The conditions for using this content are set out in the <a href="#terms">Terms and conditions of use</a>.</p>

                <h3><span>1.4</span>Hosting and technical providers</h3>
                <p>The Site is hosted on servers operated by <mark className="legal-ph">[hosting provider and country]</mark>. Contact forms, chat and commercial communications are managed through the GoHighLevel platform (HighLevel, Inc., United States). Further details are provided in the <a href="#privacy">Privacy policy</a>.</p>

                <h3><span>1.5</span>Contact</h3>
                <p>For any question about this notice or the Site, write to <a href={EMAIL_HREF}>{EMAIL}</a> or call <a href={PHONE_HREF}>{PHONE}</a>.</p>
              </article>

              {/* 02 PRIVACY */}
              <article className="legal-policy" id="privacy">
                <div className="l2">02 — Privacy policy</div>
                <h2 className="legal-policy_title h4">Privacy policy</h2>
                <p className="legal-lede">How we collect, use, share and protect your personal data when you visit the Site, contact us or express interest in a Bahía Mar villa.</p>

                <h3><span>2.1</span>Data controller</h3>
                <p>The controller of your personal data is <strong>LANDMASS CAPITAL, S.R.L.</strong> (RNC 133382832), with registered office at Edificio Cedro, Punta Cana Village, Blvd. 1ro. de Noviembre, Offices 2008 / 2009, Punta Cana 23000, Dominican Republic. For any matter relating to your data, contact us at <a href={EMAIL_HREF}>{EMAIL}</a> with &quot;Data protection&quot; in the subject line.</p>

                <h3><span>2.2</span>Applicable law</h3>
                <p>We process your data in accordance with <strong>Law No. 172-13 on the Comprehensive Protection of Personal Data</strong> of the Dominican Republic and other applicable Dominican legislation. If you reside in the European Economic Area, the United Kingdom or Switzerland, we also grant you the rights and safeguards provided by <strong>Regulation (EU) 2016/679 (GDPR)</strong> and the equivalent legislation of your country. If you reside in another jurisdiction (for example, the United States or Canada), we will apply the provisions of your local legislation to the extent they are enforceable.</p>

                <h3><span>2.3</span>What data we process and how we obtain it</h3>
                <p><strong>a) Data you provide to us.</strong> When you complete a form, write to us via WhatsApp or e-mail, call us or request a visit, we may collect: first and last name, e-mail address, telephone number, country or city of residence, preferred language, villa type of interest, message or enquiry, and any other information you choose to include.</p>
                <p><strong>b) Browsing data.</strong> When you visit the Site, technical data is collected automatically, such as IP address, device and browser type, operating system, pages viewed, time on site, traffic source (for example, an advertisement or a search) and interactions with the content. This data is obtained through cookies and similar technologies, as described in the <a href="#cookies">Cookie policy</a>, and is only activated with your consent where the law so requires.</p>
                <p><strong>c) Commercial relationship data.</strong> If you decide to reserve or purchase a villa, we will ask you for the documentation needed to formalise the transaction (identity document or passport, tax details, address, information on the source of funds and other data required by anti-money-laundering legislation, Law No. 155-17). That processing will be governed by the relevant contract and by this policy.</p>
                <p>Fields marked as mandatory in the forms are necessary to handle your request; if you do not complete them, we will not be able to respond.</p>

                <h3><span>2.4</span>Purposes and legal basis</h3>
                <div className="legal-tbl-wrap">
                <table className="legal-tbl">
                  <thead><tr><th>Purpose</th><th>Legal basis</th></tr></thead>
                  <tbody>
                    <tr><td>Responding to your request for information, contacting you through the channel you indicated (e-mail, telephone or WhatsApp) and arranging visits or meetings.</td><td>Your consent and the taking of pre-contractual steps at your request.</td></tr>
                    <tr><td>Sending you commercial information about Bahía Mar: project news, availability, prices, phases, events and related content.</td><td>Your consent, which you may withdraw at any time.</td></tr>
                    <tr><td>Managing the commercial relationship and, where applicable, the reservation, purchase and after-sales service of the villa.</td><td>Performance of a contract and pre-contractual steps.</td></tr>
                    <tr><td>Measuring use of the Site and improving its content and performance (analytics).</td><td>Your consent (analytics cookies).</td></tr>
                    <tr><td>Showing you personalised advertising for the project on third-party platforms and measuring the effectiveness of our campaigns (remarketing, conversions).</td><td>Your consent (advertising cookies).</td></tr>
                    <tr><td>Complying with legal obligations, in particular tax, accounting and anti-money-laundering and counter-terrorist-financing obligations.</td><td>Compliance with a legal obligation.</td></tr>
                    <tr><td>Ensuring the security of the Site, preventing fraud and abuse, and defending our rights.</td><td>Landmass Capital&apos;s legitimate interest.</td></tr>
                  </tbody>
                </table>
                </div>
                <p>We do not make automated decisions that produce legal effects concerning you, nor do we carry out profiling beyond standard advertising segmentation, which is only performed with your consent.</p>

                <h3><span>2.5</span>Recipients and processors</h3>
                <p>We do not sell your personal data. We may share it with the following recipients, only to the extent necessary for the purposes described:</p>
                <ul>
                  <li><strong>HighLevel, Inc. (GoHighLevel)</strong>, United States — the CRM platform where your contact details are stored and where forms, chat and commercial communications are managed.</li>
                  <li><strong>Google LLC / Google Ireland Ltd.</strong> — Google Analytics 4 (analytics) and Google Ads (advertising and conversion measurement).</li>
                  <li><strong>Meta Platforms, Inc. / Meta Platforms Ireland Ltd.</strong> — Meta Pixel (advertising on Facebook and Instagram) and WhatsApp Business, when you contact us through that channel.</li>
                  <li><strong>Web hosting provider</strong>: <mark className="legal-ph">[name and country]</mark>; <strong>e-mail provider</strong>: <mark className="legal-ph">[name and country]</mark>.</li>
                  <li><strong>Authorised sales agents</strong> who, where applicable, collaborate with Landmass Capital in marketing the project, always under a confidentiality undertaking.</li>
                  <li><strong>Professional advisers</strong> (lawyers, notaries, tax advisers), <strong>financial institutions</strong> and <strong>public registries</strong>, where necessary to formalise a reservation or sale.</li>
                  <li><strong>Public authorities</strong>, where there is a legal obligation or a valid request.</li>
                </ul>
                <p>Providers acting as processors do so under contract, following our instructions and with appropriate security measures.</p>

                <h3><span>2.6</span>International transfers</h3>
                <p>Some of the providers listed above host their servers outside the Dominican Republic, mainly in the United States. By providing your data, you consent to this transfer under the terms of Law No. 172-13. For residents of the European Economic Area, transfers are based on standard contractual clauses approved by the European Commission or, where the provider is certified, on the EU-US Data Privacy Framework. You may request further information about these safeguards at the contact address above.</p>

                <h3><span>2.7</span>Retention periods</h3>
                <ul>
                  <li><strong>Enquiries and sales contacts:</strong> for as long as you show active interest and, at most, <mark className="legal-ph">[24 months]</mark> from your last interaction with us, unless you request deletion earlier.</li>
                  <li><strong>Commercial communications:</strong> until you withdraw your consent or unsubscribe.</li>
                  <li><strong>Contractual data:</strong> for the term of the contract and, thereafter, for the legally applicable limitation periods (generally up to ten (10) years under tax and anti-money-laundering legislation).</li>
                  <li><strong>Browsing data:</strong> for the periods indicated in the <a href="#cookies">Cookie policy</a>.</li>
                </ul>

                <h3><span>2.8</span>Your rights</h3>
                <p>Under Law No. 172-13 you may exercise your rights of <strong>access, rectification, cancellation and objection</strong> in relation to your personal data, and bring a <em>habeas data</em> action before the Dominican courts. If you reside in the European Economic Area, the United Kingdom or Switzerland, you also have the rights of <strong>erasure, restriction of processing and data portability</strong>, the right to <strong>withdraw your consent</strong> at any time without affecting the lawfulness of prior processing, and the right to lodge a complaint with the supervisory authority of your country (for example, the Spanish Data Protection Agency, <a href="https://www.aepd.es" rel="noopener noreferrer" target="_blank">aepd.es</a>, or the UK Information Commissioner&apos;s Office, <a href="https://ico.org.uk" rel="noopener noreferrer" target="_blank">ico.org.uk</a>).</p>
                <p>To exercise your rights, write to <a href={EMAIL_HREF}>{EMAIL}</a> with the subject &quot;Data protection&quot;, stating the right you wish to exercise and attaching a copy of a document proving your identity. We will respond within the legally required period (generally one (1) month for residents of the European Economic Area).</p>

                <h3><span>2.9</span>Commercial communications and WhatsApp</h3>
                <p>We will only send you commercial communications if you have given us your consent or have asked us for information about the project. You may unsubscribe at any time using the link included in each e-mail, by replying &quot;STOP&quot; to a WhatsApp message, or by writing to the contact address. If you write to us via WhatsApp, the processing of your messages is also subject to WhatsApp&apos;s (Meta) privacy policy.</p>

                <h3><span>2.10</span>Minors</h3>
                <p>The Site and its forms are intended exclusively for persons over 18 years of age. We do not knowingly collect data from minors; if you become aware that a minor has provided us with data, please contact us so that we can delete it.</p>

                <h3><span>2.11</span>Security</h3>
                <p>We apply reasonable technical and organisational measures to protect your data against unauthorised access, loss or alteration, including encryption of communications (HTTPS/TLS), access controls on the tools we use and the selection of providers offering appropriate security guarantees. No system is entirely infallible; if we detect a breach affecting your data, we will inform you in accordance with applicable law.</p>

                <h3><span>2.12</span>Third-party links</h3>
                <p>The Site may contain links to third-party websites or services (Google Maps, WhatsApp, social networks, property portals). We are not responsible for their privacy practices; we recommend that you review their respective policies.</p>

                <h3><span>2.13</span>Changes to this policy</h3>
                <p>We may update this policy to reflect legal, technical or project changes. The version in force will always be the one published on the Site, showing the date of the last update. If a change is substantial and affects processing based on your consent, we will inform you and, where appropriate, ask for your consent again.</p>
              </article>

              {/* 03 COOKIES */}
              <article className="legal-policy" id="cookies">
                <div className="l2">03 — Cookie policy</div>
                <h2 className="legal-policy_title h4">Cookie policy</h2>
                <p className="legal-lede">Which cookies and similar technologies the Site uses, for what purpose, and how you can accept, refuse or configure them.</p>

                <h3><span>3.1</span>What cookies are</h3>
                <p>Cookies are small files stored on your device when you visit a website. Among other things, they make it possible to remember your preferences, recognise your browser on later visits or measure how the site is used. Alongside cookies, the Site may use similar technologies such as pixels, tags or browser local storage. In this policy we refer to all of them as &quot;cookies&quot;.</p>

                <h3><span>3.2</span>Types of cookies by purpose</h3>
                <ul>
                  <li><strong>Technical or necessary:</strong> essential for the Site to work and to remember your consent choices. They do not require your consent.</li>
                  <li><strong>Analytics:</strong> allow us to understand how users browse (pages viewed, time, traffic source) in order to improve the Site. Activated only with your consent.</li>
                  <li><strong>Advertising and remarketing:</strong> allow us to show you advertisements for the project on other platforms (Google, Facebook, Instagram) and to measure whether a campaign generated an enquiry. Activated only with your consent.</li>
                  <li><strong>Functional:</strong> enable services such as the chat or advanced forms. Activated only with your consent unless strictly necessary for the service you request.</li>
                </ul>

                <h3><span>3.3</span>Cookies used on this Site</h3>
                <p>The cookies planned for the Site are listed below. Durations are indicative and may vary depending on each provider&apos;s configuration and the region you browse from. <mark className="legal-ph">[Verify with a cookie scan once the tools are installed and adjust the table]</mark>.</p>
                <div className="legal-tbl-wrap">
                <table className="legal-tbl">
                  <thead><tr><th>Cookie</th><th>Provider</th><th>Type</th><th>Purpose</th><th>Duration</th></tr></thead>
                  <tbody>
                    <tr><td><code><mark className="legal-ph">[consent cookie]</mark></code></td><td>bahiamarterrenas.com (first-party)</td><td>Technical</td><td>Remembering your cookie consent preferences.</td><td>Up to 12 months</td></tr>
                    <tr><td><code>_ga</code>, <code>_ga_*</code></td><td>Google Analytics 4 (Google)</td><td>Analytics</td><td>Distinguishing users and sessions to measure use of the Site in aggregate.</td><td>Up to 2 years</td></tr>
                    <tr><td><code>_gcl_au</code>, <code>_gcl_aw</code></td><td>Google Ads (Google)</td><td>Advertising</td><td>Measuring conversions from Google ads and linking clicks to enquiries.</td><td>Up to 3 months</td></tr>
                    <tr><td><code>IDE</code>, <code>test_cookie</code></td><td>doubleclick.net (Google)</td><td>Advertising</td><td>Remarketing and frequency capping for Google ads.</td><td>Up to 13 months</td></tr>
                    <tr><td><code>_fbp</code>, <code>_fbc</code></td><td>Meta Pixel (Meta)</td><td>Advertising</td><td>Showing project advertisements on Facebook and Instagram and measuring their effectiveness.</td><td>Up to 3 months</td></tr>
                    <tr><td><code><mark className="legal-ph">[widget cookies]</mark></code></td><td>GoHighLevel / LeadConnector (HighLevel, Inc.)</td><td>Functional</td><td>Maintaining the chat and form session and linking the conversation to your contact record.</td><td>Session / up to 12 months</td></tr>
                  </tbody>
                </table>
                </div>

                <h3><span>3.4</span>Consent and how to manage it</h3>
                <p>When you access the Site, a notice is displayed allowing you to accept all cookies, refuse non-essential cookies or configure them by category. Analytics, advertising and functional cookies are not activated until you accept them. You can change your decision at any time via the <mark className="legal-ph">[&quot;Cookie settings&quot; — link to the consent manager]</mark> link in the footer.</p>
                <p>You can also delete or block cookies through your browser settings. Note that blocking technical cookies may affect how the Site works:</p>
                <ul>
                  <li><a href="https://support.google.com/chrome/answer/95647" rel="noopener noreferrer" target="_blank">Google Chrome</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" rel="noopener noreferrer" target="_blank">Safari</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" rel="noopener noreferrer" target="_blank">Mozilla Firefox</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" rel="noopener noreferrer" target="_blank">Microsoft Edge</a></li>
                </ul>
                <p>You can also manage personalised advertising directly in <a href="https://adssettings.google.com" rel="noopener noreferrer" target="_blank">Google Ads Settings</a> and <a href="https://www.facebook.com/adpreferences" rel="noopener noreferrer" target="_blank">Meta ad preferences</a>, install the <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank">Google Analytics opt-out add-on</a>, or use <a href="https://www.youronlinechoices.com" rel="noopener noreferrer" target="_blank">YourOnlineChoices</a> (EU) or <a href="https://optout.aboutads.info" rel="noopener noreferrer" target="_blank">AboutAds</a> (US).</p>

                <h3><span>3.5</span>International transfers</h3>
                <p>Google, Meta and HighLevel process the data obtained through cookies from the United States and other countries. The safeguards applicable to these transfers are described in section 2.6 of the <a href="#privacy">Privacy policy</a>.</p>

                <h3><span>3.6</span>Updates</h3>
                <p>This policy will be reviewed whenever we add or remove tools that use cookies. The date of the last update is shown in the header of this document.</p>
              </article>

              {/* 04 TERMS */}
              <article className="legal-policy" id="terms">
                <div className="l2">04 — Terms and conditions of use</div>
                <h2 className="legal-policy_title h4">Terms and conditions of use</h2>
                <p className="legal-lede">Conditions governing access to the Site and use of its content and services.</p>

                <h3><span>4.1</span>Purpose and acceptance</h3>
                <p>These terms govern access to and use of the website bahiamarterrenas.com, owned by LANDMASS CAPITAL, S.R.L. (see the <a href="#legal-notice">Legal notice</a>). Accessing the Site and using any of its features implies full acceptance of these terms, the <a href="#privacy">Privacy policy</a> and the <a href="#cookies">Cookie policy</a>. If you do not agree with them, please do not use the Site.</p>

                <h3><span>4.2</span>Conditions of use</h3>
                <p>You undertake to use the Site lawfully and in accordance with these terms. In particular, you may not:</p>
                <ul>
                  <li>Use the Site for fraudulent or unlawful purposes or in bad faith.</li>
                  <li>Extract its content in bulk or by automated means (scraping), reverse-engineer it, or attempt to access restricted areas or the systems that support it.</li>
                  <li>Introduce viruses, malicious code or any element that could damage the Site, its providers or other users&apos; devices.</li>
                  <li>Provide false or third-party data in the forms, impersonate another person, or use the contact channels to send unsolicited communications.</li>
                  <li>Reproduce, distribute or publicly communicate the Site&apos;s content without authorisation, except as provided in section 4.4.</li>
                </ul>

                <h3><span>4.3</span>Informational nature of the Site</h3>
                <p>The Site is purely informational and promotional. Its content <strong>does not constitute a contractual offer</strong> or a binding invitation to contract, nor legal, tax, financial or investment advice. The features, areas, amenities, timelines and, where shown, prices are indicative and may change without notice. The conditions applicable to any reservation or purchase will be solely those set out in the contractual documentation signed with Landmass Capital. Please refer to the <a href="#project">Project information</a> section for the specific notices.</p>

                <h3><span>4.4</span>Intellectual and industrial property</h3>
                <p>All content on the Site (texts, photographs, renderings, floor plans, videos, animations, designs, code and structure), together with the trademarks, trade names and logos displayed on it, are the property of Landmass Capital or of third parties who have authorised their use, and are protected by Law No. 65-00 on Copyright, Law No. 20-00 on Industrial Property and applicable international treaties. Accessing the Site grants you no rights over them. You may share links to the Site and view and print its content for personal, non-commercial use; any other use requires the prior written authorisation of Landmass Capital. Third-party trademarks that may be mentioned (for example, Google, Meta or WhatsApp) belong to their respective owners.</p>

                <h3><span>4.5</span>Forms and contact channels</h3>
                <p>By submitting a form or contacting us via WhatsApp, telephone or e-mail, you warrant that the details provided are true and up to date and that you are over 18 years of age, and you agree to be contacted through the channel indicated in order to handle your request, under the terms of the <a href="#privacy">Privacy policy</a>. Landmass Capital reserves the right not to respond to requests that are manifestly abusive, fraudulent or unrelated to the purpose of the Site.</p>

                <h3><span>4.6</span>Third-party links and services</h3>
                <p>The Site may include third-party links or integrations (maps, messaging, social networks, videos). Landmass Capital does not control these services and is not responsible for their content, availability or practices. Use of those services is governed by their own terms.</p>

                <h3><span>4.7</span>Disclaimer of warranties and liability</h3>
                <p>Landmass Capital endeavours to keep the Site available and up to date, but does not guarantee the absence of interruptions, errors or omissions, or that it is free from viruses or other harmful elements. To the fullest extent permitted by law, Landmass Capital shall not be liable for damages arising from use of the Site, from the inability to access it, from decisions taken solely on the basis of its content, or from third-party content or services. Nothing in these terms limits the rights granted to you on a mandatory basis by Law No. 358-05 on the Protection of Consumer and User Rights or by the consumer legislation of your place of residence.</p>

                <h3><span>4.8</span>Amendments</h3>
                <p>Landmass Capital may amend the Site, its content and these terms at any time. Amendments apply from their publication on the Site, showing the date of the last update.</p>

                <h3><span>4.9</span>Severability</h3>
                <p>If any provision of these terms is declared void or unenforceable, the remaining provisions shall remain valid and effective.</p>

                <h3><span>4.10</span>Governing law and jurisdiction</h3>
                <p>These terms are governed by the laws of the Dominican Republic. Any dispute arising from access to or use of the Site shall be submitted to the ordinary courts of the National District, Santo Domingo, Dominican Republic, without prejudice to the rights you may have as a consumer under the mandatory legislation of your place of residence. In the event of any discrepancy between the Spanish and English versions of this document, the Spanish version shall prevail.</p>

                <h3><span>4.11</span>Contact</h3>
                <p>For any question about these terms, write to <a href={EMAIL_HREF}>{EMAIL}</a>.</p>
              </article>

              {/* 05 PROJECT */}
              <article className="legal-policy" id="project">
                <div className="l2">05 — Project information</div>
                <h2 className="legal-policy_title h4">Project information</h2>
                <p className="legal-lede">Notices to bear in mind when assessing the information about Bahía Mar Boutique Residences published on the Site and in sales materials.</p>

                <div className="legal-callout">
                  <p>Bahía Mar Boutique Residences is a real estate development under way, managed by Landmass Capital in Las Terrenas, Samaná (Dominican Republic). All information published on the Site is for information purposes and is subject to change until the relevant contractual documentation is signed.</p>
                </div>

                <h3><span>5.1</span>Images and representations</h3>
                <p>Images of the project are renderings, artist&apos;s impressions and reference photographs of the surroundings. Furniture, décor, vegetation, finishes, views and landscape elements shown are illustrative and do not necessarily form part of the villa or the common areas. The finished product may differ from the representations shown.</p>

                <h3><span>5.2</span>Specifications and master plan</h3>
                <p>Areas, layouts, villa types, materials, fittings, amenities, phases and the project master plan are indicative and may be modified for technical, planning, legal, environmental or design reasons or due to the availability of materials, and are subject to obtaining the relevant licences, permits and approvals. The definitive features of each villa will be those set out in the contractual documentation and the attached technical specifications.</p>

                <h3><span>5.3</span>Delivery dates</h3>
                <p>Any construction start or delivery date communicated is an estimate and subject to confirmation. Binding deadlines will be solely those established in the contract signed with each buyer.</p>

                <h3><span>5.4</span>Prices and financial terms</h3>
                <p>Any prices communicated are expressed in US dollars (USD), are indicative and do not include taxes, title transfer costs, notary fees or other costs payable by the buyer. They may change without notice until the reservation or promise of sale is signed. The applicable payment terms will be those set out in the contractual documentation.</p>

                <h3><span>5.5</span>Tax incentives (CONFOTUR)</h3>
                <p>Landmass Capital is pursuing classification of the project under the benefits of Law No. 158-01 on the Promotion of Tourism Development, as amended. Approval is the exclusive prerogative of the Tourism Development Council (CONFOTUR); therefore, no tax benefit is guaranteed until definitive classification is obtained. Whether the incentives apply to a given buyer depends on their particular circumstances and on the steps they take on their own account; we recommend consulting an independent tax adviser.</p>

                <h3><span>5.6</span>Sustainability</h3>
                <p>The Bahía Mar master plan has been designed in line with the guidelines of the LEED for Cities and Communities rating system. Unless expressly stated otherwise, this alignment does not mean that the project holds an issued LEED certification.</p>

                <h3><span>5.7</span>No guarantee of returns</h3>
                <p>The information published does not constitute investment advice. Landmass Capital does not guarantee rental income, capital gains, occupancy, appreciation or any return on investment. Purchasing property involves risks, and its performance depends on market factors beyond our control. Any projection that may be provided is based on assumptions and should not be interpreted as a promise of results.</p>

                <h3><span>5.8</span>Independent advice</h3>
                <p>We recommend that you review all documentation with an independent lawyer and tax adviser before signing any reservation or contract. Buyers are always entitled to appoint their own lawyer to review the transaction documents.</p>

                <h3><span>5.9</span>Contractual documentation</h3>
                <p>The conditions governing the purchase of a villa will be exclusively those established in the reservation agreement, the promise of sale and its annexes, and the corresponding deed of sale, which shall prevail over any information published on the Site or in sales materials.</p>
              </article>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================================
   components/pages/legal/LegalEs.tsx
   ============================================================ */

/* GENERADO por scripts/vibe-export.mjs — no editar aquí.
 * La fuente está en el repo del clon; esta copia es solo para GoHighLevel Vibe. */
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
