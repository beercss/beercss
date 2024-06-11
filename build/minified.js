import { build } from "vite";
import fs from "fs";

export default async function() {
  await build({
    build: {
      emptyOutDir: false,
      outDir: "./dist/cdn",
      rollupOptions: {
        input: {
          "beer": "./src/cdn.ts",
        },
        output: {
          entryFileNames: "[name].min.js",
          chunkFileNames: "[name].min.js",
          assetFileNames: (info) => (info.name.indexOf(".css") != -1) ? "[name].min.css" : "[name].[ext]",
          manualChunks: undefined,
        },
      },
    },
  });

  try {
    const cssContent = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.css", cssContent.replace(/url\(\//g, "url("));

    const jsContent = fs.readFileSync("./dist/cdn/beer.min.js", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.js", jsContent + "\nexport default globalThis.ui;");
  } catch (error) {
    console.error(error);
  } finally {
    return true;
  }
}
