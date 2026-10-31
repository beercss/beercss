import { addRoute } from "../shared/router.js";
import youtube from "./page.vue";

addRoute("/youtube", youtube);
addRoute("/youtube/explore", youtube);
addRoute("/youtube/library", youtube);
addRoute("/youtube/subscriptions", youtube);
addRoute("/youtube/whats-hot", youtube);
