import { ref, Ref } from "vue";
import { IMaterialDesign3 } from "./interfaces";
import theme from "../shared/theme";

const data: IMaterialDesign3 = {
  ...theme,
  showPage: false,
};

const dataAsRef: Ref<IMaterialDesign3> = ref(data);

export default dataAsRef;
