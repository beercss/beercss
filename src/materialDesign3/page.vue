<template lang="pug">
div
  nav.left.l(:class="{ max: data.isMax}")
    header
      button.circle.extra.transparent(@click="data.isMax = !data.isMax")
        i {{ data.isMax ? "menu_open" : "menu" }}
      button.circle.extra.transparent(@click="redirect('/')")
        img.responsive(:src="'/favicon.png'")
    a
      i
        svg(viewBox="0 0 24 24")
          path(d="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z")
      span Home
    a
      i apps
      span Get started
    a
      i code
      span Develop
    a
      i book
      span Foundations
    a
      i palette
      span Styles
    a
      i add_circle
      span Components
    a
      i pages
      span Blog
    .max
    button.border.circle(@click="sharedDomain.updateMode(data)")
      i.page.bottom.active(v-if="data.isDark") light_mode
      i.page.bottom.active(v-else="") dark_mode

  nav.top.s.m.left-align
    button.circle.transparent
      i menu
    button.circle.transparent
      i
        svg(viewBox="0 0 24 24")
          path(d="M21,12C21,9.97 20.33,8.09 19,6.38V17.63C20.33,15.97 21,14.09 21,12M17.63,19H6.38C7.06,19.55 7.95,20 9.05,20.41C10.14,20.8 11.13,21 12,21C12.88,21 13.86,20.8 14.95,20.41C16.05,20 16.94,19.55 17.63,19M11,17L7,9V17H11M17,9L13,17H17V9M12,14.53L15.75,7H8.25L12,14.53M17.63,5C15.97,3.67 14.09,3 12,3C9.91,3 8.03,3.67 6.38,5H17.63M5,17.63V6.38C3.67,8.09 3,9.97 3,12C3,14.09 3.67,15.97 5,17.63M23,12C23,15.03 21.94,17.63 19.78,19.78C17.63,21.94 15.03,23 12,23C8.97,23 6.38,21.94 4.22,19.78C2.06,17.63 1,15.03 1,12C1,8.97 2.06,6.38 4.22,4.22C6.38,2.06 8.97,1 12,1C15.03,1 17.63,2.06 19.78,4.22C21.94,6.38 23,8.97 23,12Z")
    .large-text.m Material Design 3
    .max
    button.circle.border.primary-text(@click="sharedDomain.updateMode(data)")
      i.page.top.active(v-if="data.isDark") light_mode
      i.page.top.active(v-else) dark_mode
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")
  home
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import home from "./home.vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import { redirect } from "../shared/router";

onMounted(() => {
  document.title = "Material Design 3 - Beer CSS";
  sharedDomain.applyTheme(data.value);
  data.value.showPage = true;
  
  setTimeout(() => {
    return;
    const element = document.getElementById("video") as HTMLVideoElement;
    if (element) element.play();
  }, 3000);
});
</script>
