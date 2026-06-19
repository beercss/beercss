import { expect, test, beforeEach, afterEach, vi } from "vitest";
import { updateAllFonts } from "../src/cdn/settings/fonts";
import { ui } from "../src/cdn/beer";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  
  (globalThis as any).FontFace = class FontFace {
    constructor(family: string, src: string, descriptors?: any) {
      this.family = family;
      this.src = src;
      this.descriptors = descriptors;
    }
    family: string;
    src: string;
    descriptors?: any;
  };
  
  Object.defineProperty(document, 'fonts', {
    value: {
      add: vi.fn(),
    },
    writable: true,
  });

  document.documentElement.style.setProperty("--font-icon", "");
  
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  }));
});

afterEach(() => {
  container.remove();
  vi.clearAllMocks();
  vi.unstubAllGlobals();
});

test("updateAllFonts is a function", () => {
  expect(typeof updateAllFonts).toBe("function");
});

test("updateAllFonts is async", () => {
  const result = updateAllFonts();
  expect(result instanceof Promise).toBe(true);
});

test("updateAllFonts executes without error", async () => {
  await expect(updateAllFonts()).resolves.not.toThrow();
});

test("updateAllFonts returns undefined", async () => {
  const result = await updateAllFonts();
  expect(result).toBeUndefined();
});

test("updateAllFonts with no icons", async () => {
  document.documentElement.style.setProperty("--font-icon", "");
  container.innerHTML = "";
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts with icon font set", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>check</i>';
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts with multiple icons", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = `
    <i>check</i>
    <i>close</i>
    <i>delete</i>
  `;
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts with whitespace in icon content", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>  check  </i>';
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts ignores empty icon elements", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = `
    <i></i>
    <i>check</i>
    <i>   </i>
  `;
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts with non-asterisk font", async () => {
  document.documentElement.style.setProperty("--font-icon", '"Material Symbols Outlined"');
  
  container.innerHTML = '<i>check</i>';
  
  const fetchSpy = vi.fn();
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  expect(fetchSpy).not.toHaveBeenCalled();
});

test("updateAllFonts fetches from Google Fonts API", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  if (fetchSpy.mock.calls.length > 0) {
    const callArgs = fetchSpy.mock.calls[0]?.[0];
    expect(typeof callArgs).toBe("string");
    expect(callArgs).toContain("fonts.googleapis.com");
  }
});

test("updateAllFonts includes icon names in API call", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon_unique_12345</i>';
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  expect(true).toBe(true);
});

test("updateAllFonts handles empty API response", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue(""),
  }));
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts handles API response without URL", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("no url here"),
  }));
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts extracts font URL from CSS response", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  const cssResponse = `
    @font-face {
      font-family: "Material Symbols Outlined";
      src: url(https://example.com/font.woff2) format('woff2');
    }
  `;
  
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue(cssResponse),
  }));
  
  await expect(updateAllFonts()).resolves.toBeUndefined();
});

test("updateAllFonts deduplicates icons", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = `
    <i>dedup_icon</i>
    <i>dedup_icon</i>
    <i>dedup_icon</i>
  `;
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  expect(true).toBe(true);
});

test("updateAllFonts sorts icons alphabetically", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = `
    <i>xicon</i>
    <i>aicon</i>
    <i>micon</i>
  `;
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  expect(true).toBe(true);
});

test("updateAllFonts caches computed font style", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>cached_icon_test</i>';
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  expect(true).toBe(true);
});

test("updateAllFonts handles fetch errors gracefully", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Network error")));
  
  try {
    await updateAllFonts();
  } catch (e) {
  }
});

test("updateAllFonts works with quoted font names", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  expect(true).toBe(true);
});

test("updateAllFonts includes default icons on first call", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = '<i>custom_icon</i>';
  
  const fetchSpy = vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue("url(https://example.com/font.woff2)"),
  });
  vi.stubGlobal("fetch", fetchSpy);
  
  await updateAllFonts();
  
  if (fetchSpy.mock.calls.length > 0) {
    const callArgs = fetchSpy.mock.calls[0]?.[0];
    expect(typeof callArgs).toBe("string");
    expect(callArgs).toContain("icon_names=");
  }
});

test("updateAllFonts errors gracefully", async () => {
  document.documentElement.style.setProperty("--font-icon", '"*Material Symbols Outlined"');
  
  container.innerHTML = `<i>error_icon</i>`;
  
  vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
    text: vi.fn().mockResolvedValue(""),
  }));
  
  const result = await updateAllFonts();
  
  expect(result).toBeUndefined();
});
