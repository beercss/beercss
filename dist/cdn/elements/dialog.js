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
async function wait(milliseconds) {
	await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
function hasClass(element, name) {
	return element?.classList.contains(name) ?? false;
}
function hasTag(element, name) {
	return element?.tagName?.toLowerCase() === name;
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
//#endregion
//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
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
export { updateDialog };
