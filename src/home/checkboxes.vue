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
    .s12
      h6 Checkbox with icons
      .field.middle-align#checkboxes1
        nav.wrap
          label.checkbox.icon
            input(type="checkbox")
            span
              i close
              i done
          label.checkbox.icon
            input(type="checkbox")
            span
              i
                img(:src="'/favicon.png'")
              i
                img(:src="'/beer-and-woman.jpg'")
          label.checkbox.icon
            input(type="checkbox")
            span
              i
                svg(viewBox="0 0 24 24")
                  path(d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")
              i
                svg(viewBox="0 0 24 24")
                  path(d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z")
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
            span Disabled
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
