import { router } from "../shared/router";
import test from "./page.vue";
import mainLayouts from "./mainLayouts.vue";

router("/test/mainLayouts", mainLayouts);
router("/test", test);
