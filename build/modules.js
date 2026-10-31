import path from 'path';
import { readDir, toCssModule, toJsModule } from "./utils.js";

async function copyFiles(input, output) {
  const items = readDir(input);
    
  for(const item of items) {
    if (item.indexOf(".css") != -1) await toCssModule(path.join(input, item), path.join(output, item));
    if (item.indexOf(".ts") != -1) await toJsModule(path.join(input, item), path.join(output, item).replace(".ts", ".js"));
  }
}

export default async function() {
  await copyFiles("./src/cdn/elements", "./dist/cdn/elements");
  await copyFiles("./src/cdn/helpers", "./dist/cdn/helpers");
  await copyFiles("./src/cdn/settings", "./dist/cdn/settings");
}