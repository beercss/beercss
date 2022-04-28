<template lang="pug">
#containers
  .large-space
  h4
    span Containers
    a.chip.circle(@click="domain.showSamples(data, '#containers .container', null, 'https://github.com/beercss/beercss/blob/main/docs/CONTAINER.md')")
      i code
  nav
    button(@click="domain.updateContainer()") Default
    button(@click="domain.updateContainer('min')") Min
    button(@click="domain.updateContainer('max')") Max
  div(v-show="false")
    .container
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>