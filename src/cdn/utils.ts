const _emptyNodeList = [] as unknown as NodeListOf<Element>;

export function isTouchable(): boolean {
  return window?.matchMedia("(pointer: coarse)").matches;
}

export function isDark(): boolean {
  return window?.matchMedia("(prefers-color-scheme: dark)").matches;
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

export function query(selector: string | Element | null, element?: Element | null): Element | null {
  try {
    return (typeof selector === "string")
      ? (element ?? document).querySelector(selector)
      : selector;
  } catch {
    return null;
  }
}

export function queryAll(selector: string | NodeListOf<Element> | null, element?: Element | null): NodeListOf<Element> {
  try {
    return (typeof selector === "string")
      ? (element ?? document).querySelectorAll(selector)
      : selector ?? _emptyNodeList;
  } catch {
    return _emptyNodeList;
  }
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

export function create(htmlAttributesAsJson: any): HTMLElement {
  const element = document.createElement("div");
  for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
    const key = keys[i];
    const value = htmlAttributesAsJson[key] as string;
    element.setAttribute(key, value);
  }
  return element;
}

export function blurActiveElement() {
  (document.activeElement as HTMLElement)?.blur();
}

export function queryAllDataUi(id: string): NodeListOf<Element> {
  return queryAll("[data-ui=\"#"+id+"\"]");
}

export function queryDataUi(id: string): Element | null {
  return query("[data-ui=\"#"+id+"\"]");
}

export function updateAllClickable(element: Element) {
  if (element.id && hasClass(element, "page")) element = queryDataUi(element.id) ?? element;

  const container = parent(element);
  if (!hasClass(container, "tabs") && !hasClass(container, "tabbed") && !hasTag(container, "nav")) return;

  const as = queryAll("a", container);
  for(let i=0; i<as.length; i++) removeClass(as[i], "active");
  if (!hasTag(element, "button") && !hasClass(element, "button") && !hasClass(element, "chip")) addClass(element, "active");
}

