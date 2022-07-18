<template lang="pug">
#dividers
  .large-space
  h4
    span Dividers
    a.chip.circle(
      @click="domain.showSamples(data, '#dividers #divider', 'Dividers', null, null)"
    )
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="divider-dividers",
        checked,
        @click="domain.updateDivider('#divider [class*=divider]', 'divider')"
      )
      span divider / small-divider
    label.radio
      input(type="radio", name="divider-dividers", @click="domain.updateDivider('#divider [class*=divider]', 'medium-divider')")
      span medium-divider
    label.radio
      input(type="radio", name="divider-dividers", @click="domain.updateDivider('#divider [class*=divider]', 'large-divider')")
      span large-divider
  .space
  #divider
    div Lorem ipsum dolor
    .divider
    div Lorem ipsum dolor
    .divider
    div Lorem ipsum dolor

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>