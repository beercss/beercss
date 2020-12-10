const guid = () => {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const query = function (selector, element) {
  try {
    return selector instanceof HTMLElement
      ? selector
      : (element || document).querySelector(selector);
  } catch {
    return null;
  }
};

const queryAll = function (selector, element) {
  try {
    return Array.isArray(selector)
      ? selector
      : (element || document).querySelectorAll(selector);
  } catch {
    return null;
  }
};

const hasClass = function (element, name) {
  if (!element) return false;
  return element.classList.contains(name);
};

const addClass = function (element, name) {
  if (!element) return;
  element.classList.add(name);
};

const removeClass = function (element, name) {
  if (!element) return;
  element.classList.remove(name);
};

const on = function (element, name, callback) {
  element.addEventListener(name, callback, true);
};

const off = function (element, name, callback) {
  element.removeEventListener(name, callback, true);
};

const insertBefore = function (newElement, element) {
  return element.parentNode.insertBefore(newElement, element);
};

const insert = function (newElement, element) {
  return (element || document.body).append(newElement);
};

const remove = function (element) {
  element.remove();
}

const clone = function (element) {
  return element.cloneNode(true);
};

const prev = function (element) {
  return element.previousElementSibling;
};

const parent = function (element) {
  return element.parentElement;
};

const create = function (json) {
  var element = document.createElement("div");

  for (var i in json)
    element[i] = json[i];

  return element;
};

const onClickElement = (e) => {
  if (/input/i.test(e.tagName)) return;
  return open(e.currentTarget);
};

const onClickLabel = (e) => {
  var input = query('input[type=text], input[type=password], select', parent(e.currentTarget));
  input.focus();
};

const onFocusInput = (e) => {
  var label = query("label", parent(e.currentTarget));
  addClass(label, "active");

  if (e.currentTarget.getAttribute("data-ui"))
    open(e.currentTarget);
};

const onBlurInput = (e) => {
  var label = query("label", parent(e.currentTarget));

  if (!e.currentTarget.value) removeClass(label, "active");

  if (e.currentTarget.getAttribute("data-ui"))
    open(e.currentTarget);
};

const onClickDocument = (e) => {
  var dropdowns = queryAll(".dropdown.active");
  dropdowns.forEach((x) => {
    removeClass(x, "active");
  });

  off(e.currentTarget, "click", onClickDocument);
};

const onClickToast = (e) => {
  remove(e.currentTarget);
};

const open = function (from, to, config) {
  if (!to)
    to = query(from.getAttribute("data-ui"));

  if (hasClass(to, "modal")) return modal(from, to, config);
  if (hasClass(to, "dropdown")) return dropdown(from, to, config);
  if (hasClass(to, "toast")) return toast(from, to, config);
  return tab(from, to, config);
};

const tab = function (from, to, config) {
  var container = parent(from);

  var tabs = queryAll("a", container);
  tabs.forEach((x) => {
    removeClass(x, "active");
  });

  addClass(from, "active");
  addClass(to, "active");
};

const dropdown = function (from, to, config) {
  if (hasClass(to, "active")) {
    removeClass(to, "active");
    return;
  }

  var dropdowns = queryAll(".dropdown.active");
  dropdowns.forEach((x) => {
    removeClass(x, "active");
  });

  addClass(to, "active");
  on(document, "click", onClickDocument);
};

const modal = function (from, to, config) {
  var overlay = prev(to);
  if (!hasClass(overlay, "overlay")) {
    overlay = create({ className: "overlay active" });
    insertBefore(overlay, to);
  }

  overlay.onclick = () => {
    removeClass(from, "active");
    removeClass(to, "active");
    removeClass(overlay, "active");
  }

  var container = parent(to);
  if (hasClass(container, "menu")) {
    var elements = queryAll(".menu > .modal, .menu > a, .menu > .overlay");
    elements.forEach((x) => {
      removeClass(x, "active");
    });

    addClass(from, "active");
  }

  if (hasClass(to, "active")) {
    removeClass(from, "active");
    removeClass(to, "active");
    removeClass(overlay, "active");
    return;
  }

  addClass(overlay, "active");
  addClass(to, "active");
};

const toast = function (from, to, config) {
  var container = query("#toast");
  var toast = clone(to);
  addClass(toast, "active");

  if (!container) {
    container = create({ id: "toast" });
    insert(container);
  }

  var element = create({ className: "right-align" });
  insert(toast, element);
  on(element, "click", onClickToast);
  insert(element, container);

  if (config && config.timeout == -1)
    return;

  setTimeout(() => {
    remove(element);
  }, config && config.timeout ? config.timeout : 6000);
};

const ui = (selector, config) => {
  if (selector) {
    if (selector == "guid") return guid();

    var to = query(selector);
    var from = query("[data-ui='#" + to.id + "']");
    open(from, to, config);
    return;
  }

  var elements = queryAll("[data-ui]");
  elements.forEach((x) => {
    on(x, "click", onClickElement);
  });

  var labels = queryAll(".field > label");
  labels.forEach((x) => {
    on(x, "click", onClickLabel);
  });

  var inputs = queryAll(".field > input[type=text], .field > input[type=password]");
  inputs.forEach((x) => {
    var label = query("label", parent(x));

    on(x, "focus", onFocusInput);
    on(x, "blur", onBlurInput);

    if (x.value) addClass(label, "active");
    else removeClass(label, "active");
  });
};

window.ui = ui;