import { type Ref, ref } from "vue";
import domain from "./domain";
import { type IDatePicker } from "./interfaces";

const today = new Date();
const data = domain.getData(today.getFullYear(), today.getMonth());
const dataAsRef: Ref<IDatePicker> = ref<IDatePicker>(data);

export default dataAsRef;
