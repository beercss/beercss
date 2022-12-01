<template lang="pug">
#checkboxes
  .large-space
  h4
    span Checkboxes
    a.chip.circle(@click="domain.showSamples(data, '#checkboxes .field:not(#checkboxes1), #checkboxes1 label', 'Checkboxes', null, 'https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md')")
      i code
  .grid
    .s12
      .space
      h6 Default checkbox
      .field.middle-align#checkboxes1
        nav.wrap
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
    .s12
      h6 Checkbox in field elements
    .s12.l4
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
    .s12.l4
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
        span.helper Helper text
    .s12.l4
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
