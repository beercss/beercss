import router from "~/shared/router.js";
import layout from "~/gmail/layout.vue";
import home from "~/gmail/home.vue";
import drafts from "~/gmail/drafts.vue";
import sent from "~/gmail/sent.vue";
import spam from "~/gmail/spam.vue";
import important from "~/gmail/important.vue";
import snoozed from "~/gmail/snoozed.vue";

router("/gmail", home, layout);
router("/gmail/drafts", drafts, layout);
router("/gmail/sent", sent, layout);
router("/gmail/spam", spam, layout);
router("/gmail/important", important, layout);
router("/gmail/snoozed", snoozed, layout);