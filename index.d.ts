declare global {
  interface IBeerCssTheme {
    dark: string,
    light: string,
  }
  
  function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme>;
}

declare module "vue";
declare module "beercss";
export default ui;