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
function queryAll(selector, elementOrRoot, element) {
	try {
		return typeof selector === "string" ? (element ?? elementOrRoot ?? document).querySelectorAll(selector) : selector ?? _emptyNodeList;
	} catch {
		return _emptyNodeList;
	}
}
function blurActiveElement(root) {
	(root ?? document).activeElement?.blur();
}
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
export { updateSnackbar };
