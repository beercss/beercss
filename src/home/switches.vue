<template lang="pug">
#switches
  .large-space
  h4
    span Switches
    a.chip.circle(@click="domain.showSamples(data, '#switches .field:not(#switches1), #switches1 label', null, 'https://github.com/beercss/beercss/blob/main/docs/SWITCH.md')")
      i code
  .row
    .col.s12
      .field.middle-align#switches1
        nav
          label.switch
            input(type="checkbox")
            span
          label.switch
            input(type="checkbox")
            span Enabled
          label.switch
            input(type="checkbox", disabled)
            span Disabled
          label.switch
            input(type="checkbox", checked, disabled)
            span Disabled
    .col.s12
      .field.middle-align
        nav
          label.switch
            input(type="checkbox")
            span Item 1
          label.switch
            input(type="checkbox")
            span Item 2
          label.switch
            input(type="checkbox")
            span Item 3
    .col.s12
      .field.label.middle-align
        label.active A question?
        nav
          label.switch
            input(type="checkbox")
            span Item 1
          label.switch
            input(type="checkbox")
            span Item 2
          label.switch
            input(type="checkbox")
            span Item 3
    .col.s12
      .field.label.middle-align
        label.active A question?
        nav
          label.switch
            input(type="checkbox")
            span Item 1
          label.switch
            input(type="checkbox")
            span Item 2
          label.switch
            input(type="checkbox")
            span Item 3
        span.helper Complementary text
    .col.s12.l6
      .field.label.middle-align.invalid
        label.active A question?
        nav
          label.switch
            input(type="checkbox")
            span Item 1
          label.switch
            input(type="checkbox")
            span Item 2
          label.switch
            input(type="checkbox")
            span Item 3
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>