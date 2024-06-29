<template lang="pug">
.top-shadow
  header.fixed.padding.white-text.top-shadow(v-show="data.showPage")
    nav
      .max
        .s
          h6.bold.page.active.right.s {{ data.title }}
        .m.l
          h2.bold.page.active.right {{ data.title }}
      button.circle.transparent(@click="sharedDomain.updateMode(data)")
        i {{ data.isDark ? "light_mode" : "dark_mode" }}
      button.circle.transparent(@click="reloadAnimation()")
        i refresh
      button.circle.transparent(@click="redirect('/')")
        img.responsive(:src="'/favicon.png'")

  .fixed.top.right.bottom.left.back
    img.responsive.page.active.bottom(:src="data.wallpaper", v-show="data.showWallpaper")
  home(v-show="data.showPage")
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import home from "./home.vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import { redirect } from "../shared/router";
import utils from "../shared/utils";

onMounted(async () => {
  document.title = "Music Player - Beer CSS";
  sharedDomain.updateTheme(data.value, "#f9bd49", "dark");
  data.value.wallpaper = "/classic-utility-jacket.jpg";
  data.value.title = "Classic utility jacket";
  data.value.showPage = true;
});

async function reloadAnimation() {
  data.value.showPage = false;
  await utils.wait(100);
  data.value.showPage = true;
}
</script>
