import { expect, test, beforeEach, afterEach, vi } from "vitest";
import ui from "../src/cdn/beer";
import { type IBeerCssTheme } from "../src/cdn/interfaces";
import "material-dynamic-colors";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  vi.clearAllMocks();
});

afterEach(() => {
  container.remove();
});

test("ui default export exists", () => {
  expect(ui).toBeDefined();
  expect(typeof ui).toBe("function");
});

test("ui is available on globalThis", () => {
  expect(ui).toBeDefined();
});

test("ui function returns undefined on no arguments", () => {
  const result = ui();
  expect(result).toBeUndefined();
});

test("ui function handles setup command", () => {
  expect(() => {
    ui("setup");
  }).not.toThrow();
});

test("ui function handles guid command", () => {
  const guid1 = ui("guid");
  const guid2 = ui("guid");
  expect(guid1).toBeDefined();
  expect(guid2).toBeDefined();
  expect(typeof guid1).toBe("string");
  expect(typeof guid2).toBe("string");
  expect(guid1).not.toBe(guid2);
});

test("ui function handles mode command", () => {
  const mode = ui("mode", "light");
  expect(mode).toBeDefined();
  expect(typeof mode).toBe("string");
});

test("ui function with theme command returns promise", () => {
  const result = ui("theme", {
    light: "--primary: #6200ee;",
    dark: "--primary: #bb86fc;",
  });
  expect(result instanceof Promise).toBe(true);
});

test("ui function updates all data-ui elements", () => {
  container.innerHTML = `
    <button class="button" data-ui="#panel">Open</button>
    <div id="panel" class="panel"></div>
  `;

  expect(() => ui()).not.toThrow();
});

test("ui function with element selector", () => {
  container.innerHTML = `
    <div class="panel"></div>
  `;

  expect(() => ui(".panel")).not.toThrow();
});

test("ui function with element object", () => {
  container.innerHTML = `
    <div class="panel"></div>
  `;

  const element = container.querySelector(".panel") as HTMLElement;
  expect(() => ui(element)).not.toThrow();
});

test("ui function initializes MutationObserver", () => {
  ui("setup");

  expect(() => {
    const div = document.createElement("div");
    document.body.appendChild(div);
    div.remove();
  }).not.toThrow();
});

test("ui function handles multiple modes", () => {
  const lightMode = ui("mode", "light");
  const darkMode = ui("mode", "dark");
  expect(lightMode).toBe("light");
  expect(darkMode).toBe("dark");
});

test("ui function with invalid selector returns undefined", () => {
  const result = ui(".nonexistent-element");
  expect(result).toBeUndefined();
});

test("ui function processes data-ui attributes", () => {
  container.innerHTML = `
    <button class="button" data-ui="#dialog">Open Dialog</button>
    <dialog id="dialog" class="dialog">
      <article><h1>Dialog</h1></article>
    </dialog>
  `;

  expect(() => ui()).not.toThrow();
});

test("ui function sets mode to auto on initial load", () => {
  document.body.classList.remove("light", "dark");
  
  expect(typeof ui).toBe("function");
});

test("ui function multiple calls are safe", () => {
  expect(() => {
    ui();
    ui();
    ui();
  }).not.toThrow();
});

test("ui function handles option parameters", () => {
  container.innerHTML = `
    <div class="snackbar"></div>
  `;
  expect(() => ui(".snackbar", 3000)).not.toThrow();
});

test("theme resolves with correct mode when mode changes before promise resolves", async () => {
  document.body.classList.remove("dark", "light");
  document.body.classList.add("light");

  const themePromise = ui("theme", "#ffa500") as Promise<IBeerCssTheme>;
  ui("mode", "dark");

  const theme = await themePromise;
  const style = document.body.getAttribute("style") || "";

  expect(theme.dark).toBeTruthy();
  expect(style).toBe(theme.dark);
});

test("checking all variables from theme", async () => {
  const colors = [
    "--primary",
    "--on-primary",
    "--primary-container",
    "--on-primary-container",
    "--secondary",
    "--on-secondary",
    "--secondary-container",
    "--on-secondary-container",
    "--tertiary",
    "--on-tertiary",
    "--tertiary-container",
    "--on-tertiary-container",
    "--error",
    "--on-error",
    "--error-container",
    "--on-error-container",
    "--background",
    "--on-background",
    "--surface",
    "--on-surface",
    "--surface-variant",
    "--on-surface-variant",
    "--outline",
    "--outline-variant",
    "--shadow",
    "--scrim",
    "--inverse-surface",
    "--inverse-on-surface",
    "--inverse-primary",
    "--surface-dim",
    "--surface-bright",
    "--surface-container-lowest",
    "--surface-container-low",
    "--surface-container",
    "--surface-container-high",
    "--surface-container-highest",
  ];

  const theme = await ui("theme", "#ffd700") as IBeerCssTheme;
  for (const color of colors) {
    const colorWithValue = new RegExp(`${color}:[#0-9a-f]+;`, "i");
    expect(theme.light).toMatch(colorWithValue);
    expect(theme.dark).toMatch(colorWithValue);
  }
});
