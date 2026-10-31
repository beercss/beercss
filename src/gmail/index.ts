import { addRoute } from "../shared/router.js";
import gmail from "./page.vue";

addRoute("/gmail", gmail);
addRoute("/gmail/drafts", gmail);
addRoute("/gmail/important", gmail);
addRoute("/gmail/sent", gmail);
addRoute("/gmail/snoozed", gmail);
addRoute("/gmail/spam", gmail);
