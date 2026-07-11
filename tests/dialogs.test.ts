import { expect, test, beforeEach, afterEach, vi } from "vitest";
import { updateDialog } from "../src/cdn/elements/dialogs";

let container: HTMLElement;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  
  if (!HTMLDialogElement.prototype.showModal) HTMLDialogElement.prototype.showModal = vi.fn();
  if (!HTMLDialogElement.prototype.show) HTMLDialogElement.prototype.show = vi.fn();
  if (!HTMLDialogElement.prototype.close) HTMLDialogElement.prototype.close = vi.fn();
});

afterEach(() => {
  container.remove();
});

test("updateDialog is a function", () => {
  expect(typeof updateDialog).toBe("function");
});

test("updateDialog is async", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article><h2>Dialog</h2></article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  const result = updateDialog(button, dialog);
  expect(result instanceof Promise).toBe(true);
});

test("updateDialog with basic dialog element", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article><h2>Title</h2></article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog creates overlay if not present", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article><h2>Dialog</h2></article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await updateDialog(button, dialog);
  const overlay = container.querySelector(".overlay");
  expect(overlay).toBeTruthy();
});

test("updateDialog with modal class", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog modal">
      <article><h2>Modal</h2></article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog with nested content", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article>
        <h2>Title</h2>
        <p>Content</p>
        <footer>
          <button>Cancel</button>
          <button>OK</button>
        </footer>
      </article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog with autofocus element", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article>
        <input autofocus type="text" />
      </article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog with form inside dialog", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article>
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog with chip trigger element", async () => {
  container.innerHTML = `
    <div class="chip">Open</div>
    <dialog class="dialog">
      <article><h2>Dialog</h2></article>
    </dialog>
  `;
  const chip = container.querySelector(".chip") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(chip, dialog)).resolves.toBeUndefined();
});

test("updateDialog multiple calls", async () => {
  container.innerHTML = `
    <button class="button">Open</button>
    <dialog class="dialog">
      <article><h2>Dialog</h2></article>
    </dialog>
  `;
  const button = container.querySelector("button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await updateDialog(button, dialog);
  await updateDialog(button, dialog);
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});

test("updateDialog with custom button element", async () => {
  container.innerHTML = `
    <div class="button">Open</div>
    <dialog class="dialog">
      <article><h2>Dialog</h2></article>
    </dialog>
  `;
  const button = container.querySelector(".button") as HTMLElement;
  const dialog = container.querySelector("dialog") as HTMLDialogElement;
  
  await expect(updateDialog(button, dialog)).resolves.toBeUndefined();
});
