export interface IBeerCssTheme {
  dark: string,
  light: string,
}

export interface IBeerCssDialogElement {
  updateDialog(from: Element, dialog: HTMLDialogElement): Promise<void>,
}

export interface IBeerCssFieldElement {
  updateAllFields(): void,
}

export interface IBeerCssMenuElement {
  updateMenu(from: Element, menu: HTMLMenuElement, e?: Event): void,
}

export interface IBeerCssPageElement {
  updatePage(page: Element): void,
}

export interface IBeerCssProgressElement {
  updateAllProgress(): void,
}

export interface IBeerCssRippleHelper {
  updateAllRipples(): void,
}

export interface IBeerCssSliderElement {
  updateAllSliders(): void,
}

export interface IBeerCssSnackbarElement {
  updateSnackbar(snackbar: Element, milliseconds?: number): void,
}

export interface IBeerCssThemeSetting {
  updateTheme(source?: IBeerCssTheme | any): Promise<IBeerCssTheme>,
  updateMode(value: string): string,
}

export interface IBeerCssGlobals {
  dialog?: IBeerCssDialogElement,
  field?: IBeerCssFieldElement,
  menu?: IBeerCssMenuElement,
  page?: IBeerCssPageElement,
  progress?: IBeerCssProgressElement,
  ripple?: IBeerCssRippleHelper,
  slider?: IBeerCssSliderElement,
  snackbar?: IBeerCssSnackbarElement,
  theme?: IBeerCssThemeSetting
}