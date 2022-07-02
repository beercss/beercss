<template lang="pug">
#checkboxes
  .large-space
  h4
    span Checkboxes
    a.chip.circle(@click="domain.showSamples(data, '#checkboxes .field:not(#checkboxes1), #checkboxes1 label', null, 'https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md')")
      i code
  .row
    .col.s12
      .field.middle-align#checkboxes1
        nav
          label.checkbox
            input(type="checkbox")
            span
          label.checkbox
            input(type="checkbox")
            span Enabled
          label.checkbox
            input(type="checkbox", disabled)
            span Disabled
          label.checkbox
            input(type="checkbox", checked, disabled)
            span Disabled
    .col.s12.l4
      .field.middle-align
        nav
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
    .col.s12.l4
      .field.middle-align
        nav
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
        span.helper Complementary text
    .col.s12.l4
      .field.middle-align.invalid
        nav
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>