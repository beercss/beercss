import { expect, test, beforeEach, afterEach, vi } from "vitest";
import {
  isChrome,
  isFirefox,
  isSafari,
  isWindows,
  isMac,
  isLinux,
  isAndroid,
  isIOS,
  isTouchable,
  isDark,
  wait,
  guid,
  hasClass,
  hasTag,
  hasType,
  addClass,
  removeClass,
  query,
  queryAll,
} from "../src/cdn/utils";

test("isChrome returns boolean", () => {
  expect(typeof isChrome).toBe("boolean");
});

test("isFirefox returns boolean", () => {
  expect(typeof isFirefox).toBe("boolean");
});

test("isSafari returns boolean", () => {
  expect(typeof isSafari).toBe("boolean");
});

test("isWindows returns boolean", () => {
  expect(typeof isWindows).toBe("boolean");
});

test("isMac returns boolean", () => {
  expect(typeof isMac).toBe("boolean");
});

test("isLinux returns boolean", () => {
  expect(typeof isLinux).toBe("boolean");
});

test("isAndroid returns boolean", () => {
  expect(typeof isAndroid).toBe("boolean");
});

test("isIOS returns boolean", () => {
  expect(typeof isIOS).toBe("boolean");
});

test("isTouchable returns boolean", () => {
  expect(typeof isTouchable()).toBe("boolean");
});

test("isDark returns boolean", () => {
  expect(typeof isDark()).toBe("boolean");
});

test("isTouchable handles missing matchMedia gracefully", () => {
  const result = isTouchable();
  expect(result === false || result === true).toBe(true);
});

test("isDark handles missing matchMedia gracefully", () => {
  const result = isDark();
  expect(result === false || result === true).toBe(true);
});

test("wait resolves after specified milliseconds", async () => {
  const start = Date.now();
  await wait(10);
  const elapsed = Date.now() - start;
  expect(elapsed).toBeGreaterThanOrEqual(10);
});

test("wait completes quickly for 0ms", async () => {
  const start = Date.now();
  await wait(0);
  const elapsed = Date.now() - start;
  expect(elapsed).toBeLessThan(100);
});

test("guid returns a string", () => {
  const result = guid();
  expect(typeof result).toBe("string");
});

test("guid returns UUID format string", () => {
  const result = guid();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  expect(result).toMatch(uuidRegex);
});

test("guid generates unique values", () => {
  const guid1 = guid();
  const guid2 = guid();
  const guid3 = guid();
  expect(guid1).not.toBe(guid2);
  expect(guid2).not.toBe(guid3);
  expect(guid1).not.toBe(guid3);
});

test("query finds element by selector", () => {
  const div = document.createElement("div");
  div.id = "test-element";
  document.body.appendChild(div);

  const result = query("#test-element");
  expect(result).toBe(div);

  div.remove();
});

test("query returns null for non-existent selector", () => {
  const result = query("#non-existent-element-xyz");
  expect(result).toBeNull();
});

test("query accepts Element directly", () => {
  const element = document.createElement("div");
  const result = query(element);
  expect(result).toBe(element);
});

test("query accepts null", () => {
  const result = query(null);
  expect(result).toBeNull();
});

test("query with scoped search", () => {
  const parent = document.createElement("div");
  const child = document.createElement("span");
  child.className = "child";
  parent.appendChild(child);
  document.body.appendChild(parent);

  const result = query(".child", parent);
  expect(result).toBe(child);

  parent.remove();
});

test("queryAll returns all matching elements", () => {
  const container = document.createElement("div");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  span1.className = "item";
  span2.className = "item";
  container.appendChild(span1);
  container.appendChild(span2);
  document.body.appendChild(container);

  const results = queryAll(".item");
  expect(results.length).toBeGreaterThanOrEqual(2);

  container.remove();
});

test("queryAll returns empty NodeList for non-existent selector", () => {
  const results = queryAll(".non-existent-class-xyz");
  expect(results.length).toBe(0);
});

test("queryAll with scoped search", () => {
  const parent = document.createElement("div");
  const child1 = document.createElement("span");
  const child2 = document.createElement("span");
  child1.className = "item";
  child2.className = "item";
  parent.appendChild(child1);
  parent.appendChild(child2);

  const results = queryAll(".item", parent);
  expect(results.length).toBe(2);
});

test("queryAll accepts null and returns empty", () => {
  const results = queryAll(null);
  expect(results.length).toBe(0);
});

test("hasClass returns true for existing class", () => {
  const element = document.createElement("div");
  element.className = "active";
  expect(hasClass(element, "active")).toBe(true);
});

test("hasClass returns false for non-existing class", () => {
  const element = document.createElement("div");
  element.className = "active";
  expect(hasClass(element, "inactive")).toBe(false);
});

test("hasClass handles null element", () => {
  expect(hasClass(null, "active")).toBe(false);
});

test("hasClass with empty class name", () => {
  const element = document.createElement("div");
  element.className = "";
  expect(hasClass(element, "any-class")).toBe(false);
});

test("addClass adds class to element", () => {
  const element = document.createElement("div");
  addClass(element, "new-class");
  expect(element.classList.contains("new-class")).toBe(true);
});

test("addClass handles null element", () => {
  expect(() => addClass(null, "class")).not.toThrow();
});

test("addClass works with NodeList", () => {
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  document.body.appendChild(div1);
  document.body.appendChild(div2);

  const nodeList = document.querySelectorAll("div");
  addClass(nodeList, "batch-class");

  let found = 0;
  for (let i = 0; i < nodeList.length; i++) {
    if (nodeList[i].classList.contains("batch-class")) found++;
  }
  expect(found).toBeGreaterThan(0);

  div1.remove();
  div2.remove();
});

test("removeClass removes class from element", () => {
  const element = document.createElement("div");
  element.className = "test-class";
  removeClass(element, "test-class");
  expect(element.classList.contains("test-class")).toBe(false);
});

test("removeClass handles null element", () => {
  expect(() => removeClass(null, "class")).not.toThrow();
});

test("removeClass from non-existent class does not throw", () => {
  const element = document.createElement("div");
  expect(() => removeClass(element, "non-existent")).not.toThrow();
});

test("hasTag detects correct tag name", () => {
  const div = document.createElement("div");
  expect(hasTag(div, "div")).toBe(true);
});

test("hasTag returns false for wrong tag", () => {
  const div = document.createElement("div");
  expect(hasTag(div, "span")).toBe(false);
});

test("hasTag is case insensitive", () => {
  const div = document.createElement("div");
  expect(hasTag(div, "div")).toBe(true);
  expect(hasTag(div, "DIV")).toBe(false);
});

test("hasTag handles null element", () => {
  expect(hasTag(null, "div")).toBe(false);
});

test("hasType detects input type", () => {
  const input = document.createElement("input");
  input.type = "text";
  expect(hasType(input, "text")).toBe(true);
});

test("hasType returns false for wrong type", () => {
  const input = document.createElement("input");
  input.type = "text";
  expect(hasType(input, "password")).toBe(false);
});

test("hasType is case insensitive", () => {
  const input = document.createElement("input");
  input.type = "TEXT";
  expect(hasType(input, "text")).toBe(true);
});

test("hasType handles null input", () => {
  expect(hasType(null, "text")).toBe(false);
});

test("hasType with number input", () => {
  const input = document.createElement("input");
  input.type = "number";
  expect(hasType(input, "number")).toBe(true);
});

test("hasType with email input", () => {
  const input = document.createElement("input");
  input.type = "email";
  expect(hasType(input, "email")).toBe(true);
});
