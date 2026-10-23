/* ============================================================
 *  FormTracking — conecta el formulario «Book a call» al CRM.
 *
 *  El formulario vive en BookCallModal (components-layout.tsx), que es
 *  marcado portado de Webflow y se mantiene a mano. En lugar de tocar
 *  ese archivo, este componente se cuelga del formulario por su id
 *  estable (`#wf-form-Book-a-call`) y de su botón de envío
 *  (`[data-form-btn]`), que ya están en el DOM aunque el modal esté
 *  cerrado (display: none).
 *
 *  Al enviar: valida, recoge los campos, lanza el evento de tracking
 *  al CRM (fire-and-forget) y conmuta el formulario a su estado de
 *  éxito/error, igual que lo haría Webflow.
 * ============================================================ */

import { useEffect } from "react";
import { getTrackingSessionId, postTrackingEvent } from "@/lib/tracking";

/** IDs de los campos personalizados registrados en la sub-cuenta. */
const CUSTOM = {
  title: "6nVQcIS8FGdEqcTswN0e",
  utm_source: "JNJCHObCXmN2wM4p5C42",
  utm_medium: "jcPK4eW3hrpIx0Uh79sP",
  utm_campaign: "TLQEE2SBhoOTNirf85ZM",
  utm_content: "cOi1lE8wy5pbiFGp6y0g",
  utm_url: "yzAbRFON9i28qj2N0TJf",
  page_url: "6morHuQLIel6pHxdX0sd",
} as const;

const FORM_ID = "wf-form-Book-a-call";
const TRACKING_ID = "tk_5c60ce26988944169c9b712542d8559d";
const LOCATION_ID = "P4iUgb7RrEl5Ug2G3g2C";
const PROJECT_ID = "1786543022118088456";

/*
 * Prefijo de país por defecto del sitio: Bahía Mar está en República
 * Dominicana y su público principal es dominicano y estadounidense, ambos
 * bajo +1. Se aplica sólo cuando el número no trae prefijo internacional.
 */
const DEFAULT_COUNTRY_CODE = "+1";

/**
 * Normaliza un teléfono a E.164. El CRM descarta el contacto (responde 200
 * sin error) si el teléfono no va en formato internacional con «+» y prefijo
 * de país, así que esto se hace justo antes de enviar:
 *   - quita espacios, guiones, puntos y paréntesis;
 *   - «00» inicial → «+» (prefijo internacional literal);
 *   - si no empieza por «+», antepone el prefijo por defecto del sitio;
 *   - si queda vacío, devuelve cadena vacía (no se envía).
 */
function normalizePhone(raw: string): string {
  let v = raw.trim();
  if (!v) return "";
  // «00» internacional → «+»
  if (v.startsWith("00")) {
    v = "+" + v.slice(2);
  }
  // Quita todo lo que no sea dígito ni «+»
  v = v.replace(/[^\d+]/g, "");
  // Evita «++» o «+» suelto
  if (v.includes("+")) {
    v = v.replace(/\+/g, "");
    v = "+" + v;
  }
  if (!v.startsWith("+")) {
    v = DEFAULT_COUNTRY_CODE + v;
  }
  // Debe quedar «+» seguido de al menos 7 dígitos; si no, descarta.
  return /^\+\d{7,}$/.test(v) ? v : "";
}

/** Rellena los UTM ocultos desde la query string y la URL actual. */
function fillHiddenFields(form: HTMLFormElement) {
  const params = new URLSearchParams(window.location.search);
  const set = (name: string, value: string) => {
    const el = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
    if (el && !el.value) el.value = value;
  };
  set("utm_source", params.get("utm_source") ?? "");
  set("utm_medium", params.get("utm_medium") ?? "");
  set("utm_campaign", params.get("utm_campaign") ?? "");
  set("utm_content", params.get("utm_content") ?? "");
  set("utm_url", window.location.href);
  set("page_url", window.location.pathname);
}

export function FormTracking() {
  useEffect(() => {
    let btn: HTMLElement | null = null;
    let onClick: ((e: Event) => void) | null = null;

    const wire = () => {
      const form = document.getElementById(FORM_ID) as HTMLFormElement | null;
      if (!form) return;
      const button = form.querySelector<HTMLElement>("[data-form-btn]");
      if (!button || button === btn) return;

      btn = button;
      fillHiddenFields(form);

      onClick = (e: Event) => {
        e.preventDefault();

        const data = new FormData(form);
        const get = (k: string) => String(data.get(k) ?? "").trim();

        // Validación mínima: nombre, email y teléfono son required.
        const name = get("name");
        const email = get("email");
        const phone = normalizePhone(get("phone"));
        if (!name || !email || !phone) {
          // Deja que el navegador marque los required; si no responde,
          // muestra el estado de error.
          if (!form.reportValidity()) return;
        }

        const wrapper = form.parentElement; // .modal_cta_form.w-form
        const success = wrapper?.querySelector<HTMLElement>(".form_success");
        const error = wrapper?.querySelector<HTMLElement>(".form_error");

        // `phone` ya va en E.164 (normalizePhone). El formulario no recoge
        // país, así que no se envía `country`: el CRM descarta el contacto
        // si recibe un texto libre que no sea ISO de 2 letras.
        const trackingPayload = {
          type: "external_form_submission",
          timestamp: Date.now(),
          formId: "book-a-call",
          formData: {
            first_name: name,
            email,
            phone,
            calendar_notes: get("message"),
          },
          formLabels: {
            first_name: "Name",
            email: "Email",
            phone: "Phone",
            calendar_notes: "Message",
          },
          url: window.location.href,
          title: document.title,
          path: window.location.pathname,
          userAgent: navigator.userAgent,
          trackingId: TRACKING_ID,
          locationId: LOCATION_ID,
          projectId: PROJECT_ID,
          sessionId: getTrackingSessionId(),
          properties: {
            deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
              ? "mobile"
              : "desktop",
            source: "ai_studio",
            projectId: PROJECT_ID,
            formName: "Book a call",
          },
        };

        try {
          postTrackingEvent(trackingPayload, {
            customFields: {
              [CUSTOM.title]: { value: get("title"), label: "Title" },
              [CUSTOM.utm_source]: {
                value: get("utm_source"),
                label: "UTM Source",
              },
              [CUSTOM.utm_medium]: {
                value: get("utm_medium"),
                label: "UTM Medium",
              },
              [CUSTOM.utm_campaign]: {
                value: get("utm_campaign"),
                label: "UTM Campaign",
              },
              [CUSTOM.utm_content]: {
                value: get("utm_content"),
                label: "UTM Content",
              },
              [CUSTOM.utm_url]: { value: get("utm_url"), label: "UTM URL" },
              [CUSTOM.page_url]: { value: get("page_url"), label: "Page URL" },
            },
          });

          // Éxito: oculta el formulario y muestra el agradecimiento.
          if (success) {
            form.style.display = "none";
            success.style.display = "block";
          }
        } catch {
          if (error) error.style.display = "block";
        }
      };

      button.addEventListener("click", onClick);
    };

    // El formulario está en el DOM desde el primer render (el modal sólo
    // se oculta), pero por si React aún no lo hubiera pintado se reintenta.
    wire();
    const observer = new MutationObserver(wire);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      if (btn && onClick) btn.removeEventListener("click", onClick);
      btn = null;
      onClick = null;
    };
  }, []);

  return null;
}
