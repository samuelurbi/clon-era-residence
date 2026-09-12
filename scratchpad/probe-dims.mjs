// Uso: node probe-dims.mjs <fichero...>  — imprime "ancho x alto  ratio  ruta"
import { execFileSync } from 'node:child_process';

for (const f of process.argv.slice(2)) {
  try {
    const out = execFileSync('ffprobe', [
      '-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height', '-of', 'csv=p=0', f,
    ]).toString().trim();
    const [w, h] = out.split(',').map(Number);
    console.log(`${w}x${h}  ${(w / h).toFixed(3)}  ${f}`);
  } catch (e) {
    console.log(`ERROR  ${f}  ${e.message.split('\n')[0]}`);
  }
}
