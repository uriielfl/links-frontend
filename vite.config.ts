import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({typescript: false})],
  resolve: {
    alias: {
      'components': '/src/components',
      'ampli': '/src/ampli',
      'utils': '/src/utils',
      'pages': '/src/pages',
      'routers': '/src/routers',
      'assets': '/src/assets',
      'services': '/src/services',
      'api': '/src/api',
      'context': '/src/context',
    },
  },
});