//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
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
function hasType(element, name) {
	return element?.type?.toLowerCase() === name;
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
function prev(element) {
	return element?.previousElementSibling;
}
function next(element) {
	return element?.nextElementSibling;
}
function parent(element) {
	return element?.parentElement;
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
function rootSizeInPixels(root) {
	const rootElement = query(".beer", root ?? document) || (root instanceof Document ? root.documentElement : root ? root.host : document.documentElement);
	const size = getComputedStyle(rootElement).getPropertyValue("--size") || "16px";
	if (size.includes("%")) return parseInt(size) * 16 / 100;
	if (size.includes("em")) return parseInt(size) * 16;
	return parseInt(size);
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
export { updateAllFields };
