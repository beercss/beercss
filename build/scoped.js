import fs from "fs";

function addScopedRule(css) {
  return css.replace("/* begin scoped */", `/* begin scoped */\n\n.beer,\nbeer-css {`).replace("/* end scoped */", "/* end scoped */\n\n}");
}

function removeSpaces(css) {
  return css.replace(/\s{2,}|(\/\*.+\*\/)/g, "");
}

export default async function scoped() {
  try {
    let unminified = fs.readFileSync("./dist/cdn/beer.css", "utf-8");
    unminified = addScopedRule(unminified, ".beer");
    const minified = removeSpaces(unminified);
    
    fs.writeFileSync("./dist/cdn/beer.scoped.css", unminified);
    fs.writeFileSync("./dist/cdn/beer.scoped.min.css", minified);
  } catch (error) {
    console.error(error);
  }
}
