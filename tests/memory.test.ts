import { expect, it, describe, vi, beforeEach } from "vitest";
import { ui } from "../src/cdn/beer";

describe("memory", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    vi.restoreAllMocks();
    vi.useFakeTimers();
    if (!HTMLDialogElement.prototype.showModal) HTMLDialogElement.prototype.showModal = vi.fn();
    if (!HTMLDialogElement.prototype.show) HTMLDialogElement.prototype.show = vi.fn();
    if (!HTMLDialogElement.prototype.close) HTMLDialogElement.prototype.close = vi.fn();

    vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => cb(0));
  });

  it("should not accumulate event listeners on document.body when calling ui() multiple times", () => {
    const addEventListenerSpy = vi.spyOn(document.body, "addEventListener");

    // Initial call
    ui();
    const initialCallCount = addEventListenerSpy.mock.calls.length;

    // Subsequent calls
    ui();
    ui();
    ui();

    expect(addEventListenerSpy.mock.calls.length).toBe(initialCallCount);
  });

  it("should handle dialog references correctly", async () => {
    document.body.innerHTML = `
      <button id="btn1" data-ui="#dialog1">Open 1</button>
      <dialog id="dialog1" class="modal">Dialog 1</dialog>
      <button id="btn2" data-ui="#dialog2">Open 2</button>
      <dialog id="dialog2" class="modal">Dialog 2</dialog>
    `;

    const dialog1 = document.getElementById("dialog1") as HTMLDialogElement;
    const dialog2 = document.getElementById("dialog2") as HTMLDialogElement;

    // Open dialog 1
    ui("#dialog1");
    await vi.runAllTimersAsync();
    expect(dialog1.classList.contains("active")).toBe(true);

    // Open dialog 2
    ui("#dialog2");
    await vi.runAllTimersAsync();
    expect(dialog2.classList.contains("active")).toBe(true);

    // Close dialog 1 first (out of order if using pop())
    ui("#dialog1");
    await vi.runAllTimersAsync();
    expect(dialog1.classList.contains("active")).toBe(false);
    expect(dialog2.classList.contains("active")).toBe(true);

    // Close dialog 2
    ui("#dialog2");
    await vi.runAllTimersAsync();
    expect(dialog2.classList.contains("active")).toBe(false);
  });
});
