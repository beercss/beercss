<template lang="pug">
.grey10.white-text
  nav.top.top-shadow.white-text
    img(:src="'/netflix.png'")
    button.circle.large.transparent.s.m(data-ui="#menu-menu")
      i menu
      menu#menu-menu.no-wrap(data-ui="#menu-menu")
        a.row(@click="scroll('#home')")
          i home
          .max Home
        a.row(@click="scroll('#series')")
          i subscriptions
          .max Series
        a.row(@click="scroll('#movies')")
          i subscriptions
          .max Movies
        a.row(@click="scroll('#hot')")
          i whatshot
          .max Hot
        a.row(@click="scroll('#my-list')")
          i video_library
          .max My list
    button.small-round.large.transparent.l(@click="scroll('#home')") Home
    button.small-round.large.transparent.l(@click="scroll('#series')") Series
    button.small-round.large.transparent.l(@click="scroll('#movies')") Movies
    button.small-round.large.transparent.l(@click="scroll('#hot')") Hot
    button.small-round.large.transparent.l(@click="scroll('#my-list')") My list
    .max
    button.circle.large.transparent(data-ui="#dialog-search")
      i search
    button.circle.large.transparent.m.l(data-ui="#menu-notifications")
      i notifications
      menu#menu-notifications.left.no-wrap(
        data-ui="#menu-notifications"
      )
        a.row
          img.round(:src="'alok-001.jpg'")
          .max
            div Alok 01/2021
            label 10k views
        a.row
          img.round(:src="'vintage-001.jpg'")
          .max
            div The best of 2021
            label 10k views
        a.row
          img.round(:src="'ocean-001.jpg'")
          .max
            div Alok, Zebra, Iro - Ocean
            label 10k views
    button.circle.large.transparent(@click="redirect('/')")
      img.responsive(:src="'/favicon.png'")
  main
    .overlay
    dialog#dialog-search.top.transparent
      .row
        .max.l
        .max
          .field.round.suffix.prefix.small.no-margin.white.black-text
            i.fron search
            input(type="text")
            i.front mic
        .max.l

    home
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import home from "./home.vue";
import { redirect } from "../shared/router";

const scroll = (selector:string) => {
  const element = document.querySelector(selector);
  if (element) element.scrollIntoView({ block: "start", behavior: "smooth" });
};

onMounted(() => {
  document.title = "Netflix - Beer CSS";
});
</script>
