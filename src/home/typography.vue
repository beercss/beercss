<template lang="pug">
#typography
  .large-space
  h4
    span Typography
    a.chip.circle(@click="domain.showSamples(data, '#typography .col.s6 div', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md')")
      i code
  .row
    .col.s6
      div
        p.italic italic
        p.bold bold
        p.underline underline
        p.overline overline
        p.upper upper
        p.lower lower
        p.capitalize capitalize
        p.link link
        p.small-text small-text
        p.medium-text medium-text
        p.large-text large-text
    .col.s6
      div
        h6 Title
        h5 Title
        h4 Title
        h3 Title
        h2 Title
        h1 Title
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>