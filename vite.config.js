import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
  server: {
    middlewareMode: true,
    fs: {
      allow: ['..'],
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    createVuePlugin(),
  ],
});
