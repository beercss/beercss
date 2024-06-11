import { ref, type Ref } from "vue";
import { type IReddit } from "./interfaces";
import theme from "../shared/theme";

const data: IReddit = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IReddit> = ref(data);

export default dataAsRef;
