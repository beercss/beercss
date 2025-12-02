import { addClass, parent, removeClass, queryAll } from "../utils";

export function updatePage(page: Element, root: Document | ShadowRoot) {
  const container = parent(page);
  if (container) removeClass(queryAll(":scope > .page", root, container), "active");
  addClass(page, "active");
}