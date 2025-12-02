export interface IBeerCssTheme {
  dark: string;
  light: string;
}

export interface IBeerCSSRootInstance {
  root: Document | ShadowRoot;
  mutation: MutationObserver | null;
  mutationTarget: Document | ShadowRoot | null;
  timeoutMutation: ReturnType<typeof setTimeout> | undefined;
  uiFunction: (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined;
  isDocumentRoot: boolean;
}