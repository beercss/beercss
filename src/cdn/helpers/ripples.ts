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
  // Using inlineSize and blockSize preserves modern CSS sizing
  ripple.style.inlineSize = ripple.style.blockSize = `${diameter}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  // Handle both pointerup and pointercancel to ensure cleanup, and remove listener automatically.
  const endRipple = () => {
    rippleContainer.classList.add("fade-out-ripple");
  };
  document.body.addEventListener("pointerup", endRipple, { once: true });
  document.body.addEventListener("pointercancel", endRipple, { once: true });

  ripple.addEventListener("transitionend", () => {
    rippleContainer.remove();
  }, { once: true });

  rippleContainer.appendChild(ripple);
  element.appendChild(rippleContainer);
}

export function updateAllRipples() {
  const elements = queryAll(".slow-ripple, .ripple, .fast-ripple");
  elements.forEach((el) => on(el, "pointerdown", onPointerDownRipple));
}
