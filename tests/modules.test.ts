import { beforeAll, expect, test, vi } from "vitest";
import {
  importModulesFromUrl
} from "../src/cdn/modules";

let fetchSpy: ReturnType<typeof vi.spyOn>;

beforeAll(() => {
  fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({text: async () => "" } as Response);
});

test("importModulesFromUrl is defined", () => {
  expect(typeof importModulesFromUrl).toBe("function");
});

test("importModulesFromUrl can be called without error", async () => {
  await importModulesFromUrl("http://example.com");
  await importModulesFromUrl("");
  expect(fetchSpy).not.toHaveBeenCalled();
});

test("importModulesFromUrl loads all styles from url", async () => {
  await importModulesFromUrl("http://example.com?elements=badge,button&helpers=form");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/global.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/light.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/dark.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/font.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/elements/badge.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/elements/button.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/helpers/form.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/reset.css");
  expect(fetchSpy).toHaveBeenCalledWith("http://example.com/settings/theme.css");
});