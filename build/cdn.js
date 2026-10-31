import { build } from "vite";
import { toCssModule, toJsModule } from "./utils.js";
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
  
  await toCssModule("./dist/cdn/beer.css", "./dist/cdn/beer.css");
  await toJsModule("./src/cdn/beer.ts", "./dist/cdn/beer.js");
  await toJsModule("./src/cdn/loader.ts", "./dist/cdn/beer.loader.js");
  await toJsModule("./src/cdn/customElement.js", "./dist/cdn/beer.custom-element.js");
  await readme();
  await modules();
} catch(error) {
  console.error(error);
}
