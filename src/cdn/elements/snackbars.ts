import { queryAll, addClass, on, removeClass } from "../utils";

let _timeoutSnackbar: ReturnType<typeof setTimeout>;

function onClickSnackbar(e: Event) {
  const target = e.currentTarget as Element;
  removeClass(target, "active");

  if (_timeoutSnackbar) clearTimeout(_timeoutSnackbar);
}

export function updateSnackbar(snackbar: Element, milliseconds?: number) {
  (document.activeElement as HTMLElement)?.blur();

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