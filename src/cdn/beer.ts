import { type IBeerCssTheme } from "./interfaces";

let _timeoutSnackbar: ReturnType<typeof setTimeout>;
let _timeoutMutation: ReturnType<typeof setTimeout>;
let _timeoutMenu: ReturnType<typeof setTimeout>;
let _mutation: MutationObserver | null;
const _lastTheme: IBeerCssTheme = {
  light: "",
  dark: "",
};
const _emptyNodeList = [] as unknown as NodeListOf<Element>;

async function wait (milliseconds: number) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}

function guid (): string {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function query (selector: string | Element | null, element?: Element | null): Element | null {
  try {
    return (typeof selector === "string")
      ? (element ?? document).querySelector(selector)
      : selector;
  } catch {
    return null;
  }
}

function queryAll (selector: string | NodeListOf<Element> | null, element?: Element | null): NodeListOf<Element> {
  try {
    return (typeof selector === "string")
      ? (element ?? document).querySelectorAll(selector)
      : selector ?? _emptyNodeList;
  } catch {
    return _emptyNodeList;
  }
}

function hasClass (element: Element | null, name: string): boolean {
  return element?.classList?.contains(name) ?? false;
}

function hasTag (element: Element | null, name: string): boolean {
  return element?.tagName?.toLowerCase() === name;
}

function hasType (element: HTMLInputElement | null, name: string): boolean {
  return element?.type?.toLowerCase() === name;
}

function addClass (element: Element | null, name: string): void {
  element?.classList?.add(name);
}

function removeClass (element: Element | null, name: string): void {
  element?.classList?.remove(name);
}

function on (element: any, name: string, callback: any, useCapture: boolean = true): void {
  element?.addEventListener(name, callback, useCapture);
}

function off (element: any, name: string, callback: any, useCapture: boolean = true): void {
  element?.removeEventListener(name, callback, useCapture);
}

function insertBefore (newElement: Element, element: Element | null): void {
  element?.parentNode?.insertBefore(newElement, element);
}

function prev (element: Element): Element | null {
  return element?.previousElementSibling;
}

function next (element: Element): Element | null {
  return element?.nextElementSibling;
}

function parent (element: Element): Element | null {
  return element?.parentElement;
}

function create (htmlAttributesAsJson: any): HTMLElement {
  const element = document.createElement("div");
  for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
    const key = keys[i];
    const value = htmlAttributesAsJson[key] as string;
    element.setAttribute(key, value);
  }
  return element;
}

function updateInput (target: Element): void {
  const input = target as HTMLInputElement;
  if (hasType(input, "number") && !input.value) input.value = "";
  if (!input.placeholder) input.placeholder = " ";
  if (target.getAttribute("data-ui")) void open(target, null);
}

function onClickElement (e: Event): void {
  void open(e.currentTarget as HTMLElement, null, null, e);
}

function onClickLabel (e: Event): void {
  const target = e.currentTarget as Element;
  const parentTarget = parent(target);
  const input = query("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", parentTarget) as HTMLElement;
  if (input) input.focus();
}

function onFocusInput (e: Event): void {
  const target = e.currentTarget as Element;
  updateInput(target);
}

function onBlurInput (e: Event): void {
  const target = e.currentTarget as Element;
  updateInput(target);
}

function onClickDocument (e: Event): void {
  off(document.body, "click", onClickDocument);
  const target = e.target as Element;
  const menus = queryAll("menu.active");
  for (let i = 0, n = menus.length; i < n; i++) menu(target, menus[i], e);
}

function onClickSnackbar (e: Event): void {
  const target = e.currentTarget as Element;
  removeClass(target, "active");

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
}

function onChangeFile (e: Event): void {
  const target = e.currentTarget as HTMLInputElement;
  updateFile(target);
}

function onChangeColor (e: Event): void {
  const target = e.currentTarget as HTMLInputElement;
  updateColor(target);
}

function onKeydownFile (e: KeyboardEvent): void {
  const target = e.currentTarget as HTMLInputElement;
  updateFile(target, e);
}

function onKeydownColor (e: KeyboardEvent): void {
  const target = e.currentTarget as HTMLInputElement;
  updateColor(target, e);
}

function onInputTextarea (e: Event): void {
  const target = e.currentTarget as Element;
  updateTextarea(target);
}

function onMutation (): void {
  if (_timeoutMutation) clearTimeout(_timeoutMutation);
  _timeoutMutation = setTimeout(() => { void ui(); }, 180);
}

function updateFile (target: Element, e?: KeyboardEvent): void {
  if (e && e.key === "Enter") {
    const previousTarget = prev(target) as HTMLInputElement;
    if (!hasType(previousTarget, "file")) return;
    previousTarget.click(); return;
  }

  const currentTarget = target as HTMLInputElement;
  const nextTarget = next(target) as HTMLInputElement;
  if (!hasType(nextTarget, "text")) return;
  nextTarget.value = currentTarget.files ? Array.from(currentTarget.files).map((x) => x.name).join(", ") : "";
  nextTarget.readOnly = true;
  on(nextTarget, "keydown", onKeydownFile, false);
  updateInput(nextTarget);
}

function updateColor (target: Element, e?: KeyboardEvent): void {
  if (e && e.key === "Enter") {
    const previousTarget = prev(target) as HTMLInputElement;
    if (!hasType(previousTarget, "color")) return;
    previousTarget.click(); return;
  }

  const currentTarget = target as HTMLInputElement;
  const nextTarget = next(target) as HTMLInputElement;
  if (!hasType(nextTarget, "text")) return;
  nextTarget.readOnly = true;
  nextTarget.value = currentTarget.value;
  on(nextTarget, "keydown", onKeydownColor, false);
  updateInput(nextTarget);
}

function updateTextarea (target: Element): void {
  const parentTarget = parent(target) as HTMLElement;
  const currentTarget = parent(target) as HTMLElement;
  parentTarget.removeAttribute("style");
  if (hasClass(parentTarget, "min")) parentTarget.style.setProperty("---size", `${Math.max(target.scrollHeight, currentTarget.offsetHeight)}px`);
}

function updateRange (target: Element): void {
  const parentTarget = parent(target) as HTMLElement;
  const bar = query("span", parentTarget) as HTMLElement;
  const inputs = queryAll("input", parentTarget) as NodeListOf<HTMLInputElement>;
  if (!inputs.length || !bar) return;

  const rootSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16;
  const thumb = hasClass(parentTarget, "max") ? 0 : 0.25 * rootSize * 100 / inputs[0].offsetWidth;
  const percents: Array<number> = [];
  const values: Array<number> = [];
  for (let i = 0, n = inputs.length; i < n; i++) {
    const min = parseFloat(inputs[i].min) || 0;
    const max = parseFloat(inputs[i].max) || 100;
    const value = parseFloat(inputs[i].value) || 0;
    const percent = (value - min) * 100 / (max - min);
    const fix = thumb / 2 - thumb * percent / 100;
    percents.push(percent + fix);
    values.push(value);
  }

  let percent = percents[0];
  let start = 0;
  let end = 100 - start - percent;
  let value1 = values[0];
  let value2 = values[1] || 0;
  if (inputs.length > 1) {
    percent = Math.abs(percents[1] - percents[0]);
    start = percents[1] > percents[0] ? percents[0] : percents[1];
    end = 100 - start - percent;

    if (value2 > value1) {
      value1 = values[1] || 0;
      value2 = values[0];
    }
  }

  parentTarget.style.setProperty("---start", `${start}%`);
  parentTarget.style.setProperty("---end", `${end}%`);
  parentTarget.style.setProperty("---value1", `'${value1}'`);
  parentTarget.style.setProperty("---value2", `'${value2}'`);
}

function updateAllRanges (e?: Event) {
  if (e) {
    const input = e.target as HTMLInputElement;
    if (input.type === "range") { updateRange(input); return; }
  }

  const ranges = queryAll(".slider > input[type=range]") as NodeListOf<HTMLInputElement>;
  if (!ranges.length) off(globalThis, "input", updateAllRanges, false);
  else on(globalThis, "input", updateAllRanges, false);
  for (let i = 0, n = ranges.length; i < n; i++) updateRange(ranges[i]);
}

async function open (from: Element, to: Element | null, options?: any, e?: Event): Promise<void> {
  if (!to) {
    to = query(from.getAttribute("data-ui"));
    if (!to) return;
  }

  if (hasTag(to, "dialog")) { await dialog(from, to); return; }
  if (hasTag(to, "menu")) { menu(from, to, e); return; }
  if (hasClass(to, "snackbar")) { snackbar(from, to, options as number); return; }
  if (hasClass(to, "page")) { page(from, to); return; }

  tab(from);

  if (hasClass(to, "active")) { removeClass(to, "active"); return; }

  addClass(to, "active");
}

function tab (from: Element): void {
  if (from.id && hasClass(from, "page")) from = query(`[data-ui="#${from.id}"]`) ?? from;

  const container = parent(from);
  if (!hasClass(container, "tabs")) return;
  const tabs = queryAll("a", container);
  for (let i = 0, n = tabs.length; i < n; i++) removeClass(tabs[i], "active");
  addClass(from, "active");
}

function page (from: Element, to: Element): void {
  tab(from);
  const container = parent(to);
  if (container) {
    for (let i = 0, n = container.children.length; i < n; i++) {
      if (hasClass(container.children[i], "page")) removeClass(container.children[i], "active");
    }
  }
  addClass(to, "active");
}

function menu (from: Element, to: Element, e?: Event) {
  if (_timeoutMenu) clearTimeout(_timeoutMenu);

  _timeoutMenu = setTimeout(() => {
    on(document.body, "click", onClickDocument);
    (document.activeElement as HTMLElement)?.blur();
    tab(from);

    const isActive = hasClass(to, "active");
    const isEvent = !!(e?.target === from);
    const isChild = !!from.closest("menu");

    if ((!isActive && isChild) || (isActive && isEvent)) {
      removeClass(to, "active");
      return;
    }

    const menus = queryAll("menu.active");
    for (let i = 0, n = menus.length; i < n; i++) removeClass(menus[i], "active");
    addClass(to, "active");
  }, 90);
}

async function dialog (from: Element, to: Element): Promise<void> {
  (document.activeElement as HTMLElement)?.blur();
  tab(from);

  let overlay = prev(to) as HTMLElement;
  const target = to as HTMLDialogElement;
  const isActive = hasClass(to, "active") || target.open;
  const isModal = hasClass(to, "modal");
  const container = parent(to);
  const isNav = hasTag(container, "nav");

  if (!hasClass(overlay, "overlay")) {
    overlay = create({ class: "overlay" });
    insertBefore(overlay, to);
    await wait(90);
  }

  overlay.onclick = () => {
    if (isModal) return;

    removeClass(from, "active");
    removeClass(to, "active");
    removeClass(overlay, "active");
    target.close();
  };

  if (isNav) {
    const elements = queryAll("dialog, a, .overlay", container);
    for (let i = 0, n = elements.length; i < n; i++) {
      const element = elements[i] as any;
      removeClass(element, "active");
      if (element.open) element.close();
    }
  }

  if (isActive) {
    removeClass(from, "active");
    removeClass(overlay, "active");
    removeClass(to, "active");
    target.close();
  } else {
    if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
    addClass(overlay, "active");
    addClass(to, "active");

    if (isModal) target.showModal();
    else target.show();
  }
}

function snackbar (from: Element, to: Element, milliseconds?: number): void {
  (document.activeElement as HTMLElement)?.blur();
  tab(from);

  const elements = queryAll(".snackbar.active");
  for (let i = 0, n = elements.length; i < n; i++) removeClass(elements[i], "active");
  addClass(to, "active");
  on(to, "click", onClickSnackbar);

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);

  if (milliseconds === -1) return;

  _timeoutSnackbar = setTimeout(() => {
    removeClass(to, "active");
  }, milliseconds ?? 6000);
}

function lastTheme (): IBeerCssTheme {
  if (_lastTheme.light && _lastTheme.dark) return _lastTheme;

  const light = document.createElement("body");
  light.className = "light";
  document.body.appendChild(light);

  const dark = document.createElement("body");
  dark.className = "dark";
  document.body.appendChild(dark);

  const fromLight = getComputedStyle(light);
  const fromDark = getComputedStyle(dark);
  const variables = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let i = 0, n = variables.length; i < n; i++) {
    _lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
    _lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
  }

  document.body.removeChild(light);
  document.body.removeChild(dark);
  return _lastTheme;
}

function theme (source?: IBeerCssTheme | any): IBeerCssTheme | Promise<IBeerCssTheme> {
  if (!source || !(globalThis as any).materialDynamicColors) return lastTheme();

  const mode = /dark/i.test(document.body.className) ? "dark" : "light";
  if (source.light && source.dark) {
    _lastTheme.light = source.light;
    _lastTheme.dark = source.dark;
    document.body.setAttribute("style", source[mode]);
    return source;
  }

  return (globalThis as any).materialDynamicColors(source).then((theme: IBeerCssTheme) => {
    const toCss = (data: any) => {
      let style = "";
      for (let i = 0, keys = Object.keys(data), n = keys.length; i < n; i++) {
        const key = keys[i];
        const value = data[key] as string;
        const kebabCase = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        style += "--" + kebabCase + ":" + value + ";";
      }
      return style;
    };

    _lastTheme.light = toCss(theme.light);
    _lastTheme.dark = toCss(theme.dark);
    document.body.setAttribute("style", _lastTheme[mode]);
    return _lastTheme;
  });
}

function mode (value: string): string {
  if (!value) return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(value);
  const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
  if ((globalThis as any).materialDynamicColors) document.body.setAttribute("style", lastThemeStyle);
  return value;
}

function setup () {
  if (_mutation) return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { childList: true, subtree: true });
  onMutation();
}

function ui (selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  if (selector) {
    if (selector === "setup") { setup(); return; }
    if (selector === "guid") return guid();
    if (selector === "mode") return mode(options as string);
    if (selector === "theme") return theme(options);

    const to = query(selector);
    if (!to) return;
    void open(to, to, options);
  }

  const elements = queryAll("[data-ui]");
  for (let i = 0, n = elements.length; i < n; i++) on(elements[i], "click", onClickElement);

  const labels = queryAll(".field > label");
  for (let i = 0, n = labels.length; i < n; i++) on(labels[i], "click", onClickLabel);

  const inputs = queryAll(".field > input:not([type=file], [type=color], [type=range]), .field > select, .field > textarea");
  for (let i = 0, n = inputs.length; i < n; i++) {
    const input = inputs[i];
    on(input, "focus", onFocusInput);
    on(input, "blur", onBlurInput);
    updateInput(input);
  }

  const files = queryAll(".field > input[type=file]");
  for (let i = 0, n = files.length; i < n; i++) {
    const file = files[i];
    on(file, "change", onChangeFile);
    updateFile(file);
  }

  const colors = queryAll(".field > input[type=color]");
  for (let i = 0, n = colors.length; i < n; i++) {
    const color = colors[i];
    on(color, "change", onChangeColor);
    updateColor(color);
  }

  const textareas = queryAll(".field.textarea > textarea");
  for (let i = 0, n = textareas.length; i < n; i++) {
    const textarea = textareas[i];
    on(textarea, "input", onInputTextarea);
    updateTextarea(textarea);
  }

  updateAllRanges();
}

if ((globalThis as any).addEventListener) (globalThis as any).addEventListener("load", async () => await ui("setup"));
(globalThis as any).beercss = ui;
(globalThis as any).ui = ui;
export default ui;
