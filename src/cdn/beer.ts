const _STRING_STR = "string";
const _DATA_UI_ATTR = "data-ui";
const _X_CHAR_STR = "x";
const _EMPTY_STR = "";
const _SPACE_STR = " ";
const _CLICK_EVENT_STR = "click";
const _ACTIVE_MENU_SELECTOR_STR = "menu.active";
const _ACTIVE_CSS_CLASS = "active";
const _COMMA_SPACE_SEPARATOR = ", ";
const _DIV_TAG_NAME = "div";
const _INPUT_TAG_NAME_SELECTOR = "input";
const _SPAN_TAG_NAME_SELECTOR = "span";
const _ENTER_KEY = "Enter";
const _INPUT_TYPE_FILE_ATTR = "file";
const _INPUT_TYPE_TEXT_ATTR = "text";
const _KEY_DOWN_EVENT_STR = "keydown";
const _INPUT_TYPE_NUMBER_ATTR = "number";
const _SELECTOR_FOR_FIELD_WITH_FLOATING_LABELS =
  "input:not([type=file], [type=checkbox], [type=radio]), select, textarea";
const _SIZE_CSS_VARIABLE = "--size";
const _START_CSS_VARIABLE = "---start";
const _END_CSS_VARIABLE = "---end";
const _VALUE1_CSS_VARIABLE = "---value1";
const _VALUE2_CSS_VARIABLE = "---value2";
const _PERCENT_SYMBOL = "%";
const _SINGLE_QUOTE = "'";
const _DIALOG_TAG_NAME = "dialog";
const _STYLE_ATTRIBUTE = "style";
const _MENU_TAG_NAME = "menu";
const _SNACKBAR_CLASS_NAME = "snackbar";
const _PAGE_TAG_NAME = "page";
const _TABS_CSS_CLASS = "tabs";
const _ANCHOR_TAG_NAME = "a";
const _MODAL_CSS_CLASS = "modal";
const _NAV_TAG_NAME = "nav";
const _OVERLAY_CSS_CLASS = "overlay";
const _DOT_STR = ".";
const _BUTTON_TAG_NAME = "button";
const _CHIP_CSS_CLASS = "chip";
const _BODY_TAG_NAME = "body";
const _LIGHT_CSS_CLASS_NAME = "light";
const _DARK_CSS_CLASS_NAME = "dark";
const _COLON_STR = ":";
const _SEMI_COLON_STR = ";";
const _PRIMARY_CSS_VARIABLE = "--primary";
const _ON_PRIMARY_CSS_VARIABLE = "--on-primary";
const _PRIMARY_CONTAINER_CSS_VARIABLE = "--primary-container";
const _ON_PRIMARY_CONTAINER_CSS_VARIABLE = "--on-primary-container";
const _SECONDARY_CSS_VARIABLE = "--secondary";
const _ON_SECONDARY_CSS_VARIABLE = "--on-secondary";
const _SECONDARY_CONTAINER_CSS_VARIABLE = "--secondary-container";
const _ON_SECONDARY_CONTAINER_CSS_VARIABLE = "--on-secondary-container";
const _TERTIARY_CSS_VARIABLE = "--tertiary";
const _ON_TERTIARY_CSS_VARIABLE = "--on-tertiary";
const _TERTIARY_CONTAINER_CSS_VARIABLE = "--tertiary-container";
const _ON_TERTIARY_CONTAINER_CSS_VARIABLE = "--on-tertiary-container";
const _ERROR_CSS_VARIABLE = "--error";
const _ON_ERROR_CSS_VARIABLE = "--on-error";
const _ERROR_CONTAINER_CSS_VARIABLE = "--error-container";
const _ON_ERROR_CONTAINER_CSS_VARIABLE = "--on-error-container";
const _BACKGROUND_CSS_VARIABLE = "--background";
const _ON_BACKGROUND_CSS_VARIABLE = "--on-background";
const _SURFACE_CSS_VARIABLE = "--surface";
const _ON_SURFACE_CSS_VARIABLE = "--on-surface";
const _SURFACE_VARIANT_CSS_VARIABLE = "--surface-variant";
const _ON_SURFACE_VARIANT_CSS_VARIABLE = "--on-surface-variant";
const _OUTLINE_CSS_VARIABLE = "--outline";
const _OUTLINE_VARIANT_CSS_VARIABLE = "--outline-variant";
const _SHADOW_CSS_VARIABLE = "--shadow";
const _SCRIM_CSS_VARIABLE = "--scrim";
const _INVERSE_SURFACE_CSS_VARIABLE = "--inverse-surface";
const _INVERSE_ON_SURFACE_CSS_VARIABLE = "--inverse-on-surface";
const _INVERSE_PRIMARY_CSS_VARIABLE = "--inverse-primary";
const _CSS_VARIABLES = [_PRIMARY_CSS_VARIABLE, _ON_PRIMARY_CSS_VARIABLE, _PRIMARY_CONTAINER_CSS_VARIABLE,
  _ON_PRIMARY_CONTAINER_CSS_VARIABLE, _SECONDARY_CSS_VARIABLE, _ON_SECONDARY_CSS_VARIABLE,
  _SECONDARY_CONTAINER_CSS_VARIABLE, _ON_SECONDARY_CONTAINER_CSS_VARIABLE, _TERTIARY_CSS_VARIABLE,
  _ON_TERTIARY_CSS_VARIABLE, _TERTIARY_CONTAINER_CSS_VARIABLE, _ON_TERTIARY_CONTAINER_CSS_VARIABLE,
  _ERROR_CSS_VARIABLE, _ON_ERROR_CSS_VARIABLE, _ERROR_CONTAINER_CSS_VARIABLE, _ON_ERROR_CONTAINER_CSS_VARIABLE,
  _BACKGROUND_CSS_VARIABLE, _ON_BACKGROUND_CSS_VARIABLE, _SURFACE_CSS_VARIABLE, _ON_SURFACE_CSS_VARIABLE,
  _SURFACE_VARIANT_CSS_VARIABLE, _ON_SURFACE_VARIANT_CSS_VARIABLE, _OUTLINE_CSS_VARIABLE,
  _OUTLINE_VARIANT_CSS_VARIABLE, _SHADOW_CSS_VARIABLE, _SCRIM_CSS_VARIABLE, _INVERSE_SURFACE_CSS_VARIABLE,
  _INVERSE_ON_SURFACE_CSS_VARIABLE, _INVERSE_PRIMARY_CSS_VARIABLE];
const _ATTRIBUTES_TO_BE_OBSERVED_FOR_MUTATIONS = ["value", "max", "min"];
const _BEER_CSS_SETUP_SELECTOR = "setup";
const _BEER_CSS_GUID_SELECTOR = "guid";
const _BEER_CSS_MODE_SELECTOR = "mode";
const _BEER_CSS_THEME_SELECTOR = "theme";
const _DATA_UI_ATTR_PRESENT_SELECTOR = "[" + _DATA_UI_ATTR + "]";
const _FIELD_CSS_CLASS_NAME = "field";
const _LABEL_TAG_NAME = "label";
const _IMMEDIATE_CHILDREN_SELECTOR = " > ";
const _SELECT_TAG_NAME = "select";
const _TEXTAREA_TAG_NAME = "textarea";
const _LOAD_EVENT = "load";
const _CHANGE_EVENT = "change";
const _FOCUS_EVENT = "focus";
const _BLUR_EVENT = "blur";
const _SELECTOR_FOR_RANGE_COMPONENTS = ".slider > input[type=range]";
const _SELECTOR_FOR_FILE_INPUTS = "input[type=file]";
const _SELECTOR_FOR_INPUTS_NOT_FILE_AND_NOT_RANGE = "input:not([type=file]):not([type=range])";

let _timeoutSnackbar: ReturnType<typeof setTimeout>;
let _timeoutMutation: ReturnType<typeof setTimeout>;
let _timeoutMenu: ReturnType<typeof setTimeout>;
let _mutation: MutationObserver | null;
const _lastTheme: IBeerCssTheme = {
  light: _EMPTY_STR,
  dark: _EMPTY_STR,
};
const _emptyNodeList = [] as unknown as NodeListOf<Element>;

async function wait (milliseconds: number): Promise<Function> {
  return await new Promise((resolve: Function) => setTimeout(resolve, milliseconds));
}

function guid (): string {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c: string) => {
    const r = (Math.random() * 16) | 0;
    const v = c === _X_CHAR_STR ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function query (selector: string | Element | null, element?: Element | null): Element | null {
  try {
    return (typeof selector === _STRING_STR)
      ? (element ?? document).querySelector(selector as string)
      : selector as Element | null;
  } catch {
    return null;
  }
}

function queryAll (selector: string | NodeListOf<Element> | null, element?: Element | null): NodeListOf<Element> {
  try {
    return (typeof selector === _STRING_STR)
      ? (element ?? document).querySelectorAll(selector as string)
      : selector as NodeListOf<Element> | null ?? _emptyNodeList;
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
  const element = document.createElement(_DIV_TAG_NAME);
  for (const key in htmlAttributesAsJson) element.setAttribute(key, htmlAttributesAsJson[key]);
  return element;
}

function updateInput (target: Element): void {
  const input = target as HTMLInputElement;
  if (hasType(input, _INPUT_TYPE_NUMBER_ATTR) && !input.value) input.value = _EMPTY_STR;
  if (!input.placeholder) input.placeholder = _SPACE_STR;
  if (target.getAttribute(_DATA_UI_ATTR)) void open(target, null);
}

function onClickElement (e: Event): void {
  void open(e.currentTarget as HTMLElement, null, null, e);
}

function onClickLabel (e: Event): void {
  const target = e.currentTarget as Element;
  const parentTarget = parent(target);
  const input = query(_SELECTOR_FOR_FIELD_WITH_FLOATING_LABELS, parentTarget) as HTMLElement;
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
  off(document.body, _CLICK_EVENT_STR, onClickDocument);
  const target = e.target as Element;
  const menus = queryAll(_ACTIVE_MENU_SELECTOR_STR);
  menus.forEach((x: Element) => menu(target, x, e));
}

function onClickSnackbar (e: Event): void {
  const target = e.currentTarget as Element;
  removeClass(target, _ACTIVE_CSS_CLASS);

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
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
    if (e.key !== _ENTER_KEY) return;

    const target = e.currentTarget as Element;
    const nextTarget = next(target) as HTMLInputElement;
    if (!hasType(nextTarget, _INPUT_TYPE_FILE_ATTR)) return;
    return nextTarget.click();
  }

  const currentTarget = target as HTMLInputElement;
  const previousTarget = prev(target) as HTMLInputElement;
  if (!hasType(previousTarget, _INPUT_TYPE_TEXT_ATTR)) return;
  previousTarget.value = currentTarget.files ? Array.from(currentTarget.files).map((x) => x.name).join(_COMMA_SPACE_SEPARATOR) : _EMPTY_STR;
  previousTarget.readOnly = true;
  previousTarget.addEventListener(_KEY_DOWN_EVENT_STR, onKeydownFile);
  updateInput(previousTarget);
}

function updateRange (target: Element): void {
  const parentTarget = parent(target) as HTMLElement;
  const bar = query(_SPAN_TAG_NAME_SELECTOR, parentTarget) as HTMLElement;
  const inputs = queryAll(_INPUT_TAG_NAME_SELECTOR, parentTarget) as NodeListOf<HTMLInputElement>;
  if (!inputs.length || !bar) return;

  const rootSize = parseInt(getComputedStyle(document.documentElement).getPropertyValue(_SIZE_CSS_VARIABLE)) || 16;
  const thumb = 1.25 * rootSize * 100 / inputs[0].offsetWidth;
  const percents: Array<number> = [];
  const values: Array<number> = [];
  for (let i = 0; i < inputs.length; i++) {
    const oldMin = parseFloat(inputs[i].min);
    const oldMax = parseFloat(inputs[i].max);
    const oldValue = parseFloat(inputs[i].value);
    const min = oldMin || 0;
    const max = oldMax || 100;
    const value = oldValue || 0;
    const percent = (value - min) * 100 / (max - min);
    const fix = thumb / 2 - thumb * percent / 100;
    percents.push(percent + fix);
    values.push(value);

    if (oldMin !== min) inputs[i].min = `${min}`;
    if (oldMax !== max) inputs[i].max = `${max}`;
    if (oldValue !== value) inputs[i].value = `${value}`;
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

  parentTarget.style.setProperty(_START_CSS_VARIABLE, start + _PERCENT_SYMBOL);
  parentTarget.style.setProperty(_END_CSS_VARIABLE, end + _PERCENT_SYMBOL);
  parentTarget.style.setProperty(_VALUE1_CSS_VARIABLE, _SINGLE_QUOTE + value1 + _SINGLE_QUOTE);
  parentTarget.style.setProperty(_VALUE2_CSS_VARIABLE, _SINGLE_QUOTE + value2 + _SINGLE_QUOTE);
}

async function open (from: Element, to: Element | null, options?: any, e?: Event): Promise<void> {
  if (!to) {
    to = query(from.getAttribute(_DATA_UI_ATTR));
    if (!to) return;
  }

  if (hasTag(to, _DIALOG_TAG_NAME)) return await dialog(from, to);
  if (hasTag(to, _MENU_TAG_NAME)) return menu(from, to, e);
  if (hasClass(to, _SNACKBAR_CLASS_NAME)) return snackbar(from, to, options);
  if (hasClass(to, _PAGE_TAG_NAME)) return page(from, to);

  tab(from);

  if (hasClass(to, _ACTIVE_CSS_CLASS)) return removeClass(to, _ACTIVE_CSS_CLASS);

  addClass(to, _ACTIVE_CSS_CLASS);
}

function tab (from: Element): void {
  const container = parent(from);
  if (!hasClass(container, _TABS_CSS_CLASS)) return;
  const tabs = queryAll(_ANCHOR_TAG_NAME, container);
  tabs.forEach((x: Element) => removeClass(x, _ACTIVE_CSS_CLASS));
  addClass(from, _ACTIVE_CSS_CLASS);
}

function page (from: Element, to: Element): void {
  tab(from);
  const container = parent(to);
  if (container) for (let i = 0; i < container.children.length; i++) if (hasClass(container.children[i], _PAGE_TAG_NAME)) removeClass(container.children[i], _ACTIVE_CSS_CLASS);
  addClass(to, _ACTIVE_CSS_CLASS);
}

function menu (from: Element, to: Element, e?: Event): any {
  if (_timeoutMenu) clearTimeout(_timeoutMenu);

  _timeoutMenu = setTimeout(() => {
    on(document.body, _CLICK_EVENT_STR, onClickDocument);
    tab(from);

    if (hasClass(to, _ACTIVE_CSS_CLASS)) {
      if (!e) return removeClass(to, _ACTIVE_CSS_CLASS);

      const trustedFrom = e.target as Element;
      const trustedTo = query(trustedFrom.getAttribute(_DATA_UI_ATTR) ?? _EMPTY_STR);
      const trustedMenu = trustedFrom.closest(_MENU_TAG_NAME);
      const trustedActive = !query(_MENU_TAG_NAME, trustedFrom.closest(_DATA_UI_ATTR_PRESENT_SELECTOR) ?? undefined);

      if (trustedTo && trustedTo !== trustedMenu) return menu(trustedFrom, trustedTo);
      if (!trustedTo && !trustedActive && trustedMenu) return false;
      return removeClass(to, _ACTIVE_CSS_CLASS);
    }

    const menus = queryAll(_ACTIVE_MENU_SELECTOR_STR);
    menus.forEach((x: Element) => removeClass(x, _ACTIVE_CSS_CLASS));
    addClass(to, _ACTIVE_CSS_CLASS);
  }, 90);
}

async function dialog (from: Element, to: Element): Promise<void> {
  (document.activeElement as HTMLElement)?.blur();
  tab(from);

  let overlay = prev(to) as HTMLElement;
  const target = to as HTMLDialogElement;
  const isActive = hasClass(to, _ACTIVE_CSS_CLASS) || target.open;
  const isModal = hasClass(to, _MODAL_CSS_CLASS);
  const container = parent(to);
  const isNav = hasTag(container, _NAV_TAG_NAME);

  if (!hasClass(overlay, _OVERLAY_CSS_CLASS)) {
    overlay = create({ class: _OVERLAY_CSS_CLASS });
    insertBefore(overlay, to);
    await wait(90);
  }

  overlay.onclick = () => {
    if (isModal) return;

    removeClass(from, _ACTIVE_CSS_CLASS);
    removeClass(to, _ACTIVE_CSS_CLASS);
    removeClass(overlay, _ACTIVE_CSS_CLASS);
    target.close();
  };

  if (isNav) {
    const elements = queryAll(_DIALOG_TAG_NAME + _COMMA_SPACE_SEPARATOR + _ANCHOR_TAG_NAME + _COMMA_SPACE_SEPARATOR +
      _DOT_STR + _OVERLAY_CSS_CLASS, container);
    elements.forEach((x: any) => {
      removeClass(x, _ACTIVE_CSS_CLASS);
      if (x.open) x.close();
    });
  }

  if (isActive) {
    removeClass(from, _ACTIVE_CSS_CLASS);
    removeClass(overlay, _ACTIVE_CSS_CLASS);
    removeClass(to, _ACTIVE_CSS_CLASS);
    target.close();
  } else {
    if (!hasTag(from, _BUTTON_TAG_NAME) && !hasClass(from, _BUTTON_TAG_NAME) && !hasClass(from, _CHIP_CSS_CLASS)) {
      addClass(from, _ACTIVE_CSS_CLASS);
    }
    addClass(overlay, _ACTIVE_CSS_CLASS);
    addClass(to, _ACTIVE_CSS_CLASS);

    if (isModal) target.showModal();
    else target.show();
  }
}

function snackbar (from: Element, to: Element, milliseconds?: number): void {
  (document.activeElement as HTMLElement)?.blur();
  tab(from);

  const elements = queryAll(_DOT_STR + _SNACKBAR_CLASS_NAME + _DOT_STR + _ACTIVE_CSS_CLASS);
  elements.forEach((x: Element) => removeClass(x, _ACTIVE_CSS_CLASS));
  addClass(to, _ACTIVE_CSS_CLASS);
  on(to, _CLICK_EVENT_STR, onClickSnackbar);

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);

  if (milliseconds === -1) return;

  _timeoutSnackbar = setTimeout(() => {
    removeClass(to, _ACTIVE_CSS_CLASS);
  }, milliseconds ?? 6000);
}

function lastTheme (): IBeerCssTheme {
  if (_lastTheme.light && _lastTheme.dark) return _lastTheme;

  const light = document.createElement(_BODY_TAG_NAME);
  light.className = _LIGHT_CSS_CLASS_NAME;
  document.body.appendChild(light);

  const dark = document.createElement(_BODY_TAG_NAME);
  dark.className = _DARK_CSS_CLASS_NAME;
  document.body.appendChild(dark);

  const fromLight = getComputedStyle(light);
  const fromDark = getComputedStyle(dark);
  for (let i = 0; i < _CSS_VARIABLES.length; i++) {
    _lastTheme.light += _CSS_VARIABLES[i] + _COLON_STR + fromLight.getPropertyValue(_CSS_VARIABLES[i]) +
      _SEMI_COLON_STR;
    _lastTheme.dark += _CSS_VARIABLES[i] + _COLON_STR + fromDark.getPropertyValue(_CSS_VARIABLES[i]) +
      _SEMI_COLON_STR;
  }

  document.body.removeChild(light);
  document.body.removeChild(dark);
  return _lastTheme;
}

function theme (source?: IBeerCssTheme | any): IBeerCssTheme | Promise<IBeerCssTheme> {
  if (!source || !(globalThis as any).materialDynamicColors) return lastTheme();

  const mode = /dark/i.test(document.body.className) ? _DARK_CSS_CLASS_NAME : _LIGHT_CSS_CLASS_NAME;
  if (source.light && source.dark) {
    _lastTheme.light = source.light;
    _lastTheme.dark = source.dark;
    document.body.setAttribute(_STYLE_ATTRIBUTE, source[mode]);
    return source;
  }

  return (globalThis as any).materialDynamicColors(source).then((theme: IBeerCssTheme) => {
    const toCss = (data: any) => {
      let style = _EMPTY_STR;
      for (const i in data) {
        const kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
        const value: string = data[i];
        style += "--" + kebabCase + _COLON_STR + value + _SEMI_COLON_STR;
      }
      return style;
    };

    _lastTheme.light = toCss(theme.light);
    _lastTheme.dark = toCss(theme.dark);
    document.body.setAttribute(_STYLE_ATTRIBUTE, _lastTheme[mode]);
    return _lastTheme;
  });
}

function mode (value: string | any): string {
  if (!value) return /dark/i.test(document.body.className) ? _DARK_CSS_CLASS_NAME : _LIGHT_CSS_CLASS_NAME;
  document.body.classList.remove(_LIGHT_CSS_CLASS_NAME, _DARK_CSS_CLASS_NAME);
  document.body.classList.add(value);
  const lastThemeStyle = value === _LIGHT_CSS_CLASS_NAME ? _lastTheme.light : _lastTheme.dark;
  if ((globalThis as any).materialDynamicColors) document.body.setAttribute(_STYLE_ATTRIBUTE, lastThemeStyle);
  return value;
}

function setup (): void {
  if (_mutation) return;
  _mutation = new MutationObserver(onMutation);
  _mutation.observe(document.body, { attributes: true, attributeFilter: _ATTRIBUTES_TO_BE_OBSERVED_FOR_MUTATIONS,
    childList: true, subtree: true });
  onMutation();
}

function ui (selector?: string | Element, options?: string | number | IBeerCssTheme): string | IBeerCssTheme | Promise<IBeerCssTheme> | undefined {
  if (selector) {
    if (selector === _BEER_CSS_SETUP_SELECTOR) return setup() as undefined;
    if (selector === _BEER_CSS_GUID_SELECTOR) return guid();
    if (selector === _BEER_CSS_MODE_SELECTOR) return mode(options);
    if (selector === _BEER_CSS_THEME_SELECTOR) return theme(options);

    const to = query(selector);
    if (!to) return;
    void open(to, to, options);
  }

  const elements = queryAll(_DATA_UI_ATTR_PRESENT_SELECTOR);
  elements.forEach((x: Element) => on(x, _CLICK_EVENT_STR, onClickElement));
  const labels = queryAll(_DOT_STR + _FIELD_CSS_CLASS_NAME + _IMMEDIATE_CHILDREN_SELECTOR + _LABEL_TAG_NAME);
  labels.forEach((x: Element) => on(x, _CLICK_EVENT_STR, onClickLabel));
  const inputs = queryAll(_DOT_STR + _FIELD_CSS_CLASS_NAME + _IMMEDIATE_CHILDREN_SELECTOR +
    _SELECTOR_FOR_INPUTS_NOT_FILE_AND_NOT_RANGE + _COMMA_SPACE_SEPARATOR + _DOT_STR + _FIELD_CSS_CLASS_NAME +
    _IMMEDIATE_CHILDREN_SELECTOR + _SELECT_TAG_NAME + _COMMA_SPACE_SEPARATOR + _DOT_STR + _FIELD_CSS_CLASS_NAME +
    _IMMEDIATE_CHILDREN_SELECTOR + _TEXTAREA_TAG_NAME);
  inputs.forEach((x: Element) => {
    on(x, _FOCUS_EVENT, onFocusInput);
    on(x, _BLUR_EVENT, onBlurInput);
    updateInput(x);
  });

  const files = queryAll(_DOT_STR + _FIELD_CSS_CLASS_NAME + _IMMEDIATE_CHILDREN_SELECTOR + _SELECTOR_FOR_FILE_INPUTS);
  files.forEach((x: Element) => {
    on(x, _CHANGE_EVENT, onChangeFile);
    updateFile(x);
  });

  const ranges = queryAll(_SELECTOR_FOR_RANGE_COMPONENTS);
  ranges.forEach((x: Element) => {
    on(x, _INPUT_TAG_NAME_SELECTOR, onInputRange);
    updateRange(x);
  });
}

if ((globalThis as any).addEventListener) (globalThis as any).addEventListener(_LOAD_EVENT, async () => await ui(
  _BEER_CSS_SETUP_SELECTOR));
(globalThis as any).beercss = ui;
(globalThis as any).ui = ui;
export default ui;
