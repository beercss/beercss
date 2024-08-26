import { addClass, next, prev, hasTag, insertBefore, wait, create,  hasClass, removeClass, on, off, queryAllDataUi } from "../utils";

const _dialogs: Array<HTMLDialogElement> = [];

function onKeydownDialog(e: KeyboardEvent) {
  if (e.key === "Escape") {
    const target = e.target as HTMLDialogElement;
    updateDialog(target, target);
  }
}

function closeDialog(dialog: HTMLDialogElement, overlay: Element) {
  removeClass(queryAllDataUi(dialog.id), "active");
  removeClass(dialog, "active");
  removeClass(overlay, "active");
  dialog.close();

  _dialogs.pop();
  const previousDialog = _dialogs[_dialogs.length - 1];
  previousDialog?.focus();
}

async function openDialog(dialog: HTMLDialogElement, overlay: Element, isModal: boolean, from: Element) {
  if (!hasTag(from, "button") && !hasClass(from, "button") && !hasClass(from, "chip")) addClass(from, "active");
  addClass(overlay, "active");
  addClass(dialog, "active");

  if (isModal) dialog.showModal();
  else dialog.show();
  
  await wait(90);

  if (!isModal) on(dialog, "keydown", onKeydownDialog, false);
  _dialogs.push(dialog);
  dialog.focus();
}

function onClickOverlay(e: Event) {
  const overlay = e.target as Element;
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