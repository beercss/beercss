import { expect, test, beforeEach, afterEach, vi } from "vitest";
import { updateSnackbar } from "../src/cdn/elements/snackbars";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  vi.useFakeTimers();
});

afterEach(() => {
  container.remove();
  vi.restoreAllMocks();
});

test("updateSnackbar is a function", () => {
  expect(typeof updateSnackbar).toBe("function");
});

test("updateSnackbar executes without error", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
});

test("updateSnackbar with basic snackbar element", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Snackbar message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(6000);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar with -1 timeout (stays active)", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Persistent message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar, -1);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(6000);
  expect(snackbar.classList.contains("active")).toBe(true);
});

test("updateSnackbar with action button", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
      <button>Undo</button>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
});

test("updateSnackbar with custom milliseconds timeout", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar, 5000);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(5000);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar with zero timeout", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar, 0);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(0);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar with very large timeout", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar, 10000);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(10000);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar multiple snackbars (only one active)", () => {
  container.innerHTML = `
    <div class="snackbar" id="snackbar1">
      <p>Message 1</p>
    </div>
    <div class="snackbar" id="snackbar2">
      <p>Message 2</p>
    </div>
  `;
  const snackbar1 = container.querySelector("#snackbar1") as HTMLElement;
  const snackbar2 = container.querySelector("#snackbar2") as HTMLElement;

  updateSnackbar(snackbar1);
  expect(snackbar1.classList.contains("active")).toBe(true);

  updateSnackbar(snackbar2);
  expect(snackbar1.classList.contains("active")).toBe(false);
  expect(snackbar2.classList.contains("active")).toBe(true);
});

test("updateSnackbar with active class", () => {
  container.innerHTML = `
    <div class="snackbar active">
      <p>Active snackbar</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
});

test("updateSnackbar close on click", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
      <button class="close">×</button>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);

  snackbar.click();
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar with custom classes", () => {
  container.innerHTML = `
    <div class="snackbar custom-snackbar">
      <p>Custom message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
  expect(snackbar.classList.contains("custom-snackbar")).toBe(true);
});

test("updateSnackbar sequential calls", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
  vi.advanceTimersByTime(6000);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar with different timeouts", () => {
  container.innerHTML = `
    <div class="snackbar" id="snackbar1">
      <p>Quick message</p>
    </div>
    <div class="snackbar" id="snackbar2">
      <p>Slow message</p>
    </div>
  `;
  const snackbar1 = container.querySelector("#snackbar1") as HTMLElement;
  const snackbar2 = container.querySelector("#snackbar2") as HTMLElement;

  updateSnackbar(snackbar1, 2000);
  expect(snackbar1.classList.contains("active")).toBe(true);

  updateSnackbar(snackbar2, 6000);
  expect(snackbar1.classList.contains("active")).toBe(false);
  expect(snackbar2.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(2000);
  expect(snackbar2.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(4000);
  expect(snackbar2.classList.contains("active")).toBe(false);
});

test("updateSnackbar with HTML content", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message with <strong>emphasis</strong></p>
      <button>Action</button>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
});
