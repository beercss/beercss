<template lang="pug">
#rows
  .large-space
  h4
    span Rows
    a.chip.circle(@click="domain.showSamples(data, '#rows .row', null, 'https://github.com/beercss/beercss/blob/main/docs/ROW.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#rows .row', 'no-space')")
      span no-space
    label.radio
      input(
        type="radio",
        name="space-rows",
        checked,
        @click="domain.updateSpace('#rows .row')"
      )
      span small-space
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#rows .row', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-rows", @click="domain.updateSpace('#rows .row', 'large-space')")
      span large-space
    label.radio
      input(type="radio", name="size-rows", checked, @click="domain.updateSize('#rows .row')")
      span max
    label.radio
      input(type="radio", name="size-rows", @click="domain.updateSize('#rows .row', 'min')")
      span min
  .space
  .row
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s1 1
    .col.s6 6
    .col.s6 6
    .col.s12 12
  .row
    .col.s6 6
    .col.s6 6
  .row
    .col.s12 12
  .row
    .col.s12.m6.l3 12/6/3
    .col.s12.m6.l3 12/6/3
    .col.s12.m6.l3 12/6/3
    .col.s12.m6.l3 12/6/3
  .row.no-wrap
    .col max
    .col max
    .col max
  .row.no-wrap
    .col.min min
    .col.min min
    .col.min min
    .col max
  .row.no-wrap
    .col.min min
    .col max
    .col.min min
    .col max
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>