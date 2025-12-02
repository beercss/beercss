import { queryAll, addClass, removeClass, blurActiveElement, onWeak } from "../utils";

const snackbarTimeouts = new WeakMap<Document | ShadowRoot, ReturnType<typeof setTimeout>>(); // Localized timeout

function onClickSnackbar(e: Event, root: Document | ShadowRoot) {
  const snackbar = e.currentTarget as Element;
  removeClass(snackbar, "active");

  const timeoutSnackbar = snackbarTimeouts.get(root); // Get timeout for this root
  if (timeoutSnackbar) clearTimeout(timeoutSnackbar);
}

export function updateSnackbar(snackbar: Element, milliseconds: number | undefined, root: Document | ShadowRoot) {
  blurActiveElement(root);

  const activeSnackbars = queryAll(".snackbar.active", root);
  for(let i=0; i<activeSnackbars.length; i++) removeClass(activeSnackbars[i], "active");
  addClass(snackbar, "active");
  onWeak(snackbar, "click", (e: Event) => onClickSnackbar(e, root));

  let timeoutSnackbar = snackbarTimeouts.get(root); // Get timeout for this root
  if (timeoutSnackbar) clearTimeout(timeoutSnackbar);

  if (milliseconds === -1) return;

  timeoutSnackbar = setTimeout(() => {
    removeClass(snackbar, "active");
  }, milliseconds ?? 6000);
  snackbarTimeouts.set(root, timeoutSnackbar); // Store timeout for this root
}