import { addClass, parent, removeClass, queryAll } from "../utils";

export function updatePage(page: Element, root: Document | ShadowRoot) { // Added root
  const container = parent(page);
  if (container) removeClass(queryAll(":scope > .page", root, container), "active"); // Pass root
  addClass(page, "active");
}