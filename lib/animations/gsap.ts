'use client';

/**
 * Punto único de configuración de GSAP.
 *
 * Importa SIEMPRE gsap desde aquí, nunca desde 'gsap' directamente: así
 * los plugins y las curvas propias quedan registrados una sola vez. Al ser
 * un módulo ES, el cuerpo se ejecuta una única vez por bundle de cliente.
 */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { SplitText } from 'gsap/SplitText';
import { EASES } from './constants';

// Los plugins tocan el DOM: en el render de servidor no hay nada que registrar.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, CustomEase, SplitText);

  for (const [name, curve] of Object.entries(EASES)) {
    // Idempotente: volver a crear una curva con el mismo nombre la sustituye.
    CustomEase.create(name, curve);
  }

  // Sin esto, GSAP "salta" tras un frame largo y desincroniza el scroll suave.
  gsap.ticker.lagSmoothing(0);
}

export { gsap, ScrollTrigger, CustomEase, SplitText };
