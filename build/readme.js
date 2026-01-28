import { gzipSizeSync } from 'gzip-size';
import fs from "fs";

export default async function() {
  const css = fs.readFileSync("./dist/cdn/beer.min.css", "utf-8");
  const readme = fs.readFileSync("./README.md", "utf-8");
  const size = (gzipSizeSync(css)/1024).toFixed(1);

  fs.writeFileSync("./README.md", readme.replace(/gzip_size-[0-9.]+kb-green/, `gzip_size-${size}kb-green`));
}