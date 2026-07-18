import postcss from 'postcss';
import cssnano from 'cssnano';
import fs from "fs-extra";

function canBeNested(file) {
  return !/(global.css|light.css|dark.css|font.css|beer.css|beer.min.css|beer.scoped.css|beer.scoped.min.css)$/.test(file);
}

function needsToRevert(file) {
  return /(global.css|beer.css|beer.min.css|beer.scoped.css|beer.scoped.min.css)$/.test(file);
}

export function toUrl(content) {
  return content.replace(/url\((\/|..\/\w+\/)/g, "url(");
}

export function toScoped(file, content) {
  let newContent = canBeNested(file)
    ? `:is(.beer, beer-css) {\n\n${content}\n\n}`
    : content
        .replace(/\b(body|html)\b/g, ":is(.beer, beer-css)")
        .replace("/* begin scoped */", ":is(.beer, beer-css) {\n\n")
        .replace("/* end scoped */", "}")
  
  return needsToRevert(file)
    ? `:is(.beer, beer-css) * { all: revert; }\n\n${newContent}\n\n:is(.beer, beer-css) { overflow: unset; display: block; }\n\n:is(.beer, beer-css):not(.light, .dark) { background: none; }`
    : newContent;
}

export async function toMinifyCss(content) {
  return postcss([
    cssnano({
      preset: 'default',
    })
  ])
  .process(content)
  .then(result => result.css);
}

export function toMinifyJs(content) {
  return content.replace(/\s{2,}|(\/\*.+\*\/)/g, "");
}

export function copy(input, output) {
  fs.copySync(input, output);
}

export function readDir(dir) {
  return fs.readdirSync(dir);
}

export function readFile(file) {
  return fs.readFileSync(file, "utf-8");
}

export function saveFile(file, content) {
  fs.writeFileSync(file, content);
}

export async function toModule(file) {
  let content = readFile(file);
  content = toUrl(content);

  const scopedContent = toScoped(file, content);
  saveFile(file, content);
  saveFile(file.replace('.css', '.min.css'), await toMinifyCss(content));
  saveFile(file.replace('.css', '.scoped.css'), scopedContent);
  saveFile(file.replace('.css', '.scoped.min.css'), await toMinifyCss(scopedContent));
}