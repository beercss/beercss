import { build } from "vite";

(async () => {
  await build({
    base: '',
    build: {
      outDir: "./dist/cdn",
      rollupOptions: {
        input: {
          "beer.min": "./src/cdn.ts",
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
