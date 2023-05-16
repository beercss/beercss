<template lang="pug">
#progress
  .large-space
  h4
    span Progress
    a.chip.circle(@click="domain.showSamples(data, '#progress .small-space, #progress article, #progress nav > button, #progress nav > .chip', 'Progress', null, 'https://github.com/beercss/beercss/blob/main/docs/PROGRESS.md')")
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
      input(type="radio", name="color-progress", checked, @click="domain.updateColor('#progress .progress')")
      span default
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateColor('#progress .progress', 'light-green')")
      span light-green
    label.radio
      input(type="radio", name="color-progress", @click="domain.updateColor('#progress .progress', 'orange')")
      span orange
  .medium-space
  h6 Default
  .small-space.border
    .progress.left
  .space
  .small-space.border
    .progress.right
  .medium-space
  h6 Cards
  .grid
    .s12.m6.l3
      article.small
        .progress.left
        h5 Card
    .s12.m6.l3
      article.small.round
        .progress.right
        h5 Card
    .s12.m6.l3
      article.border.small
        .progress.top
        h5 Card
    .s12.m6.l3
      article.small.border.round
        .progress.bottom
        h5 Card
  .medium-space
  h6 Buttons
  div
    nav.wrap
      button
        .progress.left
        span Button
      button
        .progress.right
        span Button
      button.circle.extra
        .progress.top
        i home
      button.square.extra
        .progress.bottom
        i home
      button.border
        .progress.left
        span Button
      button.border.round
        .progress.right
        span Button
      button.border.circle.extra
        .progress.top
        i home
      button.border.square.extra
        .progress.bottom
        i home
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
