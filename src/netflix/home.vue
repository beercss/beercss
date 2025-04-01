<template lang="pug">
#home
  .large-height
    video.responsive(autoplay, loop, muted, playsinline)
      source(:src="'/dance.mp4'", type="video/mp4")
    .absolute.top.bottom.left.middle-align.small.left-shadow
      .large-padding
        h5.bold Started in 1983
        div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        nav
          button.small-round.large.white.black-text
            i play_arrow
            span Watch
          button.small-round.large.border.white-border.white-text
            i info
            span More info
  div
    .page.right.active
      .large-space
      h5.bold Today's ranking
      .grid
        .s12.m6.l3(v-for="(item, i) in data.todaysRanking")
          article.transparent.no-padding.wave(@mouseover="showDetails", @mouseout="hideDetails")
            img.responsive(:src="item.image")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align {{ i + 1 }}
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
      #series.large-space.page.active
      h5.bold Series
      .row.scroll
        article.transparent.no-padding.wave.small-width(v-for="item in data.series")
          img.responsive(:src="item.image")

      #movies.large-space.page.active
      h5.bold Movies
      .row.scroll
        article.transparent.no-padding.wave.small-width(v-for="item in data.movies")
          img.responsive(:src="item.image")

      #hot.large-space.page.active
      h5.bold Hot
      .row.scroll
        article.transparent.no-padding.wave.small-width(v-for="item in data.hot")
          img.responsive(:src="item.image")

      #my-list.large-space.page.active
      h5.bold My list
      .row.scroll
        article.transparent.no-padding.wave.small-width(v-for="item in data.myList")
          img.responsive(:src="item.image")
</template>

<script setup lang="ts">
import data from "./data";

const showDetails = (event:any) => {
  event.currentTarget.querySelector(".page").className = "page right active";
};

const hideDetails = (event:any) => {
  event.currentTarget.querySelector(".page").className = "page right";
};
</script>
