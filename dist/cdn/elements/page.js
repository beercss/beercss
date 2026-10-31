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
function addClass(element, name) {
	if (element instanceof NodeList) for (let i = 0; i < element.length; i++) element[i].classList.add(name);
	else element?.classList.add(name);
}
function removeClass(element, name) {
	if (element instanceof NodeList) for (let i = 0; i < element.length; i++) element[i].classList.remove(name);
	else element?.classList.remove(name);
}
function parent(element) {
	return element?.parentElement;
}
function queryAll(selector, elementOrRoot, element) {
	try {
		return typeof selector === "string" ? (element ?? elementOrRoot ?? document).querySelectorAll(selector) : selector ?? _emptyNodeList;
	} catch {
		return _emptyNodeList;
	}
}
//#endregion
//#region src/cdn/elements/page.ts
function updatePage(page, root) {
	const container = parent(page);
	if (container) removeClass(queryAll(":scope > .page", root, container), "active");
	addClass(page, "active");
}
globals_default().page = { updatePage };
//#endregion
export { updatePage };
