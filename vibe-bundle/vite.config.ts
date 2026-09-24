import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/*
 * En LOCAL los assets se sirven desde el `public/` del repo, igual que
 * hacía Next: así el gemelo se puede verificar entero sin depender de
 * ningún hosting externo. Dentro de Vibe esa carpeta no existe —las
 * rutas ya vienen apuntando al host externo desde vibe-export— y esta
 * línea se cae sola.
 */
const repoPublic = path.resolve(here, '..', 'public');

export default defineConfig({
  plugins: [react()],
  publicDir: existsSync(repoPublic) ? repoPublic : 'public',
  resolve: {
    alias: {
      '@': path.resolve(here, 'src'),
    },
  },
});
