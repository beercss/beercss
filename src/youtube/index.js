import router from "~/shared/router.js";
import layout from "~/youtube/layout.vue";
import home from "~/youtube/home.vue";
import whatsHot from "~/youtube/whatsHot.vue";
import subscriptions from "~/youtube/subscriptions.vue";
import library from "~/youtube/library.vue";
import explore from "~/youtube/explore.vue";

router("/youtube", home, layout);
router("/youtube/whats-hot", whatsHot, layout);
router("/youtube/subscriptions", subscriptions, layout);
router("/youtube/library", library, layout);
router("/youtube/explore", explore, layout);
