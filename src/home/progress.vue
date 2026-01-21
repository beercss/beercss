<template lang="pug">
#progress
  .large-space
  h4(aria-label="progress") Progress
  h5(style="display: none") Empty
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
  #linear-progress
    h6(aria-hidden="true") 
      span Linear
      button.chip.circle(@click="domain.showSamples(data, '#linear-progress progress', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
        i code
    .grid
      .s6.m3.l3
        progress
      .s6.m3.l3
        progress(value="30", max="100")
      .s6.m3.l3
        progress.wavy
      .s6.m3.l3
        progress.wavy(value="30", max="100")
  .large-space
  #circular-progress 
    h6(aria-hidden="true") 
      span Circular
      button.chip.circle(@click="domain.showSamples(data, '#circular-progress progress', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
        i code
    nav.wrap
      progress.circle
      progress.circle(value="30", max="100")
      progress.circle.wavy
      progress.circle.wavy(value="30", max="100")
  .large-space
  #custom-progress
    h6(aria-hidden="true") 
      span Inside other elements
      button.chip.circle(@click="domain.showSamples(data, '#custom-progress > nav > *', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
        i code
    .medium-space
    nav
      article
        progress.max(value="30", max="100")
        h5(aria-hidden="true") Card
      button.chip
        progress.max(value="30", max="100")
        span Chip
      button
        progress.max(value="30", max="100")
        span Button
      .field.border.prefix
        progress.circle
        input(aria-hidden="true")
  .space
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
