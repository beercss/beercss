<template lang="pug">
#progress
  .large-space
  h4
    span Progress
    a.chip.circle(@click="domain.showSamples(data, '#progress .tiny-space, #progress article, #progress nav > button, #progress nav > .chip', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="percent-progress", checked, @click="domain.updateProgress(0)")
      span 0%
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(30)")
      span 30%
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(60)")
      span 60%
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(100)")
      span 100%
    label.radio
      input(type="radio", name="color-progress", checked, @click="domain.updateColor('#progress progress')")
      span default
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateColor('#progress progress', 'light-green')")
      span light-green
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateColor('#progress progress', 'orange')")
      span orange
  .medium-space
  h6 Default
  .medium-space
  .tiny-space.round.fill
    progress
  .space
  .tiny-space.round.fill
    progress(value="0")
  .space
  .tiny-space.round.fill
    progress.right(value="0")
  .medium-space
  h6 Cards
  .grid
    .s12.m6.l3
      article.small
        progress.max(value="0")
        h5 Card
    .s12.m6.l3
      article.small.round
        progress.max.right(value="0")
        h5 Card
    .s12.m6.l3
      article.border.small
        progress.max.top(value="0")
        h5 Card
    .s12.m6.l3
      article.small.border.round
        progress.max.bottom(value="0")
        h5 Card
  .medium-space
  h6 Buttons and Chips
  div
    nav.wrap
      button.border
        progress.max(value="0")
        span Button
      a.chip
        progress.max.right(value="0")
        span Chip
      button.border.circle.extra
        progress.max.top(value="0")
        i home
      button.border.square.extra
        progress.max.bottom(value="0")
        i home
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
