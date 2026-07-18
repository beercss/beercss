import { randomId } from "./utils";

let _settings: string[] = [];
let _elements: string[] = [];
let _helpers: string[] = [];
let _urls: { [key: string]: Promise<string> } = {};
let _url = new URL(import.meta.url);

const _id = randomId();
const _allSettings = ["global", "light", "dark", "font", "reset", "theme"];
const _allElements = ["badge", "bar", "button", "card", "chip", "dialog", "divider", "expansion", "field", "grid", "icon", "layout", "list", "mainLayout", "media", "menu", "navigation", "overlay", "page", "progress", "selection", "shape", "slider", "snackbar", "tab", "table", "tooltip", "typography"];
const _allHelpers = ["alignment", "blur", "color", "direction", "elevate", "form", "margin", "opacity", "padding", "position", "responsive", "ripple", "scroll", "shadow", "size", "space", "wave", "zoom"];

export function getModule(url: string, path: string, scoped: boolean): string {
  return new URL(scoped ? path.replace(".min.css", ".scoped.min.css") : path, url).href;
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

  const modules: string[] = [
    ...mergedSettings.map((name) => getModule(url, `./settings/${name}.min.css`, scoped)),
    ...mergedHelpers.map((name) => getModule(url, `./helpers/${name}.min.css`, scoped)),
    ...mergedElements.map((name) => getModule(url, `./elements/${name}.min.css`, scoped)),
  ];

  const requests: Promise<string>[] = [];
  for(let module of modules) {
    _urls[module] = _urls[module] || fetch(module)
      .then((response) => response.ok ? response.text() : "")
      .catch(() => "")
    requests.push(_urls[module]);
  }

  const responses = (await Promise.allSettled<any>(requests))
    .filter((response: any) => !!response.value)
    .map((response: any) => response.value);

  let styleElement = document.getElementById(_id);
  if (styleElement) {
    styleElement.textContent = responses.join("\n");
    return styleElement.textContent;
  }
  
  styleElement = document.createElement("style");
  styleElement.id = _id;
  styleElement.textContent = responses.join("\n");
  const scriptElement = document.querySelector("script[src*=beer]");
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