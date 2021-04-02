<template lang="pug">
.container
  .page.right.active
    nav.scroll
      a.chip.active.wave The best of 2020
      a.chip.wave Documentaries
      a.chip.wave Rock and roll
      a.chip.wave Others
    .space
    .row
      .col.s12.m6.l3(v-for="(item, i) in itens")
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
              .grey-text 10k views
            .col.min
              button.none.grey-text(:data-ui="'#dropdown-' + i")
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
      .col(v-for="item in whatsHot")
        .card.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold {{ item.title }}
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up

    .large-divider
    h5 Your videos
    .row.no-wrap.scroll
      .col(v-for="item in yourVideos")
        .card.no-padding.border.transparent.small-width
          a.wave
            img.responsive(:src="item.image")
            .absolute.right.bottom.small-margin.black.white-text.small-text &nbsp;00:00:00&nbsp;
          .padding
            .row.no-wrap.middle-align
              .col.truncate
                .bold {{ item.title }}
                .grey-text 10k views
              .col.min
                a.grey-text
                  i thumb_up
</template>

<script>
import domain from "./domain";
export default {
  mixins: [domain],
};
</script>