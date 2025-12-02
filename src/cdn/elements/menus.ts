import { query, queryAll, addClass, on, off, hasTag, hasClass, removeClass, blurActiveElement } from "../utils"; // Removed getRoot

const menuTimeouts = new WeakMap<Document | ShadowRoot, ReturnType<typeof setTimeout>>(); // Localized timeout

function getContainer(root: Document | ShadowRoot): Element { // Added root
  return root instanceof Document ? root.body : root.host;
}

function onClickDocument(e: Event, root: Document | ShadowRoot) { // Added root
  off(getContainer(root), "click", (event: Event) => onClickDocument(event, root)); // Pass root
  const body = e.target as Element;
  const menus = queryAll("menu.active", root) as NodeListOf<HTMLMenuElement>; // Pass root
  for (let i=0; i<menus.length; i++) updateMenu(body, menus[i], e, root); // Pass root
}

function focusOnMenuOrInput(menu: HTMLMenuElement, root: Document | ShadowRoot) { // Added root
  setTimeout(() => {
    const input = query(".field > input", root, menu) as HTMLInputElement; // Pass root
    if (input) input.focus();
    else menu.focus();
  }, 90);
}

export function updateMenu(from: Element, menu: HTMLMenuElement, e: Event | undefined, root: Document | ShadowRoot) { // Added root
  let timeoutMenu = menuTimeouts.get(root); // Get timeout for this root
  if (timeoutMenu) clearTimeout(timeoutMenu);

  timeoutMenu = setTimeout(() => {
    on(getContainer(root), "click", (event: Event) => onClickDocument(event, root)); // Pass root to handler
    if (!hasTag((root as Document).activeElement, "input")) blurActiveElement(root); // Pass root

    const isActive = hasClass(menu, "active");
    const isEvent = (e?.target === from);
    const isChild = !!from.closest("menu");

    if ((!isActive && isChild) || (isActive && isEvent)) {
      removeClass(menu, "active");
      return;
    }

    removeClass(queryAll("menu.active", root), "active"); // Pass root
    addClass(menu, "active");
    focusOnMenuOrInput(menu, root); // Pass root
  }, 90);
  menuTimeouts.set(root, timeoutMenu); // Store timeout for this root
}
