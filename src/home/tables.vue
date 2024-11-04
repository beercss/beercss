<template lang="pug">
#tables
  .large-space
  h4
    span Tables
    button.chip.circle(@click="domain.showSamples(data, '#tables > .grid > * > table, #tables > .grid > * > .scroll', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
      i code
  nav.wrap
    label.checkbox
      input(type="checkbox", @click="domain.updateMinMax('#tables table :is(td, th):first-child', $event.target.checked ? 'min' : '')")
      span min
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

  .grid.large-space
    #table-default.s12.m12.l6
      .medium-space
      h6
        span Default
        button.chip.circle(@click="domain.showSamples(data, '#table-default > table', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
          i code
      table
        thead
          tr
            th Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    #table-stripes.s12.m12.l6
      .medium-space
      h6
        span Stripes
        button.chip.circle(@click="domain.showSamples(data, '#table-stripes > table', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
          i code
      table.stripes
        thead
          tr
            th Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    #table-border.s12.m12.l6
      .medium-space
      h6
        span Border
        button.chip.circle(@click="domain.showSamples(data, '#table-border > table', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
          i code
      table.border
        thead
          tr
            th Header
            th Header
            th Header
        tbody
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
          tr
            td Cell
            td Cell
            td Cell
        tfoot
          tr
            th Footer
            th Footer
            th Footer
    #table-scroll.s12.m12.l6
      .medium-space
      h6
        span Scroll
        button.chip.circle(@click="domain.showSamples(data, '#table-scroll > .scroll', 'Tables', null, 'https://github.com/beercss/beercss/blob/main/docs/TABLE.md')")
          i code
      nav.wrap
        label.radio
          input(type="radio", name="color-tables", checked, @click="domain.updateColor('#table-scroll > .scroll', 'surface')")
          span surface
        label.radio
          input(type="radio", name="color-tables", @click="domain.updateColor('#table-scroll > .scroll', 'primary')")
          span primary
        label.radio
          input(type="radio", name="color-tables", @click="domain.updateColor('#table-scroll > .scroll', 'secondary')")
          span secondary
        label.radio
          input(type="radio", name="color-tables", @click="domain.updateColor('#table-scroll > .scroll', 'tertiary')")
          span tertiary
      .space
      .small-height.scroll.surface
        table.border
          thead.fixed
            tr
              th Header
              th Header
              th Header
          tbody
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
            tr
              td Cell
              td Cell
              td Cell
          tfoot.fixed
            tr
              th Footer
              th Footer
              th Footer

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
