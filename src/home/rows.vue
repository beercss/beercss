<template lang="pug">
#rows
  .large-space
  h4
    span Rows
    a.chip.circle(@click="domain.showSamples(data, '#rows .row', null, 'https://github.com/beercss/beercss/blob/main/docs/ROW.md')")
      i code
  nav.wrap
    label.radio
      input#no-space-rows(type="radio", name="space-rows")
      span no-space
    label.radio
      input#small-space-rows(
        type="radio",
        name="space-rows",
        checked
      )
      span small-space
    label.radio
      input#medium-space-rows(type="radio", name="space-rows")
      span medium-space
    label.radio
      input#large-space-rows(type="radio", name="space-rows")
      span large-space
    label.checkbox
      input#min-rows(type="checkbox", name="size-rows")
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