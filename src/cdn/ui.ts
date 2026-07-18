import globals from "./globals";
import { type IBeerCssTheme } from "./interfaces";
import { addClass, guid, hasClass, hasTag, onWeak, query, removeClass, updateAllClickable } from "./utils";
import { importModulesFromUrl, importModulesFromQueryString } from "./modules";

const _url = import.meta.url;
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
    requestAnimationFrame(() => globals.dialog?.updateDialog(from, to as HTMLDialogElement));
    return;
  }

  if (hasTag(to, "menu")) {
    requestAnimationFrame(() => globals.menu?.updateMenu(from, to as HTMLMenuElement, e));
    return;
  }

  if (hasClass(to, "snackbar")) {
    requestAnimationFrame(() => globals.snackbar?.updateSnackbar(to, options as number));
    return;
  }

  if (hasClass(to, "page")) {
    requestAnimationFrame(() => globals.page?.updatePage(to));
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
    if (selector === "mode") return globals.theme?.updateMode(options as string);
    if (selector === "theme") return globals.theme?.updateTheme(options);
    if (selector === "import") { importModulesFromQueryString(options as string); return; }

    const to = query(selector);
    if (!to) return;
    void run(to, to, options);
  }

  updateAllDataUis();
  globals.field?.updateAllFields();
  globals.ripple?.updateAllRipples();
  globals.slider?.updateAllSliders();
  globals.progress?.updateAllProgress();
}

function start() {
  if (_context.ui) return;

  const body = _context.document?.body;
  if (body && !body.classList.contains("dark") && !body.classList.contains("light")) globals.theme?.updateMode("auto");

  setup();
  _context.ui = _ui;
}

importModulesFromUrl(_url);
start();

const ui = _context.ui;
export {
  ui as default,
  ui,
}