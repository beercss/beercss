<template lang="pug">
#chips
  .large-space
  h4
    span Chips
    a.chip.circle(@click="domain.showSamples(data, '#chips nav .chip', 'Chips', null, 'https://github.com/beercss/beercss/blob/main/docs/CHIP.md')")
      i code
  selectionForButtons(context="#chips nav .chip", :colors="[]" :sizes="['', 'medium', 'large']", :directions="['horizontal', 'vertical']", selectedDirection="horizontal", emptySize="small")
  nav.wrap
    a.chip
      i.small today
      span Assist
    a.chip
      i.small done
      span Filter
    a.chip
      span Input
      i.small close
    a.chip Suggestion
    a.chip
      img(:src="'favicon.png'")
      span Image
    a.chip
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.round
      i.small today
      span Assist
    a.chip.round
      i.small done
      span Filter
    a.chip.round
      span Input
      i.small close
    a.chip.round Suggestion
    a.chip.round
      img(:src="'favicon.png'")
      span Image
    a.chip.round
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.fill
      i.small today
      span Assist
    a.chip.fill
      i.small done
      span Filter
    a.chip.fill
      span Input
      i.small close
    a.chip.fill Suggestion
    a.chip.fill
      img(:src="'favicon.png'")
      span Image
    a.chip.fill
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.fill.round
      i.small today
      span Assist
    a.chip.fill.round
      i.small done
      span Filter
    a.chip.fill.round
      span Input
      i.small close
    a.chip.fill.round Suggestion
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
