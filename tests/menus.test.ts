import { expect, test, beforeEach, afterEach } from "vitest";
import { updateMenu } from "../src/cdn/elements/menus";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("updateMenu is a function", () => {
  expect(typeof updateMenu).toBe("function");
});

test("updateMenu executes without error", () => {
  expect(() => {
    container.innerHTML = `
      <button class="button">Menu</button>
      <menu>
        <li><a href="#">Option 1</a></li>
      </menu>
    `;
    const button = container.querySelector("button") as HTMLElement;
    const menu = container.querySelector("menu") as HTMLMenuElement;
    updateMenu(button, menu);
  }).not.toThrow();
});

test("updateMenu with basic menu element", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu with active class", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu class="active">
      <li><a href="#">Item 1</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu with input field inside", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li class="field"><input type="text" /></li>
      <li><a href="#">Item</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu with search field", () => {
  container.innerHTML = `
    <button class="button">Search Menu</button>
    <menu>
      <li class="field">
        <input type="search" placeholder="Search..." />
      </li>
      <li><a href="#">Result 1</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu multiple items", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu with multiple menus", () => {
  container.innerHTML = `
    <button class="button">Menu 1</button>
    <menu id="menu1">
      <li><a href="#">Item 1</a></li>
    </menu>
    <button class="button">Menu 2</button>
    <menu id="menu2">
      <li><a href="#">Item 2</a></li>
    </menu>
  `;
  const button1 = container.querySelector("button") as HTMLElement;
  const menu1 = container.querySelector("#menu1") as HTMLMenuElement;
  expect(() => updateMenu(button1, menu1)).not.toThrow();
});

test("updateMenu nested menu structure", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li><a href="#">Item</a></li>
      <li>
        <menu>
          <li><a href="#">Submenu Item</a></li>
        </menu>
      </li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});

test("updateMenu with event parameter", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li><a href="#">Item</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  const mockEvent = new MouseEvent("click", { bubbles: true });
  Object.defineProperty(mockEvent, "target", { value: button, enumerable: true });
  
  expect(() => updateMenu(button, menu, mockEvent)).not.toThrow();
});

test("updateMenu sequential calls", () => {
  container.innerHTML = `
    <button class="button">Menu</button>
    <menu>
      <li><a href="#">Item</a></li>
    </menu>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const menu = container.querySelector("menu") as HTMLMenuElement;
  
  expect(() => {
    updateMenu(button, menu);
    updateMenu(button, menu);
  }).not.toThrow();
});

test("updateMenu with custom classes", () => {
  container.innerHTML = `
    <button class="button custom-trigger">Menu</button>
    <menu class="custom-menu">
      <li><a href="#">Item</a></li>
    </menu>
  `;
  const button = container.querySelector(".custom-trigger") as HTMLElement;
  const menu = container.querySelector(".custom-menu") as HTMLMenuElement;
  expect(() => updateMenu(button, menu)).not.toThrow();
});
