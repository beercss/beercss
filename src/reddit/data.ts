import { ref, Ref } from "vue";
import { IReddit } from "./interfaces";
import theme from "../shared/theme";

const data: IReddit = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IReddit> = ref(data);

export default dataAsRef;
