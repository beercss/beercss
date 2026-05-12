import { onWeak } from "../utils";

function onAnimationendRipple(e: Event) {
  const ripple = e.currentTarget as HTMLElement;
  ripple.parentElement?.remove();
}

function updateRipple(e: MouseEvent | KeyboardEvent) {
  const isMouseEvent = e instanceof MouseEvent;
  const element = e.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  const x = isMouseEvent ? e.clientX - rect.left - radius : (rect.width / 2) - radius;
  const y = isMouseEvent ? e.clientY - rect.top - radius : (rect.height / 2) - radius;
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

function onMousedownRippleDelegation(e: MouseEvent) {
  const from = (e.target as HTMLElement).closest(".slow-ripple, .ripple, .fast-ripple") as HTMLElement;
  if (!from) return;

  Object.defineProperty(e, "currentTarget", { value: from, configurable: true });
  updateRipple(e);
}

function onKeydownRippleDelegation(e: KeyboardEvent) {
  const from = (e.target as HTMLElement).closest(".slow-ripple, .ripple, .fast-ripple") as HTMLElement;
  if (!from || e.key !== " ") return;

  Object.defineProperty(e, "currentTarget", { value: from, configurable: true });
  updateRipple(e);
}

export function updateAllRipples() {
  const body = document.body;
  if (!body) return;

  onWeak(body, "mousedown", onMousedownRippleDelegation);
  onWeak(body, "keydown", onKeydownRippleDelegation);
}
