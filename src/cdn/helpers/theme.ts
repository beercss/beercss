import { type IBeerCssTheme } from "../interfaces";
import { isDark } from "../utils";

const _lastTheme: IBeerCssTheme = {
  light: "",
  dark: "",
};

function getContainer(root: Document | ShadowRoot): Element {
  return root instanceof Document ? root.body : root.host;
}

function getMode(root: Document | ShadowRoot): "light" | "dark" {
  return getContainer(root).classList.contains("dark") ? "dark" : "light";
}

function lastTheme(root: Document | ShadowRoot): IBeerCssTheme {
  if (_lastTheme.light && _lastTheme.dark) return _lastTheme;
  const container = getContainer(root);

  const light = document.createElement("div");
  light.className = "light";
  container.appendChild(light);

  const dark = document.createElement("div");
  dark.className = "dark";
  container.appendChild(dark);

  const fromLight = getComputedStyle(light);
  const fromDark = getComputedStyle(dark);
  const variables = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let i = 0, n = variables.length; i < n; i++) {
    _lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
    _lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
  }

  container.removeChild(light);
  container.removeChild(dark);
  return _lastTheme;
}

export function updateTheme(source?: IBeerCssTheme | any, root: Document | ShadowRoot = document): IBeerCssTheme | Promise<IBeerCssTheme> {
  const context = globalThis as any;
  const container = getContainer(root);
  if (!source || !context.materialDynamicColors) return lastTheme(root);

  const mode = getMode(root);
  if (source.light && source.dark) {
    _lastTheme.light = source.light;
    _lastTheme.dark = source.dark;
    (container as HTMLElement).setAttribute("style", source[mode]);
    return source;
  }

  return context.materialDynamicColors(source).then((theme: IBeerCssTheme) => {
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
    (container as HTMLElement).setAttribute("style", _lastTheme[mode]);
    return _lastTheme;
  });
}

export function updateMode(value: string, root: Document | ShadowRoot = document): string {
  const context = (globalThis as any);
  const container = getContainer(root);

  if (!container) return value;
  if (!value) return getMode(root);
  if (value === "auto") value = isDark() ? "dark" : "light";
  
  container.classList.remove("light", "dark");
  container.classList.add(value);
  
  const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
  if (context.materialDynamicColors) (container as HTMLElement).setAttribute("style", lastThemeStyle);
  return getMode(root);
}