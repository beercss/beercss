import { JSDOM } from "jsdom";

const dom = new JSDOM();
global.document = dom.window.document;
global.getComputedStyle = dom.window.getComputedStyle;
global.NodeList = dom.window.NodeList;