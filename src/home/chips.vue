<template lang="pug">
#chips
  .large-space
  h4
    span Chips
    a.chip.circle(@click="domain.showSamples(data, '#chips nav .chip', 'Chips', null, 'https://github.com/beercss/beercss/blob/main/docs/CHIP.md')")
      i code
  selectionForButtons(context="#chips nav .chip", :sizes="['small', '', 'large']", :directions="['horizontal', 'vertical']", selectedDirection="horizontal")
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
    a.chip(no-direction="") Suggestion
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
    a.chip.round(no-direction="") Suggestion
    a.chip.round
      img(:src="'favicon.png'")
      span Image
    a.chip.round
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.border
      i.small today
      span Assist
    a.chip.border
      i.small done
      span Filter
    a.chip.border
      span Input
      i.small close
    a.chip.border(no-direction="") Suggestion
    a.chip.border
      img(:src="'favicon.png'")
      span Image
    a.chip.border
      img.responsive(:src="'favicon.png'")
      span Responsive
  nav.wrap
    a.chip.border.round
      i.small today
      span Assist
    a.chip.border.round
      i.small done
      span Filter
    a.chip.border.round
      span Input
      i.small close
    a.chip.border.round(no-direction="") Suggestion
    a.chip.border.round
      img(:src="'favicon.png'")
      span Image
    a.chip.border.round
      img.responsive(:src="'favicon.png'")
      span Responsive
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import selectionForButtons from "./selectionForButtons.vue";
</script>
