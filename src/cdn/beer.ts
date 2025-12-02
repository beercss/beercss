import {updateAllFields} from "./elements/fields";
import {updateAllSliders} from "./elements/sliders";
import {updateMode, updateTheme} from "./helpers/theme";
import {IBeerCssTheme, IBeerCSSRootInstance} from "./interfaces";
import {addClass, guid, hasClass, hasTag, onWeak, query, queryAll, removeClass, updateAllClickable} from "./utils";
import {updateDialog} from "./elements/dialogs";
import {updateMenu} from "./elements/menus";
import {updateSnackbar} from "./elements/snackbars";
import {updatePage} from "./elements/pages";
import {updateAllRipples} from "./helpers/ripples";

function createBeerCssInstance(root: Document | ShadowRoot): (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  let timeoutMutation: ReturnType<typeof setTimeout> | undefined;
  let mutation: MutationObserver | null = null;
  let mutationTarget: Document | ShadowRoot | null = null;

  const instanceRoot = root; // Capture the root for this instance

  const onMutation = () => {
    if (timeoutMutation) clearTimeout(timeoutMutation);
    timeoutMutation = setTimeout(async () => await ui(), 180); // Calls the specific ui for this instance
  };

  const setup = (currentRoot: Document | ShadowRoot) => {
    if (mutation || !globalThis.MutationObserver) return;
    mutation = new MutationObserver(onMutation);
    mutationTarget = currentRoot;
    const observeTarget = currentRoot instanceof Document ? currentRoot.body : currentRoot;
    mutation.observe(observeTarget, { childList: true, subtree: true });
    onMutation();
  };

  // Helper run function, now closed over 'instanceRoot'
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
      await updateDialog(from, to as HTMLDialogElement, instanceRoot);
      return;
    }

    if (hasTag(to, "menu")) {
      updateMenu(from, to as HTMLMenuElement, e, instanceRoot);
      return;
    }

    if (hasClass(to, "snackbar")) {
      updateSnackbar(to, options as number, instanceRoot);
      return;
    }

    if (hasClass(to, "page")) {
      updatePage(to, instanceRoot);
      return;
    }

    if (hasClass(to, "active")) {
      removeClass(from, "active");
      removeClass(to, "active");
      return;
    }

    addClass(to, "active");
  };

  // Helper click and keydown functions, closed over 'run'
  const onClickElement = (e: Event) => {
    void run(e.currentTarget as HTMLElement, null, null, e);
  };

  const onKeydownElement = (e: KeyboardEvent) => {
    if (e.key === "Enter") void run(e.currentTarget as HTMLElement, null, null, e);
  };

  // Helper to update all data-ui elements for this root
  const updateAllDataUis = () => {
    const elements = queryAll("[data-ui]", instanceRoot);
    for (let i = 0, n = elements.length; i < n; i++) {
      onWeak(elements[i], "click", onClickElement);
      if (hasTag(elements[i], "a") && !elements[i].getAttribute("href")) onWeak(elements[i], "keydown", onKeydownElement);
    }
  };

  const ui = (selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined => {
    if (selector) {
      if (selector === "setup") { setup(instanceRoot); return; }
      if (selector === "guid") return guid();
      if (selector === "mode") return updateMode(options as string, instanceRoot);
      if (selector === "theme") return updateTheme(options, instanceRoot);

      const to = query(selector, instanceRoot);
      if (!to) return;
      void run(to, to, options);
    }

    updateAllDataUis();
    updateAllFields(instanceRoot);
    updateAllSliders(instanceRoot);
    updateAllRipples(instanceRoot);
  };

  const container = instanceRoot instanceof Document ? instanceRoot.body : (instanceRoot.host as HTMLElement);
  if (container && !container.classList.contains("dark") && !container.classList.contains("light")) {
    updateMode("auto", instanceRoot);
  }

  setup(instanceRoot);

  return ui;
}

export function init(root: Document | ShadowRoot = document): (selector?: string | Element, options?: string | number | IBeerCssTheme) => string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  return createBeerCssInstance(root);
}
