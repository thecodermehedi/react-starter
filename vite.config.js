import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { fileURLToPath, URL } from 'url';

export default defineConfig({
 plugins: [react()],
 resolve: {
  alias: {
   '@': fileURLToPath(new URL('./src', import.meta.url)),
   '@api': fileURLToPath(new URL('./src/api', import.meta.url)),
   '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
   '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
   '@context': fileURLToPath(new URL('./src/context', import.meta.url)),
   '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
   '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
   '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
   '@routes': fileURLToPath(new URL('./src/routes', import.meta.url)),
   '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),
   '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
   '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
   '@providers': fileURLToPath(new URL('./src/providers', import.meta.url)),
   '@lib': fileURLToPath(new URL('./src/lib', import.meta.url))
  }
 }
});
