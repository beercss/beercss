<template lang="pug">
#tables
  .large-space
  h4
    span Tables
    a.chip.circle(@click="domain.showSamples(data, '#tables table', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#tables table', 'no-space')")
      span no-space
    label.radio
      input(
        type="radio",
        name="space-tables",
        checked,
        @click="domain.updateSpace('#tables table')"
      )
      span small-space
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#tables table', 'medium-space')")
      span medium-space
    label.radio
      input(type="radio", name="space-tables", @click="domain.updateSpace('#tables table', 'large-space')")
      span large-space
    label.radio
      input(
        type="radio",
        name="align-tables",
        checked,
        @click="domain.updateAlign('#tables table')"
      )
      span left-align
    label.radio
      input(type="radio", name="align-tables", @click="domain.updateAlign('#tables table', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="align-tables", @click="domain.updateAlign('#tables table', 'right-align')")
      span right-align
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
            button.none.m.l Button
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
            button.none.m.l Button
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
            button.none.m.l Button
            button.none
              i more_vert
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
