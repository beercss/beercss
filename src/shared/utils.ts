import { type IInstallEvent } from "./interfaces";

let _installEvent: IInstallEvent;

const id = (): string => {
  return `id${(new Date().getTime().toString() + Math.floor(Math.random() * (999999 - 100000) + 100000).toString()).padStart(22, "0")}`;
};

const wait = async (milliseconds: number) => await new Promise((resolve) => setTimeout(resolve, milliseconds));

const html = (elements?: NodeListOf<Element>, html: string = "") => {
  elements?.forEach((x: Element) => { x.innerHTML = html; });
};

const remove = (elements?: NodeListOf<Element>) => {
  elements?.forEach((x: Element) => { x.remove(); });
};

const clone = (element: Element | null) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = element?.outerHTML ?? "";
  return newElement.firstElementChild;
};

const removeClass = (elements: NodeListOf<Element>, classes: Array<string>) => {
  elements.forEach((x: Element) => { x.classList.remove(...classes); });
};

const addClass = (elements: NodeListOf<Element>, classes: Array<string>, filter?: (x: Element) => boolean) => {
  elements.forEach((x: Element) => { if (!filter || filter(x)) x.classList.add(...classes); });
};

const is = (element: Element | null, selectors: Array<string>) => {
  const newElement = document.createElement("div");
  newElement.innerHTML = element?.outerHTML ?? "";

  for (let i = 0; i < selectors.length; i++) { if (newElement.querySelector(selectors[i])) return true; }

  return false;
};

const removeAttribute = (elements: NodeListOf<Element>, attribute: string) => {
  elements.forEach((x: Element) => { x.removeAttribute(attribute); });
};

const setAttribute = (elements: NodeListOf<Element>, key: string, value: string) => {
  if (/checked|selected|readonly/i.test(key)) elements.forEach((x: any) => { x[key] = value; });
  else elements.forEach((x: Element) => { x.setAttribute(key, value); });
};

const removeValue = (elements: NodeListOf<Element>) => {
  elements.forEach((x: any) => { x.value = ""; });
};

const query = (selector: string | Element): Element | null => {
  if (typeof selector === "string") return document.querySelector(selector);
  return selector;
};

const queryAll = (selector: string | NodeListOf<Element>): NodeListOf<Element> => {
  if (typeof selector === "string") return document.querySelectorAll(selector);
  return selector;
};

const firstRedirect = () => {
  window.addEventListener("load", () => {
    if (window.location.pathname !== "/") page.redirect(window.location.pathname);
  });
};

const waitForInstall = () => {
  if (_installEvent) return;

  window.addEventListener("load", () => {
    const url = "/sw.js";
    navigator.serviceWorker.register(url);
  });

  window.addEventListener("beforeinstallprompt", (e: Event) => {
    e.preventDefault();
    _installEvent = e as IInstallEvent;
  });
};

const install = async () => { await _installEvent?.prompt(); };

export default {
  id,
  wait,
  html,
  remove,
  clone,
  removeClass,
  addClass,
  is,
  removeAttribute,
  setAttribute,
  removeValue,
  query,
  queryAll,
  firstRedirect,
  waitForInstall,
  install,
};
