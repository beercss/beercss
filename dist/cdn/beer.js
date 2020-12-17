// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"cdn/beer.js":[function(require,module,exports) {
var guid = function guid() {
  return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
};

var query = function query(selector, element) {
  try {
    return selector instanceof HTMLElement ? selector : (element || document).querySelector(selector);
  } catch (_unused) {
    return null;
  }
};

var queryAll = function queryAll(selector, element) {
  try {
    return Array.isArray(selector) ? selector : (element || document).querySelectorAll(selector);
  } catch (_unused2) {
    return null;
  }
};

var hasClass = function hasClass(element, name) {
  if (!element) return false;
  return element.classList.contains(name);
};

var addClass = function addClass(element, name) {
  if (!element) return;
  element.classList.add(name);
};

var removeClass = function removeClass(element, name) {
  if (!element) return;
  element.classList.remove(name);
};

var on = function on(element, name, callback) {
  element.addEventListener(name, callback, true);
};

var off = function off(element, name, callback) {
  element.removeEventListener(name, callback, true);
};

var insertBefore = function insertBefore(newElement, element) {
  return element.parentNode.insertBefore(newElement, element);
};

var insert = function insert(newElement, element) {
  return (element || document.body).append(newElement);
};

var remove = function remove(element) {
  element.remove();
};

var clone = function clone(element) {
  return element.cloneNode(true);
};

var prev = function prev(element) {
  return element.previousElementSibling;
};

var parent = function parent(element) {
  return element.parentElement;
};

var create = function create(json) {
  var element = document.createElement("div");

  for (var i in json) {
    element[i] = json[i];
  }

  return element;
};

var onClickElement = function onClickElement(e) {
  if (/input/i.test(e.tagName)) return;
  return open(e.currentTarget);
};

var onClickLabel = function onClickLabel(e) {
  var input = query('input[type=text], input[type=password], select', parent(e.currentTarget));
  input.focus();
};

var onFocusInput = function onFocusInput(e) {
  var label = query("label", parent(e.currentTarget));
  addClass(label, "active");
  if (e.currentTarget.getAttribute("data-ui")) open(e.currentTarget);
};

var onBlurInput = function onBlurInput(e) {
  var label = query("label", parent(e.currentTarget));
  if (!e.currentTarget.value) removeClass(label, "active");
  if (e.currentTarget.getAttribute("data-ui")) open(e.currentTarget);
};

var onClickDocument = function onClickDocument(e) {
  var dropdowns = queryAll(".dropdown.active");
  dropdowns.forEach(function (x) {
    removeClass(x, "active");
  });
  off(e.currentTarget, "click", onClickDocument);
};

var onClickToast = function onClickToast(e) {
  remove(e.currentTarget);
};

var open = function open(from, to, config) {
  if (!to) to = query(from.getAttribute("data-ui"));
  if (hasClass(to, "modal")) return modal(from, to, config);
  if (hasClass(to, "dropdown")) return dropdown(from, to, config);
  if (hasClass(to, "toast")) return toast(from, to, config);
  return tab(from, to, config);
};

var tab = function tab(from, to, config) {
  var container = parent(from);
  var tabs = queryAll("a", container);
  tabs.forEach(function (x) {
    removeClass(x, "active");
  });
  addClass(from, "active");
  addClass(to, "active");
};

var dropdown = function dropdown(from, to, config) {
  if (hasClass(to, "active")) {
    removeClass(to, "active");
    return;
  }

  var dropdowns = queryAll(".dropdown.active");
  dropdowns.forEach(function (x) {
    removeClass(x, "active");
  });
  addClass(to, "active");
  on(document, "click", onClickDocument);
};

var modal = function modal(from, to, config) {
  var overlay = prev(to);

  if (!hasClass(overlay, "overlay")) {
    overlay = create({
      className: "overlay active"
    });
    insertBefore(overlay, to);
  }

  overlay.onclick = function () {
    removeClass(from, "active");
    removeClass(to, "active");
    removeClass(overlay, "active");
  };

  var container = parent(to);

  if (hasClass(container, "menu")) {
    var elements = queryAll(".menu > .modal, .menu > a, .menu > .overlay");
    elements.forEach(function (x) {
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

var toast = function toast(from, to, config) {
  var container = query("#toast");
  var toast = clone(to);
  addClass(toast, "active");

  if (!container) {
    container = create({
      id: "toast"
    });
    insert(container);
  }

  var element = create({
    className: "right-align"
  });
  insert(toast, element);
  on(element, "click", onClickToast);
  insert(element, container);
  if (config && config.timeout == -1) return;
  setTimeout(function () {
    remove(element);
  }, config && config.timeout ? config.timeout : 6000);
};

var ui = function ui(selector, config) {
  if (selector) {
    if (selector == "guid") return guid();
    var to = query(selector);
    var from = query("[data-ui='#" + to.id + "']");
    open(from, to, config);
    return;
  }

  var elements = queryAll("[data-ui]");
  elements.forEach(function (x) {
    on(x, "click", onClickElement);
  });
  var labels = queryAll(".field > label");
  labels.forEach(function (x) {
    on(x, "click", onClickLabel);
  });
  var inputs = queryAll(".field > input[type=text], .field > input[type=password]");
  inputs.forEach(function (x) {
    var label = query("label", parent(x));
    on(x, "focus", onFocusInput);
    on(x, "blur", onBlurInput);
    if (x.value) addClass(label, "active");else removeClass(label, "active");
  });
};

window.ui = ui;
},{}]},{},["cdn/beer.js"], null)