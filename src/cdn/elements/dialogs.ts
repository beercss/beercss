import { addClass, next, prev, hasTag, insertBefore, wait, create,  hasClass, removeClass, on, off, queryAllDataUi, isTouchable } from "../utils";

const _dialogs: Array<HTMLDialogElement> = [];

function onKeydownDialog(e: KeyboardEvent) {
  if (e.key === "Escape") {
    const dialog = e.currentTarget as HTMLDialogElement;
    updateDialog(dialog, dialog);
  }
}

function closeDialog(dialog: HTMLDialogElement, overlay: Element) {
  removeClass(queryAllDataUi(dialog.id), "active");
  removeClass(dialog, "active");
  removeClass(overlay, "active");
  dialog.close();

  _dialogs.pop();
  const previousDialog = _dialogs[_dialogs.length - 1];
  if (previousDialog) previousDialog.focus();
  else if (isTouchable()) document.body.classList.remove("no-scroll");
}

async function openDialog(dialog: HTMLDialogElement, overlay: Element, isModal: boolean, from: Element) {
  const body = document.body;
  if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
  addClass(overlay, "active");
  addClass(dialog, "active");

  if (isModal) dialog.showModal();
  else dialog.show();
  
  await wait(90);

  if (!isModal) on(dialog, "keydown", onKeydownDialog, false);
  _dialogs.push(dialog);
  dialog.focus();
  
  if (isTouchable()) document.body.classList.add("no-scroll");
}

function onClickOverlay(e: Event) {
  const overlay = e.currentTarget as Element;
  const dialog = next(overlay) as HTMLDialogElement;
  if (hasTag(dialog, "dialog")) closeDialog(dialog, overlay);
}

export async function updateDialog(from: Element, dialog: HTMLDialogElement): Promise<void> {
  (document.activeElement as HTMLElement)?.blur();

  let overlay = prev(dialog) as HTMLElement;
  const isActive = hasClass(dialog, "active") || dialog.open;
  const isModal = hasClass(dialog, "modal");

  if (!isModal) off(dialog, "keydown", onKeydownDialog, false);

  if (!hasClass(overlay, "overlay")) {
    overlay = create({ class: "overlay" });
    insertBefore(overlay, dialog);
    await wait(90);
  }

  if (!isModal) on(overlay, "click", onClickOverlay, false);

  if (isActive) closeDialog(dialog, overlay);
  else openDialog(dialog, overlay, isModal, from);
}