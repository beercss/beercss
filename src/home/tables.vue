<template lang="pug">
#tables
  .large-space
  h4
    span Tables
    a.chip.circle(@click="domain.showSamples(data, '#tables .grid table, #tables .grid .small-height', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
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
    label.checkbox
      input(type="checkbox", @click="domain.updateMinMax('#tables table :is(td, th):first-child', $event.target.checked ? 'min' : '')")
      span min

  .grid.large-space
    .s12.m12.l6
      .medium-space
      h6 Default
      table
        thead
          tr
            th
              label.checkbox
                input(type="checkbox")
                span
            th Header
            th Header
            th
        tbody
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                i edit
                i delete
        tfoot
          tr
            th
            th Footer
            th Footer
            th
    .s12.m12.l6
      .medium-space
      h6 Stripes
      table.stripes
        thead
          tr
            th
              label.checkbox
                input(type="checkbox")
                span
            th Header
            th Header
            th
        tbody
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                i edit
                i delete
        tfoot
          tr
            th
            th Footer
            th Footer
            th
    .s12.m12.l6
      .medium-space
      h6 Border
      table.border
        thead
          tr
            th
              label.checkbox
                input(type="checkbox")
                span
            th Header
            th Header
            th
        tbody
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                a
                  i edit
                a
                  i delete
          tr
            td
              label.checkbox
                input(type="checkbox")
                span
            td Cell
            td Cell
            td
              nav.right-align
                i edit
                i delete
        tfoot
          tr
            th
            th Footer
            th Footer
            th
    .s12.m12.l6
      .medium-space
      h6 Scroll
      .small-height.scroll
        table.border
          thead.fixed
            tr
              th
                label.checkbox
                  input(type="checkbox")
                  span
              th Header
              th Header
              th
          tbody
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  a
                    i edit
                  a
                    i delete
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  a
                    i edit
                  a
                    i delete
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  i edit
                  i delete
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  i edit
                  i delete
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  i edit
                  i delete
            tr
              td
                label.checkbox
                  input(type="checkbox")
                  span
              td Cell
              td Cell
              td
                nav.right-align
                  i edit
                  i delete
          tfoot.fixed
            tr
              th
              th Footer
              th Footer
              th
        
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
