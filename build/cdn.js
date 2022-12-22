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

  // Removing relative paths starting with /
  try {
    const data = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
    fs.writeFileSync("./dist/cdn/beer.min.css", data.replace(/url\(\//g, "url("));
  } catch (error) {
    console.error(error);
  }
})();
