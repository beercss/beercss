import { type Ref, ref } from "vue";
import { type INetflix } from "./interfaces";
import dataTheme from "../shared/theme";

const data: INetflix = {
  todaysRanking: [
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
  ],
  series: [
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
  ],
  movies: [
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
  ],
  hot: [
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
  ],
  myList: [
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
    { image: "/alok-001.webp" },
    { image: "/alok-002.webp" },
    { image: "/vintage-001.webp" },
    { image: "/vintage-002.webp" },
    { image: "/radio-001.webp" },
    { image: "/ocean-001.webp" },
  ],
  ...dataTheme,
};

const dataAsRef: Ref<INetflix> = ref(data);

export default dataAsRef;
