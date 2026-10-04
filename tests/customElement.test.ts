import { expect, test } from "vitest";
import BeerCssCustomElement from "../src/cdn/customElement";

test("BeerCssCustomElement is defined", () => {
  expect(BeerCssCustomElement).toBeDefined();
  expect(customElements.get("beer-css")).toBeDefined();
});
