import globals from "../globals";
import { query, queryAll, addClass, on, off, hasTag, hasClass, removeClass, blurActiveElement } from "../utils";

const menuTimeouts = new WeakMap<Document | ShadowRoot, ReturnType<typeof setTimeout>>();

function getContainer(root: Document | ShadowRoot = document): Element {
  return root instanceof Document ? root.body : (root ? (root as ShadowRoot).host : document.body);
}

function onClickDocument(e: Event, root: Document | ShadowRoot = document) {
  off(getContainer(root), "click", (event: Event) => onClickDocument(event, root));
  const body = e.target as Element;
  const menus = queryAll("menu.active", root) as NodeListOf<HTMLMenuElement>;
  for (let i=0; i<menus.length; i++) updateMenu(body, menus[i], e, root);
}

function focusOnMenuOrInput(menu: HTMLMenuElement, root: Document | ShadowRoot = document) {
  setTimeout(() => {
    const input = query(".field > input", root, menu) as HTMLInputElement;
    if (input) input.focus();
    else menu.focus();
  }, 90);
}

export function updateMenu(from: Element, menu: HTMLMenuElement, e?: Event | Document | ShadowRoot, root?: Document | ShadowRoot) {
  if (e && (e instanceof Document || (typeof ShadowRoot !== "undefined" && e instanceof ShadowRoot))) {
    root = e as any;
    e = undefined;
  }
  root = root ?? document;

  let timeoutMenu = menuTimeouts.get(root);
  if (timeoutMenu) clearTimeout(timeoutMenu);

  timeoutMenu = setTimeout(() => {
    on(getContainer(root), "click", (event: Event) => onClickDocument(event, root));
    if (!hasTag((root as Document).activeElement, "input")) blurActiveElement(root);

    const isActive = hasClass(menu, "active");
    const isEvent = (e?.target === from);
    const isChild = !!from.closest("menu");

    if ((!isActive && isChild) || (isActive && isEvent)) {
      removeClass(menu, "active");
      return;
    }

    removeClass(queryAll("menu.active", root), "active");
    addClass(menu, "active");
    focusOnMenuOrInput(menu, root);
  }, 90);
  menuTimeouts.set(root, timeoutMenu);
}

globals().menu = {
  updateMenu
}