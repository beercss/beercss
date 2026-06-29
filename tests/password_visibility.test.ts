import { expect, test, beforeEach, afterEach } from "vitest";
import { updateAllFields } from "../src/cdn/elements/fields";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  document.body.innerHTML = "";
});

test("toggles password visibility with <i> icon", () => {
  container.innerHTML = `
    <div class="field">
      <input type="password" />
      <i>visibility</i>
    </div>
  `;
  updateAllFields();

  const icon = container.querySelector("i")!;
  const input = container.querySelector("input")!;

  expect(input.type).toBe("password");
  expect(icon.textContent).toBe("visibility");

  icon.click();
  expect(input.type).toBe("text");
  expect(icon.textContent).toBe("visibility_off");

  icon.click();
  expect(input.type).toBe("password");
  expect(icon.textContent).toBe("visibility");
});

test("toggles password visibility with <a> icon", () => {
  container.innerHTML = `
    <div class="field">
      <input type="password" />
      <a>visibility</a>
    </div>
  `;
  updateAllFields();

  const icon = container.querySelector("a")!;
  const input = container.querySelector("input")!;

  expect(input.type).toBe("password");
  expect(icon.textContent).toBe("visibility");

  icon.click();
  expect(input.type).toBe("text");
  expect(icon.textContent).toBe("visibility_off");

  icon.click();
  expect(input.type).toBe("password");
  expect(icon.textContent).toBe("visibility");
});

test("does not toggle if icon text does not include 'visibility'", () => {
  container.innerHTML = `
    <div class="field">
      <input type="password" />
      <i>search</i>
    </div>
  `;
  updateAllFields();

  const icon = container.querySelector("i")!;
  const input = container.querySelector("input")!;

  icon.click();
  expect(input.type).toBe("password");
  expect(icon.textContent).toBe("search");
});

test("does not toggle if input is not password type initially", () => {
  container.innerHTML = `
    <div class="field">
      <input type="text" />
      <i>visibility</i>
    </div>
  `;
  updateAllFields();

  const icon = container.querySelector("i");
  const input = container.querySelector("input")!;

  // i won't even have the listener if selector is correct and working
  if (icon) {
    icon.click();
    expect(input.type).toBe("text");
    expect(icon.textContent).toBe("visibility");
  }
});

test("handles icon with extra text but includes 'visibility'", () => {
  container.innerHTML = `
    <div class="field">
      <input type="password" />
      <i>icon visibility icon</i>
    </div>
  `;
  updateAllFields();

  const icon = container.querySelector("i")!;
  const input = container.querySelector("input")!;

  icon.click();
  expect(input.type).toBe("text");
  expect(icon.textContent).toBe("visibility_off");
});
