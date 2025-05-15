import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': 'globalThis',
  },
  optimizeDeps: {
    include: ['nanoid', 'pkce-challenge'],
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
