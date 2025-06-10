import fs from "fs";

function addScopedRule(css) {
  return css.replace(/(\s+)(--size:)/, "$1--scoped: 1;$1$2");
}

function addParentSelector(css) {
  return css.replace(/(.*)({|,)(\r\n|\n)/g, ".beer $1$2$3");
}

function fixSelectors(css) {
  return css
    .replace(/(\.beer\s)(@|\s+url|\s+to|\s+from|:root|body|html|\s+\d|\s+transition|\s+circle|\s+rgb|\s+calc|\s+-\d|\s+currentColor)/g, "$2")
    .replace(/\bbody\b/g, ".beer")
    .replace(/\.beer\s(:has|\*:has)/g, ".beer :has")
    .replace(/(\.beer\s)(\s+)/g, "$2$1")
    .replace(/\.beer\s:has\(>\smain\)/g, ".beer:has(> main)");
}

function removeSpaces(css) {
  return css
    .replace(/\s{2,}|(\/\*.+\*\/)/g, "");
}

export default async function scoped() {
  try {
    let unminified = fs.readFileSync("./dist/cdn/beer.css", "utf-8");
    unminified = addScopedRule(unminified);
    unminified = addParentSelector(unminified);
    unminified = fixSelectors(unminified);
    const minified = removeSpaces(unminified);
    
    fs.writeFileSync("./dist/cdn/beer.scoped.css", unminified);
    fs.writeFileSync("./dist/cdn/beer.scoped.min.css", minified);
  } catch (error) {
    console.error(error);
  }
}
