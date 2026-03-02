import { queryAll, onWeak } from "../utils";

function onMousedownRipple(e: MouseEvent) {
  updateRipple(e);
}

function onKeydownRipple(e: KeyboardEvent) {
  if (e?.key === " ") updateRipple(e);
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
  onWeak(ripple, "animationend", () => { rippleContainer.remove(); });

  rippleContainer.appendChild(ripple);
  element.appendChild(rippleContainer);
}

export function updateAllRipples() {
  const ripples = queryAll(".slow-ripple, .ripple, .fast-ripple");
  for(let i=0; i<ripples.length; i++) {
    onWeak(ripples[i], "mousedown", onMousedownRipple);
    onWeak(ripples[i], "keydown", onKeydownRipple);
  }
}
