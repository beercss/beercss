<template lang="pug">
#chips
  .large-space
  h4
    span Chips
    button.chip.circle(@click="domain.showSamples(data, '#chips nav .chip', 'Chips', null, 'https://github.com/beercss/beercss/blob/main/docs/CHIP.md')")
      i code
  selectionForButtons(context="#chips nav .chip", :colors="[]" :sizes="['', 'medium', 'large']", :directions="['horizontal', 'vertical']", selected-direction="horizontal", empty-size="small")
  nav.wrap
    button.chip Suggestion
    button.chip
      span Input
      i close
    button.chip
      i done
      span Filter
    button.chip
      i.primary-text today
      span Assist
    button.chip
      img(:src="'favicon.png'")
      span Image
    button.chip
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    button.chip.round Suggestion
    button.chip.round
      span Input
      i close
    button.chip.round
      i done
      span Filter
    button.chip.round
      i.primary-text today
      span Assist
    button.chip.round
      img(:src="'favicon.png'")
      span Image
    button.chip.round
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    button.chip.fill Suggestion
    button.chip.fill
      span Input
      i close
    button.chip.fill
      i done
      span Filter
    button.chip.fill
      i.primary-text today
      span Assist
    button.chip.fill
      img(:src="'favicon.png'")
      span Image
    button.chip.fill
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    button.chip.fill.round Suggestion
    button.chip.fill.round
      span Input
      i close
    button.chip.fill.round
      i done
      span Filter
    button.chip.fill.round
      i.primary-text today
      span Assist
    button.chip.fill.round
      img(:src="'favicon.png'")
      span Image
    button.chip.fill.round
      img.responsive(:src="'favicon.png'")
      span Responsive
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>
