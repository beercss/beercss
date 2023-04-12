<template lang="pug">
#tooltips
  .large-space
  h4
    span Tooltips
    a.chip.circle(@click="domain.showSamples(data, '#tooltips nav a', 'Tooltips', null, 'https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md')")
      i code
  nav.wrap
    h5 common tooltip
    a.chip.circle
      i arrow_back
      .tooltip.left Some text here
    a.chip.circle
      i arrow_upward
      .tooltip Some text here
    a.chip.circle
      i arrow_downward
      .tooltip.bottom Some text here
    a.chip.circle
      i arrow_forward
      .tooltip.right Some text here
    h5 tooltip with gap
    a.chip.circle
      i arrow_back
      .tooltip.tiny-gap Some text here
    a.chip.circle
      i arrow_upward
      .tooltip.small-gap Some text here
    a.chip.circle
      i arrow_downward
      .tooltip.gap Some text here
    a.chip.circle
      i arrow_forward
      .tooltip.large-gap Some text here
    h5 fade effect
    a.chip.circle
      i arrow_back
      .tooltip.left.fade Some text here
    a.chip.circle
      i arrow_upward
      .tooltip.fade Some text here
    a.chip.circle
      i arrow_downward
      .tooltip.bottom.fade Some text here
    a.chip.circle
      i arrow_forward
      .tooltip.right.fade Some text here
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
