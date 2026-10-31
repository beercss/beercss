export interface IBeerCssTheme {
  dark: string,
  light: string,
}

export interface IBeerCssDialogElement {
  updateDialog(from: Element, dialog: HTMLDialogElement, root?: Document | ShadowRoot): Promise<void>,
}

export interface IBeerCssFieldElement {
  updateAllFields(root?: Document | ShadowRoot): void,
}

export interface IBeerCssMenuElement {
  updateMenu(from: Element, menu: HTMLMenuElement, e?: Event, root?: Document | ShadowRoot): void,
}

export interface IBeerCssPageElement {
  updatePage(page: Element, root?: Document | ShadowRoot): void,
}

export interface IBeerCssProgressElement {
  updateAllProgress(root?: Document | ShadowRoot): void,
}

export interface IBeerCssRippleHelper {
  updateAllRipples(root?: Document | ShadowRoot): void,
}

export interface IBeerCssSliderElement {
  updateAllSliders(root?: Document | ShadowRoot): void,
}

export interface IBeerCssSnackbarElement {
  updateSnackbar(snackbar: Element, milliseconds?: number, root?: Document | ShadowRoot): void,
}

export interface IBeerCssThemeSetting {
  updateTheme(source?: IBeerCssTheme | any, root?: Document | ShadowRoot): Promise<IBeerCssTheme>,
  updateMode(value: string, root?: Document | ShadowRoot): string,
}

export interface IBeerCssUi {
  (from: Element, to: Element | null, options?: any, e?: Event): Promise<void>
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
  theme?: IBeerCssThemeSetting,
  ui?: IBeerCssUi
}

export interface IBeerCSSRootInstance {
  root: Document | ShadowRoot;
  mutation: MutationObserver | null;
  mutationTarget: Document | ShadowRoot | null;
  timeoutMutation: ReturnType<typeof setTimeout> | undefined;
  uiFunction: (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined;
  isDocumentRoot: boolean;
}