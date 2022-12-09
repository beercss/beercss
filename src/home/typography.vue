<template lang="pug">
#typography
  .large-space
  h4
    span Typography
    a.chip.circle(@click="domain.showSamples(data, '#typography .s6 div', 'Typography', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md')")
      i code
  .grid
    .s3
      div
        a.link link
        p.italic italic
        p.bold bold
        p.underline underline
        p.overline overline
        p.upper upper
        p.lower lower
        p.capitalize capitalize
        p.small-text small-text
        p.medium-text medium-text
        p.large-text large-text
    .s3
      div
        h6 Title
        h5 Title
        h4 Title
        h3 Title
        h2 Title
        h1 Title
    .s3
      div
        div.display Display
        div.headline Headline
        div.title Title
        div.body Body
        div.label Label
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>