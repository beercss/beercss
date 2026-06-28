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

test("initial call with -1 and click (covers falsy _timeoutSnackbar)", () => {
  container.innerHTML = `<div class="snackbar"></div>`;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;

  // First call to updateSnackbar in the suite (if we are lucky with order)
  updateSnackbar(snackbar, -1);
  expect(snackbar.classList.contains("active")).toBe(true);

  snackbar.click();
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("updateSnackbar adds 'active' class and removes it from others", () => {
  container.innerHTML = `
    <div class="snackbar" id="s1"></div>
    <div class="snackbar" id="s2"></div>
  `;
  const s1 = container.querySelector("#s1") as HTMLElement;
  const s2 = container.querySelector("#s2") as HTMLElement;

  updateSnackbar(s1);
  expect(s1.classList.contains("active")).toBe(true);
  expect(s2.classList.contains("active")).toBe(false);

  updateSnackbar(s2);
  expect(s1.classList.contains("active")).toBe(false);
  expect(s2.classList.contains("active")).toBe(true);
});

test("updateSnackbar removes 'active' from multiple snackbars", () => {
  container.innerHTML = `
    <div class="snackbar active" id="s1"></div>
    <div class="snackbar active" id="s2"></div>
    <div class="snackbar" id="s3"></div>
  `;
  const s1 = container.querySelector("#s1") as HTMLElement;
  const s2 = container.querySelector("#s2") as HTMLElement;
  const s3 = container.querySelector("#s3") as HTMLElement;

  updateSnackbar(s3);
  expect(s1.classList.contains("active")).toBe(false);
  expect(s2.classList.contains("active")).toBe(false);
  expect(s3.classList.contains("active")).toBe(true);
});

test("clicking snackbar removes 'active' class and clears timeout", () => {
  container.innerHTML = `<div class="snackbar"></div>`;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;

  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);

  snackbar.click();
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("snackbar disappears after default timeout (6000ms)", () => {
  container.innerHTML = `<div class="snackbar"></div>`;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;

  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(5999);
  expect(snackbar.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(1);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("snackbar disappears after custom timeout", () => {
  container.innerHTML = `<div class="snackbar"></div>`;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;

  updateSnackbar(snackbar, 3000);
  expect(snackbar.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(2999);
  expect(snackbar.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(1);
  expect(snackbar.classList.contains("active")).toBe(false);
});

test("snackbar stays active with -1 timeout", () => {
  container.innerHTML = `<div class="snackbar"></div>`;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;

  updateSnackbar(snackbar, -1);
  expect(snackbar.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(10000);
  expect(snackbar.classList.contains("active")).toBe(true);
});

test("subsequent updateSnackbar calls clear previous timeout", () => {
  container.innerHTML = `
    <div class="snackbar" id="s1"></div>
    <div class="snackbar" id="s2"></div>
  `;
  const s1 = container.querySelector("#s1") as HTMLElement;
  const s2 = container.querySelector("#s2") as HTMLElement;

  updateSnackbar(s1, 1000);
  vi.advanceTimersByTime(500);
  expect(s1.classList.contains("active")).toBe(true);

  updateSnackbar(s2, 1000);
  expect(s1.classList.contains("active")).toBe(false);
  expect(s2.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(600); // Past s1's original timeout
  expect(s2.classList.contains("active")).toBe(true);

  vi.advanceTimersByTime(400); // Past s2's timeout
  expect(s2.classList.contains("active")).toBe(false);
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

test("updateSnackbar with close button", () => {
  container.innerHTML = `
    <div class="snackbar">
      <p>Message</p>
      <button class="close">×</button>
    </div>
  `;
  const snackbar = container.querySelector(".snackbar") as HTMLElement;
  updateSnackbar(snackbar);
  expect(snackbar.classList.contains("active")).toBe(true);
});
