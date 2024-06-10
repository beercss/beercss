import unminified from "./unminified.js";
import minified from "./minified.js";

(async() => {
  await unminified();
  await minified();
})();
