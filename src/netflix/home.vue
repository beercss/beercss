<template lang="pug">
#home
  div
    video.responsive(width="100%", height="600", autoplay, loop, muted)
      source(:src="'/dance.mp4'", type="video/mp4")
    .absolute.top.bottom.left.middle-align.small.left-shadow
      .large-padding
        h5.bold Started in 1983
        div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        nav
          button.large.white.black-text 
            i play_arrow
            span &nbsp;Watch
          button.large.border.white-border.white-text
            i info_outline
            span &nbsp;More info
  .large-margin
    .page.right.active
      .large-space
      h5.bold Today's ranking
      .row
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/alok-001.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 1
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/alok-002.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 2
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/vintage-001.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 3
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/vintage-002.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 4
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/radio-001.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 5
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/ocean-001.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 6
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/alok-001.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 7
            .page
              .padding.absolute.left.right.bottom
                nav
                  button.circle.border.small.white-border.white-text
                    i play_arrow
                  button.circle.border.small.white-border.white-text
                    i add
                  button.circle.border.small.white-border.white-text
                    i thumb_up
        .col.s12.m6.l3
          .card.no-padding(@mouseover="showDetails", @mouseout="hideDetails")
            a.wave
              img.responsive(:src="'/alok-002.jpg'")
            button.circle.small.absolute.right.top.margin.black.white-text
              h5.no-margin.center-align 8
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
      .row.no-wrap.scroll
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-002.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/radio-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/ocean-001.jpg'")

      #movies.large-space.page.active
      h5.bold Movies
      .row.no-wrap.scroll
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/alok-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/alok-002.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-002.jpg'")

      #hot.large-space.page.active
      h5.bold Hot
      .row.no-wrap.scroll
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/radio-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/ocean-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/alok-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/alok-002.jpg'")

      #my-list.large-space.page.active
      h5.bold My list
      .row.no-wrap.scroll
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/vintage-002.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/radio-001.jpg'")
        .col
          .card.no-padding.min
            a.wave
              img.responsive(:src="'/ocean-001.jpg'")
</template>

<script>
export default {
  mounted() {},
  data() {
    return;
  },
  methods: {
    showDetails(event) {
      event.currentTarget.querySelector(".page").className =
        "page right active";
    },
    hideDetails(event) {
      event.currentTarget.querySelector(".page").className = "page right";
    },
  },
};
</script>