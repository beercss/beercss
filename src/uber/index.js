import router from "~/shared/router.js";
import layout from "~/uber/layout.vue";
import home from "~/uber/home.vue";

router("/uber", home, layout);
