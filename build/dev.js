import { createServer } from "vite";
import vue from "@vitejs/plugin-vue";

try {
  const server = await createServer({
    publicDir: "./src/static",
    plugins: [vue()],
    build: {
      rollupOptions: {
        input: {
          app: "./index.html",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
    server: {
      open: "/",
    },
  });

  await server.listen();
  server.printUrls();
} catch(error) {
  console.log(error);
}
