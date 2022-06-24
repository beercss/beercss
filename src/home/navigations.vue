<template lang="pug">
#navigations
  .large-space
  h4
    span Navigations
    a.chip.circle(@click="domain.showSamples(data, '#navigations nav', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav
    button Button
    a.chip Chip
    i home
    a
      img.circle(:src="'/beer-and-woman.jpg'")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>