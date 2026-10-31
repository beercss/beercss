import globals from "./globals";
import { type IBeerCssTheme } from "./interfaces";
import { addClass, guid, hasClass, hasTag, onWeak, query, removeClass, updateAllClickable, importModulesFromUrl, importModulesFromQueryString } from "./utils";

const _url = import.meta.url;
const _context = globalThis as any;

export function createBeerCssInstance(root: Document | ShadowRoot = document): (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | undefined | Promise<IBeerCssTheme> {
  let _timeoutMutation: ReturnType<typeof setTimeout> | undefined;
  let _mutation: MutationObserver | null = null;
  const instanceRoot = root;

  const onMutation = () => {
    if (_timeoutMutation) clearTimeout(_timeoutMutation);
    _timeoutMutation = setTimeout(async () => await _ui(), 180);
  };

  const setup = () => {
    if (_mutation || !_context.MutationObserver) return;
    _mutation = new MutationObserver(onMutation);
    const observeTarget = instanceRoot instanceof Document ? instanceRoot.body : instanceRoot;
    if (observeTarget) _mutation.observe(observeTarget, { childList: true, subtree: true });
    onMutation();
  };

  const run = async (from: Element, to: Element | null, options?: any, e?: Event): Promise<void> => {
    if (!to) {
      to = query(from.getAttribute("data-ui"), instanceRoot);
      if (!to) {
        from.classList.toggle("active");
        return;
      }
    }

    updateAllClickable(from, instanceRoot);

    if (hasTag(to, "dialog")) {
      requestAnimationFrame(() => globals().dialog?.updateDialog(from, to as HTMLDialogElement, instanceRoot));
      return;
    }

    if (hasTag(to, "menu")) {
      requestAnimationFrame(() => globals().menu?.updateMenu(from, to as HTMLMenuElement, e, instanceRoot));
      return;
    }

    if (hasClass(to, "snackbar")) {
      requestAnimationFrame(() => globals().snackbar?.updateSnackbar(to, options as number, instanceRoot));
      return;
    }

    if (hasClass(to, "page")) {
      requestAnimationFrame(() => globals().page?.updatePage(to, instanceRoot));
      return;
    }

    if (hasClass(to, "active")) {
      removeClass(from, "active");
      removeClass(to, "active");
      return;
    }

    addClass(to, "active");
  };

  const onClickDataUi = (e: Event) => {
    const from = (e.target as HTMLElement).closest("[data-ui]") as HTMLElement;
    if (from) void run(from, null, null, e);
  };

  const onKeydownDataUi = (e: KeyboardEvent) => {
    const from = (e.target as HTMLElement).closest("[data-ui]") as HTMLElement;
    if (from && (hasTag(from, "a") && !from.getAttribute("href")) && e.key === "Enter") void run(from, null, null, e);
  };

  const updateAllDataUis = () => {
    const container = instanceRoot instanceof Document ? instanceRoot.body : instanceRoot;
    if (!container) return;

    onWeak(container as any, "click", onClickDataUi);
    onWeak(container as any, "keydown", onKeydownDataUi);
  };

  const _ui = (selector?: string | Element, options?: string | number | IBeerCssTheme): string | undefined | Promise<IBeerCssTheme> => {
    if (selector) {
      if (selector === "setup") { setup(); return; }
      if (selector === "guid") return guid();
      if (selector === "mode") return globals().theme?.updateMode(options as string, instanceRoot);
      if (selector === "theme") return globals().theme?.updateTheme(options, instanceRoot);
      if (selector === "import") { importModulesFromQueryString(options as string); return; }

      const to = query(selector, instanceRoot);
      if (!to) return;
      void run(to, to, options);
    }

    updateAllDataUis();
    globals().field?.updateAllFields(instanceRoot);
    globals().ripple?.updateAllRipples(instanceRoot);
    globals().slider?.updateAllSliders(instanceRoot);
    globals().progress?.updateAllProgress(instanceRoot);
  };

  const container = instanceRoot instanceof Document ? instanceRoot.body : (instanceRoot.host as HTMLElement);
  if (container && !container.classList.contains("dark") && !container.classList.contains("light")) {
    globals().theme?.updateMode("auto", instanceRoot);
  }

  setup();

  return _ui;
}

function init(root: Document | ShadowRoot = document): (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | undefined | Promise<IBeerCssTheme> {
  return createBeerCssInstance(root);
}

function start() {
  if (_context.ui) return;

  _context.ui = init(document);
}

importModulesFromUrl(_url);
start();

const ui = _context.ui;
globals().ui = ui;
export {
  init,
  ui as default,
  ui,
}