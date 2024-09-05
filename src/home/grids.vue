<template lang="pug">
#grids
  .large-space
  h4
    span Grids
    button.chip.circle(@click="domain.showSamples(data, '#grids .grid', 'Grids', null, 'https://github.com/beercss/beercss/blob/main/docs/GRID.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#grids .grid', 'no-space')")
      span no-space
    label.radio
      input(
        type="radio",
        name="space-rows",
        checked,
        @click="domain.updateSpace('#grids .grid')"
      )
      span small-space
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#grids .grid', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#grids .grid', 'large-space')")
      span large-space
  .space
  .grid
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s1 1
    .s6 6
    .s6 6
    .s12 12
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
