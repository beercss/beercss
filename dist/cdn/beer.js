//#region src/cdn/globals.ts
var _context$1 = globalThis;
_context$1.__BeerCssGlobals__ = _context$1.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context$1.__BeerCssGlobals__;
};
//#endregion
//#region src/cdn/utils.ts
var _settings = [];
var _elements = [];
var _helpers = [];
var _urls = {};
var _url$1 = new URL(import.meta.url);
var _id = "__BeerCssStyleTag__";
var _allSettings = [
	"global",
	"light",
	"dark",
	"font",
	"reset",
	"theme"
];
var _allElements = [
	"badge",
	"bar",
	"button",
	"card",
	"chip",
	"dialog",
	"divider",
	"expansion",
	"field",
	"grid",
	"icon",
	"layout",
	"list",
	"mainLayout",
	"media",
	"menu",
	"navigation",
	"overlay",
	"page",
	"progress",
	"selection",
	"shape",
	"slider",
	"snackbar",
	"tab",
	"table",
	"tooltip",
	"typography"
];
var _allHelpers = [
	"alignment",
	"blur",
	"color",
	"direction",
	"elevate",
	"form",
	"margin",
	"opacity",
	"padding",
	"position",
	"responsive",
	"ripple",
	"scroll",
	"shadow",
	"size",
	"space",
	"wave",
	"zoom"
];
var _allJs = [
	"dialog",
	"field",
	"menu",
	"page",
	"progress",
	"ripple",
	"slider",
	"snackbar",
	"theme"
];
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
function closest(element, selector) {
	return element?.closest(selector);
}
function query(selector, elementOrRoot, element) {
	try {
		return typeof selector === "string" ? (element ?? elementOrRoot ?? document).querySelector(selector) : selector;
	} catch {
		return null;
	}
}
function queryAll(selector, elementOrRoot, element) {
	try {
		return typeof selector === "string" ? (element ?? elementOrRoot ?? document).querySelectorAll(selector) : selector ?? _emptyNodeList;
	} catch {
		return _emptyNodeList;
	}
}
function create(htmlAttributesAsJson, root) {
	const element = (root ? root instanceof Document ? root : root.ownerDocument : document).createElement("div");
	for (let i = 0, keys = Object.keys(htmlAttributesAsJson), n = keys.length; i < n; i++) {
		const key = keys[i];
		const value = htmlAttributesAsJson[key];
		element.setAttribute(key, value);
	}
	return element;
}
function blurActiveElement(root) {
	(root ?? document).activeElement?.blur();
}
function queryAllDataUi(id, root, element) {
	return queryAll("[data-ui=\"#" + id + "\"]", root, element);
}
function queryDataUi(id, root, element) {
	return query("[data-ui=\"#" + id + "\"]", root, element);
}
function updateAllClickable(element, root) {
	if (element.id && hasClass(element, "page")) element = queryDataUi(element.id, root) ?? element;
	const container = closest(element, ".tabs, nav");
	if (!container) return;
	removeClass(queryAll("a", root, container), "active");
	if (!hasTag(element, "button") && !hasClass(element, "button") && !hasClass(element, "chip")) addClass(element, "active");
}
function rootSizeInPixels(root) {
	const rootElement = query(".beer", root ?? document) || (root instanceof Document ? root.documentElement : root ? root.host : document.documentElement);
	const size = getComputedStyle(rootElement).getPropertyValue("--size") || "16px";
	if (size.includes("%")) return parseInt(size) * 16 / 100;
	if (size.includes("em")) return parseInt(size) * 16;
	return parseInt(size);
}
function getCssModule(url, path, scoped) {
	return new URL(scoped ? path.replace(".min.css", ".scoped.min.css") : path, url).href;
}
function getJsModule(url, path) {
	return new URL(path, url).href;
}
function hasJs(name) {
	return _allJs.indexOf(name) != -1;
}
function getScriptElement() {
	return Array.from(document.querySelectorAll("script[type=module]")).find((x) => (x.getAttribute("src") || x.innerHTML).indexOf("beer.") != -1);
}
async function importModulesFromUrl(url) {
	url = url || _url$1?.href;
	if (!url) return "";
	const params = new URL(url).searchParams;
	const settings = params.get("settings")?.split(",")?.filter(Boolean) || [];
	const elements = params.get("elements")?.split(",")?.filter(Boolean) || [];
	const helpers = params.get("helpers")?.split(",")?.filter(Boolean) || [];
	const scoped = !!params.get("scoped");
	if (!settings.length && !elements.length && !helpers.length) return "";
	const mergedSettings = params.has("settings") ? Array.from(/* @__PURE__ */ new Set([...settings, ..._settings])).sort() : _allSettings;
	const mergedElements = params.has("elements") ? Array.from(/* @__PURE__ */ new Set([...elements, ..._elements])).sort() : _allElements;
	const mergedHelpers = params.has("helpers") ? Array.from(/* @__PURE__ */ new Set([...helpers, ..._helpers])).sort() : _allHelpers;
	if (mergedSettings.length == _settings.length && mergedElements.length == _elements.length && mergedHelpers.length == _helpers.length) return "";
	_settings = mergedSettings;
	_elements = mergedElements;
	_helpers = mergedHelpers;
	const cssModules = [
		...mergedSettings.map((name) => getCssModule(url, `./settings/${name}.min.css`, scoped)),
		...mergedHelpers.map((name) => getCssModule(url, `./helpers/${name}.min.css`, scoped)),
		...mergedElements.map((name) => getCssModule(url, `./elements/${name}.min.css`, scoped))
	];
	const jsModules = [
		...mergedSettings.filter(hasJs).map((name) => getJsModule(url, `./settings/${name}.min.js`)),
		...mergedHelpers.filter(hasJs).map((name) => getJsModule(url, `./helpers/${name}.min.js`)),
		...mergedElements.filter(hasJs).map((name) => getJsModule(url, `./elements/${name}.min.js`))
	];
	const requests = [];
	for (let module of cssModules) {
		_urls[module] = _urls[module] || fetch(module).then((response) => response.ok ? response.text() : "").catch(() => "");
		requests.push(_urls[module]);
	}
	for (let module of jsModules) {
		_urls[module] = _urls[module] || import(
			/* @vite-ignore */
			module
);
		requests.push(_urls[module]);
	}
	const responses = (await Promise.allSettled(requests)).filter((response) => !!response.value && typeof response.value == "string").map((response) => response.value);
	let styleElement = document.getElementById(_id);
	if (styleElement) {
		styleElement.textContent = responses.join("\n");
		return styleElement.textContent;
	}
	styleElement = document.createElement("style");
	styleElement.id = _id;
	styleElement.textContent = responses.join("\n");
	const scriptElement = getScriptElement();
	if (scriptElement) scriptElement.insertAdjacentElement("afterend", styleElement);
	else document.head.appendChild(styleElement);
	return styleElement.textContent;
}
async function importModulesFromQueryString(queryString) {
	const params = new URLSearchParams(queryString);
	const urlObject = new URL(_url$1);
	if (params.has("settings")) urlObject.searchParams.set("settings", params.get("settings") || "");
	if (params.has("elements")) urlObject.searchParams.set("elements", params.get("elements") || "");
	if (params.has("helpers")) urlObject.searchParams.set("helpers", params.get("helpers") || "");
	if (params.has("scoped")) urlObject.searchParams.set("scoped", params.get("scoped") || "");
	return importModulesFromUrl(urlObject.href);
}
//#endregion
//#region src/cdn/elements/field.ts
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
	updateFile(input);
}
function onKeydownColor(e) {
	const input = e.currentTarget;
	updateColor(input);
}
function onInputTextarea(e) {
	const textarea = e.currentTarget;
	updateTextarea(textarea);
}
function onPasswordIconClick(e) {
	const icon = e.currentTarget;
	const input = query("input", parent(icon));
	if (input && icon.textContent?.includes("visibility")) {
		if (input.type === "password") {
			input.type = "text";
			icon.textContent = "visibility_off";
		} else {
			input.type = "password";
			icon.textContent = "visibility";
		}
	}
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
function updateAllLabels(root = document) {
	const container = root instanceof Document ? root.body : root;
	if (!container) return;
	onWeak(container, "click", onClickLabelDelegation);
}
function updateAllInputs(root = document) {
	const inputs = queryAll(".field > input:not([type=file], [type=color], [type=range])", root);
	for (let i = 0; i < inputs.length; i++) {
		onWeak(inputs[i], "focus", onFocusInput);
		onWeak(inputs[i], "blur", onBlurInput);
		updateInput(inputs[i]);
	}
}
function updateAllSelects(root = document) {
	const selects = queryAll(".field > select", root);
	for (let i = 0; i < selects.length; i++) {
		onWeak(selects[i], "focus", onFocusInput);
		onWeak(selects[i], "blur", onBlurInput);
	}
}
function updateAllFiles(root = document) {
	const files = queryAll(".field > input[type=file]", root);
	for (let i = 0; i < files.length; i++) {
		onWeak(files[i], "change", onChangeFile);
		updateFile(files[i]);
	}
}
function updateAllColors(root = document) {
	const colors = queryAll(".field > input[type=color]", root);
	for (let i = 0; i < colors.length; i++) {
		onWeak(colors[i], "change", onChangeColor);
		updateColor(colors[i]);
	}
}
function updateAllTextareas(root = document) {
	const textareas = queryAll(".field.textarea > textarea", root);
	for (let i = 0; i < textareas.length; i++) {
		onWeak(textareas[i], "focus", onFocusInput);
		onWeak(textareas[i], "blur", onBlurInput);
		updatePlaceholder(textareas[i]);
		if (isChrome && !isMac && !isIOS) continue;
		onWeak(textareas[i], "input", onInputTextarea);
		updateTextarea(textareas[i], root);
	}
}
function updateAllPasswordIcons(root = document) {
	const icons = queryAll(".field:has(> input[type=password]) > i, a", root);
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
function updateTextarea(textarea, root) {
	updatePlaceholder(textarea);
	if (textarea.hasAttribute("rows")) return;
	const rootSize = rootSizeInPixels(root);
	textarea.style.blockSize = "auto";
	textarea.style.blockSize = `${textarea.scrollHeight - rootSize}px`;
}
function updateAllFields(root = document) {
	updateAllLabels(root);
	updateAllInputs(root);
	updateAllSelects(root);
	updateAllFiles(root);
	updateAllColors(root);
	updateAllTextareas(root);
	updateAllPasswordIcons(root);
}
globals_default().field = { updateAllFields };
//#endregion
//#region src/cdn/elements/slider.ts
function getContainer$2(root) {
	return root instanceof Document ? root.body : root.host;
}
function onInputDocument$1(e) {
	const input = e.target;
	if (!hasTag(input, "input") && !hasTag(input, "select")) return;
	const root = input.getRootNode?.() ?? document;
	if (input.type === "range") {
		input.focus();
		updateRange(input, root);
	} else updateAllRanges(root);
}
function updateAllRanges(root = document) {
	const container = getContainer$2(root);
	const ranges = queryAll(".slider > input[type=range]", root);
	if (!ranges.length) off(container, "input", onInputDocument$1, false);
	else onWeak(container, "input", onInputDocument$1, false);
	for (let i = 0; i < ranges.length; i++) updateRange(ranges[i], root);
}
function onChangeInput(e) {
	if (!(window.matchMedia?.("(pointer: coarse)")?.matches ?? false)) return;
	e.target.blur();
}
function updateRange(input, root = document) {
	onWeak(input, "change", onChangeInput);
	const label = parent(input);
	const bar = query("span", root, label);
	const inputs = queryAll("input", root, label);
	if (!inputs.length || !bar) return;
	const rootSize = rootSizeInPixels(root);
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
function updateAllSliders(root = document) {
	updateAllRanges(root);
}
globals_default().slider = { updateAllSliders };
//#endregion
//#region src/cdn/elements/dialog.ts
var dialogsMap = /* @__PURE__ */ new WeakMap();
function getDialogsForRoot(root) {
	if (!dialogsMap.has(root)) dialogsMap.set(root, []);
	return dialogsMap.get(root);
}
function onKeydownDialog(e, root) {
	if (e.key === "Escape") {
		const dialog = e.currentTarget;
		updateDialog(dialog, dialog, root);
	}
}
function focusOnDialogOrElement(dialog, root) {
	(query("[autofocus]", root, dialog) ?? dialog).focus();
}
function closeDialog(dialog, overlay, root) {
	removeClass(queryAllDataUi(dialog.id, root), "active");
	removeClass(dialog, "active");
	removeClass(overlay, "active");
	dialog.close();
	const dialogs = getDialogsForRoot(root);
	const index = dialogs.indexOf(dialog);
	if (index > -1) dialogs.splice(index, 1);
	const previousDialog = dialogs[dialogs.length - 1];
	if (previousDialog) previousDialog.focus();
}
async function openDialog(dialog, overlay, isModal, from, root) {
	if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
	addClass(overlay, "active");
	addClass(dialog, "active");
	if (isModal) dialog.showModal();
	else dialog.show();
	await wait(90);
	if (!isModal) on(dialog, "keydown", (e) => onKeydownDialog(e, root), false);
	getDialogsForRoot(root).push(dialog);
	focusOnDialogOrElement(dialog, root);
}
function onClickOverlay(e, root) {
	const overlay = e.currentTarget;
	const dialog = next(overlay);
	if (hasTag(dialog, "dialog")) closeDialog(dialog, overlay, root);
}
async function updateDialog(from, dialog, root = document) {
	blurActiveElement(root);
	let overlay = prev(dialog);
	const isActive = hasClass(dialog, "active") || dialog.open;
	const isModal = hasClass(dialog, "modal");
	if (!isModal) off(dialog, "keydown", (e) => onKeydownDialog(e, root), false);
	if (!hasClass(overlay, "overlay")) {
		overlay = create({ class: "overlay" }, root);
		insertBefore(overlay, dialog);
		await wait(90);
	}
	if (!isModal) onWeak(overlay, "click", (e) => onClickOverlay(e, root), false);
	if (isActive) closeDialog(dialog, overlay, root);
	else openDialog(dialog, overlay, isModal, from, root);
}
globals_default().dialog = { updateDialog };
//#endregion
//#region src/cdn/elements/menu.ts
var menuTimeouts = /* @__PURE__ */ new WeakMap();
function getContainer$1(root = document) {
	return root instanceof Document ? root.body : root ? root.host : document.body;
}
function onClickDocument(e, root = document) {
	off(getContainer$1(root), "click", (event) => onClickDocument(event, root));
	const body = e.target;
	const menus = queryAll("menu.active", root);
	for (let i = 0; i < menus.length; i++) updateMenu(body, menus[i], e, root);
}
function focusOnMenuOrInput(menu, root = document) {
	setTimeout(() => {
		const input = query(".field > input", root, menu);
		if (input) input.focus();
		else menu.focus();
	}, 90);
}
function updateMenu(from, menu, e, root) {
	if (e && (e instanceof Document || typeof ShadowRoot !== "undefined" && e instanceof ShadowRoot)) {
		root = e;
		e = void 0;
	}
	root = root ?? document;
	let timeoutMenu = menuTimeouts.get(root);
	if (timeoutMenu) clearTimeout(timeoutMenu);
	timeoutMenu = setTimeout(() => {
		on(getContainer$1(root), "click", (event) => onClickDocument(event, root));
		if (!hasTag(root.activeElement, "input")) blurActiveElement(root);
		const isActive = hasClass(menu, "active");
		const isEvent = e?.target === from;
		const isChild = !!from.closest("menu");
		if (!isActive && isChild || isActive && isEvent) {
			removeClass(menu, "active");
			return;
		}
		removeClass(queryAll("menu.active", root), "active");
		addClass(menu, "active");
		focusOnMenuOrInput(menu, root);
	}, 90);
	menuTimeouts.set(root, timeoutMenu);
}
globals_default().menu = { updateMenu };
//#endregion
//#region src/cdn/elements/snackbar.ts
var snackbarTimeouts = /* @__PURE__ */ new WeakMap();
function onClickSnackbar(e, root) {
	const snackbar = e.currentTarget;
	removeClass(snackbar, "active");
	const timeoutSnackbar = snackbarTimeouts.get(root);
	if (timeoutSnackbar) clearTimeout(timeoutSnackbar);
}
function updateSnackbar(snackbar, milliseconds, root = document) {
	blurActiveElement(root);
	removeClass(queryAll(".snackbar.active", root), "active");
	addClass(snackbar, "active");
	onWeak(snackbar, "click", (e) => onClickSnackbar(e, root));
	let timeoutSnackbar = snackbarTimeouts.get(root);
	if (timeoutSnackbar) clearTimeout(timeoutSnackbar);
	if (milliseconds === -1) return;
	timeoutSnackbar = setTimeout(() => {
		removeClass(snackbar, "active");
	}, milliseconds ?? 6e3);
	snackbarTimeouts.set(root, timeoutSnackbar);
}
globals_default().snackbar = { updateSnackbar };
//#endregion
//#region src/cdn/elements/page.ts
function updatePage(page, root) {
	const container = parent(page);
	if (container) removeClass(queryAll(":scope > .page", root, container), "active");
	addClass(page, "active");
}
globals_default().page = { updatePage };
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
globals_default().progress = { updateAllProgress };
//#endregion
//#region src/cdn/helpers/ripple.ts
function onAnimationendRipple(e) {
	e.currentTarget.parentElement?.remove();
}
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
	onWeak(ripple, "animationend", onAnimationendRipple);
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
function updateAllRipples(root = document) {
	const container = root instanceof Document ? root.body : root;
	if (!container) return;
	onWeak(container, "mousedown", onMousedownRippleDelegation);
	onWeak(container, "keydown", onKeydownRippleDelegation);
}
globals_default().ripple = { updateAllRipples };
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
//#region src/cdn/loader.ts
var _url = import.meta.url;
var _context = globalThis;
function createBeerCssInstance(root = document) {
	let _timeoutMutation;
	let _mutation = null;
	const instanceRoot = root;
	const onMutation = () => {
		if (_timeoutMutation) clearTimeout(_timeoutMutation);
		_timeoutMutation = setTimeout(async () => await _ui(), 180);
	};
	const setup = () => {
		if (_mutation || !_context.MutationObserver) return;
		_mutation = new MutationObserver(onMutation);
		const observeTarget = instanceRoot instanceof Document ? instanceRoot.body : instanceRoot;
		if (observeTarget) _mutation.observe(observeTarget, {
			childList: true,
			subtree: true
		});
		onMutation();
	};
	const run = async (from, to, options, e) => {
		if (!to) {
			to = query(from.getAttribute("data-ui"), instanceRoot);
			if (!to) {
				from.classList.toggle("active");
				return;
			}
		}
		updateAllClickable(from, instanceRoot);
		if (hasTag(to, "dialog")) {
			requestAnimationFrame(() => globals_default().dialog?.updateDialog(from, to, instanceRoot));
			return;
		}
		if (hasTag(to, "menu")) {
			requestAnimationFrame(() => globals_default().menu?.updateMenu(from, to, e, instanceRoot));
			return;
		}
		if (hasClass(to, "snackbar")) {
			requestAnimationFrame(() => globals_default().snackbar?.updateSnackbar(to, options, instanceRoot));
			return;
		}
		if (hasClass(to, "page")) {
			requestAnimationFrame(() => globals_default().page?.updatePage(to, instanceRoot));
			return;
		}
		if (hasClass(to, "active")) {
			removeClass(from, "active");
			removeClass(to, "active");
			return;
		}
		addClass(to, "active");
	};
	const onClickDataUi = (e) => {
		const from = e.target.closest("[data-ui]");
		if (from) run(from, null, null, e);
	};
	const onKeydownDataUi = (e) => {
		const from = e.target.closest("[data-ui]");
		if (from && hasTag(from, "a") && !from.getAttribute("href") && e.key === "Enter") run(from, null, null, e);
	};
	const updateAllDataUis = () => {
		const container = instanceRoot instanceof Document ? instanceRoot.body : instanceRoot;
		if (!container) return;
		onWeak(container, "click", onClickDataUi);
		onWeak(container, "keydown", onKeydownDataUi);
	};
	const _ui = (selector, options) => {
		if (selector) {
			if (selector === "setup") {
				setup();
				return;
			}
			if (selector === "guid") return guid();
			if (selector === "mode") return globals_default().theme?.updateMode(options, instanceRoot);
			if (selector === "theme") return globals_default().theme?.updateTheme(options, instanceRoot);
			if (selector === "import") {
				importModulesFromQueryString(options);
				return;
			}
			const to = query(selector, instanceRoot);
			if (!to) return;
			run(to, to, options);
		}
		updateAllDataUis();
		globals_default().field?.updateAllFields(instanceRoot);
		globals_default().ripple?.updateAllRipples(instanceRoot);
		globals_default().slider?.updateAllSliders(instanceRoot);
		globals_default().progress?.updateAllProgress(instanceRoot);
	};
	const container = instanceRoot instanceof Document ? instanceRoot.body : instanceRoot.host;
	if (container && !container.classList.contains("dark") && !container.classList.contains("light")) globals_default().theme?.updateMode("auto", instanceRoot);
	setup();
	return _ui;
}
function init(root = document) {
	return createBeerCssInstance(root);
}
function start() {
	if (_context.ui) return;
	_context.ui = init(document);
}
importModulesFromUrl(_url);
start();
var ui = _context.ui;
globals_default().ui = ui;
//#endregion
export { ui as default, ui, init };
