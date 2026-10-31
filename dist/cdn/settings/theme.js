//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
navigator.userAgent.includes("Chrome");
navigator.userAgent.includes("Firefox");
navigator.userAgent.includes("Safari");
navigator.userAgent.includes("Windows");
navigator.userAgent.includes("Macintosh");
navigator.userAgent.includes("Linux");
navigator.userAgent.includes("Android");
/iPad|iPhone|iPod/.test(navigator.userAgent);
function isDark() {
	return window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}
//#endregion
//#region src/cdn/settings/theme.ts
var _lastTheme = {
	light: "",
	dark: ""
};
function getContainer(root) {
	return root instanceof Document ? root.body : root.host;
}
function getMode(root) {
	return getContainer(root).classList.contains("dark") ? "dark" : "light";
}
function lastTheme(root) {
	if (_lastTheme.light && _lastTheme.dark) return _lastTheme;
	const container = getContainer(root);
	const light = document.createElement("div");
	light.className = "light";
	light.style.display = "none";
	container.appendChild(light);
	const dark = document.createElement("div");
	dark.className = "dark";
	dark.style.display = "none";
	container.appendChild(dark);
	try {
		const fromLight = getComputedStyle(light);
		const fromDark = getComputedStyle(dark);
		const variables = [
			"--primary",
			"--on-primary",
			"--primary-container",
			"--on-primary-container",
			"--secondary",
			"--on-secondary",
			"--secondary-container",
			"--on-secondary-container",
			"--tertiary",
			"--on-tertiary",
			"--tertiary-container",
			"--on-tertiary-container",
			"--error",
			"--on-error",
			"--error-container",
			"--on-error-container",
			"--background",
			"--on-background",
			"--surface",
			"--on-surface",
			"--surface-variant",
			"--on-surface-variant",
			"--outline",
			"--outline-variant",
			"--shadow",
			"--scrim",
			"--inverse-surface",
			"--inverse-on-surface",
			"--inverse-primary",
			"--surface-dim",
			"--surface-bright",
			"--surface-container-lowest",
			"--surface-container-low",
			"--surface-container",
			"--surface-container-high",
			"--surface-container-highest"
		];
		for (let i = 0, n = variables.length; i < n; i++) {
			_lastTheme.light += variables[i] + ":" + fromLight.getPropertyValue(variables[i]) + ";";
			_lastTheme.dark += variables[i] + ":" + fromDark.getPropertyValue(variables[i]) + ";";
		}
	} finally {
		container.removeChild(light);
		container.removeChild(dark);
	}
	return _lastTheme;
}
async function updateTheme(source, root = document) {
	const context = globalThis;
	const container = getContainer(root);
	if (!source || !context.materialDynamicColors) return lastTheme(root);
	if (source.light && source.dark) {
		_lastTheme.light = source.light;
		_lastTheme.dark = source.dark;
		container.setAttribute("style", source[getMode(root)]);
		return source;
	}
	return context.materialDynamicColors(source).then((theme) => {
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
		_lastTheme.light = toCss(theme.light);
		_lastTheme.dark = toCss(theme.dark);
		container.setAttribute("style", _lastTheme[getMode(root)]);
		return _lastTheme;
	});
}
function updateMode(value, root = document) {
	const context = globalThis;
	const container = getContainer(root);
	if (!container) return value;
	if (!value) return getMode(root);
	if (value === "auto") value = isDark() ? "dark" : "light";
	container.classList.remove("light", "dark");
	container.classList.add(value);
	const lastThemeStyle = value === "light" ? _lastTheme.light : _lastTheme.dark;
	if (context.materialDynamicColors) container.setAttribute("style", lastThemeStyle);
	return getMode(root);
}
globals_default().theme = {
	updateTheme,
	updateMode
};
//#endregion
export { updateMode, updateTheme };
