import { expect, test, beforeEach, afterEach } from "vitest";
import { updatePage } from "../src/cdn/elements/pages";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
});

test("updatePage is a function", () => {
  expect(typeof updatePage).toBe("function");
});

test("updatePage executes without error", () => {
  expect(() => {
    container.innerHTML = `<div class="page"><h1>Page</h1></div>`;
    const page = container.querySelector(".page") as HTMLElement;
    updatePage(page);
  }).not.toThrow();
});

test("updatePage with basic page element", () => {
  container.innerHTML = `
    <div class="page">
      <h1>Page Title</h1>
      <p>Page content</p>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with nested sections", () => {
  container.innerHTML = `
    <div class="page">
      <section>
        <h2>Section 1</h2>
        <p>Content</p>
      </section>
      <section>
        <h2>Section 2</h2>
        <p>Content</p>
      </section>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with article content", () => {
  container.innerHTML = `
    <div class="page">
      <article>
        <h1>Article Title</h1>
        <p>Article content</p>
      </article>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with multiple pages", () => {
  container.innerHTML = `
    <div class="page" id="page1">
      <h1>Page 1</h1>
    </div>
    <div class="page" id="page2">
      <h1>Page 2</h1>
    </div>
  `;
  const page1 = container.querySelector("#page1") as HTMLElement;
  const page2 = container.querySelector("#page2") as HTMLElement;
  expect(() => {
    updatePage(page1);
    updatePage(page2);
  }).not.toThrow();
});

test("updatePage with active state", () => {
  container.innerHTML = `
    <div class="page active">
      <h1>Active Page</h1>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with custom classes", () => {
  container.innerHTML = `
    <div class="page custom-page">
      <h1>Custom Page</h1>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with complex structure", () => {
  container.innerHTML = `
    <div class="page">
      <header>
        <h1>Title</h1>
      </header>
      <main>
        <p>Content</p>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage idempotent", () => {
  container.innerHTML = `
    <div class="page">
      <h1>Page</h1>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => {
    updatePage(page);
    updatePage(page);
  }).not.toThrow();
});

test("updatePage with empty page", () => {
  container.innerHTML = `<div class="page"></div>`;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with form elements", () => {
  container.innerHTML = `
    <div class="page">
      <form>
        <input type="text" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});

test("updatePage with data attributes", () => {
  container.innerHTML = `
    <div class="page" data-page-id="123">
      <h1>Page</h1>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
  expect(page.getAttribute("data-page-id")).toBe("123");
});

test("updatePage with list content", () => {
  container.innerHTML = `
    <div class="page">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  `;
  const page = container.querySelector(".page") as HTMLElement;
  expect(() => updatePage(page)).not.toThrow();
});
