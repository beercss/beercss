import { type IBeerCssTheme } from "../interfaces";
import { isDark } from "../utils";

const _lastTheme: IBeerCssTheme = {
  light: "",
  dark: "",
};

function getMode() {
  return document?.body?.classList.contains("dark") ? "dark" : "light";
}

function lastTheme(): IBeerCssTheme {
  if (_lastTheme.light && _lastTheme.dark) return _lastTheme;
  const body = document.body;

  const light = document.createElement("body");
  light.className = "light";
  body.appendChild(light);

  const dark = document.createElement("body");
  dark.className = "dark";
  body.appendChild(dark);

  const fromLight = getComputedStyle(light);
  const fromDark = getComputedStyle(dark);
  const variables = ["--primary", "--on-primary", "--primary-container", "--on-primary-container", "--secondary", "--on-secondary", "--secondary-container", "--on-secondary-container", "--tertiary", "--on-tertiary", "--tertiary-container", "--on-tertiary-container", "--error", "--on-error", "--error-container", "--on-error-container", "--background", "--on-background", "--surface", "--on-surface", "--surface-variant", "--on-surface-variant", "--outline", "--outline-variant", "--shadow", "--scrim", "--inverse-surface", "--inverse-on-surface", "--inverse-primary", "--surface-dim", "--surface-bright", "--surface-container-lowest", "--surface-container-low", "--surface-container", "--surface-container-high", "--surface-container-highest"];
  for (let i = 0, n = variables.length; i < n; i++) {
    _lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
    _lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
  }

  body.removeChild(light);
  body.removeChild(dark);
  return _lastTheme;
}

export function updateTheme(source?: IBeerCssTheme | any): IBeerCssTheme | Promise<IBeerCssTheme> {
  const context = globalThis as any;
  const body = document.body;
  if (!source || !context.materialDynamicColors) return lastTheme();

  const mode = getMode();
  if (source.light && source.dark) {
    _lastTheme.light = source.light;
    _lastTheme.dark = source.dark;
    body.setAttribute("style", source[mode]);
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
    body.setAttribute("style", _lastTheme[mode]);
    return _lastTheme;
  });
}

export function updateMode(value: string): string {
  const context = (globalThis as any);
  const body = document.body;

  if (!body) return value;
  if (!value) return getMode();
  if (value === "auto") value = isDark() ? "dark" : "light";
  
  body.classList.remove("light", "dark");
  body.classList.add(value);
  
  const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
  if (context.materialDynamicColors) body.setAttribute("style", lastThemeStyle);
  return getMode();
}