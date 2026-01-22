<template lang="pug">
main(v-show="data.isLoaded")
  .page.right.active
    nav.group.connected.scroll.fill
      button.left-round.active(data-ui="")
        span The best of 2020
      button.no-round(data-ui="") Documentaries
      button.no-round(data-ui="") Rock and roll
      button.right-round(data-ui="") Others
    .space
    .grid
      .s12.m6.l3(v-for="(item, i) in data.itens")
        .round
          .wave
            img.responsive(alt="", :src="item.image")
            .absolute.right.top.large-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            nav
              .max.truncate
                .bold {{ item.title }}
                div 10k views
              div
                button.circle.transparent
                  i more_vert
                menu.left.no-wrap
                  li Save to library
                  li Watch later
                  li Like it

    hr.large
    h2.h5 What's hot
    .row.scroll
      .border.small-width.small-round(v-for="item in data.whatsHot")
        .wave
          img.responsive(alt="", :src="item.image")
          .absolute.right.top.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
        .padding
          nav
            .max.truncate
              .bold {{ item.title }}
              div 10k views
            button.circle.transparent
              i thumb_up

    hr.large
    h2.h5 Your videos
    .row.scroll
      .border.small-width.small-round(v-for="item in data.yourVideos")
        .wave
          img.responsive(alt="", :src="item.image")
          .absolute.right.top.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
        .padding
          nav
            .max.truncate
              .bold {{ item.title }}
              div 10k views
            button.circle.transparent
              i thumb_up
</template>

<script setup lang="ts">
import data from "./data";
</script>
