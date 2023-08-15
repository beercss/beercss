<template lang="pug">
#tooltips
  .large-space
  h4
    span Tooltips
    a.chip.circle(@click="domain.showSamples(data, '#tooltip-code .chip', 'Tooltips', null, 'https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-snackbars", @click="domain.updateSpace('#tooltips .tooltip', 'no-space')")
      span no-space
    label.radio
      input(type="radio", name="space-snackbars", @click="domain.updateSpace('#tooltips .tooltip')", checked)
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
      .tooltip Tooltip
    button.chip.round
      span Rich tooltip
      .tooltip.max
        b Title
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        nav
          a.inverse-link Action
    a.chip.circle
      i arrow_back
      .tooltip.left Tooltip
    a.chip.circle
      i arrow_upward
      .tooltip.top Tooltip
    a.chip.circle
      i arrow_downward
      .tooltip.bottom Tooltip
    a.chip.circle
      i arrow_forward
      .tooltip.right Tooltip

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
