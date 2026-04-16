import { expect, test, beforeEach, afterEach } from "vitest";
import { updateAllRipples } from "../src/cdn/helpers/ripples";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("updateAllRipples is a function", () => {
  expect(typeof updateAllRipples).toBe("function");
});

test("updateAllRipples executes without error on empty document", () => {
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples processes ripple class elements", () => {
  container.innerHTML = `
    <button class="ripple">Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples processes slow-ripple class", () => {
  container.innerHTML = `
    <button class="slow-ripple">Slow Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples processes fast-ripple class", () => {
  container.innerHTML = `
    <button class="fast-ripple">Fast Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with multiple ripple elements", () => {
  container.innerHTML = `
    <button class="ripple">Button 1</button>
    <button class="ripple">Button 2</button>
    <button class="ripple">Button 3</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
  expect(container.querySelectorAll(".ripple").length).toBe(3);
});

test("updateAllRipples with mixed ripple types", () => {
  container.innerHTML = `
    <button class="slow-ripple">Slow</button>
    <button class="ripple">Normal</button>
    <button class="fast-ripple">Fast</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with nested elements", () => {
  container.innerHTML = `
    <div>
      <button class="ripple">Button 1</button>
      <div>
        <button class="ripple">Button 2</button>
      </div>
    </div>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with custom classes", () => {
  container.innerHTML = `
    <button class="ripple custom-button">Custom</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples on various element types", () => {
  container.innerHTML = `
    <button class="ripple">Button</button>
    <a class="ripple">Link</a>
    <div class="ripple">Div</div>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples idempotent call", () => {
  container.innerHTML = `
    <button class="ripple">Button</button>
  `;
  expect(() => {
    updateAllRipples();
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with disabled elements", () => {
  container.innerHTML = `
    <button class="ripple" disabled>Disabled</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with data attributes", () => {
  container.innerHTML = `
    <button class="ripple" data-action="test">Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with inline styles", () => {
  container.innerHTML = `
    <button class="ripple" style="padding: 10px;">Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples with aria attributes", () => {
  container.innerHTML = `
    <button class="ripple" aria-label="Action">Button</button>
  `;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
});

test("updateAllRipples large number of elements", () => {
  let html = "";
  for (let i = 0; i < 50; i++) {
    html += `<button class="ripple">Button ${i}</button>`;
  }
  container.innerHTML = html;
  expect(() => {
    updateAllRipples();
  }).not.toThrow();
  expect(container.querySelectorAll(".ripple").length).toBe(50);
});
