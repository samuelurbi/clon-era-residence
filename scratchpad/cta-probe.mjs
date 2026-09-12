// Probe dimensions of a list of image files with ffprobe (one at a time).
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const dir = 'C:/Users/kevin/OneDrive/Documentos/Claude Code/clon-era-residence/.claude/worktrees/bahia-mar-finish/public/images';
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : [
      'img_cta_1920.webp',
      'era-residence-garden-2.webp',
      'img_cam_09.webp',
      'era-residence-ground-floor-2.webp',
      'bahiamar-cta-1.webp',
      'bahiamar-cta-1-p-500.webp',
      'bahiamar-cta-1-p-800.webp',
      'bahiamar-cta-1-p-1080.webp',
      'bahiamar-cta-1-p-1600.webp',
      'bahiamar-cta-1-p-2000.webp',
      'bahiamar-cta-2.webp',
      'bahiamar-cta-2-p-2000.webp',
      'bahiamar-cta-3.webp',
      'bahiamar-cta-3-p-2000.webp',
    ];

for (const f of files) {
  const p = path.isAbsolute(f) ? f : path.join(dir, f);
  try {
    const out = execFileSync('ffprobe', [
      '-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', p,
    ]).toString().trim();
    const [w, h] = out.split(',').map(Number);
    console.log(`${f}\t${w}x${h}\t${(w / h).toFixed(3)}`);
  } catch (e) {
    console.log(`${f}\tERROR ${e.message.split('\n')[0]}`);
  }
}
