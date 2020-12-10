const clean = require("./clean.js");
const Bundler = require("parcel-bundler");

const bundler = new Bundler(["./src/app.js", "./src/cdn/beer.js", "./src/cdn/beer.css"], {
  minify: true,
  watch: false,
  contentHash: false,
  sourceMaps: false
});
bundler.bundle();
