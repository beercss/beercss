//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
var _emptyNodeList = [];
var _weakMap = /* @__PURE__ */ new WeakMap();
navigator.userAgent.includes("Chrome");
navigator.userAgent.includes("Firefox");
navigator.userAgent.includes("Safari");
navigator.userAgent.includes("Windows");
navigator.userAgent.includes("Macintosh");
navigator.userAgent.includes("Linux");
navigator.userAgent.includes("Android");
/iPad|iPhone|iPod/.test(navigator.userAgent);
function hasClass(element, name) {
	return element?.classList.contains(name) ?? false;
}
function hasTag(element, name) {
	return element?.tagName?.toLowerCase() === name;
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
//#region src/cdn/elements/slider.ts
function getContainer(root) {
	return root instanceof Document ? root.body : root.host;
}
function onInputDocument(e) {
	const input = e.target;
	if (!hasTag(input, "input") && !hasTag(input, "select")) return;
	const root = input.getRootNode?.() ?? document;
	if (input.type === "range") {
		input.focus();
		updateRange(input, root);
	} else updateAllRanges(root);
}
function updateAllRanges(root = document) {
	const container = getContainer(root);
	const ranges = queryAll(".slider > input[type=range]", root);
	if (!ranges.length) off(container, "input", onInputDocument, false);
	else onWeak(container, "input", onInputDocument, false);
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
export { updateAllSliders };
