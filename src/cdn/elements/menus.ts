import { query, queryAll, addClass, on, off, hasTag, hasClass, removeClass, blurActiveElement } from "../utils";

let _timeoutMenu: ReturnType<typeof setTimeout>;

function onClickDocument(e: Event) {
  off(document.body, "click", onClickDocument);
  const body = e.target as Element;
  const menus = queryAll("menu.active") as NodeListOf<HTMLMenuElement>;
  for (let i=0; i<menus.length; i++) updateMenu(body, menus[i], e);
}

function focusOnMenuOrInput(menu: HTMLMenuElement) {
  setTimeout(() => {
    const input = query(".field > input", menu) as HTMLInputElement;
    if (input) input.focus();
    else menu.focus();
  }, 90);
}

export function updateMenu(from: Element, menu: HTMLMenuElement, e?: Event) {
  if (_timeoutMenu) clearTimeout(_timeoutMenu);

  _timeoutMenu = setTimeout(() => {
    on(document.body, "click", onClickDocument);
    if (!hasTag(document.activeElement, "input")) blurActiveElement();

    const isActive = hasClass(menu, "active");
    const isEvent = (e?.target === from);
    const isChild = !!from.closest("menu");

    if ((!isActive && isChild) || (isActive && isEvent)) {
      removeClass(menu, "active");
      return;
    }

    removeClass(queryAll("menu.active"), "active");
    addClass(menu, "active");
    focusOnMenuOrInput(menu);
  }, 90);
}
