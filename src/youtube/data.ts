import { ref, type Ref } from "vue";
import theme from "../shared/theme";
import { type IYoutube } from "./interfaces";

const data: IYoutube = {
  ...theme,
  itens: [
    { title: "Alok 01/2021", image: "/alok-001.jpg" },
    { title: "Alok 01/2020", image: "/alok-002.jpg" },
    { title: "Best of 2021", image: "/vintage-001.jpg" },
    { title: "Best of 2020", image: "/vintage-002.jpg" },
    { title: "Radio online", image: "/radio-001.jpg" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
    { title: "Alok 01/2021", image: "/alok-001.jpg" },
    { title: "Alok 01/2020", image: "/alok-002.jpg" },
  ],
  whatsHot: [
    { title: "Best of 2021", image: "/vintage-001.jpg" },
    { title: "Best of 2020", image: "/vintage-002.jpg" },
    { title: "Radio online", image: "/radio-001.jpg" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
    { title: "Alok 01/2021", image: "/alok-001.jpg" },
    { title: "Alok 01/2020", image: "/alok-002.jpg" },
    { title: "Best of 2021", image: "/vintage-001.jpg" },
    { title: "Best of 2020", image: "/vintage-002.jpg" },
  ],
  yourVideos: [
    { title: "Radio online", image: "/radio-001.jpg" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
    { title: "Alok 01/2021", image: "/alok-001.jpg" },
    { title: "Alok 01/2020", image: "/alok-002.jpg" },
    { title: "Best of 2021", image: "/vintage-001.jpg" },
    { title: "Best of 2020", image: "/vintage-002.jpg" },
    { title: "Radio online", image: "/radio-001.jpg" },
    { title: "Alok, Zebra, Iro - Ocean", image: "/ocean-001.jpg" },
  ],
  isLoaded: false,
  url: "/youtube",
  check: false,
  isMax: true
};

const dataAsRef: Ref<IYoutube> = ref(data);

export default dataAsRef;
