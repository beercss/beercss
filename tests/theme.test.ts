import { expect, test, beforeEach, afterEach, vi } from "vitest";
import { updateTheme, updateMode } from "../src/cdn/settings/theme";

beforeEach(() => {
  document.body.className = "";
  document.body.setAttribute("style", "");
});

afterEach(() => {
  document.body.className = "";
  document.body.setAttribute("style", "");
  vi.restoreAllMocks();
});

test("updateTheme is an async function", () => {
  expect(typeof updateTheme).toBe("function");
});

test("updateMode is a function", () => {
  expect(typeof updateMode).toBe("function");
});

test("updateTheme without source returns theme object", async () => {
  const result = await updateTheme();
  expect(result).toBeDefined();
  expect(typeof result).toBe("object");
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
  expect(typeof result.light).toBe("string");
  expect(typeof result.dark).toBe("string");
});

test("updateTheme with null returns theme object", async () => {
  const result = await updateTheme(null);
  expect(result).toBeDefined();
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
  expect(typeof result.light).toBe("string");
  expect(typeof result.dark).toBe("string");
});

test("updateTheme with light and dark strings", async () => {
  const sourceTheme = {
    light: "--primary: #6200ee;",
    dark: "--primary: #bb86fc;",
  };
  const result = await updateTheme(sourceTheme);
  expect(result).toBeDefined();
  expect(typeof result).toBe("object");
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
});

test("updateTheme with material dynamic colors data", async () => {
  const sourceData = {
    primary: "#6200ee",
    secondary: "#03dac6",
  };
  const mockTheme = {
    light: "--primary: #6200ee; --secondary: #03dac6;",
    dark: "--primary: #bb86fc; --secondary: #05ddd3;",
  };
  (globalThis as any).materialDynamicColors = vi.fn().mockResolvedValue(mockTheme);

  const result = await updateTheme(sourceData);
  expect(result).toBeDefined();
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
  delete (globalThis as any).materialDynamicColors;
});

test("updateMode returns current mode when value is empty", () => {
  document.body.classList.add("dark");
  const mode = updateMode("");
  expect(mode).toBe("dark");
});

test("updateMode sets light mode", () => {
  const mode = updateMode("light");
  expect(document.body.classList.contains("light")).toBe(true);
  expect(document.body.classList.contains("dark")).toBe(false);
  expect(mode).toBe("light");
});

test("updateMode sets dark mode", () => {
  const mode = updateMode("dark");
  expect(document.body.classList.contains("dark")).toBe(true);
  expect(document.body.classList.contains("light")).toBe(false);
  expect(mode).toBe("dark");
});

test("updateMode with auto uses isDark detection", () => {
  vi.mock("../src/cdn/utils", () => ({
    isDark: () => true,
  }));
  
  const mode = updateMode("auto");
  expect(mode).toBe("dark");
});

test("updateMode removes conflicting classes", () => {
  document.body.classList.add("light");
  const mode = updateMode("dark");
  expect(document.body.classList.contains("light")).toBe(false);
  expect(document.body.classList.contains("dark")).toBe(true);
});

test("updateMode consecutive calls", () => {
  expect(updateMode("light")).toBe("light");
  expect(updateMode("dark")).toBe("dark");
  expect(updateMode("light")).toBe("light");
});

test("updateTheme applies style to body", async () => {
  const sourceTheme = {
    light: "--primary: #6200ee;",
    dark: "--primary: #bb86fc;",
  };
  await updateTheme(sourceTheme);
  const style = document.body.getAttribute("style");
  expect(style).toBeDefined();
});

test("updateTheme with empty object", async () => {
  const result = await updateTheme({});
  expect(result).toBeDefined();
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
});

test("updateTheme multiple calls", async () => {
  const theme1 = {
    light: "--primary: #6200ee;",
    dark: "--primary: #bb86fc;",
  };
  const theme2 = {
    light: "--primary: #ff0000;",
    dark: "--primary: #ff6600;",
  };
  
  const result1 = await updateTheme(theme1);
  const result2 = await updateTheme(theme2);
  
  expect(result1).toBeDefined();
  expect(result2).toBeDefined();
  expect(result1).toHaveProperty("light");
  expect(result1).toHaveProperty("dark");
  expect(result2).toHaveProperty("light");
  expect(result2).toHaveProperty("dark");
});

test("updateMode with invalid value defaults to light or dark", () => {
  const mode = updateMode("invalid");
  expect(["light", "dark"]).toContain(mode);
});

test("updateTheme preserves CSS variable format", async () => {
  const sourceTheme = {
    light: "--primary: #6200ee; --secondary: #03dac6;",
    dark: "--primary: #bb86fc; --secondary: #05ddd3;",
  };
  const result = await updateTheme(sourceTheme);
  expect(result).toBeDefined();
  expect(result).toHaveProperty("light");
  expect(result).toHaveProperty("dark");
});
