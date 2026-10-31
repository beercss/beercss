//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
var _emptyNodeList = [];
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
function off(element, name, callback, useCapture = true) {
	if (element?.removeEventListener) element.removeEventListener(name, callback, useCapture);
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
function blurActiveElement(root) {
	(root ?? document).activeElement?.blur();
}
//#endregion
//#region src/cdn/elements/menu.ts
var menuTimeouts = /* @__PURE__ */ new WeakMap();
function getContainer(root = document) {
	return root instanceof Document ? root.body : root ? root.host : document.body;
}
function onClickDocument(e, root = document) {
	off(getContainer(root), "click", (event) => onClickDocument(event, root));
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
		on(getContainer(root), "click", (event) => onClickDocument(event, root));
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
export { updateMenu };
