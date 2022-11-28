import { router } from "../shared/router.js";
import youtube from "./page.vue";

router("/youtube", youtube);
router("/youtube/explore", youtube);
router("/youtube/library", youtube);
router("/youtube/subscriptions", youtube);
router("/youtube/whats-hot", youtube);
