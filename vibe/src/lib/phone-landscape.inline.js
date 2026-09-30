/*
 * Teléfono en horizontal = la web de ESCRITORIO, encajada en la pantalla.
 *
 * Va en línea en el <head> (app/layout.tsx y vibe/index.template.html lo
 * inyectan desde este archivo), antes de que se pinte nada.
 *
 * Por qué así: todo el CSS heredado de Webflow separa escritorio y móvil
 * por ANCHO (`max-width: 991px`) y la capa de animación también
 * (BREAKPOINT = 992). Un teléfono girado mide ~844px, así que caía en el
 * diseño de móvil —una columna pensada para 390px— estirado a lo ancho.
 * Con la etiqueta viewport a 1024px de ancho, el navegador maqueta la
 * página como un escritorio de 1024 y la reduce hasta que cabe: misma
 * estructura, mismas animaciones, sin duplicar CSS.
 *
 * Solo en teléfonos (lado corto de la pantalla < 600px y puntero táctil):
 * una tablet en horizontal ya pasa de 992px por sí misma.
 *
 * El texto pequeño de escritorio quedaría ilegible reducido (un párrafo
 * saldría a ~7px): la clase `phone-landscape` en <html> sube esos tamaños
 * en styles/theme.css, sin tocar la maquetación.
 */
(function () {
  var DESKTOP_WIDTH = 1024;
  var PORTRAIT = 'width=device-width, initial-scale=1';

  /*
   * Puede haber MÁS DE UNA etiqueta viewport: Next añade la suya al
   * hidratar, después de este script, y la última es la que manda. Por
   * eso se escriben todas y se vigila el <head> por si aparece otra.
   */
  var wanted = PORTRAIT;
  function sync() {
    var metas = document.querySelectorAll('meta[name="viewport"]');
    if (!metas.length) {
      var meta = document.createElement('meta');
      meta.name = 'viewport';
      document.head.appendChild(meta);
      metas = [meta];
    }
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute('content') !== wanted) metas[i].setAttribute('content', wanted);
    }
  }

  function isLandscape() {
    if (screen.orientation && screen.orientation.type) {
      return screen.orientation.type.indexOf('landscape') === 0;
    }
    return Math.abs(window.orientation || 0) === 90;
  }

  function apply() {
    var shortSide = Math.min(screen.width, screen.height);
    var longSide = Math.max(screen.width, screen.height);
    var phone = shortSide < 600 && window.matchMedia('(pointer: coarse)').matches;
    var on = phone && isLandscape();
    wanted = on
      ? 'width=' + DESKTOP_WIDTH + ', initial-scale=' + (longSide / DESKTOP_WIDTH).toFixed(4)
      : PORTRAIT;
    sync();
    document.documentElement.classList.toggle('phone-landscape', on);
  }

  apply();
  // Solo reescribe si el contenido difiere: no entra en bucle.
  new MutationObserver(sync).observe(document.head, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['content'],
  });
  window.addEventListener('orientationchange', apply);
  window.addEventListener('resize', apply);
  if (screen.orientation && screen.orientation.addEventListener) {
    screen.orientation.addEventListener('change', apply);
  }
})();
