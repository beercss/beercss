import { ref, type Ref } from "vue";
import { type IMaterialDesign3 } from "./interfaces";
import theme from "../shared/theme";

const data: IMaterialDesign3 = {
  ...theme,
  showPage: false,
  isMax: true,
};

const dataAsRef: Ref<IMaterialDesign3> = ref(data);

export default dataAsRef;
