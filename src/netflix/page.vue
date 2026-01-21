<template lang="pug">
.white-text
  nav.top.top-shadow.white-text
    img(alt="", :src="'/netflix.png'")
    div
      button.circle.large.transparent.s.m
        i menu
      menu.no-wrap
        li(@click="scroll('#home')")
          i home
          .max Home
        li(@click="scroll('#series')")
          i subscriptions
          .max Series
        li(@click="scroll('#movies')")
          i subscriptions
          .max Movies
        li(@click="scroll('#hot')")
          i whatshot
          .max Hot
        li(@click="scroll('#my-list')")
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
    div
      button.circle.large.transparent.m.l
        i notifications
      menu.left.no-wrap
        li
          img.round(alt="", :src="'alok-001.jpg'")
          .max
            div Alok 01/2021
            label 10k views
        li
          img.round(alt="", :src="'vintage-001.jpg'")
          .max
            div The best of 2021
            label 10k views
        li
          img.round(alt="", :src="'ocean-001.jpg'")
          .max
            div Alok, Zebra, Iro - Ocean
            label 10k views
    button.circle.large.transparent(@click="redirect('/')", aria-label="beer css")
      img.responsive(alt="", :src="'/favicon.png'")
  main
    .overlay
    dialog#dialog-search.top.transparent
      .row
        .max.l
        .max
          .field.round.suffix.prefix.small.no-margin.white.black-text
            i.fron search
            input(type="text", placeholder="Search", aria-label="search")
            i.front mic
        .max.l

    home
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import home from "./home.vue";
import { redirect } from "../shared/router";

function scroll(selector:string) {
  const element = document.querySelector(selector);
  if (element) element.scrollIntoView({ block: "start", behavior: "smooth" });
}

onMounted(() => {
  document.title = "Netflix - Beer CSS";
  ui("mode", "dark");
});
</script>
