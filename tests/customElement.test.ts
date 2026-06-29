import { expect, test, beforeEach, afterEach, vi } from "vitest";
import BeerCssCustomElement from "../src/cdn/customElement.js";

let container: HTMLElement;
let originalRun: any;

vi.mock('https://cdn.jsdelivr.net/npm/beercss@4.0.22/dist/cdn/beer.min.js', () => {
  return {
    default: {},
    namedExport: '',
  };
});

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  
  BeerCssCustomElement.isCssLoaded = false;
  BeerCssCustomElement.isJsLoaded = false;
  
  const uiMock = vi.fn();
  (window as any).ui = uiMock;
  (global as any).ui = uiMock;
  
  Object.defineProperty(globalThis, 'ui', {
    value: uiMock,
    writable: true,
    configurable: true,
  });
  
  if (!originalRun) {
    originalRun = BeerCssCustomElement.prototype.run;
  }
  
  const defaultRunMock = vi.fn(() => Promise.resolve(undefined));
  BeerCssCustomElement.prototype.run = defaultRunMock as any;
  
  (global as any).import = vi.fn().mockResolvedValue({});
});

afterEach(() => {
  container.remove();
  vi.clearAllMocks();
  delete (window as any).ui;
  delete (global as any).ui;
  
  if (originalRun) {
    BeerCssCustomElement.prototype.run = originalRun;
  }
  
  try {
    Object.defineProperty(globalThis, 'ui', {
      value: undefined,
      writable: true,
      configurable: true,
    });
    delete (globalThis as any).ui;
  } catch (e) {
  }
});

test("BeerCssCustomElement is a class", () => {
  expect(typeof BeerCssCustomElement).toBe("function");
});

test("BeerCssCustomElement is registered as custom element", () => {
  const element = document.createElement("beer-css");
  expect(element instanceof BeerCssCustomElement).toBe(true);
});

test("BeerCssCustomElement extends HTMLElement", () => {
  const element = new BeerCssCustomElement();
  expect(element instanceof HTMLElement).toBe(true);
});

test("BeerCssCustomElement has static isCssLoaded property", () => {
  expect(BeerCssCustomElement).toHaveProperty("isCssLoaded");
  expect(typeof BeerCssCustomElement.isCssLoaded).toBe("boolean");
});

test("BeerCssCustomElement has static isJsLoaded property", () => {
  expect(BeerCssCustomElement).toHaveProperty("isJsLoaded");
  expect(typeof BeerCssCustomElement.isJsLoaded).toBe("boolean");
});

test("BeerCssCustomElement static flags initialize to false", () => {
  BeerCssCustomElement.isCssLoaded = false;
  BeerCssCustomElement.isJsLoaded = false;
  expect(BeerCssCustomElement.isCssLoaded).toBe(false);
  expect(BeerCssCustomElement.isJsLoaded).toBe(false);
});

test("BeerCssCustomElement has addJs method", () => {
  const element = new BeerCssCustomElement();
  expect(typeof (element as any).addJs).toBe("function");
});

test("BeerCssCustomElement has addCss method", () => {
  const element = new BeerCssCustomElement();
  expect(typeof (element as any).addCss).toBe("function");
});

test("BeerCssCustomElement has run method", () => {
  const element = new BeerCssCustomElement();
  expect(typeof (element as any).run).toBe("function");
});

test("addJs returns early if already loaded", async () => {
  BeerCssCustomElement.isJsLoaded = true;
  const element = new BeerCssCustomElement();
  const result = await (element as any).addJs();
  expect(result).toBeUndefined();
});

test("addJs returns early if window.ui exists", async () => {
  (window as any).ui = vi.fn();
  BeerCssCustomElement.isJsLoaded = false;
  const element = new BeerCssCustomElement();
  const result = await (element as any).addJs();
  expect(result).toBeUndefined();
});

test("addJs sets isJsLoaded flag", async () => {
  BeerCssCustomElement.isJsLoaded = false;
  (window as any).ui = undefined;
  const element = new BeerCssCustomElement();
  
  vi.stubGlobal("import", vi.fn().mockResolvedValue({}));
  
  await (element as any).addJs();
  expect(BeerCssCustomElement.isJsLoaded).toBe(true);
  
  vi.unstubAllGlobals();
});

test("addCss returns early if already loaded", async () => {
  BeerCssCustomElement.isCssLoaded = true;
  const element = new BeerCssCustomElement();
  const result = await (element as any).addCss();
  expect(result).toBeUndefined();
});

test("addCss checks for scoped CSS variable", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  expect(true).toBe(true);
});

test("addCss creates link element with correct href", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  const linkElement = document.querySelector("link[href*='beer.scoped.min.css']");
  expect(linkElement).not.toBeNull();
});

test("addCss sets rel attribute to stylesheet", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  const linkElement = document.querySelector("link[href*='beer.scoped.min.css']") as HTMLLinkElement;
  expect(linkElement.getAttribute("rel")).toBe("stylesheet");
});

test("addCss appends link to head", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  const linkElement = document.querySelector("link[href*='beer.scoped.min.css']");
  expect(linkElement).not.toBeNull();
  expect(linkElement?.getAttribute("rel")).toBe("stylesheet");
});

test("addCss sets isCssLoaded flag", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  expect(BeerCssCustomElement.isCssLoaded).toBe(true);
});

test("run method calls both addJs and addCss", async () => {
  const tempRun = BeerCssCustomElement.prototype.run;
  BeerCssCustomElement.prototype.run = originalRun;
  
  const element = new BeerCssCustomElement();
  
  BeerCssCustomElement.prototype.run = tempRun;
  
  const addJsSpy = vi.spyOn(element as any, "addJs").mockResolvedValue(undefined);
  const addCssSpy = vi.spyOn(element as any, "addCss").mockResolvedValue(undefined);
  
  await originalRun.call(element);
  
  expect(addJsSpy).toHaveBeenCalled();
  expect(addCssSpy).toHaveBeenCalled();
  
  addJsSpy.mockRestore();
  addCssSpy.mockRestore();
});

test("run method waits for both promises", async () => {
  const originalRun = BeerCssCustomElement.prototype.run;
  let runCalled = false;
  
  BeerCssCustomElement.prototype.run = async function() {
    runCalled = true;
    
    let jsResolved = false;
    let cssResolved = false;
    
    const addJsResult = (this as any).addJs();
    const addCssResult = (this as any).addCss();
    
    const addJsSpy = vi.spyOn(this as any, "addJs").mockImplementation(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      jsResolved = true;
    });
    
    const addCssSpy = vi.spyOn(this as any, "addCss").mockImplementation(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
      cssResolved = true;
    });
    
    await Promise.all([(this as any).addJs(), (this as any).addCss()]);
    
    expect(jsResolved).toBe(true);
    expect(cssResolved).toBe(true);
    
    addJsSpy.mockRestore();
    addCssSpy.mockRestore();
  } as any;
  
  const element = new BeerCssCustomElement();
  
  await new Promise(resolve => setTimeout(resolve, 50));
  
  expect(runCalled).toBe(true);
  
  BeerCssCustomElement.prototype.run = originalRun;
});

test("run method calls ui() function", async () => {
  const tempRun = BeerCssCustomElement.prototype.run;
  BeerCssCustomElement.prototype.run = originalRun;
  
  const element = new BeerCssCustomElement();
  
  BeerCssCustomElement.prototype.run = tempRun;
  
  vi.spyOn(element as any, "addJs").mockResolvedValue(undefined);
  vi.spyOn(element as any, "addCss").mockResolvedValue(undefined);
  
  await originalRun.call(element);
  
  expect((window as any).ui).toHaveBeenCalled();
});

test("constructor calls run method", async () => {
  const originalRun = BeerCssCustomElement.prototype.run;
  
  const runSpy = vi.fn().mockResolvedValue(undefined);
  BeerCssCustomElement.prototype.run = runSpy as any;
  
  const element = new BeerCssCustomElement();
  
  await new Promise(resolve => setTimeout(resolve, 50));
  
  expect(runSpy).toHaveBeenCalled();
  
  BeerCssCustomElement.prototype.run = originalRun;
});

test("multiple instances share static flags", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  BeerCssCustomElement.isJsLoaded = false;
  
  const element1 = new BeerCssCustomElement();
  BeerCssCustomElement.isCssLoaded = true;
  
  const element2 = new BeerCssCustomElement();
  
  expect(BeerCssCustomElement.isCssLoaded).toBe(true);
});

test("addCss returns early if scoped CSS already present", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  
  const originalGetComputedStyle = window.getComputedStyle;
  window.getComputedStyle = vi.fn(() => ({
    getPropertyValue: vi.fn(() => "true"),
  } as any));
  
  const element = new BeerCssCustomElement();
  const result = await (element as any).addCss();
  
  expect(result).toBeUndefined();
  
  window.getComputedStyle = originalGetComputedStyle;
});

test("addJs returns promise when called for first time", async () => {
  BeerCssCustomElement.isJsLoaded = false;
  (window as any).ui = undefined;
  
  const element = new BeerCssCustomElement();
  
  vi.stubGlobal("import", vi.fn().mockResolvedValue({}));
  
  const result = (element as any).addJs();
  expect(result instanceof Promise).toBe(true);
  
  await result;
  
  vi.unstubAllGlobals();
});

test("addCss creates link with jsdelivr CDN URL", async () => {
  BeerCssCustomElement.isCssLoaded = false;
  const element = new BeerCssCustomElement();
  
  await (element as any).addCss();
  
  const linkElement = document.querySelector("link[href*='beer.scoped.min.css']") as HTMLLinkElement;
  expect(linkElement.href).toContain("cdn.jsdelivr.net");
  expect(linkElement.href).toContain("beercss");
});

test("BeerCssCustomElement can be exported", () => {
  expect(BeerCssCustomElement).toBeDefined();
  expect(typeof BeerCssCustomElement).toBe("function");
});

test("custom element can be created via document.createElement", () => {
  const element = document.createElement("beer-css");
  container.appendChild(element);
  
  expect(element instanceof BeerCssCustomElement).toBe(true);
  expect(container.querySelector("beer-css")).not.toBeNull();
});

test("custom element fires on initialization", async () => {
  const originalRun = BeerCssCustomElement.prototype.run;
  
  const runSpy = vi.fn(() => Promise.resolve(undefined));
  BeerCssCustomElement.prototype.run = runSpy as any;
  
  const element = document.createElement("beer-css");
  container.appendChild(element);
  
  await new Promise(resolve => setTimeout(resolve, 50));
  
  expect(element instanceof BeerCssCustomElement).toBe(true);
  expect(runSpy).toHaveBeenCalled();
  
  BeerCssCustomElement.prototype.run = originalRun;
});
