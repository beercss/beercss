interface ILastTheme {
  dark: string,
  light: string,
}

declare module "beercss";
declare function ui(selector?: string, options?: string | number | ILastTheme): string | ILastTheme | Promise<ILastTheme> | void;
declare function beercss(selector?: string, options?: string | number | ILastTheme): string | ILastTheme | Promise<ILastTheme> | void;