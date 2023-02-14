interface IBeerCssLastTheme {
  dark: string,
  light: string,
}

declare module "beercss";
declare function ui(selector?: string, options?: string | number | IBeerCssLastTheme): string | IBeerCssLastTheme | Promise<IBeerCssLastTheme> | void;
declare function beercss(selector?: string, options?: string | number | IBeerCssLastTheme): string | IBeerCssLastTheme | Promise<IBeerCssLastTheme> | void;