<template lang="pug">
div
  h5 Main layouts
    a.chip.circle(
      @click="data.layout = 0; domain.showSamples(data, '#main-layouts > div', 'Main layouts', null, 'https://github.com/beercss/beercss/blob/main/docs/MAIN_LAYOUT.md')"
    )
      i code
  .row.scroll.top-align.small-padding
    article.no-elevate#main-layout-compact
      .width-8
        article.fill.no-elevate.center-align.middle-align.height-12
        article.fill.no-elevate.top-margin
      h6.no-margin.absolute.middle.center Compact
    article.no-elevate#main-layout-medium
      .medium-width
        .row
          article.fill.no-elevate.height-15
          .max 
            article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Medium
    article.no-elevatemain-layout-extended
      .medium-width
        .row
          article.fill.no-elevate.height-15.width-6
          .max 
            article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Extended
    article.no-elevatemain-layout-muti-panel
      .medium-width
        .row
          article.fill.no-elevate.height-15
          .max
            .row
              .max
                article.fill.no-elevate.center-align.middle-align.height-15
              .max 
                article.fill.no-elevate.center-align.middle-align.height-15
      h6.no-margin.absolute.middle.center Multi panel
    article.no-elevatemain-layout-custom
      .medium-width
        .row
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
    #large
      nav.left.drawer
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
        h3 Extended
    #multi-panel
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
            h3 Panel 1
          .s6
            h3 Panel 2
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
            h3 Panel 1
          .s12.m12.l6
            h3 Panel 2
          .s12.m12.l6
            h3 Panel 3
          .s12.m12.l6
            h3 Panel 4
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
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
