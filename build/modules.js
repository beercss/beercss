import path from 'path';
import { copy, readDir, toModule } from "./utils.js";

async function copyFiles(input, output) {
  copy(input, output);
  const items = readDir(output);
    
  for(const item of items) {
    if (item.indexOf(".css") != -1) await toModule(path.join(output, item), true);
  }
}

export default async function() {
  await copyFiles("./src/cdn/elements", "./dist/cdn/elements");
  await copyFiles("./src/cdn/helpers", "./dist/cdn/helpers");
  await copyFiles("./src/cdn/settings", "./dist/cdn/settings");
}