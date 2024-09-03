import { queryAll, addClass, on, removeClass, blurActiveElement } from "../utils";

let _timeoutSnackbar: ReturnType<typeof setTimeout>;

function onClickSnackbar(e: Event) {
  const snackbar = e.currentTarget as Element;
  removeClass(snackbar, "active");

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
}

export function updateSnackbar(snackbar: Element, milliseconds?: number) {
  blurActiveElement();

  const activeSnackbars = queryAll(".snackbar.active");
  for(let i=0; i<activeSnackbars.length; i++) removeClass(activeSnackbars[i], "active");
  addClass(snackbar, "active");
  on(snackbar, "click", onClickSnackbar);

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);

  if (milliseconds === -1) return;

  _timeoutSnackbar = setTimeout(() => {
    removeClass(snackbar, "active");
  }, milliseconds ?? 6000);
}