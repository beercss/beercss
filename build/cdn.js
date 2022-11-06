import { build } from "vite";
import url from 'postcss-url';
(async () => {
  await build({
    // css: {
    //   postcss: {
    //     plugins: [url({
    //       url: 'rebase'
    //     })]
    //   }
    // },
    build: {
      outDir: "./dist/cdn",
      rollupOptions: {
        input: {
          "beer.min": "./src/cdn.ts"
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: "[name].[ext]",
          manualChunks: undefined
        }
      }
    }
  });
})();