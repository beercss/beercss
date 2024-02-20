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
        :value="1",
        type="radio",
        name="media-cards"
      )
      span images
    label.radio
      input(
        v-model="data.mediaCard",
        :value="2",
        type="radio",
        name="media-cards"
      )
      span videos
    label.radio
      input(
        v-model="data.mediaCard",
        :value="3",
        type="radio",
        name="media-cards"
      )
      span svgs
    label.radio
      input(type="radio", name="color-cards", @click="domain.updateColorTheme('#cards article')", checked)
      span default
    label.radio
      input(type="radio", name="color-cards", @click="domain.updateColorTheme('#cards article', 'fill')")
      span fill
    label.radio
      input(type="radio", name="color-cards", @click="domain.updateColorTheme('#cards article', 'primary')")
      span primary
    label.radio
      input(type="radio", name="color-cards", @click="domain.updateColorTheme('#cards article', 'secondary')")
      span secondary
    label.radio
      input(type="radio", name="color-cards", @click="domain.updateColorTheme('#cards article', 'tertiary')")
      span tertiary
  .grid
    .s12.m6.l3
      article
        h5 Title
        p Some text here
    .s12.m6.l3
      article.round
        h5 Title
        p Some text here
    .s12.m6.l3
      article.border
        h5 Title
        p Some text here
    .s12.m6.l3
      article.border.round
        h5 Title
        p Some text here
    .s12.m6.l3
      article
        .row
          img.circle.large(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
          video.circle.large(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
            source(:src="'/dance.mp4'", type="video/mp4")
          svgMountains(viewBox="450 0 900 900", className="circle large fill", v-if="data.mediaCard === 3")
          .max
            h5 Title
            p Some text here
        nav
          button Button
    .s12.m6.l3
      article.round
        .row
          img.circle.large(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
          video.circle.large(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
            source(:src="'/dance.mp4'", type="video/mp4")
          svgMountains(viewBox="450 0 900 900", className="circle large fill", v-if="data.mediaCard === 3")
          .max
            h5 Title
            p Some text here
        nav
          button Button
    .s12.m6.l3
      article.border
        .row
          img.circle.large(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
          video.circle.large(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
            source(:src="'/dance.mp4'", type="video/mp4")
          svgMountains(viewBox="450 0 900 900", className="circle large fill", v-if="data.mediaCard === 3")
          .max
            h5 Title
            p Some text here
        nav
          button Button
    .s12.m6.l3
      article.border.round
        .row
          img.circle.large(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
          video.circle.large(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
            source(:src="'/dance.mp4'", type="video/mp4")
          svgMountains(viewBox="450 0 900 900", className="circle large fill", v-if="data.mediaCard === 3")
          .max
            h5 Title
            p Some text here
        nav
          button Button
    .s12.m6.l3
      article.no-padding
        img.responsive.small(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.small(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 400 300 300", className="responsive small fill", v-if="data.mediaCard === 3")
        .padding
          h5 Title
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          nav
            button Button
    .s12.m6.l3
      article.no-padding.round
        img.responsive.small.top-round(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.small.top-round(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 400 300 300", className="responsive small fill", v-if="data.mediaCard === 3")
        .padding
          h5 Title
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          nav
            button Button
    .s12.m6.l3
      article.no-padding.border
        img.responsive.small(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.small(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 400 300 300", className="responsive small fill", v-if="data.mediaCard === 3")
        .padding
          h5 Title
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          nav
            button Button
    .s12.m6.l3
      article.no-padding.border.round
        img.responsive.small.top-round(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.small.top-round(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 400 300 300", className="responsive small fill", v-if="data.mediaCard === 3")
        .padding
          h5 Title
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          nav
            button Button
    .s12.m6.l3
      article.no-padding
        img.responsive.medium(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.medium(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 500 300 300", className="responsive medium fill", v-if="data.mediaCard === 3")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.round
        img.responsive.medium(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.medium(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 500 300 300", className="responsive medium fill", v-if="data.mediaCard === 3")
        .absolute.bottom.left.right.padding.bottom-shadow.bottom-round.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border
        img.responsive.medium(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.medium(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 500 300 300", className="responsive medium fill", v-if="data.mediaCard === 3")
        .absolute.bottom.left.right.padding.bottom-shadow.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.m6.l3
      article.no-padding.border.round
        img.responsive.medium(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
        video.responsive.medium(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
          source(:src="'/dance.mp4'", type="video/mp4")
        svgMountains(viewBox="600 500 300 300", className="responsive medium fill", v-if="data.mediaCard === 3")
        .absolute.bottom.left.right.padding.bottom-shadow.bottom-round.white-text
          nav
            h5 Title
            .max
            button.circle.transparent
              i more_vert
    .s12.l6
      article.no-padding
        .grid.no-space
          .s6
            img.responsive(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
            video.responsive(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
              source(:src="'/dance.mp4'", type="video/mp4")
            svgMountains(viewBox="600 500 300 300", className="responsive fill", v-if="data.mediaCard === 3")
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
            img.responsive(:src="'/beer-and-woman.svg'", v-if="data.mediaCard === 1")
            video.responsive(autoplay, loop, muted, playsinline, v-if="data.mediaCard === 2")
              source(:src="'/dance.mp4'", type="video/mp4")
            svgMountains(viewBox="600 500 300 300", className="responsive fill", v-if="data.mediaCard === 3")
            .absolute.top.left.right.padding.top-shadow.white-text
              h5 Title
              p Some text here
          .s6
            .padding
              h5 Title
              p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              nav
                button.border.round Button
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import svgMountains from "./svgMountains.vue";
</script>
