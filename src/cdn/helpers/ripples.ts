import { queryAll, on } from "../utils";

function onPointerDownRipple(e: PointerEvent) {
  updateRipple(e);
}

function updateRipple(e: PointerEvent) {
  const element = e.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  const x = e.clientX - rect.left - radius;
  const y = e.clientY - rect.top - radius;

  const rippleContainer = document.createElement("div");
  rippleContainer.className = "ripple-js";

  const ripple = document.createElement("div");
  ripple.style.inlineSize = ripple.style.blockSize = `${diameter}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.addEventListener("animationend", () => { rippleContainer.remove(); });

  rippleContainer.appendChild(ripple);
  element.appendChild(rippleContainer);
}

export function updateAllRipples() {
  const ripples = queryAll(".slow-ripple, .ripple, .fast-ripple");
  for(let i=0; i<ripples.length; i++) on(ripples[i], "pointerdown", onPointerDownRipple);
}