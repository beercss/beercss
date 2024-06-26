import { type Ref, ref } from "vue";
import { type INetflix } from "./interfaces";
import dataTheme from "../shared/theme";

const data: INetflix = {
  todaysRanking: [
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
  ],
  series: [
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
  ],
  movies: [
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
  ],
  hot: [
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
  ],
  myList: [
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
    { image: "/alok-001.jpg" },
    { image: "/alok-002.jpg" },
    { image: "/vintage-001.jpg" },
    { image: "/vintage-002.jpg" },
    { image: "/radio-001.jpg" },
    { image: "/ocean-001.jpg" },
  ],
  ...dataTheme,
};

const dataAsRef: Ref<INetflix> = ref(data);

export default dataAsRef;
