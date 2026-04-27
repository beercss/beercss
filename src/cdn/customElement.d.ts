declare class BeerCssCustomElement extends HTMLElement {
  static isCssLoaded: boolean;
  static isJsLoaded: boolean;
  
  constructor();
  
  addJs(): Promise<void | any>;
  addCss(): Promise<void>;
  run(): Promise<void>;
}

export default BeerCssCustomElement;
