import { IHome } from "./interfaces";
import theme from "../shared/theme";
import { Ref, ref } from "vue";

const data:IHome = {
  ...theme,
  indexOfMenu: 1,
  samples: [],
  modalSample: "",
  urlSample: "",
  mediaCard: 1,
  mediaImage: 1,
  layout: 0
}

const dataAsRef:Ref<IHome> = ref(data);

export default dataAsRef;