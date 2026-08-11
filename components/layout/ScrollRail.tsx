/* eslint-disable @next/next/no-img-element */
/**
 * GENERADO por scripts/generate-header.mjs — no editar a mano.
 * Carril izquierdo de la home: la barra de progreso «00» —que además se
 * puede arrastrar, ver scrollBar() en lib/animations/chrome.ts— y el
 * indicador «Scroll». En las páginas interiores NO existe: ahí va el
 * rastro de migas.
 */

export function ScrollRail() {
  return (
    <>
      <div data-theme="" className="s-bar-w">
        <div data-s-bar="" className="s-bar">
          <div data-s-bar-thumb="" className="s-bar_thumb"><div data-s-bar-label="" className="l1 a-center">00</div></div>
          <div data-s-bar-fill="" className="s-bar_fill"></div>
          <div data-s-bar-track="" className="s-bar_track"></div>
        </div>
      </div>
      <div data-theme="" className="s-down">
        <div className="s-down_arrow w-embed">
          <svg width="100%" height="100%" viewBox="0 0 48 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.36533 3C7.10389 3.54701 6.85117 4.02564 6.60716 4.4359C6.34572 4.84615 6.09299 5.18804 5.84899 5.46154L45 5.46154L45 6.53846L5.84899 6.53846C6.09299 6.82906 6.34572 7.17949 6.60716 7.58974C6.85117 8 7.10389 8.47009 7.36533 9L6.45029 9C5.35226 7.75214 4.20193 6.82906 2.99932 6.23077L2.99932 5.76923C4.20193 5.18804 5.35226 4.26496 6.45029 3L7.36533 3Z" fill="currentColor"></path>
          </svg>
        </div>
        <div className="l2">Scroll</div>
      </div>
    </>
  );
}
