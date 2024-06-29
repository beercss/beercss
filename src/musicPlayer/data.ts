import { ref, type Ref } from "vue";
import { type IMusicPlayer } from "./interfaces";
import theme from "../shared/theme";

const data: IMusicPlayer = {
  ...theme,
  showPage: false,
  showWallpaper: true,
  title: "Classic Utility Jacket",
  wallpaper: "/classic-utility-jacket.jpg",
  time: 0,
};

const dataAsRef: Ref<IMusicPlayer> = ref(data);

export default dataAsRef;
