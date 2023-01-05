<template lang="pug">
.grey10.white-text
  nav.top.top-shadow.white-text
    img(:src="'/netflix.png'")
    button.circle.large.transparent.s.m(data-ui="#dropdown-menu")
      i menu
      #dropdown-menu.dropdown.no-wrap(data-ui="#dropdown-menu")
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
    button.large.transparent.l(@click="scroll('#home')") Home
    button.large.transparent.l(@click="scroll('#series')") Series
    button.large.transparent.l(@click="scroll('#movies')") Movies
    button.large.transparent.l(@click="scroll('#hot')") Hot
    button.large.transparent.l(@click="scroll('#my-list')") My list
    .max
    button.circle.large.transparent(data-ui="#modal-search")
      i search
    button.circle.large.transparent.m.l(data-ui="#dropdown-notifications")
      i notifications
      #dropdown-notifications.dropdown.left.no-wrap(
        data-ui="#dropdown-notifications"
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
    #modal-search.modal.top.transparent
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
import data from "./data";
import sharedDomain from "../shared/domain";
import home from "./home.vue";
import { redirect } from "../shared/router";

const scroll = (selector:string) => {
  const element = document.querySelector(selector);
  if (element) element.scrollIntoView({ block: "start", behavior: "smooth" });
};
</script>
