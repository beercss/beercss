<template lang="pug">
#navs
  .large-space
  h4
    span Navs
    a.chip.circle(@click="domain.showSamples(data, '#navs nav', null, 'https://github.com/beercss/beercss/blob/main/docs/NAV.md')")
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