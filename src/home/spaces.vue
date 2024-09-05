<template lang="pug">
#spaces
  .large-space
  h4
    span Spaces
    button.chip.circle(
      @click="domain.showSamples(data, '#space', 'Spaces', null, null)"
    )
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="space-spaces",
        checked,
        @click="domain.updateSpace('#space [class*=space]', 'space')"
      )
      span space / small-space
    label.radio
      input(type="radio", name="space-spaces", @click="domain.updateSpace('#space [class*=space]', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-spaces", @click="domain.updateSpace('#space [class*=space]', 'large-space')")
      span large-space
  .space
  #space
    div Some text here
    .space
    div Some text here
    .space
    div Some text here

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
