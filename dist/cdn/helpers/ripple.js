//#region src/cdn/globals.ts
var _context = globalThis;
_context.__BeerCssGlobals__ = _context.__BeerCssGlobals__ || {};
var globals_default = () => {
	return _context.__BeerCssGlobals__;
};
new URL(import.meta.url);
var _weakMap = /* @__PURE__ */ new WeakMap();
navigator.userAgent.includes("Chrome");
navigator.userAgent.includes("Firefox");
navigator.userAgent.includes("Safari");
navigator.userAgent.includes("Windows");
navigator.userAgent.includes("Macintosh");
navigator.userAgent.includes("Linux");
navigator.userAgent.includes("Android");
/iPad|iPhone|iPod/.test(navigator.userAgent);
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
export { updateAllRipples };
