(() => {
  const guid = () => {
    return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const query = (selector, element) => {
    try {
      return selector instanceof HTMLElement
        ? selector
        : (element || document).querySelector(selector);
    } catch {}
  };

  const queryAll = (selector, element) => {
    try {
      return Array.isArray(selector)
        ? selector
        : (element || document).querySelectorAll(selector);
    } catch {}
  };

  const hasClass = (element, name) => {
    if (!element) return false;
    return element.classList.contains(name);
  };

  const addClass = (element, name) => {
    if (!element) return;
    element.classList.add(name);
  };

  const removeClass = (element, name) => {
    if (!element) return;
    element.classList.remove(name);
  };

  const on = (element, name, callback) => {
    element.addEventListener(name, callback, true);
  };

  const off = (element, name, callback) => {
    element.removeEventListener(name, callback, true);
  };

  const insertBefore = (newElement, element) => {
    if (!element) return;
    return element.parentNode.insertBefore(newElement, element);
  };

  const prev = (element) => {
    if (!element) return;
    return element.previousElementSibling;
  };

  const next = (element) => {
    if (!element) return;
    return element.nextElementSibling;
  };

  const parent = (element) => {
    if (!element) return;
    return element.parentNode;
  };

  const create = (json) => {
    let element = document.createElement("div");

    for (let i in json)
      element[i] = json[i];

    return element;
  };

  const updateInput = (target) => {
    let parentTarget = parent(target);
    let label = query("label", parentTarget);
    let isBorder = hasClass(parentTarget, "border") && !hasClass(parentTarget, "fill");
    let toActive = document.activeElement == target || target.value || /date|time/.test(target.type);

    if (toActive) {
      if (isBorder && label) {
        let width = hasClass(label, "active") ? label.offsetWidth : Math.round(label.offsetWidth / 1.33);
        let start = hasClass(parentTarget, "round") ? 20 : 12;
        let end = width + start + 8;
        target.style.clipPath = `polygon(0% 0%, ${start}rem 0%, ${start}rem 8rem, ${end}rem 8rem, ${end}rem 0%, 100% 0%, 100% 100%, 0% 100%)`;
      } else
        target.style.clipPath = "";
      addClass(label, "active");
    } else {
      removeClass(label, "active");
      target.style.clipPath = "";
    }

    if (target.getAttribute("data-ui"))
      open(target);
  }

  const onClickElement = (e) => {
    if (/input/i.test(e.tagName)) return;
    return open(e.currentTarget);
  };

  const onClickLabel = (e) => {
    let input = query('input:not([type=file]):not([type=checkbox]):not([type=radio]), select, textarea', parent(e.currentTarget));
    input.focus();
  };

  const onFocusInput = (e) => {
    updateInput(e.currentTarget);
  };

  const onBlurInput = (e) => {
    updateInput(e.currentTarget);
  };

  const onClickDocument = (e) => {
    let dropdowns = queryAll(".dropdown.active");
    dropdowns.forEach((x) => {
      removeClass(x, "active");
    });

    off(e.currentTarget, "click", onClickDocument);
  };

  const onClickToast = (e) => {
    removeClass(e.currentTarget, "active");

    if (timeoutToast)
      clearTimeout(timeoutToast);
  };

  const onChangeFile = (e) => {
    updateFile(e.currentTarget);
  }

  const onKeydownFile = (e) => {
    updateFile(e.currentTarget, e);
  }

  const updateFile = (target, e) => {
    if (e) {
      if (e.key !== "Enter") return;

      let nextTarget = next(e.currentTarget);
      if (!nextTarget || !/file/i.test(nextTarget.type)) return;
      return nextTarget.click();
    }

    let previousTarget = prev(target);
    if (!previousTarget || !/text/i.test(previousTarget.type)) return;
    previousTarget.value = Array.from(target.files).map((x) => x.name).join(", ");
    previousTarget.setAttribute("readonly", true);
    previousTarget.addEventListener("keydown", onKeydownFile);
    updateInput(previousTarget);
  }

  let timeoutToast = null;

  const open = (from, to, config) => {
    if (!to)
      to = query(from.getAttribute("data-ui"));

    if (hasClass(to, "modal")) return modal(from, to, config);
    if (hasClass(to, "dropdown")) return dropdown(from, to, config);
    if (hasClass(to, "toast")) return toast(from, to, config);
    if (hasClass(to, "page")) return page(from, to, config);
    if (hasClass(to, "progress")) return progress(from, to, config);

    tab(from, to, config);

    if (hasClass(to, "active")) return removeClass(to, "active");

    addClass(to, "active");
  };

  const tab = (from) => {
    let container = parent(from);
    if (!hasClass(container, "tabs"))
      return;

    let tabs = queryAll("a", container);
    tabs.forEach((x) => {
      removeClass(x, "active");
    });

    addClass(from, "active");
  };

  const page = (from, to, config) => {
    tab(from, to, config);

    let container = parent(to);
    for (let i = 0; i < container.children.length; i++) {
      if (hasClass(container.children[i], "page"))
        removeClass(container.children[i], "active");
    }

    addClass(to, "active");
  };

  const dropdown = (from, to, config) => {
    tab(from, to, config);

    if (hasClass(to, "active")) return removeClass(to, "active");

    let dropdowns = queryAll(".dropdown.active");
    dropdowns.forEach((x) => {
      removeClass(x, "active");
    });

    addClass(to, "active");
    on(document, "click", onClickDocument);
  };

  const modal = (from, to, config) => {
    tab(from, to, config);

    let overlay = prev(to);
    if (!hasClass(overlay, "overlay")) {
      overlay = create({ className: "overlay active" });
      insertBefore(overlay, to);
    }

    overlay.onclick = () => {
      removeClass(from, "active");
      removeClass(to, "active");
      removeClass(overlay, "active");
    }

    let isActive = hasClass(to, "active");
    let container = parent(to);
    if (hasClass(container, "menu")) {
      let elements = queryAll(".menu > .modal, .menu > a, .menu > .overlay");
      elements.forEach((x) => {
        removeClass(x, "active");
      });
    }

    if (isActive) {
      removeClass(from, "active");
      removeClass(overlay, "active");
      removeClass(to, "active");
    } else {
      addClass(from, "active");
      addClass(overlay, "active");
      addClass(to, "active");
    }
  };

  const toast = (from, to, config) => {
    tab(from, to, config);

    let elements = queryAll(".toast.active");
    elements.forEach((x) => {
      removeClass(x, "active");
    });
    addClass(to, "active");
    on(to, "click", onClickToast);

    if (timeoutToast)
      clearTimeout(timeoutToast);

    if (config && config == -1)
      return;

    timeoutToast = setTimeout(() => {
      removeClass(to, "active");
    }, config && config ? config : 6000);
  };

  const progress = (from, to, config) => {
    if (hasClass(to, "left"))
      return  to.style.clipPath = `polygon(0% 0%, 0% 100%, ${config}% 100%, ${config}% 0%)`;

    if (hasClass(to, "top"))
      return to.style.clipPath = `polygon(0% 0%, 100% 0%, 100% ${config}%, 0% ${config}%)`;

    if (hasClass(to, "right"))
      return  to.style.clipPath = `polygon(100% 0%, 100% 100%, ${100 - config}% 100%, ${100 - config}% 0%)`;

    if (hasClass(to, "bottom"))
      return to.style.clipPath = `polygon(0% 100%, 100% 100%, 100% ${100 - config}%, 0% ${100 - config}%)`;
  };

  const theme = (config) => {
    let emptyTheme = {
      light: "",
      dark: "",
      selected: "light"
    }

    if (!window.materialDynamicColors) return emptyTheme;

    if (!config) {
      document.body.removeAttribute("style");
      return emptyTheme;
    };

    if (config.from && config.mode && config.from[config.mode]) {
      let newTheme = {
        light: config.from.light,
        dark: config.from.dark,
        selected: config.mode
      };
      
      document.body.setAttribute("style", newTheme[config.mode]);
      return newTheme;
    }

    return window.materialDynamicColors(config.from).then((theme) => {
      const toCss = (data) => {
        let style = "";
        for (var i in data) {
          let kebabCase = i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
          style += "--"+kebabCase+": "+data[i]+";";
        }
        return style;
      };

      let newTheme = {
        light: toCss(theme.light) + "--active: rgba(0,0,0,.1);--mode: light;",
        dark: toCss(theme.dark) + "--active: rgba(255,255,255,.2);--mode: dark;",
        selected: config.mode
      };

      document.body.setAttribute("style", newTheme[config.mode]);
      return newTheme;
    });
  };

  const ui = (selector, config) => {
    if (selector) {
      if (selector == "guid") return guid();
      if (selector == "theme") return theme(config);

      let to = query(selector);
      let from = query("[data-ui='#" + to.id + "']");
      return open(from, to, config);
    }

    let elements = queryAll("[data-ui]");
    elements.forEach((x) => {
      on(x, "click", onClickElement);
    });

    let labels = queryAll(".field > label");
    labels.forEach((x) => {
      on(x, "click", onClickLabel);
    });

    let inputs = queryAll(".field > input:not([type=file]):not([type=checkbox]):not([type=radio]), .field > select, .field > textarea");
    inputs.forEach((x) => {
      on(x, "focus", onFocusInput);
      on(x, "blur", onBlurInput);
      updateInput(x);
    });

    let files = queryAll(".field > input[type=file]");
    files.forEach((x) => {
      on(x, "change", onChangeFile);
      updateFile(x);
    });
  };

  window.ui = ui;
})();