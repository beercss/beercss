<template lang="pug">
#table
  .large-space
  h4
    span Tables
    a.chip.circle(@click="domain.showSamples(data, '#table table', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#table table', 'no-space')")
      span no-space
    label.radio
      input(
        type="radio",
        name="space-tables",
        checked,
        @click="domain.updateSpace('#table table')"
      )
      span small-space
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#table table', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#table table', 'large-space')")
      span large-space
    label.radio
      input(
        type="radio",
        name="align-tables",
        checked,
        @click="domain.updateAlign('#table table')"
      )
      span left-align
    label.radio
      input(type="radio", name="align-tables", @click="domain.updateAlign('#table table', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="align-tables", @click="domain.updateAlign('#table table', 'right-align')")
      span right-align
    label.radio
      input(type="radio", name="size-tables", checked, @click="domain.updateSize('#table table')")
      span max
    label.radio
      input(type="radio", name="size-tables", @click="domain.updateSize('#table table', 'min')")
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