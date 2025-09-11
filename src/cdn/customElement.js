class BeerCssCustomElement extends HTMLElement {
  static isCssLoaded = false;
  static isJsLoaded = false;
  
  constructor() {
    super();
    this.run();
  }
  
  async addJs() {
    if (BeerCssCustomElement.isJsLoaded) return;
    BeerCssCustomElement.isJsLoaded = true;

    if (window.ui) return;
    return await import("https://cdn.jsdelivr.net/npm/beercss@3.12.3/dist/cdn/beer.min.js");
  }
  
  async addCss() {
    if (BeerCssCustomElement.isCssLoaded) return;
    BeerCssCustomElement.isCssLoaded = true;
    const isScoped = !!getComputedStyle(document.documentElement).getPropertyValue("--scoped");
    if (isScoped) return;

    const head = document.querySelector("head");
    const element = document.createElement("link");
    element.setAttribute("href", "https://cdn.jsdelivr.net/npm/beercss@3.12.3/dist/cdn/beer.scoped.min.css");
    element.setAttribute("rel", "stylesheet");
    head.appendChild(element);
  }
  
  async run() {
    this.classList.add("beer");
    await Promise.all([this.addJs(), this.addCss()]);
    ui();
  }
}

customElements.define("beer-css", BeerCssCustomElement);
export default BeerCssCustomElement;