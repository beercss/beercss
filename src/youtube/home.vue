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
        article.no-padding.transparent
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .small-padding
            nav
              .max.truncate
                .bold {{ item.title }}
                div 10k views
              button.circle.transparent(:data-ui="'#menu-' + i")
                i more_vert
                menu.left.no-wrap(
                  :id="'menu-' + i",
                  :data-ui="'#menu-' + i"
                )
                  li Save to library
                  li Watch later
                  li Like it

    hr.large
    h5 What's hot
    .row.scroll
      .min(v-for="item in data.whatsHot")
        article.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            nav
              .max.truncate
                .bold {{ item.title }}
                div 10k views
              button.circle.transparent
                i thumb_up

    hr.large
    h5 Your videos
    .row.scroll
      .min(v-for="item in data.yourVideos")
        article.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
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
