import { ref, type Ref } from "vue";
import { type IUber } from "./interfaces";
import theme from "../shared/theme";

const data: IUber = {
  ...theme,
  from: "",
  to: "",
  street: "Street address, 111",
};

const dataAsRef: Ref<IUber> = ref(data);

export default dataAsRef;
