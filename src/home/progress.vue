<template lang="pug">
#progress
  .large-space
  h4
    span Progress
    button.chip.circle(@click="domain.showSamples(data, '#default-progress progress, #custom-progress article, #custom-progress nav > button, #custom-progress nav > .chip', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(0)")
      span 0%
    label.radio
      input(type="radio", name="percent-progress", checked, @click="domain.updateProgress(30)")
      span 30%
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(60)")
      span 60%
    label.radio
      input(type="radio", name="percent-progress", @click="domain.updateProgress(100)")
      span 100%
    label.radio
      input(type="radio", name="color-progress", checked, @click="domain.updateTextColor('#progress progress')")
      span default
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateTextColor('#progress progress', 'light-green-text')")
      span light-green
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateTextColor('#progress progress', 'orange-text')")
      span orange
  .large-space
  #default-progress
    h6 Linear (default)
    .space
    progress
    .space
    progress(value="30", max="100")
    .medium-space
    h6 Circular
    nav
      progress.circle.small
      progress.circle
      progress.circle.large
  .large-space
  #custom-progress
    h6 Custom progressbar
    .medium-space
    nav
      article
        progress.max(value="30", max="100")
        h5 Card
      button.chip
        progress.max(value="30", max="100")
        span Chip
      button
        progress.max(value="30", max="100")
        span Button
    nav
      article
        progress.max.vertical(value="30", max="100")
        h5 Card
      button.chip
        progress.max.vertical(value="30", max="100")
        span Chip
      button
        progress.max.vertical(value="30", max="100")
        span Button
  .space
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
