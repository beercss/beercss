const clean = require("./clean.js");
const open = require("open");
const fs = require("fs-extra");
const config = JSON.parse(fs.readFileSync("./package.json", "utf8"));
const Bundler = require("parcel-bundler");

const bundler = new Bundler("./src/app.html");
bundler.serve(config.port, false, "localhost").then(() => {
  open("http://localhost:" + config.port);
});
