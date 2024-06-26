import { build } from "vite";
import vue from "@vitejs/plugin-vue";

try {
  await build({
    publicDir: "./src/static",
    plugins: [vue()],
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
} catch(error) {
  console.error(error);
}
