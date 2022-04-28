import { Ref, ref } from "vue";
import { IGmail } from "./interfaces";
import theme from "../shared/theme";

let drafts = [];
while (drafts.length < 1)
  drafts.push({ check: false, star: false });

let inbox = [];
while (inbox.length < 30)
  inbox.push({ check: false, star: false });

let sent = [];
while (sent.length < 5)
  sent.push({ check: false, star: false });

const data:IGmail = {
  ...theme,
  drafts,
  inbox,
  sent,
  important: [],
  snoozed: [],
  spam: [],
  emails: [],
  check: false,
  url: "/gmail"
}

const dataAsRef:Ref<IGmail> = ref(data);

export default dataAsRef;