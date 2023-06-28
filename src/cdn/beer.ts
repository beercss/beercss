export default (() => {
  const _window: Window | any = globalThis;
  let _timeoutToast: ReturnType<typeof setTimeout>;
  let _timeoutMutation: ReturnType<typeof setTimeout>;
  let _mutation: MutationObserver | null;
  const _lastTheme: IBeerCssTheme = {
    light: "",
    dark: "",
  };
  const _emptyNodeList = [] as unknown as NodeListOf<Element>;

  async function wait (milliseconds: number): Promise<Function> {
    return await new Promise((resolve: Function) => setTimeout(resolve, milliseconds));
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

  function hasQuery (selector: string | Element | null, element?: Element | null): boolean {
    return !!(query(selector, element));
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

  function on (element: Element | null, name: string, callback: any): void {
    element?.addEventListener(name, callback, true);
  }

  function off (element: Element | null, name: string, callback: any): void {
    element?.removeEventListener(name, callback, true);
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
    for (const key in htmlAttributesAsJson) element.setAttribute(key, htmlAttributesAsJson[key]);
    return element;
  }

  function updateInput (target: Element): void {
    const input = target as HTMLInputElement;
    if (hasType(input, "number") && !input.value) input.value = "";

    const parentTarget = parent(target);
    const label = query("label", parentTarget) as HTMLLabelElement;
    const isBorder = hasClass(parentTarget, "border") && !hasClass(parentTarget, "fill");
    const toActive = document.activeElement === target || input.value || hasQuery("[selected]", input) || hasType(input, "date") || hasType(input, "time") || hasType(input, "datetime-local");

    if (toActive) {
      if (isBorder) addClass(input, "active");
      addClass(label, "active");
    } else {
      if (isBorder) removeClass(input, "active");
      removeClass(label, "active");
    }

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
    menus.forEach((x: Element) => menu(target, x, e));
  }

  function onClickToast (e: Event): void {
    const target = e.currentTarget as Element;
    removeClass(target, "active");

    if (_timeoutToast) clearTimeout(_timeoutToast);
  }

  function onChangeFile (e: Event): void {
    const target = e.currentTarget as HTMLInputElement;
    updateFile(target);
  }

  function onKeydownFile (e: KeyboardEvent): void {
    const target = e.currentTarget as HTMLInputElement;
    updateFile(target, e);
  }

  function onInputRange (e: Event): void {
    const target = e.currentTarget as HTMLInputElement;
    updateRange(target);
  }

  function onMutation (): void {
    if (_timeoutMutation) clearTimeout(_timeoutMutation);
    _timeoutMutation = setTimeout(() => { void ui(); }, 180);
  }

  function updateFile (target: Element, e?: KeyboardEvent): void {
    if (e) {
      if (e.key !== "Enter") return;

      const target = e.currentTarget as Element;
      const nextTarget = next(target) as HTMLInputElement;
      if (!hasType(nextTarget, "file")) return;
      return nextTarget.click();
    }

    const currentTarget = target as HTMLInputElement;
    const previousTarget = prev(target) as HTMLInputElement;
    if (!hasType(previousTarget, "text")) return;
    previousTarget.value = currentTarget.files ? Array.from(currentTarget.files).map((x) => x.name).join(", ") : "";
    previousTarget.readOnly = true;
    previousTarget.addEventListener("keydown", onKeydownFile);
    updateInput(previousTarget);
  }

  function updateRange (target: Element): void {
    const parentTarget = parent(target) as HTMLElement;
    const bar = query("span", parentTarget) as HTMLElement;
    const inputs = queryAll("input", parentTarget) as NodeListOf<HTMLInputElement>;
    const tooltip = query(".tooltip", parentTarget) as HTMLElement;
    if (!inputs.length || !bar) return;

    const percents: Array<number> = [];
    const values: Array<number> = [];
    for (let i = 0; i < inputs.length; i++) {
      const min = parseFloat(inputs[i].min || "0");
      const max = parseFloat(inputs[i].max || "100");
      const value = parseFloat(inputs[i].value || "0");
      const percent = (value - min) * 100 / (max - min);
      percents.push(percent);
      values.push(value);
    }

    if (tooltip && tooltip.textContent !== values.join()) tooltip.innerHTML = values.join();

    let percent = percents[0];
    let left = 0;
    let right = 100 - left - percent;
    if (inputs.length > 1) {
      percent = Math.abs(percents[1] - percents[0]);
      left = percents[1] > percents[0] ? percents[0] : percents[1];
      right = 100 - left - percent;
    }

    bar.style.left = `${left}%`;
    bar.style.right = `${right}%`;
  }

  async function open (from: Element, to: Element | null, options?: any, e?: Event): Promise<void> {
    if (!to) {
      to = query(from.getAttribute("data-ui"));
      if (!to) return;
    }

    if (hasTag(to, "dialog")) return await dialog(from, to);
    if (hasTag(to, "menu")) return menu(from, to, e);
    if (hasClass(to, "toast")) return toast(from, to, options);
    if (hasClass(to, "page")) return page(from, to);
    if (hasClass(to, "progress")) return progress(to, options);

    tab(from);

    if (hasClass(to, "active")) return removeClass(to, "active");

    addClass(to, "active");
  }

  function tab (from: Element): void {
    const container = parent(from);
    if (!hasClass(container, "tabs")) return;
    const tabs = queryAll("a", container);
    tabs.forEach((x: Element) => removeClass(x, "active"));
    addClass(from, "active");
  }

  function page (from: Element, to: Element): void {
    tab(from);
    const container = parent(to);
    if (container) for (let i = 0; i < container.children.length; i++) if (hasClass(container.children[i], "page")) removeClass(container.children[i], "active");
    addClass(to, "active");
  }

  function menu (from: Element, to: Element, e?: Event): any {
    on(document.body, "click", onClickDocument);
    e?.stopPropagation();
    tab(from);

    if (hasClass(to, "active")) {
      if (!e) return removeClass(to, "active");

      const trustedFrom = e.target as Element;
      const trustedTo = query(trustedFrom.getAttribute("data-ui") ?? "");
      const trustedMenu = trustedFrom.closest("menu");
      const trustedActive = !query("menu", trustedFrom.closest("[data-ui]") ?? undefined);

      if (trustedTo && trustedTo !== trustedMenu) return menu(trustedFrom, trustedTo);
      if (!trustedTo && !trustedActive && trustedMenu) return false;
      return removeClass(to, "active");
    }

    const menus = queryAll("menu.active");
    menus.forEach((x: Element) => removeClass(x, "active"));
    addClass(to, "active");
  }

  async function dialog (from: Element, to: Element): Promise<void> {
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
      elements.forEach((x: any) => {
        removeClass(x, "active");
        if (x.open) x.close();
      });
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

  function toast (from: Element, to: Element, milliseconds?: number): void {
    tab(from);

    const elements = queryAll(".toast.active");
    elements.forEach((x: Element) => removeClass(x, "active"));
    addClass(to, "active");
    on(to, "click", onClickToast);

    if (_timeoutToast) clearTimeout(_timeoutToast);

    if (milliseconds === -1) return;

    _timeoutToast = setTimeout(() => {
      removeClass(to, "active");
    }, milliseconds ?? 6000);
  }

  function progress (to: Element, percentage: number): void {
    const element = to as HTMLElement;

    if (hasClass(element, "left")) {
      element.style.clipPath = `polygon(0% 0%, 0% 100%, ${percentage}% 100%, ${percentage}% 0%)`;
      return;
    }

    if (hasClass(element, "top")) {
      element.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${percentage}%, 0% ${percentage}%)`;
      return;
    }

    if (hasClass(element, "right")) {
      element.style.clipPath = `polygon(100% 0%, 100% 100%, ${100 - percentage}% 100%, ${100 - percentage}% 0%)`;
      return;
    }

    if (hasClass(element, "bottom")) element.style.clipPath = `polygon(0% 100%, 100% 100%, 100% ${100 - percentage}%, 0% ${100 - percentage}%)`;
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
    const variables = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--outline", "--surface-variant", "--on-surface-variant", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--inverse-on-primary"];
    for (let i = 0; i < variables.length; i++) {
      _lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
      _lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
    }

    document.body.removeChild(light);
    document.body.removeChild(dark);
    return _lastTheme;
  }

  function theme (source?: IBeerCssTheme | any): IBeerCssTheme | Promise<IBeerCssTheme> {
    if (!source || !_window.materialDynamicColors) return lastTheme();

    const mode = /dark/i.test(document.body.className) ? "dark" : "light";
    if (source.light && source.dark) {
      _lastTheme.light = source.light;
      _lastTheme.dark = source.dark;
      document.body.setAttribute("style", source[mode]);
      return source;
    }

    return _window.materialDynamicColors(source).then((theme: IBeerCssTheme) => {
      const toCss = (data: any) => {
        let style = "";
        for (const i in data) {
          const kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
          const value: string = data[i];
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

  function mode (value: string | any): string {
    if (!value) return /dark/i.test(document.body.className) ? "dark" : "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(value);
    const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
    if (_window.materialDynamicColors) document.body.setAttribute("style", lastThemeStyle);
    return value;
  }

  function setup (): void {
    if (_mutation) return;
    _mutation = new MutationObserver(onMutation);
    _mutation.observe(document.body, { childList: true, subtree: true });
    onMutation();
  }

  function ui (selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
    if (selector) {
      if (selector === "setup") return setup() as undefined;
      if (selector === "guid") return guid();
      if (selector === "mode") return mode(options);
      if (selector === "theme") return theme(options);

      const to = query(selector);
      if (!to) return;
      void open(to, to, options);
    }

    const elements = queryAll("[data-ui]");
    elements.forEach((x: Element) => on(x, "click", onClickElement));

    const labels = queryAll(".field > label");
    labels.forEach((x: Element) => on(x, "click", onClickLabel));

    const inputs = queryAll(".field > input:not([type=file], [type=checkbox], [type=radio]), .field > select, .field > textarea");
    inputs.forEach((x: Element) => {
      on(x, "focus", onFocusInput);
      on(x, "blur", onBlurInput);
      updateInput(x);
    });
    const files = queryAll(".field > input[type=file]");
    files.forEach((x: Element) => {
      on(x, "change", onChangeFile);
      updateFile(x);
    });
    const ranges = queryAll(".slider > input[type=range]");
    ranges.forEach((x: Element) => {
      on(x, "input", onInputRange);
      updateRange(x);
    });
  }

  if (_window.addEventListener) _window.addEventListener("load", async () => await ui("setup"));
  _window.beercss = ui;
  _window.ui = ui;
  return _window.ui;
})();
