<template lang="pug">
#tooltips
  .large-space
  h4
    span Tooltips
    a.chip.circle(@click="domain.showSamples(data, '#tooltips nav a', 'Tooltips', null, 'https://github.com/beercss/beercss/blob/main/docs/TOOLTIP.md')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="space-toasts",
        checked,
        @click="domain.updateSpace('#tooltips .tooltip')"
      )
      span no-space
    label.radio
      input(type="radio", name="space-toasts", @click="domain.updateSpace('#tooltips .tooltip', 'small-space')")
      span small-space
    label.radio
      input(type="radio", name="space-toasts", @click="domain.updateSpace('#tooltips .tooltip', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-toasts", @click="domain.updateSpace('#tooltips .tooltip', 'large-space')")
      span large-space
  nav.wrap
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
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
