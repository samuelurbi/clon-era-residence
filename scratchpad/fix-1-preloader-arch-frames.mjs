// Captura varios fotogramas del preloader durante la fase en que el arco
// (máscara local /images/preloader_arch-l.svg) sube y revela la página.
import { pathToFileURL } from 'node:url';

const { chromium } = await import('playwright').catch(() =>
  import(pathToFileURL('C:/Users/kevin/.claude-work/tools/node_modules/playwright/index.mjs').href));

const OUT = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/scratchpad';

const browser = await chromium.launch({
  executablePath: 'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe',
  headless: true,
});
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto('http://localhost:3000/', { waitUntil: 'load' });

const t0 = Date.now();
for (const ms of [7000, 7250, 7500, 7750, 8000]) {
  const wait = ms - (Date.now() - t0);
  if (wait > 0) await page.waitForTimeout(wait);
  const archY = await page.evaluate(() => {
    const el = document.querySelector('[data-preloader]');
    return el ? getComputedStyle(el).getPropertyValue('--arch-y').trim() : null;
  });
  await page.screenshot({ path: `${OUT}/fix-1-preloader-arch-${ms}.png` });
  console.log(ms, 'ms  --arch-y =', archY);
}

await browser.close();
