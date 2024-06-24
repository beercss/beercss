let _timeoutSnackbar;
let _timeoutMutation;
let _timeoutMenu;
let _mutation;
const _lastTheme = {
  light: "",
  dark: ""
};
const _emptyNodeList = [];
async function wait(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function guid() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0;
    const v = c === "x" ? r : r & 3 | 8;
    return v.toString(16);
  });
}
function query(selector, element) {
  try {
    return typeof selector === "string" ? (element ?? document).querySelector(selector) : selector;
  } catch {
    return null;
  }
}
function queryAll(selector, element) {
  try {
    return typeof selector === "string" ? (element ?? document).querySelectorAll(selector) : selector ?? _emptyNodeList;
  } catch {
    return _emptyNodeList;
  }
}
function hasClass(element, name) {
  var _a;
  return ((_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.contains(name)) ?? false;
}
function hasTag(element, name) {
  var _a;
  return ((_a = element == null ? void 0 : element.tagName) == null ? void 0 : _a.toLowerCase()) === name;
}
function hasType(element, name) {
  var _a;
  return ((_a = element == null ? void 0 : element.type) == null ? void 0 : _a.toLowerCase()) === name;
}
function addClass(element, name) {
  var _a;
  (_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.add(name);
}
function removeClass(element, name) {
  var _a;
  (_a = element == null ? void 0 : element.classList) == null ? void 0 : _a.remove(name);
}
function on(element, name, callback, useCapture = true) {
  element == null ? void 0 : element.addEventListener(name, callback, useCapture);
}
function off(element, name, callback, useCapture = true) {
  element == null ? void 0 : element.removeEventListener(name, callback, useCapture);
}
function insertBefore(newElement, element) {
  var _a;
  (_a = element == null ? void 0 : element.parentNode) == null ? void 0 : _a.insertBefore(newElement, element);
}
function prev(element) {
  return element == null ? void 0 : element.previousElementSibling;
}
function next(element) {
  return element == null ? void 0 : element.nextElementSibling;
}
function parent(element) {
  return element == null ? void 0 : element.parentElement;
}
function create(htmlAttributesAsJson) {
  const element = document.createElement("div");
  for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
    const key = keys[i];
    const value = htmlAttributesAsJson[key];
    element.setAttribute(key, value);
  }
  return element;
}
function updateInput(target) {
  const input = target;
  if (hasType(input, "number") && !input.value)
    input.value = "";
  if (!input.placeholder)
    input.placeholder = " ";
  if (target.getAttribute("data-ui"))
    void open(target, null);
}
function onClickElement(e) {
  void open(e.currentTarget, null, null, e);
}
function onClickLabel(e) {
  const target = e.currentTarget;
  const parentTarget = parent(target);
  const input = query("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", parentTarget);
  if (input)
    input.focus();
}
function onFocusInput(e) {
  const target = e.currentTarget;
  updateInput(target);
}
function onBlurInput(e) {
  const target = e.currentTarget;
  updateInput(target);
}
function onClickDocument(e) {
  off(document.body, "click", onClickDocument);
  const target = e.target;
  const menus = queryAll("menu.active");
  for (let i = 0, n = menus.length; i < n; i++)
    menu(target, menus[i], e);
}
function onClickSnackbar(e) {
  const target = e.currentTarget;
  removeClass(target, "active");
  if (_timeoutSnackbar)
    clearTimeout(_timeoutSnackbar);
}
function onChangeFile(e) {
  const target = e.currentTarget;
  updateFile(target);
}
function onChangeColor(e) {
  const target = e.currentTarget;
  updateColor(target);
}
function onKeydownFile(e) {
  const target = e.currentTarget;
  updateFile(target, e);
}
function onKeydownColor(e) {
  const target = e.currentTarget;
  updateColor(target, e);
}
function onInputTextarea(e) {
  const target = e.currentTarget;
  updateTextarea(target);
}
function onMutation() {
  if (_timeoutMutation)
    clearTimeout(_timeoutMutation);
  _timeoutMutation = setTimeout(() => {
    void ui();
  }, 180);
}
function updateFile(target, e) {
  if (e && e.key === "Enter") {
    const previousTarget = prev(target);
    if (!hasType(previousTarget, "file"))
      return;
    previousTarget.click();
    return;
  }
  const currentTarget = target;
  const nextTarget = next(target);
  if (!hasType(nextTarget, "text"))
    return;
  nextTarget.value = currentTarget.files ? Array.from(currentTarget.files).map((x) => x.name).join(", ") : "";
  nextTarget.readOnly = true;
  on(nextTarget, "keydown", onKeydownFile, false);
  updateInput(nextTarget);
}
function updateColor(target, e) {
  if (e && e.key === "Enter") {
    const previousTarget = prev(target);
    if (!hasType(previousTarget, "color"))
      return;
    previousTarget.click();
    return;
  }
  const currentTarget = target;
  const nextTarget = next(target);
  if (!hasType(nextTarget, "text"))
    return;
  nextTarget.readOnly = true;
  nextTarget.value = currentTarget.value;
  on(nextTarget, "keydown", onKeydownColor, false);
  updateInput(nextTarget);
}
function updateTextarea(target) {
  const parentTarget = parent(target);
  const currentTarget = parent(target);
  parentTarget.removeAttribute("style");
  if (hasClass(parentTarget, "min"))
    parentTarget.style.setProperty("---size", `${Math.max(target.scrollHeight, currentTarget.offsetHeight)}px`);
}
function updateRange(target) {
  const parentTarget = parent(target);
  const bar = query("span", parentTarget);
  const inputs = queryAll("input", parentTarget);
  if (!inputs.length || !bar)
    return;
  const rootSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--size")) || 16;
  const thumb = hasClass(parentTarget, "max") ? 0 : 0.25 * rootSize * 100 / inputs[0].offsetWidth;
  const percents = [];
  const values = [];
  for (let i = 0, n = inputs.length; i < n; i++) {
    const min = parseFloat(inputs[i].min) || 0;
    const max = parseFloat(inputs[i].max) || 100;
    const value = parseFloat(inputs[i].value) || 0;
    const percent2 = (value - min) * 100 / (max - min);
    const fix = thumb / 2 - thumb * percent2 / 100;
    percents.push(percent2 + fix);
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
function updateAllRanges(e) {
  if (e) {
    const input = e.target;
    if (input.type === "range") {
      updateRange(input);
      return;
    }
  }
  const ranges = queryAll(".slider > input[type=range]");
  if (!ranges.length)
    off(globalThis, "input", updateAllRanges, false);
  else
    on(globalThis, "input", updateAllRanges, false);
  for (let i = 0, n = ranges.length; i < n; i++)
    updateRange(ranges[i]);
}
async function open(from, to, options, e) {
  if (!to) {
    to = query(from.getAttribute("data-ui"));
    if (!to)
      return;
  }
  if (hasTag(to, "dialog")) {
    await dialog(from, to);
    return;
  }
  if (hasTag(to, "menu")) {
    menu(from, to, e);
    return;
  }
  if (hasClass(to, "snackbar")) {
    snackbar(from, to, options);
    return;
  }
  if (hasClass(to, "page")) {
    page(from, to);
    return;
  }
  tab(from);
  if (hasClass(to, "active")) {
    removeClass(to, "active");
    return;
  }
  addClass(to, "active");
}
function tab(from) {
  if (from.id && hasClass(from, "page"))
    from = query(`[data-ui="#${from.id}"]`) ?? from;
  const container = parent(from);
  if (!hasClass(container, "tabs"))
    return;
  const tabs = queryAll("a", container);
  for (let i = 0, n = tabs.length; i < n; i++)
    removeClass(tabs[i], "active");
  addClass(from, "active");
}
function page(from, to) {
  tab(from);
  const container = parent(to);
  if (container) {
    for (let i = 0, n = container.children.length; i < n; i++) {
      if (hasClass(container.children[i], "page"))
        removeClass(container.children[i], "active");
    }
  }
  addClass(to, "active");
}
function menu(from, to, e) {
  if (_timeoutMenu)
    clearTimeout(_timeoutMenu);
  _timeoutMenu = setTimeout(() => {
    var _a;
    on(document.body, "click", onClickDocument);
    (_a = document.activeElement) == null ? void 0 : _a.blur();
    tab(from);
    const isActive = hasClass(to, "active");
    const isEvent = !!((e == null ? void 0 : e.target) === from);
    const isChild = !!from.closest("menu");
    if (!isActive && isChild || isActive && isEvent) {
      removeClass(to, "active");
      return;
    }
    const menus = queryAll("menu.active");
    for (let i = 0, n = menus.length; i < n; i++)
      removeClass(menus[i], "active");
    addClass(to, "active");
  }, 90);
}
async function dialog(from, to) {
  var _a;
  (_a = document.activeElement) == null ? void 0 : _a.blur();
  tab(from);
  let overlay = prev(to);
  const target = to;
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
    if (isModal)
      return;
    removeClass(from, "active");
    removeClass(to, "active");
    removeClass(overlay, "active");
    target.close();
  };
  if (isNav) {
    const elements = queryAll("dialog, a, .overlay", container);
    for (let i = 0, n = elements.length; i < n; i++) {
      const element = elements[i];
      removeClass(element, "active");
      if (element.open)
        element.close();
    }
  }
  if (isActive) {
    removeClass(from, "active");
    removeClass(overlay, "active");
    removeClass(to, "active");
    target.close();
  } else {
    if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip"))
      addClass(from, "active");
    addClass(overlay, "active");
    addClass(to, "active");
    if (isModal)
      target.showModal();
    else
      target.show();
  }
}
function snackbar(from, to, milliseconds) {
  var _a;
  (_a = document.activeElement) == null ? void 0 : _a.blur();
  tab(from);
  const elements = queryAll(".snackbar.active");
  for (let i = 0, n = elements.length; i < n; i++)
    removeClass(elements[i], "active");
  addClass(to, "active");
  on(to, "click", onClickSnackbar);
  if (_timeoutSnackbar)
    clearTimeout(_timeoutSnackbar);
  if (milliseconds === -1)
    return;
  _timeoutSnackbar = setTimeout(() => {
    removeClass(to, "active");
  }, milliseconds ?? 6e3);
}
function lastTheme() {
  if (_lastTheme.light && _lastTheme.dark)
    return _lastTheme;
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
function theme(source) {
  if (!source || !globalThis.materialDynamicColors)
    return lastTheme();
  const mode2 = /dark/i.test(document.body.className) ? "dark" : "light";
  if (source.light && source.dark) {
    _lastTheme.light = source.light;
    _lastTheme.dark = source.dark;
    document.body.setAttribute("style", source[mode2]);
    return source;
  }
  return globalThis.materialDynamicColors(source).then((theme2) => {
    const toCss = (data) => {
      let style = "";
      for (let i = 0, keys = Object.keys(data), n = keys.length; i < n; i++) {
        const key = keys[i];
        const value = data[key];
        const kebabCase = key.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        style += "--" + kebabCase + ":" + value + ";";
      }
      return style;
    };
    _lastTheme.light = toCss(theme2.light);
    _lastTheme.dark = toCss(theme2.dark);
    document.body.setAttribute("style", _lastTheme[mode2]);
    return _lastTheme;
  });
}
function mode(value) {
  if (!value)
    return /dark/i.test(document.body.className) ? "dark" : "light";
  document.body.classList.remove("light", "dark");
  document.body.classList.add(value);
  const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
  if (globalThis.materialDynamicColors)
    document.body.setAttribute("style", lastThemeStyle);
  return value;
}
function setup() {
  if (_mutation)
    return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { childList: true, subtree: true });
  onMutation();
}
function ui(selector, options) {
  if (selector) {
    if (selector === "setup") {
      setup();
      return;
    }
    if (selector === "guid")
      return guid();
    if (selector === "mode")
      return mode(options);
    if (selector === "theme")
      return theme(options);
    const to = query(selector);
    if (!to)
      return;
    void open(to, to, options);
  }
  const elements = queryAll("[data-ui]");
  for (let i = 0, n = elements.length; i < n; i++)
    on(elements[i], "click", onClickElement);
  const labels = queryAll(".field > label");
  for (let i = 0, n = labels.length; i < n; i++)
    on(labels[i], "click", onClickLabel);
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
if (globalThis.addEventListener)
  globalThis.addEventListener("load", async () => await ui("setup"));
globalThis.beercss = ui;
globalThis.ui = ui;

export default globalThis.ui;