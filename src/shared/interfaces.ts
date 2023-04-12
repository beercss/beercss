export interface ITheme {
  name: string,
  dark: string,
  light: string,
  selected: string,
}

export interface ILayout {
  themes: Array<ITheme>,
  theme: ITheme | undefined,
  isDark: boolean,
  showCssVariables: boolean,
  isLoaded: boolean,
}

export interface IInstallEvent extends Event {
  prompt: () => Promise<void>,
}
