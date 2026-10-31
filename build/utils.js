import postcss from 'postcss';
import cssnano from 'cssnano';
import fs from "fs-extra";
import path from 'path';
import { build } from 'vite';

function canBeNested(file) {
  return !/(global.css|light.css|dark.css|font.css|beer.css|beer.min.css|beer.scoped.css|beer.scoped.min.css|all.css|all.min.css|all.scoped.css|all.scoped.min.css)$/.test(file);
}

function needsToRevert(file) {
  return /(global.css|beer.css|beer.min.css|beer.scoped.css|beer.scoped.min.css)$/.test(file);
}

export function toUrl(file, content) {
  const isModule = /elements|helpers|settings/.test(file);

  return isModule
    ? content.replace(/url\((\/|..\/\w+\/)/g, "url(../")
    : content.replace(/url\((\/|..\/\w+\/)/g, "url(");
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
  fs.ensureFileSync(file);
  fs.writeFileSync(file, content);
}

export async function toCssModule(input, output) {
  let content = readFile(input);
  content = toUrl(input, content);

  const scopedContent = toScoped(input, content);
  saveFile(output, content);
  saveFile(output.replace('.css', '.min.css'), await toMinifyCss(content));
  saveFile(output.replace('.css', '.scoped.css'), scopedContent);
  saveFile(output.replace('.css', '.scoped.min.css'), await toMinifyCss(scopedContent));
}

export async function toJsModule(input, output) {
  const name = path.basename(output).replace(/(\.ts|\.js)$/, "");
  const outDir = path.dirname(output);

  if (input != output) {
    await build({
      configFile: false,
      build: {
        minify: false,
        outDir: outDir,
        emptyOutDir: false, 
        lib: {
          entry: input,
          name: name,
          fileName: name,
          formats: ['es'], 
        }
      }
    });
  }

  await build({
    configFile: false,
    build: {
      minify: true,
      outDir: outDir,
      emptyOutDir: false, 
      lib: {
        entry: input,
        name: `${name}.min`,
        fileName: `${name}.min`,
        formats: ['es'], 
      }
    }
  });
}