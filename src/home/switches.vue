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
    .col.s12.l4
      .field.middle-align
        label.switch
          input(type="checkbox")
          span Some text
    .col.s12.l4
      .field.middle-align
        label.switch
          input(type="checkbox")
          span Some text
        span.helper Complementary text
    .col.s12.l4
      .field.middle-align.invalid
        label.switch
          input(type="checkbox")
          span Some text
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>