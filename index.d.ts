declare global {
  interface IBeerCssTheme {
    dark: string,
    light: string,
  }

  class BeerCssCustomElement extends HTMLElement {
    static isCssLoaded: boolean;
    static isJsLoaded: boolean;
    
    constructor();
    
    addJs(): Promise<void | any>;
    addCss(): Promise<void>;
    run(): Promise<void>;
  }

  function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;
}

export interface IBeerCssTheme {
  dark: string,
  light: string,
}

export declare class BeerCssCustomElement extends HTMLElement {
  static isCssLoaded: boolean;
  static isJsLoaded: boolean;
  
  constructor();
  
  addJs(): Promise<void | any>;
  addCss(): Promise<void>;
  run(): Promise<void>;
}

export default function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme>;
