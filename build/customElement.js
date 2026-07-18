import { readFile, saveFile, toMinifyJs } from "./utils.js";

export default async function() {
  try {
    const unminified = readFile("./src/cdn/customElement.js");
    const minified = toMinifyJs(unminified);

    saveFile("./dist/cdn/beer.custom-element.js", unminified);
    saveFile("./dist/cdn/beer.custom-element.min.js", minified);
  } catch (error) {
    console.error(error);
  }
}
