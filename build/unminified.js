import { build } from "vite";
import fs from "fs";

export default async function() {
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
            assetFileNames: (info) => (info.name.includes(".css")) ? "[name].css" : "[name].[ext]",
            manualChunks: undefined,
          },
        },
      },
    });
  
    const cssContent = fs.readFileSync("./dist/cdn/beer.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.css", cssContent.replace(/url\(\//g, "url("));
  } catch(error) {
    console.log(error);
  }
}
