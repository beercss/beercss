<template lang="pug">
#tooltips
  .large-space
  h4
    span Tooltips
    a.chip.circle(@click="domain.showSamples(data, '#tooltips nav a', null, 'https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md')")
      i code
  nav.wrap
    a.chip.circle
      i arrow_back
      .tooltip.left Complementary text
    a.chip.circle
      i arrow_upward
      .tooltip Complementary text
    a.chip.circle
      i arrow_downward
      .tooltip.bottom Complementary text
    a.chip.circle
      i arrow_forward
      .tooltip.right Complementary text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>