<template lang="pug">
#directions
  .large-space
  h4
    span Directions
    a.chip.circle(
      @click="domain.showSamples(data, '#direction > button, #direction > .chip, #direction > nav, #direction > .tabs', 'Directions', null, null)"
    )
      i code
  nav.wrap
    label.radio
      input(type="radio", name="direction-directions", @click="domain.updateDirection('#direction a, #direction button, #directions .row', 'horizontal')", checked)
      span horizontal
    label.radio
      input(type="radio", name="direction-directions", @click="domain.updateDirection('#direction a, #direction button, #directions .row', 'vertical')")
      span vertical
  .space
  nav#direction.wrap
    button
      i home
      span Button
    a.chip
      i home
      span Chip
    nav.no-space
      button.border.left-round.fill
        i home
        span Button
      button.border.no-round
        i home
        span Button
      button.border.right-round
        i home
        span Button
    .tabs
      a.active(data-ui="")
        i home
        span Tab 1
      a(data-ui="")
        i home
        span Tab 2
      a(data-ui="")
        i home
        span Tab 3

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
