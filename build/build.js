const clean = require("./clean.js");
const Bundler = require("parcel-bundler");
const minify = require('minify');
const fs = require("fs-extra");

const bundler = new Bundler(["./src/app.js", "./src/cdn/*"], {
  minify: false,
  watch: false,
  contentHash: false,
  sourceMaps: false
});

const onlyForCdn = async () => {
  var files = {
    './dist/cdn/beer.css': './dist/cdn/beer.min.css',
    './dist/cdn/beer.js': './dist/cdn/beer.min.js'
  }

  await fs.copyFile('./src/cdn/beer.js', './dist/cdn/beer.js');

  for (var i in files)
    await minify(i).then((data) => fs.writeFile(files[i], data));

  console.log("ready!");
}

bundler.on('bundled', onlyForCdn);
bundler.bundle();
