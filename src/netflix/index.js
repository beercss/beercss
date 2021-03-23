import router from "~/shared/router.js";
import layout from "~/netflix/layout.vue";
import home from "~/netflix/home.vue";

router("/netflix", home, layout);
