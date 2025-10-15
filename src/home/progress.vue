<template lang="pug">
#progress
  .large-space
  h4 Progress
  nav.wrap
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
  #linear-progress
    h6 
      span Linear
      button.chip.circle(@click="domain.showSamples(data, '#linear-progress progress', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
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
        input(type="radio", name="size-progress", checked, @click="domain.updateSize('#linear-progress progress')")
        span small
      label.radio
        input(type="radio", name="size-progress", @click="domain.updateSize('#linear-progress progress', 'medium')")
        span medium
      label.radio
        input(type="radio", name="size-progress", @click="domain.updateSize('#linear-progress progress', 'large')")
        span large
    .grid
      .s12.m6.l6
        progress
        .space
        progress(value="30", max="100")
      .s12.m6.l6
        progress.wavy
        .space
        progress.wavy(value="30", max="100")
  .large-space
  #circular-progress 
    h6 
      span Circular
      button.chip.circle(@click="domain.showSamples(data, '#circular-progress progress', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
        i code
    nav
      progress.circle.small
      progress.circle
      progress.circle.large
  .large-space
  #custom-progress
    h6 
      span Custom progressbar
      button.chip.circle(@click="domain.showSamples(data, '#custom-progress > nav > *', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
        i code
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
