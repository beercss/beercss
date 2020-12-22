const clean = require("./clean.js");
const Bundler = require("parcel-bundler");
const minify = require('minify');
const fs = require("fs-extra");
const process = require('process');

const bundler = new Bundler("./src/app.js", {
  minify: false,
  watch: false,
  contentHash: false,
  sourceMaps: false
});

const onlyForCdn = async () => {
  await fs.mkdir('./dist/cdn');
  process.chdir("./src/cdn");
  minify('beer.js').then((data) => fs.writeFile('../../dist/cdn/beer.min.js', data));
  minify('beer.css').then((data) => fs.writeFile('../../dist/cdn/beer.min.css', data));
}

bundler.on('bundled', onlyForCdn);
bundler.bundle();
