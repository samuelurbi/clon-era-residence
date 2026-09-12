// Comprueba que el preloader de la home sigue enmascarándose con el arco
// tras apuntar la máscara a /images/preloader_arch-l.svg (local) en vez del
// CDN de Webflow. Captura el preloader a mitad de animación y registra
// qué URL de máscara resuelve el navegador y si hay peticiones al CDN.
import { pathToFileURL } from 'node:url';

const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href));

const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const cdnHits = [];
const svgHits = [];
page.on('request', (r) => {
  const u = r.url();
  if (u.includes('website-files.com')) cdnHits.push(u);
  if (u.includes('preloader_arch-l.svg')) svgHits.push(u);
});
page.on('response', (r) => {
  if (r.url().includes('preloader_arch-l.svg')) console.log('svg response', r.status(), r.url());
});

await page.goto('http://localhost:3000/', { waitUntil: 'load' });

// Tomar la máscara calculada antes de que el preloader termine.
const computed = await page.evaluate(() => {
  const el = document.querySelector('[data-preloader]');
  if (!el) return null;
  const cs = getComputedStyle(el);
  return {
    maskImage: cs.maskImage || cs.webkitMaskImage,
    maskSize: cs.maskSize || cs.webkitMaskSize,
  };
});
console.log('computed mask:', JSON.stringify(computed, null, 2));

await page.waitForTimeout(2500);
await page.screenshot({ path: `${OUT}/fix-1-preloader-1440-mid.png` });
await page.waitForTimeout(6500);
await page.screenshot({ path: `${OUT}/fix-1-preloader-1440-end.png` });

console.log('CDN requests (website-files.com):', cdnHits.length, cdnHits);
console.log('local svg requests:', svgHits);

await browser.close();
