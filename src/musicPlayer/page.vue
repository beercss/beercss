<template lang="pug">
.top-shadow
  link(rel="preload", as="image", href="/classic-utility-jacket.jpg")
  link(rel="preload", as="image", href="/kids-jumpsuit.jpg")
  link(rel="preload", as="image", href="/dogtooth-style-jacket.jpg")
  link(rel="preload", as="image", href="/retro-shoe.jpg")
  header.absolute.top.left.right.white-text.top-shadow.front(v-show="data.showPage")
    nav
      .max
      button.circle.transparent(@click="sharedDomain.updateMode(data)")
        i {{ data.isDark ? "light_mode" : "dark_mode" }}
      button.circle.transparent(@click="reloadAnimation()")
        i refresh
      button.circle.transparent(@click="redirect('/')", aria-label="beer css")
        img.responsive(alt="", :src="'/favicon.png'")

  .fixed.top.right.bottom.left.back.no-events
    img.responsive.page.active.bottom(v-show="data.showWallpaper", alt="", :src="data.wallpaper")
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
  await sharedDomain.updateTheme(data.value, "#f9bd49", "dark");
  data.value.wallpaper = "/classic-utility-jacket.jpg";
  data.value.title = "Classic utility jacket";
  data.value.time = 50;
  data.value.showPage = true;

  window.addEventListener("resize", async () => await ui());
});

async function reloadAnimation() {
  data.value.showPage = false;
  await utils.wait(100);
  data.value.showPage = true;
}
</script>

<style scoped>
.no-events {
  pointer-events: none;
}
</style>