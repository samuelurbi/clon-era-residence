/**
 * Escribe bahia-mar-personalizacion/inventario/chrome-pages.json (la carpeta
 * es un enlace simbólico al árbol compartido, que la herramienta Write no
 * quiere tocar).
 *
 *   node scratchpad/write-inventario-chrome-pages.mjs
 */
import { writeFileSync } from 'node:fs'

const RUTA = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/bahia-mar-personalizacion/inventario/chrome-pages.json'

const inventario = [
  {
    destino: 'public/images/placeholder.60f9b1840c.svg',
    origen:
      '(no es del cliente) placeholder genérico de Webflow, descargado de ' +
      'https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg ' +
      '— cuadrado gris con icono de imagen, 140x140, sin marca',
    uso:
      'components/villas/LightboxModal.tsx — src inicial del <img data-lightbox-img> antes de ' +
      'que el JS cargue la foto real; el fichero faltaba en public/ (404 silencioso)',
  },
]

writeFileSync(RUTA, JSON.stringify(inventario, null, 2) + '\n')
console.log(`escrito ${RUTA} (${inventario.length} entradas)`)
