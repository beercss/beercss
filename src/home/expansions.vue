<template lang="pug">
#expansions
  .large-space
  h4
    span Expansions
    a.chip.circle(@click="domain.showSamples(data, '#expansions details', null, 'https://github.com/beercss/beercss/blob/main/docs/EXPANSION.md')")
      i code
  details
    summary Title
    p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  .small-space
  article
    details
      summary Title
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  .small-space
  article
    details
      summary.none
        .row.no-wrap.middle-align
          .col
            div Title
            .small-text Complementary text
          .col.min
            i more_vert
      p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  .small-space
  details
    summary.none
      article.border.round.transparent
        .row.no-wrap.middle-align
          .col.min
            img.circle(:src="'/favicon.png'")
          .col
            div Title
            .small-text Complementary text
          .col.min
            i more_vert
      .space
    article.border.round.transparent Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>