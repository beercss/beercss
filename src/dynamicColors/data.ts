import { ref, type Ref } from "vue";
import { type IDynamicColors } from "./interfaces";
import theme from "../shared/theme";

const data: IDynamicColors = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IDynamicColors> = ref(data);

export default dataAsRef;
