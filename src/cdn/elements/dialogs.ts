import { addClass, next, prev, hasTag, insertBefore, wait, create,  hasClass, removeClass, on, off, queryAllDataUi, blurActiveElement, query } from "../utils";

const dialogsMap = new WeakMap<Document | ShadowRoot, Array<HTMLDialogElement>>(); // Changed to WeakMap

function getDialogsForRoot(root: Document | ShadowRoot): Array<HTMLDialogElement> {
  if (!dialogsMap.has(root)) {
    dialogsMap.set(root, []);
  }
  return dialogsMap.get(root)!;
}

function onKeydownDialog(e: KeyboardEvent, root: Document | ShadowRoot) { // Added root
  if (e.key === "Escape") {
    const dialog = e.currentTarget as HTMLDialogElement;
    void updateDialog(dialog, dialog, root); // Pass root
  }
}

function focusOnDialogOrElement(dialog: HTMLDialogElement, root: Document | ShadowRoot) { // Added root
  const element = (query("[autofocus]", root, dialog) ?? dialog) as HTMLElement; // Pass root
  element.focus();
}

function closeDialog(dialog: HTMLDialogElement, overlay: Element, root: Document | ShadowRoot) { // Added root
  removeClass(queryAllDataUi(dialog.id, root), "active"); // Pass root
  removeClass(dialog, "active");
  removeClass(overlay, "active");

  dialog.close();
  const dialogs = getDialogsForRoot(root);
  dialogs.pop();

  const previousDialog = dialogs[dialogs.length - 1];
  if (previousDialog) previousDialog.focus();
}

async function openDialog(dialog: HTMLDialogElement, overlay: Element, isModal: boolean, from: Element, root: Document | ShadowRoot) { // Added root
  if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
  addClass(overlay, "active");
  addClass(dialog, "active");

  if (isModal) dialog.showModal();
  else dialog.show();

  await wait(90);

  if (!isModal) on(dialog, "keydown", (e: KeyboardEvent) => onKeydownDialog(e, root), false); // Pass root to handler
  const dialogs = getDialogsForRoot(root);
  dialogs.push(dialog);
  focusOnDialogOrElement(dialog, root); // Pass root
}

function onClickOverlay(e: Event, root: Document | ShadowRoot) { // Added root
  const overlay = e.currentTarget as Element;
  const dialog = next(overlay) as HTMLDialogElement;
  if (hasTag(dialog, "dialog")) closeDialog(dialog, overlay, root); // Pass root
}

export async function updateDialog(from: Element, dialog: HTMLDialogElement, root: Document | ShadowRoot): Promise<void> { // Added root
  blurActiveElement(root); // Pass root

  let overlay = prev(dialog) as HTMLElement;
  const isActive = hasClass(dialog, "active") || dialog.open;
  const isModal = hasClass(dialog, "modal");

  if (!isModal) off(dialog, "keydown", (e: KeyboardEvent) => onKeydownDialog(e, root), false); // Pass root to handler

  if (!hasClass(overlay, "overlay")) {
    overlay = create({ class: "overlay" }, root); // Pass root
    insertBefore(overlay, dialog);
    await wait(90);
  }

  if (!isModal) on(overlay, "click", (e: Event) => onClickOverlay(e, root), false); // Pass root to handler

  if (isActive) closeDialog(dialog, overlay, root); // Pass root
  else void openDialog(dialog, overlay, isModal, from, root); // Pass root
}
