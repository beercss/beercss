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
})({"shared/init.js":[function(require,module,exports) {
window.beercss = {};
window.addEventListener("load", function () {
  var url = "/sw.js";
  navigator.serviceWorker.register(url);
});
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  window.beercss.installEvent = e;
});
},{}],"shared/router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default(url, component) {
  page(url, function () {
    document.body.innerHTML = "<div id='app'></div>";
    new Vue({
      el: '#app',
      render: function render(h) {
        return h(component);
      }
    });
  });
  page.start();
};

exports.default = _default;
},{}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"home/page.vue":[function(require,module,exports) {
var process = require("process");
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
$(window).on("load", function () {
  setTimeout(function () {
    $("#logo").addClass("active");
  }, 360);
});
var _default = {
  data: function data() {
    return {
      indexOfMenu: 1,
      samples: [],
      htmlSample: null,
      jsSample: null,
      autoSample: null,
      sponsors: 4,
      sponsorsLimit: 24
    };
  },
  watch: {},
  beforeMount: function beforeMount() {
    $("body").addClass("is-dark");
  },
  mounted: function mounted() {
    this.htmlSample = hljs.highlight("html", '<div class="modal active">...</div>\n<div class="dropdown active">...</div>\n<div class="overlay active">...</div>\n<div class="page active">...</div>\n<div class="toast active">...</div>').value;
    this.jsSample = hljs.highlight("html", 'ui("#modal");\nui("#dropdown");\nui("#overlay");\nui("#page");\nui("#toast");').value;
    this.autoSample = hljs.highlight("html", '<a data-ui="#modal">...</a>\n<a data-ui="#dropdown">...</a>\n<a data-ui="#overlay">...</a>\n<a data-ui="#page">...</a>\n<a data-ui="#toast">...</a>\n\nui();').value;
    ui();
    this.chartSamples();
    this.listSamples();
    this.tableSamples();
    this.inputSamples();
    this.selectSamples();
  },
  methods: {
    updateTheme: function updateTheme() {
      var body = $("body");
      if (body.is(".is-dark")) body.removeClass("is-dark");else body.addClass("is-dark");
    },
    addHomeScreen: function addHomeScreen() {
      if (window.beercss && window.beercss.installEvent) window.beercss.installEvent.prompt();
    },
    updateMenu: function updateMenu(menu, css) {
      console.log(event.target);
      var body = $("body");
      var menu = $(menu);
      var dataUis = menu.find("a");
      var modals = menu.find(".modal");
      $(modals).removeClass("active");
      $(dataUis).removeClass("active");

      if (!css) {
        var sizes = ["small", "medium", "large"];
        this.indexOfMenu = this.indexOfMenu + 1;
        if (!sizes[this.indexOfMenu]) this.indexOfMenu = 0;
        css = sizes[this.indexOfMenu];
      }

      if (/left|right|top|bottom/.test(css)) {
        body.removeClass("is-menu-left is-menu-right is-menu-top is-menu-bottom");
        body.addClass("is-menu-" + css);
        console.log(menu);
        $(menu).removeClass("left right top bottom");
        $(menu).addClass(css);
        $(menu).find("> .modal").removeClass("left right top bottom");
        $(menu).find("> .modal").addClass(css);
      }

      if (/small|medium|large/.test(css)) {
        body.removeClass("is-menu-small is-menu-medium is-menu-large");
        body.addClass("is-menu-" + css);

        for (var i = 0; i < menu.length; i++) {
          $(menu[i]).removeClass("small medium large");
          if (css != "medium") $(menu[i]).addClass(css);
        }
      }
    },
    updateIcons: function updateIcons() {
      var i = $("i");
      if (i.is(".outlined")) i.removeClass("outlined");else i.addClass("outlined");
    },
    formatHtml: function formatHtml(element) {
      function process(str) {
        var div = document.createElement("div");
        div.innerHTML = str.trim();
        return format(div, 0).innerHTML;
      }

      function format(node, level) {
        var indentBefore = new Array(level++ + 1).join("  "),
            indentAfter = new Array(level - 1).join("  "),
            textNode;

        for (var i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode("\n" + indentBefore);
          node.insertBefore(textNode, node.children[i]);
          format(node.children[i], level);

          if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode("\n" + indentAfter);
            node.appendChild(textNode);
          }
        }

        return node;
      }

      var tag = $(element).clone();
      tag.find(".overlay").remove();
      return process(tag[0].outerHTML.replace(/\s+(onclick|style)\="[^\"]*"/gi, "").replace(/\s+id\="(\w+)"/gi, ' id="$1-id"').replace(/\s+data-ui\="#(\w+)"/gi, ' data-ui="#$1-id"').replace(/\s+[a-z-]+\=(""|"#")/gi, "").replace(/\n\<\/(circle|th)\>/gi, "</$1>")).replace(/^\s+/g, "");
    },
    showSamples: function showSamples(selector, modal) {
      var elements = $(selector);
      this.samples = [];

      for (var i = 0; i < elements.length; i++) {
        var html = this.formatHtml($(elements[i]), true);
        var htmlFormatted = hljs.highlight("html", html).value;
        if ($(elements[i]).is(".menu") || $(elements[i]).is(".modal") || $(elements[i]).is(".toast")) html = "";
        this.samples.push({
          html: html,
          sourceCode: htmlFormatted
        });
      }

      Vue.nextTick(function () {
        ui();
        ui(modal || "#modal-samples");
        $(modal || "#modal-samples").scrollTop(0);
      });
    },
    showToasts: function showToasts(selector) {
      if (selector) {
        ui(selector);
        return;
      }

      ui("#toast1");
      ui("#toast2");
      ui("#toast3");
      ui("#toast4");
    },
    listSamples: function listSamples() {
      $("#list input").on("click", function () {
        var ids = ["middle-align", "top-align", "bottom-align", "divider"];
        var rows = $("#list .row");
        rows.removeClass("middle-align");
        rows.removeClass("top-align");
        rows.removeClass("bottom-align");
        rows.removeClass("divider");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-lists";

          if ($(selector).is(":checked")) {
            rows.addClass(ids[i]);
          }
        }
      });
    },
    tableSamples: function tableSamples() {
      $("#table input").on("click", function () {
        var ids = ["small", "large", "center-align", "right-align"];
        var table = $("#table table");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-tables";
          if ($(selector).is(":checked")) table.addClass(ids[i]);else table.removeClass(ids[i]);
        }
      });
    },
    inputSamples: function inputSamples() {
      $("#border-inputs,#round-inputs,#fill-inputs,#small-inputs,#medium-inputs,#large-inputs,#text-inputs,#password-inputs,#file-inputs").on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "text", "password", "file"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-inputs";

          if (["text", "password", "file"].indexOf(ids[i]) !== -1) {
            if ($(selector).is(":checked")) {
              var inputs = $("#inputs input[type='text'], #inputs input[type='password']");
              var files = $("#inputs input[type='file']");
              var labels = $("#inputs .field.label > label");
              var icons = $("#inputs .field.label > i");
              files.remove();

              if (ids[i] == "file") {
                inputs.attr("type", "text");
                labels.html("Choose a file");
                icons.html("attach_file");

                for (var j = 0; j < inputs.length; j++) {
                  $("<input type='file' />").insertAfter(inputs[j]);
                }
              }

              if (ids[i] == "text") {
                labels.html("Text");
                inputs.attr("type", ids[i]);
                icons.html("search");
              }

              if (ids[i] == "password") {
                labels.html("Password");
                inputs.attr("type", ids[i]);
                icons.html("visibility");
              }
            }
          } else {
            if ($(selector).is(":checked")) $("#inputs .field.label").addClass(ids[i]);else $("#inputs .field.label").removeClass(ids[i]);
          }
        }
      });
    },
    selectSamples: function selectSamples() {
      $("#border-selects,#round-selects,#fill-selects,#small-selects,#medium-selects,#large-selects").on("click", function () {
        var ids = ["border", "fill", "round", "small", "large"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-selects";
          if ($(selector).is(":checked")) $("#selects .field.label").addClass(ids[i]);else $("#selects .field.label").removeClass(ids[i]);
        }
      });
    },
    updateColors: function updateColors(text) {
      $("#modal-colors .col > div").each(function () {
        var html = $(this).html();
        html = text ? html.replace(/(-light|-dark|$)/, "-text$1") : html.replace(/-text/, "");
        $(this).html(html);
      });
    },
    chartSamples: function chartSamples() {
      for (var i = 0; i < 2; i++) {
        var lightBlue = ["#03a9f4", "#29b6f6", "#4fc3f7", "#81d4fa", "#b3e5fc", "#e1f5fe"];
        var amber = ["#ffc107", "#ffca28", "#ffd54f", "#ffe082", "#ffecb3", "#fff8e1"];
        var pink = ["#e91e63", "#ec407a", "#f06292", "#f48fb1", "#f8bbd0", "#fce4ec"];
        var lightGreen = ["#8bc34a", "#9ccc65", "#aed581", "#c5e1a5", "#dcedc8", "#f1f8e9"];
        var purple = ["#9c27b0", "#ab47bc", "#ba68c8", "#ce93d8", "#e1bee7", "#f3e5f5"];
        var teal = ["#009688", "#26a69a", "#4db6ac", "#80cbc4", "#b2dfdb", "#e0f2f1"];
        var colors = [lightBlue, amber, pink, lightGreen, purple];
        var type = i == 0 ? "bar" : "doughnut";
        var ctx = document.getElementById("grafico" + i);
        Chart.defaults.global.defaultFontColor = "#9e9e9e";
        var myChart = new Chart(ctx, {
          type: i == 0 ? "bar" : "doughnut",
          data: {
            labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
            datasets: [{
              label: "Label",
              data: [12, 19, 3, 5, 2],
              backgroundColor: colors[Math.floor(Math.random() * 5)],
              borderWidth: 0
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
    }
  }
};
exports.default = _default;
        var $a33138 = exports.default || module.exports;
      
      if (typeof $a33138 === 'function') {
        $a33138 = $a33138.options;
      }
    
        /* template */
        Object.assign($a33138, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c(
      "div",
      {
        staticClass: "menu left medium-device large-device",
        attrs: { id: "menu" }
      },
      [
        _c("div", { staticClass: "small-space" }),
        _c("img", {
          staticClass: "front small circle no-margin no-padding",
          attrs: { src: "/favicon.png" },
          on: {
            click: function($event) {
              return _vm.addHomeScreen()
            }
          }
        }),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu", "top")
              }
            }
          },
          [_c("i", [_vm._v("arrow_upward")]), _c("div", [_vm._v("Top")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu", "bottom")
              }
            }
          },
          [_c("i", [_vm._v("arrow_downward")]), _c("div", [_vm._v("Bottom")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu", "left")
              }
            }
          },
          [_c("i", [_vm._v("arrow_back")]), _c("div", [_vm._v("Left")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu", "right")
              }
            }
          },
          [_c("i", [_vm._v("arrow_forward")]), _c("div", [_vm._v("Right")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu")
              }
            }
          },
          [_c("i", [_vm._v("zoom_out_map")]), _c("div", [_vm._v("Size")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateIcons()
              }
            }
          },
          [_c("i", [_vm._v("image")]), _c("div", [_vm._v("Icons")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateTheme()
              }
            }
          },
          [_c("i", [_vm._v("brightness_medium")]), _c("div", [_vm._v("Theme")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.showSamples("#menu")
              }
            }
          },
          [_c("i", [_vm._v("code")]), _c("div", [_vm._v("Code")])]
        ),
        _vm._m(0),
        _vm._m(1)
      ]
    ),
    _c(
      "div",
      { staticClass: "menu bottom small-device", attrs: { id: "menu-bottom" } },
      [
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateMenu("#menu-bottom")
              }
            }
          },
          [_c("i", [_vm._v("zoom_out_map")]), _c("div", [_vm._v("Size")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateIcons()
              }
            }
          },
          [_c("i", [_vm._v("image")]), _c("div", [_vm._v("Icons")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateTheme()
              }
            }
          },
          [_c("i", [_vm._v("brightness_medium")]), _c("div", [_vm._v("Theme")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.showSamples("#menu-bottom")
              }
            }
          },
          [_c("i", [_vm._v("code")]), _c("div", [_vm._v("Code")])]
        ),
        _vm._m(2),
        _vm._m(3)
      ]
    ),
    _c("div", { attrs: { id: "begin" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12" }, [
          _vm._m(4),
          _c(
            "div",
            {
              staticClass: "center-align middle-align padding",
              attrs: { id: "container-logo" }
            },
            [_c("img", { attrs: { id: "logo", src: "/favicon.png" } })]
          ),
          _vm._m(5),
          _c("div", { staticClass: "space" }),
          _c("div", { staticClass: "center-align" }, [
            _vm._v("An open source project created by Everton and Leonardo")
          ])
        ])
      ]),
      _c("div", { staticClass: "large-divider" }),
      _vm._m(6),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12", attrs: { id: "badges" } }, [
          _c("h5", [
            _c("span", [_vm._v("Badges")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#badges nav > a")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("div", { staticClass: "small-space" }),
          _vm._m(7),
          _c("div", { staticClass: "small-space" })
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "buttons" } }, [
          _c("h5", [
            _c("span", [_vm._v("Buttons")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#buttons .btn, #button button")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(8)
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "chips" } }, [
          _c("h5", [
            _c("span", [_vm._v("Chips")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#chips nav .chip")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(9)
        ]),
        _vm._m(10),
        _c("div", { staticClass: "col s12", attrs: { id: "dropdowns" } }, [
          _c("h5", [
            _c("span", [_vm._v("Dropdowns")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#dropdowns button")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("nav", { staticClass: "wrap" }, [
            _c("button", { attrs: { "data-ui": "#dropdown1" } }, [
              _c("span", [_vm._v("Drooooopdoooooooooown")]),
              _c("i", [_vm._v("arrow_drop_down")]),
              _c(
                "div",
                {
                  staticClass: "dropdown",
                  attrs: { id: "dropdown1", "data-ui": "#dropdown1" }
                },
                [
                  _c("a", [_vm._v("Title")]),
                  _vm._m(11),
                  _vm._m(12),
                  _vm._m(13),
                  _c("a", { staticClass: "row nowrap middle-align" }, [
                    _c("div", { staticClass: "col min" }, [
                      _c("img", {
                        staticClass: "circle tiny",
                        attrs: { src: "/beer-and-woman.jpg" }
                      })
                    ]),
                    _c("div", { staticClass: "col" }, [_vm._v("Title")])
                  ]),
                  _c("a", { staticClass: "row nowrap middle-align" }, [
                    _c("div", { staticClass: "col min" }, [
                      _c("img", {
                        staticClass: "circle tiny",
                        attrs: { src: "/beer-and-woman.jpg" }
                      })
                    ]),
                    _vm._m(14)
                  ])
                ]
              )
            ]),
            _c("button", { attrs: { "data-ui": "#dropdown2" } }, [
              _c("span", [_vm._v("Dropdown")]),
              _c("i", [_vm._v("arrow_drop_down")]),
              _c(
                "div",
                {
                  staticClass: "dropdown nowrap",
                  attrs: { id: "dropdown2", "data-ui": "#dropdown2" }
                },
                [
                  _c("a", [_vm._v("Title")]),
                  _vm._m(15),
                  _vm._m(16),
                  _vm._m(17),
                  _c("a", { staticClass: "row nowrap middle-align" }, [
                    _c("div", { staticClass: "col min" }, [
                      _c("img", {
                        staticClass: "circle tiny",
                        attrs: { src: "/beer-and-woman.jpg" }
                      })
                    ]),
                    _c("div", { staticClass: "col" }, [_vm._v("Title")])
                  ]),
                  _c("a", { staticClass: "row nowrap middle-align" }, [
                    _c("div", { staticClass: "col min" }, [
                      _c("img", {
                        staticClass: "circle tiny",
                        attrs: { src: "/beer-and-woman.jpg" }
                      })
                    ]),
                    _vm._m(18)
                  ])
                ]
              )
            ]),
            _c(
              "button",
              {
                staticClass: "circle small",
                attrs: { "data-ui": "#dropdown3" }
              },
              [
                _c("i", [_vm._v("arrow_back")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown left nowrap",
                    attrs: { id: "dropdown3", "data-ui": "#dropdown3" }
                  },
                  [
                    _c("a", [_vm._v("Title")]),
                    _vm._m(19),
                    _vm._m(20),
                    _vm._m(21),
                    _c("a", { staticClass: "row nowrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" }
                        })
                      ]),
                      _c("div", { staticClass: "col" }, [_vm._v("Title")])
                    ]),
                    _c("a", { staticClass: "row nowrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" }
                        })
                      ]),
                      _vm._m(22)
                    ])
                  ]
                )
              ]
            ),
            _c(
              "button",
              {
                staticClass: "circle small",
                attrs: { "data-ui": "#dropdown4" }
              },
              [
                _c("i", [_vm._v("arrow_forward")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown right nowrap",
                    attrs: { id: "dropdown4", "data-ui": "#dropdown4" }
                  },
                  [
                    _c("a", [_vm._v("Title")]),
                    _vm._m(23),
                    _vm._m(24),
                    _vm._m(25),
                    _c("a", { staticClass: "row nowrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" }
                        })
                      ]),
                      _c("div", { staticClass: "col" }, [_vm._v("Title")])
                    ]),
                    _c("a", { staticClass: "row nowrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" }
                        })
                      ]),
                      _vm._m(26)
                    ])
                  ]
                )
              ]
            ),
            _vm._m(27)
          ])
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "icons" } }, [
          _c("h5", [
            _c("span", [_vm._v("Icons")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#icons nav", "#modal-icons")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(28),
          _c("div", { staticClass: "space" })
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "images" } }, [
          _c("h5", [
            _c("span", [_vm._v("Images")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#images img")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("nav", { staticClass: "wrap" }, [
            _c("a", [
              _c("img", {
                staticClass: "circle tiny",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "circle small",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "circle",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "circle large",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "circle extra",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "round tiny",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "round small",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "round",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "round large",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ]),
            _c("a", [
              _c("img", {
                staticClass: "round extra",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "loaders" } }, [
          _c("h5", [
            _c("span", [_vm._v("Loaders")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#loaders svg")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("nav", { staticClass: "wrap" }, [
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader small",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ]),
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader medium",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ]),
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader large",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ]),
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader small pink",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ]),
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader medium orange",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ]),
            _c("a", [
              _c(
                "svg",
                {
                  staticClass: "loader large yellow",
                  attrs: { viewBox: "0 0 66 66" }
                },
                [
                  _c("circle", {
                    attrs: { fill: "none", cx: "33", cy: "33", r: "30" }
                  })
                ]
              )
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "modals" } }, [
          _c("h5", [
            _c("span", [_vm._v("Modals")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#modal, #modal-calendar")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(29)
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "navs" } }, [
          _c("h5", [
            _c("span", [_vm._v("Navs")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#navs nav")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("nav", [
            _c("a", { staticClass: "btn" }, [_vm._v("Button")]),
            _c("a", { staticClass: "chip" }, [_vm._v("Filter")]),
            _c("i", [_vm._v("home")]),
            _c("a", [
              _c("img", {
                staticClass: "circle",
                attrs: { src: "/beer-and-woman.jpg" }
              })
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "pages" } }, [
          _c("h5", [
            _c("span", [_vm._v("Pages")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#pages .page")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(30),
          _vm._m(31)
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "tabs" } }, [
          _c("h5", [
            _c("span", [_vm._v("Tabs")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#tabs > div")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(32),
          _vm._m(33),
          _vm._m(34),
          _vm._m(35),
          _vm._m(36)
        ]),
        _c("div", { staticClass: "col s12 l6", attrs: { id: "toasts" } }, [
          _c("h5", [
            _c("span", [_vm._v("Toasts")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#toasts .toast")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("nav", { staticClass: "wrap" }, [
            _c(
              "a",
              {
                staticClass: "pink btn",
                on: {
                  click: function($event) {
                    return _vm.showToasts("#toast1")
                  }
                }
              },
              [_vm._v("Toast")]
            ),
            _c(
              "a",
              {
                staticClass: "orange btn",
                on: {
                  click: function($event) {
                    return _vm.showToasts("#toast2")
                  }
                }
              },
              [_vm._v("Toast")]
            ),
            _c(
              "a",
              {
                staticClass: "green btn",
                on: {
                  click: function($event) {
                    return _vm.showToasts("#toast3")
                  }
                }
              },
              [_vm._v("Toast")]
            ),
            _c(
              "a",
              {
                staticClass: "blue btn",
                on: {
                  click: function($event) {
                    return _vm.showToasts("#toast4")
                  }
                }
              },
              [_vm._v("Toast")]
            )
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("h5", [
            _c("span", [_vm._v("Tooltips")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#tooltips a")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(37)
        ])
      ]),
      _c("div", { staticClass: "row", attrs: { id: "typography" } }, [
        _c("div", { staticClass: "col s12" }, [
          _c("h5", [
            _c("span", [_vm._v("Typography")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#typography .col.s6 div")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ])
        ]),
        _vm._m(38),
        _vm._m(39)
      ]),
      _c("div", { staticClass: "row", attrs: { id: "cards" } }, [
        _c("div", { staticClass: "col s12" }, [
          _c("h5", [
            _c("span", [_vm._v("Cards")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#cards .card")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle large",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(40)
            ]),
            _vm._m(41)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card round" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle large",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(42)
            ]),
            _vm._m(43)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card border" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle large",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(44)
            ]),
            _vm._m(45)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card border round" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle large",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(46)
            ]),
            _vm._m(47)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding" }, [
            _c("img", {
              staticClass: "responsive small",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(48)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding round" }, [
            _c("img", {
              staticClass: "responsive small",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(49)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding border" }, [
            _c("img", {
              staticClass: "responsive small",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(50)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding border round" }, [
            _c("img", {
              staticClass: "responsive small",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(51)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding" }, [
            _c("img", {
              staticClass: "responsive medium",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(52)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding round" }, [
            _c("img", {
              staticClass: "responsive medium round",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(53)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding border" }, [
            _c("img", {
              staticClass: "responsive medium",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(54)
          ])
        ]),
        _c("div", { staticClass: "col s12 m6 l3" }, [
          _c("div", { staticClass: "card no-padding border round" }, [
            _c("img", {
              staticClass: "responsive medium round",
              attrs: { src: "/beer-and-woman.jpg" }
            }),
            _vm._m(55)
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "card no-padding" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col" }, [
                _c("img", {
                  staticClass: "responsive",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(56)
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "card no-padding" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col" }, [
                _c("img", {
                  staticClass: "responsive",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _vm._m(57)
              ]),
              _vm._m(58)
            ])
          ])
        ])
      ]),
      _vm._m(59),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12" }, [
          _c("h5", [
            _c("span", [_vm._v("Lists")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#list .row")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _c("div", { staticClass: "card", attrs: { id: "list" } }, [
            _vm._m(60),
            _c("div", { staticClass: "space" }),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Today")
            ]),
            _vm._m(61),
            _vm._m(62),
            _vm._m(63),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Yesterday")
            ]),
            _vm._m(64),
            _vm._m(65),
            _vm._m(66),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Older")
            ]),
            _c("div", { staticClass: "row nowrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(67),
              _vm._m(68)
            ]),
            _c("div", { staticClass: "row nowrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(69),
              _vm._m(70)
            ]),
            _c("div", { staticClass: "row nowrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" }
                })
              ]),
              _vm._m(71),
              _vm._m(72)
            ])
          ]),
          _c("h5", [
            _c("span", [_vm._v("Tables")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#table table")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(73),
          _c("h5", [
            _c("span", [_vm._v("Inputs")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#inputs .field")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(74),
          _c("h5", [
            _c("span", [_vm._v("Selects")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#selects .field")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(75),
          _c("h5", [
            _c("span", [_vm._v("Checkboxes")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#checkboxes .field")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(76),
          _c("h5", [
            _c("span", [_vm._v("Switches")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#switches .field")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(77),
          _c("h5", [
            _c("span", [_vm._v("Radios")]),
            _c("a", { staticClass: "chip circle" }, [
              _c(
                "i",
                {
                  on: {
                    click: function($event) {
                      return _vm.showSamples("#radios .field")
                    }
                  }
                },
                [_vm._v("code")]
              )
            ])
          ]),
          _vm._m(78),
          _c(
            "div",
            { staticClass: "modal right large", attrs: { id: "modal-colors" } },
            [
              _vm._m(79),
              _c("nav", [
                _c("label", [
                  _c("input", {
                    attrs: { type: "radio", name: "radio", checked: "checked" },
                    on: {
                      click: function($event) {
                        return _vm.updateColors(false)
                      }
                    }
                  }),
                  _c("span", [_vm._v("background")])
                ]),
                _c("label", [
                  _c("input", {
                    attrs: { type: "radio", name: "radio" },
                    on: {
                      click: function($event) {
                        return _vm.updateColors(true)
                      }
                    }
                  }),
                  _c("span", [_vm._v("text")])
                ])
              ]),
              _c("span", { staticClass: "space" }),
              _vm._m(80)
            ]
          ),
          _vm._m(81),
          _c(
            "div",
            {
              staticClass: "modal right large",
              attrs: { id: "modal-samples" }
            },
            [
              _vm._m(82),
              _c("div", { staticClass: "space" }),
              _vm._l(_vm.samples, function(exemplo) {
                return _c("div", { staticClass: "card border" }, [
                  _c("div", { domProps: { innerHTML: _vm._s(exemplo.html) } }),
                  _c("div", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: exemplo.html,
                        expression: "exemplo.html"
                      }
                    ],
                    staticClass: "space"
                  }),
                  _c("pre", {
                    domProps: { innerHTML: _vm._s(exemplo.sourceCode) }
                  })
                ])
              })
            ],
            2
          ),
          _vm._m(83)
        ]),
        _c("div", { staticClass: "col s12", attrs: { id: "responsive" } }, [
          _c("h5", [
            _c("span", [_vm._v("Responsive")]),
            _c(
              "a",
              {
                staticClass: "chip circle",
                on: {
                  click: function($event) {
                    return _vm.showSamples("#responsive nav")
                  }
                }
              },
              [_c("i", [_vm._v("code")])]
            )
          ]),
          _vm._m(84)
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "large-divider" }),
          _c("div", [
            _c("h4", { staticClass: "center-align" }, [_vm._v("Summary")]),
            _vm._m(85),
            _vm._m(86),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col s12" }, [
                _c("h6", [_vm._v("How to trigger elements?")]),
                _c("div", [_vm._v('Add or remove class "active"')]),
                _c("pre", { domProps: { innerHTML: _vm._s(_vm.htmlSample) } }),
                _c("div", { staticClass: "space" }),
                _c("div", [
                  _vm._v(
                    "Or call javascript function to activate/deactivate an element"
                  )
                ]),
                _c("pre", { domProps: { innerHTML: _vm._s(_vm.jsSample) } }),
                _c("div", { staticClass: "space" }),
                _c("div", [
                  _vm._v(
                    'Or add attribute "data-ui" and call javascript function, to setup all automatically'
                  )
                ]),
                _c("pre", { domProps: { innerHTML: _vm._s(_vm.autoSample) } })
              ])
            ])
          ]),
          _c("div", { staticClass: "large-divider" }),
          _c("div", [
            _vm._m(87),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/myrp.png" }
                }),
                _c("div", [_vm._v("myrp")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/inventti.jpg" }
                }),
                _c("div", [_vm._v("inventti")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 3")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 4")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 5")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 6")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 7")])
              ]),
              _c("div", { staticClass: "col s3 center-align" }, [
                _c("img", {
                  staticClass: "white extra border circle",
                  attrs: { src: "/beer-and-woman.jpg" }
                }),
                _c("div", [_vm._v("Sponsor 8")])
              ])
            ]),
            _c("div", { staticClass: "large-space" }),
            _vm._m(88),
            _c("div", { staticClass: "space" }),
            _vm._m(89)
          ])
        ]),
        _c(
          "div",
          { staticClass: "modal right large", attrs: { id: "modal-icons" } },
          [
            _vm._m(90),
            _c("div", { staticClass: "space" }),
            _vm._l(_vm.samples, function(exemplo) {
              return _c("div", { staticClass: "card border" }, [
                _c("div", { domProps: { innerHTML: _vm._s(exemplo.html) } }),
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: exemplo.html,
                      expression: "exemplo.html"
                    }
                  ],
                  staticClass: "space"
                }),
                _c("pre", {
                  domProps: { innerHTML: _vm._s(exemplo.sourceCode) }
                })
              ])
            }),
            _c("div", { staticClass: "space" }),
            _vm._m(91)
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#more" } }, [
      _c("i", [_vm._v("more_vert")]),
      _c("div", [_vm._v("More")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal small left",
        attrs: { id: "more", "data-ui": "#more" }
      },
      [
        _c("b", [_vm._v("More")]),
        _c("p", [_vm._v("Item 1")]),
        _c("p", [_vm._v("Item 2")]),
        _c("p", [_vm._v("Item 3")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#more-bottom" } }, [
      _c("i", [_vm._v("more_vert")]),
      _c("div", [_vm._v("More")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal small bottom",
        attrs: { id: "more-bottom", "data-ui": "#more-bottom" }
      },
      [
        _c("b", [_vm._v("More")]),
        _c("p", [_vm._v("Item 1")]),
        _c("p", [_vm._v("Item 2")]),
        _c("p", [_vm._v("Item 3")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center-align" }, [
      _c("div", { staticClass: "h4" }, [_c("span", [_vm._v("Beer css!")])]),
      _c("div", { staticClass: "h6" }, [
        _vm._v("Build material design interfaces in record time")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "center-align" }, [
      _c(
        "a",
        {
          staticClass: "btn large border",
          attrs: {
            href: "https://www.npmjs.com/package/beercss",
            target: "_blank"
          }
        },
        [_vm._v("NPM")]
      ),
      _c(
        "a",
        {
          staticClass: "btn large border",
          attrs: {
            href: "https://github.com/leonardorafael/beercss",
            target: "_blank"
          }
        },
        [_vm._v("Github")]
      ),
      _c(
        "a",
        {
          staticClass: "btn large",
          attrs: { href: "https://www.patreon.com/beercss", target: "_blank" }
        },
        [_vm._v("Support us")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "toasts" } }, [
      _c(
        "div",
        { staticClass: "toast pink white-text", attrs: { id: "toast1" } },
        [_c("i", [_vm._v("error")]), _c("span", [_vm._v("Complementary text")])]
      ),
      _c(
        "div",
        { staticClass: "toast orange white-text", attrs: { id: "toast2" } },
        [
          _c("i", [_vm._v("warning")]),
          _c("span", [_vm._v("Complementary text")])
        ]
      ),
      _c(
        "div",
        { staticClass: "toast green white-text", attrs: { id: "toast3" } },
        [_c("i", [_vm._v("done")]), _c("span", [_vm._v("Complementary text")])]
      ),
      _c(
        "div",
        { staticClass: "toast blue white-text", attrs: { id: "toast4" } },
        [_c("i", [_vm._v("info")]), _c("span", [_vm._v("Complementary text")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", [
        _c("span", { staticClass: "badge" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round" }, [_vm._v("New")]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle" }, [_vm._v("10")]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border" }, [_vm._v("New")]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round" }, [_vm._v("New")]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border" }, [_vm._v("10")]),
        _c("i", [_vm._v("account_circle")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge top" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round top" }, [_vm._v("New")]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle top" }, [_vm._v("10")]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border top" }, [_vm._v("New")]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round top" }, [_vm._v("New")]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border top" }, [_vm._v("10")]),
        _c("i", [_vm._v("account_circle")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge left top" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round left top" }, [_vm._v("New")]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle left top" }, [_vm._v("10")]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border left top" }, [_vm._v("New")]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round left top" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border left top" }, [
          _vm._v("10")
        ]),
        _c("i", [_vm._v("account_circle")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge bottom right" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round bottom right" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle bottom right" }, [
          _vm._v("10")
        ]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border bottom right" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round bottom right" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border bottom right" }, [
          _vm._v("10")
        ]),
        _c("i", [_vm._v("account_circle")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge bottom" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round bottom" }, [_vm._v("New")]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle bottom" }, [_vm._v("10")]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border bottom" }, [_vm._v("New")]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round bottom" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border bottom" }, [
          _vm._v("10")
        ]),
        _c("i", [_vm._v("account_circle")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge left bottom" }, [_vm._v("New")]),
        _c("i", [_vm._v("search")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge round left bottom" }, [_vm._v("New")]),
        _c("i", [_vm._v("notifications")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle left bottom" }, [_vm._v("10")]),
        _c("i", [_vm._v("apps")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border left bottom" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("help_outline")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge border round left bottom" }, [
          _vm._v("New")
        ]),
        _c("i", [_vm._v("home")])
      ]),
      _c("a", [
        _c("span", { staticClass: "badge circle border left bottom" }, [
          _vm._v("10")
        ]),
        _c("i", [_vm._v("account_circle")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", { staticClass: "btn" }, [_vm._v("Button")]),
      _c("a", { staticClass: "btn" }, [
        _c("i", [_vm._v("search")]),
        _c("span", [_vm._v("Button")])
      ]),
      _c("a", { staticClass: "btn" }, [
        _c("span", [_vm._v("Button")]),
        _c("i", [_vm._v("refresh")])
      ]),
      _c("a", { staticClass: "btn round" }, [_vm._v("Button")]),
      _c("a", { staticClass: "btn round" }, [
        _c("i", [_vm._v("place")]),
        _c("span", [_vm._v("Button")])
      ]),
      _c("a", { staticClass: "btn round" }, [
        _c("span", [_vm._v("Button")]),
        _c("i", [_vm._v("delete")])
      ]),
      _c("a", { staticClass: "btn circle" }, [_c("i", [_vm._v("add")])]),
      _c("a", { staticClass: "btn circle" }, [_c("i", [_vm._v("edit")])]),
      _c("a", { staticClass: "btn circle" }, [_c("i", [_vm._v("home")])]),
      _c("a", { staticClass: "btn border" }, [_vm._v("Button")]),
      _c("a", { staticClass: "btn border" }, [
        _c("i", [_vm._v("search")]),
        _c("span", [_vm._v("Button")])
      ]),
      _c("a", { staticClass: "btn border" }, [
        _c("span", [_vm._v("Button")]),
        _c("i", [_vm._v("refresh")])
      ]),
      _c("a", { staticClass: "btn border round" }, [_vm._v("Button")]),
      _c("a", { staticClass: "btn border round" }, [
        _c("i", [_vm._v("place")]),
        _c("span", [_vm._v("Button")])
      ]),
      _c("a", { staticClass: "btn border round" }, [
        _c("span", [_vm._v("Button")]),
        _c("i", [_vm._v("delete")])
      ]),
      _c("a", { staticClass: "btn border circle" }, [_c("i", [_vm._v("add")])]),
      _c("a", { staticClass: "btn border circle" }, [
        _c("i", [_vm._v("edit")])
      ]),
      _c("a", { staticClass: "btn border circle" }, [_c("i", [_vm._v("home")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", { staticClass: "chip" }, [_vm._v("Filter")]),
      _c("a", { staticClass: "chip" }, [
        _c("i", { staticClass: "small" }, [_vm._v("done")]),
        _c("span", [_vm._v("Filter")])
      ]),
      _c("a", { staticClass: "chip circle" }, [_c("i", [_vm._v("search")])]),
      _c("a", { staticClass: "chip active" }, [_vm._v("Filter")]),
      _c("a", { staticClass: "chip active" }, [
        _c("i", { staticClass: "small" }, [_vm._v("done")]),
        _c("span", [_vm._v("Filter")])
      ]),
      _c("a", { staticClass: "chip circle active" }, [
        _c("i", [_vm._v("home")])
      ]),
      _c("a", { staticClass: "chip border" }, [_vm._v("Filter")]),
      _c("a", { staticClass: "chip border" }, [
        _c("i", { staticClass: "small" }, [_vm._v("done")]),
        _c("span", [_vm._v("Filter")])
      ]),
      _c("a", { staticClass: "chip circle border" }, [
        _c("i", [_vm._v("refresh")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12", attrs: { id: "colors" } }, [
      _c("h5", [
        _c("span", [_vm._v("Colors")]),
        _c(
          "a",
          { staticClass: "chip circle", attrs: { "data-ui": "#modal-colors" } },
          [_c("i", [_vm._v("code")])]
        )
      ]),
      _c("nav", [
        _c("a", { staticClass: "btn", attrs: { "data-ui": "#modal-colors" } }, [
          _vm._v("Colors")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { attrs: { "data-ui": "#dropdown5" } }, [
      _c("span", [_vm._v("Calendar")]),
      _c(
        "div",
        {
          staticClass: "dropdown small-padding nowrap",
          attrs: { id: "dropdown5", "data-ui": "#dropdown5" }
        },
        [
          _c("div", { staticClass: "row nowrap" }, [
            _c("div", { staticClass: "col min" }, [
              _c("a", [_c("i", [_vm._v("arrow_back")])])
            ]),
            _c("div", { staticClass: "col" }, [
              _c("h6", { staticClass: "center-align" }, [
                _vm._v("Month / Year")
              ])
            ]),
            _c("div", { staticClass: "col min" }, [
              _c("a", [_c("i", [_vm._v("arrow_forward")])])
            ])
          ]),
          _c("table", { staticClass: "center-align" }, [
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v("S")]),
                _c("td", [_vm._v("M")]),
                _c("td", [_vm._v("T")]),
                _c("td", [_vm._v("W")]),
                _c("td", [_vm._v("T")]),
                _c("td", [_vm._v("F")]),
                _c("td", [_vm._v("S")])
              ]),
              _c("tr", [
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("1")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("2")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("3")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("4")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("5")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("6")])]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("7")])])
              ]),
              _c("tr", [
                _c("td", [
                  _c(
                    "a",
                    { staticClass: "btn small border circle no-margin" },
                    [_vm._v("8")]
                  )
                ]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("9")])]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("10")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("11")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("12")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("13")])
                ]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("14")])])
              ]),
              _c("tr", [
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("15")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("16")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn small circle no-margin" }, [
                    _vm._v("17")
                  ])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("18")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("19")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("20")])
                ]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("21")])])
              ]),
              _c("tr", [
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("22")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("23")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("24")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("25")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("26")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("27")])
                ]),
                _c("td", [_c("a", { staticClass: "btn flat" }, [_vm._v("28")])])
              ]),
              _c("tr", [
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("29")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("30")])
                ]),
                _c("td", [
                  _c("a", { staticClass: "btn flat" }, [_vm._v("31")])
                ]),
                _c("td", [_vm._v("1")]),
                _c("td", [_vm._v("2")]),
                _c("td", [_vm._v("3")]),
                _c("td", [_vm._v("4")])
              ])
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("i", [_vm._v("home")]),
      _c("i", [_vm._v("account_circle")]),
      _c("i", [_vm._v("search")]),
      _c("i", [_vm._v("build")]),
      _c("i", [_vm._v("done")]),
      _c("i", [_vm._v("cached")]),
      _c("i", [_vm._v("star_rate")]),
      _c("i", [_vm._v("work")]),
      _c("i", [_vm._v("update")]),
      _c("i", [_vm._v("thumb_up")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("a", { staticClass: "btn", attrs: { "data-ui": "#modal" } }, [
        _vm._v("Modal")
      ]),
      _c("a", { staticClass: "btn", attrs: { "data-ui": "#modal-calendar" } }, [
        _vm._v("Calendar")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c(
        "a",
        {
          staticClass: "btn",
          attrs: {
            onclick:
              "$('#begin, #pages .page').attr('class', 'page left active');"
          }
        },
        [_vm._v("From left")]
      ),
      _c(
        "a",
        {
          staticClass: "btn",
          attrs: {
            onclick:
              "$('#begin, #pages .page').attr('class', 'page top active');"
          }
        },
        [_vm._v("From top")]
      ),
      _c(
        "a",
        {
          staticClass: "btn",
          attrs: {
            onclick:
              "$('#begin, #pages .page').attr('class', 'page bottom active');"
          }
        },
        [_vm._v("From bottom")]
      ),
      _c(
        "a",
        {
          staticClass: "btn",
          attrs: {
            onclick:
              "$('#begin, #pages .page').attr('class', 'page right active');"
          }
        },
        [_vm._v("From right")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { display: "none" } }, [
      _c("div", { staticClass: "page" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab1" } }, [
          _vm._v("Tab 1")
        ]),
        _c("a", { attrs: { "data-ui": "#tab2" } }, [_vm._v("Tab 2")]),
        _c("a", { attrs: { "data-ui": "#tab3" } }, [_vm._v("Tab 3")])
      ]),
      _c(
        "div",
        { staticClass: "page right padding active", attrs: { id: "tab1" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab2" } }, [
        _c("h5", [_vm._v("Tab 2")])
      ]),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab3" } }, [
        _c("h5", [_vm._v("Tab 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab4" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 1")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab5" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 2")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab6" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 3")])
        ])
      ]),
      _c(
        "div",
        { staticClass: "page right padding active", attrs: { id: "tab4" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab5" } }, [
        _c("h5", [_vm._v("Tab 2")])
      ]),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab6" } }, [
        _c("h5", [_vm._v("Tab 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab7" } }, [
          _c("span", [_vm._v("Tab 1")]),
          _c("i", [_vm._v("home")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab8" } }, [
          _c("span", [_vm._v("Tab 2")]),
          _c("i", [_vm._v("home")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab9" } }, [
          _c("span", [_vm._v("Tab 3")]),
          _c("i", [_vm._v("home")])
        ])
      ]),
      _c(
        "div",
        { staticClass: "page right padding active", attrs: { id: "tab7" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab8" } }, [
        _c("h5", [_vm._v("Tab 2")])
      ]),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab9" } }, [
        _c("h5", [_vm._v("Tab 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab10" } }, [
          _c("i", { staticClass: "wrap" }, [_vm._v("home")]),
          _c("span", [_vm._v("Tab 1")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab11" } }, [
          _c("i", { staticClass: "wrap" }, [_vm._v("home")]),
          _c("span", [_vm._v("Tab 2")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab12" } }, [
          _c("i", { staticClass: "wrap" }, [_vm._v("home")]),
          _c("span", [_vm._v("Tab 3")])
        ])
      ]),
      _c(
        "div",
        { staticClass: "page right padding active", attrs: { id: "tab10" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab11" } }, [
        _c("h5", [_vm._v("Tab 2")])
      ]),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab12" } }, [
        _c("h5", [_vm._v("Tab 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab13" } }, [
          _c("span", [_vm._v("Tab 1")]),
          _c("i", { staticClass: "wrap" }, [_vm._v("home")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab14" } }, [
          _c("span", [_vm._v("Tab 2")]),
          _c("i", { staticClass: "wrap" }, [_vm._v("home")])
        ]),
        _c("a", { attrs: { "data-ui": "#tab15" } }, [
          _c("span", [_vm._v("Tab 3")]),
          _c("i", { staticClass: "wrap" }, [_vm._v("home")])
        ])
      ]),
      _c(
        "div",
        { staticClass: "page right padding active", attrs: { id: "tab13" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab14" } }, [
        _c("h5", [_vm._v("Tab 2")])
      ]),
      _c("div", { staticClass: "page right padding", attrs: { id: "tab15" } }, [
        _c("h5", [_vm._v("Tab 3")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap", attrs: { id: "tooltips" } }, [
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_back")]),
        _c("div", { staticClass: "tooltip left" }, [
          _vm._v("Complementary text")
        ])
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_upward")]),
        _c("div", { staticClass: "tooltip" }, [_vm._v("Complementary text")])
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_downward")]),
        _c("div", { staticClass: "tooltip bottom" }, [
          _vm._v("Complementary text")
        ])
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_forward")]),
        _c("div", { staticClass: "tooltip right" }, [
          _vm._v("Complementary text")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6" }, [
      _c("div", [
        _c("p", { staticClass: "italic" }, [_vm._v("italic")]),
        _c("p", { staticClass: "bold" }, [_vm._v("bold")]),
        _c("p", { staticClass: "underline" }, [_vm._v("underline")]),
        _c("p", { staticClass: "overline" }, [_vm._v("overline")]),
        _c("p", { staticClass: "upper" }, [_vm._v("upper")]),
        _c("p", { staticClass: "lower" }, [_vm._v("lower")]),
        _c("p", { staticClass: "capitalize" }, [_vm._v("capitalize")]),
        _c("p", { staticClass: "link" }, [_vm._v("link")]),
        _c("p", { staticClass: "small-text" }, [_vm._v("small-text")]),
        _c("p", { staticClass: "medium-text" }, [_vm._v("medium-text")]),
        _c("p", { staticClass: "large-text" }, [_vm._v("large-text")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6" }, [
      _c("div", [
        _c("h6", [_vm._v("Title")]),
        _c("h5", [_vm._v("Title")]),
        _c("h4", [_vm._v("Title")]),
        _c("h3", [_vm._v("Title")]),
        _c("h2", [_vm._v("Title")]),
        _c("h1", [_vm._v("Title")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("a", { staticClass: "btn flat" }, [_vm._v("Link")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text"
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("a", { staticClass: "btn border small" }, [_vm._v("Link")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text"
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("a", { staticClass: "btn border small" }, [_vm._v("Link")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text"
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("a", { staticClass: "btn border small" }, [_vm._v("Link")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text"
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("a", { staticClass: "btn border small" }, [_vm._v("Link")])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )
        ]),
        _c("nav", [_c("a", { staticClass: "btn border" }, [_vm._v("Link")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "absolute top left right padding top-shadow white-text" },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          )
        ]),
        _c("nav", [_c("a", { staticClass: "btn border" }, [_vm._v("Link")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 l6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "h5" }, [_vm._v("Title")]),
          _c("div", [
            _c("span", [_vm._v("Generated by ")]),
            _c(
              "a",
              {
                staticClass: "link b",
                attrs: { target: "_blank", href: "https://www.chartjs.org/" }
              },
              [_vm._v("chart.js")]
            )
          ]),
          _c("div", { staticClass: "space" }),
          _c("div", [_c("canvas", { attrs: { id: "grafico0" } })]),
          _c("nav", [
            _c("a", { staticClass: "btn flat" }, [_vm._v("Link 1")]),
            _c("a", { staticClass: "btn flat" }, [_vm._v("Link 2")])
          ])
        ])
      ]),
      _c("div", { staticClass: "col s12 l6" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "h5" }, [_vm._v("Title")]),
          _c("div", [
            _c("span", [_vm._v("Generated by ")]),
            _c(
              "a",
              {
                staticClass: "link b",
                attrs: { target: "_blank", href: "https://www.chartjs.org/" }
              },
              [_vm._v("chart.js")]
            )
          ]),
          _c("div", { staticClass: "space" }),
          _c("div", [_c("canvas", { attrs: { id: "grafico1" } })]),
          _c("nav", [
            _c("a", { staticClass: "btn flat" }, [_vm._v("Link 1")]),
            _c("a", { staticClass: "btn flat" }, [_vm._v("Link 2")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", [
        _c("input", {
          attrs: { id: "top-align-lists", type: "radio", name: "align-lists" }
        }),
        _c("span", [_vm._v("top-align")])
      ]),
      _c("label", [
        _c("input", {
          attrs: {
            id: "middle-align-lists",
            type: "radio",
            name: "align-lists",
            checked: "checked"
          }
        }),
        _c("span", [_vm._v("middle-align")])
      ]),
      _c("label", [
        _c("input", {
          attrs: {
            id: "bottom-align-lists",
            type: "radio",
            name: "align-lists"
          }
        }),
        _c("span", [_vm._v("bottom-align")])
      ]),
      _c("label", [
        _c("input", {
          attrs: {
            id: "divider-lists",
            type: "checkbox",
            name: "divider-lists"
          }
        }),
        _c("span", [_vm._v("divider")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "light-green-text" }, [_vm._v("check_circle")])
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "orange-text" }, [_vm._v("warning")])
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "grey-text" }, [_vm._v("schedule")])
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("input", { attrs: { type: "checkbox" } })
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("input", { attrs: { type: "checkbox" } })
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("input", { attrs: { type: "checkbox" } })
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")])
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
          _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
        _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
        _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
        _c("a", { staticClass: "btn flat" }, [_c("i", [_vm._v("more_vert")])])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "table" } }, [
      _c("nav", { staticClass: "wrap" }, [
        _c("label", [
          _c("input", {
            attrs: { id: "small-tables", type: "radio", name: "size-tables" }
          }),
          _c("span", [_vm._v("small")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "medium-tables",
              type: "radio",
              name: "size-tables",
              checked: "checked"
            }
          }),
          _c("span", [_vm._v("medium")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "large-tables", type: "radio", name: "size-tables" }
          }),
          _c("span", [_vm._v("large")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "left-align-tables",
              type: "radio",
              name: "align-tables",
              checked: "checked"
            }
          }),
          _c("span", [_vm._v("left-align")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "center-align-tables",
              type: "radio",
              name: "align-tables"
            }
          }),
          _c("span", [_vm._v("center-align")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "right-align-tables",
              type: "radio",
              name: "align-tables"
            }
          }),
          _c("span", [_vm._v("right-align")])
        ])
      ]),
      _c("div", { staticClass: "space" }),
      _c("table", { staticClass: "border" }, [
        _c("thead", [
          _c("tr", [
            _c("th"),
            _c("th", [_vm._v("Column 1")]),
            _c("th", [_vm._v("Column 2")]),
            _c("th", [_vm._v("Column 3")]),
            _c("th")
          ])
        ]),
        _c("tbody", [
          _c("tr", [
            _c("td", [_c("input", { attrs: { type: "checkbox" } })]),
            _c("td", [_vm._v("Line 1")]),
            _c("td", [_vm._v("Line 1")]),
            _c("td", [_vm._v("Line 1")]),
            _c("td", [
              _c("nav", { staticClass: "right-align" }, [
                _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
                _c("a", { staticClass: "btn flat" }, [
                  _c("i", [_vm._v("more_vert")])
                ])
              ])
            ])
          ]),
          _c("tr", [
            _c("td", [_c("input", { attrs: { type: "checkbox" } })]),
            _c("td", [_vm._v("Line 2")]),
            _c("td", [_vm._v("Line 2")]),
            _c("td", [_vm._v("Line 2")]),
            _c("td", [
              _c("nav", { staticClass: "right-align" }, [
                _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
                _c("a", { staticClass: "btn flat" }, [
                  _c("i", [_vm._v("more_vert")])
                ])
              ])
            ])
          ]),
          _c("tr", [
            _c("td", [_c("input", { attrs: { type: "checkbox" } })]),
            _c("td", [_vm._v("Line 3")]),
            _c("td", [_vm._v("Line 3")]),
            _c("td", [_vm._v("Line 3")]),
            _c("td", [
              _c("nav", { staticClass: "right-align" }, [
                _c("a", { staticClass: "btn flat" }, [_vm._v("Link")]),
                _c("a", { staticClass: "btn flat" }, [
                  _c("i", [_vm._v("more_vert")])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "inputs" } }, [
      _c("nav", { staticClass: "wrap" }, [
        _c("label", [
          _c("input", { attrs: { id: "border-inputs", type: "checkbox" } }),
          _c("span", [_vm._v("border")])
        ]),
        _c("label", [
          _c("input", { attrs: { id: "round-inputs", type: "checkbox" } }),
          _c("span", [_vm._v("round")])
        ]),
        _c("label", [
          _c("input", { attrs: { id: "fill-inputs", type: "checkbox" } }),
          _c("span", [_vm._v("fill")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "small-inputs", type: "radio", name: "size-inputs" }
          }),
          _c("span", [_vm._v("small")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "medium-inputs",
              type: "radio",
              name: "size-inputs",
              checked: "checked"
            }
          }),
          _c("span", [_vm._v("medium")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "large-inputs", type: "radio", name: "size-inputs" }
          }),
          _c("span", [_vm._v("large")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "text-inputs",
              type: "radio",
              name: "type-inputs",
              checked: "checked"
            }
          }),
          _c("span", [_vm._v("text")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "password-inputs", type: "radio", name: "type-inputs" }
          }),
          _c("span", [_vm._v("password")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "file-inputs", type: "radio", name: "type-inputs" }
          }),
          _c("span", [_vm._v("file")])
        ])
      ]),
      _c("div", { staticClass: "space" }),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label prefix" }, [
            _c("i", [_vm._v("search")]),
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label sufix" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("i", [_vm._v("search")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label prefix" }, [
            _c("i", [_vm._v("search")]),
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label sufix" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("i", [_vm._v("search")]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label invalid" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label prefix invalid" }, [
            _c("i", [_vm._v("search")]),
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l4" }, [
          _c("div", { staticClass: "field label sufix invalid" }, [
            _c("input", { attrs: { type: "text" } }),
            _c("label", [_vm._v("Text")]),
            _c("i", [_vm._v("search")]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "selects" } }, [
      _c("nav", { staticClass: "wrap" }, [
        _c("label", [
          _c("input", { attrs: { id: "border-selects", type: "checkbox" } }),
          _c("span", [_vm._v("border")])
        ]),
        _c("label", [
          _c("input", { attrs: { id: "round-selects", type: "checkbox" } }),
          _c("span", [_vm._v("round")])
        ]),
        _c("label", [
          _c("input", { attrs: { id: "fill-selects", type: "checkbox" } }),
          _c("span", [_vm._v("fill")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "small-selects", type: "radio", name: "size-selects" }
          }),
          _c("span", [_vm._v("small")])
        ]),
        _c("label", [
          _c("input", {
            attrs: {
              id: "medium-selects",
              type: "radio",
              name: "size-selects",
              checked: "checked"
            }
          }),
          _c("span", [_vm._v("medium")])
        ]),
        _c("label", [
          _c("input", {
            attrs: { id: "large-selects", type: "radio", name: "size-selects" }
          }),
          _c("span", [_vm._v("large")])
        ])
      ]),
      _c("div", { staticClass: "space" }),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label sufix" }, [
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")]),
            _c("i", [_vm._v("arrow_drop_down")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label prefix" }, [
            _c("i", [_vm._v("arrow_drop_down")]),
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label sufix" }, [
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")]),
            _c("i", [_vm._v("arrow_drop_down")]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label prefix" }, [
            _c("i", [_vm._v("arrow_drop_down")]),
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label sufix invalid" }, [
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")]),
            _c("i", [_vm._v("arrow_drop_down")]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label prefix invalid" }, [
            _c("i", [_vm._v("arrow_drop_down")]),
            _c("select", [
              _c("option", [_vm._v("Item 1")]),
              _c("option", [_vm._v("Item 2")]),
              _c("option", [_vm._v("Item 3")])
            ]),
            _c("label", { staticClass: "active" }, [_vm._v("List")]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "checkboxes" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field middle-align" }, [
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label middle-align invalid" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "switches" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field middle-align" }, [
            _c("nav", [
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12 l6" }, [
          _c("div", { staticClass: "field label middle-align invalid" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", {
                  staticClass: "switch",
                  attrs: { type: "checkbox" }
                }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card", attrs: { id: "radios" } }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field middle-align" }, [
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "helper" }, [
              _vm._v("Complementary text")
            ])
          ])
        ]),
        _c("div", { staticClass: "col s12" }, [
          _c("div", { staticClass: "field label middle-align invalid" }, [
            _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
            _c("nav", [
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 1")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 2")])
              ]),
              _c("label", [
                _c("input", { attrs: { type: "radio", name: "radio" } }),
                _c("span", [_vm._v("Item 3")])
              ])
            ]),
            _c("span", { staticClass: "error" }, [_vm._v("Error text")])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("a", { attrs: { "data-ui": "#modal-colors" } }, [
        _c("i", [_vm._v("arrow_back")])
      ]),
      _c("a", { staticClass: "h5", attrs: { "data-ui": "#modal-colors" } }, [
        _vm._v("Back")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row white-text small-text" }, [
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "red-light-5" }, [
          _vm._v("#ffebee red-light-5")
        ]),
        _c("div", { staticClass: "red-light-4" }, [
          _vm._v("#ffcdd2 red-light-4")
        ]),
        _c("div", { staticClass: "red-light-3" }, [
          _vm._v("#ef9a9a red-light-3")
        ]),
        _c("div", { staticClass: "red-light-2" }, [
          _vm._v("#e57373 red-light-2")
        ]),
        _c("div", { staticClass: "red-light-1" }, [
          _vm._v("#ef5350 red-light-1")
        ]),
        _c("div", { staticClass: "red" }, [_vm._v("#f44336 red")]),
        _c("div", { staticClass: "red-dark-1" }, [
          _vm._v("#e53935 red-dark-1")
        ]),
        _c("div", { staticClass: "red-dark-2" }, [
          _vm._v("#d32f2f red-dark-2")
        ]),
        _c("div", { staticClass: "red-dark-3" }, [
          _vm._v("#c62828 red-dark-3")
        ]),
        _c("div", { staticClass: "red-dark-4" }, [_vm._v("#b71c1c red-dark-4")])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "pink-light-5" }, [
          _vm._v("#fce4ec pink-light-5")
        ]),
        _c("div", { staticClass: "pink-light-4" }, [
          _vm._v("#f8bbd0 pink-light-4")
        ]),
        _c("div", { staticClass: "pink-light-3" }, [
          _vm._v("#f48fb1 pink-light-3")
        ]),
        _c("div", { staticClass: "pink-light-2" }, [
          _vm._v("#f06292 pink-light-2")
        ]),
        _c("div", { staticClass: "pink-light-1" }, [
          _vm._v("#ec407a pink-light-1")
        ]),
        _c("div", { staticClass: "pink" }, [_vm._v("#e91e63 pink")]),
        _c("div", { staticClass: "pink-dark-1" }, [
          _vm._v("#d81b60 pink-dark-1")
        ]),
        _c("div", { staticClass: "pink-dark-2" }, [
          _vm._v("#c2185b pink-dark-2")
        ]),
        _c("div", { staticClass: "pink-dark-3" }, [
          _vm._v("#ad1457 pink-dark-3")
        ]),
        _c("div", { staticClass: "pink-dark-4" }, [
          _vm._v("#880e4f pink-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "purple-light-5" }, [
          _vm._v("#f3e5f5 purple-light-5")
        ]),
        _c("div", { staticClass: "purple-light-4" }, [
          _vm._v("#e1bee7 purple-light-4")
        ]),
        _c("div", { staticClass: "purple-light-3" }, [
          _vm._v("#ce93d8 purple-light-3")
        ]),
        _c("div", { staticClass: "purple-light-2" }, [
          _vm._v("#ba68c8 purple-light-2")
        ]),
        _c("div", { staticClass: "purple-light-1" }, [
          _vm._v("#ab47bc purple-light-1")
        ]),
        _c("div", { staticClass: "purple" }, [_vm._v("#9c27b0 purple")]),
        _c("div", { staticClass: "purple-dark-1" }, [
          _vm._v("#8e24aa purple-dark-1")
        ]),
        _c("div", { staticClass: "purple-dark-2" }, [
          _vm._v("#7b1fa2 purple-dark-2")
        ]),
        _c("div", { staticClass: "purple-dark-3" }, [
          _vm._v("#6a1b9a purple-dark-3")
        ]),
        _c("div", { staticClass: "purple-dark-4" }, [
          _vm._v("#4a148c purple-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "deep-purple-light-5" }, [
          _vm._v("#ede7f6 deep-purple-light-5")
        ]),
        _c("div", { staticClass: "deep-purple-light-4" }, [
          _vm._v("#d1c4e9 deep-purple-light-4")
        ]),
        _c("div", { staticClass: "deep-purple-light-3" }, [
          _vm._v("#b39ddb deep-purple-light-3")
        ]),
        _c("div", { staticClass: "deep-purple-light-2" }, [
          _vm._v("#9575cd deep-purple-light-2")
        ]),
        _c("div", { staticClass: "deep-purple-light-1" }, [
          _vm._v("#7e57c2 deep-purple-light-1")
        ]),
        _c("div", { staticClass: "deep-purple" }, [
          _vm._v("#673ab7 deep-purple")
        ]),
        _c("div", { staticClass: "deep-purple-dark-1" }, [
          _vm._v("#5e35b1 deep-purple-dark-1")
        ]),
        _c("div", { staticClass: "deep-purple-dark-2" }, [
          _vm._v("#512da8 deep-purple-dark-2")
        ]),
        _c("div", { staticClass: "deep-purple-dark-3" }, [
          _vm._v("#4527a0 deep-purple-dark-3")
        ]),
        _c("div", { staticClass: "deep-purple-dark-4" }, [
          _vm._v("#311b92 deep-purple-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "indigo-light-5" }, [
          _vm._v("#e8eaf6 indigo-light-5")
        ]),
        _c("div", { staticClass: "indigo-light-4" }, [
          _vm._v("#c5cae9 indigo-light-4")
        ]),
        _c("div", { staticClass: "indigo-light-3" }, [
          _vm._v("#9fa8da indigo-light-3")
        ]),
        _c("div", { staticClass: "indigo-light-2" }, [
          _vm._v("#7986cb indigo-light-2")
        ]),
        _c("div", { staticClass: "indigo-light-1" }, [
          _vm._v("#5c6bc0 indigo-light-1")
        ]),
        _c("div", { staticClass: "indigo" }, [_vm._v("#3f51b5 indigo")]),
        _c("div", { staticClass: "indigo-dark-1" }, [
          _vm._v("#3949ab indigo-dark-1")
        ]),
        _c("div", { staticClass: "indigo-dark-2" }, [
          _vm._v("#303f9f indigo-dark-2")
        ]),
        _c("div", { staticClass: "indigo-dark-3" }, [
          _vm._v("#283593 indigo-dark-3")
        ]),
        _c("div", { staticClass: "indigo-dark-4" }, [
          _vm._v("#1a237e indigo-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "blue-light-5" }, [
          _vm._v("#e3f2fd blue-light-5")
        ]),
        _c("div", { staticClass: "blue-light-4" }, [
          _vm._v("#bbdefb blue-light-4")
        ]),
        _c("div", { staticClass: "blue-light-3" }, [
          _vm._v("#90caf9 blue-light-3")
        ]),
        _c("div", { staticClass: "blue-light-2" }, [
          _vm._v("#64b5f6 blue-light-2")
        ]),
        _c("div", { staticClass: "blue-light-1" }, [
          _vm._v("#42a5f5 blue-light-1")
        ]),
        _c("div", { staticClass: "blue" }, [_vm._v("#2196f3 blue")]),
        _c("div", { staticClass: "blue-dark-1" }, [
          _vm._v("#1e88e5 blue-dark-1")
        ]),
        _c("div", { staticClass: "blue-dark-2" }, [
          _vm._v("#1976d2 blue-dark-2")
        ]),
        _c("div", { staticClass: "blue-dark-3" }, [
          _vm._v("#1565c0 blue-dark-3")
        ]),
        _c("div", { staticClass: "blue-dark-4" }, [
          _vm._v("#0d47a1 blue-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "light-blue-light-5" }, [
          _vm._v("#e1f5fe light-blue-light-5")
        ]),
        _c("div", { staticClass: "light-blue-light-4" }, [
          _vm._v("#b3e5fc light-blue-light-4")
        ]),
        _c("div", { staticClass: "light-blue-light-3" }, [
          _vm._v("#81d4fa light-blue-light-3")
        ]),
        _c("div", { staticClass: "light-blue-light-2" }, [
          _vm._v("#4fc3f7 light-blue-light-2")
        ]),
        _c("div", { staticClass: "light-blue-light-1" }, [
          _vm._v("#29b6f6 light-blue-light-1")
        ]),
        _c("div", { staticClass: "light-blue" }, [
          _vm._v("#03a9f4 light-blue")
        ]),
        _c("div", { staticClass: "light-blue-dark-1" }, [
          _vm._v("#039be5 light-blue-dark-1")
        ]),
        _c("div", { staticClass: "light-blue-dark-2" }, [
          _vm._v("#0288d1 light-blue-dark-2")
        ]),
        _c("div", { staticClass: "light-blue-dark-3" }, [
          _vm._v("#0277bd light-blue-dark-3")
        ]),
        _c("div", { staticClass: "light-blue-dark-4" }, [
          _vm._v("#01579b light-blue-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "cyan-light-5" }, [
          _vm._v("#e0f7fa cyan-light-5")
        ]),
        _c("div", { staticClass: "cyan-light-4" }, [
          _vm._v("#b2ebf2 cyan-light-4")
        ]),
        _c("div", { staticClass: "cyan-light-3" }, [
          _vm._v("#80deea cyan-light-3")
        ]),
        _c("div", { staticClass: "cyan-light-2" }, [
          _vm._v("#4dd0e1 cyan-light-2")
        ]),
        _c("div", { staticClass: "cyan-light-1" }, [
          _vm._v("#26c6da cyan-light-1")
        ]),
        _c("div", { staticClass: "cyan" }, [_vm._v("#00bcd4 cyan")]),
        _c("div", { staticClass: "cyan-dark-1" }, [
          _vm._v("#00acc1 cyan-dark-1")
        ]),
        _c("div", { staticClass: "cyan-dark-2" }, [
          _vm._v("#0097a7 cyan-dark-2")
        ]),
        _c("div", { staticClass: "cyan-dark-3" }, [
          _vm._v("#00838f cyan-dark-3")
        ]),
        _c("div", { staticClass: "cyan-dark-4" }, [
          _vm._v("#006064 cyan-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "teal-light-5" }, [
          _vm._v("#e0f2f1 teal-light-5")
        ]),
        _c("div", { staticClass: "teal-light-4" }, [
          _vm._v("#b2dfdb teal-light-4")
        ]),
        _c("div", { staticClass: "teal-light-3" }, [
          _vm._v("#80cbc4 teal-light-3")
        ]),
        _c("div", { staticClass: "teal-light-2" }, [
          _vm._v("#4db6ac teal-light-2")
        ]),
        _c("div", { staticClass: "teal-light-1" }, [
          _vm._v("#26a69a teal-light-1")
        ]),
        _c("div", { staticClass: "teal" }, [_vm._v("#009688 teal")]),
        _c("div", { staticClass: "teal-dark-1" }, [
          _vm._v("#00897b teal-dark-1")
        ]),
        _c("div", { staticClass: "teal-dark-2" }, [
          _vm._v("#00796b teal-dark-2")
        ]),
        _c("div", { staticClass: "teal-dark-3" }, [
          _vm._v("#00695c teal-dark-3")
        ]),
        _c("div", { staticClass: "teal-dark-4" }, [
          _vm._v("#004d40 teal-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "green-light-5" }, [
          _vm._v("#e8f5e9 green-light-5")
        ]),
        _c("div", { staticClass: "green-light-4" }, [
          _vm._v("#c8e6c9 green-light-4")
        ]),
        _c("div", { staticClass: "green-light-3" }, [
          _vm._v("#a5d6a7 green-light-3")
        ]),
        _c("div", { staticClass: "green-light-2" }, [
          _vm._v("#81c784 green-light-2")
        ]),
        _c("div", { staticClass: "green-light-1" }, [
          _vm._v("#66bb6a green-light-1")
        ]),
        _c("div", { staticClass: "green" }, [_vm._v("#4caf50 green")]),
        _c("div", { staticClass: "green-dark-1" }, [
          _vm._v("#43a047 green-dark-1")
        ]),
        _c("div", { staticClass: "green-dark-2" }, [
          _vm._v("#388e3c green-dark-2")
        ]),
        _c("div", { staticClass: "green-dark-3" }, [
          _vm._v("#2e7d32 green-dark-3")
        ]),
        _c("div", { staticClass: "green-dark-4" }, [
          _vm._v("#1b5e20 green-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "light-green-light-5" }, [
          _vm._v("#f1f8e9 light-green-light-5")
        ]),
        _c("div", { staticClass: "light-green-light-4" }, [
          _vm._v("#dcedc8 light-green-light-4")
        ]),
        _c("div", { staticClass: "light-green-light-3" }, [
          _vm._v("#c5e1a5 light-green-light-3")
        ]),
        _c("div", { staticClass: "light-green-light-2" }, [
          _vm._v("#aed581 light-green-light-2")
        ]),
        _c("div", { staticClass: "light-green-light-1" }, [
          _vm._v("#9ccc65 light-green-light-1")
        ]),
        _c("div", { staticClass: "light-green" }, [
          _vm._v("#8bc34a light-green")
        ]),
        _c("div", { staticClass: "light-green-dark-1" }, [
          _vm._v("#7cb342 light-green-dark-1")
        ]),
        _c("div", { staticClass: "light-green-dark-2" }, [
          _vm._v("#689f38 light-green-dark-2")
        ]),
        _c("div", { staticClass: "light-green-dark-3" }, [
          _vm._v("#558b2f light-green-dark-3")
        ]),
        _c("div", { staticClass: "light-green-dark-4" }, [
          _vm._v("#33691e light-green-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "lime-light-5" }, [
          _vm._v("#f9fbe7 lime-light-5")
        ]),
        _c("div", { staticClass: "lime-light-4" }, [
          _vm._v("#f0f4c3 lime-light-4")
        ]),
        _c("div", { staticClass: "lime-light-3" }, [
          _vm._v("#e6ee9c lime-light-3")
        ]),
        _c("div", { staticClass: "lime-light-2" }, [
          _vm._v("#dce775 lime-light-2")
        ]),
        _c("div", { staticClass: "lime-light-1" }, [
          _vm._v("#d4e157 lime-light-1")
        ]),
        _c("div", { staticClass: "lime" }, [_vm._v("#cddc39 lime")]),
        _c("div", { staticClass: "lime-dark-1" }, [
          _vm._v("#c0ca33 lime-dark-1")
        ]),
        _c("div", { staticClass: "lime-dark-2" }, [
          _vm._v("#afb42b lime-dark-2")
        ]),
        _c("div", { staticClass: "lime-dark-3" }, [
          _vm._v("#9e9d24 lime-dark-3")
        ]),
        _c("div", { staticClass: "lime-dark-4" }, [
          _vm._v("#827717 lime-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "yellow-light-5" }, [
          _vm._v("#fffde7 yellow-light-5")
        ]),
        _c("div", { staticClass: "yellow-light-4" }, [
          _vm._v("#fff9c4 yellow-light-4")
        ]),
        _c("div", { staticClass: "yellow-light-3" }, [
          _vm._v("#fff59d yellow-light-3")
        ]),
        _c("div", { staticClass: "yellow-light-2" }, [
          _vm._v("#fff176 yellow-light-2")
        ]),
        _c("div", { staticClass: "yellow-light-1" }, [
          _vm._v("#ffee58 yellow-light-1")
        ]),
        _c("div", { staticClass: "yellow" }, [_vm._v("#ffeb3b yellow")]),
        _c("div", { staticClass: "yellow-dark-1" }, [
          _vm._v("#fdd835 yellow-dark-1")
        ]),
        _c("div", { staticClass: "yellow-dark-2" }, [
          _vm._v("#fbc02d yellow-dark-2")
        ]),
        _c("div", { staticClass: "yellow-dark-3" }, [
          _vm._v("#f9a825 yellow-dark-3")
        ]),
        _c("div", { staticClass: "yellow-dark-4" }, [
          _vm._v("#f57f17 yellow-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "amber-light-5" }, [
          _vm._v("#fff8e1 amber-light-5")
        ]),
        _c("div", { staticClass: "amber-light-4" }, [
          _vm._v("#ffecb3 amber-light-4")
        ]),
        _c("div", { staticClass: "amber-light-3" }, [
          _vm._v("#ffe082 amber-light-3")
        ]),
        _c("div", { staticClass: "amber-light-2" }, [
          _vm._v("#ffd54f amber-light-2")
        ]),
        _c("div", { staticClass: "amber-light-1" }, [
          _vm._v("#ffca28 amber-light-1")
        ]),
        _c("div", { staticClass: "amber" }, [_vm._v("#ffc107 amber")]),
        _c("div", { staticClass: "amber-dark-1" }, [
          _vm._v("#ffb300 amber-dark-1")
        ]),
        _c("div", { staticClass: "amber-dark-2" }, [
          _vm._v("#ffa000 amber-dark-2")
        ]),
        _c("div", { staticClass: "amber-dark-3" }, [
          _vm._v("#ff8f00 amber-dark-3")
        ]),
        _c("div", { staticClass: "amber-dark-4" }, [
          _vm._v("#ff6f00 amber-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "orange-light-5" }, [
          _vm._v("#fff3e0 orange-light-5")
        ]),
        _c("div", { staticClass: "orange-light-4" }, [
          _vm._v("#ffe0b2 orange-light-4")
        ]),
        _c("div", { staticClass: "orange-light-3" }, [
          _vm._v("#ffcc80 orange-light-3")
        ]),
        _c("div", { staticClass: "orange-light-2" }, [
          _vm._v("#ffb74d orange-light-2")
        ]),
        _c("div", { staticClass: "orange-light-1" }, [
          _vm._v("#ffa726 orange-light-1")
        ]),
        _c("div", { staticClass: "orange" }, [_vm._v("#ff9800 orange")]),
        _c("div", { staticClass: "orange-dark-1" }, [
          _vm._v("#fb8c00 orange-dark-1")
        ]),
        _c("div", { staticClass: "orange-dark-2" }, [
          _vm._v("#f57c00 orange-dark-2")
        ]),
        _c("div", { staticClass: "orange-dark-3" }, [
          _vm._v("#ef6c00 orange-dark-3")
        ]),
        _c("div", { staticClass: "orange-dark-4" }, [
          _vm._v("#e65100 orange-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "deep-orange-light-5" }, [
          _vm._v("#fbe9e7 deep-orange-light-5")
        ]),
        _c("div", { staticClass: "deep-orange-light-4" }, [
          _vm._v("#ffccbc deep-orange-light-4")
        ]),
        _c("div", { staticClass: "deep-orange-light-3" }, [
          _vm._v("#ffab91 deep-orange-light-3")
        ]),
        _c("div", { staticClass: "deep-orange-light-2" }, [
          _vm._v("#ff8a65 deep-orange-light-2")
        ]),
        _c("div", { staticClass: "deep-orange-light-1" }, [
          _vm._v("#ff7043 deep-orange-light-1")
        ]),
        _c("div", { staticClass: "deep-orange" }, [
          _vm._v("#ff5722 deep-orange")
        ]),
        _c("div", { staticClass: "deep-orange-dark-1" }, [
          _vm._v("#f4511e deep-orange-dark-1")
        ]),
        _c("div", { staticClass: "deep-orange-dark-2" }, [
          _vm._v("#e64a19 deep-orange-dark-2")
        ]),
        _c("div", { staticClass: "deep-orange-dark-3" }, [
          _vm._v("#d84315 deep-orange-dark-3")
        ]),
        _c("div", { staticClass: "deep-orange-dark-4" }, [
          _vm._v("#bf360c deep-orange-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "brown-light-5" }, [
          _vm._v("#efebe9 brown-light-5")
        ]),
        _c("div", { staticClass: "brown-light-4" }, [
          _vm._v("#d7ccc8 brown-light-4")
        ]),
        _c("div", { staticClass: "brown-light-3" }, [
          _vm._v("#bcaaa4 brown-light-3")
        ]),
        _c("div", { staticClass: "brown-light-2" }, [
          _vm._v("#a1887f brown-light-2")
        ]),
        _c("div", { staticClass: "brown-light-1" }, [
          _vm._v("#8d6e63 brown-light-1")
        ]),
        _c("div", { staticClass: "brown" }, [_vm._v("#795548 brown")]),
        _c("div", { staticClass: "brown-dark-1" }, [
          _vm._v("#6d4c41 brown-dark-1")
        ]),
        _c("div", { staticClass: "brown-dark-2" }, [
          _vm._v("#5d4037 brown-dark-2")
        ]),
        _c("div", { staticClass: "brown-dark-3" }, [
          _vm._v("#4e342e brown-dark-3")
        ]),
        _c("div", { staticClass: "brown-dark-4" }, [
          _vm._v("#3e2723 brown-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "grey-light-5" }, [
          _vm._v("#fafafa grey-light-5")
        ]),
        _c("div", { staticClass: "grey-light-4" }, [
          _vm._v("#f5f5f5 grey-light-4")
        ]),
        _c("div", { staticClass: "grey-light-3" }, [
          _vm._v("#eeeeee grey-light-3")
        ]),
        _c("div", { staticClass: "grey-light-2" }, [
          _vm._v("#e0e0e0 grey-light-2")
        ]),
        _c("div", { staticClass: "grey-light-1" }, [
          _vm._v("#bdbdbd grey-light-1")
        ]),
        _c("div", { staticClass: "grey" }, [_vm._v("#9e9e9e grey")]),
        _c("div", { staticClass: "grey-dark-1" }, [
          _vm._v("#757575 grey-dark-1")
        ]),
        _c("div", { staticClass: "grey-dark-2" }, [
          _vm._v("#616161 grey-dark-2")
        ]),
        _c("div", { staticClass: "grey-dark-3" }, [
          _vm._v("#424242 grey-dark-3")
        ]),
        _c("div", { staticClass: "grey-dark-4" }, [
          _vm._v("#212121 grey-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "blue-grey-light-5" }, [
          _vm._v("#eceff1 blue-grey-light-5")
        ]),
        _c("div", { staticClass: "blue-grey-light-4" }, [
          _vm._v("#cfd8dc blue-grey-light-4")
        ]),
        _c("div", { staticClass: "blue-grey-light-3" }, [
          _vm._v("#b0bec5 blue-grey-light-3")
        ]),
        _c("div", { staticClass: "blue-grey-light-2" }, [
          _vm._v("#90a4ae blue-grey-light-2")
        ]),
        _c("div", { staticClass: "blue-grey-light-1" }, [
          _vm._v("#78909c blue-grey-light-1")
        ]),
        _c("div", { staticClass: "blue-grey" }, [_vm._v("#607d8b blue-grey")]),
        _c("div", { staticClass: "blue-grey-dark-1" }, [
          _vm._v("#546e7a blue-grey-dark-1")
        ]),
        _c("div", { staticClass: "blue-grey-dark-2" }, [
          _vm._v("#455a64 blue-grey-dark-2")
        ]),
        _c("div", { staticClass: "blue-grey-dark-3" }, [
          _vm._v("#37474f blue-grey-dark-3")
        ]),
        _c("div", { staticClass: "blue-grey-dark-4" }, [
          _vm._v("#263238 blue-grey-dark-4")
        ])
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", { staticClass: "black grey-text" }, [
          _vm._v("#000000 black")
        ]),
        _c("div", { staticClass: "white grey-text" }, [
          _vm._v("#ffffff white")
        ]),
        _c("div", { staticClass: "transparent grey-text" }, [
          _vm._v("N/A transparent")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal", attrs: { id: "modal" } }, [
      _c("h5", [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [
        _c(
          "a",
          {
            staticClass: "btn flat",
            attrs: { onclick: "$('#modal').attr('class', 'modal active');" }
          },
          [_vm._v("Default")]
        ),
        _c(
          "a",
          {
            staticClass: "btn flat",
            attrs: {
              onclick: "$('#modal').attr('class', 'modal left active');"
            }
          },
          [_vm._v("Left")]
        ),
        _c(
          "a",
          {
            staticClass: "btn flat",
            attrs: {
              onclick: "$('#modal').attr('class', 'modal right active');"
            }
          },
          [_vm._v("Right")]
        ),
        _c(
          "a",
          {
            staticClass: "btn flat",
            attrs: { onclick: "$('#modal').attr('class', 'modal top active');" }
          },
          [_vm._v("Top")]
        ),
        _c(
          "a",
          {
            staticClass: "btn flat",
            attrs: {
              onclick: "$('#modal').attr('class', 'modal bottom active');"
            }
          },
          [_vm._v("Bottom")]
        ),
        _c("a", { staticClass: "btn flat", attrs: { "data-ui": "#modal" } }, [
          _vm._v("Close")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("a", { attrs: { "data-ui": "#modal-samples" } }, [
        _c("i", [_vm._v("arrow_back")])
      ]),
      _c("a", { staticClass: "h5", attrs: { "data-ui": "#modal-samples" } }, [
        _vm._v("Back")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal", attrs: { id: "modal-calendar" } },
      [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col s12 m12 l4" }, [
            _c("div", { staticClass: "grey-text" }, [_vm._v("Selected date")]),
            _c("h5", [_vm._v("Tue,")]),
            _c("h5", [_vm._v("Month, 17")])
          ]),
          _c("div", { staticClass: "col s12 m12 l8" }, [
            _c("div", { staticClass: "row nowrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("a", [_c("i", [_vm._v("arrow_back")])])
              ]),
              _c("div", { staticClass: "col" }, [
                _c("h6", { staticClass: "center-align" }, [
                  _vm._v("Month / Year")
                ])
              ]),
              _c("div", { staticClass: "col min" }, [
                _c("a", [_c("i", [_vm._v("arrow_forward")])])
              ])
            ]),
            _c("table", { staticClass: "center-align" }, [
              _c("tbody", [
                _c("tr", [
                  _c("td", [_vm._v("S")]),
                  _c("td", [_vm._v("M")]),
                  _c("td", [_vm._v("T")]),
                  _c("td", [_vm._v("W")]),
                  _c("td", [_vm._v("T")]),
                  _c("td", [_vm._v("F")]),
                  _c("td", [_vm._v("S")])
                ]),
                _c("tr", [
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("1")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("2")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("3")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("4")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("5")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("6")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("7")])
                  ])
                ]),
                _c("tr", [
                  _c("td", [
                    _c(
                      "a",
                      { staticClass: "btn small border circle no-margin" },
                      [_vm._v("8")]
                    )
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("9")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("10")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("11")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("12")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("13")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("14")])
                  ])
                ]),
                _c("tr", [
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("15")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("16")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn small circle no-margin" }, [
                      _vm._v("17")
                    ])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("18")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("19")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("20")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("21")])
                  ])
                ]),
                _c("tr", [
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("22")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("23")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("24")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("25")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("26")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("27")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("28")])
                  ])
                ]),
                _c("tr", [
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("29")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("30")])
                  ]),
                  _c("td", [
                    _c("a", { staticClass: "btn flat" }, [_vm._v("31")])
                  ]),
                  _c("td", [_vm._v("1")]),
                  _c("td", [_vm._v("2")]),
                  _c("td", [_vm._v("3")]),
                  _c("td", [_vm._v("4")])
                ])
              ])
            ])
          ])
        ]),
        _c("nav", { staticClass: "right-align" }, [
          _c(
            "a",
            {
              staticClass: "btn flat",
              attrs: { "data-ui": "#modal-calendar" }
            },
            [_vm._v("Cancel")]
          ),
          _c(
            "a",
            {
              staticClass: "btn flat",
              attrs: { "data-ui": "#modal-calendar" }
            },
            [_vm._v("Ok")]
          )
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card" }, [
      _c("nav", { staticClass: "center-align" }, [
        _c("button", { staticClass: "small-device circle" }, [
          _c("i", [_vm._v("phone_android")])
        ]),
        _c(
          "button",
          { staticClass: "medium-device large-device border circle" },
          [_c("i", [_vm._v("phone_android")])]
        ),
        _c("button", { staticClass: "medium-device circle" }, [
          _c("i", [_vm._v("tablet_android")])
        ]),
        _c(
          "button",
          { staticClass: "small-device large-device border circle" },
          [_c("i", [_vm._v("tablet_android")])]
        ),
        _c("button", { staticClass: "large-device circle" }, [
          _c("i", [_vm._v("laptop_windows")])
        ]),
        _c(
          "button",
          { staticClass: "small-device medium-device border circle" },
          [_c("i", [_vm._v("laptop_windows")])]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "medium-device large-device", attrs: { id: "helpers" } },
      [
        _c("h6", [_vm._v("Helpers")]),
        _c("div", { staticClass: "row nowrap" }, [
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Position")]),
            _c("div", [_vm._v("left")]),
            _c("div", [_vm._v("right")]),
            _c("div", [_vm._v("center")]),
            _c("div", [_vm._v("top")]),
            _c("div", [_vm._v("bottom")]),
            _c("div", [_vm._v("middle")]),
            _c("div", [_vm._v("front")]),
            _c("div", [_vm._v("back")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Alignment")]),
            _c("div", [_vm._v("left-align")]),
            _c("div", [_vm._v("right-align")]),
            _c("div", [_vm._v("center-align")]),
            _c("div", [_vm._v("top-align")]),
            _c("div", [_vm._v("bottom-align")]),
            _c("div", [_vm._v("middle-align")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Size")]),
            _c("div", [_vm._v("small")]),
            _c("div", [_vm._v("medium")]),
            _c("div", [_vm._v("large")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Margin")]),
            _c("div", [_vm._v("margin")]),
            _c("div", [_vm._v("no-margin")]),
            _c("div", [_vm._v("small-margin")]),
            _c("div", [_vm._v("medium-margin")]),
            _c("div", [_vm._v("large-margin")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Padding")]),
            _c("div", [_vm._v("padding")]),
            _c("div", [_vm._v("no-padding")]),
            _c("div", [_vm._v("small-padding")]),
            _c("div", [_vm._v("medium-padding")]),
            _c("div", [_vm._v("large-padding")])
          ])
        ]),
        _c("div", { staticClass: "row nowrap" }, [
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Spacing")]),
            _c("div", [_vm._v("space")]),
            _c("div", [_vm._v("small-space")]),
            _c("div", [_vm._v("medium-space")]),
            _c("div", [_vm._v("large-space")]),
            _c("div", [_vm._v("divider")]),
            _c("div", [_vm._v("small-divider")]),
            _c("div", [_vm._v("medium-divider")]),
            _c("div", [_vm._v("large-divider")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Form")]),
            _c("div", [_vm._v("border")]),
            _c("div", [_vm._v("round")]),
            _c("div", [_vm._v("circle")]),
            _c("div", [_vm._v("none")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Texts")]),
            _c("div", [_vm._v("italic")]),
            _c("div", [_vm._v("bold")]),
            _c("div", [_vm._v("underline")]),
            _c("div", [_vm._v("overline")]),
            _c("div", [_vm._v("upper")]),
            _c("div", [_vm._v("lower")]),
            _c("div", [_vm._v("capitalize")]),
            _c("div", [_vm._v("link")]),
            _c("div", [_vm._v("small-text")]),
            _c("div", [_vm._v("medium-text")]),
            _c("div", [_vm._v("large-text")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Others")]),
            _c("div", [_vm._v("shadow")]),
            _c("div", [_vm._v("right-shadow")]),
            _c("div", [_vm._v("left-shadow")]),
            _c("div", [_vm._v("bottom-shadow")]),
            _c("div", [_vm._v("top-shadow")]),
            _c("div", [_vm._v("small-device")]),
            _c("div", [_vm._v("medium-device")]),
            _c("div", [_vm._v("large-device")]),
            _c("div", [_vm._v("active")]),
            _c("div", [_vm._v("nowrap")]),
            _c("div", [_vm._v("wrap")])
          ]),
          _c("div", { staticClass: "col" }, [
            _c("b", [_vm._v("Themes")]),
            _c("div", [_vm._v("is-dark")]),
            _c("div", [_vm._v("is-light")]),
            _c("div", [_vm._v("is-menu-left")]),
            _c("div", [_vm._v("is-menu-right")]),
            _c("div", [_vm._v("is-menu-top")]),
            _c("div", [_vm._v("is-menu-bottom")]),
            _c("div", [_vm._v("is-menu-small")]),
            _c("div", [_vm._v("is-menu-medium")]),
            _c("div", [_vm._v("is-menu-large")])
          ])
        ]),
        _c("div", { staticClass: "space" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c("h6", [_vm._v("Elements")]),
        _c("div", [
          _c("span", [_vm._v("absolute ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "left, right, top, bottom, center, middle, small, medium, large, round"
            )
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("badge ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("left, right, top, bottom, border, round, circle, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [_vm._v("auto")])
        ]),
        _c("div", [
          _c("span", [_vm._v("btn ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round, circle, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [_vm._v("flat")])
        ]),
        _c("div", [
          _c("span", [_vm._v("chip ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("border, circle, active")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("card ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round")
          ])
        ]),
        _c("div", [_c("span", [_vm._v("container")])]),
        _c("div", [
          _c("span", [_vm._v("dropdown ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "left, right, small, medium, large, border, round, active, nowrap"
            )
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("field ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [
            _vm._v("fill, prefix, sufix, label, invalid")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("fixed ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "left, right, top, bottom, center, middle, small, medium, large, round"
            )
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("loader ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("menu ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("left, right, top, bottom, small, medium, large")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("modal ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("left, right, top, bottom, small, medium, large, active")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("page ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("left, right, top, bottom, active")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("overlay ")]),
          _c("span", { staticClass: "grey-text" }, [_vm._v("active, ")]),
          _c("span", { staticClass: "orange-text" }, [_vm._v("light, dark")])
        ]),
        _c("div", [
          _c("span", [_vm._v("row ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("top-align, bottom-align, middle-align, nowrap")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("    col ")]),
          _c("span", { staticClass: "orange-text" }, [
            _vm._v("min, max, s1..12, m1..12, l1..12")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("toast ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round, active")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("tooltip ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "left, right, top, bottom, small, medium, large, border, round"
            )
          ])
        ]),
        _c("div", { staticClass: "space" }),
        _c("div", [
          _c("span", [_vm._v("<body> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "is-light, is-dark, is-menu-left, is-menu-right, is-menu-top, is-menu-bottom, is-menu-small, is-menu-medium, is-menu-large"
            )
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("<button> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round, circle, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [_vm._v("flat")])
        ]),
        _c("div", [_c("span", [_vm._v("<circle>")])]),
        _c("div", [
          _c("span", [_vm._v("<i> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, wrap, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [
            _vm._v("tiny, extra, outlined")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("<img> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("small, medium, large, border, round, circle, ")
          ]),
          _c("span", { staticClass: "orange-text" }, [
            _vm._v("tiny, extra, responsive, empty-state")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("<input> ")]),
          _c("span", { staticClass: "orange-text" }, [_vm._v("switch")])
        ]),
        _c("div", [
          _c("span", [_vm._v("<label> ")]),
          _c("span", { staticClass: "grey-text" }, [_vm._v("active")])
        ]),
        _c("div", [
          _c("span", [_vm._v("<nav> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v("top-align, bottom-align, middle-align, wrap")
          ])
        ]),
        _c("div", [
          _c("span", [_vm._v("<table> ")]),
          _c("span", { staticClass: "grey-text" }, [
            _vm._v(
              "small, medium, large, border, left-align, center-align, right-align"
            )
          ])
        ]),
        _c("div", { staticClass: "space" }),
        _c("div", { staticClass: "orange-text" }, [
          _vm._v("* Element unique helpers")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "center-align" }, [
      _c("div", { staticClass: "h4" }, [_vm._v("Thank you!")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 center-align" }, [
        _c("div", { staticClass: "chip" }, [
          _vm._v("Leonardo Rafael Wehrmeister")
        ]),
        _c("div", { staticClass: "chip" }, [_vm._v("Everton Alcides Buzzi")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 11")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 12")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 13")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 14")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 15")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 16")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 17")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 18")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 19")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 20")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 21")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 22")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 23")]),
        _c("div", { staticClass: "chip" }, [_vm._v("Sponsor 24")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "center-align" }, [
      _c(
        "a",
        {
          staticClass: "btn large",
          attrs: { href: "https://www.patreon.com/beercss", target: "_blank" }
        },
        [_vm._v("Support us")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("a", { attrs: { "data-ui": "#modal-icons" } }, [
        _c("i", [_vm._v("arrow_back")])
      ]),
      _c("a", { staticClass: "h5", attrs: { "data-ui": "#modal-icons" } }, [
        _vm._v("Back")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "right-align" }, [
      _c(
        "a",
        {
          staticClass: "btn",
          attrs: {
            href: "https://material.io/resources/icons/?style=baseline",
            target: "_blank"
          }
        },
        [_vm._v("More icons")]
      )
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"process":"../node_modules/process/browser.js"}],"home/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _page = _interopRequireDefault(require("~/home/page.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/", _page.default);
},{"~/shared/router.js":"shared/router.js","~/home/page.vue":"home/page.vue"}],"test/page.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  methods: {
    updateTheme: function updateTheme() {
      document.body.className = document.body.className.indexOf("is-dark") != -1 ? "is-light" : "is-dark";
    }
  }
};
exports.default = _default;
        var $0ea019 = exports.default || module.exports;
      
      if (typeof $0ea019 === 'function') {
        $0ea019 = $0ea019.options;
      }
    
        /* template */
        Object.assign($0ea019, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "space" }),
    _c("div", { staticClass: "row nowrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c(
          "a",
          {
            on: {
              click: function($event) {
                return _vm.updateTheme()
              }
            }
          },
          [_c("i", { staticClass: "large" }, [_vm._v("brightness_medium")])]
        )
      ]),
      _vm._m(0)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "h5" }, [_vm._v("Test your changes here")]),
      _c("div", [_vm._v("Click on icon to change theme")])
    ])
  }
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"test/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _page = _interopRequireDefault(require("~/test/page.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/test", _page.default);
},{"~/shared/router.js":"shared/router.js","~/test/page.vue":"test/page.vue"}],"app.js":[function(require,module,exports) {
"use strict";

var _init = _interopRequireDefault(require("~/shared/init.js"));

var _home = _interopRequireDefault(require("~/home"));

var _test = _interopRequireDefault(require("~/test"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"~/shared/init.js":"shared/init.js","~/home":"home/index.js","~/test":"test/index.js"}]},{},["app.js"], null)