<template lang="pug">
#containers
  .large-space
  h4
    span Containers
    a.chip.circle(@click="domain.showSamples(data, '#containers main.responsive', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  nav
    button(@click="domain.updateSize()") Default
    button(@click="domain.updateSize('min')") Min
    button(@click="domain.updateSize('max')") Max
  div(v-show="false")
    main.responsive
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>