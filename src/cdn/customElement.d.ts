declare class BeerCssCustomElement extends HTMLElement {
  static isLoaded: boolean;
  
  constructor();
  
  load(): Promise<void>;
  run(): Promise<void>;
}

export default BeerCssCustomElement;
