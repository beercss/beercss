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
})({"../node_modules/@babel/runtime/helpers/interopRequireDefault.js":[function(require,module,exports) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
var define;
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

},{}],"../node_modules/@babel/runtime/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");
},{"regenerator-runtime":"../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js"}],"../node_modules/@babel/runtime/helpers/asyncToGenerator.js":[function(require,module,exports) {
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/arrayWithHoles.js":[function(require,module,exports) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":[function(require,module,exports) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":[function(require,module,exports) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/nonIterableRest.js":[function(require,module,exports) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/slicedToArray.js":[function(require,module,exports) {
var arrayWithHoles = require("./arrayWithHoles.js");

var iterableToArrayLimit = require("./iterableToArrayLimit.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableRest = require("./nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithHoles.js","./iterableToArrayLimit.js":"../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableRest.js":"../node_modules/@babel/runtime/helpers/nonIterableRest.js"}],"../node_modules/@babel/runtime/helpers/setPrototypeOf.js":[function(require,module,exports) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/inherits.js":[function(require,module,exports) {
var setPrototypeOf = require("./setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./setPrototypeOf.js":"../node_modules/@babel/runtime/helpers/setPrototypeOf.js"}],"../node_modules/@babel/runtime/helpers/typeof.js":[function(require,module,exports) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/assertThisInitialized.js":[function(require,module,exports) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":[function(require,module,exports) {
var _typeof = require("./typeof.js")["default"];

var assertThisInitialized = require("./assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./typeof.js":"../node_modules/@babel/runtime/helpers/typeof.js","./assertThisInitialized.js":"../node_modules/@babel/runtime/helpers/assertThisInitialized.js"}],"../node_modules/@babel/runtime/helpers/getPrototypeOf.js":[function(require,module,exports) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":[function(require,module,exports) {
var arrayLikeToArray = require("./arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayLikeToArray.js":"../node_modules/@babel/runtime/helpers/arrayLikeToArray.js"}],"../node_modules/@babel/runtime/helpers/iterableToArray.js":[function(require,module,exports) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/nonIterableSpread.js":[function(require,module,exports) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/toConsumableArray.js":[function(require,module,exports) {
var arrayWithoutHoles = require("./arrayWithoutHoles.js");

var iterableToArray = require("./iterableToArray.js");

var unsupportedIterableToArray = require("./unsupportedIterableToArray.js");

var nonIterableSpread = require("./nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{"./arrayWithoutHoles.js":"../node_modules/@babel/runtime/helpers/arrayWithoutHoles.js","./iterableToArray.js":"../node_modules/@babel/runtime/helpers/iterableToArray.js","./unsupportedIterableToArray.js":"../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js","./nonIterableSpread.js":"../node_modules/@babel/runtime/helpers/nonIterableSpread.js"}],"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
},{}],"../node_modules/material-dynamic-colors/dist/npm/material-dynamic-colors.min.js":[function(require,module,exports) {
"use strict";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault"),_regenerator=_interopRequireDefault(require("@babel/runtime/regenerator")),_asyncToGenerator2=_interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator")),_slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray")),_inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits")),_possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn")),_getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf")),_toConsumableArray2=_interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray")),_classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck")),_createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));function _createForOfIteratorHelper(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||n&&e&&"number"==typeof e.length){t&&(e=t);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,o=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return l=e.done,e},e:function(e){o=!0,i=e},f:function(){try{l||null==t.return||t.return()}finally{if(o)throw i}}}}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function _createSuper(e){var n=_isNativeReflectConstruct();return function(){var t,r=(0,_getPrototypeOf2.default)(e);if(n){var a=(0,_getPrototypeOf2.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,_possibleConstructorReturn2.default)(this,t)}}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}!function(){var e={light:{background:"#FFFFFF",surface:"#FFFFFF"},dark:{},neutral:{luminance100:"#FFFFFF",luminance99:"#FDFCFB",luminance98:"#FAF9F9",luminance95:"#F2F2F2",luminance90:"#E3E3E3",luminance80:"#C7C7C7",luminance70:"#ABABAB",luminance60:"#8F8F8F",luminance50:"#757575",luminance40:"#5E5E5E",luminance35:"#525252",luminance30:"#474747",luminance25:"#3A3C3C",luminance20:"#303030",luminance10:"#1F1F1F",luminance0:"#000000"},neutralVariant:{luminance100:"#FFFFFF",luminance99:"#FAFDFB",luminance98:"#F8FAF8",luminance95:"#EFF2EF",luminance90:"#E1E3E1",luminance80:"#C4C7C5",luminance70:"#A9ACAA",luminance60:"#8E918F",luminance50:"#747775",luminance40:"#5C5F5E",luminance35:"#4F5351",luminance30:"#444746",luminance25:"#393C3B",luminance20:"#2D312F",luminance10:"#191D1C",luminance0:"#000000"},primary:{luminance100:"#FFFFFF",luminance99:"#FAFBFF",luminance98:"#F8F9FF",luminance95:"#ECF3FE",luminance90:"#D3E3FD",luminance80:"#A8C7FA",luminance70:"#7CACF8",luminance60:"#4C8DF6",luminance50:"#1B6EF3",luminance40:"#0B57D0",luminance35:"#155298",luminance30:"#0842A0",luminance25:"#003B77",luminance20:"#062E6F",luminance10:"#041E49",luminance0:"#000000"},secondary:{luminance100:"#FFFFFF",luminance99:"#F7FCFF",luminance98:"#E3FFF6",luminance95:"#DFF3FF",luminance90:"#C2E7FF",luminance80:"#7FCFFF",luminance70:"#5AB3F0",luminance60:"#3998D3",luminance50:"#047DB7",luminance40:"#00639B",luminance35:"#005E4E",luminance30:"#004A77",luminance25:"#004438",luminance20:"#003355",luminance10:"#001D35",luminance0:"#000000"},tertiary:{luminance100:"#FFFFFF",luminance99:"#F2FFEE",luminance98:"#E8FFE7",luminance95:"#E7F8ED",luminance90:"#C4EED0",luminance80:"#6DD58C",luminance70:"#37BE5F",luminance60:"#1EA446",luminance50:"#198639",luminance40:"#146C2E",luminance35:"#006024",luminance30:"#0F5223",luminance25:"#004618",luminance20:"#0A3818",luminance10:"#072711",luminance0:"#000000"},error:{luminance100:"#FFFFFF",luminance99:"#FFFBF9",luminance98:"#FFF8F6",luminance95:"#FCEEEE",luminance90:"#F9DEDC",luminance80:"#F2B8B5",luminance70:"#EC928E",luminance60:"#E46962",luminance50:"#DC362E",luminance40:"#B3261E",luminance35:"#833D3B",luminance30:"#8C1D18",luminance25:"#662726",luminance20:"#601410",luminance10:"#410E0B",luminance0:"#000000"},styles:{display1:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:64,lineHeight:76,letterSpacing:0,paragraphSpacing:0},display2:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:57,lineHeight:64,letterSpacing:0,paragraphSpacing:0},display3:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:45,lineHeight:52,letterSpacing:0,paragraphSpacing:0},headline1:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:36,lineHeight:44,letterSpacing:0,paragraphSpacing:0},headline2:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:32,lineHeight:40,letterSpacing:0,paragraphSpacing:0},headline3:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:28,lineHeight:36,letterSpacing:0,paragraphSpacing:0},headline4:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:24,lineHeight:32,letterSpacing:0,paragraphSpacing:0},headline5:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:22,lineHeight:28,letterSpacing:0,paragraphSpacing:0},headline6:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:18,lineHeight:24,letterSpacing:0,paragraphSpacing:0},subhead1:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Medium",fontSize:16,lineHeight:24,letterSpacing:0,paragraphSpacing:0},subhead2:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Medium",fontSize:14,lineHeight:20,letterSpacing:0,paragraphSpacing:0},button:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Medium",fontSize:14,lineHeight:20,letterSpacing:0,paragraphSpacing:0},body1:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:16,lineHeight:24,letterSpacing:0,paragraphSpacing:0},body2:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:14,lineHeight:20,letterSpacing:0,paragraphSpacing:0},caption:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Regular",fontSize:12,lineHeight:16,letterSpacing:.1,paragraphSpacing:0},overline:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Medium",fontSize:12,lineHeight:16,letterSpacing:.1,paragraphSpacing:0},labelSmall:{fontFamilyName:"Google Sans Text",fontFamilyStyle:"Medium",fontSize:11,lineHeight:16,letterSpacing:.1,paragraphSpacing:0}}},n={light:{},dark:{},neutral:{luminance100:"#FFFFFF",luminance99:"#FFFBFE",luminance98:"#FDF8FC",luminance95:"#F4EFF4",luminance90:"#E6E1E5",luminance80:"#C9C5CA",luminance70:"#AEAAAE",luminance60:"#939094",luminance50:"#787579",luminance40:"#605D62",luminance35:"#545255",luminance30:"#484649",luminance25:"#3D3B3E",luminance20:"#313033",luminance10:"#1C1B1F",luminance0:"#000000"},neutralVariant:{luminance100:"#FFFFFF",luminance99:"#FFFBFE",luminance98:"#FEF7FF",luminance95:"#F5EEFA",luminance90:"#E7E0EC",luminance80:"#CAC4D0",luminance70:"#AEA9B4",luminance60:"#938F99",luminance50:"#79747E",luminance40:"#605D66",luminance35:"#54515A",luminance30:"#49454F",luminance25:"#3D3A43",luminance20:"#322F37",luminance10:"#1D1A22",luminance0:"#000000"},primary:{luminance100:"#FFFFFF",luminance99:"#FFFBFE",luminance98:"#FEF7FF",luminance95:"#F6EDFF",luminance90:"#EADDFF",luminance80:"#D0BCFF",luminance70:"#B69DF8",luminance60:"#9A82DB",luminance50:"#7F67BE",luminance40:"#6750A4",luminance35:"#5B4497",luminance30:"#4F378B",luminance25:"#432B7E",luminance20:"#381E72",luminance10:"#21005D",luminance0:"#000000"},secondary:{luminance100:"#FFFFFF",luminance99:"#FFFBFE",luminance98:"#FEF7FF",luminance95:"#F6EDFF",luminance90:"#E8DEF8",luminance80:"#CCC2DC",luminance70:"#B0A7C0",luminance60:"#958DA5",luminance50:"#7A7289",luminance40:"#625B71",luminance35:"#564F65",luminance30:"#4A4458",luminance25:"#3E384D",luminance20:"#332D41",luminance10:"#1D192B",luminance0:"#000000"},tertiary:{luminance100:"#FFFFFF",luminance99:"#FFFBFA",luminance98:"#FFF8F9",luminance95:"#FFECF1",luminance90:"#FFD8E4",luminance80:"#EFB8C8",luminance70:"#D29DAC",luminance60:"#B58392",luminance50:"#986977",luminance40:"#7D5260",luminance35:"#704653",luminance30:"#633B48",luminance25:"#57303D",luminance20:"#492532",luminance10:"#31111D",luminance0:"#000000"},error:{luminance100:"#FFFFFF",luminance99:"#FFFBF9",luminance98:"#FFF8F6",luminance95:"#FCEEEE",luminance90:"#F9DEDC",luminance80:"#F2B8B5",luminance70:"#EC928E",luminance60:"#E46962",luminance50:"#DC362E",luminance40:"#B3261E",luminance35:"#833D3B",luminance30:"#8C1D18",luminance25:"#662726",luminance20:"#601410",luminance10:"#410E0B",luminance0:"#000000"},styles:{display1:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:64,lineHeight:76,letterSpacing:-.5,paragraphSpacing:0},display2:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:57,lineHeight:64,letterSpacing:-.25,paragraphSpacing:0},display3:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:45,lineHeight:52,letterSpacing:0,paragraphSpacing:0},headline1:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:36,lineHeight:44,letterSpacing:0,paragraphSpacing:0},headline2:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:32,lineHeight:40,letterSpacing:0,paragraphSpacing:0},headline3:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:28,lineHeight:36,letterSpacing:0,paragraphSpacing:0},headline4:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:24,lineHeight:32,letterSpacing:0,paragraphSpacing:0},headline5:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:22,lineHeight:28,letterSpacing:0,paragraphSpacing:0},headline6:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:18,lineHeight:24,letterSpacing:0,paragraphSpacing:0},subhead1:{fontFamilyName:"Roboto",fontFamilyStyle:"Medium",fontSize:16,lineHeight:24,letterSpacing:.1,paragraphSpacing:0},subhead2:{fontFamilyName:"Roboto",fontFamilyStyle:"Medium",fontSize:14,lineHeight:20,letterSpacing:.1,paragraphSpacing:0},button:{fontFamilyName:"Roboto",fontFamilyStyle:"Medium",fontSize:14,lineHeight:20,letterSpacing:.1,paragraphSpacing:0},body1:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:16,lineHeight:24,letterSpacing:.5,paragraphSpacing:0},body2:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:14,lineHeight:20,letterSpacing:.25,paragraphSpacing:0},caption:{fontFamilyName:"Roboto",fontFamilyStyle:"Regular",fontSize:12,lineHeight:16,letterSpacing:.4,paragraphSpacing:0},overline:{fontFamilyName:"Roboto",fontFamilyStyle:"Medium",fontSize:12,lineHeight:16,letterSpacing:.5,paragraphSpacing:0},labelSmall:{fontFamilyName:"Roboto",fontFamilyStyle:"Medium",fontSize:11,lineHeight:16,letterSpacing:.5,paragraphSpacing:0}}},t=function(e,n,t){return(null!=t?t:e.palettes).get("".concat(n,"-40"))},r=function(e,n){return(null==e?void 0:e.toUpperCase())===(null==n?void 0:n.toUpperCase())},a=function(e){try{return R(e)}catch(n){return console.debug("error converting [".concat(e,"] to hex"),n),"#000000"}},i=function(e,n,t){var r,i=null!==(r=e.props.overrides.tonalGroups)&&void 0!==r?r:{},l=Object(i)[n];return N.is1p&&!e.props.isBaseline||!l?function(e){return{luminance100:a(e.tone(100)),luminance99:a(e.tone(99)),luminance98:a(e.tone(98)),luminance95:a(e.tone(95)),luminance90:a(e.tone(90)),luminance80:a(e.tone(80)),luminance70:a(e.tone(70)),luminance60:a(e.tone(60)),luminance50:a(e.tone(50)),luminance40:a(e.tone(40)),luminance35:a(e.tone(35)),luminance30:a(e.tone(30)),luminance25:a(e.tone(25)),luminance20:a(e.tone(20)),luminance10:a(e.tone(10)),luminance0:a(e.tone(0))}}(t):l},l=function(e,n){var t=new Map;return t.set("".concat(e,"-100"),n.luminance100),t.set("".concat(e,"-99"),n.luminance99),t.set("".concat(e,"-98"),n.luminance98),t.set("".concat(e,"-95"),n.luminance95),t.set("".concat(e,"-90"),n.luminance90),t.set("".concat(e,"-80"),n.luminance80),t.set("".concat(e,"-70"),n.luminance70),t.set("".concat(e,"-60"),n.luminance60),t.set("".concat(e,"-50"),n.luminance50),t.set("".concat(e,"-40"),n.luminance40),t.set("".concat(e,"-35"),n.luminance35),t.set("".concat(e,"-30"),n.luminance30),t.set("".concat(e,"-25"),n.luminance25),t.set("".concat(e,"-20"),n.luminance20),t.set("".concat(e,"-10"),n.luminance10),t.set("".concat(e,"-0"),n.luminance0),t},o=function(e){var n=(e+16)/116,t=24389/27,r=n*n*n>216/24389,a=[(r?n*n*n:(116*n-16)/t)*w[0],(8<e?n*n*n:e/t)*w[1],(r?n*n*n:(116*n-16)/t)*w[2]];return d(a[0],a[1],a[2])},u=function(e){(0,_inherits2.default)(t,e);var n=_createSuper(t);function t(){return(0,_classCallCheck2.default)(this,t),n.apply(this,arguments)}return(0,_createClass2.default)(t)}(function(){function o(e){(0,_classCallCheck2.default)(this,o),this.props=e}return(0,_createClass2.default)(o,[{key:"isBaseline",get:function(){return t=this.save(),a=!0,i=function(e){var n,t;return"Roboto"===(null===(t=null===(n=null==e?void 0:e.styles)||void 0===n?void 0:n.headline1)||void 0===t?void 0:t.fontFamilyName)}(t)?n:e,(l=function(e,n,t){var i;a&&((i=r(n.luminance0,t.luminance0))&&(i=r(n.luminance10,t.luminance10)),i&&(i=r(n.luminance20,t.luminance20)),i&&(i=r(n.luminance30,t.luminance30)),i&&(i=r(n.luminance40,t.luminance40)),i&&(i=r(n.luminance50,t.luminance50)),i&&(i=r(n.luminance60,t.luminance60)),i&&(i=r(n.luminance70,t.luminance70)),i&&(i=r(n.luminance80,t.luminance80)),i&&(i=r(n.luminance90,t.luminance90)),i&&(i=r(n.luminance95,t.luminance95)),i&&(i=r(n.luminance98,t.luminance98)),i&&(i=r(n.luminance100,t.luminance100)),a=i),a||console.debug("theme adapter ".concat(e," group mismatch"),n,t)})("primary",t.primary,i.primary),l("secondary",t.secondary,i.secondary),l("tertiary",t.tertiary,i.tertiary),l("neutral",t.neutral,i.neutral),l("neutralVariant",t.neutralVariant,i.neutralVariant),l("error",t.error,i.error),console.debug("theme adapter baseline match: ".concat(a)),a;var t,a,i,l}},{key:"is3p",get:function(){return this.props.is3p}},{key:"styles",get:function(){return this.props.is3p?n.styles:e.styles}},{key:"imageUrl",get:function(){return this.props.imageUrl}},{key:"light",get:function(){var t,r,a,i,l,o,u,c,s,m,d,f,h,g,v,p,y,F,b,S,C,k,w,A,E,M,x,_,R,B,D=this.props.isBaseline?null===(t=N.is1p?e:n)||void 0===t?void 0:t.light:null!==(a=null===(r=this.props.overrides)||void 0===r?void 0:r.light)&&void 0!==a?a:{},T=this.palettes;return{primary:null!==(i=null==D?void 0:D.primary)&&void 0!==i?i:T.get("P-40"),onPrimary:null!==(l=null==D?void 0:D.onPrimary)&&void 0!==l?l:T.get("P-100"),primaryContainer:null!==(o=null==D?void 0:D.primaryContainer)&&void 0!==o?o:T.get("P-90"),onPrimaryContainer:null!==(u=null==D?void 0:D.onPrimaryContainer)&&void 0!==u?u:T.get("P-10"),secondary:null!==(c=null==D?void 0:D.secondary)&&void 0!==c?c:T.get("S-40"),onSecondary:null!==(s=null==D?void 0:D.onSecondary)&&void 0!==s?s:T.get("S-100"),secondaryContainer:null!==(m=null==D?void 0:D.secondaryContainer)&&void 0!==m?m:T.get("S-90"),onSecondaryContainer:null!==(d=null==D?void 0:D.onSecondaryContainer)&&void 0!==d?d:T.get("S-10"),tertiary:null!==(f=null==D?void 0:D.tertiary)&&void 0!==f?f:T.get("T-40"),onTertiary:null!==(h=null==D?void 0:D.onTertiary)&&void 0!==h?h:T.get("T-100"),tertiaryContainer:null!==(g=null==D?void 0:D.tertiaryContainer)&&void 0!==g?g:T.get("T-90"),onTertiaryContainer:null!==(v=null==D?void 0:D.onTertiaryContainer)&&void 0!==v?v:T.get("T-10"),error:null!==(p=null==D?void 0:D.error)&&void 0!==p?p:T.get("E-40"),errorContainer:null!==(y=null==D?void 0:D.errorContainer)&&void 0!==y?y:T.get("E-90"),onError:null!==(F=null==D?void 0:D.onError)&&void 0!==F?F:T.get("E-100"),onErrorContainer:null!==(b=null==D?void 0:D.onErrorContainer)&&void 0!==b?b:T.get("E-10"),background:null!==(S=null==D?void 0:D.background)&&void 0!==S?S:T.get("N-99"),onBackground:null!==(C=null==D?void 0:D.onBackground)&&void 0!==C?C:T.get("N-10"),surface:null!==(k=null==D?void 0:D.surface)&&void 0!==k?k:T.get("N-99"),onSurface:null!==(w=null==D?void 0:D.onSurface)&&void 0!==w?w:T.get("N-10"),surfaceVariant:null!==(A=null==D?void 0:D.surfaceVariant)&&void 0!==A?A:T.get("NV-90"),onSurfaceVariant:null!==(E=null==D?void 0:D.onSurfaceVariant)&&void 0!==E?E:T.get("NV-30"),outline:null!==(M=null==D?void 0:D.outline)&&void 0!==M?M:T.get("NV-50"),inverseOnSurface:null!==(x=null==D?void 0:D.inverseOnSurface)&&void 0!==x?x:T.get("N-95"),inverseSurface:null!==(_=null==D?void 0:D.inverseSurface)&&void 0!==_?_:T.get("N-20"),inversePrimary:null!==(R=null==D?void 0:D.inversePrimary)&&void 0!==R?R:T.get("P-80"),shadow:null!==(B=null==D?void 0:D.shadow)&&void 0!==B?B:T.get("N-0")}}},{key:"dark",get:function(){var t,r,a,i,l,o,u,c,s,m,d,f,h,g,v,p,y,F,b,S,C,k,w,A,E,M,x,_,R,B,D=this.props.isBaseline?null===(t=N.is1p?e:n)||void 0===t?void 0:t.dark:null!==(a=null===(r=this.props.overrides)||void 0===r?void 0:r.dark)&&void 0!==a?a:{},T=this.palettes;return{primary:null!==(i=null==D?void 0:D.primary)&&void 0!==i?i:T.get("P-80"),onPrimary:null!==(l=null==D?void 0:D.onPrimary)&&void 0!==l?l:T.get("P-20"),primaryContainer:null!==(o=null==D?void 0:D.primaryContainer)&&void 0!==o?o:T.get("P-30"),onPrimaryContainer:null!==(u=null==D?void 0:D.onPrimaryContainer)&&void 0!==u?u:T.get("P-90"),secondary:null!==(c=null==D?void 0:D.secondary)&&void 0!==c?c:T.get("S-80"),onSecondary:null!==(s=null==D?void 0:D.onSecondary)&&void 0!==s?s:T.get("S-20"),secondaryContainer:null!==(m=null==D?void 0:D.secondaryContainer)&&void 0!==m?m:T.get("S-30"),onSecondaryContainer:null!==(d=null==D?void 0:D.onSecondaryContainer)&&void 0!==d?d:T.get("S-90"),tertiary:null!==(f=null==D?void 0:D.tertiary)&&void 0!==f?f:T.get("T-80"),onTertiary:null!==(h=null==D?void 0:D.onTertiary)&&void 0!==h?h:T.get("T-20"),tertiaryContainer:null!==(g=null==D?void 0:D.tertiaryContainer)&&void 0!==g?g:T.get("T-30"),onTertiaryContainer:null!==(v=null==D?void 0:D.onTertiaryContainer)&&void 0!==v?v:T.get("T-90"),error:null!==(p=null==D?void 0:D.error)&&void 0!==p?p:T.get("E-80"),errorContainer:null!==(y=null==D?void 0:D.errorContainer)&&void 0!==y?y:T.get("E-30"),onError:null!==(F=null==D?void 0:D.onError)&&void 0!==F?F:T.get("E-20"),onErrorContainer:null!==(b=null==D?void 0:D.onErrorContainer)&&void 0!==b?b:T.get("E-90"),background:null!==(S=null==D?void 0:D.background)&&void 0!==S?S:T.get("N-10"),onBackground:null!==(C=null==D?void 0:D.onBackground)&&void 0!==C?C:T.get("N-90"),surface:null!==(k=null==D?void 0:D.surface)&&void 0!==k?k:T.get("N-10"),onSurface:null!==(w=null==D?void 0:D.onSurface)&&void 0!==w?w:T.get("N-90"),surfaceVariant:null!==(A=null==D?void 0:D.surfaceVariant)&&void 0!==A?A:T.get("NV-30"),onSurfaceVariant:null!==(E=null==D?void 0:D.onSurfaceVariant)&&void 0!==E?E:T.get("NV-80"),outline:null!==(M=null==D?void 0:D.outline)&&void 0!==M?M:T.get("NV-60"),inverseOnSurface:null!==(x=null==D?void 0:D.inverseOnSurface)&&void 0!==x?x:T.get("N-10"),inverseSurface:null!==(_=null==D?void 0:D.inverseSurface)&&void 0!==_?_:T.get("N-90"),inversePrimary:null!==(R=null==D?void 0:D.inversePrimary)&&void 0!==R?R:T.get("P-40"),shadow:null!==(B=null==D?void 0:D.shadow)&&void 0!==B?B:T.get("N-0")}}},{key:"androidLight",get:function(){var e,n,t,r,i,l,o,u,c,s,m,d,f,h,g,v,p,y,F,b,S,C,k,w,A,E,M,x,N,_,R,B,D,T,G,P,V,H,I,O,z,q,L,U,j,$,W,J,K,Q,X,Y=this.palettes,Z=this.props.tones,ee=null===(e=this.props.overrides)||void 0===e?void 0:e.androidLight;return{colorAccentPrimary:null!==(t=null!==(n=null==ee?void 0:ee.colorAccentPrimary)&&void 0!==n?n:Y.get("P-90"))&&void 0!==t?t:a(Z.a1.tone(90)),colorAccentPrimaryVariant:null!==(i=null!==(r=null==ee?void 0:ee.colorAccentPrimaryVariant)&&void 0!==r?r:Y.get("P-40"))&&void 0!==i?i:a(Z.a1.tone(40)),colorAccentSecondary:null!==(o=null!==(l=null==ee?void 0:ee.colorAccentSecondary)&&void 0!==l?l:Y.get("S-90"))&&void 0!==o?o:a(Z.a2.tone(90)),colorAccentSecondaryVariant:null!==(c=null!==(u=null==ee?void 0:ee.colorAccentSecondaryVariant)&&void 0!==u?u:Y.get("S-40"))&&void 0!==c?c:a(Z.a2.tone(40)),colorAccentTertiary:null!==(m=null!==(s=null==ee?void 0:ee.colorAccentTertiary)&&void 0!==s?s:Y.get("T-90"))&&void 0!==m?m:a(Z.a3.tone(90)),colorAccentTertiaryVariant:null!==(f=null!==(d=null==ee?void 0:ee.colorAccentTertiaryVariant)&&void 0!==d?d:Y.get("T-40"))&&void 0!==f?f:a(Z.a3.tone(40)),textColorPrimary:null!==(g=null!==(h=null==ee?void 0:ee.textColorPrimary)&&void 0!==h?h:Y.get("N-10"))&&void 0!==g?g:a(Z.n1.tone(10)),textColorSecondary:null!==(p=null!==(v=null==ee?void 0:ee.textColorSecondary)&&void 0!==v?v:Y.get("NV-30"))&&void 0!==p?p:a(Z.n2.tone(30)),textColorTertiary:null!==(F=null!==(y=null==ee?void 0:ee.textColorTertiary)&&void 0!==y?y:Y.get("NV-50"))&&void 0!==F?F:a(Z.n2.tone(50)),textColorPrimaryInverse:null!==(S=null!==(b=null==ee?void 0:ee.textColorPrimaryInverse)&&void 0!==b?b:Y.get("N-95"))&&void 0!==S?S:a(Z.n1.tone(95)),textColorSecondaryInverse:null!==(k=null!==(C=null==ee?void 0:ee.textColorSecondaryInverse)&&void 0!==C?C:Y.get("N-80"))&&void 0!==k?k:a(Z.n1.tone(80)),textColorTertiaryInverse:null!==(A=null!==(w=null==ee?void 0:ee.textColorTertiaryInverse)&&void 0!==w?w:Y.get("N-60"))&&void 0!==A?A:a(Z.n1.tone(60)),colorBackground:null!==(M=null!==(E=null==ee?void 0:ee.colorBackground)&&void 0!==E?E:Y.get("N-95"))&&void 0!==M?M:a(Z.n1.tone(95)),colorBackgroundFloating:null!==(N=null!==(x=null==ee?void 0:ee.colorBackgroundFloating)&&void 0!==x?x:Y.get("N-98"))&&void 0!==N?N:a(Z.n1.tone(98)),colorSurface:null!==(R=null!==(_=null==ee?void 0:ee.colorSurface)&&void 0!==_?_:Y.get("N-98"))&&void 0!==R?R:a(Z.n1.tone(98)),colorSurfaceVariant:null!==(D=null!==(B=null==ee?void 0:ee.colorSurfaceVariant)&&void 0!==B?B:Y.get("N-90"))&&void 0!==D?D:a(Z.n1.tone(90)),colorSurfaceHighlight:null!==(G=null!==(T=null==ee?void 0:ee.colorSurfaceHighlight)&&void 0!==T?T:Y.get("N-100"))&&void 0!==G?G:a(Z.n1.tone(100)),surfaceHeader:null!==(V=null!==(P=null==ee?void 0:ee.surfaceHeader)&&void 0!==P?P:Y.get("N-90"))&&void 0!==V?V:a(Z.n1.tone(90)),underSurface:null!==(I=null!==(H=null==ee?void 0:ee.underSurface)&&void 0!==H?H:Y.get("N-0"))&&void 0!==I?I:a(Z.n1.tone(0)),offState:null!==(z=null!==(O=null==ee?void 0:ee.offState)&&void 0!==O?O:Y.get("N-20"))&&void 0!==z?z:a(Z.n1.tone(20)),accentSurface:null!==(L=null!==(q=null==ee?void 0:ee.accentSurface)&&void 0!==q?q:Y.get("NV-95"))&&void 0!==L?L:a(Z.a2.tone(95)),textPrimaryOnAccent:null!==(j=null!==(U=null==ee?void 0:ee.textPrimaryOnAccent)&&void 0!==U?U:Y.get("N-10"))&&void 0!==j?j:a(Z.n1.tone(10)),textSecondaryOnAccent:null!==(W=null!==($=null==ee?void 0:ee.textSecondaryOnAccent)&&void 0!==$?$:Y.get("NV-30"))&&void 0!==W?W:a(Z.n2.tone(30)),volumeBackground:null!==(K=null!==(J=null==ee?void 0:ee.volumeBackground)&&void 0!==J?J:Y.get("N-25"))&&void 0!==K?K:a(Z.n1.tone(25)),scrim:null!==(X=null!==(Q=null==ee?void 0:ee.scrim)&&void 0!==Q?Q:Y.get("N-80"))&&void 0!==X?X:a(Z.n1.tone(80))}}},{key:"androidDark",get:function(){var e,n,t,r,i,l,o,u,c,s,m,d,f,h,g,v,p,y,F,b,S,C,k,w,A,E,M,x,N,_,R,B,D,T,G,P,V,H,I,O,z,q,L,U,j,$,W,J,K,Q,X,Y=this.palettes,Z=this.props.tones,ee=null===(e=this.props.overrides)||void 0===e?void 0:e.androidDark;return{colorAccentPrimary:null!==(t=null!==(n=null==ee?void 0:ee.colorAccentPrimary)&&void 0!==n?n:Y.get("P-90"))&&void 0!==t?t:a(Z.a1.tone(90)),colorAccentPrimaryVariant:null!==(i=null!==(r=null==ee?void 0:ee.colorAccentPrimaryVariant)&&void 0!==r?r:Y.get("P-70"))&&void 0!==i?i:a(Z.a1.tone(70)),colorAccentSecondary:null!==(o=null!==(l=null==ee?void 0:ee.colorAccentSecondary)&&void 0!==l?l:Y.get("S-90"))&&void 0!==o?o:a(Z.a2.tone(90)),colorAccentSecondaryVariant:null!==(c=null!==(u=null==ee?void 0:ee.colorAccentSecondaryVariant)&&void 0!==u?u:Y.get("S-70"))&&void 0!==c?c:a(Z.a2.tone(70)),colorAccentTertiary:null!==(m=null!==(s=null==ee?void 0:ee.colorAccentTertiary)&&void 0!==s?s:Y.get("T-90"))&&void 0!==m?m:a(Z.a3.tone(90)),colorAccentTertiaryVariant:null!==(f=null!==(d=null==ee?void 0:ee.colorAccentTertiaryVariant)&&void 0!==d?d:Y.get("T-70"))&&void 0!==f?f:a(Z.a3.tone(70)),textColorPrimary:null!==(g=null!==(h=null==ee?void 0:ee.textColorPrimary)&&void 0!==h?h:Y.get("N-95"))&&void 0!==g?g:a(Z.n1.tone(95)),textColorSecondary:null!==(p=null!==(v=null==ee?void 0:ee.textColorSecondary)&&void 0!==v?v:Y.get("NV-80"))&&void 0!==p?p:a(Z.n2.tone(80)),textColorTertiary:null!==(F=null!==(y=null==ee?void 0:ee.textColorTertiary)&&void 0!==y?y:Y.get("NV-60"))&&void 0!==F?F:a(Z.n2.tone(60)),textColorPrimaryInverse:null!==(S=null!==(b=null==ee?void 0:ee.textColorPrimaryInverse)&&void 0!==b?b:Y.get("N-10"))&&void 0!==S?S:a(Z.n1.tone(10)),textColorSecondaryInverse:null!==(k=null!==(C=null==ee?void 0:ee.textColorSecondaryInverse)&&void 0!==C?C:Y.get("N-30"))&&void 0!==k?k:a(Z.n1.tone(30)),textColorTertiaryInverse:null!==(A=null!==(w=null==ee?void 0:ee.textColorTertiaryInverse)&&void 0!==w?w:Y.get("N-50"))&&void 0!==A?A:a(Z.n1.tone(50)),colorBackground:null!==(M=null!==(E=null==ee?void 0:ee.colorBackground)&&void 0!==E?E:Y.get("N-10"))&&void 0!==M?M:a(Z.n1.tone(10)),colorBackgroundFloating:null!==(N=null!==(x=null==ee?void 0:ee.colorBackgroundFloating)&&void 0!==x?x:Y.get("N-10"))&&void 0!==N?N:a(Z.n1.tone(10)),colorSurface:null!==(R=null!==(_=null==ee?void 0:ee.colorSurface)&&void 0!==_?_:Y.get("N-20"))&&void 0!==R?R:a(Z.n1.tone(20)),colorSurfaceVariant:null!==(D=null!==(B=null==ee?void 0:ee.colorSurfaceVariant)&&void 0!==B?B:Y.get("N-30"))&&void 0!==D?D:a(Z.n1.tone(30)),colorSurfaceHighlight:null!==(G=null!==(T=null==ee?void 0:ee.colorSurfaceHighlight)&&void 0!==T?T:Y.get("N-35"))&&void 0!==G?G:a(Z.n1.tone(35)),surfaceHeader:null!==(V=null!==(P=null==ee?void 0:ee.surfaceHeader)&&void 0!==P?P:Y.get("N-30"))&&void 0!==V?V:a(Z.n1.tone(30)),underSurface:null!==(I=null!==(H=null==ee?void 0:ee.underSurface)&&void 0!==H?H:Y.get("N-0"))&&void 0!==I?I:a(Z.n1.tone(0)),offState:null!==(z=null!==(O=null==ee?void 0:ee.offState)&&void 0!==O?O:Y.get("N-20"))&&void 0!==z?z:a(Z.n1.tone(20)),accentSurface:null!==(L=null!==(q=null==ee?void 0:ee.accentSurface)&&void 0!==q?q:Y.get("NV-95"))&&void 0!==L?L:a(Z.a2.tone(95)),textPrimaryOnAccent:null!==(j=null!==(U=null==ee?void 0:ee.textPrimaryOnAccent)&&void 0!==U?U:Y.get("N-10"))&&void 0!==j?j:a(Z.n1.tone(10)),textSecondaryOnAccent:null!==(W=null!==($=null==ee?void 0:ee.textSecondaryOnAccent)&&void 0!==$?$:Y.get("NV-30"))&&void 0!==W?W:a(Z.n2.tone(30)),volumeBackground:null!==(K=null!==(J=null==ee?void 0:ee.volumeBackground)&&void 0!==J?J:Y.get("N-25"))&&void 0!==K?K:a(Z.n1.tone(25)),scrim:null!==(X=null!==(Q=null==ee?void 0:ee.scrim)&&void 0!==Q?Q:Y.get("N-80"))&&void 0!==X?X:a(Z.n1.tone(80))}}},{key:"tonalGroups",get:function(){return Object.assign({primary:this.primaryGroup,secondary:this.secondaryGroup,tertiary:this.tertiaryGroup,neutral:this.neutralGroup,neutralVariant:this.neutralVariantGroup,error:this.errorGroup},this.props.overrides.tonalGroups)}},{key:"primaryGroup",get:function(){return i(this,"primary",this.props.tones.a1)}},{key:"secondaryGroup",get:function(){return i(this,"secondary",this.props.tones.a2)}},{key:"tertiaryGroup",get:function(){return i(this,"tertiary",this.props.tones.a3)}},{key:"neutralGroup",get:function(){return i(this,"neutral",this.props.tones.n1)}},{key:"neutralVariantGroup",get:function(){return i(this,"neutralVariant",this.props.tones.n2)}},{key:"errorGroup",get:function(){return i(this,"error",this.props.tones.error)}},{key:"primary",get:function(){return l("P",this.primaryGroup)}},{key:"secondary",get:function(){return l("S",this.secondaryGroup)}},{key:"tertiary",get:function(){return l("T",this.tertiaryGroup)}},{key:"neutral",get:function(){return l("N",this.neutralGroup)}},{key:"neutralVariant",get:function(){return l("NV",this.neutralVariantGroup)}},{key:"error",get:function(){return l("E",this.errorGroup)}},{key:"palettes",get:function(){var e=[];return e=(e=(e=(e=(e=(e=e.concat(Array.from(this.primary.entries()))).concat(Array.from(this.secondary.entries()))).concat(Array.from(this.tertiary.entries()))).concat(Array.from(this.neutral.entries()))).concat(Array.from(this.neutralVariant.entries()))).concat(Array.from(this.error.entries())),new Map(e)}},{key:"seedValue",get:function(){return this.props.seed}},{key:"source",get:function(){var e,n,r,a,i,l,o=this.palettes,u=this.props.overrides.source;return Object.assign(Object.assign({},u),{seed:this.seedValue,imageUrl:this.imageUrl,primary:null!==(e=null==u?void 0:u.primary)&&void 0!==e?e:t(this,"P",o),secondary:null!==(n=null==u?void 0:u.secondary)&&void 0!==n?n:t(this,"S",o),tertiary:null!==(r=null==u?void 0:u.tertiary)&&void 0!==r?r:t(this,"T",o),neutral:null!==(a=null==u?void 0:u.neutral)&&void 0!==a?a:t(this,"N",o),neutralVariant:null!==(i=null==u?void 0:u.neutralVariant)&&void 0!==i?i:t(this,"NV",o),error:null!==(l=null==u?void 0:u.error)&&void 0!==l?l:t(this,"E",o)})}},{key:"customColors",get:function(){var e,n;return(0,_toConsumableArray2.default)(null!==(n=null===(e=this.props.overrides)||void 0===e?void 0:e.customColors)&&void 0!==n?n:[])}},{key:"save",value:function(){var e={seed:this.seedValue,baseline:this.props.isBaseline,imageUrl:this.imageUrl,customColors:this.customColors,light:this.light,dark:this.dark,androidLight:N.enableAndroid?this.androidLight:void 0,androidDark:N.enableAndroid?this.androidDark:void 0,primary:this.primaryGroup,secondary:this.secondaryGroup,tertiary:this.tertiaryGroup,neutral:this.neutralGroup,neutralVariant:this.neutralVariantGroup,error:this.errorGroup,styles:this.styles,source:this.source};return console.debug("saved theme",e),e}}]),o}()),c=function(){function e(n,t){(0,_classCallCheck2.default)(this,e),this.hue=n,this.chroma=t,this.cache=new Map}return(0,_createClass2.default)(e,[{key:"tone",value:function(e){var n=this.cache.get(e);return void 0===n&&(n=new b(this.hue,this.chroma,e).toInt(),this.cache.set(e,n)),n}}]),e}(),s=function(e){return.0031308>=e?12.92*e:1.055*Math.pow(e,1/2.4)-.055},m=function(e){return(-16777216|(255&e[0])<<16|(255&e[1])<<8|255&e[2])>>>0},d=function(e,n,t){return e/=100,n/=100,t/=100,m([Math.round(g(255,255*s(3.2406*e+-1.5372*n+-.4986*t))),Math.round(g(255,255*s(-.9689*e+1.8758*n+.0415*t))),Math.round(g(255,255*s(.0557*e+-.204*n+1.057*t)))])},f=function(e,n,t){var r=t*Math.PI/180,a=1/.0228*Math.log(1+.0228*n*A.fLRoot);return new S(t,n,e,4/A.c*Math.sqrt(e/100)*(A.aw+4)*A.fLRoot,50*Math.sqrt(n/Math.sqrt(e/100)*A.c/(A.aw+4)),(1+100*.007)*e/(1+.007*e),a*Math.cos(r),a*Math.sin(r))},h=function(e){var n=Math.pow((0===e.chroma||0===e.j?0:e.chroma/Math.sqrt(e.j/100))/Math.pow(1.64-Math.pow(.29,A.n),.73),1/.9),t=e.hue*Math.PI/180,r=A.aw*Math.pow(e.j/100,1/A.c/A.z)/A.nbb,a=Math.sin(t),i=Math.cos(t),l=23*(r+.305)*n/(5e4/13*(Math.cos(t+2)+3.8)*5.75*A.nc*A.ncb+11*n*i+108*n*a),o=l*i,u=l*a,c=(460*r+451*o+288*u)/1403,s=(460*r-891*o-261*u)/1403,m=(460*r-220*o-6300*u)/1403,f=100/A.fl*C(c)*Math.pow(Math.max(0,27.13*Math.abs(c)/(400-Math.abs(c))),1/.42)/A.rgbD[0],h=100/A.fl*C(s)*Math.pow(Math.max(0,27.13*Math.abs(s)/(400-Math.abs(s))),1/.42)/A.rgbD[1],g=100/A.fl*C(m)*Math.pow(Math.max(0,27.13*Math.abs(m)/(400-Math.abs(m))),1/.42)/A.rgbD[2];return d(1.86206786*f-1.01125463*h+.14918677*g,.38752654*f+.62144744*h-.00897398*g,-.0158415*f-.03412294*h+1.04996444*g)},g=function(e,n){return Math.min(Math.max(n,0),e)},v=function(e){return 0>e?e%360+360:360<=e?e%360:e},p=function(e,n,t){if(1>n||0>=Math.round(t)||100<=Math.round(t))return o(t);e=v(e);for(var r=n,a=n,i=0,l=!0,u=null;.4<=Math.abs(i-r);){for(var c=e,s=a,m=t,d=0,g=100,p=void 0,y=1e3,b=1e3,S=null;.01<Math.abs(d-g);){var C=h(f(p=d+(g-d)/2,s,c)),k=F(C),w=Math.abs(m-k);if(.2>w){var A=M(C),E=A.distance(f(A.j,A.chroma,c));1>=E&&E<=b&&(y=w,b=E,S=A)}if(0===y&&0===b)break;k<m?d=p:g=p}var x=S;if(l){if(null!=x)return h(x);l=!1}else null===x?r=a:(u=x,i=a);a=i+(r-i)/2}return null===u?o(t):h(u)},y=function(e,n){var t=M(n),r=F(n);e.internalHue=t.hue,e.internalChroma=t.chroma,e.internalTone=r},F=function(e){var n=21.26*E(((16711680&e)>>16)/255)+71.52*E(((65280&e)>>8)/255)+7.22*E((255&e)/255);return(n/=100)<=216/24389?24389/27*n:116*Math.pow(n,1/3)-16},b=function(){function e(n,t,r){(0,_classCallCheck2.default)(this,e),this.internalHue=n,this.internalChroma=t,this.internalTone=r,y(this,this.toInt())}return(0,_createClass2.default)(e,[{key:"toInt",value:function(){return p(v(this.internalHue),this.internalChroma,g(100,this.internalTone))}},{key:"hue",get:function(){return this.internalHue},set:function(e){y(this,p(v(v(e)),this.internalChroma,g(100,this.internalTone)))}},{key:"chroma",get:function(){return this.internalChroma},set:function(e){y(this,p(v(this.internalHue),e,g(100,this.internalTone)))}},{key:"tone",get:function(){return this.internalTone},set:function(e){y(this,p(v(this.internalHue),this.internalChroma,g(100,e)))}}]),e}(),S=function(){function e(n,t,r,a,i,l,o,u){(0,_classCallCheck2.default)(this,e),this.hue=n,this.chroma=t,this.j=r,this.q=a,this.s=i,this.jstar=l,this.astar=o,this.bstar=u}return(0,_createClass2.default)(e,[{key:"distance",value:function(e){var n=this.jstar-e.jstar,t=this.astar-e.astar,r=this.bstar-e.bstar;return 1.41*Math.pow(Math.sqrt(n*n+t*t+r*r),.63)}}]),e}(),C=function(e){return 0>e?-1:0===e?0:1},k=(0,_createClass2.default)((function e(n,t,r,a,i,l,o,u,c,s){(0,_classCallCheck2.default)(this,e),this.n=n,this.aw=t,this.nbb=r,this.ncb=a,this.c=i,this.nc=l,this.rgbD=o,this.fl=u,this.fLRoot=c,this.z=s})),w=[95.047,100,108.883],A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200/Math.PI*100*Math.pow(66/116,3)/100,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=.401288*e[0]+.650173*e[1]+-.051461*e[2],l=-.250268*e[0]+1.204414*e[1]+.045854*e[2],o=-.002079*e[0]+.048952*e[1]+.953127*e[2],u=.8+r/10;if(.9<=u)var c=10*(u-.9),s=.59*(1-c)+.69*c;else{var m=10*(u-.8);s=.525*(1-m)+.59*m}var d=a?1:u*(1-1/3.6*Math.exp((-n-42)/92)),f=[100/i*(d=1<d?1:0>d?0:d)+1-d,100/l*d+1-d,100/o*d+1-d],h=1/(5*n+1),g=h*h*h*h,v=1-g,p=g*n+.1*v*v*Math.cbrt(5*n),y=(8<t?100*Math.pow((t+16)/116,3):t/(24389/27)*100)/e[1],F=.725/Math.pow(y,.2),b=[Math.pow(p*f[0]*i/100,.42),Math.pow(p*f[1]*l/100,.42),Math.pow(p*f[2]*o/100,.42)],S=[400*b[0]/(b[0]+27.13),400*b[1]/(b[1]+27.13),400*b[2]/(b[2]+27.13)];return new k(y,(2*S[0]+S[1]+.05*S[2])*F,F,F,s,u,f,p,Math.pow(p,.25),1.48+Math.sqrt(y))}(),E=function(e){return.04045>=e?e/12.92:Math.pow((e+.055)/1.055,2.4)},M=function(e){var n=100*E(((16711680&e)>>16)/255),t=100*E(((65280&e)>>8)/255),r=100*E((255&e)/255),a=.41233895*n+.35762064*t+.18051042*r,i=.2126*n+.7152*t+.0722*r,l=.01932141*n+.11916382*t+.95034478*r,o=A.rgbD[0]*(.401288*a+.650173*i-.051461*l),u=A.rgbD[1]*(-.250268*a+1.204414*i+.045854*l),c=A.rgbD[2]*(-.002079*a+.048952*i+.953127*l),s=Math.pow(A.fl*Math.abs(o)/100,.42),m=Math.pow(A.fl*Math.abs(u)/100,.42),d=Math.pow(A.fl*Math.abs(c)/100,.42),f=400*C(o)*s/(s+27.13),h=400*C(u)*m/(m+27.13),g=400*C(c)*d/(d+27.13),v=(11*f+-12*h+g)/11,p=(f+h-2*g)/9,y=180*Math.atan2(p,v)/Math.PI,F=0>y?y+360:360<=y?y-360:y,b=F*Math.PI/180,k=100*Math.pow((40*f+20*h+g)/20*A.nbb/A.aw,A.c*A.z),w=Math.pow(5e4/13*.25*(Math.cos((20.14>F?F+360:F)*Math.PI/180+2)+3.8)*A.nc*A.ncb*Math.sqrt(v*v+p*p)/((20*f+20*h+21*g)/20+.305),.9)*Math.pow(1.64-Math.pow(.29,A.n),.73),M=w*Math.sqrt(k/100),x=1/.0228*Math.log(1+.0228*M*A.fLRoot);return new S(F,M,k,4/A.c*Math.sqrt(k/100)*(A.aw+4)*A.fLRoot,50*Math.sqrt(w*A.c/(A.aw+4)),(1+100*.007)*k/(1+.007*k),x*Math.cos(b),x*Math.sin(b))},x=(0,_createClass2.default)((function e(n){(0,_classCallCheck2.default)(this,e);var t=function(e){var n=M(e);return new b(n.hue,n.chroma,F(e))}(n),r=t.hue;this.a1=new c(r,Math.max(48,t.chroma)),this.a2=new c(r,16),this.a3=new c(r+60,24),this.n1=new c(r,4),this.n2=new c(r,8),this.error=new c(25,84)})),N=new(function(){function e(){(0,_classCallCheck2.default)(this,e)}return(0,_createClass2.default)(e,[{key:"internal",get:function(){return!1}},{key:"is3p",get:function(){return!this.internal}},{key:"is1p",get:function(){return this.internal}},{key:"enableDsp",get:function(){return!this.is1p}},{key:"enableAndroid",get:function(){return this.is1p}},{key:"enableWebExport",get:function(){return this.is3p}},{key:"enableExtendedColors",get:function(){return!0}},{key:"enableColorShift",get:function(){return this.is1p}}]),e}()),_=(N.enableDsp,N.enableAndroid,N.enableWebExport,N.enableColorShift,function(e){var n=N.is3p;console.debug("theme adapter from color");var t=new x(function(e){var n=3===(e=e.replace("#","")).length,t=6===e.length,r=8===e.length;if(!n&&!t&&!r)throw Error("unexpected hex "+e);var a=0,i=0,l=0;return n?(a=parseInt(e.slice(0,1).repeat(2),16),i=parseInt(e.slice(1,2).repeat(2),16),l=parseInt(e.slice(2,3).repeat(2),16)):t?(a=parseInt(e.slice(0,2),16),i=parseInt(e.slice(2,4),16),l=parseInt(e.slice(4,6),16)):r&&(a=parseInt(e.slice(2,4),16),i=parseInt(e.slice(4,6),16),l=parseInt(e.slice(6,8),16)),(-16777216|(255&a)<<16|(255&i)<<8|255&l)>>>0}(e));return new u({tones:t,seed:e,is3p:n,overrides:{},blend:!1,isBaseline:!1})}),R=function(e){var n,t=(65280&e)>>8,r=255&e,a=[((16711680&e)>>16).toString(16),t.toString(16),r.toString(16)],i=_createForOfIteratorHelper(a.entries());try{for(i.s();!(n=i.n()).done;){var l=(0,_slicedToArray2.default)(n.value,2),o=l[0],u=l[1],c=o,s=u;1===s.length&&(a[c]="0"+s)}}catch(e){i.e(e)}finally{i.f()}return"#"+a.join("")},B=function(e){var n,t=0,r=_createForOfIteratorHelper(e.values());try{for(r.s();!(n=r.n()).done;){t+=n.value}}catch(e){r.e(e)}finally{r.f()}var a,i=new Map,l=new Map,o=Array(360).fill(0),u=_createForOfIteratorHelper(e.entries());try{for(u.s();!(a=u.n()).done;){var c=(0,_slicedToArray2.default)(a.value,2),s=c[0],m=c[1],d=s,f=m/t;i.set(d,f);var h=M(d);l.set(d,h),o[Math.round(h.hue)]+=f}}catch(e){u.e(e)}finally{u.f()}var g,p=new Map,y=_createForOfIteratorHelper(l.entries());try{for(y.s();!(g=y.n()).done;){for(var b=(0,_slicedToArray2.default)(g.value,2),S=b[0],C=b[1],k=S,w=Math.round(C.hue),A=0,E=w-15;E<w+15;E++)A+=o[v(E)];p.set(k,A)}}catch(e){y.e(e)}finally{y.f()}var x,N=new Map,_=_createForOfIteratorHelper(l.entries());try{for(_.s();!(x=_.n()).done;){var R=(0,_slicedToArray2.default)(x.value,2),B=R[0],D=R[1],T=B,G=D,P=70*p.get(T);N.set(T,P+(G.chroma-48)*(48>G.chroma?.1:.3))}}catch(e){_.e(e)}finally{_.f()}var V,H=function(e,n){var t,r=[],a=_createForOfIteratorHelper(n.entries());try{for(a.s();!(t=a.n()).done;){var i=(0,_slicedToArray2.default)(t.value,2),l=i[0],o=i[1],u=l,c=o,s=e.get(u);15<=c.chroma&&10<=F(u)&&.01<=s&&r.push(u)}}catch(e){a.e(e)}finally{a.f()}return r}(p,l),I=new Map,O=_createForOfIteratorHelper(H);try{for(O.s();!(V=O.n()).done;){var z,q=V.value,L=!1,U=l.get(q).hue,j=_createForOfIteratorHelper(I);try{for(j.s();!(z=j.n()).done;){var $=(0,_slicedToArray2.default)(z.value,1)[0],W=l.get($).hue;if(15>180-Math.abs(Math.abs(U-W)-180)){L=!0;break}}}catch(e){j.e(e)}finally{j.f()}L||I.set(q,N.get(q))}}catch(e){O.e(e)}finally{O.f()}var J=Array.from(I.entries());J.sort((function(e,n){return n[1]-e[1]}));var K=J.map((function(e){return e[0]}));return 0===K.length&&K.push(4282549748),K},D=(0,_createClass2.default)((function e(){(0,_classCallCheck2.default)(this,e),this.index=this.distance=-1})),T=function(e){var n,t=216/24389,r=24389/27,a=100*E(((16711680&e)>>16)/255),i=100*E(((65280&e)>>8)/255),l=100*E((255&e)/255),o=(.2126*a+.7152*i+.0722*l)/w[1];n=o>t?Math.pow(o,1/3):(r*o+16)/116;var u=(.41233895*a+.35762064*i+.18051042*l)/w[0],c=(.01932141*a+.11916382*i+.95034478*l)/w[2];return[116*n-16,500*((u>t?Math.pow(u,1/3):(r*u+16)/116)-n),200*(n-(c>t?Math.pow(c,1/3):(r*c+16)/116))]},G=function(){function e(){(0,_classCallCheck2.default)(this,e)}return(0,_createClass2.default)(e,[{key:"toInt",value:function(e){var n=e[0],t=216/24389,r=24389/27,a=(n+16)/116,i=e[1]/500+a,l=a-e[2]/200,o=i*i*i,u=l*l*l,c=[(o>t?o:(116*i-16)/r)*w[0],(8<n?a*a*a:n/r)*w[1],(u>t?u:(116*l-16)/r)*w[2]];return d(c[0],c[1],c[2])}},{key:"distance",value:function(e,n){var t=e[0]-n[0],r=e[1]-n[1],a=e[2]-n[2];return t*t+r*r+a*a}}]),e}(),P=(0,_createClass2.default)((function e(n){(0,_classCallCheck2.default)(this,e),this.resultCount=n})),V=function(e,n){var t=e.volume(n,e.momentsR),r=e.volume(n,e.momentsG),a=e.volume(n,e.momentsB);return e.moments[L(n.r1,n.g1,n.b1)]-e.moments[L(n.r1,n.g1,n.b0)]-e.moments[L(n.r1,n.g0,n.b1)]+e.moments[L(n.r1,n.g0,n.b0)]-e.moments[L(n.r0,n.g1,n.b1)]+e.moments[L(n.r0,n.g1,n.b0)]+e.moments[L(n.r0,n.g0,n.b1)]-e.moments[L(n.r0,n.g0,n.b0)]-(t*t+r*r+a*a)/e.volume(n,e.weights)},H=(0,_createClass2.default)((function e(n,t){(0,_classCallCheck2.default)(this,e),this.cutLocation=n,this.maximum=t})),I=function(e,n,t,r,a,i,l,o,u){for(var c,s,m,d,f=e.bottom(n,t,e.momentsR),h=e.bottom(n,t,e.momentsG),g=e.bottom(n,t,e.momentsB),v=e.bottom(n,t,e.weights),p=0,y=-1,F=r;F<a;F++)if(c=f+e.top(n,t,F,e.momentsR),s=h+e.top(n,t,F,e.momentsG),m=g+e.top(n,t,F,e.momentsB),0!==(d=v+e.top(n,t,F,e.weights))){var b=c*c+s*s+m*m,S=1*d,C=b/S;c=i-c,s=l-s,m=o-m,0!==(d=u-d)&&((C+=(b=c*c+s*s+m*m)/(S=1*d))>p&&(p=C,y=F))}return new H(y,p)},O=function(e,n,t){var r,a=e.volume(n,e.momentsR),i=e.volume(n,e.momentsG),l=e.volume(n,e.momentsB),o=e.volume(n,e.weights),u=I(e,n,"red",n.r0+1,n.r1,a,i,l,o),c=I(e,n,"green",n.g0+1,n.g1,a,i,l,o),s=I(e,n,"blue",n.b0+1,n.b1,a,i,l,o),m=u.maximum,d=c.maximum,f=s.maximum;if(m>=d&&m>=f){if(0>u.cutLocation)return!1;r="red"}else r=d>=m&&d>=f?"green":"blue";switch(t.r1=n.r1,t.g1=n.g1,t.b1=n.b1,r){case"red":n.r1=u.cutLocation,t.r0=n.r1,t.g0=n.g0,t.b0=n.b0;break;case"green":n.g1=c.cutLocation,t.r0=n.r0,t.g0=n.g1,t.b0=n.b0;break;case"blue":n.b1=s.cutLocation,t.r0=n.r0,t.g0=n.g0,t.b0=n.b1;break;default:throw Error("unexpected direction "+r)}return n.vol=(n.r1-n.r0)*(n.g1-n.g0)*(n.b1-n.b0),t.vol=(t.r1-t.r0)*(t.g1-t.g0)*(t.b1-t.b0),!0},z=(0,_createClass2.default)((function e(){(0,_classCallCheck2.default)(this,e),this.vol=this.b1=this.b0=this.g1=this.g0=this.r1=this.r0=0})),q=function(e){e.cubes=Array.from({length:256}).fill(0).map((function(){return new z}));var n=Array.from({length:256}).fill(0);e.cubes[0].r0=0,e.cubes[0].g0=0,e.cubes[0].b0=0,e.cubes[0].r1=32,e.cubes[0].g1=32,e.cubes[0].b1=32;for(var t=256,r=0,a=1;256>a;a++){O(e,e.cubes[r],e.cubes[a])?(n[r]=1<e.cubes[r].vol?V(e,e.cubes[r]):0,n[a]=1<e.cubes[a].vol?V(e,e.cubes[a]):0):(n[r]=0,a--),r=0;for(var i=n[0],l=1;l<=a;l++)n[l]>i&&(i=n[l],r=l);if(0>=i){t=a+1;break}}return new P(t)},L=function(e,n,t){return(e<<10)+(e<<6)+e+(n<<5)+n+t},U=function(){function e(){(0,_classCallCheck2.default)(this,e),this.weights=[],this.momentsR=[],this.momentsG=[],this.momentsB=[],this.moments=[],this.cubes=[]}return(0,_createClass2.default)(e,[{key:"volume",value:function(e,n){return n[L(e.r1,e.g1,e.b1)]-n[L(e.r1,e.g1,e.b0)]-n[L(e.r1,e.g0,e.b1)]+n[L(e.r1,e.g0,e.b0)]-n[L(e.r0,e.g1,e.b1)]+n[L(e.r0,e.g1,e.b0)]+n[L(e.r0,e.g0,e.b1)]-n[L(e.r0,e.g0,e.b0)]}},{key:"bottom",value:function(e,n,t){switch(n){case"red":return-t[L(e.r0,e.g1,e.b1)]+t[L(e.r0,e.g1,e.b0)]+t[L(e.r0,e.g0,e.b1)]-t[L(e.r0,e.g0,e.b0)];case"green":return-t[L(e.r1,e.g0,e.b1)]+t[L(e.r1,e.g0,e.b0)]+t[L(e.r0,e.g0,e.b1)]-t[L(e.r0,e.g0,e.b0)];case"blue":return-t[L(e.r1,e.g1,e.b0)]+t[L(e.r1,e.g0,e.b0)]+t[L(e.r0,e.g1,e.b0)]-t[L(e.r0,e.g0,e.b0)];default:throw Error("unexpected direction $direction")}}},{key:"top",value:function(e,n,t,r){switch(n){case"red":return r[L(t,e.g1,e.b1)]-r[L(t,e.g1,e.b0)]-r[L(t,e.g0,e.b1)]+r[L(t,e.g0,e.b0)];case"green":return r[L(e.r1,t,e.b1)]-r[L(e.r1,t,e.b0)]-r[L(e.r0,t,e.b1)]+r[L(e.r0,t,e.b0)];case"blue":return r[L(e.r1,e.g1,t)]-r[L(e.r1,e.g0,t)]-r[L(e.r0,e.g1,t)]+r[L(e.r0,e.g0,t)];default:throw Error("unexpected direction $direction")}}}]),e}(),j=function(e){if(e instanceof $){if(!(e instanceof W))throw Error("Unexpected type when unwrapping SafeUrl");var n=e.privateDoNotAccessOrElseWrappedUrl}else n=unwrap(e);return n},$=(0,_createClass2.default)((function e(){(0,_classCallCheck2.default)(this,e)})),W=function(e){(0,_inherits2.default)(t,e);var n=_createSuper(t);function t(e){var r;return(0,_classCallCheck2.default)(this,t),(r=n.call(this)).privateDoNotAccessOrElseWrappedUrl=e,r}return(0,_createClass2.default)(t,[{key:"toString",value:function(){return this.privateDoNotAccessOrElseWrappedUrl}}]),t}($),J=function(e){var n=e.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i);if(2!==(null==n?void 0:n.length)||!(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(n[1])||/^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(n[1])||/^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(n[1])))throw Error("unsafe blob MIME type: ".concat(e.type));return new W(URL.createObjectURL(e))},K=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(n){var t,r,a;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=J(new Blob([n],{type:"image/png"})),e.next=3,new Promise((function(e,n){var r=new Image;r.onload=function(){e(r)},r.onerror=function(){n()},r.src=j(t)}));case 3:return r=e.sent,(a=document.createElement("canvas").getContext("2d")).canvas.width=112,a.canvas.height=112,a.drawImage(r,0,0,r.width,r.height,0,0,a.canvas.width,a.canvas.height),e.abrupt("return",a.getImageData(0,0,r.width,r.height));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Q=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(n){var t,r,a,i;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Uint8Array(n),e.next=3,K(t);case 3:for(r=e.sent,a=[],i=0;i<r.data.length;i+=4)255>r.data[i+3]||a.push(m([r.data[i],r.data[i+1],r.data[i+2]]));return e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),X=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(n){var t,r,a,i,l,o,u,c,s,m,d,f,h,g,v,p,y,F,b,S,C,k,w,A,E,M,x,N,_,P,V,H,I,O,z,j,$,W,J,K,X,Y,Z,ee,ne,te,re,ae,ie,le,oe,ue,ce,se,me,de,fe,he,ge,ve,pe,ye,Fe,be,Se,Ce,ke,we,Ae,Ee,Me,xe,Ne,_e,Re,Be,De,Te,Ge,Pe,Ve,He,Ie,Oe,ze,qe,Le,Ue,je,$e,We,Je,Ke,Qe,Xe,Ye,Ze;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof n){e.next=8;break}return e.next=3,fetch(n);case 3:return e.next=5,e.sent.arrayBuffer();case 5:e.t0=e.sent,e.next=9;break;case 8:e.t0=n;case 9:return t=e.t0,e.next=12,Q(t);case 12:for(r=e.sent,(a=new U).weights=Array.from({length:35937}).fill(0),a.momentsR=Array.from({length:35937}).fill(0),a.momentsG=Array.from({length:35937}).fill(0),a.momentsB=Array.from({length:35937}).fill(0),a.moments=Array.from({length:35937}).fill(0),o=new Map,u=0;u<r.length;u++)255>(4278190080&(c=r[u]))>>24>>>0||o.set(c,(null!==(l=o.get(c))&&void 0!==l?l:0)+1);s=_createForOfIteratorHelper(o.entries());try{for(s.s();!(m=s.n()).done;)d=(0,_slicedToArray2.default)(m.value,2),f=d[0],h=d[1],v=h,b=L(1+((p=(16711680&(g=f))>>16)>>3),1+((y=(65280&g)>>8)>>3),1+((F=255&g)>>3)),a.weights[b]=(null!==(i=a.weights[b])&&void 0!==i?i:0)+v,a.momentsR[b]+=v*p,a.momentsG[b]+=v*y,a.momentsB[b]+=v*F,a.moments[b]+=v*(p*p+y*y+F*F)}catch(e){s.e(e)}finally{s.f()}for(S=1;33>S;S++)for(C=Array.from({length:33}).fill(0),k=Array.from({length:33}).fill(0),w=Array.from({length:33}).fill(0),A=Array.from({length:33}).fill(0),E=Array.from({length:33}).fill(0),M=1;33>M;M++)for(x=0,N=0,_=0,P=0,V=0,H=1;33>H;H++)I=L(S,M,H),x+=a.weights[I],N+=a.momentsR[I],_+=a.momentsG[I],P+=a.momentsB[I],V+=a.moments[I],C[H]+=x,k[H]+=N,w[H]+=_,A[H]+=P,E[H]+=V,O=L(S-1,M,H),a.weights[I]=a.weights[O]+C[H],a.momentsR[I]=a.momentsR[O]+k[H],a.momentsG[I]=a.momentsG[O]+w[H],a.momentsB[I]=a.momentsB[O]+A[H],a.moments[I]=a.moments[O]+E[H];for(z=q(a).resultCount,j=[],$=0;$<z;++$)W=a.cubes[$],0<(J=a.volume(W,a.weights))&&(K=Math.round(a.volume(W,a.momentsR)/J),X=Math.round(a.volume(W,a.momentsG)/J),Y=Math.round(a.volume(W,a.momentsB)/J),j.push(-16777216|(255&K)<<16|(255&X)<<8|255&Y));for(Z=new Map,ee=[],ne=[],te=new G,re=0,ae=0;ae<r.length;ae++)ie=r[ae],void 0===(le=Z.get(ie))?(re++,ee.push(T(ie)),ne.push(ie),Z.set(ie,1)):Z.set(ie,le+1);for(oe=[],ue=0;ue<re;ue++)void 0!==(ce=Z.get(ne[ue]))&&(oe[ue]=ce);for(se=Math.min(256,re),0<j.length&&(se=Math.min(se,j.length)),me=[],de=0;de<j.length;de++)me.push(T(j[de]));if(fe=se-me.length,0===j.length&&0<fe)for(he=0;he<fe;he++)me.push([100*Math.random(),201*Math.random()-100,201*Math.random()-100]);for(ge=[],ve=0;ve<re;ve++)ge.push(Math.floor(Math.random()*se));for(pe=[],ye=0;ye<se;ye++)for(pe.push([]),Fe=0;Fe<se;Fe++)pe[ye].push(0);for(be=[],Se=0;Se<se;Se++)for(be.push([]),Ce=0;Ce<se;Ce++)be[Se].push(new D);for(ke=[],we=0;we<se;we++)ke.push(0);Ae=0;case 47:if(!(10>Ae)){e.next=76;break}for(Ee=0;Ee<se;Ee++){for(Me=Ee+1;Me<se;Me++)xe=te.distance(me[Ee],me[Me]),be[Me][Ee].distance=xe,be[Me][Ee].index=Ee,be[Ee][Me].distance=xe,be[Ee][Me].index=Me;for(be[Ee].sort(),Ne=0;Ne<se;Ne++)pe[Ee][Ne]=be[Ee][Ne].index}_e=0,Re=0;case 51:if(!(Re<re)){e.next=67;break}Be=ee[Re],De=ge[Re],Te=te.distance(Be,me[De]),Ge=Te,Pe=-1,Ve=0;case 55:if(!(Ve<se)){e.next=63;break}if(!(be[De][Ve].distance>=4*Te)){e.next=58;break}return e.abrupt("continue",60);case 58:(He=te.distance(Be,me[Ve]))<Ge&&(Ge=He,Pe=Ve);case 60:Ve++,e.next=55;break;case 63:-1!==Pe&&3<Math.abs(Math.sqrt(Ge)-Math.sqrt(Te))&&(_e++,ge[Re]=Pe);case 64:Re++,e.next=51;break;case 67:if(0!==_e||0===Ae){e.next=69;break}return e.abrupt("break",76);case 69:for(Ie=Array(se).fill(0),Oe=Array(se).fill(0),ze=Array(se).fill(0),qe=0;qe<se;qe++)ke[qe]=0;for(Le=0;Le<re;Le++)Ue=ge[Le],je=ee[Le],$e=oe[Le],ke[Ue]+=$e,Ie[Ue]+=je[0]*$e,Oe[Ue]+=je[1]*$e,ze[Ue]+=je[2]*$e;for(We=0;We<se;We++)Je=ke[We],me[We]=0===Je?[0,0,0]:[Ie[We]/Je,Oe[We]/Je,ze[We]/Je];case 73:Ae++,e.next=47;break;case 76:Ke=new Map,Qe=0;case 78:if(!(Qe<se)){e.next=87;break}if(0!==(Xe=ke[Qe])){e.next=82;break}return e.abrupt("continue",84);case 82:Ye=te.toInt(me[Qe]),Ke.has(Ye)||Ke.set(Ye,Xe);case 84:Qe++,e.next=78;break;case 87:return Ze=B(Ke),e.abrupt("return",R(Ze[0]));case 89:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),Y=function(){var e=(0,_asyncToGenerator2.default)(_regenerator.default.mark((function e(n){var t,r,a,i;return _regenerator.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!/\#[a-fA-F0-9]{6}/.test(n)){e.next=3;break}return t=_(n),e.abrupt("return",{light:t.light,dark:t.dark});case 3:return r=n,(n instanceof Blob||n instanceof File)&&(r=URL.createObjectURL(n)),n.target&&n.target.files[0]&&(r=URL.createObjectURL(n.target.files[0])),n.files&&n.files[0]&&(r=URL.createObjectURL(n.files[0])),e.next=9,X(r);case 9:return a=e.sent,i=_(a),e.abrupt("return",{light:i.light,dark:i.dark});case 12:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();window.materialDynamicColors=Y}();
},{"@babel/runtime/helpers/interopRequireDefault":"../node_modules/@babel/runtime/helpers/interopRequireDefault.js","@babel/runtime/regenerator":"../node_modules/@babel/runtime/regenerator/index.js","@babel/runtime/helpers/asyncToGenerator":"../node_modules/@babel/runtime/helpers/asyncToGenerator.js","@babel/runtime/helpers/slicedToArray":"../node_modules/@babel/runtime/helpers/slicedToArray.js","@babel/runtime/helpers/inherits":"../node_modules/@babel/runtime/helpers/inherits.js","@babel/runtime/helpers/possibleConstructorReturn":"../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js","@babel/runtime/helpers/getPrototypeOf":"../node_modules/@babel/runtime/helpers/getPrototypeOf.js","@babel/runtime/helpers/toConsumableArray":"../node_modules/@babel/runtime/helpers/toConsumableArray.js","@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js"}],"../node_modules/material-dynamic-colors/index.js":[function(require,module,exports) {
"use strict";

require("material-dynamic-colors/dist/npm/material-dynamic-colors.min.js");
},{"material-dynamic-colors/dist/npm/material-dynamic-colors.min.js":"../node_modules/material-dynamic-colors/dist/npm/material-dynamic-colors.min.js"}],"shared/init.js":[function(require,module,exports) {
window.beercss = {};
window.addEventListener("load", function () {
  var url = "/sw.js";
  navigator.serviceWorker.register(url);
});
window.addEventListener("beforeinstallprompt", function (e) {
  e.preventDefault();
  window.beercss.installEvent = e;
});
},{}],"../node_modules/vue/dist/vue.runtime.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: undefined !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: undefined !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if (undefined !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if (undefined !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if (undefined !== 'production' && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if (undefined !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    undefined !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if (undefined !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    undefined !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if (undefined !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      undefined !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    undefined !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (undefined !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && undefined !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if (undefined !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if (undefined !== 'production') {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if (undefined !== 'production') {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if (undefined !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if (undefined !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if (undefined !== 'production' && // skip validation for weex recycle-list child component props
  !false) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if (undefined !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i], vm);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  var haveExpectedTypes = expectedTypes.some(function (t) {
    return t;
  });

  if (!valid && haveExpectedTypes) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol|BigInt)$/;

function assertType(value, type, vm) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    try {
      valid = value instanceof type;
    } catch (e) {
      warn('Invalid prop type: "' + String(type) + '" is not a constructor', vm);
      valid = false;
    }
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && isExplicable(typeof value) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + styleValue(value, expectedType);
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + styleValue(value, receivedType) + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

var EXPLICABLE_TYPES = ['string', 'number', 'boolean'];

function isExplicable(value) {
  return EXPLICABLE_TYPES.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if (undefined !== 'production') {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if (undefined !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if (undefined !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
      undefined !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if (undefined !== 'production') {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (undefined !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if (undefined !== 'production') {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if (undefined !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      undefined !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      undefined !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (undefined !== 'production' && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (undefined !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if (undefined !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    undefined !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if (undefined !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if (undefined !== 'production' && isDef(data) && isDef(data.nativeOn) && data.tag !== 'component') {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if (undefined !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if (undefined !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if (undefined !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
      undefined !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject(undefined !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if (undefined !== 'production') {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if (undefined !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if (undefined !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if (undefined !== 'production') {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (undefined !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if (undefined !== 'production') {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if (undefined !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if (undefined !== 'production' && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = undefined !== 'production' ? expOrFn.toString() : ''; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
      undefined !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        var info = "callback for watcher \"" + this.expression + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if (undefined !== 'production') {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    } // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
    undefined !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (undefined !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
      undefined !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (undefined !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (undefined !== 'production') {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      } else if (vm.$options.methods && key in vm.$options.methods) {
        warn("The computed property \"" + key + "\" is already defined as a method.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if (undefined !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if (undefined !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if (undefined !== 'production') {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      var info = "callback for immediate watcher \"" + watcher.expression + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if (undefined !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if (undefined !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    } // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if (undefined !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if (undefined !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if (undefined !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if (undefined !== 'production' && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var entry = cache[key];

    if (entry) {
      var name = entry.name;

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];

  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;

      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance
        };
        keys.push(keyToCache); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }

        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if (undefined !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.14';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
      undefined !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if (undefined !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if (undefined !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (undefined !== 'production') {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if (undefined !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if (undefined !== 'production') {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if (undefined !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (undefined !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (undefined !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if (undefined !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if (undefined !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if (undefined !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
    undefined !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if (undefined !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if (undefined !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if (undefined !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (undefined !== 'production' && undefined !== 'test') {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if (undefined !== 'production' && undefined !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


var _default = Vue;
exports.default = _default;
},{}],"shared/router.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var redirect = function redirect(url, component, layout) {
  var element = layout ? document.getElementById("layout") || document.getElementById("body") : document.getElementById("body");
  element.innerHTML = "<div id='app'></div>";
  document.body.scrollTop = 0;
  return new _vue.default({
    el: '#app',
    mounted: function mounted() {
      var event = new CustomEvent("redirected", {
        detail: {
          url: page.current
        }
      });
      window.dispatchEvent(event);
      if (layout && element.id == "body") return redirect(url, component, layout);
    },
    render: function render(h) {
      return h(layout && element.id == "body" ? layout : component);
    }
  });
};

var _default = function _default(url, component, layout) {
  page(url, function () {
    return redirect(url, component, layout);
  });
  page.start();
};

exports.default = _default;
},{"vue":"../node_modules/vue/dist/vue.runtime.esm.js"}],"home/selectionForButtons.vue":[function(require,module,exports) {
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
var _default2 = {
  props: {
    context: {
      type: String,
      default: "buttons"
    },
    colors: {
      type: Array,
      default: function _default() {
        return ["default", "green", "orange", "pink"];
      }
    },
    sizes: {
      type: Array,
      default: function _default() {
        return ["small", "medium", "large", "extra"];
      }
    },
    defaultColor: {
      type: String,
      default: "default"
    },
    defaultSize: {
      type: String,
      default: "medium"
    },
    selectedColor: {
      type: String,
      default: "default"
    },
    selectedSize: {
      type: String,
      default: "medium"
    }
  },
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    this.customize();
  },
  methods: {
    customize: function customize() {
      var context = this.context || "buttons";
      var ids = [].concat(this.colors, this.sizes);
      var buttons = $("#" + context).find("button:not(.border)");
      var buttonsBorder = $("#" + context).find("button.border");

      for (var i = 0; i < ids.length; i++) {
        buttons.removeClass(this.defaultColor);
        buttons.removeClass(this.defaultSize);
        buttons.removeClass(this.defaultColor + "-border");
        buttons.removeClass(this.defaultColor + "-text");
        buttons.removeClass(ids[i]);
        buttons.removeClass(ids[i] + "-border");
        buttons.removeClass(ids[i] + "-text");
        buttonsBorder.removeClass(this.defaultColor);
        buttonsBorder.removeClass(this.defaultSize);
        buttonsBorder.removeClass(this.defaultColor + "-border");
        buttonsBorder.removeClass(this.defaultColor + "-text");
        buttonsBorder.removeClass(ids[i]);
        buttonsBorder.removeClass(ids[i] + "-border");
        buttonsBorder.removeClass(ids[i] + "-text");
        var selector = "#" + ids[i] + "-" + context;

        if ($(selector).is(":checked")) {
          buttons.addClass(ids[i]);

          if (["small", "medium", "large", "extra"].indexOf(ids[i]) == -1) {
            buttonsBorder.addClass(ids[i] + "-border");
            buttonsBorder.addClass(ids[i] + "-text");
          } else {
            buttonsBorder.addClass(ids[i]);
          }
        }
      }
    }
  }
};
exports.default = _default2;
        var $76874b = exports.default || module.exports;
      
      if (typeof $76874b === 'function') {
        $76874b = $76874b.options;
      }
    
        /* template */
        Object.assign($76874b, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "wrap" },
    [
      _vm._l(_vm.colors, function (color) {
        return _c("label", { staticClass: "radio" }, [
          _c("input", {
            attrs: {
              type: "radio",
              id: color + "-" + _vm.context,
              name: "color-" + _vm.context,
            },
            domProps: { checked: color == _vm.selectedColor },
            on: {
              click: function ($event) {
                return _vm.customize()
              },
            },
          }),
          _c("span", [_vm._v(_vm._s(color))]),
        ])
      }),
      _vm._l(_vm.sizes, function (size) {
        return _c("label", { staticClass: "radio" }, [
          _c("input", {
            attrs: {
              type: "radio",
              id: size + "-" + _vm.context,
              name: "size-" + _vm.context,
            },
            domProps: { checked: size == _vm.selectedSize },
            on: {
              click: function ($event) {
                return _vm.customize()
              },
            },
          }),
          _c("span", [_vm._v(_vm._s(size))]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"shared/domain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = {
  updateTheme: function updateTheme(data, from, mode) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!from) from = data.theme;
              if (!mode) mode = data.theme.selected;

              if (!data.themes[from]) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return ui("theme", {
                from: data.themes[from],
                mode: mode
              });

            case 5:
              data.theme = _context.sent;
              data.isDark = data.theme.selected == "dark";
              return _context.abrupt("return");

            case 8:
              _context.next = 10;
              return ui("theme", {
                from: from,
                mode: mode
              });

            case 10:
              data.theme = _context.sent;
              data.isDark = data.theme.selected == "dark";

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  updateMode: function updateMode(data) {
    var mode = data.theme.selected == "dark" ? "light" : "dark";
    this.updateTheme(data, data.theme, mode);
  }
};
exports.default = _default;
},{}],"shared/themes.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    id: {
      default: "themes",
      type: String
    },
    value: Object
  },
  data: function data() {
    return this.value;
  },
  mouted: function mouted() {
    ui();
  },
  methods: {
    updateTheme: function updateTheme(from, mode) {
      _domain.default.updateTheme(this.$data, from, mode);
    },
    updateMode: function updateMode() {
      _domain.default.updateMode(this.$data);
    }
  }
};
exports.default = _default;
        var $9a8335 = exports.default || module.exports;
      
      if (typeof $9a8335 === 'function') {
        $9a8335 = $9a8335.options;
      }
    
        /* template */
        Object.assign($9a8335, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "modal medium left no-scroll", attrs: { id: _vm.id } },
    [
      _vm._t("default"),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.showCssVariables,
              expression: "!showCssVariables",
            },
          ],
        },
        [
          _c("div", { staticClass: "row no-wrap middle-align no-space" }, [
            _c("div", { staticClass: "col" }, [
              _c("h5", { staticClass: "no-margin middle-align" }, [
                _c("span", [_vm._v("Themes")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        _vm.showCssVariables = true
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
            ]),
            _c("div", { staticClass: "col min" }, [
              _c("nav", { staticClass: "right-align" }, [
                _c(
                  "a",
                  {
                    on: {
                      click: function ($event) {
                        return _vm.updateMode()
                      },
                    },
                  },
                  [_c("i", [_vm._v("light_mode")])]
                ),
                _c("a", { attrs: { "data-ui": "#" + _vm.id } }, [
                  _c("i", [_vm._v("close")]),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "tabs left-align" }, [
            _c(
              "a",
              {
                staticClass: "active",
                attrs: { "data-ui": "#" + _vm.id + "-tab-image" },
              },
              [_vm._v("From image")]
            ),
            _c("a", { attrs: { "data-ui": "#" + _vm.id + "-tab-color" } }, [
              _vm._v("From color"),
            ]),
          ]),
          _c(
            "div",
            {
              staticClass: "page right active",
              attrs: { id: _vm.id + "-tab-image" },
            },
            [
              _c("div", { staticClass: "space" }),
              _c("nav", { staticClass: "wrap" }, [
                _c(
                  "a",
                  {
                    staticClass: "wave",
                    on: {
                      click: function ($event) {
                        return _vm.updateTheme("/wallpaper-1.jpg")
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/wallpaper-1.jpg" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    staticClass: "wave",
                    on: {
                      click: function ($event) {
                        return _vm.updateTheme("/wallpaper-2.jpg")
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/wallpaper-2.jpg" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    staticClass: "wave",
                    on: {
                      click: function ($event) {
                        return _vm.updateTheme("/wallpaper-3.jpg")
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/wallpaper-3.jpg" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    staticClass: "wave",
                    on: {
                      click: function ($event) {
                        return _vm.updateTheme("/wallpaper-4.jpg")
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/wallpaper-4.jpg" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    staticClass: "wave",
                    on: {
                      click: function ($event) {
                        return _vm.updateTheme("/wallpaper-5.jpg")
                      },
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/wallpaper-5.jpg" },
                    }),
                  ]
                ),
                _c("a", { staticClass: "button square extra flat" }, [
                  _c("i", [_vm._v("upload")]),
                  _c("input", {
                    staticClass: "absolute top left right bottom",
                    staticStyle: { opacity: "0" },
                    attrs: { type: "file" },
                    on: { change: _vm.updateTheme },
                  }),
                ]),
              ]),
            ]
          ),
          _c(
            "div",
            { staticClass: "page right", attrs: { id: _vm.id + "-tab-color" } },
            [
              _c("div", { staticClass: "space" }),
              _c("nav", { staticClass: "wrap" }, [
                _c("a", {
                  staticClass: "button square extra flat red",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#f44336")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat pink",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#e91e63")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat purple",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#9c27b0")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat deep-purple",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#673ab7")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat indigo",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#3f51b5")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat blue",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#2196f3")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat light-blue",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#03a9f4")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat cyan",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#00bcd4")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat teal",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#009688")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat green",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#4caf50")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat light-green",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#8bc34a")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat lime",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#cddc39")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat yellow",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#ffeb3b")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat amber",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#ffc107")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat orange",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#ff9800")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat depp-orange",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#ff5722")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat brown",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#795548")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat grey",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#9e9e9e")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat blue-grey",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#607d8b")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat black",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#000000")
                    },
                  },
                }),
                _c("a", {
                  staticClass: "button square extra flat white",
                  on: {
                    click: function ($event) {
                      return _vm.updateTheme("#ffffff")
                    },
                  },
                }),
              ]),
            ]
          ),
        ]
      ),
      _vm.showCssVariables && _vm.theme
        ? _c("div", [
            _c(
              "header",
              {
                staticClass: "fixed",
                on: {
                  click: function ($event) {
                    _vm.showCssVariables = false
                  },
                },
              },
              [_vm._m(0)]
            ),
            _c("nav", [
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.theme.selected,
                      expression: "theme.selected",
                    },
                  ],
                  attrs: { type: "radio", value: "light" },
                  domProps: { checked: _vm._q(_vm.theme.selected, "light") },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.theme, "selected", "light")
                    },
                  },
                }),
                _c("span", [_vm._v("Light")]),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.theme.selected,
                      expression: "theme.selected",
                    },
                  ],
                  attrs: { type: "radio", value: "dark" },
                  domProps: { checked: _vm._q(_vm.theme.selected, "dark") },
                  on: {
                    change: function ($event) {
                      return _vm.$set(_vm.theme, "selected", "dark")
                    },
                  },
                }),
                _c("span", [_vm._v("Dark")]),
              ]),
            ]),
            _c("div", { staticClass: "space" }),
            _c("article", { staticClass: "border" }, [
              _c("pre", {
                domProps: { innerHTML: _vm._s(_vm.theme[_vm.theme.selected]) },
              }),
            ]),
          ])
        : _vm._e(),
      _c("nav", { staticClass: "wrap" }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "" } }, [
      _c("i", [_vm._v("arrow_backward")]),
      _c("h5", { staticClass: "small-margin" }, [_vm._v("Back")]),
      _c(
        "a",
        {
          staticClass: "button border link",
          attrs: {
            href: "https://m3.material.io/styles/color/overview",
            target: "_blank",
          },
        },
        [_vm._v("More about")]
      ),
    ])
  },
]
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-9a8335",
            functional: undefined
          };
        })());
      
},{"./domain":"shared/domain.js"}],"shared/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var themes = {
  default: {
    dark: "--primary: #D0BCFF;--on-primary: #371E73;--primary-container: #4F378B;--on-primary-container: #EADDFF;--secondary: #CCC2DC;--on-secondary: #332D41;--secondary-container: #4A4458;--on-secondary-container: #E8DEF8;--tertiary: #EFB8C8;--on-tertiary: #492532;--tertiary-container: #633B48;--on-tertiary-container: #FFD8E4;--error: #F2B8B5;--on-error: #601410;--error-container: #8C1D18;--on-error-container: #F9DEDC;--background: #1C1B1F;--on-background: #E6E1E5;--surface: #1C1B1F;--on-surface: #E6E1E5;--outline: #938F99;--surface-variant: #49454F;--on-surface-variant: #CAC4D0;--inverse-surface: #E6E1E5;--inverse-on-surface: #313033;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #6750A4;--on-primary: #FFFFFF;--primary-container: #EADDFF;--on-primary-container: #21005E;--secondary: #625B71;--on-secondary: #FFFFFF;--secondary-container: #E8DEF8;--on-secondary-container: #1E192B;--tertiary: #7D5260;--on-tertiary: #FFFFFF;--tertiary-container: #FFD8E4;--on-tertiary-container: #370B1E;--error: #B3261E;--on-error: #FFFFFF;--error-container: #F9DEDC;--on-error-container: #370B1E;--background: #FFFBFE;--on-background: #1C1B1F;--surface: #FFFBFE;--on-surface: #1C1B1F;--outline: #79747E;--surface-variant: #E7E0EC;--on-surface-variant: #49454E;--inverse-surface: #313033;--inverse-on-surface: #F4EFF4;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  "/wallpaper-1.jpg": {
    dark: "--primary: #ffb4a5;--on-primary: #5e150c;--primary-container: #7d2b1f;--on-primary-container: #ffdad2;--secondary: #e7bdb5;--on-secondary: #442924;--secondary-container: #5d3f3a;--on-secondary-container: #ffdad3;--tertiary: #dec48c;--on-tertiary: #3d2e04;--tertiary-container: #564519;--on-tertiary-container: #fbe0a6;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #201a19;--on-background: #ede0de;--surface: #201a19;--on-surface: #ede0de;--surface-variant: #534341;--on-surface-variant: #d8c2be;--outline: #a08c89;--inverse-on-surface: #201a19;--inverse-surface: #ede0de;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #9c4234;--on-primary: #ffffff;--primary-container: #ffdad2;--on-primary-container: #400100;--secondary: #775751;--on-secondary: #ffffff;--secondary-container: #ffdad3;--on-secondary-container: #2d1511;--tertiary: #6f5c2e;--on-tertiary: #ffffff;--tertiary-container: #fbe0a6;--on-tertiary-container: #261a00;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fcfcfc;--on-background: #201a19;--surface: #fcfcfc;--on-surface: #201a19;--surface-variant: #f5deda;--on-surface-variant: #534341;--outline: #857370;--inverse-on-surface: #fbeeeb;--inverse-surface: #362f2e;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  "/wallpaper-2.jpg": {
    dark: "--primary: #70dba8;--on-primary: #003822;--primary-container: #005235;--on-primary-container: #8cf8c3;--secondary: #b3ccbc;--on-secondary: #20352a;--secondary-container: #364b3f;--on-secondary-container: #d0e8d8;--tertiary: #a5cdde;--on-tertiary: #063543;--tertiary-container: #234c5a;--on-tertiary-container: #c0e9fb;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #191c1a;--on-background: #e1e3df;--surface: #191c1a;--on-surface: #e1e3df;--surface-variant: #404943;--on-surface-variant: #bfc9c1;--outline: #8a938c;--inverse-on-surface: #191c1a;--inverse-surface: #e1e3df;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #006c47;--on-primary: #ffffff;--primary-container: #8cf8c3;--on-primary-container: #002112;--secondary: #4d6356;--on-secondary: #ffffff;--secondary-container: #d0e8d8;--on-secondary-container: #0a2015;--tertiary: #3d6473;--on-tertiary: #ffffff;--tertiary-container: #c0e9fb;--on-tertiary-container: #001f29;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fbfdf8;--on-background: #191c1a;--surface: #fbfdf8;--on-surface: #191c1a;--surface-variant: #dce5dd;--on-surface-variant: #404943;--outline: #707972;--inverse-on-surface: #f0f1ed;--inverse-surface: #2d312e;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  "/wallpaper-3.jpg": {
    dark: "--primary: #ffb683;--on-primary: #502400;--primary-container: #723600;--on-primary-container: #ffdcc4;--secondary: #e4bfa8;--on-secondary: #422b1b;--secondary-container: #5b412f;--on-secondary-container: #ffdcc4;--tertiary: #c8ca94;--on-tertiary: #31320b;--tertiary-container: #47491f;--on-tertiary-container: #e5e6ae;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #201a17;--on-background: #ece0da;--surface: #201a17;--on-surface: #ece0da;--surface-variant: #52443b;--on-surface-variant: #d7c3b7;--outline: #9f8d83;--inverse-on-surface: #201a17;--inverse-surface: #ece0da;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #944a01;--on-primary: #ffffff;--primary-container: #ffdcc4;--on-primary-container: #301400;--secondary: #755946;--on-secondary: #ffffff;--secondary-container: #ffdcc4;--on-secondary-container: #2b1708;--tertiary: #5f6135;--on-tertiary: #ffffff;--tertiary-container: #e5e6ae;--on-tertiary-container: #1b1d00;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fcfcfc;--on-background: #201a17;--surface: #fcfcfc;--on-surface: #201a17;--surface-variant: #f4dfd3;--on-surface-variant: #52443b;--outline: #85746a;--inverse-on-surface: #faeee8;--inverse-surface: #362f2b;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  "/wallpaper-4.jpg": {
    dark: "--primary: #acc7ff;--on-primary: #002e6c;--primary-container: #004397;--on-primary-container: #d6e2ff;--secondary: #bfc6dc;--on-secondary: #283041;--secondary-container: #3f4759;--on-secondary-container: #dae2f9;--tertiary: #debbdf;--on-tertiary: #402843;--tertiary-container: #583e5b;--on-tertiary-container: #fbd7fb;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #1b1b1e;--on-background: #e4e2e6;--surface: #1b1b1e;--on-surface: #e4e2e6;--surface-variant: #44474f;--on-surface-variant: #c4c6d0;--outline: #8e9099;--inverse-on-surface: #1b1b1e;--inverse-surface: #e4e2e6;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #005ac5;--on-primary: #ffffff;--primary-container: #d6e2ff;--on-primary-container: #001a43;--secondary: #575e71;--on-secondary: #ffffff;--secondary-container: #dae2f9;--on-secondary-container: #141b2c;--tertiary: #715574;--on-tertiary: #ffffff;--tertiary-container: #fbd7fb;--on-tertiary-container: #29132d;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fdfbff;--on-background: #1b1b1e;--surface: #fdfbff;--on-surface: #1b1b1e;--surface-variant: #e1e2ec;--on-surface-variant: #44474f;--outline: #74777f;--inverse-on-surface: #f2f0f4;--inverse-surface: #2f3033;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  },
  "/wallpaper-5.jpg": {
    dark: "--primary: #abd371;--on-primary: #203600;--primary-container: #304f00;--on-primary-container: #c6f089;--secondary: #c0caac;--on-secondary: #2b331e;--secondary-container: #414a33;--on-secondary-container: #dce6c7;--tertiary: #a0cfca;--on-tertiary: #013734;--tertiary-container: #1f4e4a;--on-tertiary-container: #bbece6;--error: #ffb4a9;--error-container: #930006;--on-error: #680003;--on-error-container: #ffdad4;--background: #1b1c18;--on-background: #e4e3dc;--surface: #1b1c18;--on-surface: #e4e3dc;--surface-variant: #44483d;--on-surface-variant: #c5c8b9;--outline: #8f9285;--inverse-on-surface: #1b1c18;--inverse-surface: #e4e3dc;--active: rgba(255,255,255,.2);--mode: dark;",
    light: "--primary: #47680e;--on-primary: #ffffff;--primary-container: #c8f089;--on-primary-container: #112000;--secondary: #596249;--on-secondary: #ffffff;--secondary-container: #dde7c7;--on-secondary-container: #161e0a;--tertiary: #396662;--on-tertiary: #ffffff;--tertiary-container: #bcece6;--on-tertiary-container: #00201d;--error: #ba1b1b;--error-container: #ffdad4;--on-error: #ffffff;--on-error-container: #410001;--background: #fdfcf4;--on-background: #1b1c18;--surface: #fdfcf4;--on-surface: #1b1c18;--surface-variant: #e1e4d4;--on-surface-variant: #44483c;--outline: #75786c;--inverse-on-surface: #f2f1e9;--inverse-surface: #30312c;--active: rgba(0,0,0,.1);--mode: light;",
    selected: "light"
  }
};

var _default = function _default() {
  return {
    themes: themes,
    theme: themes.default,
    isDark: false,
    showCssVariables: false
  };
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

var _selectionForButtons = _interopRequireDefault(require("./selectionForButtons.vue"));

var _themes = _interopRequireDefault(require("/shared/themes.vue"));

var _data2 = _interopRequireDefault(require("/shared/data.js"));

var _domain = _interopRequireDefault(require("/shared/domain.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  components: {
    selectionForButtons: _selectionForButtons.default,
    themes: _themes.default
  },
  data: function data() {
    return _objectSpread(_objectSpread({}, (0, _data2.default)()), {}, {
      indexOfMenu: 1,
      samples: [],
      htmlSample: null,
      jsSample: null,
      autoSample: null,
      extraSample: null,
      themeSample: null,
      modalSample: null,
      urlSample: null,
      mediaCard: 1,
      mediaImage: 1,
      layout: 0
    });
  },
  mounted: function mounted() {
    this.isDark = /dark/.test(document.body.getAttribute("style"));
    this.htmlSample = hljs.highlight("html", '<div class="modal active">...</div>\n<div class="dropdown active">...</div>\n<div class="overlay active">...</div>\n<div class="page active">...</div>\n<div class="toast active">...</div>').value;
    this.jsSample = hljs.highlight("js", 'ui("#modal");\nui("#dropdown");\nui("#overlay");\nui("#page");\nui("#toast");').value;
    this.autoSample = hljs.highlight("html", '<a data-ui="#modal">...</a>\n<a data-ui="#dropdown">...</a>\n<a data-ui="#overlay">...</a>\n<a data-ui="#page">...</a>\n<a data-ui="#toast">...</a>\n\nui();').value;
    this.extraSample = hljs.highlight("js", 'ui("#progress", percentage);\nui("#toast", millisecondsToHide);').value;
    this.themeSample = hljs.highlight("js", 'let theme = await ui("theme", { from: "color|file|blob|url|theme", mode: "light|dark" });').value;
    this.resetTheme();
    this.badgeSamples();
    this.chipSamples();
    this.inputSamples();
    this.listSamples();
    this.tableSamples();
    this.tabSamples();
    this.selectSamples();
    this.rowSamples();
    this.textareaSamples();
    this.layoutSamples();
    this.toastSamples();
    this.progressSamples();
    ui();
    setTimeout(function () {
      $("#logo").addClass("active");
    }, 1000);
  },
  methods: {
    resetTheme: function resetTheme() {
      $("html")[0].className = "";
    },
    goTo: function goTo(selector) {
      setTimeout(function () {
        var element = document.querySelector(selector);
        element.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }, 180);
    },
    addHomeScreen: function addHomeScreen() {
      if (window.beercss && window.beercss.installEvent) window.beercss.installEvent.prompt();
    },
    updateMenu: function updateMenu(menu, css) {
      var selector = menu;
      var menu = $(menu);
      var dataUis = menu.find("a");
      var modals = menu.find(".modal");
      $(modals).removeClass("active");
      $(dataUis).removeClass("active");

      if (!css) {
        return $(selector + " > a > div:visible").length ? $(selector + " > a > div").hide() : $(selector + " > a > div").show();
      }

      if (/left|right|top|bottom/.test(css)) {
        $(menu).removeClass("left right top bottom");
        $(menu).addClass(css);
        $(menu).find("> .modal").removeClass("left right top bottom");
        $(menu).find("> .modal").addClass(css);
      }

      if (/small|medium|large/.test(css)) {
        for (var i = 0; i < menu.length; i++) {
          $(menu[i]).removeClass("small medium large");
          if (css != "medium") $(menu[i]).addClass(css);
        }
      }

      if (/left-align|right-align|top-align|bottom-align/.test(css)) {
        for (var i = 0; i < menu.length; i++) {
          $(menu[i]).removeClass("left-align right-align top-align bottom-align");
          $(menu[i]).addClass(css);
        }
      }
    },
    layoutSamples: function layoutSamples() {
      $("#layouts input").on("click", function () {
        var id = $(this).attr("id");
        var checked = $(this).is(":checked");
        var positions = ["left", "right", "center", "top", "bottom", "middle"];
        var alignments = ["left-align", "right-align", "center-align", "top-align", "bottom-align", "middle-align"];
        var position = $("#positions .absolute");
        var alignment = $("#alignments article");
        if (checked && (id == "left-layouts" || id == "right-layouts")) $("#center-layouts")[0].checked = false;
        if (checked && (id == "top-layouts" || id == "bottom-layouts")) $("#middle-layouts")[0].checked = false;

        if (checked && id == "center-layouts") {
          $("#left-layouts")[0].checked = false;
          $("#right-layouts")[0].checked = false;
        }

        if (checked && id == "middle-layouts") {
          $("#top-layouts")[0].checked = false;
          $("#bottom-layouts")[0].checked = false;
        }

        if (checked && (id == "left-align-layouts" || id == "right-align-layouts")) $("#center-align-layouts")[0].checked = false;
        if (checked && (id == "top-align-layouts" || id == "bottom-align-layouts")) $("#middle-align-layouts")[0].checked = false;

        if (checked && id == "center-align-layouts") {
          $("#left-align-layouts")[0].checked = false;
          $("#right-align-layouts")[0].checked = false;
        }

        if (checked && id == "middle-align-layouts") {
          $("#top-align-layouts")[0].checked = false;
          $("#bottom-align-layouts")[0].checked = false;
        }

        $(position).removeClass("left right center top bottom middle");

        for (var i = 0; i < positions.length; i++) {
          if ($("#" + positions[i] + "-layouts").is(":checked")) {
            $(position).addClass(positions[i]);
          }
        }

        $(alignment).removeClass("left-align right-align center-align top-align bottom-align middle-align");

        for (var i = 0; i < alignments.length; i++) {
          if ($("#" + alignments[i] + "-layouts").is(":checked")) {
            $(alignment).addClass(alignments[i]);
          }
        }
      });
    },
    updateIcons: function updateIcons() {
      var i = $("i");
      if (i.is(".outlined")) i.removeClass("outlined");else i.addClass("outlined");
    },
    updateContainer: function updateContainer(css) {
      $(".container").attr("class", css ? "container " + css : "container");
    },
    updatePage: function updatePage(css) {
      ui(css);
    },
    updateModal: function updateModal(css) {
      $("#modal").attr("class", css);
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
      tag.find("[style*='none']").remove();
      return process(tag[0].outerHTML.replace(/\s+(id|data-ui|onclick|style|data-v-\w+)\="[^\"]*"/gi, "").replace(/\s+name\="(\w+)"/gi, " name=\"$1_\"").replace(/\s+[a-z-]+\=(""|"#")/gi, "").replace(/\n\<\/(circle|th)\>/gi, "</$1>")).replace(/^\s+/g, "");
    },
    showSamples: function showSamples(selector, modal, url) {
      var _this = this;

      var elements = $(selector);
      this.samples = [];
      this.modalSample = modal || "#modal-samples";
      this.urlSample = url || null;

      for (var i = 0; i < elements.length; i++) {
        var element = $($(elements[i])[0].outerHTML);

        if (element.is(".menu")) {
          element.find(".modal").html("");
          var html = this.formatHtml(element, true);
          var htmlFormatted = hljs.highlight("html", html).value;
        } else {
          var html = this.formatHtml(element, true);
          var htmlFormatted = hljs.highlight("html", html).value;
        }

        if (element.is(".menu") || element.is(".modal") || element.is(".toast") || element.is(".container") || element.is(".fixed")) html = "";
        this.samples.push({
          html: html,
          sourceCode: htmlFormatted
        });
      }

      Vue.nextTick(function () {
        ui();
        ui(_this.modalSample);
        $(_this.modalSample).scrollTop(0);
      });
    },
    toastSamples: function toastSamples() {
      $("#toasts input").on("click", function () {
        var ids = ["top"];
        var toasts = $("#toasts .toast");

        for (var i = 0; i < ids.length; i++) {
          toasts.removeClass(ids[i]);
          var selector = "#" + ids[i] + "-toasts";

          if ($(selector).is(":checked")) {
            if (["top"].indexOf(ids[i]) != -1) toasts.addClass(ids[i]);
          }
        }
      });
    },
    tabSamples: function tabSamples() {
      $("#tabs input").on("click", function () {
        var ids = ["left", "right", "left-align", "center-align", "right-align"];
        var pages = $("#tabs .page");
        var tabs = $("#tabs .tabs");

        for (var i = 0; i < ids.length; i++) {
          pages.removeClass(ids[i]);
          tabs.removeClass(ids[i]);
          var selector = "#" + ids[i] + "-tabs";

          if ($(selector).is(":checked")) {
            if (["left", "right"].indexOf(ids[i]) != -1) pages.addClass(ids[i]);
            if (["left-align", "center-align", "right-align"].indexOf(ids[i]) != -1) tabs.addClass(ids[i]);
          }
        }
      });
    },
    chipSamples: function chipSamples() {
      $("#chips input").on("click", function () {
        var ids = ["brown", "indigo", "red", "small", "large", "active"];
        var chips = $("#chips nav .chip:not(.border)");
        var chipsBorder = $("#chips nav .chip.border");

        for (var i = 0; i < ids.length; i++) {
          chips.removeClass(ids[i] + "2");
          chips.removeClass(ids[i]);
          chips.removeClass(ids[i] + "-border");
          chips.removeClass(ids[i] + "-text");
          chipsBorder.removeClass(ids[i] + "2");
          chipsBorder.removeClass(ids[i]);
          chipsBorder.removeClass(ids[i] + "-border");
          chipsBorder.removeClass(ids[i] + "-text");
          var selector = "#" + ids[i] + "-chips";

          if ($(selector).is(":checked")) {
            if (["small", "medium", "large", "active"].indexOf(ids[i]) == -1) {
              chips.addClass(ids[i] + "2");
              chips.addClass(ids[i] + "-text");
              chipsBorder.addClass(ids[i] + "-border");
              chipsBorder.addClass(ids[i] + "-text");
            } else {
              chips.addClass(ids[i]);
              chipsBorder.addClass(ids[i]);
            }
          }
        }
      });
    },
    badgeSamples: function badgeSamples() {
      $("#badges input").on("click", function () {
        var ids = ["blue", "purple", "teal"];
        var badges = $("#badges .badge:not(.border)");
        var badgesBorder = $("#badges .badge.border");

        for (var i = 0; i < ids.length; i++) {
          badges.removeClass(ids[i]);
          badges.removeClass(ids[i] + "-border");
          badges.removeClass(ids[i] + "-text");
          badgesBorder.removeClass(ids[i]);
          badgesBorder.removeClass(ids[i] + "-border");
          badgesBorder.removeClass(ids[i] + "-text");
          var selector = "#" + ids[i] + "-badges";

          if ($(selector).is(":checked")) {
            badges.addClass(ids[i]);
            badgesBorder.addClass(ids[i] + "-border");
            badgesBorder.addClass(ids[i] + "-text");
          }
        }
      });
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
        var ids = ["no-space", "medium-space", "large-space", "center-align", "right-align", "min"];
        var table = $("#table table");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-tables";
          if ($(selector).is(":checked")) table.addClass(ids[i]);else table.removeClass(ids[i]);
        }
      });
    },
    inputSamples: function inputSamples() {
      $("#border-inputs,#round-inputs,#fill-inputs,#small-inputs,#medium-inputs,#large-inputs,#extra-inputs,#text-inputs,#password-inputs,#file-inputs,#date-inputs,#time-inputs").on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "extra", "text", "password", "file", "date", "time"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-inputs";

          if (["text", "password", "file", "date", "time"].indexOf(ids[i]) !== -1) {
            if ($(selector).is(":checked")) {
              var inputs = $("#inputs input[type='text'], #inputs input[type='password'], #inputs input[type='date'], #inputs input[type='time']");
              var files = $("#inputs input[type='file']");
              var labels = $("#inputs .field.label > label");
              var icons = $("#inputs .field.label > i");
              files.remove();

              if (ids[i] == "file") {
                inputs.attr("type", "text");
                labels.html("File");
                icons.html("attach_file");

                for (var j = 0; j < inputs.length; j++) {
                  $("<input type='file' />").insertAfter(inputs[j]);
                }
              }

              if (ids[i] == "text") {
                labels.html("Label");
                inputs.attr("type", ids[i]);
                icons.html("search");
              }

              if (ids[i] == "password") {
                labels.html("Password");
                inputs.attr("type", ids[i]);
                icons.html("visibility");
              }

              if (ids[i] == "date") {
                labels.html("Date");
                inputs.attr("type", ids[i]);
                icons.html("today");
              }

              if (ids[i] == "time") {
                labels.html("Time");
                inputs.attr("type", ids[i]);
                icons.html("schedule");
              }
            }
          } else {
            if ($(selector).is(":checked")) $("#inputs .field").addClass(ids[i]);else $("#inputs .field").removeClass(ids[i]);
          }
        }

        ui();
      });
    },
    selectSamples: function selectSamples() {
      $("#border-selects,#round-selects,#fill-selects,#small-selects,#medium-selects,#large-selects,#extra-selects").on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "extra"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-selects";
          if ($(selector).is(":checked")) $("#selects .field").addClass(ids[i]);else $("#selects .field").removeClass(ids[i]);
        }

        ui();
      });
    },
    textareaSamples: function textareaSamples() {
      $("#border-textareas,#round-textareas,#fill-textareas,#small-textareas,#medium-textareas,#large-textareas,#extra-textareas").on("click", function () {
        var ids = ["border", "fill", "round", "small", "large", "extra"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-textareas";
          if ($(selector).is(":checked")) $("#textareas .field").addClass(ids[i]);else $("#textareas .field").removeClass(ids[i]);
        }

        ui();
      });
    },
    rowSamples: function rowSamples() {
      $("#no-space-rows,#small-space-rows,#medium-space-rows,#large-space-rows,#min-rows").on("click", function () {
        var ids = ["no-space", "medium-space", "large-space", "min"];

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-rows";
          if ($(selector).is(":checked")) $("#rows .row").addClass(ids[i]);else $("#rows .row").removeClass(ids[i]);
        }
      });
    },
    progressSamples: function progressSamples() {
      $("#0-progress,#30-progress,#60-progress,#100-progress,#default-progress,#light-green-progress,#orange-progress").on("click", function () {
        var ids = [0, 30, 60, 100, "light-green", "orange"];
        $("#progress .progress").removeClass("light-green");
        $("#progress .progress").removeClass("orange");

        for (var i = 0; i < ids.length; i++) {
          var selector = "#" + ids[i] + "-progress";

          if ($(selector).is(":checked")) {
            if (["light-green", "orange"].indexOf(ids[i]) != -1) $("#progress .progress").addClass(ids[i]);else document.querySelectorAll("#progress .progress").forEach(function (x) {
              return ui(x, ids[i]);
            });
          }
        }
      });
    },
    updateMode: function updateMode() {
      _domain.default.updateMode(this.$data);
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
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "menu left m l" },
      [
        _c("img", {
          staticClass: "circle small-margin",
          attrs: { src: "/favicon.png" },
          on: {
            click: function ($event) {
              return _vm.addHomeScreen()
            },
          },
        }),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateMenu(".menu.m.l", "top")
              },
            },
          },
          [_c("i", [_vm._v("arrow_upward")]), _c("div", [_vm._v("Top")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateMenu(".menu.m.l", "bottom")
              },
            },
          },
          [_c("i", [_vm._v("arrow_downward")]), _c("div", [_vm._v("Bottom")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateMenu(".menu.m.l", "left")
              },
            },
          },
          [_c("i", [_vm._v("arrow_back")]), _c("div", [_vm._v("Left")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateMenu(".menu.m.l", "right")
              },
            },
          },
          [_c("i", [_vm._v("arrow_forward")]), _c("div", [_vm._v("Right")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateIcons()
              },
            },
          },
          [_c("i", [_vm._v("image")]), _c("div", [_vm._v("Icons")])]
        ),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateMode()
              },
            },
          },
          [_c("i", [_vm._v("light_mode")]), _c("div", [_vm._v("Light/Dark")])]
        ),
        _vm._m(0),
        _vm._m(1),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.showSamples(
                  ".menu.m.l",
                  null,
                  "https://github.com/beercss/beercss/blob/main/docs/MENU.md"
                )
              },
            },
          },
          [_c("i", [_vm._v("code")]), _c("div", [_vm._v("Code")])]
        ),
        _c("themes", {
          attrs: { id: "themes1" },
          model: {
            value: _vm.$data,
            callback: function ($$v) {
              _vm.$data = $$v
            },
            expression: "$data",
          },
        }),
        _c(
          "div",
          {
            staticClass: "modal left",
            attrs: { id: "more1", "data-ui": "#more1" },
          },
          [
            _c("h5", [_vm._v("Templates")]),
            _c("p", [_vm._v("This templates are only for tests purpose")]),
            _c("div", { staticClass: "space" }),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/youtube" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/youtube-dark.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/youtube" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/youtube-light.png" },
                }),
              ]
            ),
            _c(
              "a",
              { staticClass: "wrap padding", attrs: { href: "/netflix" } },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/netflix.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/gmail" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/gmail-dark.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/gmail" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/gmail-light.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/uber" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/uber-dark.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: { href: "/uber" },
              },
              [
                _c("img", {
                  staticClass: "logo-template",
                  attrs: { src: "/uber-light.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: {
                  href: "https://codepen.io/search/pens?q=beercss",
                  target: "_self",
                },
              },
              [
                _c("img", {
                  staticClass: "logo-codepen",
                  attrs: { src: "/codepen-dark.png" },
                }),
              ]
            ),
            _c(
              "a",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                staticClass: "wrap padding",
                attrs: {
                  href: "https://codepen.io/search/pens?q=beercss",
                  target: "_self",
                },
              },
              [
                _c("img", {
                  staticClass: "logo-codepen",
                  attrs: { src: "/codepen-light.png" },
                }),
              ]
            ),
          ]
        ),
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "menu bottom s" },
      [
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateIcons()
              },
            },
          },
          [_c("i", [_vm._v("image")]), _c("div", [_vm._v("Icons")])]
        ),
        _vm._m(2),
        _vm._m(3),
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.showSamples(
                  ".menu.s",
                  null,
                  "https://github.com/beercss/beercss/blob/main/docs/MENU.md"
                )
              },
            },
          },
          [_c("i", [_vm._v("code")]), _c("div", [_vm._v("Code")])]
        ),
        _c("themes", {
          attrs: { id: "themes2" },
          model: {
            value: _vm.$data,
            callback: function ($$v) {
              _vm.$data = $$v
            },
            expression: "$data",
          },
        }),
        _c(
          "div",
          {
            staticClass: "modal bottom medium",
            attrs: { id: "more2", "data-ui": "#more2" },
          },
          [
            _c("h5", [_vm._v("Templates")]),
            _c("p", [_vm._v("This templates are only for tests purpose")]),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col s6 middle-align padding" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isDark,
                        expression: "isDark",
                      },
                    ],
                    attrs: { href: "/youtube" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/youtube-dark.png" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isDark,
                        expression: "!isDark",
                      },
                    ],
                    attrs: { href: "/youtube" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/youtube-light.png" },
                    }),
                  ]
                ),
              ]),
              _c("div", { staticClass: "col s6 middle-align padding" }, [
                _c("a", { attrs: { href: "/netflix" } }, [
                  _c("img", {
                    staticClass: "logo-template",
                    attrs: { src: "/netflix.png" },
                  }),
                ]),
              ]),
              _c("div", { staticClass: "col s6 middle-align padding" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isDark,
                        expression: "isDark",
                      },
                    ],
                    attrs: { href: "/gmail" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/gmail-dark.png" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isDark,
                        expression: "!isDark",
                      },
                    ],
                    attrs: { href: "/gmail" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/gmail-light.png" },
                    }),
                  ]
                ),
              ]),
              _c("div", { staticClass: "col s6 middle-align padding" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isDark,
                        expression: "isDark",
                      },
                    ],
                    attrs: { href: "/uber" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/uber-dark.png" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isDark,
                        expression: "!isDark",
                      },
                    ],
                    attrs: { href: "/uber" },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-template",
                      attrs: { src: "/uber-light.png" },
                    }),
                  ]
                ),
              ]),
              _c("div", { staticClass: "col s6 middle-align padding" }, [
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.isDark,
                        expression: "isDark",
                      },
                    ],
                    attrs: {
                      href: "https://codepen.io/search/pens?q=beercss",
                      target: "_self",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-codepen",
                      attrs: { src: "/codepen-dark.png" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: !_vm.isDark,
                        expression: "!isDark",
                      },
                    ],
                    attrs: {
                      href: "https://codepen.io/search/pens?q=beercss",
                      target: "_self",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-codepen",
                      attrs: { src: "/codepen-light.png" },
                    }),
                  ]
                ),
              ]),
            ]),
          ]
        ),
      ],
      1
    ),
    _c("div", { staticClass: "center-align padding yellow4" }, [
      _c("div", { staticClass: "black-text" }, [
        _c("div", { staticClass: "large-height no-scroll middle-align" }, [
          _c("img", {
            attrs: { id: "logo", src: "/logo.png" },
            on: {
              click: function ($event) {
                return _vm.addHomeScreen()
              },
            },
          }),
        ]),
        _c("h5", { staticClass: "center-align" }, [
          _vm._v("Build material design"),
        ]),
        _c("h3", { staticClass: "center-align" }, [_vm._v("in record time")]),
        _c("h5", { staticClass: "center-align" }, [
          _vm._v("without stress for devs"),
        ]),
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
        _vm._m(4),
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
      ]),
    ]),
    _c("div", { staticClass: "container" }, [
      _c("div", { attrs: { id: "begin" } }, [
        _c("div", { staticClass: "row" }, [
          _vm._m(5),
          _c("div", { staticClass: "col s12", attrs: { id: "badges" } }, [
            _c("h4", [
              _c("span", [_vm._v("Badges")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#badges nav > a",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/BADGE.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(6),
            _c("div", { staticClass: "space" }),
            _vm._m(7),
            _c("div", { staticClass: "small-space" }),
          ]),
          _c(
            "div",
            { staticClass: "col s12", attrs: { id: "buttons" } },
            [
              _c("div", { staticClass: "large-space" }),
              _c("h4", [
                _c("span", [_vm._v("Buttons")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        return _vm.showSamples(
                          "#buttons button",
                          null,
                          "https://github.com/beercss/beercss/blob/main/docs/BUTTON.md"
                        )
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
              _c("div", { staticClass: "medium-space" }),
              _c("h6", { staticClass: "middle-align" }, [
                _c("span", [_vm._v("FABs")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        return _vm.showSamples(
                          "#fabs button",
                          null,
                          "https://github.com/beercss/beercss/blob/main/docs/BUTTON.md"
                        )
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
              _c("selectionForButtons", {
                attrs: { context: "fabs", selectedSize: "extra" },
              }),
              _c("div", { attrs: { id: "fabs" } }, [
                _vm._m(8),
                _vm._m(9),
                _vm._m(10),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border square" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("button", { staticClass: "border square round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("button", { staticClass: "border circle" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c(
                    "button",
                    { staticClass: "border circle left-round top-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "button",
                    { staticClass: "border circle left-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "button",
                    { staticClass: "border circle right-round top-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "button",
                    { staticClass: "border circle right-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c("button", { staticClass: "border circle left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("button", { staticClass: "border circle right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                ]),
              ]),
              _c("div", { staticClass: "medium-space" }),
              _c("h6", { staticClass: "middle-align" }, [
                _c("span", [_vm._v("Extended FABs")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        return _vm.showSamples(
                          "#extended-fabs button",
                          null,
                          "https://github.com/beercss/beercss/blob/main/docs/BUTTON.md"
                        )
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
              _c("selectionForButtons", {
                attrs: {
                  context: "extended-fabs",
                  sizes: ["extra"],
                  selectedSize: "extra",
                },
              }),
              _c(
                "div",
                { staticClass: "row", attrs: { id: "extended-fabs" } },
                [
                  _vm._m(11),
                  _vm._m(12),
                  _vm._m(13),
                  _c("div", { staticClass: "col s6 m6 l3" }, [
                    _c("nav", [
                      _c("button", { staticClass: "extend border square" }, [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: { src: "/favicon.png" },
                        }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        { staticClass: "extend border square round" },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c("button", { staticClass: "extend border circle" }, [
                        _c("img", {
                          staticClass: "responsive",
                          attrs: { src: "/favicon.png" },
                        }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "extend border circle left-round top-round",
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "extend border circle left-round bottom-round",
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "extend border circle right-round top-round",
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "extend border circle right-round bottom-round",
                        },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        { staticClass: "extend border circle left-round" },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                    _c("nav", [
                      _c(
                        "button",
                        { staticClass: "extend border circle right-round" },
                        [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/favicon.png" },
                          }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
              _c("div", { staticClass: "medium-space" }),
              _c("h6", { staticClass: "middle-align" }, [
                _c("span", [_vm._v("Buttons")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        return _vm.showSamples(
                          "#default-buttons button",
                          null,
                          "https://github.com/beercss/beercss/blob/main/docs/BUTTON.md"
                        )
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
              _c("selectionForButtons", {
                attrs: { context: "default-buttons" },
              }),
              _c("div", { attrs: { id: "default-buttons" } }, [
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", [_vm._v("Button")]),
                  _vm._m(14),
                  _c("button", [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "round" }, [_vm._v("Button")]),
                  _vm._m(15),
                  _c("button", { staticClass: "round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "flat" }, [_vm._v("Button")]),
                  _vm._m(16),
                  _c("button", { staticClass: "flat" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "flat" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "flat round" }, [
                    _vm._v("Button"),
                  ]),
                  _vm._m(17),
                  _c("button", { staticClass: "flat round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "flat round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border" }, [_vm._v("Button")]),
                  _vm._m(18),
                  _c("button", { staticClass: "border" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "border" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border round" }, [
                    _vm._v("Button"),
                  ]),
                  _vm._m(19),
                  _c("button", { staticClass: "border round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "border round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border left-round top-round" }, [
                    _vm._v("Button"),
                  ]),
                  _vm._m(20),
                  _c(
                    "button",
                    { staticClass: "border right-round top-round" },
                    [
                      _c("img", { attrs: { src: "/favicon.png" } }),
                      _c("span", [_vm._v("Button")]),
                    ]
                  ),
                  _c(
                    "button",
                    { staticClass: "border right-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                      _c("span", [_vm._v("Button")]),
                    ]
                  ),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border left-round" }, [
                    _vm._v("Button"),
                  ]),
                  _vm._m(21),
                  _c("button", { staticClass: "border left-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "border left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("button", { staticClass: "border right-round" }, [
                    _vm._v("Button"),
                  ]),
                  _vm._m(22),
                  _c("button", { staticClass: "border right-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                  _c("button", { staticClass: "border right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Button")]),
                  ]),
                ]),
              ]),
              _c("div", { staticClass: "medium-space" }),
              _c("h6", { staticClass: "middle-align" }, [
                _c("span", [_vm._v("Responsive buttons")]),
                _c(
                  "a",
                  {
                    staticClass: "chip circle",
                    on: {
                      click: function ($event) {
                        return _vm.showSamples(
                          "#responsive-buttons button",
                          null,
                          "https://github.com/beercss/beercss/blob/main/docs/BUTTON.md"
                        )
                      },
                    },
                  },
                  [_c("i", [_vm._v("code")])]
                ),
              ]),
              _c("selectionForButtons", {
                attrs: { context: "responsive-buttons" },
              }),
              _c(
                "div",
                { staticClass: "row", attrs: { id: "responsive-buttons" } },
                [
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(23),
                    _vm._m(24),
                    _c("nav", [
                      _c("button", { staticClass: "responsive" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(25),
                    _vm._m(26),
                    _c("nav", [
                      _c("button", { staticClass: "responsive round" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(27),
                    _vm._m(28),
                    _c("nav", [
                      _c("button", { staticClass: "responsive flat" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(29),
                    _vm._m(30),
                    _c("nav", [
                      _c("button", { staticClass: "responsive flat round" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(31),
                    _vm._m(32),
                    _c("nav", [
                      _c("button", { staticClass: "responsive border" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(33),
                    _vm._m(34),
                    _c("nav", [
                      _c("button", { staticClass: "responsive border round" }, [
                        _c("img", { attrs: { src: "/favicon.png" } }),
                        _c("span", [_vm._v("Button")]),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(35),
                    _vm._m(36),
                    _c("nav", [
                      _c(
                        "button",
                        { staticClass: "responsive border left-round" },
                        [
                          _c("img", { attrs: { src: "/favicon.png" } }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6" }, [
                    _vm._m(37),
                    _vm._m(38),
                    _c("nav", [
                      _c(
                        "button",
                        { staticClass: "responsive border right-round" },
                        [
                          _c("img", { attrs: { src: "/favicon.png" } }),
                          _c("span", [_vm._v("Button")]),
                        ]
                      ),
                    ]),
                  ]),
                ]
              ),
            ],
            1
          ),
          _c("div", { staticClass: "col s12", attrs: { id: "cards" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Cards")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#cards article:visible",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/CARD.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", { staticClass: "wrap m l" }, [
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.mediaCard,
                      expression: "mediaCard",
                    },
                  ],
                  attrs: { value: "1", type: "radio", name: "media-cards" },
                  domProps: { checked: _vm._q(_vm.mediaCard, "1") },
                  on: {
                    change: function ($event) {
                      _vm.mediaCard = "1"
                    },
                  },
                }),
                _c("span", [_vm._v("images")]),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.mediaCard,
                      expression: "mediaCard",
                    },
                  ],
                  attrs: { value: "2", type: "radio", name: "media-cards" },
                  domProps: { checked: _vm._q(_vm.mediaCard, "2") },
                  on: {
                    change: function ($event) {
                      _vm.mediaCard = "2"
                    },
                  },
                }),
                _c("span", [_vm._v("videos")]),
              ]),
            ]),
            _vm.mediaCard == 1
              ? _c("div", { staticClass: "row" }, [
                  _vm._m(39),
                  _vm._m(40),
                  _vm._m(41),
                  _vm._m(42),
                  _vm._m(43),
                  _vm._m(44),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle large",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(45),
                      ]),
                      _vm._m(46),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "round" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle large",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(47),
                      ]),
                      _vm._m(48),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "border" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle large",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(49),
                      ]),
                      _vm._m(50),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "border round" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle large",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(51),
                      ]),
                      _vm._m(52),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("img", {
                        staticClass: "responsive small",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(53),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding round" }, [
                      _c("img", {
                        staticClass: "responsive small top-round",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(54),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border" }, [
                      _c("img", {
                        staticClass: "responsive small",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(55),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border round" }, [
                      _c("img", {
                        staticClass: "responsive small top-round",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(56),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("img", {
                        staticClass: "responsive medium",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(57),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding round" }, [
                      _c("img", {
                        staticClass: "responsive medium",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(58),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border" }, [
                      _c("img", {
                        staticClass: "responsive medium",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(59),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border round" }, [
                      _c("img", {
                        staticClass: "responsive medium",
                        attrs: { src: "/beer-and-woman.jpg" },
                      }),
                      _vm._m(60),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 l6" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("div", { staticClass: "row no-wrap no-space" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(61),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 l6" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("div", { staticClass: "row no-wrap no-space" }, [
                        _c("div", { staticClass: "col" }, [
                          _c("img", {
                            staticClass: "responsive",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                          _vm._m(62),
                        ]),
                        _vm._m(63),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
            _vm.mediaCard == 2
              ? _c("div", { staticClass: "row" }, [
                  _vm._m(64),
                  _vm._m(65),
                  _vm._m(66),
                  _vm._m(67),
                  _vm._m(68),
                  _vm._m(69),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c(
                            "video",
                            {
                              staticClass: "circle large",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._m(70),
                      ]),
                      _vm._m(71),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "round" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c(
                            "video",
                            {
                              staticClass: "circle large",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._m(72),
                      ]),
                      _vm._m(73),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "border" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c(
                            "video",
                            {
                              staticClass: "circle large",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._m(74),
                      ]),
                      _vm._m(75),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "border round" }, [
                      _c("div", { staticClass: "row no-wrap" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c(
                            "video",
                            {
                              staticClass: "circle large",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._m(76),
                      ]),
                      _vm._m(77),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive small",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(78),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding round" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive small top-round",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(79),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive small",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(80),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border round" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive small top-round",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(81),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive medium",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(82),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding round" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive medium",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(83),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive medium",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(84),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m6 l3" }, [
                    _c("article", { staticClass: "no-padding border round" }, [
                      _c(
                        "video",
                        {
                          staticClass: "responsive medium",
                          attrs: {
                            autoplay: "autoplay",
                            loop: "loop",
                            muted: "muted",
                            playsinline: "playsinline",
                          },
                          domProps: { muted: true },
                        },
                        [
                          _c("source", {
                            attrs: { src: "/dance.mp4", type: "video/mp4" },
                          }),
                        ]
                      ),
                      _vm._m(85),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 l6" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("div", { staticClass: "row no-wrap no-space" }, [
                        _c("div", { staticClass: "col" }, [
                          _c(
                            "video",
                            {
                              staticClass: "responsive",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                        ]),
                        _vm._m(86),
                      ]),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 l6" }, [
                    _c("article", { staticClass: "no-padding" }, [
                      _c("div", { staticClass: "row no-wrap no-space" }, [
                        _c("div", { staticClass: "col" }, [
                          _c(
                            "video",
                            {
                              staticClass: "responsive",
                              attrs: {
                                autoplay: "autoplay",
                                loop: "loop",
                                muted: "muted",
                                playsinline: "playsinline",
                              },
                              domProps: { muted: true },
                            },
                            [
                              _c("source", {
                                attrs: { src: "/dance.mp4", type: "video/mp4" },
                              }),
                            ]
                          ),
                          _vm._m(87),
                        ]),
                        _vm._m(88),
                      ]),
                    ]),
                  ]),
                ])
              : _vm._e(),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "checkboxes" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Checkboxes")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      _vm.showSamples(
                        "#checkboxes .field:not(#checkboxes1), #checkboxes1 label",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(89),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "chips" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Chips")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#chips nav .chip",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/CHIP.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(90),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col s12 m12 l6" }, [
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip" }, [_vm._v("Chip")]),
                  _vm._m(91),
                  _c("a", { staticClass: "chip" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip round" }, [_vm._v("Chip")]),
                  _vm._m(92),
                  _c("a", { staticClass: "chip round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip left-round top-round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(93),
                  _c("a", { staticClass: "chip right-round top-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip right-round bottom-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip left-round" }, [_vm._v("Chip")]),
                  _vm._m(94),
                  _c("a", { staticClass: "chip left-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip right-round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(95),
                  _c("a", { staticClass: "chip right-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _vm._m(96),
                  _vm._m(97),
                  _vm._m(98),
                  _vm._m(99),
                  _vm._m(100),
                  _vm._m(101),
                  _vm._m(102),
                  _vm._m(103),
                  _vm._m(104),
                  _vm._m(105),
                  _vm._m(106),
                  _c("a", { staticClass: "chip square" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip square round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip circle" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip square left-round top-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c(
                    "a",
                    { staticClass: "chip square left-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "a",
                    { staticClass: "chip square right-round top-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "a",
                    { staticClass: "chip square right-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c("a", { staticClass: "chip square left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip square right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                ]),
              ]),
              _c("div", { staticClass: "col s12 m12 l6" }, [
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip border" }, [_vm._v("Chip")]),
                  _vm._m(107),
                  _c("a", { staticClass: "chip border" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip border" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip border round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(108),
                  _c("a", { staticClass: "chip border round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip border round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip border left-round top-round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(109),
                  _c(
                    "a",
                    { staticClass: "chip border right-round top-round" },
                    [
                      _c("img", { attrs: { src: "/favicon.png" } }),
                      _c("span", [_vm._v("Chip")]),
                    ]
                  ),
                  _c(
                    "a",
                    { staticClass: "chip border right-round bottom-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                      _c("span", [_vm._v("Chip")]),
                    ]
                  ),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip border left-round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(110),
                  _c("a", { staticClass: "chip border left-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip border left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _c("a", { staticClass: "chip border right-round" }, [
                    _vm._v("Chip"),
                  ]),
                  _vm._m(111),
                  _c("a", { staticClass: "chip border right-round" }, [
                    _c("img", { attrs: { src: "/favicon.png" } }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                  _c("a", { staticClass: "chip border right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Chip")]),
                  ]),
                ]),
                _c("nav", { staticClass: "wrap" }, [
                  _vm._m(112),
                  _vm._m(113),
                  _vm._m(114),
                  _vm._m(115),
                  _vm._m(116),
                  _vm._m(117),
                  _vm._m(118),
                  _vm._m(119),
                  _vm._m(120),
                  _vm._m(121),
                  _vm._m(122),
                  _c("a", { staticClass: "chip border square" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip border square round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip border circle" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c(
                    "a",
                    { staticClass: "chip border square left-round top-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "a",
                    {
                      staticClass: "chip border square left-round bottom-round",
                    },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "a",
                    { staticClass: "chip border square right-round top-round" },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c(
                    "a",
                    {
                      staticClass:
                        "chip border square right-round bottom-round",
                    },
                    [
                      _c("img", {
                        staticClass: "responsive",
                        attrs: { src: "/favicon.png" },
                      }),
                    ]
                  ),
                  _c("a", { staticClass: "chip border square left-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _c("a", { staticClass: "chip border square right-round" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                ]),
              ]),
            ]),
          ]),
          _vm._m(123),
          _c("div", { staticClass: "col s12", attrs: { id: "containers" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Containers")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#containers .container",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", [
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updateContainer()
                    },
                  },
                },
                [_vm._v("Default")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updateContainer("min")
                    },
                  },
                },
                [_vm._v("Min")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updateContainer("max")
                    },
                  },
                },
                [_vm._v("Max")]
              ),
            ]),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: false,
                    expression: "false",
                  },
                ],
              },
              [_c("div", { staticClass: "container" })]
            ),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "dropdowns" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Dropdowns")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#dropdowns button, #dropdowns .field",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", { staticClass: "wrap" }, [
              _c("button", { attrs: { "data-ui": "#dropdown1" } }, [
                _c("span", [_vm._v("This is a large button")]),
                _c("i", [_vm._v("arrow_drop_down")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown",
                    attrs: { id: "dropdown1", "data-ui": "#dropdown1" },
                  },
                  [
                    _c("a", [_vm._v("Title")]),
                    _vm._m(124),
                    _vm._m(125),
                    _vm._m(126),
                    _c("a", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" },
                        }),
                      ]),
                      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
                    ]),
                    _c("a", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" },
                        }),
                      ]),
                      _vm._m(127),
                    ]),
                  ]
                ),
              ]),
              _c("button", { attrs: { "data-ui": "#dropdown2" } }, [
                _c("span", [_vm._v("Button")]),
                _c("i", [_vm._v("arrow_drop_down")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown no-wrap",
                    attrs: { id: "dropdown2", "data-ui": "#dropdown2" },
                  },
                  [
                    _c("a", [_vm._v("Title")]),
                    _vm._m(128),
                    _vm._m(129),
                    _vm._m(130),
                    _c("a", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" },
                        }),
                      ]),
                      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
                    ]),
                    _c("a", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "circle tiny",
                          attrs: { src: "/beer-and-woman.jpg" },
                        }),
                      ]),
                      _vm._m(131),
                    ]),
                  ]
                ),
              ]),
              _c(
                "button",
                { staticClass: "circle", attrs: { "data-ui": "#dropdown3" } },
                [
                  _c("i", [_vm._v("arrow_back")]),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown left no-wrap",
                      attrs: { id: "dropdown3", "data-ui": "#dropdown3" },
                    },
                    [
                      _c("a", [_vm._v("Title")]),
                      _vm._m(132),
                      _vm._m(133),
                      _vm._m(134),
                      _c("a", { staticClass: "row no-wrap middle-align" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle tiny",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _c("div", { staticClass: "col" }, [_vm._v("Title")]),
                      ]),
                      _c("a", { staticClass: "row no-wrap middle-align" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle tiny",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(135),
                      ]),
                    ]
                  ),
                ]
              ),
              _c(
                "button",
                { staticClass: "circle", attrs: { "data-ui": "#dropdown4" } },
                [
                  _c("i", [_vm._v("arrow_forward")]),
                  _c(
                    "div",
                    {
                      staticClass: "dropdown right no-wrap",
                      attrs: { id: "dropdown4", "data-ui": "#dropdown4" },
                    },
                    [
                      _c("a", [_vm._v("Title")]),
                      _vm._m(136),
                      _vm._m(137),
                      _vm._m(138),
                      _c("a", { staticClass: "row no-wrap middle-align" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle tiny",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _c("div", { staticClass: "col" }, [_vm._v("Title")]),
                      ]),
                      _c("a", { staticClass: "row no-wrap middle-align" }, [
                        _c("div", { staticClass: "col min" }, [
                          _c("img", {
                            staticClass: "circle tiny",
                            attrs: { src: "/beer-and-woman.jpg" },
                          }),
                        ]),
                        _vm._m(139),
                      ]),
                    ]
                  ),
                ]
              ),
              _c("button", { attrs: { "data-ui": "#dropdown6" } }, [
                _c("span", [_vm._v("Video")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown no-padding small-width",
                    attrs: { id: "dropdown6", "data-ui": "#dropdown6" },
                  },
                  [
                    _c(
                      "video",
                      {
                        staticClass: "responsive",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]
                ),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "expansions" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Expansions")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#expansions details",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(140),
            _c("div", { staticClass: "small-space" }),
            _vm._m(141),
            _c("div", { staticClass: "small-space" }),
            _vm._m(142),
            _c("div", { staticClass: "small-space" }),
            _c("details", [
              _c("summary", { staticClass: "card border round transparent" }, [
                _c("div", { staticClass: "row no-wrap middle-align" }, [
                  _c("div", { staticClass: "col min" }, [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]),
                  _vm._m(143),
                  _vm._m(144),
                ]),
              ]),
              _c("div", { staticClass: "card border round transparent" }, [
                _vm._v(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                ),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "icons" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Icons")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#icons nav",
                        "#modal-icons",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/ICON.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(145),
            _vm._m(146),
            _vm._m(147),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "inputs" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Inputs")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#inputs .field",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/INPUT.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(148),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _vm._m(149),
              _vm._m(150),
              _vm._m(151),
              _vm._m(152),
              _vm._m(153),
              _vm._m(154),
              _vm._m(155),
              _vm._m(156),
              _vm._m(157),
              _c("div", { staticClass: "col s12 l4" }, [
                _c("div", { staticClass: "field label prefix border" }, [
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                  _c("input", { attrs: { type: "text" } }),
                  _c("label", [_vm._v("Label")]),
                ]),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c("div", { staticClass: "field label suffix border" }, [
                  _c("input", { attrs: { type: "text" } }),
                  _c("label", [_vm._v("Label")]),
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                ]),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c("div", { staticClass: "field label prefix suffix border" }, [
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                  _c("input", { attrs: { type: "text" } }),
                  _c("label", [_vm._v("Label")]),
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "layouts" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Layouts")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      _vm.layout = 0
                      _vm.showSamples(
                        "#layouts article",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(158),
            _vm._m(159),
            _c("div", { staticClass: "space" }),
            _vm._m(160),
            _vm._m(161),
            _c("div", { staticClass: "space" }),
            _vm._m(162),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "list" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Lists")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples("#list .row")
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(163),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Today"),
            ]),
            _vm._m(164),
            _vm._m(165),
            _vm._m(166),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Yesterday"),
            ]),
            _vm._m(167),
            _vm._m(168),
            _vm._m(169),
            _c("label", { staticClass: "large-space middle-align" }, [
              _vm._v("Older"),
            ]),
            _c("div", { staticClass: "row no-wrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" },
                }),
              ]),
              _vm._m(170),
              _vm._m(171),
            ]),
            _c("div", { staticClass: "row no-wrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" },
                }),
              ]),
              _vm._m(172),
              _vm._m(173),
            ]),
            _c("div", { staticClass: "row no-wrap middle-align" }, [
              _c("div", { staticClass: "col min" }, [
                _c("img", {
                  staticClass: "circle tiny",
                  attrs: { src: "/beer-and-woman.jpg" },
                }),
              ]),
              _vm._m(174),
              _vm._m(175),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "loaders" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Loaders")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#loaders .loader",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/LOADER.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(176),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "media" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Media")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#media img:visible, #media video:visible",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/MEDIA.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", { staticClass: "wrap m l" }, [
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.mediaImage,
                      expression: "mediaImage",
                    },
                  ],
                  attrs: { value: "1", type: "radio", name: "media-images" },
                  domProps: { checked: _vm._q(_vm.mediaImage, "1") },
                  on: {
                    change: function ($event) {
                      _vm.mediaImage = "1"
                    },
                  },
                }),
                _c("span", [_vm._v("images")]),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.mediaImage,
                      expression: "mediaImage",
                    },
                  ],
                  attrs: { value: "2", type: "radio", name: "media-images" },
                  domProps: { checked: _vm._q(_vm.mediaImage, "2") },
                  on: {
                    change: function ($event) {
                      _vm.mediaImage = "2"
                    },
                  },
                }),
                _c("span", [_vm._v("videos")]),
              ]),
            ]),
            _vm.mediaImage == 1
              ? _c("nav", { staticClass: "wrap" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "circle tiny",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "circle small",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "circle large",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "circle extra",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "round tiny",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "round small",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "round",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "round large",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "round extra",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "left-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "top-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "right-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "bottom-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "top-round left-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("a", [
                    _c("img", {
                      staticClass: "bottom-round right-round medium",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                ])
              : _vm._e(),
            _vm.mediaImage == 2
              ? _c("nav", { staticClass: "wrap" }, [
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "circle tiny",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "circle small",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "circle medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "circle large",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "circle extra",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "round tiny",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "round small",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "round large",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "round extra",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "left-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "top-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "right-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "bottom-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "top-round left-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                  _c("a", [
                    _c(
                      "video",
                      {
                        staticClass: "bottom-round right-round medium",
                        attrs: {
                          autoplay: "autoplay",
                          loop: "loop",
                          muted: "muted",
                          playsinline: "playsinline",
                        },
                        domProps: { muted: true },
                      },
                      [
                        _c("source", {
                          attrs: { src: "/dance.mp4", type: "video/mp4" },
                        }),
                      ]
                    ),
                  ]),
                ])
              : _vm._e(),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "modals" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Modals")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#modal, #modal-left, #modal-right, #modal-top, #modal-bottom",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/MODAL.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(177),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "navs" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Navs")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#navs nav",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/NAV.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", [
              _c("button", [_vm._v("Button")]),
              _c("a", { staticClass: "chip" }, [_vm._v("Chip")]),
              _c("i", [_vm._v("home")]),
              _c("a", [
                _c("img", {
                  staticClass: "circle",
                  attrs: { src: "/beer-and-woman.jpg" },
                }),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "pages" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Pages")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#pages .page",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/PAGE.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _c("nav", { staticClass: "wrap" }, [
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updatePage("#page")
                    },
                  },
                },
                [_vm._v("Default")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updatePage("#page-left")
                    },
                  },
                },
                [_vm._v("Left")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updatePage("#page-top")
                    },
                  },
                },
                [_vm._v("Top")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updatePage("#page-bottom")
                    },
                  },
                },
                [_vm._v("Bottom")]
              ),
              _c(
                "button",
                {
                  on: {
                    click: function ($event) {
                      return _vm.updatePage("#page-right")
                    },
                  },
                },
                [_vm._v("Right")]
              ),
            ]),
            _vm._m(178),
            _vm._m(179),
            _vm._m(180),
            _vm._m(181),
            _vm._m(182),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "progress" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Progress")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#progress .small-space, #progress article, #progress nav > button, #progress nav > .chip",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(183),
            _c("div", { staticClass: "space" }),
            _vm._m(184),
            _c("div", { staticClass: "space" }),
            _vm._m(185),
            _c("div", { staticClass: "space" }),
            _vm._m(186),
            _c("div", { staticClass: "space" }),
            _vm._m(187),
            _vm._m(188),
            _vm._m(189),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "radios" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Radios")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      _vm.showSamples(
                        "#radios .field:not(#radios1), #radios1 label",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/RADIO.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(190),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "responsive" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Responsive")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#responsive nav",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/HELPERS.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(191),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "rows" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Rows")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#rows .row",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/ROW.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(192),
            _c("div", { staticClass: "space" }),
            _vm._m(193),
            _vm._m(194),
            _vm._m(195),
            _vm._m(196),
            _vm._m(197),
            _vm._m(198),
            _vm._m(199),
            _c("div", { staticClass: "space" }),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "selects" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Selects")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#selects .field",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/SELECT.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(200),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _vm._m(201),
              _vm._m(202),
              _vm._m(203),
              _vm._m(204),
              _vm._m(205),
              _vm._m(206),
              _c("div", { staticClass: "col s12 l4" }, [
                _c("div", { staticClass: "field label suffix border" }, [
                  _vm._m(207),
                  _c("label", { staticClass: "active" }, [_vm._v("Label")]),
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                ]),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c("div", { staticClass: "field label suffix border" }, [
                  _vm._m(208),
                  _c("label", { staticClass: "active" }, [_vm._v("Label")]),
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                  _c("span", { staticClass: "helper" }, [
                    _vm._v("Complementary text"),
                  ]),
                ]),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c(
                  "div",
                  { staticClass: "field label suffix invalid border" },
                  [
                    _vm._m(209),
                    _c("label", { staticClass: "active" }, [_vm._v("Label")]),
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", { staticClass: "error" }, [
                      _vm._v("Error text"),
                    ]),
                  ]
                ),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "switches" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Switches")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      _vm.showSamples(
                        "#switches .field:not(#switches1), #switches1 label",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/SWITCH.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(210),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "table" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Tables")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#table table",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TABLE.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(211),
            _c("div", { staticClass: "space" }),
            _vm._m(212),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "tabs" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Tabs")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      _vm.showSamples(
                        "#tabs > div:not(.large-space)",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TABS.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(213),
            _c("p", { staticClass: "space" }),
            _vm._m(214),
            _vm._m(215),
            _vm._m(216),
            _c("div", [
              _c("div", { staticClass: "tabs" }, [
                _c(
                  "a",
                  { staticClass: "active", attrs: { "data-ui": "#tab7" } },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Tab 1")]),
                  ]
                ),
                _c("a", { attrs: { "data-ui": "#tab8" } }, [
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                  _c("span", [_vm._v("Tab 2")]),
                ]),
                _c("a", { attrs: { "data-ui": "#tab9" } }, [
                  _c("img", {
                    staticClass: "circle",
                    attrs: { src: "/favicon.png" },
                  }),
                  _c("span", [_vm._v("Tab 3")]),
                ]),
              ]),
              _vm._m(217),
              _vm._m(218),
              _vm._m(219),
            ]),
            _c("div", [
              _c("div", { staticClass: "tabs" }, [
                _c(
                  "a",
                  {
                    staticClass: "wrap active",
                    attrs: { "data-ui": "#tab13" },
                  },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Tab 1")]),
                  ]
                ),
                _c(
                  "a",
                  { staticClass: "wrap", attrs: { "data-ui": "#tab14" } },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Tab 2")]),
                  ]
                ),
                _c(
                  "a",
                  { staticClass: "wrap", attrs: { "data-ui": "#tab15" } },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("span", [_vm._v("Tab 3")]),
                  ]
                ),
              ]),
              _vm._m(220),
              _vm._m(221),
              _vm._m(222),
            ]),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "textareas" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Textareas")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#textareas .field",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(223),
            _c("div", { staticClass: "space" }),
            _c("div", { staticClass: "row" }, [
              _vm._m(224),
              _vm._m(225),
              _vm._m(226),
              _vm._m(227),
              _vm._m(228),
              _vm._m(229),
              _vm._m(230),
              _vm._m(231),
              _vm._m(232),
              _c("div", { staticClass: "col s12 l4" }, [
                _c(
                  "div",
                  { staticClass: "field textarea label prefix border" },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("textarea"),
                    _c("label", [_vm._v("Label")]),
                  ]
                ),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c(
                  "div",
                  { staticClass: "field textarea label suffix border" },
                  [
                    _c("textarea"),
                    _c("label", [_vm._v("Label")]),
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]
                ),
              ]),
              _c("div", { staticClass: "col s12 l4" }, [
                _c(
                  "div",
                  { staticClass: "field textarea label prefix suffix border" },
                  [
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                    _c("textarea"),
                    _c("label", [_vm._v("Label")]),
                    _c("img", {
                      staticClass: "circle",
                      attrs: { src: "/favicon.png" },
                    }),
                  ]
                ),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col s12 l6", attrs: { id: "toasts" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Toasts")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#toasts .toast",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TOAST.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(233),
            _vm._m(234),
            _vm._m(235),
            _vm._m(236),
            _vm._m(237),
            _vm._m(238),
          ]),
          _c("div", { staticClass: "col s12 l6", attrs: { id: "tooltips" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Tooltips")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#tooltips nav a",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(239),
          ]),
          _c("div", { staticClass: "col s12", attrs: { id: "typography" } }, [
            _c("div", { staticClass: "large-space" }),
            _c("h4", [
              _c("span", [_vm._v("Typography")]),
              _c(
                "a",
                {
                  staticClass: "chip circle",
                  on: {
                    click: function ($event) {
                      return _vm.showSamples(
                        "#typography .col.s6 div",
                        null,
                        "https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md"
                      )
                    },
                  },
                },
                [_c("i", [_vm._v("code")])]
              ),
            ]),
            _vm._m(240),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "large-space" }),
            _c("div", [
              _c("h4", { staticClass: "center-align" }, [_vm._v("Cheers 🍻")]),
              _c("div", { staticClass: "large-space" }),
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://www.myrp.com.br",
                        target: "_self",
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "white extra border circle",
                        attrs: { src: "/myrp.png" },
                      }),
                    ]
                  ),
                  _c("p", [_vm._v("Myrp")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c(
                    "a",
                    {
                      attrs: {
                        href: "https://www.inventti.com.br",
                        target: "_self",
                      },
                    },
                    [
                      _c("img", {
                        staticClass: "white extra border circle",
                        attrs: { src: "/inventti.jpg" },
                      }),
                    ]
                  ),
                  _c("p", [_vm._v("Inventti")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 3")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 4")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 5")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 6")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 7")]),
                ]),
                _c("div", { staticClass: "col s6 m4 l3 center-align" }, [
                  _c("a", [
                    _c("img", {
                      staticClass: "white extra border circle",
                      attrs: { src: "/beer-and-woman.jpg" },
                    }),
                  ]),
                  _c("p", [_vm._v("Sponsor 8")]),
                ]),
              ]),
              _c("div", { staticClass: "large-space" }),
              _vm._m(241),
            ]),
            _c("div", { staticClass: "large-space" }),
            _c("div", [
              _c("h4", { staticClass: "center-align" }, [_vm._v("Support us")]),
              _c("nav", { staticClass: "center-align wrap" }, [
                _c(
                  "a",
                  {
                    attrs: {
                      href: "https://www.patreon.com/beercss",
                      target: "_self",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-support",
                      attrs: { src: "/patreon.png" },
                    }),
                  ]
                ),
                _c(
                  "a",
                  {
                    attrs: {
                      href: "https://www.opencollective.com/beercss",
                      target: "_self",
                    },
                  },
                  [
                    _c("img", {
                      staticClass: "logo-support",
                      attrs: { src: "/open-collective.png" },
                    }),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._m(242),
        _vm._m(243),
        _vm._m(244),
        _vm._m(245),
        _vm._m(246),
        _vm._m(247),
        _c(
          "div",
          { staticClass: "modal right large", attrs: { id: "modal-samples" } },
          [
            _c("header", { staticClass: "fixed" }, [
              _c("nav", [
                _vm._m(248),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.urlSample,
                        expression: "urlSample",
                      },
                    ],
                    staticClass: "button border",
                    attrs: { href: _vm.urlSample, target: "_blank" },
                  },
                  [_vm._v("Documentation")]
                ),
              ]),
            ]),
            _vm._l(_vm.samples, function (exemplo) {
              return _c("article", { staticClass: "border" }, [
                _c("div", { domProps: { innerHTML: _vm._s(exemplo.html) } }),
                _c("div", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: exemplo.html,
                      expression: "exemplo.html",
                    },
                  ],
                  staticClass: "space",
                }),
                _c("pre", {
                  domProps: { innerHTML: _vm._s(exemplo.sourceCode) },
                }),
              ])
            }),
          ],
          2
        ),
        _c(
          "div",
          { staticClass: "modal right large", attrs: { id: "modal-icons" } },
          [
            _c("header", { staticClass: "fixed" }, [
              _c("nav", [
                _vm._m(249),
                _vm._m(250),
                _c(
                  "a",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.modalSample == "#modal-icons",
                        expression: "modalSample == '#modal-icons'",
                      },
                    ],
                    staticClass: "button border",
                    attrs: {
                      href: "https://material.io/resources/icons/?style=baseline",
                      target: "_blank",
                    },
                  },
                  [_vm._v("More icons")]
                ),
              ]),
            ]),
            _c("div", { staticClass: "space" }),
            _vm.modalSample == "#modal-icons"
              ? _c(
                  "div",
                  [
                    _vm._l(_vm.samples, function (exemplo) {
                      return _c("article", { staticClass: "border" }, [
                        _c("div", {
                          domProps: { innerHTML: _vm._s(exemplo.html) },
                        }),
                        _c("div", {
                          directives: [
                            {
                              name: "show",
                              rawName: "v-show",
                              value: exemplo.html,
                              expression: "exemplo.html",
                            },
                          ],
                          staticClass: "space",
                        }),
                        _c("pre", {
                          domProps: { innerHTML: _vm._s(exemplo.sourceCode) },
                        }),
                      ])
                    }),
                    _c("div", { staticClass: "space" }),
                  ],
                  2
                )
              : _vm._e(),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes1" } }, [
      _c("i", [_vm._v("palette")]),
      _c("div", [_vm._v("Themes")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#more1" } }, [
      _c("i", [_vm._v("collections")]),
      _c("div", [_vm._v("Templates")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes2" } }, [
      _c("i", [_vm._v("brightness_medium")]),
      _c("div", [_vm._v("Themes")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#more2" } }, [
      _c("i", [_vm._v("collections")]),
      _c("div", [_vm._v("Templates")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "center-align" }, [
      _c(
        "a",
        {
          staticClass: "button black-border black-text large border",
          attrs: {
            href: "https://www.npmjs.com/package/beercss",
            target: "_self",
          },
        },
        [_vm._v("NPM")]
      ),
      _c(
        "a",
        {
          staticClass: "button black-border black-text large border",
          attrs: {
            href: "https://github.com/beercss/beercss",
            target: "_self",
          },
        },
        [_vm._v("Github")]
      ),
      _c(
        "a",
        {
          staticClass: "button black white-text large",
          attrs: {
            href: "https://github.com/beercss/beercss",
            target: "_self",
          },
        },
        [_vm._v("Get started")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12", attrs: { id: "intro" } }, [
      _c("article", { staticClass: "flat large-padding" }, [
        _c("h3", [_vm._v("Get started ")]),
        _c("div", { staticClass: "medium-space" }),
        _c("h5", [_vm._v("From CDN")]),
        _c(
          "pre",
          {
            staticClass: "wrap",
            staticStyle: { "font-family": "courier new" },
          },
          [
            _vm._v(
              '<link href="https://cdn.jsdelivr.net/npm/beercss@2.0.19/dist/cdn/beer.min.css" rel="stylesheet">\n\n<script src="https://cdn.jsdelivr.net/npm/beercss@2.0.19/dist/cdn/beer.min.js" type="text/javascript">\n\n<script src="https://cdn.jsdelivr.net/npm/material-dynamic-colors@0.0.9/dist/cdn/material-dynamic-colors.min.js" type="text/javascript">'
            ),
          ]
        ),
        _c("div", { staticClass: "medium-space" }),
        _c("h5", [_vm._v("From NPM")]),
        _c(
          "pre",
          {
            staticClass: "wrap",
            staticStyle: { "font-family": "courier new" },
          },
          [
            _vm._v(
              '// installing\nnpm i beercss\nnpm i material-dynamic-colors\n\n// importing\nimport "beercss";\nimport "material-dynamic-colors";'
            ),
          ]
        ),
        _c("div", { staticClass: "medium-space" }),
        _c("b", [
          _vm._v(
            "We recommend use the material-dynamic-colors only when your app needs to change theme at runtime."
          ),
        ]),
        _c("div", { staticClass: "medium-space" }),
        _c("div", { staticClass: "l" }, [
          _c("h5", [_vm._v("Summary")]),
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col s12 m12 l6" }, [
              _c("p", [
                _c("b", [_vm._v("absolute")]),
                _c("span", [
                  _vm._v(
                    " left, right, top, bottom, front, back, small, medium, large"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("badge")]),
                _c("span", [
                  _vm._v(
                    " left, right, top, bottom, border, circle, square, round, left-round, right-round, top-round, bottom-round"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("button or <button>")]),
                _c("span", [
                  _vm._v(
                    " small, medium, large, extra, none, extend, border, flat, circle, square, round, left-round, right-round, top-round, bottom-round, responsive"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("card or <article>")]),
                _c("span", [
                  _vm._v(
                    " small, medium, large, border, flat, round, left-round, top-round, right-round, bottom-round, no-padding, padding, small-padding, medium-padding, large-padding"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("chip")]),
                _c("span", [
                  _vm._v(
                    " small, medium, large, border, circle, square, round, left-round, right-round, top-round, bottom-round"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("col")]),
                _c("span", [_vm._v(" min, max, s1...s12, m1...m12, l1...l12")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("container")]),
                _c("span", [_vm._v(" min, max")]),
              ]),
              _c("p", [_c("b", [_vm._v("<details>")])]),
              _c("p", [
                _c("b", [_vm._v("dropdown")]),
                _c("span", [_vm._v(" left, right, wrap, no-wrap, active")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("field")]),
                _c("span", [
                  _vm._v(
                    " small, medium, large, extra, label, border, round, fill, prefix, suffix, textarea "
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("fixed")]),
                _c("span", [
                  _vm._v(
                    " left, right, top, bottom, front, back, small, medium, large"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("<footer>")]),
                _c("span", [_vm._v(" fixed")]),
              ]),
              _c("p", [_c("b", [_vm._v("<h1>...<h6>")])]),
              _c("p", [
                _c("b", [_vm._v("<header>")]),
                _c("span", [_vm._v(" fixed")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("<i>")]),
                _c("span", [_vm._v(" tiny, small, medium, large, extra")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("<img>")]),
                _c("span", [
                  _vm._v(
                    " tiny, small, medium, large, extra, circle, round, left-round, right-round, top-round, bottom-round, responsive"
                  ),
                ]),
              ]),
            ]),
            _c("div", { staticClass: "col s12 m12 l6" }, [
              _c("p", [
                _c("b", [_vm._v("<label>")]),
                _c("span", [_vm._v(" active, radio, checkbox, switch")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("loader")]),
                _c("span", [_vm._v(" small, medium, large")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("menu")]),
                _c("span", [
                  _vm._v(
                    " left, right, top, bottom, left-align, right-align, center-align, top-align, bottom-align, middle-align, flat, border, round, left-round, right-round, top-round, bottom-round, no-space, small-space, medium-space, large-space, no-margin, small-margin, medium-margin, large-margin"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("modal")]),
                _c("span", [
                  _vm._v(
                    " left, right, top, bottom, small, medium, large, border, round, flat, left-round, right-round, top-round, bottom-round, active"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("<nav>")]),
                _c("span", [
                  _vm._v(
                    " left-align, right-align, center-align, top-align, bottom-align, middle-align, wrap, no-wrap"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("overlay")]),
                _c("span", [
                  _vm._v(
                    " left-align, right-align, center-align, top-align, bottom-align, middle-align, active"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("page")]),
                _c("span", [_vm._v(" left, right, top, bottom, active")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("progress")]),
                _c("span", [_vm._v(" left, right, top, bottom")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("row")]),
                _c("span", [
                  _vm._v(
                    " no-wrap, no-space, space, small-space, medium-space, large-space, min, max"
                  ),
                ]),
              ]),
              _c("p", [_c("b", [_vm._v("<summary>")])]),
              _c("p", [
                _c("b", [_vm._v("<table>")]),
                _c("span", [
                  _vm._v(
                    " left-align, right-align, center-align, no-space, space, small-space, medium-space, large-space, min, max, border"
                  ),
                ]),
              ]),
              _c("p", [
                _c("b", [_vm._v("tabs")]),
                _c("span", [_vm._v(" left-align, right-align, center-align")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("toast")]),
                _c("span", [_vm._v(" top, bottom, active")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("tooltip")]),
                _c("span", [_vm._v(" left, right, top, bottom")]),
              ]),
              _c("p", [
                _c("b", [_vm._v("<video>")]),
                _c("span", [
                  _vm._v(
                    " tiny, small, medium, large, extra, circle, round, left-round, right-round, top-round, bottom-round, responsive"
                  ),
                ]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "medium-space" }),
        ]),
        _c("nav", { staticClass: "wrap" }, [
          _c(
            "a",
            {
              staticClass: "button",
              attrs: {
                href: "https://github.com/beercss/beercss/blob/main/docs/INDEX.md",
              },
            },
            [_vm._v("Documentation")]
          ),
          _c(
            "a",
            {
              staticClass: "button",
              attrs: { href: "https://codepen.io/collection/XydYMB" },
            },
            [_vm._v("Codepen")]
          ),
        ]),
      ]),
      _c("div", { staticClass: "large-space" }),
      _c("div", { staticClass: "large-space" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "default-badges",
            type: "radio",
            name: "color-badges",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("default")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "blue-badges", type: "radio", name: "color-badges" },
        }),
        _c("span", [_vm._v("blue")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "purple-badges", type: "radio", name: "color-badges" },
        }),
        _c("span", [_vm._v("purple")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "teal-badges", type: "radio", name: "color-badges" },
        }),
        _c("span", [_vm._v("teal")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 m6" }, [
        _c("div", { staticClass: "space" }),
        _c("nav", { staticClass: "wrap" }, [
          _c("a", [
            _c("span", { staticClass: "badge" }, [_vm._v("New")]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round" }, [_vm._v("New")]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle" }, [_vm._v("10")]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square" }, [_vm._v("10")]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge top" }, [_vm._v("New")]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round top" }, [_vm._v("New")]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle top" }, [_vm._v("10")]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square top" }, [_vm._v("10")]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge left top" }, [_vm._v("New")]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round left top" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle left top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square left top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge bottom right" }, [_vm._v("New")]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round bottom right" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle bottom right" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square bottom right" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge bottom" }, [_vm._v("New")]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round bottom" }, [_vm._v("New")]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle bottom" }, [_vm._v("10")]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square bottom" }, [_vm._v("10")]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge left bottom" }, [_vm._v("New")]),
            _c("i", [_vm._v("apps")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge round left bottom" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("search")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle left bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("notifications")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square left bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("apps")]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 m6" }, [
        _c("div", { staticClass: "space" }),
        _c("nav", { staticClass: "wrap" }, [
          _c("a", [
            _c("span", { staticClass: "badge border" }, [_vm._v("New")]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round" }, [_vm._v("New")]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border" }, [_vm._v("10")]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border" }, [_vm._v("10")]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border top" }, [_vm._v("New")]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round top" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border left top" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round left top" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border left top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border left top" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border bottom right" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round bottom right" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border bottom right" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border bottom right" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border bottom" }, [_vm._v("New")]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round bottom" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border left bottom" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("account_circlec")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge border round left bottom" }, [
              _vm._v("New"),
            ]),
            _c("i", [_vm._v("help_outline")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge circle border left bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("home")]),
          ]),
          _c("a", [
            _c("span", { staticClass: "badge square border left bottom" }, [
              _vm._v("10"),
            ]),
            _c("i", [_vm._v("account_circle")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("button", { staticClass: "square" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "diamond" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "square round" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "diamond round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "circle left-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle left-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle right-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle right-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle left-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "circle right-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("button", { staticClass: "flat square" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "flat diamond" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "flat square round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat diamond round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle" }, [_c("i", [_vm._v("add")])]),
      _c("button", { staticClass: "flat circle left-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle left-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle right-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle right-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle left-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "flat circle right-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("button", { staticClass: "border square" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border diamond" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border square round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border diamond round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle left-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle left-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle right-round top-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle right-round bottom-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle left-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("button", { staticClass: "border circle right-round" }, [
        _c("i", [_vm._v("add")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6 m6 l3" }, [
      _c("nav", [
        _c("button", { staticClass: "extend square" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend square round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle left-round top-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle left-round bottom-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle right-round top-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend circle right-round bottom-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle left-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend circle right-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6 m6 l3" }, [
      _c("nav", [
        _c("button", { staticClass: "extend flat square" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend flat square round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend flat circle" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend flat circle left-round top-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend flat circle left-round bottom-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend flat circle right-round top-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend flat circle right-round bottom-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend flat circle left-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend flat circle right-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s6 m6 l3" }, [
      _c("nav", [
        _c("button", { staticClass: "extend border square" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend border square round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend border circle" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend border circle left-round top-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend border circle left-round bottom-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend border circle right-round top-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c(
          "button",
          { staticClass: "extend border circle right-round bottom-round" },
          [_c("i", [_vm._v("add")]), _c("span", [_vm._v("Button")])]
        ),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend border circle left-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
      _c("nav", [
        _c("button", { staticClass: "extend border circle right-round" }, [
          _c("i", [_vm._v("add")]),
          _c("span", [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "flat" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "flat round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "border" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "border round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "border left-round bottom-round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "border left-round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("button", { staticClass: "border right-round" }, [
      _c("i", [_vm._v("home")]),
      _c("span", [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive round" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive round" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive flat" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive flat" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive flat round" }, [
        _vm._v("Button"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive flat round" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border round" }, [
        _vm._v("Button"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border round" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border left-round" }, [
        _vm._v("Button"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border left-round" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border right-round" }, [
        _vm._v("Button"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "responsive border right-round" }, [
        _c("i", [_vm._v("home")]),
        _c("span", [_vm._v("Button")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "left-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "top-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "right-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "bottom-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "top-round left-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "bottom-round right-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ),
        ]),
        _c("nav", [
          _c("button", { staticClass: "border" }, [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "absolute top left right padding top-shadow white-text" },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ),
        ]),
        _c("nav", [
          _c("button", { staticClass: "border" }, [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "left-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "top-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "right-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "bottom-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "top-round left-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 m4 l2" }, [
      _c("article", { staticClass: "bottom-round right-round" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { staticClass: "none" }, [_vm._v("Button")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "padding" }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", [_c("button", { staticClass: "none" }, [_vm._v("Button")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "absolute bottom left right padding bottom-shadow white-text",
      },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", [
          _c("button", { staticClass: "border small" }, [_vm._v("Button")]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ),
        ]),
        _c("nav", [
          _c("button", { staticClass: "border" }, [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "absolute top left right padding top-shadow white-text" },
      [
        _c("h5", { staticClass: "no-margin" }, [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", { staticClass: "padding" }, [
        _c("h5", [_vm._v("Title")]),
        _c("div", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          ),
        ]),
        _c("nav", [
          _c("button", { staticClass: "border" }, [_vm._v("Button")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c(
          "div",
          { staticClass: "field middle-align", attrs: { id: "checkboxes1" } },
          [
            _c("nav", [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span"),
              ]),
              _c("label", { staticClass: "checkbox" }, [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Enabled")]),
              ]),
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  attrs: { type: "checkbox", disabled: "disabled" },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  attrs: {
                    type: "checkbox",
                    checked: "checked",
                    disabled: "disabled",
                  },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
            ]),
          ]
        ),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field middle-align" }, [
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 l6" }, [
        _c("div", { staticClass: "field label middle-align invalid" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "default-chips",
            type: "radio",
            name: "color-chips",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("default")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "brown-chips", type: "radio", name: "color-chips" },
        }),
        _c("span", [_vm._v("brown")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "indigo-chips", type: "radio", name: "color-chips" },
        }),
        _c("span", [_vm._v("indigo")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "red-chips", type: "radio", name: "color-chips" },
        }),
        _c("span", [_vm._v("red")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "small-chips", type: "radio", name: "size-chips" },
        }),
        _c("span", [_vm._v("small")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "medium-chips",
            type: "radio",
            name: "size-chips",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("medium")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "large-chips", type: "radio", name: "size-chips" },
        }),
        _c("span", [_vm._v("large")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "active-chips", type: "checkbox", name: "active-chips" },
        }),
        _c("span", [_vm._v("active")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip left-round bottom-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip left-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip right-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip diamond" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip diamond round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip circle" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square left-round top-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square left-round bottom-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square right-round top-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square right-round bottom-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square left-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip square right-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border left-round bottom-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border left-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border right-round" }, [
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("span", [_vm._v("Chip")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border square" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border diamond" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border square round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border diamond round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border circle" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border square left-round top-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "chip border square left-round bottom-round" },
      [_c("i", [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "chip border square right-round top-round" },
      [_c("i", [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "chip border square right-round bottom-round" },
      [_c("i", [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border square left-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "chip border square right-round" }, [
      _c("i", [_vm._v("search")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12", attrs: { id: "colors" } }, [
      _c("div", { staticClass: "large-space" }),
      _c("h4", [
        _c("span", [_vm._v("Colors")]),
        _c(
          "a",
          { staticClass: "chip circle", attrs: { "data-ui": "#modal-colors" } },
          [_c("i", [_vm._v("code")])]
        ),
      ]),
      _c("nav", [
        _c("button", { attrs: { "data-ui": "#modal-colors" } }, [
          _vm._v("Colors"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [_vm._v("Title")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("details", [
      _c("summary", [_vm._v("Title")]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("details", { staticClass: "card" }, [
      _c("summary", [_vm._v("Title")]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("details", { staticClass: "card" }, [
      _c("summary", { staticClass: "none" }, [
        _c("div", { staticClass: "row no-wrap middle-align" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", [_vm._v("Title")]),
            _c("div", { staticClass: "small-text" }, [
              _vm._v("Complementary text"),
            ]),
          ]),
          _c("div", { staticClass: "col min" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("div", { staticClass: "small-text" }, [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("i", [_vm._v("more_vert")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("i", { staticClass: "small" }, [_vm._v("home")]),
      _c("i", { staticClass: "small" }, [_vm._v("account_circle")]),
      _c("i", { staticClass: "small" }, [_vm._v("search")]),
      _c("i", { staticClass: "small" }, [_vm._v("build")]),
      _c("i", { staticClass: "small" }, [_vm._v("done")]),
      _c("i", { staticClass: "small" }, [_vm._v("cached")]),
      _c("i", { staticClass: "small" }, [_vm._v("star_rate")]),
      _c("i", { staticClass: "small" }, [_vm._v("work")]),
      _c("i", { staticClass: "small" }, [_vm._v("update")]),
      _c("i", { staticClass: "small" }, [_vm._v("thumb_up")]),
    ])
  },
  function () {
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
      _c("i", [_vm._v("thumb_up")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("i", { staticClass: "large" }, [_vm._v("home")]),
      _c("i", { staticClass: "large" }, [_vm._v("account_circle")]),
      _c("i", { staticClass: "large" }, [_vm._v("search")]),
      _c("i", { staticClass: "large" }, [_vm._v("build")]),
      _c("i", { staticClass: "large" }, [_vm._v("done")]),
      _c("i", { staticClass: "large" }, [_vm._v("cached")]),
      _c("i", { staticClass: "large" }, [_vm._v("star_rate")]),
      _c("i", { staticClass: "large" }, [_vm._v("work")]),
      _c("i", { staticClass: "large" }, [_vm._v("update")]),
      _c("i", { staticClass: "large" }, [_vm._v("thumb_up")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "border-inputs", type: "checkbox", checked: "checked" },
        }),
        _c("span", [_vm._v("border")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "round-inputs", type: "checkbox" } }),
        _c("span", [_vm._v("round")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "fill-inputs", type: "checkbox" } }),
        _c("span", [_vm._v("fill")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "small-inputs", type: "radio", name: "size-inputs" },
        }),
        _c("span", [_vm._v("small")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "medium-inputs",
            type: "radio",
            name: "size-inputs",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("medium")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "large-inputs", type: "radio", name: "size-inputs" },
        }),
        _c("span", [_vm._v("large")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "extra-inputs", type: "radio", name: "size-inputs" },
        }),
        _c("span", [_vm._v("extra")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "text-inputs",
            type: "radio",
            name: "type-inputs",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("text")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "password-inputs", type: "radio", name: "type-inputs" },
        }),
        _c("span", [_vm._v("password")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "file-inputs", type: "radio", name: "type-inputs" },
        }),
        _c("span", [_vm._v("file")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "date-inputs", type: "radio", name: "type-inputs" },
        }),
        _c("span", [_vm._v("date")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "time-inputs", type: "radio", name: "type-inputs" },
        }),
        _c("span", [_vm._v("time")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field border" }, [
        _c("input", { attrs: { type: "text" } }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field invalid border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label invalid border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label prefix border" }, [
        _c("i", [_vm._v("search")]),
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label suffix border" }, [
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
        _c("i", [_vm._v("search")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label prefix suffix border" }, [
        _c("i", [_vm._v("search")]),
        _c("input", { attrs: { type: "text" } }),
        _c("label", [_vm._v("Label")]),
        _c("i", [_vm._v("search")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "center-layouts", type: "checkbox", checked: "checked" },
        }),
        _c("span", [_vm._v("center")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "left-layouts", type: "checkbox" } }),
        _c("span", [_vm._v("left")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "right-layouts", type: "checkbox" } }),
        _c("span", [_vm._v("right")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "middle-layouts", type: "checkbox", checked: "checked" },
        }),
        _c("span", [_vm._v("middle")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "top-layouts", type: "checkbox" } }),
        _c("span", [_vm._v("top")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "bottom-layouts", type: "checkbox" } }),
        _c("span", [_vm._v("bottom")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "positions" } }, [
      _c("article", { staticClass: "border medium no-padding" }, [
        _c(
          "div",
          {
            staticClass:
              "padding absolute blue white-text center middle primary",
          },
          [
            _c("h5", [_vm._v("Position")]),
            _c("div", [_vm._v("Lorem ipsum dolor...")]),
          ]
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "center-align-layouts",
            type: "radio",
            name: "horizontal-layouts",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("center-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "left-align-layouts",
            type: "radio",
            name: "horizontal-layouts",
          },
        }),
        _c("span", [_vm._v("left-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "right-align-layouts",
            type: "radio",
            name: "horizontal-layouts",
          },
        }),
        _c("span", [_vm._v("right-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "middle-align-layouts",
            type: "radio",
            name: "vertical-layouts",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("middle-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "top-align-layouts",
            type: "radio",
            name: "vertical-layouts",
          },
        }),
        _c("span", [_vm._v("top-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "bottom-align-layouts",
            type: "radio",
            name: "vertical-layouts",
          },
        }),
        _c("span", [_vm._v("bottom-align")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "alignments" } }, [
      _c(
        "article",
        { staticClass: "border medium no-padding center-align middle-align" },
        [
          _c("div", { staticClass: "padding" }, [
            _c("h5", [_vm._v("Alignment")]),
            _c("div", [_vm._v("Lorem ipsum dolor...")]),
          ]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 m6" }, [
        _c("article", { staticClass: "flat small scroll" }, [
          _c("header", { staticClass: "fixed" }, [
            _c("h5", { staticClass: "no-margin" }, [_vm._v("Fixed header")]),
          ]),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ),
          ]),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 m6" }, [
        _c("article", { staticClass: "flat small scroll" }, [
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ),
          ]),
          _c("p", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ),
          ]),
          _c("footer", { staticClass: "fixed" }, [
            _c("h5", { staticClass: "no-margin" }, [_vm._v("Fixed footer")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "top-align-lists", type: "radio", name: "align-lists" },
        }),
        _c("span", [_vm._v("top-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "middle-align-lists",
            type: "radio",
            name: "align-lists",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("middle-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "bottom-align-lists",
            type: "radio",
            name: "align-lists",
          },
        }),
        _c("span", [_vm._v("bottom-align")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: {
            id: "divider-lists",
            type: "checkbox",
            name: "divider-lists",
          },
        }),
        _c("span", [_vm._v("divider")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "light-green-text" }, [_vm._v("check_circle")]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "orange-text" }, [_vm._v("warning")]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("i", { staticClass: "grey-text" }, [_vm._v("schedule")]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("label", { staticClass: "checkbox" }, [
          _c("input", { attrs: { type: "checkbox" } }),
          _c("span"),
        ]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("label", { staticClass: "checkbox" }, [
          _c("input", { attrs: { type: "checkbox" } }),
          _c("span"),
        ]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c("label", { staticClass: "checkbox" }, [
          _c("input", { attrs: { type: "checkbox" } }),
          _c("span"),
        ]),
      ]),
      _c("div", { staticClass: "col" }, [
        _c("div", [_vm._v("Title")]),
        _c("label", [_vm._v("Complementary text")]),
      ]),
      _c("div", { staticClass: "col min" }, [
        _c("nav", [
          _c("button", { staticClass: "none" }, [_vm._v("Button")]),
          _c("button", { staticClass: "none" }, [
            _c("i", [_vm._v("more_vert")]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("button", { staticClass: "none" }, [_vm._v("Button")]),
        _c("button", { staticClass: "none" }, [_c("i", [_vm._v("more_vert")])]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("button", { staticClass: "none" }, [_vm._v("Button")]),
        _c("button", { staticClass: "none" }, [_c("i", [_vm._v("more_vert")])]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Title")]),
      _c("label", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("nav", [
        _c("button", { staticClass: "none" }, [_vm._v("Button")]),
        _c("button", { staticClass: "none" }, [_c("i", [_vm._v("more_vert")])]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", { staticClass: "loader small" }),
      _c("a", { staticClass: "loader medium" }),
      _c("a", { staticClass: "loader large" }),
      _c("a", { staticClass: "loader small pink" }),
      _c("a", { staticClass: "loader medium orange" }),
      _c("a", { staticClass: "loader large yellow" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", [
      _c("button", { attrs: { "data-ui": "#modal" } }, [_vm._v("Default")]),
      _c("button", { attrs: { "data-ui": "#modal-left" } }, [_vm._v("Left")]),
      _c("button", { attrs: { "data-ui": "#modal-right" } }, [_vm._v("Right")]),
      _c("button", { attrs: { "data-ui": "#modal-top" } }, [_vm._v("Top")]),
      _c("button", { attrs: { "data-ui": "#modal-bottom" } }, [
        _vm._v("Bottom"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page active", attrs: { id: "page" } }, [
      _c("h5", [_vm._v("Default")]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page left", attrs: { id: "page-left" } }, [
      _c("h5", [_vm._v("Left")]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page top", attrs: { id: "page-top" } }, [
      _c("h5", [_vm._v("Top")]),
      _c("p", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "page bottom", attrs: { id: "page-bottom" } },
      [
        _c("h5", [_vm._v("Bottom")]),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula."
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "page right", attrs: { id: "page-right" } },
      [
        _c("h5", [_vm._v("Right")]),
        _c("p", [
          _vm._v(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum ante sit amet risus accumsan, id luctus massa gravida. Morbi fermentum vehicula leo sed rhoncus. Donec sapien lacus, rhoncus ut turpis at, elementum laoreet est. Sed ut diam eget tellus dictum varius eget vel mi. Morbi mattis posuere turpis viverra pulvinar. Sed purus nibh, tempus et sem vel, egestas consectetur eros. Sed tempus neque est. Etiam vitae eros vitae risus suscipit accumsan sed sit amet ex. Quisque eget sodales augue. Nullam eget viverra nunc. In interdum aliquam egestas. Suspendisse ultricies ante euismod, aliquam nisl eu, sagittis libero. Quisque vel condimentum ligula."
          ),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "0-progress",
            type: "radio",
            name: "percent-progress",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("0%")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "30-progress", type: "radio", name: "percent-progress" },
        }),
        _c("span", [_vm._v("30%")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "60-progress", type: "radio", name: "percent-progress" },
        }),
        _c("span", [_vm._v("60%")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "100-progress",
            type: "radio",
            name: "percent-progress",
          },
        }),
        _c("span", [_vm._v("100%")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "default-progress",
            type: "radio",
            name: "color-progress",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("default")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "light-green-progress",
            type: "radio",
            name: "color-progress",
          },
        }),
        _c("span", [_vm._v("light-green")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "orange-progress",
            type: "radio",
            name: "color-progress",
          },
        }),
        _c("span", [_vm._v("orange")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-space primary-container border" }, [
      _c("div", { staticClass: "progress left" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "small-space secondary-container border" },
      [_c("div", { staticClass: "progress left" })]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "small-space tertiary-container" }, [
      _c("div", { staticClass: "progress right" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 m3" }, [
        _c("article", { staticClass: "small" }, [
          _c("div", { staticClass: "progress left" }),
          _c("h5", [_vm._v("Card")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 m3" }, [
        _c("article", { staticClass: "small round" }, [
          _c("div", { staticClass: "progress right" }),
          _c("h5", [_vm._v("Card")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 m3" }, [
        _c("article", { staticClass: "border small" }, [
          _c("div", { staticClass: "progress top" }),
          _c("h5", [_vm._v("Card")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 m3" }, [
        _c("article", { staticClass: "small border round" }, [
          _c("div", { staticClass: "progress bottom" }),
          _c("h5", [_vm._v("Card")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("button", [
        _c("div", { staticClass: "progress left" }),
        _c("span", [_vm._v("Button")]),
      ]),
      _c("button", { staticClass: "round" }, [
        _c("div", { staticClass: "progress right" }),
        _c("span", [_vm._v("Button")]),
      ]),
      _c("button", { staticClass: "circle extra" }, [
        _c("div", { staticClass: "progress top" }),
        _c("i", [_vm._v("home")]),
      ]),
      _c("button", { staticClass: "square extra" }, [
        _c("div", { staticClass: "progress bottom" }),
        _c("i", [_vm._v("home")]),
      ]),
      _c("button", { staticClass: "border" }, [
        _c("div", { staticClass: "progress left" }),
        _c("span", [_vm._v("Button")]),
      ]),
      _c("button", { staticClass: "border round" }, [
        _c("div", { staticClass: "progress right" }),
        _c("span", [_vm._v("Button")]),
      ]),
      _c("button", { staticClass: "border circle extra" }, [
        _c("div", { staticClass: "progress top" }),
        _c("i", [_vm._v("home")]),
      ]),
      _c("button", { staticClass: "border square extra" }, [
        _c("div", { staticClass: "progress bottom" }),
        _c("i", [_vm._v("home")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", { staticClass: "chip" }, [
        _c("div", { staticClass: "progress left" }),
        _c("span", [_vm._v("Chip")]),
      ]),
      _c("a", { staticClass: "chip round" }, [
        _c("div", { staticClass: "progress right" }),
        _c("span", [_vm._v("Chip")]),
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("div", { staticClass: "progress top" }),
        _c("i", [_vm._v("search")]),
      ]),
      _c("a", { staticClass: "chip square" }, [
        _c("div", { staticClass: "progress bottom" }),
        _c("i", [_vm._v("search")]),
      ]),
      _c("a", { staticClass: "chip border" }, [
        _c("div", { staticClass: "progress left" }),
        _c("span", [_vm._v("Chip")]),
      ]),
      _c("a", { staticClass: "chip border round" }, [
        _c("div", { staticClass: "progress right" }),
        _c("span", [_vm._v("Chip")]),
      ]),
      _c("a", { staticClass: "chip border circle" }, [
        _c("div", { staticClass: "progress top" }),
        _c("i", [_vm._v("search")]),
      ]),
      _c("a", { staticClass: "chip border square" }, [
        _c("div", { staticClass: "progress bottom" }),
        _c("i", [_vm._v("search")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c(
          "div",
          { staticClass: "field middle-align", attrs: { id: "radios1" } },
          [
            _c("nav", [
              _c("label", { staticClass: "radio" }, [
                _c("input", { attrs: { type: "radio", name: "radio1" } }),
                _c("span"),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", { attrs: { type: "radio", name: "radio1" } }),
                _c("span", [_vm._v("Enabled")]),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "radio2",
                    disabled: "disabled",
                  },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
              _c("label", { staticClass: "radio" }, [
                _c("input", {
                  attrs: {
                    type: "radio",
                    name: "radio2",
                    checked: "checked",
                    disabled: "disabled",
                  },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
            ]),
          ]
        ),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field middle-align" }, [
          _c("nav", [
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio3" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio3" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio3" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio4" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio4" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio4" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio5" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio5" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio5" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align invalid" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio6" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio6" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "radio" }, [
              _c("input", { attrs: { type: "radio", name: "radio6" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("nav", [
        _c("button", { staticClass: "s circle extra" }, [
          _c("i", [_vm._v("phone_android")]),
        ]),
        _c("button", { staticClass: "m l border circle extra" }, [
          _c("i", [_vm._v("phone_android")]),
        ]),
        _c("button", { staticClass: "m circle extra" }, [
          _c("i", [_vm._v("tablet_android")]),
        ]),
        _c("button", { staticClass: "s l border circle extra" }, [
          _c("i", [_vm._v("tablet_android")]),
        ]),
        _c("button", { staticClass: "l circle extra" }, [
          _c("i", [_vm._v("laptop_windows")]),
        ]),
        _c("button", { staticClass: "s m border circle extra" }, [
          _c("i", [_vm._v("laptop_windows")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "no-space-rows", type: "radio", name: "space-rows" },
        }),
        _c("span", [_vm._v("no-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "small-space-rows",
            type: "radio",
            name: "space-rows",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("small-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "medium-space-rows", type: "radio", name: "space-rows" },
        }),
        _c("span", [_vm._v("medium-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "large-space-rows", type: "radio", name: "space-rows" },
        }),
        _c("span", [_vm._v("large-space")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "min-rows", type: "checkbox", name: "size-rows" },
        }),
        _c("span", [_vm._v("min")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s1" }, [_vm._v("1")]),
      _c("div", { staticClass: "col s6" }, [_vm._v("6")]),
      _c("div", { staticClass: "col s6" }, [_vm._v("6")]),
      _c("div", { staticClass: "col s12" }, [_vm._v("12")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s6" }, [_vm._v("6")]),
      _c("div", { staticClass: "col s6" }, [_vm._v("6")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [_vm._v("12")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12 m6 l3" }, [_vm._v("12/6/3")]),
      _c("div", { staticClass: "col s12 m6 l3" }, [_vm._v("12/6/3")]),
      _c("div", { staticClass: "col s12 m6 l3" }, [_vm._v("12/6/3")]),
      _c("div", { staticClass: "col s12 m6 l3" }, [_vm._v("12/6/3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap" }, [
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap" }, [
      _c("div", { staticClass: "col min" }, [_vm._v("min")]),
      _c("div", { staticClass: "col min" }, [_vm._v("min")]),
      _c("div", { staticClass: "col min" }, [_vm._v("min")]),
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row no-wrap" }, [
      _c("div", { staticClass: "col min" }, [_vm._v("min")]),
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
      _c("div", { staticClass: "col min" }, [_vm._v("min")]),
      _c("div", { staticClass: "col" }, [_vm._v("max")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "border-selects", type: "checkbox", checked: "checked" },
        }),
        _c("span", [_vm._v("border")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "round-selects", type: "checkbox" } }),
        _c("span", [_vm._v("round")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "fill-selects", type: "checkbox" } }),
        _c("span", [_vm._v("fill")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "small-selects", type: "radio", name: "size-selects" },
        }),
        _c("span", [_vm._v("small")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "medium-selects",
            type: "radio",
            name: "size-selects",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("medium")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "large-selects", type: "radio", name: "size-selects" },
        }),
        _c("span", [_vm._v("large")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "extra-selects", type: "radio", name: "size-selects" },
        }),
        _c("span", [_vm._v("extra")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field suffix border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("i", [_vm._v("arrow_drop_down")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field suffix border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("i", [_vm._v("arrow_drop_down")]),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field suffix invalid border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("i", [_vm._v("arrow_drop_down")]),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label suffix border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("label", { staticClass: "active" }, [_vm._v("Label")]),
        _c("i", [_vm._v("arrow_drop_down")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label suffix border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("label", { staticClass: "active" }, [_vm._v("Label")]),
        _c("i", [_vm._v("arrow_drop_down")]),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field label suffix invalid border" }, [
        _c("select", [
          _c("option", [_vm._v("Item 1")]),
          _c("option", [_vm._v("Item 2")]),
          _c("option", [_vm._v("Item 3")]),
        ]),
        _c("label", { staticClass: "active" }, [_vm._v("Label")]),
        _c("i", [_vm._v("arrow_drop_down")]),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("select", [
      _c("option", [_vm._v("Item 1")]),
      _c("option", [_vm._v("Item 2")]),
      _c("option", [_vm._v("Item 3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("select", [
      _c("option", [_vm._v("Item 1")]),
      _c("option", [_vm._v("Item 2")]),
      _c("option", [_vm._v("Item 3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("select", [
      _c("option", [_vm._v("Item 1")]),
      _c("option", [_vm._v("Item 2")]),
      _c("option", [_vm._v("Item 3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s12" }, [
        _c(
          "div",
          { staticClass: "field middle-align", attrs: { id: "switches1" } },
          [
            _c("nav", [
              _c("label", { staticClass: "switch" }, [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span"),
              ]),
              _c("label", { staticClass: "switch" }, [
                _c("input", { attrs: { type: "checkbox" } }),
                _c("span", [_vm._v("Enabled")]),
              ]),
              _c("label", { staticClass: "switch" }, [
                _c("input", {
                  attrs: { type: "checkbox", disabled: "disabled" },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
              _c("label", { staticClass: "switch" }, [
                _c("input", {
                  attrs: {
                    type: "checkbox",
                    checked: "checked",
                    disabled: "disabled",
                  },
                }),
                _c("span", [_vm._v("Disabled")]),
              ]),
            ]),
          ]
        ),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field middle-align" }, [
          _c("nav", [
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "col s12" }, [
        _c("div", { staticClass: "field label middle-align" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
        ]),
      ]),
      _c("div", { staticClass: "col s12 l6" }, [
        _c("div", { staticClass: "field label middle-align invalid" }, [
          _c("label", { staticClass: "active" }, [_vm._v("A question?")]),
          _c("nav", [
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 1")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 2")]),
            ]),
            _c("label", { staticClass: "switch" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span", [_vm._v("Item 3")]),
            ]),
          ]),
          _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "no-space-tables", type: "radio", name: "space-tables" },
        }),
        _c("span", [_vm._v("no-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "small-space-tables",
            type: "radio",
            name: "space-tables",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("small-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "medium-space-tables",
            type: "radio",
            name: "space-tables",
          },
        }),
        _c("span", [_vm._v("medium-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "large-space-tables",
            type: "radio",
            name: "space-tables",
          },
        }),
        _c("span", [_vm._v("large-space")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "left-align-tables",
            type: "radio",
            name: "align-tables",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("left-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "center-align-tables",
            type: "radio",
            name: "align-tables",
          },
        }),
        _c("span", [_vm._v("center-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "right-align-tables",
            type: "radio",
            name: "align-tables",
          },
        }),
        _c("span", [_vm._v("right-align")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: { id: "min-tables", type: "checkbox", name: "size-tables" },
        }),
        _c("span", [_vm._v("min")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("table", { staticClass: "border" }, [
      _c("thead", [
        _c("tr", [
          _c("th"),
          _c("th", [_vm._v("Column 1")]),
          _c("th", [_vm._v("Column 2")]),
          _c("th", [_vm._v("Column 3")]),
          _c("th"),
        ]),
      ]),
      _c("tbody", [
        _c("tr", [
          _c("td", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span"),
            ]),
          ]),
          _c("td", [_vm._v("Line 1")]),
          _c("td", [_vm._v("Line 1")]),
          _c("td", [_vm._v("Line 1")]),
          _c("td", [
            _c("nav", { staticClass: "right-align" }, [
              _c("button", { staticClass: "none" }, [_vm._v("Button")]),
              _c("button", { staticClass: "none" }, [
                _c("i", [_vm._v("more_vert")]),
              ]),
            ]),
          ]),
        ]),
        _c("tr", [
          _c("td", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span"),
            ]),
          ]),
          _c("td", [_vm._v("Line 2")]),
          _c("td", [_vm._v("Line 2")]),
          _c("td", [_vm._v("Line 2")]),
          _c("td", [
            _c("nav", { staticClass: "right-align" }, [
              _c("button", { staticClass: "none" }, [_vm._v("Button")]),
              _c("button", { staticClass: "none" }, [
                _c("i", [_vm._v("more_vert")]),
              ]),
            ]),
          ]),
        ]),
        _c("tr", [
          _c("td", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", { attrs: { type: "checkbox" } }),
              _c("span"),
            ]),
          ]),
          _c("td", [_vm._v("Line 3")]),
          _c("td", [_vm._v("Line 3")]),
          _c("td", [_vm._v("Line 3")]),
          _c("td", [
            _c("nav", { staticClass: "right-align" }, [
              _c("button", { staticClass: "none" }, [_vm._v("Button")]),
              _c("button", { staticClass: "none" }, [
                _c("i", [_vm._v("more_vert")]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "default-align-tabs",
            type: "radio",
            name: "align-tabs",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("default")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "left-align-tabs", type: "radio", name: "align-tabs" },
        }),
        _c("span", [_vm._v("left-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "center-align-tabs", type: "radio", name: "align-tabs" },
        }),
        _c("span", [_vm._v("center-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "right-align-tabs", type: "radio", name: "align-tabs" },
        }),
        _c("span", [_vm._v("right-align")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "defaut-tabs",
            type: "radio",
            name: "page-tabs",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("page default")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "left-tabs", type: "radio", name: "page-tabs" },
        }),
        _c("span", [_vm._v("page left")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "right-tabs", type: "radio", name: "page-tabs" },
        }),
        _c("span", [_vm._v("page right")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab1" } }, [
          _vm._v("Tab 1"),
        ]),
        _c("a", { attrs: { "data-ui": "#tab2" } }, [_vm._v("Tab 2")]),
        _c("a", { attrs: { "data-ui": "#tab3" } }, [_vm._v("Tab 3")]),
      ]),
      _c("div", { staticClass: "page padding active", attrs: { id: "tab1" } }, [
        _c("h5", [_vm._v("Tab 1")]),
      ]),
      _c("div", { staticClass: "page padding", attrs: { id: "tab2" } }, [
        _c("h5", [_vm._v("Tab 2")]),
      ]),
      _c("div", { staticClass: "page padding", attrs: { id: "tab3" } }, [
        _c("h5", [_vm._v("Tab 3")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c("a", { staticClass: "active", attrs: { "data-ui": "#tab4" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 1")]),
        ]),
        _c("a", { attrs: { "data-ui": "#tab5" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 2")]),
        ]),
        _c("a", { attrs: { "data-ui": "#tab6" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 3")]),
        ]),
      ]),
      _c("div", { staticClass: "page padding active", attrs: { id: "tab4" } }, [
        _c("h5", [_vm._v("Tab 1")]),
      ]),
      _c("div", { staticClass: "page padding", attrs: { id: "tab5" } }, [
        _c("h5", [_vm._v("Tab 2")]),
      ]),
      _c("div", { staticClass: "page padding", attrs: { id: "tab6" } }, [
        _c("h5", [_vm._v("Tab 3")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", { staticClass: "tabs" }, [
        _c(
          "a",
          { staticClass: "wrap active", attrs: { "data-ui": "#tab10" } },
          [_c("i", [_vm._v("home")]), _c("span", [_vm._v("Tab 1")])]
        ),
        _c("a", { staticClass: "wrap", attrs: { "data-ui": "#tab11" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 2")]),
        ]),
        _c("a", { staticClass: "wrap", attrs: { "data-ui": "#tab12" } }, [
          _c("i", [_vm._v("home")]),
          _c("span", [_vm._v("Tab 3")]),
        ]),
      ]),
      _c(
        "div",
        { staticClass: "page padding active", attrs: { id: "tab10" } },
        [_c("h5", [_vm._v("Tab 1")])]
      ),
      _c("div", { staticClass: "page padding", attrs: { id: "tab11" } }, [
        _c("h5", [_vm._v("Tab 2")]),
      ]),
      _c("div", { staticClass: "page padding", attrs: { id: "tab12" } }, [
        _c("h5", [_vm._v("Tab 3")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "page padding active", attrs: { id: "tab7" } },
      [_c("h5", [_vm._v("Tab 1")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page padding", attrs: { id: "tab8" } }, [
      _c("h5", [_vm._v("Tab 2")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page padding", attrs: { id: "tab9" } }, [
      _c("h5", [_vm._v("Tab 3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "page padding active", attrs: { id: "tab13" } },
      [_c("h5", [_vm._v("Tab 1")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page padding", attrs: { id: "tab14" } }, [
      _c("h5", [_vm._v("Tab 2")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page padding", attrs: { id: "tab15" } }, [
      _c("h5", [_vm._v("Tab 3")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "checkbox" }, [
        _c("input", {
          attrs: {
            id: "border-textareas",
            type: "checkbox",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("border")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "round-textareas", type: "checkbox" } }),
        _c("span", [_vm._v("round")]),
      ]),
      _c("label", { staticClass: "checkbox" }, [
        _c("input", { attrs: { id: "fill-textareas", type: "checkbox" } }),
        _c("span", [_vm._v("fill")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "small-textareas",
            type: "radio",
            name: "size-textareas",
          },
        }),
        _c("span", [_vm._v("small")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "medium-textareas",
            type: "radio",
            name: "size-textareas",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("medium")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "large-textareas",
            type: "radio",
            name: "size-textareas",
          },
        }),
        _c("span", [_vm._v("large")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "extra-textareas",
            type: "radio",
            name: "size-textareas",
          },
        }),
        _c("span", [_vm._v("extra")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea border" }, [_c("textarea")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea border" }, [
        _c("textarea"),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea invalid border" }, [
        _c("textarea"),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label border" }, [
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label border" }, [
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
        _c("span", { staticClass: "helper" }, [_vm._v("Complementary text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label invalid border" }, [
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
        _c("span", { staticClass: "error" }, [_vm._v("Error text")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label prefix border" }, [
        _c("i", [_vm._v("search")]),
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label suffix border" }, [
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
        _c("i", [_vm._v("search")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col s12 l4" }, [
      _c("div", { staticClass: "field textarea label prefix suffix border" }, [
        _c("i", [_vm._v("search")]),
        _c("textarea"),
        _c("label", [_vm._v("Label")]),
        _c("i", [_vm._v("search")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: {
            id: "bottom-toasts",
            type: "radio",
            name: "position-toasts",
            checked: "checked",
          },
        }),
        _c("span", [_vm._v("bottom")]),
      ]),
      _c("label", { staticClass: "radio" }, [
        _c("input", {
          attrs: { id: "top-toasts", type: "radio", name: "position-toasts" },
        }),
        _c("span", [_vm._v("top")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c(
        "button",
        {
          staticClass: "pink white-text",
          attrs: { onclick: "ui('.toast.pink')" },
        },
        [_vm._v("Toast")]
      ),
      _c(
        "button",
        {
          staticClass: "orange white-text",
          attrs: { onclick: "ui('.toast.orange')" },
        },
        [_vm._v("Toast")]
      ),
      _c(
        "button",
        {
          staticClass: "green white-text",
          attrs: { onclick: "ui('.toast.green')" },
        },
        [_vm._v("Toast")]
      ),
      _c(
        "button",
        {
          staticClass: "blue white-text",
          attrs: { onclick: "ui('.toast.blue')" },
        },
        [_vm._v("Toast")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toast pink white-text" }, [
      _c("i", [_vm._v("error")]),
      _c("span", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toast orange white-text" }, [
      _c("i", [_vm._v("warning")]),
      _c("span", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toast green white-text" }, [
      _c("i", [_vm._v("done")]),
      _c("span", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "toast blue white-text" }, [
      _c("i", [_vm._v("info")]),
      _c("span", [_vm._v("Complementary text")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap" }, [
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_back")]),
        _c("div", { staticClass: "tooltip left" }, [
          _vm._v("Complementary text"),
        ]),
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_upward")]),
        _c("div", { staticClass: "tooltip" }, [_vm._v("Complementary text")]),
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_downward")]),
        _c("div", { staticClass: "tooltip bottom" }, [
          _vm._v("Complementary text"),
        ]),
      ]),
      _c("a", { staticClass: "chip circle" }, [
        _c("i", [_vm._v("arrow_forward")]),
        _c("div", { staticClass: "tooltip right" }, [
          _vm._v("Complementary text"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col s6" }, [
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
          _c("p", { staticClass: "large-text" }, [_vm._v("large-text")]),
        ]),
      ]),
      _c("div", { staticClass: "col s6" }, [
        _c("div", [
          _c("h6", [_vm._v("Title")]),
          _c("h5", [_vm._v("Title")]),
          _c("h4", [_vm._v("Title")]),
          _c("h3", [_vm._v("Title")]),
          _c("h2", [_vm._v("Title")]),
          _c("h1", [_vm._v("Title")]),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "wrap center-align" }, [
      _c("a", { staticClass: "chip" }, [_vm._v("Leonardo Rafael Wehrmeister")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Everton Alcides Buzzi")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 11")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 12")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 13")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 14")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 15")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 16")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 17")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 18")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 19")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 20")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 21")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 22")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 23")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Sponsor 24")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal right medium", attrs: { id: "modal-colors" } },
      [
        _c("header", { staticClass: "fixed" }, [
          _c("nav", [
            _c("a", { attrs: { "data-ui": "#modal-colors" } }, [
              _c("i", [_vm._v("arrow_back")]),
            ]),
            _c("a", { attrs: { "data-ui": "#modal-colors" } }, [
              _c("h5", { staticClass: "no-margin" }, [_vm._v("Back")]),
            ]),
          ]),
        ]),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Theme")]),
            _c("div", { staticClass: "primary" }, [_vm._v("primary")]),
            _c("div", { staticClass: "primary-container" }, [
              _vm._v("primary-container"),
            ]),
            _c("div", { staticClass: "secondary" }, [_vm._v("secondary")]),
            _c("div", { staticClass: "secondary-container" }, [
              _vm._v("secondary-container"),
            ]),
            _c("div", { staticClass: "tertiary" }, [_vm._v("tertiary")]),
            _c("div", { staticClass: "tertiary-container" }, [
              _vm._v("tertiary-container"),
            ]),
            _c("div", { staticClass: "error" }, [_vm._v("error")]),
            _c("div", { staticClass: "error-container" }, [
              _vm._v("error-container"),
            ]),
            _c("div", { staticClass: "background" }, [_vm._v("background")]),
            _c("div", { staticClass: "surface" }, [_vm._v("surface")]),
            _c("div", { staticClass: "surface-variant" }, [
              _vm._v("surface-variant"),
            ]),
            _c("div", { staticClass: "inverse-surface" }, [
              _vm._v("inverse-surface"),
            ]),
            _c("div", { staticClass: "primary-border border" }, [
              _vm._v("primary-border"),
            ]),
            _c("div", { staticClass: "secondary-border border" }, [
              _vm._v("secondary-border"),
            ]),
            _c("div", { staticClass: "tertiary-border border" }, [
              _vm._v("tertiary-border"),
            ]),
            _c("div", { staticClass: "error-border border" }, [
              _vm._v("error-border"),
            ]),
            _c("div", { staticClass: "primary-text" }, [
              _vm._v("primary-text"),
            ]),
            _c("div", { staticClass: "secondary-text" }, [
              _vm._v("secondary-text"),
            ]),
            _c("div", { staticClass: "tertiary-text" }, [
              _vm._v("tertiary-text"),
            ]),
            _c("div", { staticClass: "error-text" }, [_vm._v("error-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Red")]),
            _c("div", { staticClass: "black-text red1" }, [_vm._v("red1")]),
            _c("div", { staticClass: "black-text red2" }, [_vm._v("red2")]),
            _c("div", { staticClass: "black-text red3" }, [_vm._v("red3")]),
            _c("div", { staticClass: "black-text red4" }, [_vm._v("red4")]),
            _c("div", { staticClass: "black-text red5" }, [_vm._v("red5")]),
            _c("div", { staticClass: "black-text red" }, [
              _vm._v("red6 / red"),
            ]),
            _c("div", { staticClass: "black-text red7" }, [_vm._v("red7")]),
            _c("div", { staticClass: "black-text red8" }, [_vm._v("red8")]),
            _c("div", { staticClass: "black-text red9" }, [_vm._v("red9")]),
            _c("div", { staticClass: "black-text red10" }, [_vm._v("red10")]),
            _c("div", { staticClass: "red-border border" }, [
              _vm._v("red-border"),
            ]),
            _c("div", { staticClass: "red-text" }, [_vm._v("red-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Pink")]),
            _c("div", { staticClass: "black-text pink1" }, [_vm._v("pink1")]),
            _c("div", { staticClass: "black-text pink2" }, [_vm._v("pink2")]),
            _c("div", { staticClass: "black-text pink3" }, [_vm._v("pink3")]),
            _c("div", { staticClass: "black-text pink4" }, [_vm._v("pink4")]),
            _c("div", { staticClass: "black-text pink5" }, [_vm._v("pink5")]),
            _c("div", { staticClass: "black-text pink" }, [
              _vm._v("pink6 / pink"),
            ]),
            _c("div", { staticClass: "black-text pink7" }, [_vm._v("pink7")]),
            _c("div", { staticClass: "black-text pink8" }, [_vm._v("pink8")]),
            _c("div", { staticClass: "black-text pink9" }, [_vm._v("pink9")]),
            _c("div", { staticClass: "black-text pink10" }, [_vm._v("pink10")]),
            _c("div", { staticClass: "pink-border border" }, [
              _vm._v("pink-border"),
            ]),
            _c("div", { staticClass: "pink-text" }, [_vm._v("pink-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Purple")]),
            _c("div", { staticClass: "black-text purple1" }, [
              _vm._v("purple1"),
            ]),
            _c("div", { staticClass: "black-text purple2" }, [
              _vm._v("purple2"),
            ]),
            _c("div", { staticClass: "black-text purple3" }, [
              _vm._v("purple3"),
            ]),
            _c("div", { staticClass: "black-text purple4" }, [
              _vm._v("purple4"),
            ]),
            _c("div", { staticClass: "black-text purple5" }, [
              _vm._v("purple5"),
            ]),
            _c("div", { staticClass: "black-text purple" }, [
              _vm._v("purple6 / purple"),
            ]),
            _c("div", { staticClass: "black-text purple7" }, [
              _vm._v("purple7"),
            ]),
            _c("div", { staticClass: "black-text purple8" }, [
              _vm._v("purple8"),
            ]),
            _c("div", { staticClass: "black-text purple9" }, [
              _vm._v("purple9"),
            ]),
            _c("div", { staticClass: "black-text purple10" }, [
              _vm._v("purple10"),
            ]),
            _c("div", { staticClass: "purple-border border" }, [
              _vm._v("purple-border"),
            ]),
            _c("div", { staticClass: "purple-text" }, [_vm._v("purple-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Deep-purple")]),
            _c("div", { staticClass: "black-text deep-purple1" }, [
              _vm._v("deep-purple1"),
            ]),
            _c("div", { staticClass: "black-text deep-purple2" }, [
              _vm._v("deep-purple2"),
            ]),
            _c("div", { staticClass: "black-text deep-purple3" }, [
              _vm._v("deep-purple3"),
            ]),
            _c("div", { staticClass: "black-text deep-purple4" }, [
              _vm._v("deep-purple4"),
            ]),
            _c("div", { staticClass: "black-text deep-purple5" }, [
              _vm._v("deep-purple5"),
            ]),
            _c("div", { staticClass: "black-text deep-purple" }, [
              _vm._v("deep-purple6 / deep-purple"),
            ]),
            _c("div", { staticClass: "black-text deep-purple7" }, [
              _vm._v("deep-purple7"),
            ]),
            _c("div", { staticClass: "black-text deep-purple8" }, [
              _vm._v("deep-purple8"),
            ]),
            _c("div", { staticClass: "black-text deep-purple9" }, [
              _vm._v("deep-purple9"),
            ]),
            _c("div", { staticClass: "black-text deep-purple10" }, [
              _vm._v("deep-purple10"),
            ]),
            _c("div", { staticClass: "deep-purple-border border" }, [
              _vm._v("deep-purple-border"),
            ]),
            _c("div", { staticClass: "deep-purple-text" }, [
              _vm._v("deep-purple-text"),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Indigo")]),
            _c("div", { staticClass: "black-text indigo1" }, [
              _vm._v("indigo1"),
            ]),
            _c("div", { staticClass: "black-text indigo2" }, [
              _vm._v("indigo2"),
            ]),
            _c("div", { staticClass: "black-text indigo3" }, [
              _vm._v("indigo3"),
            ]),
            _c("div", { staticClass: "black-text indigo4" }, [
              _vm._v("indigo4"),
            ]),
            _c("div", { staticClass: "black-text indigo5" }, [
              _vm._v("indigo5"),
            ]),
            _c("div", { staticClass: "black-text indigo" }, [
              _vm._v("indigo6 / indigo"),
            ]),
            _c("div", { staticClass: "black-text indigo7" }, [
              _vm._v("indigo7"),
            ]),
            _c("div", { staticClass: "black-text indigo8" }, [
              _vm._v("indigo8"),
            ]),
            _c("div", { staticClass: "black-text indigo9" }, [
              _vm._v("indigo9"),
            ]),
            _c("div", { staticClass: "black-text indigo10" }, [
              _vm._v("indigo10"),
            ]),
            _c("div", { staticClass: "indigo-border border" }, [
              _vm._v("indigo-border"),
            ]),
            _c("div", { staticClass: "indigo-text" }, [_vm._v("indigo-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Blue")]),
            _c("div", { staticClass: "black-text blue1" }, [_vm._v("blue1")]),
            _c("div", { staticClass: "black-text blue2" }, [_vm._v("blue2")]),
            _c("div", { staticClass: "black-text blue3" }, [_vm._v("blue3")]),
            _c("div", { staticClass: "black-text blue4" }, [_vm._v("blue4")]),
            _c("div", { staticClass: "black-text blue5" }, [_vm._v("blue5")]),
            _c("div", { staticClass: "black-text blue" }, [
              _vm._v("blue6 / blue"),
            ]),
            _c("div", { staticClass: "black-text blue7" }, [_vm._v("blue7")]),
            _c("div", { staticClass: "black-text blue8" }, [_vm._v("blue8")]),
            _c("div", { staticClass: "black-text blue9" }, [_vm._v("blue9")]),
            _c("div", { staticClass: "black-text blue10" }, [_vm._v("blue10")]),
            _c("div", { staticClass: "blue-border border" }, [
              _vm._v("blue-border"),
            ]),
            _c("div", { staticClass: "blue-text" }, [_vm._v("blue-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Light-blue")]),
            _c("div", { staticClass: "black-text light-blue1" }, [
              _vm._v("light-blue1"),
            ]),
            _c("div", { staticClass: "black-text light-blue2" }, [
              _vm._v("light-blue2"),
            ]),
            _c("div", { staticClass: "black-text light-blue3" }, [
              _vm._v("light-blue3"),
            ]),
            _c("div", { staticClass: "black-text light-blue4" }, [
              _vm._v("light-blue4"),
            ]),
            _c("div", { staticClass: "black-text light-blue5" }, [
              _vm._v("light-blue5"),
            ]),
            _c("div", { staticClass: "black-text light-blue" }, [
              _vm._v("light-blue6 / light-blue"),
            ]),
            _c("div", { staticClass: "black-text light-blue7" }, [
              _vm._v("light-blue7"),
            ]),
            _c("div", { staticClass: "black-text light-blue8" }, [
              _vm._v("light-blue8"),
            ]),
            _c("div", { staticClass: "black-text light-blue9" }, [
              _vm._v("light-blue9"),
            ]),
            _c("div", { staticClass: "black-text light-blue10" }, [
              _vm._v("light-blue10"),
            ]),
            _c("div", { staticClass: "light-blue-border border" }, [
              _vm._v("light-blue-border"),
            ]),
            _c("div", { staticClass: "light-blue-text" }, [
              _vm._v("light-blue-text"),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Cyan")]),
            _c("div", { staticClass: "black-text cyan1" }, [_vm._v("cyan1")]),
            _c("div", { staticClass: "black-text cyan2" }, [_vm._v("cyan2")]),
            _c("div", { staticClass: "black-text cyan3" }, [_vm._v("cyan3")]),
            _c("div", { staticClass: "black-text cyan4" }, [_vm._v("cyan4")]),
            _c("div", { staticClass: "black-text cyan5" }, [_vm._v("cyan5")]),
            _c("div", { staticClass: "black-text cyan" }, [
              _vm._v("cyan6 / cyan"),
            ]),
            _c("div", { staticClass: "black-text cyan7" }, [_vm._v("cyan7")]),
            _c("div", { staticClass: "black-text cyan8" }, [_vm._v("cyan8")]),
            _c("div", { staticClass: "black-text cyan9" }, [_vm._v("cyan9")]),
            _c("div", { staticClass: "black-text cyan10" }, [_vm._v("cyan10")]),
            _c("div", { staticClass: "cyan-border border" }, [
              _vm._v("cyan-border"),
            ]),
            _c("div", { staticClass: "cyan-text" }, [_vm._v("cyan-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Teal")]),
            _c("div", { staticClass: "black-text teal1" }, [_vm._v("teal1")]),
            _c("div", { staticClass: "black-text teal2" }, [_vm._v("teal2")]),
            _c("div", { staticClass: "black-text teal3" }, [_vm._v("teal3")]),
            _c("div", { staticClass: "black-text teal4" }, [_vm._v("teal4")]),
            _c("div", { staticClass: "black-text teal5" }, [_vm._v("teal5")]),
            _c("div", { staticClass: "black-text teal" }, [
              _vm._v("teal6 / teal"),
            ]),
            _c("div", { staticClass: "black-text teal7" }, [_vm._v("teal7")]),
            _c("div", { staticClass: "black-text teal8" }, [_vm._v("teal8")]),
            _c("div", { staticClass: "black-text teal9" }, [_vm._v("teal9")]),
            _c("div", { staticClass: "black-text teal10" }, [_vm._v("teal10")]),
            _c("div", { staticClass: "teal-border border" }, [
              _vm._v("teal-border"),
            ]),
            _c("div", { staticClass: "teal-text" }, [_vm._v("teal-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Green")]),
            _c("div", { staticClass: "black-text green1" }, [_vm._v("green1")]),
            _c("div", { staticClass: "black-text green2" }, [_vm._v("green2")]),
            _c("div", { staticClass: "black-text green3" }, [_vm._v("green3")]),
            _c("div", { staticClass: "black-text green4" }, [_vm._v("green4")]),
            _c("div", { staticClass: "black-text green5" }, [_vm._v("green5")]),
            _c("div", { staticClass: "black-text green" }, [
              _vm._v("green6 / green"),
            ]),
            _c("div", { staticClass: "black-text green7" }, [_vm._v("green7")]),
            _c("div", { staticClass: "black-text green8" }, [_vm._v("green8")]),
            _c("div", { staticClass: "black-text green9" }, [_vm._v("green9")]),
            _c("div", { staticClass: "black-text green10" }, [
              _vm._v("green10"),
            ]),
            _c("div", { staticClass: "green-border border" }, [
              _vm._v("green-border"),
            ]),
            _c("div", { staticClass: "green-text" }, [_vm._v("green-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Light-green")]),
            _c("div", { staticClass: "black-text light-green1" }, [
              _vm._v("light-green1"),
            ]),
            _c("div", { staticClass: "black-text light-green2" }, [
              _vm._v("light-green2"),
            ]),
            _c("div", { staticClass: "black-text light-green3" }, [
              _vm._v("light-green3"),
            ]),
            _c("div", { staticClass: "black-text light-green4" }, [
              _vm._v("light-green4"),
            ]),
            _c("div", { staticClass: "black-text light-green5" }, [
              _vm._v("light-green5"),
            ]),
            _c("div", { staticClass: "black-text light-green" }, [
              _vm._v("light-green6 / light-green"),
            ]),
            _c("div", { staticClass: "black-text light-green7" }, [
              _vm._v("light-green7"),
            ]),
            _c("div", { staticClass: "black-text light-green8" }, [
              _vm._v("light-green8"),
            ]),
            _c("div", { staticClass: "black-text light-green9" }, [
              _vm._v("light-green9"),
            ]),
            _c("div", { staticClass: "black-text light-green10" }, [
              _vm._v("light-green10"),
            ]),
            _c("div", { staticClass: "light-green-border border" }, [
              _vm._v("light-green-border"),
            ]),
            _c("div", { staticClass: "light-green-text" }, [
              _vm._v("light-green-text"),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Lime")]),
            _c("div", { staticClass: "black-text lime1" }, [_vm._v("lime1")]),
            _c("div", { staticClass: "black-text lime2" }, [_vm._v("lime2")]),
            _c("div", { staticClass: "black-text lime3" }, [_vm._v("lime3")]),
            _c("div", { staticClass: "black-text lime4" }, [_vm._v("lime4")]),
            _c("div", { staticClass: "black-text lime5" }, [_vm._v("lime5")]),
            _c("div", { staticClass: "black-text lime" }, [
              _vm._v("lime6 / lime"),
            ]),
            _c("div", { staticClass: "black-text lime7" }, [_vm._v("lime7")]),
            _c("div", { staticClass: "black-text lime8" }, [_vm._v("lime8")]),
            _c("div", { staticClass: "black-text lime9" }, [_vm._v("lime9")]),
            _c("div", { staticClass: "black-text lime10" }, [_vm._v("lime10")]),
            _c("div", { staticClass: "lime-border border" }, [
              _vm._v("lime-border"),
            ]),
            _c("div", { staticClass: "lime-text" }, [_vm._v("lime-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Yellow")]),
            _c("div", { staticClass: "black-text yellow1" }, [
              _vm._v("yellow1"),
            ]),
            _c("div", { staticClass: "black-text yellow2" }, [
              _vm._v("yellow2"),
            ]),
            _c("div", { staticClass: "black-text yellow3" }, [
              _vm._v("yellow3"),
            ]),
            _c("div", { staticClass: "black-text yellow4" }, [
              _vm._v("yellow4"),
            ]),
            _c("div", { staticClass: "black-text yellow5" }, [
              _vm._v("yellow5"),
            ]),
            _c("div", { staticClass: "black-text yellow" }, [
              _vm._v("yellow6 / yellow"),
            ]),
            _c("div", { staticClass: "black-text yellow7" }, [
              _vm._v("yellow7"),
            ]),
            _c("div", { staticClass: "black-text yellow8" }, [
              _vm._v("yellow8"),
            ]),
            _c("div", { staticClass: "black-text yellow9" }, [
              _vm._v("yellow9"),
            ]),
            _c("div", { staticClass: "black-text yellow10" }, [
              _vm._v("yellow10"),
            ]),
            _c("div", { staticClass: "yellow-border border" }, [
              _vm._v("yellow-border"),
            ]),
            _c("div", { staticClass: "yellow-text" }, [_vm._v("yellow-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Amber")]),
            _c("div", { staticClass: "black-text amber1" }, [_vm._v("amber1")]),
            _c("div", { staticClass: "black-text amber2" }, [_vm._v("amber2")]),
            _c("div", { staticClass: "black-text amber3" }, [_vm._v("amber3")]),
            _c("div", { staticClass: "black-text amber4" }, [_vm._v("amber4")]),
            _c("div", { staticClass: "black-text amber5" }, [_vm._v("amber5")]),
            _c("div", { staticClass: "black-text amber" }, [
              _vm._v("amber6 / amber"),
            ]),
            _c("div", { staticClass: "black-text amber7" }, [_vm._v("amber7")]),
            _c("div", { staticClass: "black-text amber8" }, [_vm._v("amber8")]),
            _c("div", { staticClass: "black-text amber9" }, [_vm._v("amber9")]),
            _c("div", { staticClass: "black-text amber10" }, [
              _vm._v("amber10"),
            ]),
            _c("div", { staticClass: "amber-border border" }, [
              _vm._v("amber-border"),
            ]),
            _c("div", { staticClass: "amber-text" }, [_vm._v("amber-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Orange")]),
            _c("div", { staticClass: "black-text orange1" }, [
              _vm._v("orange1"),
            ]),
            _c("div", { staticClass: "black-text orange2" }, [
              _vm._v("orange2"),
            ]),
            _c("div", { staticClass: "black-text orange3" }, [
              _vm._v("orange3"),
            ]),
            _c("div", { staticClass: "black-text orange4" }, [
              _vm._v("orange4"),
            ]),
            _c("div", { staticClass: "black-text orange5" }, [
              _vm._v("orange5"),
            ]),
            _c("div", { staticClass: "black-text orange" }, [
              _vm._v("orange6 / orange"),
            ]),
            _c("div", { staticClass: "black-text orange7" }, [
              _vm._v("orange7"),
            ]),
            _c("div", { staticClass: "black-text orange8" }, [
              _vm._v("orange8"),
            ]),
            _c("div", { staticClass: "black-text orange9" }, [
              _vm._v("orange9"),
            ]),
            _c("div", { staticClass: "black-text orange10" }, [
              _vm._v("orange10"),
            ]),
            _c("div", { staticClass: "orange-border border" }, [
              _vm._v("orange-border"),
            ]),
            _c("div", { staticClass: "orange-text" }, [_vm._v("orange-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Deep-orange")]),
            _c("div", { staticClass: "black-text deep-orange1" }, [
              _vm._v("deep-orange1"),
            ]),
            _c("div", { staticClass: "black-text deep-orange2" }, [
              _vm._v("deep-orange2"),
            ]),
            _c("div", { staticClass: "black-text deep-orange3" }, [
              _vm._v("deep-orange3"),
            ]),
            _c("div", { staticClass: "black-text deep-orange4" }, [
              _vm._v("deep-orange4"),
            ]),
            _c("div", { staticClass: "black-text deep-orange5" }, [
              _vm._v("deep-orange5"),
            ]),
            _c("div", { staticClass: "black-text deep-orange" }, [
              _vm._v("deep-orange6 / deep-orange"),
            ]),
            _c("div", { staticClass: "black-text deep-orange7" }, [
              _vm._v("deep-orange7"),
            ]),
            _c("div", { staticClass: "black-text deep-orange8" }, [
              _vm._v("deep-orange8"),
            ]),
            _c("div", { staticClass: "black-text deep-orange9" }, [
              _vm._v("deep-orange9"),
            ]),
            _c("div", { staticClass: "black-text deep-orange10" }, [
              _vm._v("deep-orange10"),
            ]),
            _c("div", { staticClass: "deep-orange-border border" }, [
              _vm._v("deep-orange-border"),
            ]),
            _c("div", { staticClass: "deep-orange-text" }, [
              _vm._v("deep-orange-text"),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Brown")]),
            _c("div", { staticClass: "black-text brown1" }, [_vm._v("brown1")]),
            _c("div", { staticClass: "black-text brown2" }, [_vm._v("brown2")]),
            _c("div", { staticClass: "black-text brown3" }, [_vm._v("brown3")]),
            _c("div", { staticClass: "black-text brown4" }, [_vm._v("brown4")]),
            _c("div", { staticClass: "black-text brown5" }, [_vm._v("brown5")]),
            _c("div", { staticClass: "black-text brown" }, [
              _vm._v("brown6 / brown"),
            ]),
            _c("div", { staticClass: "black-text brown7" }, [_vm._v("brown7")]),
            _c("div", { staticClass: "black-text brown8" }, [_vm._v("brown8")]),
            _c("div", { staticClass: "black-text brown9" }, [_vm._v("brown9")]),
            _c("div", { staticClass: "black-text brown10" }, [
              _vm._v("brown10"),
            ]),
            _c("div", { staticClass: "brown-border border" }, [
              _vm._v("brown-border"),
            ]),
            _c("div", { staticClass: "brown-text" }, [_vm._v("brown-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Grey")]),
            _c("div", { staticClass: "black-text grey1" }, [_vm._v("grey1")]),
            _c("div", { staticClass: "black-text grey2" }, [_vm._v("grey2")]),
            _c("div", { staticClass: "black-text grey3" }, [_vm._v("grey3")]),
            _c("div", { staticClass: "black-text grey4" }, [_vm._v("grey4")]),
            _c("div", { staticClass: "black-text grey5" }, [_vm._v("grey5")]),
            _c("div", { staticClass: "black-text grey" }, [
              _vm._v("grey6 / grey"),
            ]),
            _c("div", { staticClass: "black-text grey7" }, [_vm._v("grey7")]),
            _c("div", { staticClass: "black-text grey8" }, [_vm._v("grey8")]),
            _c("div", { staticClass: "black-text grey9" }, [_vm._v("grey9")]),
            _c("div", { staticClass: "black-text grey10" }, [_vm._v("grey10")]),
            _c("div", { staticClass: "grey-border border" }, [
              _vm._v("grey-border"),
            ]),
            _c("div", { staticClass: "grey-text" }, [_vm._v("grey-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Blue-grey")]),
            _c("div", { staticClass: "black-text blue-grey1" }, [
              _vm._v("blue-grey1"),
            ]),
            _c("div", { staticClass: "black-text blue-grey2" }, [
              _vm._v("blue-grey2"),
            ]),
            _c("div", { staticClass: "black-text blue-grey3" }, [
              _vm._v("blue-grey3"),
            ]),
            _c("div", { staticClass: "black-text blue-grey4" }, [
              _vm._v("blue-grey4"),
            ]),
            _c("div", { staticClass: "black-text blue-grey5" }, [
              _vm._v("blue-grey5"),
            ]),
            _c("div", { staticClass: "black-text blue-grey" }, [
              _vm._v("blue-grey6 / blue-grey"),
            ]),
            _c("div", { staticClass: "black-text blue-grey7" }, [
              _vm._v("blue-grey7"),
            ]),
            _c("div", { staticClass: "black-text blue-grey8" }, [
              _vm._v("blue-grey8"),
            ]),
            _c("div", { staticClass: "black-text blue-grey9" }, [
              _vm._v("blue-grey9"),
            ]),
            _c("div", { staticClass: "black-text blue-grey10" }, [
              _vm._v("blue-grey10"),
            ]),
            _c("div", { staticClass: "blue-grey-border border" }, [
              _vm._v("blue-grey-border"),
            ]),
            _c("div", { staticClass: "blue-grey-text" }, [
              _vm._v("blue-grey-text"),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Black")]),
            _c("div", { staticClass: "black white-text" }, [_vm._v("black")]),
            _c("div", { staticClass: "black-border border" }, [
              _vm._v("black-border"),
            ]),
            _c("div", [_vm._v("black-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("White")]),
            _c("div", { staticClass: "white black-text" }, [_vm._v("white")]),
            _c("div", { staticClass: "white-border border" }, [
              _vm._v("white-border"),
            ]),
            _c("div", [_vm._v("white-text")]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("h5", [_vm._v("Transparent")]),
            _c("div", { staticClass: "transparent" }, [_vm._v("transparent")]),
            _c("div", { staticClass: "transparent-border border" }, [
              _vm._v("transparent-border"),
            ]),
            _c("div", [_vm._v("transparent-text")]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal", attrs: { id: "modal" } }, [
      _c("h5", [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", { staticClass: "right-align" }, [
        _c(
          "button",
          { staticClass: "border", attrs: { "data-ui": "#modal" } },
          [_vm._v("Cancel")]
        ),
        _c("button", { attrs: { "data-ui": "#modal" } }, [_vm._v("Confirm")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal left", attrs: { id: "modal-left" } },
      [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", { staticClass: "right-align" }, [
          _c(
            "button",
            { staticClass: "border", attrs: { "data-ui": "#modal-left" } },
            [_vm._v("Cancel")]
          ),
          _c("button", { attrs: { "data-ui": "#modal-left" } }, [
            _vm._v("Confirm"),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal right", attrs: { id: "modal-right" } },
      [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", { staticClass: "right-align" }, [
          _c(
            "button",
            { staticClass: "border", attrs: { "data-ui": "#modal-right" } },
            [_vm._v("Cancel")]
          ),
          _c("button", { attrs: { "data-ui": "#modal-right" } }, [
            _vm._v("Confirm"),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal top", attrs: { id: "modal-top" } }, [
      _c("h5", [_vm._v("Title")]),
      _c("div", [_vm._v("Complementary text")]),
      _c("nav", { staticClass: "right-align" }, [
        _c(
          "button",
          { staticClass: "border", attrs: { "data-ui": "#modal-top" } },
          [_vm._v("Cancel")]
        ),
        _c("button", { attrs: { "data-ui": "#modal-top" } }, [
          _vm._v("Confirm"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal bottom", attrs: { id: "modal-bottom" } },
      [
        _c("h5", [_vm._v("Title")]),
        _c("div", [_vm._v("Complementary text")]),
        _c("nav", { staticClass: "right-align" }, [
          _c(
            "button",
            { staticClass: "border", attrs: { "data-ui": "#modal-bottom" } },
            [_vm._v("Cancel")]
          ),
          _c("button", { attrs: { "data-ui": "#modal-bottom" } }, [
            _vm._v("Confirm"),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#modal-samples" } }, [
      _c("i", [_vm._v("arrow_backward")]),
      _c("h5", { staticClass: "small-margin" }, [_vm._v("Back")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#modal-icons" } }, [
      _c("i", [_vm._v("arrow_back")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#modal-icons" } }, [
      _c("h5", { staticClass: "no-margin" }, [_vm._v("Back")]),
    ])
  },
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
      
},{"./selectionForButtons.vue":"home/selectionForButtons.vue","/shared/themes.vue":"shared/themes.vue","/shared/data.js":"shared/data.js","/shared/domain.js":"shared/domain.js","process":"../node_modules/process/browser.js"}],"home/index.js":[function(require,module,exports) {
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
      var element = document.querySelector("html");
      element.className = element.className.indexOf("is-dark") != -1 ? "is-light" : "is-dark";
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
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "space" }),
    _c("div", { staticClass: "row no-wrap middle-align" }, [
      _c("div", { staticClass: "col min" }, [
        _c(
          "a",
          {
            on: {
              click: function ($event) {
                return _vm.updateTheme()
              },
            },
          },
          [_c("i", { staticClass: "large" }, [_vm._v("brightness_medium")])]
        ),
      ]),
      _vm._m(0),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h5", [_vm._v("Test your changes here")]),
      _c("div", [_vm._v("Click on icon to change theme")]),
    ])
  },
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
},{"~/shared/router.js":"shared/router.js","~/test/page.vue":"test/page.vue"}],"youtube/layout.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themes = _interopRequireDefault(require("/shared/themes.vue"));

var _data2 = _interopRequireDefault(require("/shared/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  components: {
    themes: _themes.default
  },
  data: function data() {
    return _objectSpread(_objectSpread({}, (0, _data2.default)()), {}, {
      url: "/youtube"
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.isDark = /dark/.test(document.body.getAttribute("style"));
    ui();
    window.addEventListener("redirected", function (event) {
      _this.url = event.detail.url;
    });
  },
  methods: {
    updateTheme: function updateTheme() {
      var theme = document.querySelector("html").className;
      this.isDark = /dark/i.test(theme);
      theme = this.isDark ? theme.replace("dark", "light") : theme.replace("light", "dark");
      document.querySelector("html").className = theme;
    }
  }
};
exports.default = _default;
        var $620006 = exports.default || module.exports;
      
      if (typeof $620006 === 'function') {
        $620006 = $620006.options;
      }
    
        /* template */
        Object.assign($620006, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "menu left flat m l" },
      [
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "large-space" }),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube" },
            attrs: { href: "/youtube" },
          },
          [_c("i", [_vm._v("home")]), _c("div", [_vm._v("Home")])]
        ),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube/whats-hot" },
            attrs: { href: "/youtube/whats-hot" },
          },
          [_c("i", [_vm._v("whatshot")]), _c("div", [_vm._v("What's hot")])]
        ),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube/subscriptions" },
            attrs: { href: "/youtube/subscriptions" },
          },
          [_c("i", [_vm._v("subscriptions")]), _c("div", [_vm._v("Subscript")])]
        ),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube/library" },
            attrs: { href: "/youtube/library" },
          },
          [_c("i", [_vm._v("video_library")]), _c("div", [_vm._v("Library")])]
        ),
        _vm._m(0),
        _c(
          "themes",
          {
            attrs: { id: "themes1" },
            model: {
              value: _vm.$data,
              callback: function ($$v) {
                _vm.$data = $$v
              },
              expression: "$data",
            },
          },
          [
            _c("div", { staticClass: "large-space" }),
            _c("div", { staticClass: "medium-space" }),
          ]
        ),
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "menu bottom s" },
      [
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube" },
            attrs: { href: "/youtube" },
          },
          [_c("i", [_vm._v("home")]), _c("div", [_vm._v("Home")])]
        ),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube/explore" },
            attrs: { href: "/youtube/explore" },
          },
          [_c("i", [_vm._v("explore")]), _c("div", [_vm._v("Explore")])]
        ),
        _vm._m(1),
        _c(
          "a",
          {
            class: { active: _vm.url == "/youtube/library" },
            attrs: { href: "/youtube/library" },
          },
          [_c("i", [_vm._v("video_library")]), _c("div", [_vm._v("Library")])]
        ),
        _vm._m(2),
        _c(
          "themes",
          {
            attrs: { id: "themes2" },
            model: {
              value: _vm.$data,
              callback: function ($$v) {
                _vm.$data = $$v
              },
              expression: "$data",
            },
          },
          [
            _c("div", { staticClass: "large-space" }),
            _c("div", { staticClass: "medium-space" }),
          ]
        ),
      ],
      1
    ),
    _c("div", { staticClass: "menu top" }, [
      _c("div", { staticClass: "row no-wrap middle-align" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "padding" }, [
            _vm._m(3),
            _c("a", [
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                attrs: { src: "/youtube-light.png" },
              }),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                attrs: { src: "/youtube-dark.png" },
              }),
            ]),
          ]),
        ]),
        _vm._m(4),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _vm._m(5),
            _vm._m(6),
            _c(
              "button",
              {
                staticClass: "none m l",
                attrs: { "data-ui": "#dropdown-apps" },
              },
              [
                _c("i", [_vm._v("apps")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown left no-wrap",
                    attrs: { id: "dropdown-apps", "data-ui": "#dropdown-apps" },
                  },
                  [
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", { attrs: { src: "/youtube.png" } }),
                      ]),
                      _c("div", { staticClass: "col" }, [_vm._v("Youtube TV")]),
                    ]),
                    _c("div", { staticClass: "divider" }),
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", { attrs: { src: "/youtube.png" } }),
                      ]),
                      _c("div", { staticClass: "col" }, [
                        _vm._v("Youtube Music"),
                      ]),
                    ]),
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", { attrs: { src: "/youtube.png" } }),
                      ]),
                      _c("div", { staticClass: "col" }, [
                        _vm._v("Youtube Kids"),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            _vm._m(7),
            _c("a", { attrs: { href: "/" } }, [
              _c("img", {
                staticClass: "circle",
                attrs: { src: "/favicon.png" },
              }),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._m(8),
    _c(
      "div",
      { staticClass: "modal left small", attrs: { id: "modal-expanded" } },
      [
        _c("nav", [
          _vm._m(9),
          _c("a", [
            _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.isDark,
                  expression: "!isDark",
                },
              ],
              attrs: { src: "/youtube-light.png" },
            }),
            _c("img", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.isDark,
                  expression: "isDark",
                },
              ],
              attrs: { src: "/youtube-dark.png" },
            }),
          ]),
        ]),
        _c("div", { staticClass: "medium-space" }),
        _vm._m(10),
        _vm._m(11),
        _vm._m(12),
        _vm._m(13),
        _c("div", { staticClass: "divider" }),
        _vm._m(14),
        _vm._m(15),
        _vm._m(16),
        _vm._m(17),
      ]
    ),
    _vm._m(18),
    _vm._m(19),
    _c("div", { attrs: { id: "layout" } }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes1" } }, [
      _c("i", [_vm._v("brightness_medium")]),
      _c("div", [_vm._v("Themes")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "button circle small border",
        attrs: { "data-ui": "#modal-add" },
      },
      [_c("i", [_vm._v("add")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes2" } }, [
      _c("i", [_vm._v("brightness_medium")]),
      _c("div", [_vm._v("Themes")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none m l", attrs: { "data-ui": "#modal-expanded" } },
      [_c("i", [_vm._v("menu")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c(
        "div",
        {
          staticClass:
            "field round suffix prefix small no-margin m l white black-text",
        },
        [
          _c("i", { staticClass: "front" }, [_vm._v("search")]),
          _c("input", { attrs: { type: "text" } }),
          _c("i", { staticClass: "front" }, [_vm._v("mic")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none s", attrs: { "data-ui": "#modal-search" } },
      [_c("i", [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none m l", attrs: { "data-ui": "#dropdown-add" } },
      [
        _c("i", [_vm._v("video_call")]),
        _c(
          "div",
          {
            staticClass: "dropdown left no-wrap",
            attrs: { id: "dropdown-add", "data-ui": "#dropdown-add" },
          },
          [
            _c("a", { staticClass: "row no-wrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("i", [_vm._v("upload")]),
              ]),
              _c("div", { staticClass: "col" }, [_vm._v("Send a video")]),
            ]),
            _c("a", { staticClass: "row no-wrap" }, [
              _c("div", { staticClass: "col min" }, [
                _c("i", [_vm._v("sensors")]),
              ]),
              _c("div", { staticClass: "col" }, [_vm._v("Broadcast live")]),
            ]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none", attrs: { "data-ui": "#modal-notifications" } },
      [_c("i", [_vm._v("notifications")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal right", attrs: { id: "modal-notifications" } },
      [
        _c("div", { staticClass: "row no-wrap middle-align" }, [
          _c("div", { staticClass: "col" }, [
            _c("h5", { staticClass: "no-margin" }, [_vm._v("Notifications")]),
          ]),
          _c("div", { staticClass: "col min" }, [
            _c("a", { attrs: { "data-ui": "#modal-notifications" } }, [
              _c("i", [_vm._v("close")]),
            ]),
          ]),
        ]),
        _c("p", [_vm._v("No new notifications here")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#modal-expanded" } }, [
      _c("i", [_vm._v("menu")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "row no-wrap",
        attrs: { "data-ui": "#modal-expanded", href: "/youtube" },
      },
      [
        _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])]),
        _c("div", { staticClass: "col" }, [_vm._v("Home")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "row no-wrap",
        attrs: { "data-ui": "#modal-expanded", href: "/youtube/whats-hot" },
      },
      [
        _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("whatshot")])]),
        _c("div", { staticClass: "col" }, [_vm._v("What's hot")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "row no-wrap",
        attrs: { "data-ui": "#modal-expanded", href: "/youtube/subscriptions" },
      },
      [
        _c("div", { staticClass: "col min" }, [
          _c("i", [_vm._v("subscriptions")]),
        ]),
        _c("div", { staticClass: "col" }, [_vm._v("Subscript")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "row no-wrap",
        attrs: { "data-ui": "#modal-expanded", href: "/youtube/library" },
      },
      [
        _c("div", { staticClass: "col min" }, [
          _c("i", [_vm._v("video_library")]),
        ]),
        _c("div", { staticClass: "col" }, [_vm._v("Library")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "row no-wrap", attrs: { "data-ui": "#modal-expanded" } },
      [
        _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("history")])]),
        _c("div", { staticClass: "col" }, [_vm._v("History")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "row no-wrap", attrs: { "data-ui": "#modal-expanded" } },
      [
        _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("slideshow")])]),
        _c("div", { staticClass: "col" }, [_vm._v("Your videos")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "row no-wrap", attrs: { "data-ui": "#modal-expanded" } },
      [
        _c("div", { staticClass: "col min" }, [
          _c("i", [_vm._v("playlist_play")]),
        ]),
        _c("div", { staticClass: "col" }, [_vm._v("Your albuns")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      { staticClass: "row no-wrap", attrs: { "data-ui": "#modal-expanded" } },
      [
        _c("div", { staticClass: "col min" }, [
          _c("i", [_vm._v("watch_later")]),
        ]),
        _c("div", { staticClass: "col" }, [_vm._v("Watch later")]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal bottom round", attrs: { id: "modal-add" } },
      [
        _c("div", { staticClass: "row no-wrap middle-align" }, [
          _c("div", { staticClass: "col" }, [
            _c("h5", { staticClass: "no-margin" }, [_vm._v("New")]),
          ]),
          _c("div", { staticClass: "col right-align" }, [
            _c("a", { attrs: { "data-ui": "#modal-add" } }, [
              _c("i", [_vm._v("close")]),
            ]),
          ]),
        ]),
        _c("a", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("upload")])]),
          _c("div", { staticClass: "col" }, [
            _c("span", [_vm._v("Send a video")]),
          ]),
        ]),
        _c("a", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("sensors")])]),
          _c("div", { staticClass: "col" }, [
            _c("span", [_vm._v("Broadcast live")]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal top transparent flat",
        attrs: { id: "modal-search" },
      },
      [
        _c(
          "div",
          {
            staticClass:
              "field round suffix prefix small no-margin white black-text",
          },
          [
            _c("i", { staticClass: "front" }, [_vm._v("search")]),
            _c("input", { attrs: { type: "text" } }),
            _c("i", { staticClass: "front" }, [_vm._v("mic")]),
          ]
        ),
      ]
    )
  },
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
      
},{"/shared/themes.vue":"shared/themes.vue","/shared/data":"shared/data.js"}],"youtube/domain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  data: function data() {
    return {
      itens: [{
        title: "Alok 01/2021",
        image: "/alok-001.jpg"
      }, {
        title: "Alok 01/2020",
        image: "/alok-002.jpg"
      }, {
        title: "Best of 2021",
        image: "/vintage-001.jpg"
      }, {
        title: "Best of 2020",
        image: "/vintage-002.jpg"
      }, {
        title: "Radio online",
        image: "/radio-001.jpg"
      }, {
        title: "Alok, Zebra, Iro - Ocean",
        image: "/ocean-001.jpg"
      }, {
        title: "Alok 01/2021",
        image: "/alok-001.jpg"
      }, {
        title: "Alok 01/2020",
        image: "/alok-002.jpg"
      }],
      whatsHot: [{
        title: "Best of 2021",
        image: "/vintage-001.jpg"
      }, {
        title: "Best of 2020",
        image: "/vintage-002.jpg"
      }, {
        title: "Radio online",
        image: "/radio-001.jpg"
      }, {
        title: "Alok, Zebra, Iro - Ocean",
        image: "/ocean-001.jpg"
      }, {
        title: "Alok 01/2021",
        image: "/alok-001.jpg"
      }, {
        title: "Alok 01/2020",
        image: "/alok-002.jpg"
      }, {
        title: "Best of 2021",
        image: "/vintage-001.jpg"
      }, {
        title: "Best of 2020",
        image: "/vintage-002.jpg"
      }],
      yourVideos: [{
        title: "Radio online",
        image: "/radio-001.jpg"
      }, {
        title: "Alok, Zebra, Iro - Ocean",
        image: "/ocean-001.jpg"
      }, {
        title: "Alok 01/2021",
        image: "/alok-001.jpg"
      }, {
        title: "Alok 01/2020",
        image: "/alok-002.jpg"
      }, {
        title: "Best of 2021",
        image: "/vintage-001.jpg"
      }, {
        title: "Best of 2020",
        image: "/vintage-002.jpg"
      }, {
        title: "Radio online",
        image: "/radio-001.jpg"
      }, {
        title: "Alok, Zebra, Iro - Ocean",
        image: "/ocean-001.jpg"
      }],
      isLoaded: false
    };
  },
  created: function created() {
    this.isLoaded = false;
  },
  mounted: function mounted() {
    this.checkIfLoaded();
    ui();
  },
  methods: {
    checkIfLoaded: function checkIfLoaded() {
      var _this = this;

      var check = function check() {
        var loaded = true;

        for (var i = 0; i < document.images.length; i++) {
          if (!document.images[i].complete || !document.images[i].naturalHeight) {
            loaded = false;
            return setTimeout(check, 500);
          }
        }

        _this.isLoaded = loaded;
      };

      check();
    }
  }
};
exports.default = _default;
},{}],"youtube/home.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default]
};
exports.default = _default;
        var $8dab7f = exports.default || module.exports;
      
      if (typeof $8dab7f === 'function') {
        $8dab7f = $8dab7f.options;
      }
    
        /* template */
        Object.assign($8dab7f, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isLoaded,
          expression: "isLoaded",
        },
      ],
      staticClass: "container",
    },
    [
      _c("div", { staticClass: "page right active" }, [
        _vm._m(0),
        _c("div", { staticClass: "space" }),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.itens, function (item, i) {
            return _c("div", { staticClass: "col s12 m6 l3" }, [
              _c("div", { staticClass: "card no-padding flat transparent" }, [
                _c("a", { staticClass: "wave" }, [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: { src: item.image },
                  }),
                  _c(
                    "div",
                    {
                      staticClass:
                        "absolute right bottom small-margin black white-text small-text",
                    },
                    [_vm._v(" 00:00:00 ")]
                  ),
                ]),
                _c("div", { staticClass: "space" }),
                _c("div", { staticClass: "row no-wrap middle-align" }, [
                  _c("div", { staticClass: "col min" }, [
                    _c("img", {
                      staticClass: "small circle",
                      attrs: { src: item.image },
                    }),
                  ]),
                  _c("div", { staticClass: "col truncate" }, [
                    _c("div", { staticClass: "bold" }, [
                      _vm._v(_vm._s(item.title)),
                    ]),
                    _c("div", [_vm._v("10k views")]),
                  ]),
                  _c("div", { staticClass: "col min" }, [
                    _c(
                      "button",
                      {
                        staticClass: "none",
                        attrs: { "data-ui": "#dropdown-" + i },
                      },
                      [
                        _c("i", [_vm._v("more_vert")]),
                        _c(
                          "div",
                          {
                            staticClass: "dropdown left no-wrap",
                            attrs: {
                              id: "dropdown-" + i,
                              "data-ui": "#dropdown-" + i,
                            },
                          },
                          [
                            _c("a", [_vm._v("Save to library")]),
                            _c("a", [_vm._v("Watch later")]),
                            _c("a", [_vm._v("Like it")]),
                          ]
                        ),
                      ]
                    ),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
        _c("div", { staticClass: "large-divider" }),
        _c("h5", [_vm._v("What's hot")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.whatsHot, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c(
                "div",
                {
                  staticClass: "card no-padding border transparent small-width",
                },
                [
                  _c("a", { staticClass: "wave" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: item.image },
                    }),
                    _c(
                      "div",
                      {
                        staticClass:
                          "absolute right bottom small-margin black white-text small-text",
                      },
                      [_vm._v(" 00:00:00 ")]
                    ),
                  ]),
                  _c("div", { staticClass: "padding" }, [
                    _c("div", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col truncate" }, [
                        _c("div", { staticClass: "bold" }, [
                          _vm._v(_vm._s(item.title)),
                        ]),
                        _c("div", [_vm._v("10k views")]),
                      ]),
                      _vm._m(1, true),
                    ]),
                  ]),
                ]
              ),
            ])
          }),
          0
        ),
        _c("div", { staticClass: "large-divider" }),
        _c("h5", [_vm._v("Your videos")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.yourVideos, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c(
                "div",
                {
                  staticClass: "card no-padding border transparent small-width",
                },
                [
                  _c("a", { staticClass: "wave" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: item.image },
                    }),
                    _c(
                      "div",
                      {
                        staticClass:
                          "absolute right bottom small-margin black white-text small-text",
                      },
                      [_vm._v(" 00:00:00 ")]
                    ),
                  ]),
                  _c("div", { staticClass: "padding" }, [
                    _c("div", { staticClass: "row no-wrap middle-align" }, [
                      _c("div", { staticClass: "col truncate" }, [
                        _c("div", { staticClass: "bold" }, [
                          _vm._v(_vm._s(item.title)),
                        ]),
                        _c("div", [_vm._v("10k views")]),
                      ]),
                      _vm._m(2, true),
                    ]),
                  ]),
                ]
              ),
            ])
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("nav", { staticClass: "scroll" }, [
      _c("a", { staticClass: "chip active" }, [_vm._v("The best of 2020")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Documentaries")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Rock and roll")]),
      _c("a", { staticClass: "chip" }, [_vm._v("Others")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("a", [_c("i", [_vm._v("thumb_up")])]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("a", [_c("i", [_vm._v("thumb_up")])]),
    ])
  },
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
      
},{"./domain":"youtube/domain.js"}],"youtube/whatsHot.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default]
};
exports.default = _default;
        var $d357d6 = exports.default || module.exports;
      
      if (typeof $d357d6 === 'function') {
        $d357d6 = $d357d6.options;
      }
    
        /* template */
        Object.assign($d357d6, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isLoaded,
          expression: "isLoaded",
        },
      ],
      staticClass: "container",
    },
    [
      _c("div", { staticClass: "page right active" }, [
        _c("h5", [_vm._v("What's hot")]),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.itens, function (item) {
            return _c("div", { staticClass: "col s12" }, [
              _c("div", { staticClass: "card no-padding flat transparent" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col s12 m4" }, [
                    _c("a", { staticClass: "wave" }, [
                      _c("img", {
                        staticClass: "empty-state",
                        attrs: { src: item.image },
                      }),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute right bottom small-margin black white-text small-text",
                        },
                        [_vm._v(" 00:00:00 ")]
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m8" }, [
                    _c("h5", { staticClass: "no-margin" }, [
                      _vm._v(_vm._s(item.title)),
                    ]),
                    _c("div", [_vm._v("10k views")]),
                    _c("div", { staticClass: "space" }),
                    _c("div", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./domain":"youtube/domain.js"}],"youtube/subscriptions.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default]
};
exports.default = _default;
        var $898a42 = exports.default || module.exports;
      
      if (typeof $898a42 === 'function') {
        $898a42 = $898a42.options;
      }
    
        /* template */
        Object.assign($898a42, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isLoaded,
          expression: "isLoaded",
        },
      ],
      staticClass: "container",
    },
    [
      _c("div", { staticClass: "page right active" }, [
        _c("h5", [_vm._v("Subscriptions")]),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.itens, function (item) {
            return _c("div", { staticClass: "col s12" }, [
              _c("div", { staticClass: "card no-padding flat transparent" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col s12 m4" }, [
                    _c("a", { staticClass: "wave" }, [
                      _c("img", {
                        staticClass: "empty-state",
                        attrs: { src: item.image },
                      }),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute right bottom small-margin black white-text small-text",
                        },
                        [_vm._v(" 00:00:00 ")]
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m8" }, [
                    _c("h5", { staticClass: "no-margin" }, [
                      _vm._v(_vm._s(item.title)),
                    ]),
                    _c("div", [_vm._v("10k views")]),
                    _c("div", { staticClass: "space" }),
                    _c("div", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./domain":"youtube/domain.js"}],"youtube/library.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default]
};
exports.default = _default;
        var $b07cda = exports.default || module.exports;
      
      if (typeof $b07cda === 'function') {
        $b07cda = $b07cda.options;
      }
    
        /* template */
        Object.assign($b07cda, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isLoaded,
          expression: "isLoaded",
        },
      ],
      staticClass: "container",
    },
    [
      _c("div", { staticClass: "page right active" }, [
        _c("h5", [_vm._v("Library")]),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.itens, function (item) {
            return _c("div", { staticClass: "col s12" }, [
              _c("div", { staticClass: "card no-padding flat transparent" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col s12 m4" }, [
                    _c("a", { staticClass: "wave" }, [
                      _c("img", {
                        staticClass: "empty-state",
                        attrs: { src: item.image },
                      }),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute right bottom small-margin black white-text small-text",
                        },
                        [_vm._v(" 00:00:00 ")]
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m8" }, [
                    _c("h5", { staticClass: "no-margin" }, [
                      _vm._v(_vm._s(item.title)),
                    ]),
                    _c("div", [_vm._v("10k views")]),
                    _c("div", { staticClass: "space" }),
                    _c("div", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./domain":"youtube/domain.js"}],"youtube/explore.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default]
};
exports.default = _default;
        var $262347 = exports.default || module.exports;
      
      if (typeof $262347 === 'function') {
        $262347 = $262347.options;
      }
    
        /* template */
        Object.assign($262347, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.isLoaded,
          expression: "isLoaded",
        },
      ],
      staticClass: "container",
    },
    [
      _c("div", { staticClass: "page right active" }, [
        _c("h5", [_vm._v("Explore")]),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.itens, function (item) {
            return _c("div", { staticClass: "col s12" }, [
              _c("div", { staticClass: "card no-padding flat transparent" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col s12 m4" }, [
                    _c("a", { staticClass: "wave" }, [
                      _c("img", {
                        staticClass: "empty-state",
                        attrs: { src: item.image },
                      }),
                      _c(
                        "div",
                        {
                          staticClass:
                            "absolute right bottom small-margin black white-text small-text",
                        },
                        [_vm._v(" 00:00:00 ")]
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "col s12 m8" }, [
                    _c("h5", { staticClass: "no-margin" }, [
                      _vm._v(_vm._s(item.title)),
                    ]),
                    _c("div", [_vm._v("10k views")]),
                    _c("div", { staticClass: "space" }),
                    _c("div", [
                      _vm._v(
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
                      ),
                    ]),
                  ]),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./domain":"youtube/domain.js"}],"youtube/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _layout = _interopRequireDefault(require("~/youtube/layout.vue"));

var _home = _interopRequireDefault(require("~/youtube/home.vue"));

var _whatsHot = _interopRequireDefault(require("~/youtube/whatsHot.vue"));

var _subscriptions = _interopRequireDefault(require("~/youtube/subscriptions.vue"));

var _library = _interopRequireDefault(require("~/youtube/library.vue"));

var _explore = _interopRequireDefault(require("~/youtube/explore.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/youtube", _home.default, _layout.default);
(0, _router.default)("/youtube/whats-hot", _whatsHot.default, _layout.default);
(0, _router.default)("/youtube/subscriptions", _subscriptions.default, _layout.default);
(0, _router.default)("/youtube/library", _library.default, _layout.default);
(0, _router.default)("/youtube/explore", _explore.default, _layout.default);
},{"~/shared/router.js":"shared/router.js","~/youtube/layout.vue":"youtube/layout.vue","~/youtube/home.vue":"youtube/home.vue","~/youtube/whatsHot.vue":"youtube/whatsHot.vue","~/youtube/subscriptions.vue":"youtube/subscriptions.vue","~/youtube/library.vue":"youtube/library.vue","~/youtube/explore.vue":"youtube/explore.vue"}],"netflix/layout.vue":[function(require,module,exports) {
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
var _default = {
  data: function (_data) {
    function data() {
      return _data.apply(this, arguments);
    }

    data.toString = function () {
      return _data.toString();
    };

    return data;
  }(function () {
    return data();
  }),
  mounted: function mounted() {
    ui();
  },
  methods: {
    scroll: function scroll(selector) {
      document.querySelector(selector).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    }
  }
};
exports.default = _default;
        var $696d7a = exports.default || module.exports;
      
      if (typeof $696d7a === 'function') {
        $696d7a = $696d7a.options;
      }
    
        /* template */
        Object.assign($696d7a, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "grey10 white-text" }, [
    _c("div", { staticClass: "menu top top-shadow" }, [
      _c("div", { staticClass: "row no-wrap middle-align" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "padding" }, [
            _c("a", [_c("img", { attrs: { src: "/netflix.png" } })]),
            _c(
              "button",
              {
                staticClass: "none white-text s",
                attrs: { "data-ui": "#dropdown-menu" },
              },
              [
                _c("i", [_vm._v("menu")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown no-wrap",
                    attrs: { id: "dropdown-menu", "data-ui": "#dropdown-menu" },
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "row no-wrap",
                        on: {
                          click: function ($event) {
                            return _vm.scroll("#home")
                          },
                        },
                      },
                      [
                        _vm._m(0),
                        _c("div", { staticClass: "col" }, [_vm._v("Home")]),
                      ]
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "row no-wrap",
                        on: {
                          click: function ($event) {
                            return _vm.scroll("#series")
                          },
                        },
                      },
                      [
                        _vm._m(1),
                        _c("div", { staticClass: "col" }, [_vm._v("Series")]),
                      ]
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "row no-wrap",
                        on: {
                          click: function ($event) {
                            return _vm.scroll("#movies")
                          },
                        },
                      },
                      [
                        _vm._m(2),
                        _c("div", { staticClass: "col" }, [_vm._v("Movies")]),
                      ]
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "row no-wrap",
                        on: {
                          click: function ($event) {
                            return _vm.scroll("#hot")
                          },
                        },
                      },
                      [
                        _vm._m(3),
                        _c("div", { staticClass: "col" }, [_vm._v("Hot")]),
                      ]
                    ),
                    _c(
                      "a",
                      {
                        staticClass: "row no-wrap",
                        on: {
                          click: function ($event) {
                            return _vm.scroll("#my-list")
                          },
                        },
                      },
                      [
                        _vm._m(4),
                        _c("div", { staticClass: "col" }, [_vm._v("My list")]),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            _c(
              "button",
              {
                staticClass: "none white-text capitalize m l",
                on: {
                  click: function ($event) {
                    return _vm.scroll("#home")
                  },
                },
              },
              [_vm._v("Home")]
            ),
            _c(
              "button",
              {
                staticClass: "none white-text capitalize m l",
                on: {
                  click: function ($event) {
                    return _vm.scroll("#series")
                  },
                },
              },
              [_vm._v("Series")]
            ),
            _c(
              "button",
              {
                staticClass: "none white-text capitalize m l",
                on: {
                  click: function ($event) {
                    return _vm.scroll("#movies")
                  },
                },
              },
              [_vm._v("Movies")]
            ),
            _c(
              "button",
              {
                staticClass: "none white-text capitalize m l",
                on: {
                  click: function ($event) {
                    return _vm.scroll("#hot")
                  },
                },
              },
              [_vm._v("Hot")]
            ),
            _c(
              "button",
              {
                staticClass: "none white-text capitalize m l",
                on: {
                  click: function ($event) {
                    return _vm.scroll("#my-list")
                  },
                },
              },
              [_vm._v("My list")]
            ),
          ]),
        ]),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _vm._m(5),
            _c(
              "button",
              {
                staticClass: "none white-text",
                attrs: { "data-ui": "#dropdown-notifications" },
              },
              [
                _c("i", [_vm._v("notifications")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown left no-wrap",
                    attrs: {
                      id: "dropdown-notifications",
                      "data-ui": "#dropdown-notifications",
                    },
                  },
                  [
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "round",
                          attrs: { src: "alok-001.jpg" },
                        }),
                      ]),
                      _vm._m(6),
                    ]),
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "round",
                          attrs: { src: "vintage-001.jpg" },
                        }),
                      ]),
                      _vm._m(7),
                    ]),
                    _c("a", { staticClass: "row no-wrap" }, [
                      _c("div", { staticClass: "col min" }, [
                        _c("img", {
                          staticClass: "round",
                          attrs: { src: "ocean-001.jpg" },
                        }),
                      ]),
                      _vm._m(8),
                    ]),
                  ]
                ),
              ]
            ),
            _c("a", { attrs: { href: "/" } }, [
              _c("img", {
                staticClass: "circle",
                attrs: { src: "/favicon.png" },
              }),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._m(9),
    _c("div", { attrs: { id: "layout" } }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [_c("i", [_vm._v("home")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("i", [_vm._v("subscriptions")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("i", [_vm._v("subscriptions")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("i", [_vm._v("whatshot")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("i", [_vm._v("video_library")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none white-text", attrs: { "data-ui": "#modal-search" } },
      [_c("i", [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Alok 01/2021")]),
      _c("label", [_vm._v("10k views")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("The best of 2021")]),
      _c("label", [_vm._v("10k views")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("div", [_vm._v("Alok, Zebra, Iro - Ocean")]),
      _c("label", [_vm._v("10k views")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal top transparent flat",
        attrs: { id: "modal-search" },
      },
      [
        _c("div", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col m l" }),
          _c("div", { staticClass: "col" }, [
            _c(
              "div",
              {
                staticClass:
                  "field round suffix prefix small no-margin white black-text",
              },
              [
                _c("i", { staticClass: "fron" }, [_vm._v("search")]),
                _c("input", { attrs: { type: "text" } }),
                _c("i", { staticClass: "front" }, [_vm._v("mic")]),
              ]
            ),
          ]),
          _c("div", { staticClass: "col m l" }),
        ]),
      ]
    )
  },
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
      
},{}],"netflix/home.vue":[function(require,module,exports) {
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
var _default = {
  data: function data() {
    return {
      todaysRanking: [{
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }],
      series: [{
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }],
      movies: [{
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }],
      hot: [{
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }],
      myList: [{
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }, {
        image: "/alok-001.jpg"
      }, {
        image: "/alok-002.jpg"
      }, {
        image: "/vintage-001.jpg"
      }, {
        image: "/vintage-002.jpg"
      }, {
        image: "/radio-001.jpg"
      }, {
        image: "/ocean-001.jpg"
      }]
    };
  },
  mounted: function mounted() {
    ui();
  },
  methods: {
    showDetails: function showDetails(event) {
      event.currentTarget.querySelector(".page").className = "page right active";
    },
    hideDetails: function hideDetails(event) {
      event.currentTarget.querySelector(".page").className = "page right";
    }
  }
};
exports.default = _default;
        var $573d9e = exports.default || module.exports;
      
      if (typeof $573d9e === 'function') {
        $573d9e = $573d9e.options;
      }
    
        /* template */
        Object.assign($573d9e, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "home" } }, [
    _c("div", { staticClass: "large-height" }, [
      _c(
        "video",
        {
          staticClass: "responsive",
          attrs: {
            autoplay: "autoplay",
            loop: "loop",
            muted: "muted",
            playsinline: "playsinline",
          },
          domProps: { muted: true },
        },
        [_c("source", { attrs: { src: "/dance.mp4", type: "video/mp4" } })]
      ),
      _vm._m(0),
    ]),
    _c("div", { staticClass: "container max" }, [
      _c("div", { staticClass: "page right active" }, [
        _c("div", { staticClass: "large-space" }),
        _c("h5", { staticClass: "bold" }, [_vm._v("Today's ranking")]),
        _c(
          "div",
          { staticClass: "row" },
          _vm._l(_vm.todaysRanking, function (item, i) {
            return _c("div", { staticClass: "col s12 m6 l3" }, [
              _c(
                "div",
                {
                  staticClass: "card no-padding",
                  on: { mouseover: _vm.showDetails, mouseout: _vm.hideDetails },
                },
                [
                  _c("a", { staticClass: "wave" }, [
                    _c("img", {
                      staticClass: "responsive",
                      attrs: { src: item.image },
                    }),
                  ]),
                  _c(
                    "button",
                    {
                      staticClass:
                        "circle small absolute right top margin black white-text",
                    },
                    [
                      _c("h5", { staticClass: "no-margin center-align" }, [
                        _vm._v(_vm._s(i + 1)),
                      ]),
                    ]
                  ),
                  _vm._m(1, true),
                ]
              ),
            ])
          }),
          0
        ),
        _c("div", {
          staticClass: "large-space page active",
          attrs: { id: "series" },
        }),
        _c("h5", { staticClass: "bold" }, [_vm._v("Series")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.series, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "card no-padding small-width" }, [
                _c("a", { staticClass: "wave" }, [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: { src: item.image },
                  }),
                ]),
              ]),
            ])
          }),
          0
        ),
        _c("div", {
          staticClass: "large-space page active",
          attrs: { id: "movies" },
        }),
        _c("h5", { staticClass: "bold" }, [_vm._v("Movies")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.movies, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "card no-padding small-width" }, [
                _c("a", { staticClass: "wave" }, [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: { src: item.image },
                  }),
                ]),
              ]),
            ])
          }),
          0
        ),
        _c("div", {
          staticClass: "large-space page active",
          attrs: { id: "hot" },
        }),
        _c("h5", { staticClass: "bold" }, [_vm._v("Hot")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.hot, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "card no-padding small-width" }, [
                _c("a", { staticClass: "wave" }, [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: { src: item.image },
                  }),
                ]),
              ]),
            ])
          }),
          0
        ),
        _c("div", {
          staticClass: "large-space page active",
          attrs: { id: "my-list" },
        }),
        _c("h5", { staticClass: "bold" }, [_vm._v("My list")]),
        _c(
          "div",
          { staticClass: "row no-wrap scroll" },
          _vm._l(_vm.myList, function (item) {
            return _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "card no-padding small-width" }, [
                _c("a", { staticClass: "wave" }, [
                  _c("img", {
                    staticClass: "responsive",
                    attrs: { src: item.image },
                  }),
                ]),
              ]),
            ])
          }),
          0
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "absolute top bottom left middle-align small left-shadow",
      },
      [
        _c("div", { staticClass: "large-padding" }, [
          _c("h5", { staticClass: "bold" }, [_vm._v("Started in 1983")]),
          _c("div", [
            _vm._v(
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            ),
          ]),
          _c("nav", [
            _c("button", { staticClass: "large white black-text" }, [
              _c("i", [_vm._v("play_arrow")]),
              _c("span", [_vm._v(" Watch")]),
            ]),
            _c(
              "button",
              { staticClass: "large border white-border white-text" },
              [
                _c("i", [_vm._v("info_outline")]),
                _c("span", [_vm._v(" More info")]),
              ]
            ),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page" }, [
      _c("div", { staticClass: "padding absolute left right bottom" }, [
        _c("nav", [
          _c(
            "button",
            { staticClass: "circle border small white-border white-text" },
            [_c("i", [_vm._v("play_arrow")])]
          ),
          _c(
            "button",
            { staticClass: "circle border small white-border white-text" },
            [_c("i", [_vm._v("add")])]
          ),
          _c(
            "button",
            { staticClass: "circle border small white-border white-text" },
            [_c("i", [_vm._v("thumb_up")])]
          ),
        ]),
      ]),
    ])
  },
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
      
},{}],"netflix/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _layout = _interopRequireDefault(require("~/netflix/layout.vue"));

var _home = _interopRequireDefault(require("~/netflix/home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/netflix", _home.default, _layout.default);
},{"~/shared/router.js":"shared/router.js","~/netflix/layout.vue":"netflix/layout.vue","~/netflix/home.vue":"netflix/home.vue"}],"gmail/layout.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themes = _interopRequireDefault(require("../shared/themes.vue"));

var _data2 = _interopRequireDefault(require("../shared/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = {
  components: {
    themes: _themes.default
  },
  data: function data() {
    return _objectSpread(_objectSpread({}, (0, _data2.default)()), {}, {
      url: "/gmail"
    });
  },
  mounted: function mounted() {
    var _this = this;

    this.isDark = /dark/.test(document.body.getAttribute("style"));
    ui();
    window.addEventListener("redirected", function (event) {
      _this.url = event.detail.url;
    });
  }
};
exports.default = _default;
        var $84e6a9 = exports.default || module.exports;
      
      if (typeof $84e6a9 === 'function') {
        $84e6a9 = $84e6a9.options;
      }
    
        /* template */
        Object.assign($84e6a9, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container max" }, [
    _c(
      "div",
      { staticClass: "menu left flat no-space m l" },
      [
        _c("div", { staticClass: "large-space" }),
        _c("div", { staticClass: "medium-space" }),
        _c(
          "a",
          {
            staticClass: "button white circle large",
            attrs: { "data-ui": "#modal-add" },
          },
          [_c("img", { attrs: { src: "/add.png" } })]
        ),
        _c("div", { staticClass: "space" }),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail" },
            attrs: { href: "/gmail" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("inbox")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Inbox")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/snoozed" },
            attrs: { href: "/gmail/snoozed" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("watch_later")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Snoozed")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/important" },
            attrs: { href: "/gmail/important" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("label_important")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Important")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/sent" },
            attrs: { href: "/gmail/sent" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("send")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Sent")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/drafts" },
            attrs: { href: "/gmail/drafts" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("insert_drive_file")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Drafts")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/spam" },
            attrs: { href: "/gmail/spam" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("error_outline")]),
            _c("div", { staticClass: "tooltip right" }, [_vm._v("Spam")]),
          ]
        ),
        _vm._m(0),
        _c(
          "themes",
          {
            attrs: { id: "themes1" },
            model: {
              value: _vm.$data,
              callback: function ($$v) {
                _vm.$data = $$v
              },
              expression: "$data",
            },
          },
          [
            _c("div", { staticClass: "large-space" }),
            _c("div", { staticClass: "medium-space" }),
          ]
        ),
      ],
      1
    ),
    _c("div", { staticClass: "menu right flat m l" }, [
      _c("div", { staticClass: "large-space" }),
      _c("div", { staticClass: "medium-space" }),
      _c("a", { staticClass: "wave dark" }, [
        _c("img", { staticClass: "tiny", attrs: { src: "/calendar.png" } }),
        _c("span", { staticClass: "tooltip left" }, [_vm._v("Calendar")]),
      ]),
      _c("a", { staticClass: "wave dark" }, [
        _c("img", { staticClass: "tiny", attrs: { src: "/keep.png" } }),
        _c("span", { staticClass: "tooltip left" }, [_vm._v("Keep")]),
      ]),
      _c("a", { staticClass: "wave dark" }, [
        _c("img", { staticClass: "tiny", attrs: { src: "/tasks.png" } }),
        _c("span", { staticClass: "tooltip left" }, [_vm._v("Tasks")]),
      ]),
      _c("a", { staticClass: "wave dark" }, [
        _c("img", { staticClass: "tiny", attrs: { src: "/contacts.png" } }),
        _c("span", { staticClass: "tooltip left" }, [_vm._v("Contacts")]),
      ]),
    ]),
    _c(
      "div",
      { staticClass: "menu bottom flat s" },
      [
        _c(
          "a",
          {
            class: { active: this.url == "/gmail" },
            attrs: { href: "/gmail" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("inbox")]),
            _c("div", [_vm._v("Inbox")]),
          ]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/sent" },
            attrs: { href: "/gmail/sent" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("send")]),
            _c("div", [_vm._v("Sent")]),
          ]
        ),
        _c(
          "a",
          {
            staticClass: "button white circle large",
            attrs: { "data-ui": "#modal-add-small" },
          },
          [_c("img", { attrs: { src: "/add.png" } })]
        ),
        _c(
          "a",
          {
            class: { active: this.url == "/gmail/drafts" },
            attrs: { href: "/gmail/drafts" },
          },
          [
            _c("i", { staticClass: "outlined" }, [_vm._v("insert_drive_file")]),
            _c("div", [_vm._v("Drafts")]),
          ]
        ),
        _vm._m(1),
        _c(
          "themes",
          {
            attrs: { id: "themes2" },
            model: {
              value: _vm.$data,
              callback: function ($$v) {
                _vm.$data = $$v
              },
              expression: "$data",
            },
          },
          [
            _c("div", { staticClass: "large-space" }),
            _c("div", { staticClass: "medium-space" }),
          ]
        ),
      ],
      1
    ),
    _c("div", { staticClass: "menu top flat" }, [
      _c("div", { staticClass: "row no-wrap middle-align" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "padding" }, [
            _vm._m(2),
            _c("a", [
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.isDark,
                    expression: "!isDark",
                  },
                ],
                attrs: { src: "/gmail-light.png" },
              }),
              _c("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.isDark,
                    expression: "isDark",
                  },
                ],
                attrs: { src: "/gmail-dark.png" },
              }),
            ]),
          ]),
        ]),
        _vm._m(3),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _vm._m(4),
            _vm._m(5),
            _c(
              "button",
              {
                staticClass: "none m l",
                attrs: { "data-ui": "#dropdown-apps" },
              },
              [
                _c("i", { staticClass: "outlined" }, [_vm._v("apps")]),
                _c(
                  "div",
                  {
                    staticClass: "dropdown left small-width",
                    attrs: { id: "dropdown-apps", "data-ui": "#dropdown-apps" },
                  },
                  [
                    _c("div", { staticClass: "large-padding" }, [
                      _c("div", { staticClass: "row" }, [
                        _c("a", { staticClass: "wave col s6 middle-align" }, [
                          _c("div", { staticClass: "center-align" }, [
                            _c("img", { attrs: { src: "/calendar.png" } }),
                            _c("p", [_vm._v("Calendar")]),
                          ]),
                        ]),
                        _c("a", { staticClass: "wave col s6 middle-align" }, [
                          _c("div", { staticClass: "center-align" }, [
                            _c("img", { attrs: { src: "/keep.png" } }),
                            _c("p", [_vm._v("Keep")]),
                          ]),
                        ]),
                        _c("a", { staticClass: "wave col s6 middle-align" }, [
                          _c("div", { staticClass: "center-align" }, [
                            _c("img", { attrs: { src: "/tasks.png" } }),
                            _c("p", [_vm._v("Tasks")]),
                          ]),
                        ]),
                        _c("a", { staticClass: "wave col s6 middle-align" }, [
                          _c("div", { staticClass: "center-align" }, [
                            _c("img", { attrs: { src: "/contacts.png" } }),
                            _c("p", [_vm._v("Contacts")]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
              ]
            ),
            _c("a", { attrs: { href: "/" } }, [
              _c("img", {
                staticClass: "circle",
                attrs: { src: "/favicon.png" },
              }),
            ]),
          ]),
        ]),
      ]),
    ]),
    _vm._m(6),
    _vm._m(7),
    _vm._m(8),
    _c("div", { attrs: { id: "layout" } }),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes1" } }, [
      _c("i", { staticClass: "outlined" }, [_vm._v("brightness_medium")]),
      _c("div", { staticClass: "tooltip right" }, [_vm._v("Themes")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { attrs: { "data-ui": "#themes2" } }, [
      _c("i", { staticClass: "outlined" }, [_vm._v("brightness_medium")]),
      _c("div", [_vm._v("Theme")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none", attrs: { "data-ui": "#dropdown-menu" } },
      [
        _c("i", { staticClass: "outlined" }, [_vm._v("menu")]),
        _c(
          "div",
          {
            staticClass: "dropdown no-wrap",
            attrs: { id: "dropdown-menu", "data-ui": "#dropdown-menu" },
          },
          [
            _c("a", { staticClass: "row no-wrap", attrs: { href: "/gmail" } }, [
              _c("div", { staticClass: "col min" }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("inbox")]),
              ]),
              _c("div", { staticClass: "col" }, [_vm._v("Inbox")]),
            ]),
            _c(
              "a",
              { staticClass: "row no-wrap", attrs: { href: "/gmail/snoozed" } },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [_vm._v("watch_later")]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Snoozed")]),
              ]
            ),
            _c(
              "a",
              {
                staticClass: "row no-wrap",
                attrs: { href: "/gmail/important" },
              },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [
                    _vm._v("label_important"),
                  ]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Important")]),
              ]
            ),
            _c(
              "a",
              { staticClass: "row no-wrap", attrs: { href: "/gmail/sent" } },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [_vm._v("send")]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Sent")]),
              ]
            ),
            _c(
              "a",
              { staticClass: "row no-wrap", attrs: { href: "/gmail/drafts" } },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [
                    _vm._v("insert_drive_file"),
                  ]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Drafts")]),
              ]
            ),
            _c(
              "a",
              { staticClass: "row no-wrap", attrs: { href: "/gmail/spam" } },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [
                    _vm._v("error_outline"),
                  ]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Spam")]),
              ]
            ),
            _c(
              "a",
              { staticClass: "row no-wrap", attrs: { "data-ui": "#themes1" } },
              [
                _c("div", { staticClass: "col min" }, [
                  _c("i", { staticClass: "outlined" }, [
                    _vm._v("brightness_medium"),
                  ]),
                ]),
                _c("div", { staticClass: "col" }, [_vm._v("Themes")]),
              ]
            ),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c(
        "div",
        {
          staticClass:
            "field round flat suffix prefix small no-margin m l white black-text",
        },
        [
          _c("i", { staticClass: "front" }, [_vm._v("search")]),
          _c("input", {
            attrs: { type: "text", "data-ui": "#dropdown-search" },
          }),
          _c("i", { staticClass: "front" }, [_vm._v("mic")]),
        ]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none s", attrs: { "data-ui": "#modal-search" } },
      [_c("i", { staticClass: "outlined" }, [_vm._v("search")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      { staticClass: "none m l", attrs: { "data-ui": "#dropdown-settings" } },
      [
        _c("i", { staticClass: "outlined" }, [_vm._v("settings")]),
        _c(
          "div",
          {
            staticClass: "dropdown left no-wrap",
            attrs: { id: "dropdown-settings", "data-ui": "#dropdown-settings" },
          },
          [
            _c("a", [
              _c("div", [_vm._v("Account")]),
              _c("label", [_vm._v("Change account")]),
            ]),
            _c("a", [
              _c("div", [_vm._v("Appearance")]),
              _c("label", [_vm._v("Change display settings")]),
            ]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal round", attrs: { id: "modal-add" } },
      [
        _c("div", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col" }, [
            _c("nav", [
              _c("a", { attrs: { "data-ui": "#modal-add" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("arrow_back")]),
              ]),
              _c("a", [
                _c("h5", { staticClass: "no-margin" }, [_vm._v("New message")]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col" }, [
            _c("nav", { staticClass: "right-align" }, [
              _c("a", { attrs: { "data-ui": "#modal-add" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("attach_file")]),
              ]),
              _c("a", { attrs: { "data-ui": "#modal-add" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("send")]),
              ]),
            ]),
          ]),
        ]),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("From")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("To")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("Subject")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border textarea" }, [
              _c("textarea"),
              _c("label", [_vm._v("Message")]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "modal round bottom", attrs: { id: "modal-add-small" } },
      [
        _c("div", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col" }, [
            _c("nav", [
              _c("a", { attrs: { "data-ui": "#modal-add-small" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("arrow_back")]),
              ]),
              _c("a", [
                _c("h5", { staticClass: "no-margin" }, [_vm._v("New message")]),
              ]),
            ]),
          ]),
          _c("div", { staticClass: "col" }, [
            _c("nav", { staticClass: "right-align" }, [
              _c("a", { attrs: { "data-ui": "#modal-add-small" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("attach_file")]),
              ]),
              _c("a", { attrs: { "data-ui": "#modal-add-small" } }, [
                _c("i", { staticClass: "outlined" }, [_vm._v("send")]),
              ]),
            ]),
          ]),
        ]),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("From")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("To")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border" }, [
              _c("input", { attrs: { type: "text" } }),
              _c("label", [_vm._v("Subject")]),
            ]),
          ]),
          _c("div", { staticClass: "col s12" }, [
            _c("div", { staticClass: "field label border textarea" }, [
              _c("textarea"),
              _c("label", [_vm._v("Message")]),
            ]),
          ]),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "modal top transparent flat",
        attrs: { id: "modal-search" },
      },
      [
        _c("div", { staticClass: "row no-wrap" }, [
          _c("div", { staticClass: "col m l" }),
          _c("div", { staticClass: "col" }, [
            _c(
              "div",
              {
                staticClass:
                  "field round flat suffix prefix small no-margin white black-text",
              },
              [
                _c("i", { staticClass: "front" }, [_vm._v("search")]),
                _c("input", { attrs: { type: "text" } }),
                _c("i", { staticClass: "front" }, [_vm._v("mic")]),
              ]
            ),
          ]),
          _c("div", { staticClass: "col m l" }),
        ]),
      ]
    )
  },
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
      
},{"../shared/themes.vue":"shared/themes.vue","../shared/data":"shared/data.js"}],"gmail/domain.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var drafts = [];

while (drafts.length < 1) {
  drafts.push({
    check: false,
    star: false
  });
}

var inbox = [];

while (inbox.length < 30) {
  inbox.push({
    check: false,
    star: false
  });
}

var sent = [];

while (sent.length < 5) {
  sent.push({
    check: false,
    star: false
  });
}

var _default = {
  data: function data() {
    return {
      drafts: drafts,
      inbox: inbox,
      sent: sent,
      important: [],
      snoozed: [],
      spam: [],
      emails: [],
      check: false
    };
  },
  watch: {
    check: function check() {
      this.checkAll();
    }
  },
  mounted: function mounted() {
    ui();
  },
  methods: {
    checkAll: function checkAll() {
      for (var i = 0; i < this.emails.length; i++) {
        this.emails[i].check = this.check;
      }
    },
    check: function check(email) {
      email.check = !email.check;
    },
    star: function star(email) {
      email.star = !email.star;
    }
  }
};
exports.default = _default;
},{}],"gmail/home.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default],
  created: function created() {
    this.emails = this.inbox;
  }
};
exports.default = _default;
        var $4823e1 = exports.default || module.exports;
      
      if (typeof $4823e1 === 'function') {
        $4823e1 = $4823e1.options;
      }
    
        /* template */
        Object.assign($4823e1, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page right active" },
    [
      _c("div", { staticClass: "row no-wrap m l" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.check,
                    expression: "check",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.check)
                    ? _vm._i(_vm.check, null) > -1
                    : _vm.check,
                },
                on: {
                  change: function ($event) {
                    var $$a = _vm.check,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.check = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.check = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.check = $$c
                    }
                  },
                },
              }),
              _c("span"),
            ]),
            _vm._m(0),
            _vm._m(1),
          ]),
        ]),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _c("label", [_vm._v("from 1 to " + _vm._s(_vm.emails.length))]),
            _vm._m(2),
            _vm._m(3),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "space m l" }),
      _vm._l(_vm.emails, function (email) {
        return _c("a", { staticClass: "row no-wrap middle-align divider" }, [
          _c("div", { staticClass: "col min" }, [
            _c("nav", [
              _c("label", { staticClass: "checkbox m l" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: email.check,
                      expression: "email.check",
                    },
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(email.check)
                      ? _vm._i(email.check, null) > -1
                      : email.check,
                  },
                  on: {
                    change: function ($event) {
                      var $$a = email.check,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && _vm.$set(email, "check", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              email,
                              "check",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(email, "check", $$c)
                      }
                    },
                  },
                }),
                _c("span"),
              ]),
              _c(
                "a",
                {
                  staticClass: "m l",
                  on: {
                    click: function ($event) {
                      return _vm.star(email)
                    },
                  },
                },
                [
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !email.star,
                          expression: "!email.star",
                        },
                      ],
                    },
                    [_vm._v("star_outline")]
                  ),
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: email.star,
                          expression: "email.star",
                        },
                      ],
                      staticClass: "yellow-text",
                    },
                    [_vm._v("star")]
                  ),
                ]
              ),
              _c("button", { staticClass: "small flat circle s" }, [
                _vm._v("A"),
              ]),
            ]),
          ]),
          _vm._m(4, true),
          _vm._m(5, true),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("refresh")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("more_vert")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_back")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_forward")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col truncate" }, [
      _c("b", [_vm._v("From - ")]),
      _c("b", [_vm._v("Subject - ")]),
      _c("span", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("label", [_vm._v("12:03")]),
    ])
  },
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
      
},{"./domain":"gmail/domain.js"}],"gmail/drafts.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default],
  created: function created() {
    this.emails = this.drafts;
  }
};
exports.default = _default;
        var $114498 = exports.default || module.exports;
      
      if (typeof $114498 === 'function') {
        $114498 = $114498.options;
      }
    
        /* template */
        Object.assign($114498, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page right active" },
    [
      _c("div", { staticClass: "row no-wrap m l" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.check,
                    expression: "check",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.check)
                    ? _vm._i(_vm.check, null) > -1
                    : _vm.check,
                },
                on: {
                  change: function ($event) {
                    var $$a = _vm.check,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.check = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.check = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.check = $$c
                    }
                  },
                },
              }),
              _c("span"),
            ]),
            _vm._m(0),
            _vm._m(1),
          ]),
        ]),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _c("label", [_vm._v("from 1 to " + _vm._s(_vm.emails.length))]),
            _vm._m(2),
            _vm._m(3),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "space m l" }),
      _vm._l(_vm.emails, function (email) {
        return _c("a", { staticClass: "row no-wrap middle-align divider" }, [
          _c("div", { staticClass: "col min" }, [
            _c("nav", [
              _c("label", { staticClass: "checkbox m l" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: email.check,
                      expression: "email.check",
                    },
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(email.check)
                      ? _vm._i(email.check, null) > -1
                      : email.check,
                  },
                  on: {
                    change: function ($event) {
                      var $$a = email.check,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && _vm.$set(email, "check", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              email,
                              "check",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(email, "check", $$c)
                      }
                    },
                  },
                }),
                _c("span"),
              ]),
              _c(
                "a",
                {
                  staticClass: "m l",
                  on: {
                    click: function ($event) {
                      return _vm.star(email)
                    },
                  },
                },
                [
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !email.star,
                          expression: "!email.star",
                        },
                      ],
                    },
                    [_vm._v("star_outline")]
                  ),
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: email.star,
                          expression: "email.star",
                        },
                      ],
                      staticClass: "yellow-text",
                    },
                    [_vm._v("star")]
                  ),
                ]
              ),
              _c("button", { staticClass: "small flat circle s" }, [
                _vm._v("A"),
              ]),
            ]),
          ]),
          _vm._m(4, true),
          _vm._m(5, true),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("refresh")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("more_vert")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_back")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_forward")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col truncate" }, [
      _c("b", [_vm._v("From - ")]),
      _c("b", [_vm._v("Subject - ")]),
      _c("span", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("label", [_vm._v("12:03")]),
    ])
  },
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
      
},{"./domain":"gmail/domain.js"}],"gmail/sent.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _domain = _interopRequireDefault(require("./domain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_domain.default],
  created: function created() {
    this.emails = this.sent;
  }
};
exports.default = _default;
        var $6ec5af = exports.default || module.exports;
      
      if (typeof $6ec5af === 'function') {
        $6ec5af = $6ec5af.options;
      }
    
        /* template */
        Object.assign($6ec5af, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page right active" },
    [
      _c("div", { staticClass: "row no-wrap m l" }, [
        _c("div", { staticClass: "col" }, [
          _c("nav", [
            _c("label", { staticClass: "checkbox" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.check,
                    expression: "check",
                  },
                ],
                attrs: { type: "checkbox" },
                domProps: {
                  checked: Array.isArray(_vm.check)
                    ? _vm._i(_vm.check, null) > -1
                    : _vm.check,
                },
                on: {
                  change: function ($event) {
                    var $$a = _vm.check,
                      $$el = $event.target,
                      $$c = $$el.checked ? true : false
                    if (Array.isArray($$a)) {
                      var $$v = null,
                        $$i = _vm._i($$a, $$v)
                      if ($$el.checked) {
                        $$i < 0 && (_vm.check = $$a.concat([$$v]))
                      } else {
                        $$i > -1 &&
                          (_vm.check = $$a
                            .slice(0, $$i)
                            .concat($$a.slice($$i + 1)))
                      }
                    } else {
                      _vm.check = $$c
                    }
                  },
                },
              }),
              _c("span"),
            ]),
            _vm._m(0),
            _vm._m(1),
          ]),
        ]),
        _c("div", { staticClass: "col" }, [
          _c("nav", { staticClass: "right-align" }, [
            _c("label", [_vm._v("from 1 to " + _vm._s(_vm.emails.length))]),
            _vm._m(2),
            _vm._m(3),
          ]),
        ]),
      ]),
      _c("div", { staticClass: "space m l" }),
      _vm._l(_vm.emails, function (email) {
        return _c("a", { staticClass: "row no-wrap middle-align divider" }, [
          _c("div", { staticClass: "col min" }, [
            _c("nav", [
              _c("label", { staticClass: "checkbox m l" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: email.check,
                      expression: "email.check",
                    },
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(email.check)
                      ? _vm._i(email.check, null) > -1
                      : email.check,
                  },
                  on: {
                    change: function ($event) {
                      var $$a = email.check,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && _vm.$set(email, "check", $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            _vm.$set(
                              email,
                              "check",
                              $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                            )
                        }
                      } else {
                        _vm.$set(email, "check", $$c)
                      }
                    },
                  },
                }),
                _c("span"),
              ]),
              _c(
                "a",
                {
                  staticClass: "m l",
                  on: {
                    click: function ($event) {
                      return _vm.star(email)
                    },
                  },
                },
                [
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !email.star,
                          expression: "!email.star",
                        },
                      ],
                    },
                    [_vm._v("star_outline")]
                  ),
                  _c(
                    "i",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: email.star,
                          expression: "email.star",
                        },
                      ],
                      staticClass: "yellow-text",
                    },
                    [_vm._v("star")]
                  ),
                ]
              ),
              _c("button", { staticClass: "small flat circle s" }, [
                _vm._v("A"),
              ]),
            ]),
          ]),
          _vm._m(4, true),
          _vm._m(5, true),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("refresh")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("more_vert")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_back")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", [_c("i", [_vm._v("arrow_forward")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col truncate" }, [
      _c("b", [_vm._v("From - ")]),
      _c("b", [_vm._v("Subject - ")]),
      _c("span", [
        _vm._v(
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("label", [_vm._v("12:03")]),
    ])
  },
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
      
},{"./domain":"gmail/domain.js"}],"gmail/spam.vue":[function(require,module,exports) {
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
var _default = {
  data: function data() {
    return;
  },
  mounted: function mounted() {
    ui();
  }
};
exports.default = _default;
        var $cea764 = exports.default || module.exports;
      
      if (typeof $cea764 === 'function') {
        $cea764 = $cea764.options;
      }
    
        /* template */
        Object.assign($cea764, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page right active" }, [
      _c("h5", { staticClass: "center-align" }, [_vm._v("No messages")]),
    ])
  },
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
      
},{}],"gmail/important.vue":[function(require,module,exports) {
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
var _default = {
  data: function data() {
    return;
  },
  mounted: function mounted() {
    ui();
  }
};
exports.default = _default;
        var $1be032 = exports.default || module.exports;
      
      if (typeof $1be032 === 'function') {
        $1be032 = $1be032.options;
      }
    
        /* template */
        Object.assign($1be032, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page right active" }, [
      _c("h5", { staticClass: "center-align" }, [_vm._v("No messages")]),
    ])
  },
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
      
},{}],"gmail/snoozed.vue":[function(require,module,exports) {
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
var _default = {
  data: function data() {
    return;
  },
  mounted: function mounted() {
    ui();
  }
};
exports.default = _default;
        var $8053c3 = exports.default || module.exports;
      
      if (typeof $8053c3 === 'function') {
        $8053c3 = $8053c3.options;
      }
    
        /* template */
        Object.assign($8053c3, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page right active" }, [
      _c("h5", { staticClass: "center-align" }, [_vm._v("No messages")]),
    ])
  },
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
      
},{}],"gmail/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _layout = _interopRequireDefault(require("~/gmail/layout.vue"));

var _home = _interopRequireDefault(require("~/gmail/home.vue"));

var _drafts = _interopRequireDefault(require("~/gmail/drafts.vue"));

var _sent = _interopRequireDefault(require("~/gmail/sent.vue"));

var _spam = _interopRequireDefault(require("~/gmail/spam.vue"));

var _important = _interopRequireDefault(require("~/gmail/important.vue"));

var _snoozed = _interopRequireDefault(require("~/gmail/snoozed.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/gmail", _home.default, _layout.default);
(0, _router.default)("/gmail/drafts", _drafts.default, _layout.default);
(0, _router.default)("/gmail/sent", _sent.default, _layout.default);
(0, _router.default)("/gmail/spam", _spam.default, _layout.default);
(0, _router.default)("/gmail/important", _important.default, _layout.default);
(0, _router.default)("/gmail/snoozed", _snoozed.default, _layout.default);
},{"~/shared/router.js":"shared/router.js","~/gmail/layout.vue":"gmail/layout.vue","~/gmail/home.vue":"gmail/home.vue","~/gmail/drafts.vue":"gmail/drafts.vue","~/gmail/sent.vue":"gmail/sent.vue","~/gmail/spam.vue":"gmail/spam.vue","~/gmail/important.vue":"gmail/important.vue","~/gmail/snoozed.vue":"gmail/snoozed.vue"}],"uber/layout.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _themes = _interopRequireDefault(require("../shared/themes.vue"));

var _data2 = _interopRequireDefault(require("../shared/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    themes: _themes.default
  },
  data: function data() {
    return (0, _data2.default)();
  },
  mounted: function mounted() {
    this.isDark = /dark/.test(document.body.getAttribute("style"));
    ui();
  }
};
exports.default = _default;
        var $77849f = exports.default || module.exports;
      
      if (typeof $77849f === 'function') {
        $77849f = $77849f.options;
      }
    
        /* template */
        Object.assign($77849f, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "themes",
        {
          model: {
            value: _vm.$data,
            callback: function ($$v) {
              _vm.$data = $$v
            },
            expression: "$data",
          },
        },
        [
          _c("div", { staticClass: "large-space" }),
          _c("div", { staticClass: "medium-space" }),
        ]
      ),
      _c("div", { attrs: { id: "layout" } }),
      _c("div", { staticClass: "menu top black" }, [
        _c("div", { staticClass: "row no-wrap middle-align" }, [
          _c("div", { staticClass: "col" }, [
            _c("nav", { staticClass: "padding" }, [
              _c("a", [
                _c("img", { attrs: { height: "21", src: "/uber-dark.png" } }),
              ]),
              _vm._m(0),
              _vm._m(1),
              _vm._m(2),
            ]),
          ]),
          _c("div", { staticClass: "col" }, [
            _c("nav", { staticClass: "right-align" }, [
              _vm._m(3),
              _c("a", { attrs: { href: "/" } }, [
                _c("img", {
                  staticClass: "circle",
                  attrs: { src: "/favicon.png" },
                }),
              ]),
            ]),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "small-padding wave light none white-text capitalize m l large-text",
        attrs: { "data-ui": "#dropdown-ride" },
      },
      [
        _c("span", [_vm._v("Ride")]),
        _c(
          "div",
          {
            staticClass: "dropdown no-wrap",
            attrs: { id: "dropdown-ride", "data-ui": "#dropdown-ride" },
          },
          [
            _c("a", [_vm._v("Overview")]),
            _c("a", [_vm._v("Price calculator")]),
            _c("a", [_vm._v("Cities")]),
            _c("a", [_vm._v("Companies")]),
            _c("div", { staticClass: "divider" }),
            _c("a", [_vm._v("How it works")]),
            _c("a", [_vm._v("Safety")]),
            _c("a", [_vm._v("Airports")]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "small-padding wave light none white-text capitalize m l large-text",
        attrs: { "data-ui": "#dropdown-drive" },
      },
      [
        _c("span", [_vm._v("Drive")]),
        _c(
          "div",
          {
            staticClass: "dropdown no-wrap",
            attrs: { id: "dropdown-drive", "data-ui": "#dropdown-drive" },
          },
          [
            _c("a", [_vm._v("Overview")]),
            _c("a", [_vm._v("Partner app")]),
            _c("a", [_vm._v("Safe")]),
            _c("a", [_vm._v("How to drive in your city")]),
            _c("a", [_vm._v("Make deliveries")]),
            _c("div", { staticClass: "divider" }),
            _c("a", [_vm._v("Requirements")]),
            _c("a", [_vm._v("Vehicle solutions")]),
            _c("a", [_vm._v("Safety")]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass:
          "small-padding wave light none white-text capitalize m l large-text",
        attrs: { "data-ui": "#dropdown-more" },
      },
      [
        _c("span", [_vm._v("More")]),
        _c(
          "div",
          {
            staticClass: "dropdown no-wrap",
            attrs: { id: "dropdown-more", "data-ui": "#dropdown-more" },
          },
          [
            _c("a", [_vm._v("Uber Eats")]),
            _c("a", [_vm._v("Make deliveries")]),
            _c("a", [_vm._v("Uber Health")]),
            _c("div", { staticClass: "divider" }),
            _c("a", [_vm._v("Uber for companies")]),
            _c("a", [_vm._v("Uber Freight")]),
          ]
        ),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "small-padding wave light none white-text",
        attrs: { "data-ui": "#themes" },
      },
      [_c("i", { staticClass: "white-text" }, [_vm._v("brightness_medium")])]
    )
  },
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
      
},{"../shared/themes.vue":"shared/themes.vue","../shared/data":"shared/data.js"}],"uber/home.vue":[function(require,module,exports) {
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
var _default = {
  mounted: function mounted() {},
  data: function data() {
    return {
      from: null,
      to: null,
      street: "Street address, 111"
    };
  },
  methods: {
    go: function go() {
      if (!this.from) {
        this.from = this.street;
        this.to = null;
        return;
      }

      this.from = this.street;
      this.to = this.street;
    },
    clean: function clean() {
      this.to = null;
      this.from = null;
    }
  }
};
exports.default = _default;
        var $1a2ac5 = exports.default || module.exports;
      
      if (typeof $1a2ac5 === 'function') {
        $1a2ac5 = $1a2ac5.options;
      }
    
        /* template */
        Object.assign($1a2ac5, (function () {
          var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "fixed top left right bottom" }, [
      _c("img", { staticClass: "responsive", attrs: { src: "/map.jpg" } }),
    ]),
    _vm._m(0),
    _c("div", { staticClass: "large-space" }),
    _c(
      "div",
      {
        staticClass:
          "card no-padding large-margin medium-width m l page left active medium-shadow",
      },
      [
        _c("div", { staticClass: "large-padding black white-text" }, [
          _c("p", { staticClass: "bold" }, [
            _vm._v("From " + _vm._s(_vm.from)),
          ]),
          _c("p", { staticClass: "bold" }, [_vm._v("To " + _vm._s(_vm.to))]),
          _c(
            "h5",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.from && !_vm.to,
                  expression: "!from && !to",
                },
              ],
              staticClass: "page left active",
            },
            [_vm._v("Where are you?")]
          ),
          _c(
            "h5",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.from && !_vm.to,
                  expression: "from && !to",
                },
              ],
              staticClass: "page left active",
            },
            [_vm._v("Where are you going?")]
          ),
          _c(
            "h5",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.from && _vm.to,
                  expression: "from && to",
                },
              ],
              staticClass: "page left active",
            },
            [_vm._v("Confirm that ride?")]
          ),
          _c("nav", { staticClass: "right-align" }, [
            _c(
              "button",
              {
                staticClass: "none white-text large wave light",
                on: {
                  click: function ($event) {
                    return _vm.clean()
                  },
                },
              },
              [_c("span", [_vm._v("Cancel")])]
            ),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.to,
                    expression: "to",
                  },
                ],
                staticClass: "border white-border white-text large wave light",
                on: {
                  click: function ($event) {
                    return _vm.clean()
                  },
                },
              },
              [
                _c("i", [_vm._v("time_to_leave")]),
                _c("span", [_vm._v("Confirm")]),
              ]
            ),
          ]),
        ]),
        _c("div", { staticClass: "large-padding" }, [
          _c(
            "div",
            { staticClass: "field prefix round flat white black-text" },
            [
              _c("i", [_vm._v("search")]),
              _c("input", {
                attrs: { placeholder: _vm.from ? "Destination" : "Departure" },
                on: {
                  click: function ($event) {
                    return _vm.go()
                  },
                },
              }),
            ]
          ),
          _c("div", { staticClass: "medium-space" }),
          _c(
            "a",
            {
              staticClass: "row no-wrap",
              on: {
                click: function ($event) {
                  return _vm.go()
                },
              },
            },
            [
              _vm._m(1),
              _c("div", { staticClass: "col" }, [
                _c("h6", { staticClass: "no-margin" }, [
                  _vm._v(_vm._s(_vm.street)),
                ]),
                _c("div", { staticClass: "link" }, [
                  _vm._v("Your current location"),
                ]),
              ]),
            ]
          ),
          _c("div", { staticClass: "divider" }),
          _c(
            "a",
            {
              staticClass: "row no-wrap",
              on: {
                click: function ($event) {
                  return _vm.go()
                },
              },
            },
            [
              _vm._m(2),
              _c("div", { staticClass: "col" }, [
                _c("h6", { staticClass: "no-margin" }, [_vm._v("Home")]),
                _c("div", [_vm._v(_vm._s(_vm.street))]),
              ]),
            ]
          ),
        ]),
      ]
    ),
    _c("div", { staticClass: "modal bottom active s no-padding" }, [
      _c("div", { staticClass: "padding black white-text" }, [
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.from,
                expression: "from",
              },
            ],
            staticClass: "bold",
          },
          [_vm._v("From " + _vm._s(_vm.from))]
        ),
        _c(
          "p",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.to,
                expression: "to",
              },
            ],
            staticClass: "bold",
          },
          [_vm._v("To " + _vm._s(_vm.to))]
        ),
        _c(
          "h5",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.from && !_vm.to,
                expression: "!from && !to",
              },
            ],
            staticClass: "page left active",
          },
          [_vm._v("Where are you?")]
        ),
        _c(
          "h5",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.from && !_vm.to,
                expression: "from && !to",
              },
            ],
            staticClass: "page left active",
          },
          [_vm._v("Where are you going?")]
        ),
        _c(
          "h5",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.from && _vm.to,
                expression: "from && to",
              },
            ],
            staticClass: "page left active",
          },
          [_vm._v("Confirm that ride?")]
        ),
        _c(
          "nav",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.from || _vm.to,
                expression: "from || to",
              },
            ],
            staticClass: "right-align",
          },
          [
            _c(
              "button",
              {
                staticClass: "none white-text large",
                on: {
                  click: function ($event) {
                    return _vm.clean()
                  },
                },
              },
              [_c("span", [_vm._v("Cancel")])]
            ),
            _c(
              "button",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.to,
                    expression: "to",
                  },
                ],
                staticClass: "border large white-text white-border",
                on: {
                  click: function ($event) {
                    return _vm.clean()
                  },
                },
              },
              [
                _c("i", [_vm._v("time_to_leave")]),
                _c("span", [_vm._v("Confirm")]),
              ]
            ),
          ]
        ),
      ]),
      _c("div", { staticClass: "padding" }, [
        _c("div", { staticClass: "space" }),
        _c("div", { staticClass: "field prefix round flat white black-text" }, [
          _c("i", [_vm._v("search")]),
          _c("input", {
            attrs: { placeholder: _vm.from ? "Destination" : "Departure" },
            on: {
              click: function ($event) {
                return _vm.go()
              },
            },
          }),
        ]),
        _c("div", { staticClass: "space" }),
        _c(
          "a",
          {
            staticClass: "row no-wrap",
            on: {
              click: function ($event) {
                return _vm.go()
              },
            },
          },
          [
            _vm._m(3),
            _c("div", { staticClass: "col" }, [
              _c("h6", { staticClass: "no-margin" }, [
                _vm._v(_vm._s(_vm.street)),
              ]),
              _c("div", { staticClass: "link" }, [
                _vm._v("Your current location"),
              ]),
            ]),
          ]
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fixed bottom right margin m l" }, [
      _c("button", { staticClass: "circle white black-text wave dark" }, [
        _c("i", [_vm._v("add")]),
      ]),
      _c("div", { staticClass: "space" }),
      _c("button", { staticClass: "circle white black-text wave dark" }, [
        _c("i", [_vm._v("remove")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("button", { staticClass: "circle small flat no-wave" }, [
        _c("i", [_vm._v("gps_fixed")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("button", { staticClass: "circle small flat no-wave" }, [
        _c("i", [_vm._v("home")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col min" }, [
      _c("button", { staticClass: "circle small flat no-wave" }, [
        _c("i", [_vm._v("gps_fixed")]),
      ]),
    ])
  },
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
      
},{}],"uber/index.js":[function(require,module,exports) {
"use strict";

var _router = _interopRequireDefault(require("~/shared/router.js"));

var _layout = _interopRequireDefault(require("~/uber/layout.vue"));

var _home = _interopRequireDefault(require("~/uber/home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _router.default)("/uber", _home.default, _layout.default);
},{"~/shared/router.js":"shared/router.js","~/uber/layout.vue":"uber/layout.vue","~/uber/home.vue":"uber/home.vue"}],"app.js":[function(require,module,exports) {
"use strict";

require("material-dynamic-colors");

var _init = _interopRequireDefault(require("~/shared/init.js"));

var _home = _interopRequireDefault(require("~/home"));

var _test = _interopRequireDefault(require("~/test"));

var _youtube = _interopRequireDefault(require("~/youtube"));

var _netflix = _interopRequireDefault(require("~/netflix"));

var _gmail = _interopRequireDefault(require("~/gmail"));

var _uber = _interopRequireDefault(require("~/uber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"material-dynamic-colors":"../node_modules/material-dynamic-colors/index.js","~/shared/init.js":"shared/init.js","~/home":"home/index.js","~/test":"test/index.js","~/youtube":"youtube/index.js","~/netflix":"netflix/index.js","~/gmail":"gmail/index.js","~/uber":"uber/index.js"}]},{},["app.js"], null)