import { queryAll, addClass, on, off, hasTag, hasClass, removeClass } from "../utils";

let _timeoutMenu: ReturnType<typeof setTimeout>;

function onClickDocument(e: Event) {
  off(document.body, "click", onClickDocument);
  const target = e.target as Element;
  const menus = queryAll("menu.active") as NodeListOf<HTMLMenuElement>;
  for (let i=0; i<menus.length; i++) updateMenu(target, menus[i], e);
}

export function updateMenu(from: Element, menu: HTMLMenuElement, e?: Event) {
  if (_timeoutMenu) clearTimeout(_timeoutMenu);

  _timeoutMenu = setTimeout(() => {
    on(document.body, "click", onClickDocument);
    const activeElement = document.activeElement as HTMLElement;
    if (!hasTag(activeElement, "input")) activeElement?.blur();

    const isActive = hasClass(menu, "active");
    const isEvent = !!(e?.target === from);
    const isChild = !!from.closest("menu");

    if ((!isActive && isChild) || (isActive && isEvent)) {
      removeClass(menu, "active");
      return;
    }

    removeClass(queryAll("menu.active"), "active");
    addClass(menu, "active");
  }, 90);
}