import { queryAll, onWeak, create } from "../utils";

function onPointerDownRipple(e: PointerEvent, root: Document | ShadowRoot) {
  updateRipple(e, root);
}

function updateRipple(e: PointerEvent, root: Document | ShadowRoot) {
  const element = e.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  const x = e.clientX - rect.left - radius;
  const y = e.clientY - rect.top - radius;

  const rippleContainer = create({ class: "ripple-js" }, root);
  const ripple = create({}, root);
  ripple.style.inlineSize = ripple.style.blockSize = `${diameter}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.addEventListener("animationend", () => { rippleContainer.remove(); });

  rippleContainer.appendChild(ripple);
  element.appendChild(rippleContainer);
}

export function updateAllRipples(root: Document | ShadowRoot) {
  const ripples = queryAll(".slow-ripple, .ripple, .fast-ripple", root);
  for(let i=0; i<ripples.length; i++) onWeak(ripples[i], "pointerdown", (e: PointerEvent) => onPointerDownRipple(e, root));
}