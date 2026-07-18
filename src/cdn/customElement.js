const _url = new URL(import.meta.url);
_url.searchParams.set("scoped", "1");

class BeerCssCustomElement extends HTMLElement {
  static isLoaded = null;
  
  constructor() {
    super();
    this.run();
  }

  static get observedAttributes() {
    return ['import'];
  }

  get import() {
    return this.getAttribute("import") || "";
  }

  set import(value) {
    this.setAttribute("import", value || "");
  }

  async attributeChangedCallback(name, oldValue, newValue) {
    if (name == "import" && oldValue != newValue) {
      await this.load();
      ui("import", newValue);
    }
  }
  
  async load(queryString) {
    if (BeerCssCustomElement.isLoaded) return BeerCssCustomElement.isLoaded;
    BeerCssCustomElement.isLoaded = import(new URL(`./beer.min.js${queryString}`, _url.href).href);

    const params = new URLSearchParams(queryString);
    if (!params.has("elements") && !params.has("helpers")) {
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.href = new URL(`./beer.scoped.min.css`, _url.href).href;

      const scriptElement = document.querySelector("script[src*=beer]");
      if (scriptElement) scriptElement.insertAdjacentElement("afterend", linkElement);
      else document.head.appendChild(linkElement);
    }
    
    return BeerCssCustomElement.isLoaded;
  }
  
  async run() {
    await this.load(_url.search);
    ui();
  }
}

customElements.define("beer-css", BeerCssCustomElement);
export default BeerCssCustomElement;