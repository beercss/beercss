let _settings: string[] = [];
let _elements: string[] = [];
let _helpers: string[] = [];
let _urls: { [key: string]: Promise<string> } = {};
let _url = new URL(import.meta.url);

const _id = "__BeerCssStyleTag__";
const _allSettings = ["global", "light", "dark", "font", "reset", "theme"];
const _allElements = ["badge", "bar", "button", "card", "chip", "dialog", "divider", "expansion", "field", "grid", "icon", "layout", "list", "mainLayout", "media", "menu", "navigation", "overlay", "page", "progress", "selection", "shape", "slider", "snackbar", "tab", "table", "tooltip", "typography"];
const _allHelpers = ["alignment", "blur", "color", "direction", "elevate", "form", "margin", "opacity", "padding", "position", "responsive", "ripple", "scroll", "shadow", "size", "space", "wave", "zoom"];
const _allJs = ["dialog", "field", "menu", "page", "progress", "ripple", "slider", "snackbar", "theme"];
const _emptyNodeList = [] as unknown as NodeListOf<Element>;
const _weakMap = new WeakMap<Element, Map<string, Set<any>>>();

export const isChrome = navigator.userAgent.includes("Chrome");

export const isFirefox = navigator.userAgent.includes("Firefox") && !isChrome;

export const isSafari = navigator.userAgent.includes("Safari") && !isChrome;

export const isWindows = navigator.userAgent.includes("Windows");

export const isMac = navigator.userAgent.includes("Macintosh");

export const isLinux = navigator.userAgent.includes("Linux");

export const isAndroid = navigator.userAgent.includes("Android");

export const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

let _isTouchable: boolean;
export function isTouchable(): boolean {
  if (_isTouchable !== undefined) return _isTouchable;
  _isTouchable = window?.matchMedia?.("(pointer: coarse)")?.matches ?? false;
  return _isTouchable;
}

export function isDark(): boolean {
  return window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}

export async function wait(milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export function guid(): string {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function hasClass(element: Element | null, name: string): boolean {
  return element?.classList.contains(name) ?? false;
}

export function hasTag(element: Element | null, name: string): boolean {
  return element?.tagName?.toLowerCase() === name;
}

export function hasType(element: HTMLInputElement | null, name: string): boolean {
  return element?.type?.toLowerCase() === name;
}

export function addClass(element: Element | null | NodeListOf<Element>, name: string) {
  if (element instanceof NodeList) for(let i=0; i<element.length; i++) element[i].classList.add(name);
  else element?.classList.add(name);
}

export function removeClass(element: Element | null | NodeListOf<Element>, name: string) {
  if (element instanceof NodeList) for(let i=0; i<element.length; i++) element[i].classList.remove(name);
  else element?.classList.remove(name);
}

export function on(element: Element | null, name: string, callback: any, useCapture: boolean = true) {
  if (element?.addEventListener) element.addEventListener(name, callback, useCapture);
}

export function onWeak(element: Element | null, name: string, callback: any, useCapture: boolean = true) {
  if (!element) return;

  const el = element as HTMLElement;
  let events = _weakMap.get(el);
  if (!events) {
    events = new Map();
    _weakMap.set(el, events);
  }

  const key = name + (useCapture ? "1" : "0");
  let callbacks = events.get(key);
  if (!callbacks) {
    callbacks = new Set();
    events.set(key, callbacks);
  }

  if (callbacks.has(callback)) return;

  callbacks.add(callback);
  on(element, name, callback, useCapture);
}

export function off(element: Element | null, name: string, callback: any, useCapture: boolean = true) {
  if (element?.removeEventListener) element.removeEventListener(name, callback, useCapture);
}

export function insertBefore(newElement: Element, element: Element | null) {
  element?.parentNode?.insertBefore(newElement, element);
}

export function prev(element: Element): Element | null {
  return element?.previousElementSibling;
}

export function next(element: Element): Element | null {
  return element?.nextElementSibling;
}
export function parent(element: Element): Element | null {
  return element?.parentElement;
}

export function closest(element: Element, selector: string): Element | null {
  return element?.closest(selector);
}

export function query(selector: string | Element | null, elementOrRoot?: Element | Document | ShadowRoot | null, element?: Element | null): Element | null {
  try {
    const searchContext = element ?? elementOrRoot ?? document;
    return (typeof selector === "string")
      ? searchContext.querySelector(selector)
      : selector;
  } catch {
    return null;
  }
}

export function queryAll(selector: string | NodeListOf<Element> | null, elementOrRoot?: Element | Document | ShadowRoot | null, element?: Element | null): NodeListOf<Element> {
  try {
    const searchContext = element ?? elementOrRoot ?? document;
    return (typeof selector === "string")
      ? searchContext.querySelectorAll(selector)
      : selector ?? _emptyNodeList;
  } catch {
    return _emptyNodeList;
  }
}

export function create(htmlAttributesAsJson: any, root?: Document | ShadowRoot): HTMLElement {
  const doc = root ? (root instanceof Document ? root : root.ownerDocument) : document;
  const element = doc.createElement("div");
  for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
    const key = keys[i];
    const value = htmlAttributesAsJson[key] as string;
    element.setAttribute(key, value);
  }
  return element;
}

export function blurActiveElement(root?: Document | ShadowRoot) {
  ((root ?? document).activeElement as HTMLElement)?.blur();
}

export function queryAllDataUi(id: string, root?: Document | ShadowRoot, element?: Element | null): NodeListOf<Element> {
  return queryAll("[data-ui=\"#"+id+"\"]", root, element);
}

export function queryDataUi(id: string, root?: Document | ShadowRoot, element?: Element | null): Element | null {
  return query("[data-ui=\"#"+id+"\"]", root, element);
}

export function updateAllClickable(element: Element, root?: Document | ShadowRoot) {
  if (element.id && hasClass(element, "page")) element = queryDataUi(element.id, root) ?? element;

  const container = closest(element, ".tabs, nav");
  if (!container) return;

  const as = queryAll("a", root, container);
  removeClass(as, "active");
  if (!hasTag(element, "button") && !hasClass(element, "button") && !hasClass(element, "chip")) addClass(element, "active");
}

export function rootSizeInPixels(root?: Document | ShadowRoot): number {
  const searchRoot = root ?? document;
  const rootElement = query('.beer', searchRoot) || (root instanceof Document ? root.documentElement : (root ? (root as ShadowRoot).host : document.documentElement));
  const size = getComputedStyle(rootElement).getPropertyValue("--size") || "16px";
  if (size.includes("%")) return (parseInt(size) * 16) / 100;
  if (size.includes("em")) return parseInt(size) * 16;
  return parseInt(size);
}

export function getCssModule(url: string, path: string, scoped: boolean): string {
  return new URL(scoped ? path.replace(".min.css", ".scoped.min.css") : path, url).href;
}

export function getJsModule(url: string, path: string): string {
  return new URL(path, url).href;
}

export function hasJs(name: string): boolean {
  return _allJs.indexOf(name) != -1;
}

export function getScriptElement() {
  return Array.from(document.querySelectorAll("script[type=module]")).find(x => (x.getAttribute("src") || x.innerHTML).indexOf("beer.") != -1);
}

export async function importModulesFromUrl(url?: string): Promise<string> {
  url = url || _url?.href;
  if (!url) return "";

  const params = new URL(url).searchParams;
  const settings: string[] = params.get("settings")?.split(",")?.filter(Boolean) || [];
  const elements: string[] = params.get("elements")?.split(",")?.filter(Boolean) || [];
  const helpers: string[] = params.get("helpers")?.split(",")?.filter(Boolean) || [];
  const scoped = !!params.get("scoped");
  
  if (!settings.length && !elements.length && !helpers.length) return "";

  const mergedSettings = params.has("settings")
    ? Array.from(new Set([...settings, ..._settings])).sort()
    : _allSettings;

  const mergedElements = params.has("elements")
    ? Array.from(new Set([...elements, ..._elements])).sort()
    : _allElements

  const mergedHelpers = params.has("helpers")
    ? Array.from(new Set([...helpers, ..._helpers])).sort()
    : _allHelpers

  if (mergedSettings.length == _settings.length && mergedElements.length == _elements.length && mergedHelpers.length == _helpers.length) return "";
  
  _settings = mergedSettings;
  _elements = mergedElements;
  _helpers = mergedHelpers;
  
  const cssModules: string[] = [
    ...mergedSettings.map((name) => getCssModule(url, `./settings/${name}.min.css`, scoped)),
    ...mergedHelpers.map((name) => getCssModule(url, `./helpers/${name}.min.css`, scoped)),
    ...mergedElements.map((name) => getCssModule(url, `./elements/${name}.min.css`, scoped)),
  ];

  const jsModules: string[] = [
    ...mergedSettings.filter(hasJs).map((name) => getJsModule(url, `./settings/${name}.min.js`)),
    ...mergedHelpers.filter(hasJs).map((name) => getJsModule(url, `./helpers/${name}.min.js`)),
    ...mergedElements.filter(hasJs).map((name) => getJsModule(url, `./elements/${name}.min.js`))
  ]

  const requests: Promise<string>[] = [];
  for(let module of cssModules) {
    _urls[module] = _urls[module] || fetch(module)
      .then((response) => response.ok ? response.text() : "")
      .catch(() => "")
    requests.push(_urls[module]);
  }

  for(let module of jsModules) {
    _urls[module] = _urls[module] || import(/* @vite-ignore */ module);
    requests.push(_urls[module]);
  }

  const responses = (await Promise.allSettled<any>(requests))
    .filter((response: any) => !!response.value && typeof response.value == "string")
    .map((response: any) => response.value);

  let styleElement = document.getElementById(_id);
  if (styleElement) {
    styleElement.textContent = responses.join("\n");
    return styleElement.textContent;
  }
  
  styleElement = document.createElement("style");
  styleElement.id = _id;
  styleElement.textContent = responses.join("\n");
  const scriptElement = getScriptElement();
  if (scriptElement) scriptElement.insertAdjacentElement("afterend", styleElement);
  else document.head.appendChild(styleElement);
  return styleElement.textContent;
}

export async function importModulesFromQueryString(queryString: string): Promise<string> {
  const params = new URLSearchParams(queryString);
  const urlObject = new URL(_url);

  if (params.has("settings")) urlObject.searchParams.set("settings", params.get("settings") || "");
  if (params.has("elements")) urlObject.searchParams.set("elements", params.get("elements") || "");
  if (params.has("helpers")) urlObject.searchParams.set("helpers", params.get("helpers") || "");
  if (params.has("scoped")) urlObject.searchParams.set("scoped", params.get("scoped") || "");

  return importModulesFromUrl(urlObject.href);
}