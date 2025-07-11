import styles from "./dist/cdn/beer.min.css" with { type: "css" };
document.adoptedStyleSheets.push(styles);
import { ui } from "./dist/cdn/beer.min.js";
export {
  ui as default,
  ui,
};
