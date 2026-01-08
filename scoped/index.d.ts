declare global {
  interface IBeerCssTheme {
    dark: string,
    light: string,
  }
  
  function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;
}

declare module "ui";

export interface IBeerCssTheme {
  dark: string,
  light: string,
}

export function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;

export default ui;