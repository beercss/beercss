import { build } from "vite";
import fs from "fs";

export default async function() {
  try {
    await build({
      build: {
        emptyOutDir: false,
        assetsInlineLimit: 0,
        outDir: "./dist/cdn",
        rollupOptions: {
          preserveEntrySignatures: "allow-extension",
          input: {
            "beer": "./src/cdn.ts",
          },
          output: {
            entryFileNames: "[name].min.js",
            chunkFileNames: "[name].min.js",
            assetFileNames: (info) => (info.name.includes(".css")) ? "[name].min.css" : "[name].[ext]",
            manualChunks: undefined,
          },
        },
      },
    });
    
    const cssContent = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.css", cssContent.replace(/url\(\//g, "url("));
  } catch (error) {
    console.error(error);
  }
}
