import brotliSize from 'brotli-size';
import { readFile, saveFile } from './utils.js';

export default async function() {
  const css = readFile("./dist/cdn/beer.min.css");
  const readme = readFile("./README.md");
  const size = (brotliSize.sync(css)/1024).toFixed(1);

  saveFile("./README.md", readme.replace(/brotli_size-[0-9.]+kb-green/, `brotli_size-${size}kb-green`));
}