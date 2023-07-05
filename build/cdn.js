import { build } from "vite";
import fs from "fs";

(async () => {
  await build({
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

  try {
    const cssContent = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.css", cssContent.replace(/url\(\//g, "url("));

    const jsContent = fs.readFileSync("./dist/cdn/beer.min.js", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.js", "export default (() => {\n" + jsContent + "return globalThis.ui;\n})();");
  } catch (error) {
    console.error(error);
  }
})();
