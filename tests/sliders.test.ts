import { expect, test, beforeEach, afterEach } from "vitest";
import { updateAllSliders } from "../src/cdn/elements/sliders";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("updateAllSliders is a function", () => {
  expect(typeof updateAllSliders).toBe("function");
});

test("updateAllSliders executes without error on empty document", () => {
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders processes single slider", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="50" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders processes multiple sliders", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="25" />
      <span></span>
    </div>
    <div class="slider">
      <input type="range" min="0" max="100" value="75" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
  expect(container.querySelectorAll(".slider").length).toBe(2);
});

test("updateAllSliders handles custom min and max", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="10" max="1000" value="500" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders handles range input with step", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="50" step="5" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders handles disabled slider", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="50" disabled />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders handles slider.max class", () => {
  container.innerHTML = `
    <div class="slider max">
      <input type="range" min="0" max="100" value="50" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders with dual range inputs", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="25" />
      <input type="range" min="0" max="100" value="75" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders handles zero value", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="0" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});

test("updateAllSliders handles maximum value", () => {
  container.innerHTML = `
    <div class="slider">
      <input type="range" min="0" max="100" value="100" />
      <span></span>
    </div>
  `;
  expect(() => {
    updateAllSliders();
  }).not.toThrow();
});
