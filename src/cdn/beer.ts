import {updateAllFields} from "./elements/fields";
import {updateAllSliders} from "./elements/sliders";
import {updateMode, updateTheme} from "./helpers/theme";
import {type IBeerCssTheme} from "./interfaces";
import {addClass, guid, hasClass, hasTag, on, query, queryAll, removeClass, updateAllClickable} from "./utils";
import {updateDialog} from "./elements/dialogs";
import {updateMenu} from "./elements/menus";
import {updateSnackbar} from "./elements/snackbars";
import {updatePage} from "./elements/pages";
import {updateAllRipples} from "./helpers/ripples";

const _context = globalThis as any;
let _timeoutMutation: ReturnType<typeof setTimeout>;
let _mutation: MutationObserver | null;

function onMutation() {
  if (_timeoutMutation) clearTimeout(_timeoutMutation);
  _timeoutMutation = setTimeout(async () => await _ui(), 180);
}

async function run(from: Element, to: Element | null, options?: any, e?: Event): Promise<void> {
  if (!to) {
    to = query(from.getAttribute("data-ui"));
    if (!to) {
      from.classList.toggle("active");
      return;
    }
  }

  updateAllClickable(from);

  if (hasTag(to, "dialog")) {
    await updateDialog(from, to as HTMLDialogElement);
    return;
  }

  if (hasTag(to, "menu")) {
    updateMenu(from, to as HTMLMenuElement, e);
    return;
  }

  if (hasClass(to, "snackbar")) {
    updateSnackbar(to, options as number);
    return;
  }

  if (hasClass(to, "page")) {
    updatePage(to);
    return;
  }

  if (hasClass(to, "active")) {
    removeClass(from, "active");
    removeClass(to, "active");
    return;
  }

  addClass(to, "active");
}

function onClickElement(e: Event) {
  void run(e.currentTarget as HTMLElement, null, null, e);
}

function onKeydownElement(e: KeyboardEvent) {
  if (e.key === "Enter") void run(e.currentTarget as HTMLElement, null, null, e);
}

function setup() {
  if (_context.ui || _mutation || !_context.MutationObserver) return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { childList: true, subtree: true });
  onMutation();
}

function updateAllDataUis() {
  const elements = queryAll("[data-ui]");
  for (let i = 0, n = elements.length; i < n; i++) {
    on(elements[i], "click", onClickElement);
    if (hasTag(elements[i], "a") && !elements[i].getAttribute("href")) on(elements[i], "keydown", onKeydownElement);
  }
}

function _ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  if (selector) {
    if (selector === "setup") { setup(); return; }
    if (selector === "guid") return guid();
    if (selector === "mode") return updateMode(options as string);
    if (selector === "theme") return updateTheme(options);

    const to = query(selector);
    if (!to) return;
    void run(to, to, options);
  }

  updateAllDataUis();
  updateAllFields();
  updateAllSliders();
  updateAllRipples();
}

function start() {
  if (_context.ui) return;

  const body = _context.document?.body;
  if (body && !body.classList.contains("dark") && !body.classList.contains("light")) updateMode("auto");

  setup();
  _context.ui = _ui;
}

start();

const ui = _context.ui;
export {
  ui as default,
  ui,
};
