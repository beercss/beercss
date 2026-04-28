import {updateAllFields} from "./elements/fields";
import {updateAllSliders} from "./elements/sliders";
import {updateMode, updateTheme} from "./settings/theme";
import {type IBeerCssTheme} from "./interfaces";
import {addClass, guid, hasClass, hasTag, onWeak, query, queryAll, removeClass, updateAllClickable} from "./utils";
import {updateDialog} from "./elements/dialogs";
import {updateMenu} from "./elements/menus";
import {updateSnackbar} from "./elements/snackbars";
import {updatePage} from "./elements/pages";
import {updateAllRipples} from "./helpers/ripples";
import { updateAllProgress } from "./elements/progress";

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
    requestAnimationFrame(() => updateDialog(from, to as HTMLDialogElement));
    return;
  }

  if (hasTag(to, "menu")) {
    requestAnimationFrame(() => updateMenu(from, to as HTMLMenuElement, e));
    return;
  }

  if (hasClass(to, "snackbar")) {
    requestAnimationFrame(() => updateSnackbar(to, options as number));
    return;
  }

  if (hasClass(to, "page")) {
    requestAnimationFrame(() => updatePage(to));
    return;
  }

  if (hasClass(to, "active")) {
    removeClass(from, "active");
    removeClass(to, "active");
    return;
  }

  addClass(to, "active");
}

function setup() {
  if (_context.ui || _mutation || !_context.MutationObserver) return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { childList: true, subtree: true });
  onMutation();
}

function onClickDataUi(e: Event) {
  const from = (e.target as HTMLElement).closest("[data-ui]") as HTMLElement;
  if (from) void run(from, null, null, e);
}

function onKeydownDataUi(e: KeyboardEvent) {
  const from = (e.target as HTMLElement).closest("[data-ui]") as HTMLElement;
  if (from && (hasTag(from, "a") && !from.getAttribute("href")) && e.key === "Enter") void run(from, null, null, e);
}

function updateAllDataUis() {
  const body = document.body;
  if (!body) return;

  onWeak(body, "click", onClickDataUi);
  onWeak(body, "keydown", onKeydownDataUi);
}

function _ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme> {
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
  updateAllRipples();
  updateAllSliders();
  updateAllProgress();
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
