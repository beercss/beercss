<template lang="pug">
div
  nav.top.center-align.m.l
    button.circle(@click="sharedDomain.updateTheme(data, '#f9bd49')", aria-label="classic utility jacket theme")
      img.responsive(alt="", :src="'/classic-utility-jacket.webp'")
    button.circle(@click="sharedDomain.updateTheme(data, '/kids-jumpsuit.webp')", aria-label="kids jumpsuit theme")
      img.responsive(alt="", :src="'/kids-jumpsuit.webp'")
    button.circle(@click="sharedDomain.updateTheme(data, '/dogtooth-style-jacket.webp')", aria-label="dogtooth style jacket theme")
      img.responsive(alt="", :src="'/dogtooth-style-jacket.webp'")
    button.circle(@click="sharedDomain.updateTheme(data, '/retro-shoe.webp')", aria-label="retro shoe theme")
      img.responsive(alt="", :src="'/retro-shoe.webp'")
    button.circle(@click="sharedDomain.updateTheme(data, '/beach-house-in-collingwood-001.webp')", aria-label="beach house in collingwood theme")
      img.responsive(alt="", :src="'/beach-house-in-collingwood-001.webp'")
    button.circle(@click="sharedDomain.updateMode(data)", aria-label="light/dark theme")
      i {{ data.isDark ? "light_mode" : "dark_mode" }}
    button.circle(@click="reloadAnimation()")
      i refresh
    button.circle.transparent(@click="redirect('/')", aria-label="beer css")
      img.responsive(alt="", :src="'/favicon.png'")

  nav.top.right-align.s
    button.circle(@click="sharedDomain.updateMode(data)")
      i {{ data.isDark ? "light_mode" : "dark_mode" }}
    button.circle(@click="reloadAnimation()")
      i refresh
    button.circle.transparent(@click="redirect('/')", aria-label="beer css")
      img.responsive(alt="", :src="'/favicon.png'")

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
  document.title = "Material Dynamic Colors - Beer CSS";
  await sharedDomain.updateTheme(data.value, "#f9bd49", "dark");
  data.value.showPage = true;
});

const reloadAnimation = async () => {
  data.value.showPage = false;
  await utils.wait(100);
  data.value.showPage = true;
};
</script>
