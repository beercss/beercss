import { build } from "vite";
import { toModule } from "./utils.js";
import customElement from "./customElement.js";
import readme from "./readme.js";
import modules from "./modules.js";

try {
  await build({
    build: {
      minify: false,
      assetsInlineLimit: 0,
      outDir: "./dist/cdn",
      rollupOptions: {
        preserveEntrySignatures: "allow-extension",
        input: {
          "beer": "./src/cdn.ts",
        },
        output: {
          entryFileNames: "[name].js",
          chunkFileNames: "[name].js",
          assetFileNames: (info) => (info.name?.includes(".css")) ? "[name].css" : "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
  });
  
  await toModule("./dist/cdn/beer.css");
  await customElement();
  await readme();
  await modules();
} catch(error) {
  console.error(error);
}
