//#region src/cdn/utils.ts
var _emptyNodeList = [];
var _weakMap = /* @__PURE__ */ new WeakMap();
var isChrome = navigator.userAgent.includes("Chrome");
navigator.userAgent.includes("Firefox");
navigator.userAgent.includes("Safari");
navigator.userAgent.includes("Windows");
var isMac = navigator.userAgent.includes("Macintosh");
navigator.userAgent.includes("Linux");
navigator.userAgent.includes("Android");
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
function isDark() {
	return window?.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? false;
}
async function wait(milliseconds) {
	await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function guid() {
	return "fxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = Math.random() * 16 | 0;
		return (c === "x" ? r : r & 3 | 8).toString(16);
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
	return element?.classList.contains(name) ?? false;
}
function hasTag(element, name) {
	return element?.tagName?.toLowerCase() === name;
}
function hasType(element, name) {
	return element?.type?.toLowerCase() === name;
}
function addClass(element, name) {
	if (element instanceof NodeList) for (let i = 0; i < element.length; i++) element[i].classList.add(name);
	else element?.classList.add(name);
}
function removeClass(element, name) {
	if (element instanceof NodeList) for (let i = 0; i < element.length; i++) element[i].classList.remove(name);
	else element?.classList.remove(name);
}
function on(element, name, callback, useCapture = true) {
	if (element?.addEventListener) element.addEventListener(name, callback, useCapture);
}
function onWeak(element, name, callback, useCapture = true) {
	if (!element) return;
	const el = element;
	let events = _weakMap.get(el);
	if (!events) {
		events = /* @__PURE__ */ new Map();
		_weakMap.set(el, events);
	}
	const key = name + (useCapture ? "1" : "0");
	let callbacks = events.get(key);
	if (!callbacks) {
		callbacks = /* @__PURE__ */ new Set();
		events.set(key, callbacks);
	}
	if (callbacks.has(callback)) return;
	callbacks.add(callback);
	on(element, name, callback, useCapture);
}
function off(element, name, callback, useCapture = true) {
	if (element?.removeEventListener) element.removeEventListener(name, callback, useCapture);
}
function insertBefore(newElement, element) {
	element?.parentNode?.insertBefore(newElement, element);
}
function prev(element) {
	return element?.previousElementSibling;
}
function next(element) {
	return element?.nextElementSibling;
}
function parent(element) {
	return element?.parentElement;
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
function blurActiveElement() {
	document.activeElement?.blur();
}
function queryAllDataUi(id) {
	return queryAll("[data-ui=\"#" + id + "\"]");
}
function queryDataUi(id) {
	return query("[data-ui=\"#" + id + "\"]");
}
function updateAllClickable(element) {
	if (element.id && hasClass(element, "page")) element = queryDataUi(element.id) ?? element;
	const container = parent(element);
	if (!hasClass(container, "tabs") && !hasClass(container, "tabbed") && !hasTag(container, "nav")) return;
	const as = queryAll("a", container);
	for (let i = 0; i < as.length; i++) removeClass(as[i], "active");
	if (!hasTag(element, "button") && !hasClass(element, "button") && !hasClass(element, "chip")) addClass(element, "active");
}
function rootSizeInPixels() {
	const size = getComputedStyle(document.documentElement).getPropertyValue("--size") || "16px";
	if (size.includes("%")) return parseInt(size) * 16 / 100;
	if (size.includes("em")) return parseInt(size) * 16;
	return parseInt(size);
}
//#endregion
//#region src/cdn/elements/fields.ts
function updatePlaceholder(element) {
	if (!element.placeholder) element.placeholder = " ";
}
function onClickLabel(e) {
	const label = e.currentTarget;
	const input = query("input:not([type=file], [type=checkbox], [type=radio]), select, textarea", parent(label));
	if (input) input.focus();
}
function onFocusInput(e) {
	const input = e.currentTarget;
	updateInput(input);
}
function onBlurInput(e) {
	const input = e.currentTarget;
	updateInput(input);
}
function onChangeFile(e) {
	const input = e.currentTarget;
	updateFile(input);
}
function onChangeColor(e) {
	const input = e.currentTarget;
	updateColor(input);
}
function onKeydownFile(e) {
	const input = e.currentTarget;
	updateFile(input, e);
}
function onKeydownColor(e) {
	const input = e.currentTarget;
	updateColor(input, e);
}
function onPasswordIconClick(e) {
	const icon = e.currentTarget;
	const input = query("input", parent(icon));
	if (input && icon.textContent?.includes("visibility")) if (input.type === "password") {
		input.type = "text";
		icon.textContent = "visibility_off";
	} else {
		input.type = "password";
		icon.textContent = "visibility";
	}
}
function onInputTextarea(e) {
	const textarea = e.currentTarget;
	updateTextarea(textarea);
}
function onClickLabelDelegation(e) {
	const from = e.target.closest(".field > label");
	if (!from) return;
	Object.defineProperty(e, "currentTarget", {
		value: from,
		configurable: true
	});
	onClickLabel(e);
}
function updateAllLabels() {
	const body = document.body;
	if (!body) return;
	onWeak(body, "click", onClickLabelDelegation);
}
function updateAllInputs() {
	const inputs = queryAll(".field > input:not([type=file], [type=color], [type=range])");
	for (let i = 0; i < inputs.length; i++) {
		onWeak(inputs[i], "focus", onFocusInput);
		onWeak(inputs[i], "blur", onBlurInput);
		updateInput(inputs[i]);
	}
}
function updateAllSelects() {
	const selects = queryAll(".field > select");
	for (let i = 0; i < selects.length; i++) {
		onWeak(selects[i], "focus", onFocusInput);
		onWeak(selects[i], "blur", onBlurInput);
	}
}
function updateAllFiles() {
	const files = queryAll(".field > input[type=file]");
	for (let i = 0; i < files.length; i++) {
		onWeak(files[i], "change", onChangeFile);
		updateFile(files[i]);
	}
}
function updateAllColors() {
	const colors = queryAll(".field > input[type=color]");
	for (let i = 0; i < colors.length; i++) {
		onWeak(colors[i], "change", onChangeColor);
		updateColor(colors[i]);
	}
}
function updateAllTextareas() {
	const textareas = queryAll(".field > textarea");
	for (let i = 0; i < textareas.length; i++) {
		onWeak(textareas[i], "focus", onFocusInput);
		onWeak(textareas[i], "blur", onBlurInput);
		updatePlaceholder(textareas[i]);
		if (isChrome && !isMac && !isIOS) continue;
		onWeak(textareas[i], "input", onInputTextarea);
		updateTextarea(textareas[i]);
	}
}
function updateAllPasswordIcons() {
	const icons = queryAll(".field:has(> input[type=password]) > i, a");
	for (let i = 0; i < icons.length; i++) onWeak(icons[i], "click", onPasswordIconClick);
}
function updateInput(input) {
	if (hasType(input, "number") && !input.value) input.value = "";
	updatePlaceholder(input);
}
function updateFile(input, e) {
	if (e?.key === "Enter") {
		const previousInput = prev(input);
		if (!hasType(previousInput, "file")) return;
		previousInput.click();
		return;
	}
	const nextInput = next(input);
	if (!hasType(nextInput, "text")) return;
	nextInput.value = input.files ? Array.from(input.files).map((x) => x.name).join(", ") : "";
	nextInput.readOnly = true;
	onWeak(nextInput, "keydown", onKeydownFile, false);
	updateInput(nextInput);
}
function updateColor(input, e) {
	if (e?.key === "Enter") {
		const previousInput = prev(input);
		if (!hasType(previousInput, "color")) return;
		previousInput.click();
		return;
	}
	const nextInput = next(input);
	if (!hasType(nextInput, "text")) return;
	nextInput.readOnly = true;
	nextInput.value = input.value;
	onWeak(nextInput, "keydown", onKeydownColor, false);
	updateInput(nextInput);
}
function updateTextarea(textarea) {
	updatePlaceholder(textarea);
	if (textarea.hasAttribute("rows")) return;
	const rootSize = rootSizeInPixels();
	textarea.style.blockSize = "auto";
	textarea.style.blockSize = `${textarea.scrollHeight - rootSize}px`;
}
function updateAllFields() {
	updateAllLabels();
	updateAllInputs();
	updateAllSelects();
	updateAllFiles();
	updateAllColors();
	updateAllTextareas();
	updateAllPasswordIcons();
}
//#endregion
//#region src/cdn/elements/sliders.ts
function onInputDocument$1(e) {
	const input = e.target;
	if (!hasTag(input, "input") && !hasTag(input, "select")) return;
	if (input.type === "range") {
		input.focus();
		updateRange(input);
	} else updateAllRanges();
}
function onChangeInput(e) {
	if (!window.matchMedia("(pointer: coarse)").matches) return;
	e.target.blur();
}
function updateAllRanges() {
	const body = document.body;
	const ranges = queryAll(".slider > input[type=range]");
	if (!ranges.length) off(body, "input", onInputDocument$1, false);
	else on(body, "input", onInputDocument$1, false);
	for (let i = 0; i < ranges.length; i++) updateRange(ranges[i]);
}
function updateRange(input) {
	onWeak(input, "change", onChangeInput);
	const label = parent(input);
	const bar = query("span", label);
	const inputs = queryAll("input", label);
	if (!inputs.length || !bar) return;
	const rootSize = rootSizeInPixels();
	const thumb = hasClass(label, "max") ? 0 : .25 * rootSize * 100 / inputs[0].offsetWidth;
	const percents = [];
	const values = [];
	for (let i = 0, n = inputs.length; i < n; i++) {
		const min = parseFloat(inputs[i].min) || 0;
		const max = parseFloat(inputs[i].max) || 100;
		const value = parseFloat(inputs[i].value) || 0;
		const percent = (value - min) * 100 / (max - min);
		const fix = thumb / 2 - thumb * percent / 100;
		percents.push(percent + fix);
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
	requestAnimationFrame(() => label.style.cssText = `--_start: ${start}%; --_end: ${end}%; --_value1: '${value1}'; --_value2: '${value2}';`);
}
function updateAllSliders() {
	updateAllRanges();
}
//#endregion
//#region src/cdn/settings/theme.ts
var _lastTheme = {
	light: "",
	dark: ""
};
function getMode() {
	return document?.body?.classList.contains("dark") ? "dark" : "light";
}
function lastTheme() {
	if (_lastTheme.light && _lastTheme.dark) return _lastTheme;
	const body = document.body;
	const light = document.createElement("body");
	light.className = "light";
	light.style.display = "none";
	body.appendChild(light);
	const dark = document.createElement("body");
	dark.className = "dark";
	dark.style.display = "none";
	body.appendChild(dark);
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
		body.removeChild(light);
		body.removeChild(dark);
	}
	return _lastTheme;
}
async function updateTheme(source) {
	const context = globalThis;
	const body = document.body;
	if (!source || !context.materialDynamicColors) return lastTheme();
	if (source.light && source.dark) {
		_lastTheme.light = source.light;
		_lastTheme.dark = source.dark;
		body.setAttribute("style", source[getMode()]);
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
		body.setAttribute("style", _lastTheme[getMode()]);
		return _lastTheme;
	});
}
function updateMode(value) {
	const context = globalThis;
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
//#endregion
//#region src/cdn/elements/dialogs.ts
var _dialogs = [];
function onKeydownDialog(e) {
	if (e.key === "Escape") {
		const dialog = e.currentTarget;
		updateDialog(dialog, dialog);
	}
}
function focusOnDialogOrElement(dialog) {
	(query("[autofocus]", dialog) ?? dialog).focus();
}
function closeDialog(dialog, overlay) {
	removeClass(queryAllDataUi(dialog.id), "active");
	removeClass(dialog, "active");
	removeClass(overlay, "active");
	dialog.close();
	_dialogs.pop();
	const previousDialog = _dialogs[_dialogs.length - 1];
	if (previousDialog) previousDialog.focus();
}
async function openDialog(dialog, overlay, isModal, from) {
	if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
	addClass(overlay, "active");
	addClass(dialog, "active");
	if (isModal) dialog.showModal();
	else dialog.show();
	await wait(90);
	if (!isModal) on(dialog, "keydown", onKeydownDialog, false);
	_dialogs.push(dialog);
	focusOnDialogOrElement(dialog);
}
function onClickOverlay(e) {
	const overlay = e.currentTarget;
	const dialog = next(overlay);
	if (hasTag(dialog, "dialog")) closeDialog(dialog, overlay);
}
async function updateDialog(from, dialog) {
	blurActiveElement();
	let overlay = prev(dialog);
	const isActive = hasClass(dialog, "active") || dialog.open;
	const isModal = hasClass(dialog, "modal");
	if (!isModal) off(dialog, "keydown", onKeydownDialog, false);
	if (!hasClass(overlay, "overlay")) {
		overlay = create({ class: "overlay" });
		insertBefore(overlay, dialog);
		await wait(90);
	}
	if (!isModal) onWeak(overlay, "click", onClickOverlay, false);
	if (isActive) closeDialog(dialog, overlay);
	else openDialog(dialog, overlay, isModal, from);
}
//#endregion
//#region src/cdn/elements/menus.ts
var _timeoutMenu;
function onClickDocument(e) {
	off(document.body, "click", onClickDocument);
	const body = e.target;
	const menus = queryAll("menu.active");
	for (let i = 0; i < menus.length; i++) updateMenu(body, menus[i], e);
}
function focusOnMenuOrInput(menu) {
	setTimeout(() => {
		const input = query(".field > input", menu);
		if (input) input.focus();
		else menu.focus();
	}, 90);
}
function updateMenu(from, menu, e) {
	if (_timeoutMenu) clearTimeout(_timeoutMenu);
	_timeoutMenu = setTimeout(() => {
		on(document.body, "click", onClickDocument);
		if (!hasTag(document.activeElement, "input")) blurActiveElement();
		const isActive = hasClass(menu, "active");
		const isEvent = e?.target === from;
		const isChild = !!from.closest("menu");
		if (!isActive && isChild || isActive && isEvent) {
			removeClass(menu, "active");
			return;
		}
		removeClass(queryAll("menu.active"), "active");
		addClass(menu, "active");
		focusOnMenuOrInput(menu);
	}, 90);
}
//#endregion
//#region src/cdn/elements/snackbars.ts
var _timeoutSnackbar;
function onClickSnackbar(e) {
	const snackbar = e.currentTarget;
	removeClass(snackbar, "active");
	if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
}
function updateSnackbar(snackbar, milliseconds) {
	blurActiveElement();
	const activeSnackbars = queryAll(".snackbar.active");
	for (let i = 0; i < activeSnackbars.length; i++) removeClass(activeSnackbars[i], "active");
	addClass(snackbar, "active");
	onWeak(snackbar, "click", onClickSnackbar);
	if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
	if (milliseconds === -1) return;
	_timeoutSnackbar = setTimeout(() => {
		removeClass(snackbar, "active");
	}, milliseconds ?? 6e3);
}
//#endregion
//#region src/cdn/elements/pages.ts
function updatePage(page) {
	const container = parent(page);
	if (container) removeClass(queryAll(":scope > .page", container), "active");
	addClass(page, "active");
}
//#endregion
//#region src/cdn/helpers/ripples.ts
function updateRipple(e) {
	const isMouseEvent = e instanceof MouseEvent;
	const element = e.currentTarget;
	const rect = element.getBoundingClientRect();
	const diameter = Math.max(rect.width, rect.height);
	const radius = diameter / 2;
	const x = isMouseEvent ? e.clientX - rect.left - radius : rect.width / 2 - radius;
	const y = isMouseEvent ? e.clientY - rect.top - radius : rect.height / 2 - radius;
	const rippleContainer = document.createElement("div");
	rippleContainer.className = "ripple-js";
	const ripple = document.createElement("div");
	ripple.style.inlineSize = ripple.style.blockSize = `${diameter}px`;
	ripple.style.left = `${x}px`;
	ripple.style.top = `${y}px`;
	onWeak(ripple, "animationend", () => {
		rippleContainer.remove();
	});
	rippleContainer.appendChild(ripple);
	element.appendChild(rippleContainer);
}
function onMousedownRippleDelegation(e) {
	const from = e.target.closest(".slow-ripple, .ripple, .fast-ripple");
	if (!from) return;
	Object.defineProperty(e, "currentTarget", {
		value: from,
		configurable: true
	});
	updateRipple(e);
}
function onKeydownRippleDelegation(e) {
	const from = e.target.closest(".slow-ripple, .ripple, .fast-ripple");
	if (!from || e.key !== " ") return;
	Object.defineProperty(e, "currentTarget", {
		value: from,
		configurable: true
	});
	updateRipple(e);
}
function updateAllRipples() {
	const body = document.body;
	if (!body) return;
	onWeak(body, "mousedown", onMousedownRippleDelegation);
	onWeak(body, "keydown", onKeydownRippleDelegation);
}
//#endregion
//#region src/cdn/elements/progress.ts
function onInputDocument(e) {
	const progress = e.target;
	if (hasTag(progress, "progress")) updateProgress(progress);
	else updateAllProgress();
}
function updateProgress(progress) {
	requestAnimationFrame(() => {
		if (!progress.hasAttribute("value") && !progress.hasAttribute("max")) {
			const value = hasClass(progress, "circle") ? "50" : "100";
			progress.style.setProperty("--_value", value);
			progress.setAttribute("value", value);
			progress.setAttribute("max", "100");
			progress.classList.add("indeterminate");
		} else progress.style.setProperty("--_value", String(progress.value));
	});
}
function updateAllProgress() {
	if (isChrome && !isMac && !isIOS) return;
	const body = document.body;
	const progresses = queryAll("progress");
	if (!progresses.length) off(body, "input", onInputDocument, false);
	else on(body, "input", onInputDocument, false);
	for (let i = 0; i < progresses.length; i++) updateProgress(progresses[i]);
}
//#endregion
//#region src/cdn/beer.ts
var _context = globalThis;
var _timeoutMutation;
var _mutation;
function onMutation() {
	if (_timeoutMutation) clearTimeout(_timeoutMutation);
	_timeoutMutation = setTimeout(async () => await _ui(), 180);
}
async function run(from, to, options, e) {
	if (!to) {
		to = query(from.getAttribute("data-ui"));
		if (!to) {
			from.classList.toggle("active");
			return;
		}
	}
	updateAllClickable(from);
	if (hasTag(to, "dialog")) {
		requestAnimationFrame(() => updateDialog(from, to));
		return;
	}
	if (hasTag(to, "menu")) {
		requestAnimationFrame(() => updateMenu(from, to, e));
		return;
	}
	if (hasClass(to, "snackbar")) {
		requestAnimationFrame(() => updateSnackbar(to, options));
		return;
	}
	if (hasClass(to, "page")) {
		requestAnimationFrame(() => updatePage(to));
		return;
	}
	if (hasClass(to, "active")) {
		removeClass(from, "active");
		removeClass(to, "active");
		return;
	}
	addClass(to, "active");
}
function setup() {
	if (_context.ui || _mutation || !_context.MutationObserver) return;
	_mutation = new MutationObserver(onMutation);
	_mutation.observe(document.body, {
		childList: true,
		subtree: true
	});
	onMutation();
}
function onClickDataUi(e) {
	const from = e.target.closest("[data-ui]");
	if (from) run(from, null, null, e);
}
function onKeydownDataUi(e) {
	const from = e.target.closest("[data-ui]");
	if (from && hasTag(from, "a") && !from.getAttribute("href") && e.key === "Enter") run(from, null, null, e);
}
function updateAllDataUis() {
	const body = document.body;
	if (!body) return;
	onWeak(body, "click", onClickDataUi);
	onWeak(body, "keydown", onKeydownDataUi);
}
function _ui(selector, options) {
	if (selector) {
		if (selector === "setup") {
			setup();
			return;
		}
		if (selector === "guid") return guid();
		if (selector === "mode") return updateMode(options);
		if (selector === "theme") return updateTheme(options);
		const to = query(selector);
		if (!to) return;
		run(to, to, options);
	}
	updateAllDataUis();
	updateAllFields();
	updateAllRipples();
	updateAllSliders();
	updateAllProgress();
}
function start() {
	if (_context.ui) return;
	const body = _context.document?.body;
	if (body && !body.classList.contains("dark") && !body.classList.contains("light")) updateMode("auto");
	setup();
	_context.ui = _ui;
}
start();
var ui = _context.ui;
//#endregion
export { ui as default, ui };
