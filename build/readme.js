import brotliSize from 'brotli-size';
import fs from "fs";

export default async function() {
  const css = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
  const readme = fs.readFileSync("./README.md", "utf-8");
  const size = (brotliSize.sync(css)/1024).toFixed(1);

  fs.writeFileSync("./README.md", readme.replace(/brotli_size-[0-9.]+kb-green/, `brotli_size-${size}kb-green`));
}