declare interface IBeerCssTheme {
  dark: string,
  light: string,
}

declare module "vue";
declare module "beercss";
declare function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme>;
export default ui;
