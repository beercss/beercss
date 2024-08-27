import { updateAllFields } from "./elements/fields";
import { updateAllSliders } from "./elements/sliders";
import { updateMode, updateTheme } from "./helpers/theme";
import { type IBeerCssTheme } from "./interfaces";
import { guid, on, query, queryAll, run } from "./utils";

let _timeoutMutation: ReturnType<typeof setTimeout>;
let _mutation: MutationObserver | null;

function onMutation() {
  if (_timeoutMutation) clearTimeout(_timeoutMutation);
  _timeoutMutation = setTimeout(async () => await ui(), 180);
}

function onClickElement(e: Event) {
  run(e.currentTarget as HTMLElement, null, null, e);
}

function setup() {
  if (_mutation) return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { childList: true, subtree: true });
  onMutation();
}

function updateAllDataUis() {
  const elements = queryAll("[data-ui]");
  for (let i = 0, n = elements.length; i < n; i++) on(elements[i], "click", onClickElement);
}

function ui(selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  if (selector) {
    if (selector === "setup") { setup(); return; }
    if (selector === "guid") return guid();
    if (selector === "mode") return updateMode(options as string);
    if (selector === "theme") return updateTheme(options);

    const to = query(selector);
    if (!to) return;
    run(to, to, options);
  }

  updateAllDataUis();
  updateAllFields();
  updateAllSliders();
}

function start() {
  const context = (globalThis as any);
  const body = context?.document?.body;
  
  if (body && !body.classList.contains("dark") && !body.classList.contains("light")) updateMode("auto");
  
  on(context, "load", setup, false);
  context.beercss = ui;
  context.ui = ui;
}

start();
export default ui;
