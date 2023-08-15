<template lang="pug">
#chips
  .large-space
  h4
    span Chips
    a.chip.circle(@click="domain.showSamples(data, '#chips nav .chip', 'Chips', null, 'https://github.com/beercss/beercss/blob/main/docs/CHIP.md')")
      i code
  selectionForButtons(context="#chips nav .chip", :colors="[]" :sizes="['', 'medium', 'large']", :directions="['horizontal', 'vertical']", selectedDirection="horizontal", emptySize="small")
  nav.wrap
    a.chip Suggestion
    a.chip
      span Input
      i close
    a.chip
      i done
      span Filter
    a.chip
      i.primary-text today
      span Assist
    a.chip
      img(:src="'favicon.png'")
      span Image
    a.chip
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.round Suggestion
    a.chip.round
      span Input
      i close
    a.chip.round
      i done
      span Filter
    a.chip.round
      i.primary-text today
      span Assist
    a.chip.round
      img(:src="'favicon.png'")
      span Image
    a.chip.round
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.fill Suggestion
    a.chip.fill
      span Input
      i close
    a.chip.fill
      i done
      span Filter
    a.chip.fill
      i.primary-text today
      span Assist
    a.chip.fill
      img(:src="'favicon.png'")
      span Image
    a.chip.fill
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.fill.round Suggestion
    a.chip.fill.round
      span Input
      i close
    a.chip.fill.round
      i done
      span Filter
    a.chip.fill.round
      i.primary-text today
      span Assist
    a.chip.fill.round
      img(:src="'favicon.png'")
      span Image
    a.chip.fill.round
      img.responsive(:src="'favicon.png'")
      span Responsive
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>
