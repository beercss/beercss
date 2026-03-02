import { addClass, parent, removeClass, queryAll } from "../utils";

export function updatePage(page: Element) {
  const container = parent(page);
  if (container) removeClass(queryAll(":scope > .page", container), "active");
  addClass(page, "active");
}