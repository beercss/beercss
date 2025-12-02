import { queryAll, addClass, on, removeClass, blurActiveElement } from "../utils";

const snackbarTimeouts = new WeakMap<Document | ShadowRoot, ReturnType<typeof setTimeout>>(); // Localized timeout

function onClickSnackbar(e: Event, root: Document | ShadowRoot) { // Added root
  const snackbar = e.currentTarget as Element;
  removeClass(snackbar, "active");

  const timeoutSnackbar = snackbarTimeouts.get(root); // Get timeout for this root
  if (timeoutSnackbar) clearTimeout(timeoutSnackbar);
}

export function updateSnackbar(snackbar: Element, milliseconds: number | undefined, root: Document | ShadowRoot) { // Added root
  blurActiveElement(root); // Pass root

  const activeSnackbars = queryAll(".snackbar.active", root); // Pass root
  for(let i=0; i<activeSnackbars.length; i++) removeClass(activeSnackbars[i], "active");
  addClass(snackbar, "active");
  on(snackbar, "click", (e: Event) => onClickSnackbar(e, root)); // Pass root to handler

  let timeoutSnackbar = snackbarTimeouts.get(root); // Get timeout for this root
  if (timeoutSnackbar) clearTimeout(timeoutSnackbar);

  if (milliseconds === -1) return;

  timeoutSnackbar = setTimeout(() => {
    removeClass(snackbar, "active");
  }, milliseconds ?? 6000);
  snackbarTimeouts.set(root, timeoutSnackbar); // Store timeout for this root
}