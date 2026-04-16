import { expect, test } from "vitest";
import type { IBeerCssTheme } from "../src/cdn/interfaces";

test("IBeerCssTheme should have dark property", () => {
  const theme: IBeerCssTheme = {
    dark: "dark-theme",
    light: "light-theme",
  };
  expect(theme.dark).toBeDefined();
});

test("IBeerCssTheme should have light property", () => {
  const theme: IBeerCssTheme = {
    dark: "dark-theme",
    light: "light-theme",
  };
  expect(theme.light).toBeDefined();
});

test("IBeerCssTheme dark property is string", () => {
  const theme: IBeerCssTheme = {
    dark: "#1a1a1a",
    light: "#ffffff",
  };
  expect(typeof theme.dark).toBe("string");
});

test("IBeerCssTheme light property is string", () => {
  const theme: IBeerCssTheme = {
    dark: "#1a1a1a",
    light: "#ffffff",
  };
  expect(typeof theme.light).toBe("string");
});

test("IBeerCssTheme accepts CSS values", () => {
  const theme: IBeerCssTheme = {
    dark: "css-dark-theme-values",
    light: "css-light-theme-values",
  };
  expect(theme.dark.length).toBeGreaterThan(0);
  expect(theme.light.length).toBeGreaterThan(0);
});

test("IBeerCssTheme can be created with different values", () => {
  const theme1: IBeerCssTheme = { dark: "dark1", light: "light1" };
  const theme2: IBeerCssTheme = { dark: "dark2", light: "light2" };
  expect(theme1.dark).not.toBe(theme2.dark);
  expect(theme1.light).not.toBe(theme2.light);
});
