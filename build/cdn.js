import unminified from "./unminified.js";
import minified from "./minified.js";

try {
  await unminified();
  await minified();  
} catch(error) {
  console.error(error);
}
