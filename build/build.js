import { build } from "vite";
import vue from "@vitejs/plugin-vue";

(async () => {
  await build({
    publicDir: "./src/static",
    plugins: [vue({
      reactivityTransform: true,
    })],
    build: {
      rollupOptions: {
        input: {
          app: "./src/build.ts",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
  });
})();
