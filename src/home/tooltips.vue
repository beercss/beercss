<template lang="pug">
#tooltips
  .large-space
  h4
    span Tooltips
    button.chip.circle(@click="domain.showSamples(data, '#tooltip-code > *', 'Tooltips', null, 'https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-snackbars", @click="domain.updateSpace('#tooltips .tooltip', 'no-space')")
      span no-space
    label.radio
      input(type="radio", name="space-snackbars", checked, @click="domain.updateSpace('#tooltips .tooltip')")
      span small-space
    label.radio
      input(type="radio", name="space-snackbars", @click="domain.updateSpace('#tooltips .tooltip', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-snackbars", @click="domain.updateSpace('#tooltips .tooltip', 'large-space')")
      span large-space
  nav#tooltip-code.wrap
    button.chip.round
      span Plain tooltip
      span.tooltip Tooltip
    button.chip.circle
      i arrow_back
      span.tooltip.left Tooltip
    button.chip.circle
      i arrow_upward
      span.tooltip.top Tooltip
    button.chip.circle
      i arrow_downward
      span.tooltip.bottom Tooltip
    button.chip.circle
      i arrow_forward
      span.tooltip.right Tooltip
    div
      button.chip.round
        span Wrapped tooltip
      .tooltip Tooltip
    div
      button.chip.round
        span Rich tooltip
      .tooltip.max 
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        nav
          button Button

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
