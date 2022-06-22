<template lang="pug">
main.container(v-show="data.isLoaded")
  .page.right.active
    nav.scroll
      a.chip.active The best of 2020
      a.chip Documentaries
      a.chip Rock and roll
      a.chip Others
    .space
    .row
      .col.s12.m6.l3(v-for="(item, i) in data.itens")
        .card.no-padding.flat.transparent
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .space
          .row.no-wrap.middle-align
            .col.min
              img.small.circle(:src="item.image")
            .col.truncate
              .bold {{ item.title }}
              div 10k views
            .col.min
              button.none(:data-ui="'#dropdown-' + i")
                i more_vert
                .dropdown.left.no-wrap(
                  :id="'dropdown-' + i",
                  :data-ui="'#dropdown-' + i"
                )
                  a Save to library
                  a Watch later
                  a Like it

    .large-divider
    h5 What's hot
    .row.no-wrap.scroll
      .col(v-for="item in data.whatsHot")
        .card.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold {{ item.title }}
                div 10k views
              .col.min
                a
                  i thumb_up

    .large-divider
    h5 Your videos
    .row.no-wrap.scroll
      .col(v-for="item in data.yourVideos")
        .card.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold {{ item.title }}
                div 10k views
              .col.min
                a
                  i thumb_up
</template>

<script setup lang="ts">
import data from "./data";
</script>