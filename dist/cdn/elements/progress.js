//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
var _emptyNodeList = [];
var isChrome = navigator.userAgent.includes("Chrome");
navigator.userAgent.includes("Firefox");
navigator.userAgent.includes("Safari");
navigator.userAgent.includes("Windows");
var isMac = navigator.userAgent.includes("Macintosh");
navigator.userAgent.includes("Linux");
navigator.userAgent.includes("Android");
var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
function hasClass(element, name) {
	return element?.classList.contains(name) ?? false;
}
function hasTag(element, name) {
	return element?.tagName?.toLowerCase() === name;
}
function on(element, name, callback, useCapture = true) {
	if (element?.addEventListener) element.addEventListener(name, callback, useCapture);
}
function off(element, name, callback, useCapture = true) {
	if (element?.removeEventListener) element.removeEventListener(name, callback, useCapture);
}
function queryAll(selector, elementOrRoot, element) {
	try {
		return typeof selector === "string" ? (element ?? elementOrRoot ?? document).querySelectorAll(selector) : selector ?? _emptyNodeList;
	} catch {
		return _emptyNodeList;
	}
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
globals_default().progress = { updateAllProgress };
//#endregion
export { updateAllProgress };
