<template lang="pug">
div
  h5 Main layouts
    button.chip.circle(
      @click="domain.showSamples(data, '#main-layouts > div', 'Main layouts', '#dialog-main-layouts', null, true)"
    )
      i code
  .grid
    article#main-layout-compact.s12.m6.l4.center-align.no-elevate.no-margin
      .width-8.auto-margin
        article.fill.no-elevate.center-align.middle-align.height-12
        article.fill.no-elevate.top-margin
      h6.no-margin.absolute.middle.center Compact
    article#main-layout-medium.s12.m6.l4.center-align.no-elevate.no-margin
      .medium-width
        .row(dir="ltr")
          article.fill.no-elevate.height-15
          .max
            article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Medium
    article#main-layout-expanded.s12.m6.l4.center-align.no-elevate.no-margin
      .medium-width
        .row(dir="ltr")
          article.fill.no-elevate.height-15.width-6
          .max
            article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Expanded
    article#main-layout-muti-panes.s12.m6.l4.center-align.no-elevate.no-margin
      .medium-width
        .row(dir="ltr")
          article.fill.no-elevate.height-15
          .max
            .row
              .max
                article.fill.no-elevate.center-align.middle-align.height-15
              .max
                article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Multi panes
    article#main-layout-custom.s12.m6.l4.center-align.no-elevate.no-margin
      .medium-width
        .row(dir="ltr")
          article.fill.no-elevate.height-15
          .max
            .grid
              .s6
                article.fill.no-elevate.center-align.middle-align.height-7
              .s6
                article.fill.no-elevate.center-align.middle-align.height-7
              .s6
                article.fill.no-elevate.center-align.middle-align.height-7
              .s6
                article.fill.no-elevate.center-align.middle-align.height-7
      h6.no-margin.absolute.middle.center Custom
  #main-layouts
    #compact
      nav.bottom
        a
          i home
          div Home
        a
          i search
          div Search
        a
          i share
          div share
      main.responsive
        h3 Compact
    #medium
      nav.left
        a
          i home
          div Home
        a
          i search
          div Search
        a
          i share
          div share
      main.responsive
        h3 Medium
    #expanded
      nav.left.max
        a
          i home
          div Home
        a
          i search
          div Search
        a
          i share
          div share
      main.responsive
        h3 Expanded
    #multi-panes
      nav.left
        a
          i home
          div Home
        a
          i search
          div Search
        a
          i share
          div share
      main.responsive
        .grid
          .s6
            h3 Pane 1
          .s6
            h3 Pane 2
    #custom
      nav.left
        a
          i home
          div Home
        a
          i search
          div Search
        a
          i share
          div share
      main.responsive
        .grid
          .s12.m12.l6
            h3 Pane 1
          .s12.m12.l6
            h3 Pane 2
          .s12.m12.l6
            h3 Pane 3
          .s12.m12.l6
            h3 Pane 4
  .overlay
  dialog#dialog-main-layouts.right.large
    header.fixed
      nav
        h5 Main layouts
        a.button.border.small-round.m.l(
          href="https://codepen.io/leo-bnu/pen/yLKLPxj",
          target="_blank"
        ) Codepen
        a.button.border.small-round.m.l(
          href="https://github.com/beercss/beercss/blob/main/docs/MAIN_LAYOUT.md",
          target="_blank"
        ) Documentation
        .max
        a.button.circle.transparent.s(
          href="https://github.com/beercss/beercss/blob/main/docs/MAIN_LAYOUT.md",
          target="_blank"
        )
          i description
        button.circle.transparent(data-ui="#dialog-main-layouts")
          i close
    .space
    article.border(v-for="(exemplo, i) in data.samples")
      h6 {{ layoutNames[i] }}
      pre.scroll
        code(v-html="exemplo.sourceCode")
    .space

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import { ref } from "vue";

const layoutNames = ref(["Compact", "Medium", "Expanded", "Multi panes", "Custom"]);
</script>

<style scoped>
  #main-layouts {
    display: none;
  }

  .height-15 {
    height: 15rem;
  }

  .height-12 {
    height: 12rem;
  }

  .height-7 {
    height: 7rem;
  }

  .width-8 {
    width: 8rem;
  }

  .width-6 {
    width: 6rem;
  }
</style>
