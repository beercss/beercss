<template lang="pug">
#containers
  .large-space
  h4
    span Containers
    a.chip.circle(@click="domain.showSamples(data, '#containers main.responsive', 'Containers', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  nav
    button(@click="domain.updateMinMax('main.responsive')") Min
    button(@click="domain.updateMinMax('main.responsive', 'max')") Max
  div(v-show="false")
    main.responsive
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
