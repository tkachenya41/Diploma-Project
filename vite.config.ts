import path from 'node:path';
import * as url from 'node:url';
import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react-swc";


export default defineConfig(() => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '~': path.resolve(
          path.dirname(url.fileURLToPath(import.meta.url)),
          'src'
        )
      }
    }
  };
});
