import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ["text-summary"],
      include: ['src/cdn/**/.js', 'src/cdn/**/*.ts'],
    },
  },
});