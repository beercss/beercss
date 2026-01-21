<template lang="pug">
#scrolls
  .large-space
  h4
    span Scrolls
    button.chip.circle(@click="domain.showSamples(data, '#scrolls .scroll', 'Scrolls', null, 'https://github.com/beercss/beercss/blob/main/docs/HELPERS.md')")
      i code
  h5(style="display: none") Empty
  .medium-space
  h6.middle-align(aria-hidden="true")
    span Chips
  nav.scroll
    button.chip Suggestion
    button.chip Suggestion
    button.chip.fill Selected
    button.chip.fill Selected
    button.chip Suggestion
    button.chip.fill Selected
    button.chip Suggestion
    button.chip Suggestion
    button.chip Suggestion
    button.chip Suggestion
    button.chip Suggestion
    button.chip Suggestion

  .medium-space
  h6.middle-align(aria-hidden="true")
    span Images
  .row.scroll
    img.small-width.small-height(v-for="i in ['', '', '', '', '', '', '', '', '', '']", alt="", :src="'/favicon.png'", :title="i")
  .medium-space
  h6.middle-align(aria-hidden="true")
    span Cards
  .row.scroll
    article.small-width.border(v-for="i in ['', '', '', '', '', '', '', '', '', '']", :title="i")
      h5(aria-hidden="true") Title {{ i }}
      p Some text here
      .space
      nav
        button Button

</template>
<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
