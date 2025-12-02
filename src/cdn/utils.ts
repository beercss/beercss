const _emptyNodeList = [] as unknown as NodeListOf<Element>;
const _weakElements = new WeakSet<HTMLElement>();

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
  if (!addWeakElement(element as HTMLElement)) return;
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

export const query = (selector: string | Element | null, root: Document | ShadowRoot, element?: Element | null): Element | null => {
  try {
    const searchContext = element ?? root;
    return (typeof selector === "string")
      ? searchContext.querySelector(selector)
      : selector;
  } catch {
    return null;
  }
};

export const queryAll = (selector: string | NodeListOf<Element> | null, root: Document | ShadowRoot, element?: Element | null): NodeListOf<Element> => {
  try {
    const searchContext = element ?? root;
    return (typeof selector === "string")
      ? searchContext.querySelectorAll(selector)
      : selector ?? _emptyNodeList;
  } catch {
    return _emptyNodeList;
  }
};

export const create = (htmlAttributesAsJson: any, root: Document | ShadowRoot): HTMLElement => {
  const doc = root instanceof Document ? root : root.ownerDocument;
  const element = doc.createElement("div");
  for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
    const key = keys[i];
    const value = htmlAttributesAsJson[key] as string;
    element.setAttribute(key, value);
  }
  return element;
};

export const blurActiveElement = (root: Document | ShadowRoot) => {
  (root.activeElement as HTMLElement)?.blur();
};

export const queryAllDataUi = (id: string, root: Document | ShadowRoot, element?: Element | null): NodeListOf<Element> => {
  return queryAll("[data-ui=\"#"+id+"\"]", root, element);
};

export const queryDataUi = (id: string, root: Document | ShadowRoot, element?: Element | null): Element | null => {
  return query("[data-ui=\"#"+id+"\"]", root, element);
};

export function updateAllClickable(element: Element, root: Document | ShadowRoot) {
  if (element.id && hasClass(element, "page")) element = queryDataUi(element.id, root) ?? element;

  const container = parent(element);
  if (!hasClass(container, "tabs") && !hasClass(container, "tabbed") && !hasTag(container, "nav")) return;

  const as = queryAll("a", root, container);
  for(let i=0; i<as.length; i++) removeClass(as[i], "active");
  if (!hasTag(element, "button") && !hasClass(element, "button") && !hasClass(element, "chip")) addClass(element, "active");
}

export function addWeakElement(element: HTMLElement): boolean {
  if (_weakElements.has(element)) return false;
  _weakElements.add(element);
  return true;
}

