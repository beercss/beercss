<template lang="pug">
.grey10.white-text
  nav.top.top-shadow
    .row.no-wrap.middle-align
      .col
        nav.padding
          a
            img(:src="'/netflix.png'")
          button.none.white-text.s(data-ui="#dropdown-menu")
            i menu
            #dropdown-menu.dropdown.no-wrap(data-ui="#dropdown-menu")
              a.row.no-wrap(@click="scroll('#home')")
                .col.min
                  i home
                .col Home
              a.row.no-wrap(@click="scroll('#series')")
                .col.min
                  i subscriptions
                .col Series
              a.row.no-wrap(@click="scroll('#movies')")
                .col.min
                  i subscriptions
                .col Movies
              a.row.no-wrap(@click="scroll('#hot')")
                .col.min
                  i whatshot
                .col Hot
              a.row.no-wrap(@click="scroll('#my-list')")
                .col.min
                  i video_library
                .col My list
          button.none.white-text.capitalize.m.l(@click="scroll('#home')") Home
          button.none.white-text.capitalize.m.l(@click="scroll('#series')") Series
          button.none.white-text.capitalize.m.l(@click="scroll('#movies')") Movies
          button.none.white-text.capitalize.m.l(@click="scroll('#hot')") Hot
          button.none.white-text.capitalize.m.l(@click="scroll('#my-list')") My list
      .col
        nav.right-align
          button.none.white-text(data-ui="#modal-search")
            i search
          button.none.white-text(data-ui="#dropdown-notifications")
            i notifications
            #dropdown-notifications.dropdown.left.no-wrap(
              data-ui="#dropdown-notifications"
            )
              a.row.no-wrap
                .col.min
                  img.round(:src="'alok-001.jpg'")
                .col 
                  div Alok 01/2021
                  label 10k views
              a.row.no-wrap
                .col.min
                  img.round(:src="'vintage-001.jpg'")
                .col 
                  div The best of 2021
                  label 10k views
              a.row.no-wrap
                .col.min
                  img.round(:src="'ocean-001.jpg'")
                .col 
                  div Alok, Zebra, Iro - Ocean
                  label 10k views
          a(href="/")
            img.circle(:src="'/favicon.png'")
  main
    #modal-search.modal.top.transparent.flat
      .row.no-wrap
        .col.m.l
        .col
          .field.round.suffix.prefix.small.no-margin.white.black-text
            i.fron search
            input(type="text")
            i.front mic
        .col.m.l
    
    home
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import data from "./data";
import sharedDomain from "../shared/domain";
import home from "./home.vue";

const scroll = (selector:string) => {
  let element = document.querySelector(selector);
  if (element) element.scrollIntoView({block: "start", behavior: "smooth"});
}

onMounted(() => {
  sharedDomain.initTheme(data.value);
  ui();
});
</script>