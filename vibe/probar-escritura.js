/* ============================================================
 *  ¿Se pueden ESCRIBIR archivos en GoHighLevel Vibe por API?
 *
 *  Se ejecuta en la CONSOLA del navegador, en el contexto del iframe
 *  del editor (leadgen-vibe-ai-builder.leadconnectorhq.com).
 *
 *  Cómo funciona, y por qué es seguro:
 *
 *  El token de sesión de GoHighLevel vive dentro de ese iframe y no se
 *  puede leer desde fuera. En vez de pedirlo —una credencial no debe
 *  copiarse ni pegarse por ahí— este script INTERCEPTA una petición que
 *  la propia aplicación ya hace, se queda con sus cabeceras tal cual, y
 *  las reutiliza. El token nunca se imprime ni sale del navegador.
 *
 *  ---------------------------------------------------------------
 *  VERSIÓN 2 — lenta a propósito.
 *
 *  La v1 lanzaba 9 peticiones seguidas y GoHighLevel respondió 429
 *  ("demasiadas peticiones"): su limitador las cortó todas y no se pudo
 *  saber nada. Un 429 no dice ni sí ni no, solo "más despacio".
 *
 *  Así que ahora: 3 pruebas en vez de 9, separadas por 6 segundos, y si
 *  aun así sale un 429 espera 20 s y reintenta esa misma una vez. Tarda
 *  cerca de un minuto. Es lento aposta — machacar la API de una cuenta
 *  real no compensa.
 *  ---------------------------------------------------------------
 *
 *  QUÉ ESPERAR:
 *    - 200 / 201  -> se puede escribir. Habrá que borrar __prueba.txt.
 *    - 404 / 405  -> ese endpoint no acepta escritura.
 *    - 400 / 422  -> acepta el método pero el cuerpo va mal: es BUENA
 *                    señal (existe la ruta), solo hay que dar con los
 *                    nombres de campo correctos.
 *    - 401 / 403  -> no se capturaron bien las cabeceras.
 * ============================================================ */

(() => {
  const API = /vibe-ai\/projects\/[^/]+\/files/;
  const fetchOriginal = window.fetch;
  let capturada = null;

  window.fetch = function (...args) {
    try {
      const req = new Request(...args);
      if (API.test(req.url)) {
        capturada = req;
        console.log('%c[capturada]', 'color:#0a0', req.method, req.url.split('?')[0]);
      }
    } catch (_) { /* peticiones raras: se ignoran */ }
    return fetchOriginal.apply(this, args);
  };

  const esperar = (s) => new Promise((r) => setTimeout(r, s * 1000));

  /* Solo las 3 combinaciones más probables, en orden de probabilidad. */
  const PRUEBAS = [
    { metodo: 'POST', cuerpo: { path: 'src/__prueba.txt', content: 'hola', kind: 'text' } },
    { metodo: 'PUT', cuerpo: { path: 'src/__prueba.txt', content: 'hola', kind: 'text' } },
    { metodo: 'PATCH', cuerpo: { path: 'src/__prueba.txt', content: 'hola', kind: 'text' } },
  ];

  window.probarEscritura = async () => {
    if (!capturada) {
      console.log('%cTodavía no he capturado nada. Guarda un archivo en el editor y vuelve a ejecutar probarEscritura()', 'color:#c00');
      return;
    }

    const url = capturada.url;
    const cabeceras = new Headers(capturada.headers);
    cabeceras.set('content-type', 'application/json');

    console.log('URL:', url.split('?')[0]);
    console.log('%cEsto tarda ~1 minuto. No cierres la consola.', 'color:#06c');

    const resumen = [];

    for (let i = 0; i < PRUEBAS.length; i++) {
      const { metodo, cuerpo } = PRUEBAS[i];

      // Un reintento si el limitador nos corta.
      for (let intento = 1; intento <= 2; intento++) {
        try {
          const r = await fetchOriginal(url, { method: metodo, headers: cabeceras, body: JSON.stringify(cuerpo) });
          const texto = (await r.text()).slice(0, 150);

          if (r.status === 429 && intento === 1) {
            console.log(`${metodo} -> 429 (limitador). Espero 20 s y reintento…`);
            await esperar(20);
            continue;
          }

          console.log(`${metodo} -> ${r.status}`, texto);
          resumen.push(`${metodo} -> ${r.status} ${texto}`);
          break;
        } catch (e) {
          console.log(`${metodo} -> fallo de red:`, e.message);
          resumen.push(`${metodo} -> fallo de red: ${e.message}`);
          break;
        }
      }

      if (i < PRUEBAS.length - 1) await esperar(6);
    }

    console.log('%c--- RESUMEN (copia estas líneas) ---', 'color:#0a0');
    for (const l of resumen) console.log(l);
  };

  console.log('%cListo (v2, lento).', 'color:#0a0', 'Ahora: 1) guarda cualquier archivo en el editor  2) escribe  probarEscritura()  y pulsa Enter');
})();
