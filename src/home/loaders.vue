<template lang="pug">
#loaders
  .large-space
  h4
    span Loaders
    a.chip.circle(@click="domain.showSamples(data, '#loaders .loader', 'Loaders', null, 'https://github.com/beercss/beercss/blob/main/docs/LOADER.md')")
      i code
  nav.wrap
    a.loader.small
    a.loader.medium
    a.loader.large
    a.loader.small.pink
    a.loader.medium.orange
    a.loader.large.yellow
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
