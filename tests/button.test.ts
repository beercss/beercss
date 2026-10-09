import { expect, test, beforeEach, afterEach } from "vitest";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("disabled native button does not match active selector rule for buttons", () => {
  container.innerHTML = `
    <button id="enabled-btn">Save</button>
    <button id="disabled-btn" disabled>Save</button>
    <a id="enabled-link" class="button">Save</a>
    <a id="disabled-link" class="button" disabled>Save</a>
  `;

  const enabledBtn = container.querySelector("#enabled-btn")!;
  const disabledBtn = container.querySelector("#disabled-btn")!;
  const enabledLink = container.querySelector("#enabled-link")!;
  const disabledLink = container.querySelector("#disabled-link")!;

  const selector = ":is(.button, button):not(.chip):not(:disabled, [disabled])";

  expect(enabledBtn.matches(selector)).toBe(true);
  expect(disabledBtn.matches(selector)).toBe(false);
  expect(enabledLink.matches(selector)).toBe(true);
  expect(disabledLink.matches(selector)).toBe(false);
});

test("disabled button inside nav.split does not match active selector rule for split buttons", () => {
  container.innerHTML = `
    <nav class="split">
      <button id="split-enabled">Option 1</button>
      <button id="split-disabled" disabled>Option 2</button>
    </nav>
  `;

  const splitEnabled = container.querySelector("#split-enabled")!;
  const splitDisabled = container.querySelector("#split-disabled")!;

  const selector = "nav.split > :is(.button, button):not(:disabled, [disabled])";

  expect(splitEnabled.matches(selector)).toBe(true);
  expect(splitDisabled.matches(selector)).toBe(false);
});
