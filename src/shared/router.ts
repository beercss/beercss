import { App, createApp } from "vue";

let previousRoute = "";
let callbackRoute = (url: string) => {};
const apps: Array<App<Element>> = [];
const eventName = "onRoute";
const listener = () => callbackRoute(page.current);

export const onRoute = (callback: any) => {
  callbackRoute = callback;
  addEventListener(eventName, listener);
};

export const redirect = (path: string) => {
  page.redirect(path);
};

export const router = (url: string, component: any) => {
  page(url, () => {
    const baseRoute = page.current.toLocaleLowerCase().split("/")[1] || "";
    if (baseRoute && previousRoute.includes(baseRoute)) return dispatchEvent(new Event(eventName));

    apps.forEach(x => x.unmount());
    apps.splice(0);

    previousRoute = baseRoute;
    document.body.scrollTop = 0;
    const rootElement = document.getElementById("app");
    if (!rootElement) return;

    const app = createApp(component);
    app.mount(rootElement);
    apps.push(app);
    return dispatchEvent(new Event(eventName));
  });

  page.start();
};
