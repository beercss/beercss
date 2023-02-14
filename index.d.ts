interface IBeerCssTheme {
  dark: string,
  light: string,
}

declare module "beercss";
declare function ui(selector?: string, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | void;
declare function beercss(selector?: string, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | void;