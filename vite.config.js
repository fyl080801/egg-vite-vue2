import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue2';

export default defineConfig({
  server: {
    // 重点，使用中间件模式运行
    middlewareMode: true,
    fs: {
      allow: ['..'],
    },
  },
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    vue(),
  ],
});
