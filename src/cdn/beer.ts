export default (() => {
  interface ILastTheme {
    dark: string,
    light: string,
  }

  const _window = globalThis;
  let _timeoutToast: NodeJS.Timeout = null;
  let _timeoutMutation: NodeJS.Timeout = null;
  let _mutation: MutationObserver = null;
  const _lastTheme: ILastTheme = {
    light: "",
    dark: "",
  };

  const wait = async (milliseconds: number) => {
    return await new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const guid = (): string => {
    return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
      const r = (Math.random() * 16) | 0;
      const v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const query = (selector: string | Element, element?: Element): Element => {
    try {
      return typeof selector === "string"
        ? (element || document).querySelector(selector)
        : selector;
    } catch {}
  };

  const queryAll = (selector: string | NodeListOf<Element>, element?: Element) => {
    try {
      return typeof selector === "string"
        ? (element || document).querySelectorAll(selector)
        : selector;
    } catch {}
  };

  const hasClass = (element: Element, name: string): boolean => {
    if (!element) return false;
    return element.classList.contains(name);
  };

  const addClass = (element: Element, name: string) => {
    if (!element) return;
    element.classList.add(name);
  };

  const removeClass = (element: Element, name: string) => {
    if (!element) return;
    element.classList.remove(name);
  };

  const on = (element: Element, name: string, callback: any) => {
    element.addEventListener(name, callback, true);
  };

  const off = (element: Element, name: string, callback: any) => {
    element.removeEventListener(name, callback, true);
  };

  const insertBefore = (newElement: Element, element: Element): Element => {
    if (!element) return;
    return element.parentNode.insertBefore(newElement, element);
  };

  const prev = (element: Element): Element => {
    if (!element) return;
    return element.previousElementSibling;
  };

  const next = (element: Element): Element => {
    if (!element) return;
    return element.nextElementSibling;
  };

  const parent = (element: Element): Element => {
    if (!element) return;
    return element.parentElement;
  };

  const create = (json: any) => {
    const element = document.createElement("div");

    for (const i in json) { element[i] = json[i]; }

    return element;
  };

  const updateInput = (target: Element) => {
    const input = target as HTMLInputElement;
    const parentTarget = parent(target);
    const label = query("label", parentTarget) as HTMLLabelElement;
    const isBorder = hasClass(parentTarget, "border") && !hasClass(parentTarget, "fill");
    const toActive = document.activeElement == target || input.value || /date|time/.test(input.type);

    if (toActive) {
      if (isBorder && label) {
        let width = hasClass(label, "active") ? label.offsetWidth : Math.round(label.offsetWidth / 1.33);
        width = width / 16; // 16px = 1rem, originally 1px = 1rem, hence the division
        const start = hasClass(parentTarget, "round") ? 1.25 : 0.75;
        const end = width + start + 0.5;
        input.style.clipPath = `polygon(0% 0%, ${start}rem 0%, ${start}rem 0.5rem, ${end}rem 0.5rem, ${end}rem 0%, 100% 0%, 100% 100%, 0% 100%)`;
      } else { input.style.clipPath = ""; }
      addClass(label, "active");
    } else {
      removeClass(label, "active");
      input.style.clipPath = "";
    }

    if (target.getAttribute("data-ui")) open(target);
  };

  const onClickElement = (e: Event) => {
    const target = e.currentTarget as HTMLElement;
    if (/input/i.test(target.tagName)) return;
    open(target);
  };

  const onClickLabel = (e: Event) => {
    const target = e.currentTarget as Element;
    const input = query("input:not([type=file]):not([type=checkbox]):not([type=radio]), select, textarea", parent(target)) as HTMLElement;
    if (input) input.focus();
  };

  const onFocusInput = (e: Event) => {
    const target = e.currentTarget as Element;
    updateInput(target);
  };

  const onBlurInput = (e: Event) => {
    const target = e.currentTarget as Element;
    updateInput(target);
  };

  const onClickDocument = (e: Event) => {
    const target = e.currentTarget as Element;
    const dropdowns = queryAll(".dropdown.active");
    dropdowns.forEach((x: Element) => removeClass(x, "active"));

    off(target, "click", onClickDocument);
  };

  const onClickToast = (e: Event) => {
    const target = e.currentTarget as Element;
    removeClass(target, "active");

    if (_timeoutToast) clearTimeout(_timeoutToast);
  };

  const onChangeFile = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    updateFile(target);
  };

  const onKeydownFile = (e: KeyboardEvent) => {
    const target = e.currentTarget as HTMLInputElement;
    updateFile(target, e);
  };

  const onInputRange = (e: Event) => {
    const target = e.currentTarget as HTMLInputElement;
    updateRange(target);
  };

  const onMutation = () => {
    if (_timeoutMutation) clearTimeout(_timeoutMutation);
    _timeoutMutation = setTimeout(ui, 180);
  };

  const updateFile = (target: Element, e?: KeyboardEvent) => {
    if (e) {
      if (e.key !== "Enter") return;

      const target = e.currentTarget as Element;
      const nextTarget = next(target) as HTMLInputElement;
      if (!nextTarget || !/file/i.test(nextTarget.type)) return;
      return nextTarget.click();
    }

    const currentTarget = target as HTMLInputElement;
    const previousTarget = prev(target) as HTMLInputElement;
    if (!previousTarget || !/text/i.test(previousTarget.type)) return;
    previousTarget.value = Array.from(currentTarget.files).map((x) => x.name).join(", ");
    previousTarget.readOnly = true;
    previousTarget.addEventListener("keydown", onKeydownFile);
    updateInput(previousTarget);
  };

  const updateRange = (target: Element) => {
    const parentTarget = parent(target);
    const inputs = queryAll("input[type='range']", parentTarget) as NodeListOf<HTMLInputElement>;
    const span = query(":not(.tooltip, input)", parentTarget) as HTMLElement;
    const tooltip = query(".tooltip", parentTarget) as HTMLElement;
    if (!inputs.length || !span) return;
    
    let percents:Array<number> = [];
    let values:Array<number> = [];
    for(let i=0; i<inputs.length; i++) {
      let min = parseFloat(inputs[i].min || "0");
      let max = parseFloat(inputs[i].max || "100");
      let value = parseFloat(inputs[i].value || "0");
      let percent = (value - min) * 100 / (max - min);
      percents.push(percent);
      values.push(value);
    }
    
    if (tooltip) tooltip.textContent = values.join();
    if (inputs.length === 1) return span.style.width = percents[0] + "%";

    let width = Math.abs(percents[1] - percents[0]);
    let left = percents[1] > percents[0] ? percents[0] : percents[1];
    let right = 100 - left - width;
    span.style.left = left + "%";
    span.style.right = right + "%";
    span.style.width = width + "%";
  }

  const open = (from?: Element, to?: Element, config?: any) => {
    if (!to) to = query(from.getAttribute("data-ui"));
    if (hasClass(to, "modal")) return modal(from, to);
    if (hasClass(to, "dropdown")) return dropdown(from, to);
    if (hasClass(to, "toast")) return toast(from, to, config);
    if (hasClass(to, "page")) return page(from, to);
    if (hasClass(to, "progress")) return progress(to, config);

    tab(from);

    if (hasClass(to, "active")) return removeClass(to, "active");

    addClass(to, "active");
  };

  const tab = (from: Element) => {
    const container = parent(from);
    if (!hasClass(container, "tabs")) return;

    const tabs = queryAll("a", container);
    tabs.forEach((x: Element) => removeClass(x, "active"));

    addClass(from, "active");
  };

  const page = (from: Element, to: Element) => {
    tab(from);

    const container = parent(to);
    for (let i = 0; i < container.children.length; i++) { if (hasClass(container.children[i], "page")) removeClass(container.children[i], "active"); }

    addClass(to, "active");
  };

  const dropdown = (from: Element, to: Element) => {
    tab(from);

    if (hasClass(to, "active")) return removeClass(to, "active");

    const dropdowns = queryAll(".dropdown.active");
    dropdowns.forEach((x: Element) => removeClass(x, "active"));

    addClass(to, "active");
    on(document.body, "click", onClickDocument);
  };

  const modal = async (from: Element, to: Element) => {
    tab(from);

    let overlay = prev(to) as HTMLElement;
    if (!hasClass(overlay, "overlay")) {
      overlay = create({ className: "overlay" });
      insertBefore(overlay, to);
      await wait(90);
    }

    overlay.onclick = () => {
      removeClass(from, "active");
      removeClass(to, "active");
      removeClass(overlay, "active");
    };

    const isActive = hasClass(to, "active");
    const container = parent(to);
    if (/nav/i.test(container.tagName)) {
      const elements = queryAll(".modal, a, .overlay", container);
      elements.forEach((x: Element) => removeClass(x, "active"));
    }

    if (isActive) {
      removeClass(from, "active");
      removeClass(overlay, "active");
      removeClass(to, "active");
    } else {
      if (!/button/i.test(from.tagName) && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
      addClass(overlay, "active");
      addClass(to, "active");
    }
  };

  const toast = (from: Element, to: Element, config: any) => {
    tab(from);

    const elements = queryAll(".toast.active");
    elements.forEach((x: Element) => removeClass(x, "active"));
    addClass(to, "active");
    on(to, "click", onClickToast);

    if (_timeoutToast) clearTimeout(_timeoutToast);

    if (config && config == -1) return;

    _timeoutToast = setTimeout(() => {
      removeClass(to, "active");
    }, config && config ? config : 6000);
  };

  const progress = (to: Element, config: any) => {
    const element = to as HTMLElement;

    if (hasClass(element, "left")) return element.style.clipPath = `polygon(0% 0%, 0% 100%, ${config}% 100%, ${config}% 0%)`;

    if (hasClass(element, "top")) return element.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${config}%, 0% ${config}%)`;

    if (hasClass(element, "right")) return element.style.clipPath = `polygon(100% 0%, 100% 100%, ${100 - config}% 100%, ${100 - config}% 0%)`;

    if (hasClass(element, "bottom")) return element.style.clipPath = `polygon(0% 100%, 100% 100%, 100% ${100 - config}%, 0% ${100 - config}%)`;
  };

  const lastTheme = (): ILastTheme => {
    if (_lastTheme.light && _lastTheme.dark) return _lastTheme;

    const light = document.createElement("body");
    light.className = "light";
    document.body.appendChild(light);

    const dark = document.createElement("body");
    dark.className = "dark";
    document.body.appendChild(dark);

    const fromLight = getComputedStyle(light);
    const fromDark = getComputedStyle(dark);
    const variables = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--outline", "--surface-variant", "--on-surface-variant", "--inverse-surface", "--inverse-on-surface"];
    for (let i = 0; i < variables.length; i++) {
      _lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
      _lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
    }

    document.body.removeChild(light);
    document.body.removeChild(dark);
    return _lastTheme;
  };

  const theme = (source: any): ILastTheme => {
    if (!source || !_window.materialDynamicColors) return lastTheme();

    const mode = /dark/i.test(document.body.className) ? "dark" : "light";
    if (source && source.light && source.dark) {
      _lastTheme.light = source.light;
      _lastTheme.dark = source.dark;
      document.body.setAttribute("style", source[mode]);
      return source;
    }

    return _window.materialDynamicColors(source).then((theme) => {
      const toCss = (data) => {
        let style = "";
        for (const i in data) {
          const kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
          style += "--" + kebabCase + ":" + data[i] + ";";
        }
        return style;
      };

      _lastTheme.light = toCss(theme.light);
      _lastTheme.dark = toCss(theme.dark);
      document.body.setAttribute("style", _lastTheme[mode]);
      return _lastTheme;
    });
  };

  const mode = (value: string): string => {
    if (!value) return /dark/i.test(document.body.className) ? "dark" : "light";
    document.body.classList.remove("light", "dark");
    document.body.classList.add(value);
    if (_window.materialDynamicColors) document.body.setAttribute("style", _lastTheme[value]);
    return value;
  };

  const setup = () => {
    if (_mutation) return;
    _mutation = new MutationObserver(onMutation);
    _mutation.observe(document.body, { childList: true, subtree: true });
    ui();
  };

  const ui = (selector?: string, config?: any) => {
    if (selector) {
      if (selector == "setup") return setup();
      if (selector == "guid") return guid();
      if (selector == "mode") return mode(config);
      if (selector == "theme") return theme(config);

      const to = query(selector);
      const from = query("[data-ui='#" + to.id + "']");
      open(from, to, config);
    }

    const elements = queryAll("[data-ui]");
    elements.forEach((x: Element) => on(x, "click", onClickElement));

    const labels = queryAll(".field > label");
    labels.forEach((x: HTMLLabelElement) => on(x, "click", onClickLabel));

    const inputs = queryAll(".field > input:not([type=file]):not([type=checkbox]):not([type=radio]), .field > select, .field > textarea");
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
  };

  if (_window.addEventListener) _window.addEventListener("load", () => ui("setup"));
  _window.beercss= ui;
  _window.ui = ui;
  return _window.ui;
})();
