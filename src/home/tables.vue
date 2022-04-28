<template lang="pug">
#table
  .large-space
  h4
    span Tables
    a.chip.circle(@click="domain.showSamples(data, '#table table', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
      i code
  nav.wrap
    label.radio
      input#no-space-tables(type="radio", name="space-tables")
      span no-space
    label.radio
      input#small-space-tables(
        type="radio",
        name="space-tables",
        checked
      )
      span small-space
    label.radio
      input#medium-space-tables(type="radio", name="space-tables")
      span medium-space
    label.radio
      input#large-space-tables(type="radio", name="space-tables")
      span large-space
    label.radio
      input#left-align-tables(
        type="radio",
        name="align-tables",
        checked
      )
      span left-align
    label.radio
      input#center-align-tables(type="radio", name="align-tables")
      span center-align
    label.radio
      input#right-align-tables(type="radio", name="align-tables")
      span right-align
    label.checkbox
      input#min-tables(type="checkbox", name="size-tables")
      span min
  .space
  table.border
    thead
      tr
        th
        th Column 1
        th Column 2
        th Column 3
        th
    tbody
      tr
        td
          label.checkbox
            input(type="checkbox")
            span
        td Line 1
        td Line 1
        td Line 1
        td
          nav.right-align
            button.none Button
            button.none
              i more_vert
      tr
        td
          label.checkbox
            input(type="checkbox")
            span
        td Line 2
        td Line 2
        td Line 2
        td
          nav.right-align
            button.none Button
            button.none
              i more_vert
      tr
        td
          label.checkbox
            input(type="checkbox")
            span
        td Line 3
        td Line 3
        td Line 3
        td
          nav.right-align
            button.none Button
            button.none
              i more_vert
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>