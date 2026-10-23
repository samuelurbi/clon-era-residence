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

import { EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, SITE_DOMAIN } from '@/data/contact';
import { localize } from '@/lib/i18n';

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
