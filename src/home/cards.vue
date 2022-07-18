<template lang="pug">
#cards
  .large-space
  h4
    span Cards
    a.chip.circle(@click="domain.showSamples(data, '#cards article', 'Cards', null, 'https://github.com/beercss/beercss/blob/main/docs/CARD.md')")
      i code
  nav.wrap.m.l
    label.radio
      input(
        v-model="data.mediaCard",
        value="1",
        type="radio",
        name="media-cards"
      )
      span images
    label.radio
      input(
        v-model="data.mediaCard",
        value="2",
        type="radio",
        name="media-cards"
      )
      span videos
  .grid(v-if="data.mediaCard == 1")
    .s12.m4.l2
      article.left-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.top-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.right-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.bottom-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.top-round.left-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.bottom-round.right-round
        h5 Title
        p Complementary text
    .s12.m6.l3
      article
        .row
          img.circle.large(:src="'/beer-and-woman.jpg'")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.round
        .row
          img.circle.large(:src="'/beer-and-woman.jpg'")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.border
        .row
          img.circle.large(:src="'/beer-and-woman.jpg'")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.border.round
        .row
          img.circle.large(:src="'/beer-and-woman.jpg'")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.no-padding
        img.responsive.small(:src="'/beer-and-woman.jpg'")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.round
        img.responsive.small.top-round(:src="'/beer-and-woman.jpg'")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.border
        img.responsive.small(:src="'/beer-and-woman.jpg'")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.border.round
        img.responsive.small.top-round(:src="'/beer-and-woman.jpg'")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding
        img.responsive.medium(:src="'/beer-and-woman.jpg'")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.round
        img.responsive.medium(:src="'/beer-and-woman.jpg'")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border
        img.responsive.medium(:src="'/beer-and-woman.jpg'")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border.round
        img.responsive.medium(:src="'/beer-and-woman.jpg'")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.l6
      article.no-padding
        .grid.no-space
          .s6
            img.responsive(:src="'/beer-and-woman.jpg'")
          .s6
            .padding
              h5 Title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              nav
                button.border.round Button
    .s12.l6
      article.no-padding
        .grid.no-space
          .s6
            img.responsive(:src="'/beer-and-woman.jpg'")
            .absolute.top.left.right.padding.top-shadow.white-text
              h5 Title
              p Complementary text
          .s6
            .padding
              h5 Title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              nav
                button.border.round Button
  .grid(v-if="data.mediaCard == 2")
    .s12.m4.l2
      article.left-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.top-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.right-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.bottom-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.top-round.left-round
        h5 Title
        p Complementary text
    .s12.m4.l2
      article.bottom-round.right-round
        h5 Title
        p Complementary text
    .s12.m6.l3
      article
        .row
          .max
            video.circle.large(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.round
        .row
          video.circle.large(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.border
        .row
          video.circle.large(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.border.round
        .row
          video.circle.large(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
          .max
            h5 Title
            p Complementary text
        nav
          button.round Button
    .s12.m6.l3
      article.no-padding
        video.responsive.small(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.round
        video.responsive.small.top-round(
          autoplay,
          loop,
          muted,
          playsinline
        )
          source(:src="'/dance.mp4'", type="video/mp4")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.border
        video.responsive.small(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding.border.round
        video.responsive.small.top-round(
          autoplay,
          loop,
          muted,
          playsinline
        )
          source(:src="'/dance.mp4'", type="video/mp4")
        .padding
          h5 Title
          p Complementary text
          nav
            button.round Button
    .s12.m6.l3
      article.no-padding
        video.responsive.medium(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.round
        video.responsive.medium(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border
        video.responsive.medium(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border.round
        video.responsive.medium(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.l6
      article.no-padding
        .grid.no-space
          .s6
            video.responsive(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
          .s6
            .padding
              h5 Title
              div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              nav
                button.border.round Button
    .s12.l6
      article.no-padding
        .grid.no-space
          .s6
            video.responsive(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
            .absolute.top.left.right.padding.top-shadow.white-text
              h5 Title
              p Complementary text
          .s6
            .padding
              h5 Title
              div Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              nav
                button.border.round Button
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>