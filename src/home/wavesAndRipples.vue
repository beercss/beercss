<template lang="pug">
#waves-and-ripples
  .large-space
  h4.middle-align 
    span Waves and ripples
    button.chip.circle(@click="domain.showSamples(data, '#waves-and-ripples-example button, #waves-and-ripples-example article, #waves-and-ripples-example a', 'Waves and ripples', null, 'https://github.com/beercss/beercss/blob/main/docs/TYPOGRAPHY.md')")
      i code
  .medium-space
  #waves-and-ripples-example
    button.wave Wave
    button.ripple Ripple
    button.slow-ripple Slow ripple
    button.fast-ripple Fast ripple
    button.chip.wave Wave
    button.chip.ripple Ripple
    button.chip.slow-ripple Slow ripple
    button.chip.fast-ripple Fast ripple
    nav.wrap
      article.small-width.small-height.wave
        h6 Wave
      article.small-width.small-height.ripple
        h6 Ripple
      article.small-width.small-height.slow-ripple
        h6 Slow ripple
      article.small-width.small-height.fast-ripple
        h6 Fast ripple
    .space
    a.row.padding.surface-container.wave Wave
    .space
    a.row.padding.surface-container.ripple Ripple
    .space
    a.row.padding.surface-container.slow-ripple Slow ripple
    .space
    a.row.padding.surface-container.fast-ripple Fast ripple
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
