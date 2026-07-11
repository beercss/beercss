import { addRoute } from "../shared/router";
import test from "./page.vue";
import mainLayouts from "./mainLayouts.vue";

addRoute("/test/mainLayouts", mainLayouts);
addRoute("/test", test);
