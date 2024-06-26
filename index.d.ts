import { IBeerCssTheme } from "./src/cdn/interfaces";

declare global {
  function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme>;
}

declare module "vue";
declare module "beercss";
export default ui;