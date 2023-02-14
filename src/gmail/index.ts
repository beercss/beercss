import { router } from "../shared/router.js";
import gmail from "./page.vue";

router("/gmail", gmail);
router("/gmail/drafts", gmail);
router("/gmail/important", gmail);
router("/gmail/sent", gmail);
router("/gmail/snoozed", gmail);
router("/gmail/spam", gmail);
