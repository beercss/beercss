import { type App, createApp, type Component } from "vue";

let currentPath = "";
let currentBasePath = "";
let callbackRoute = (path: string) => {};
const routes:any = {};
const apps: Array<App<Element>> = [];
const listener = () => { callbackRoute(currentPath); };

const router = () => {
  currentPath = window.location.pathname.toLowerCase();
  const basePath = currentPath.split("/")[1] || "";
  if (basePath && currentBasePath === basePath) return dispatchEvent(new Event("onRoute"));

  apps.forEach(x => { x.unmount(); });
  apps.splice(0);

  currentBasePath = basePath;
  document.body.scrollTop = 0;
  const rootElement = document.getElementById("app");
  if (!rootElement) return;

  const app = createApp(routes[window.location.pathname]);
  app.mount(rootElement);
  apps.push(app);
  return dispatchEvent(new Event("onRoute"));
}

const onClickDocument = (event: MouseEvent) => {
  const element = event.composedPath().find((x: any) => x.getAttribute && x.getAttribute("href")?.startsWith("/")) as HTMLAnchorElement;
  if (element) {
    event.preventDefault();
    redirect(element.href);
  }
}

export const addRoute = (path: string, component: Component<any>) => {
  routes[path] = component;
}

export const onRoute = (callback: any) => {
  callbackRoute = callback;
  addEventListener("onRoute", listener);
}

export const redirect = (path: string) => {
  window.history.pushState({}, "", path);
  router();
}

window.addEventListener('popstate', router);
document.addEventListener('DOMContentLoaded', router);
document.addEventListener('click', onClickDocument);
