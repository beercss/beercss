import { expect, test } from "vitest";
import { type IBeerCssTheme } from "../src/cdn/interfaces";
import "./globals";
import { init } from "../src/cdn/beer";
import "material-dynamic-colors";

test("checking all variables from theme", async () => {
  const beer = init(); // Initialize for main document
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

  const theme = await beer("theme", "#ffd700") as IBeerCssTheme;
  for (const color of colors) {
    const colorWithValue = new RegExp(`${color}:[#0-9a-f]+;`, "i");
    expect(theme.light).toMatch(colorWithValue);
    expect(theme.dark).toMatch(colorWithValue);
  }
});

// New test case for multi-instance BeerCSS
test("multi-instance BeerCSS for web components", async () => {
  // Define a simple custom element that uses BeerCSS in its shadow DOM
  class TestBeerComponent extends HTMLElement {
    _ui;
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.shadowRoot!.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/beercss@3.12.13/dist/cdn/beer.min.css" rel="stylesheet" />
        <button id="testButton" class="button">Component Button</button>
      `;
      this._ui = init(this.shadowRoot!);
    }
  }
  customElements.define("test-beer-component", TestBeerComponent);

  // Initialize BeerCSS for the main document
  const mainUi = init(document);
  document.body.innerHTML = `
    <button id="mainButton" class="button">Main Button</button>
    <test-beer-component id="myComponent"></test-beer-component>
  `;

  // Ensure initial setup
  mainUi("setup");
  const myComponent = document.getElementById("myComponent") as TestBeerComponent;
  myComponent._ui("setup");

  // Test theme isolation
  // Set main document to dark mode
  mainUi("mode", "dark");
  await new Promise(resolve => setTimeout(resolve, 200)); // Allow mutation observer to kick in

  // Component should not be in dark mode by default unless explicitly set
  // This expects that 'mode' only affects the given root
  const componentHost = myComponent;
  expect(componentHost?.classList.contains("dark")).toBe(false);

  // Set component to light mode
  myComponent._ui("mode", "light");
  await new Promise(resolve => setTimeout(resolve, 200)); // Allow mutation observer to kick in

  expect(componentHost?.classList.contains("light")).toBe(true);
  // Main document should still be in dark mode
  expect(document.body.classList.contains("dark")).toBe(true);

  // Test functionality isolation (e.g., button click behavior if BeerCSS managed it)
  // This part is more conceptual as BeerCSS doesn't have complex JS button behavior directly
  // But we can check if `ui("setup")` correctly applies classes within its scope

  // Add more specific checks for component behavior if needed, e.g., if a dialog opens only in component
});
