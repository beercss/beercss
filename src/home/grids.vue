<template lang="pug">
#grids
  .large-space
  h4
    span Grids
    a.chip.circle(@click="domain.showSamples(data, '#grids .grid', 'Grids', null, 'https://github.com/beercss/beercss/blob/main/docs/GRID.md')")
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
    label.radio
      input(type="radio", name="size-rows", checked, @click="domain.updateSize('#grids .grid')")
      span max
    label.radio
      input(type="radio", name="size-rows", @click="domain.updateSize('#grids .grid', 'min')")
      span min
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
  .grid
    .s6 6
    .s6 6
  .grid
    .s12 12
  .grid
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
    .s12.m6.l3 12/6/3
  .row
    .max max
    .max max
    .max max
  .row
    div min
    div min
    div min
    .max max
  .row
    div min
    .max max
    div min
    .max max
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>