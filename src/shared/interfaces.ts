export interface ITheme {
  dark: string,
  light: string,
  selected: string,
}

export interface ILayout {
  theme: ITheme,
  isDark: boolean,
  showCssVariables: boolean,
  isLoaded: boolean,
}

export interface IInstallEvent extends Event {
  prompt: () => Promise<void>,
}
