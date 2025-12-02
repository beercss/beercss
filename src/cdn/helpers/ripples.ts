import { queryAll, on, create } from "../utils";

function onPointerDownRipple(e: PointerEvent, root: Document | ShadowRoot) { // Added root
  updateRipple(e, root); // Pass root
}

function updateRipple(e: PointerEvent, root: Document | ShadowRoot) { // Added root
  const element = e.currentTarget as HTMLElement;
  const rect = element.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  const x = e.clientX - rect.left - radius;
  const y = e.clientY - rect.top - radius;

  const rippleContainer = create({ class: "ripple-js" }, root); // Pass root
  const ripple = create({}, root); // Pass root
  ripple.style.inlineSize = ripple.style.blockSize = `${diameter}px`;
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  ripple.addEventListener("animationend", () => { rippleContainer.remove(); });

  rippleContainer.appendChild(ripple);
  element.appendChild(rippleContainer);
}

export function updateAllRipples(root: Document | ShadowRoot) { // Added root
  const ripples = queryAll(".slow-ripple, .ripple, .fast-ripple", root); // Pass root
  for(let i=0; i<ripples.length; i++) on(ripples[i], "pointerdown", (e: PointerEvent) => onPointerDownRipple(e, root)); // Pass root to handler
}