const clean = require("./clean.js");
const Bundler = require("parcel-bundler");

const bundler = new Bundler("./src/app.js", {
  minify: true,
  watch: false,
  contentHash: false,
  sourceMaps: false
});
bundler.bundle();
