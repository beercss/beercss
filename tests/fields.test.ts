import { expect, test, beforeEach, afterEach } from "vitest";
import { updateAllFields } from "../src/cdn/elements/fields";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("updateAllFields is a function", () => {
  expect(typeof updateAllFields).toBe("function");
});

test("updateAllFields executes without error on empty document", () => {
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes text input fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" />
      <label>Name</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes password fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="password" />
      <label>Password</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes email fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="email" />
      <label>Email</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes number fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="number" />
      <label>Number</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes textarea", () => {
  container.innerHTML = `
    <div class="field">
      <textarea></textarea>
      <label>Message</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields processes select", () => {
  container.innerHTML = `
    <div class="field">
      <select>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
      <label>Choose</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields handles multiple fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" />
      <label>Field 1</label>
    </div>
    <div class="field">
      <input type="text" />
      <label>Field 2</label>
    </div>
    <div class="field">
      <textarea></textarea>
      <label>Field 3</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
  expect(container.querySelectorAll(".field").length).toBe(3);
});

test("updateAllFields handles field with placeholder", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" placeholder="Enter text" />
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields handles field without placeholder", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" />
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields handles disabled fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" disabled />
      <label>Disabled</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields handles readonly fields", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" readonly />
      <label>Readonly</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields with field.fill class", () => {
  container.innerHTML = `
    <div class="field fill">
      <input type="text" />
      <label>Fill Field</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields with field.border class", () => {
  container.innerHTML = `
    <div class="field border">
      <input type="text" />
      <label>Border Field</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});

test("updateAllFields with field.round class", () => {
  container.innerHTML = `
    <div class="field round">
      <input type="text" />
      <label>Round Field</label>
    </div>
  `;
  expect(() => {
    updateAllFields();
  }).not.toThrow();
});
