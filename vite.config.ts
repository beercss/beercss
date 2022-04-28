import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  publicDir: "./src/static",
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
        manualChunks: undefined
      }
    }
  },
  server: {
    open: '/'
  }
});
