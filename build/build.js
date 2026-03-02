import { build } from "vite";
import vue from "@vitejs/plugin-vue";

try {
  await build({
    publicDir: "./src/static",
    plugins: [vue()],
    esbuild: {
      legalComments: 'none'
    },
    build: {
      assetsInlineLimit: 0,
      sourcemap: true,
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
} catch(error) {
  console.error(error);
}
