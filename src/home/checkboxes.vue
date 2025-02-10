<template lang="pug">
#checkboxes
  .large-space
  h4
    span Checkboxes
    button.chip.circle(@click="domain.showSamples(data, '#checkboxes .field:not(#checkboxes1), #checkboxes1 label', 'Checkboxes', null, 'https://github.com/beercss/beercss/blob/main/docs/CHECKBOX.md')")
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
          label.checkbox.small
            input(type="checkbox")
            span
          label.checkbox
            input(type="checkbox")
            span
          label.checkbox.large
            input(type="checkbox")
            span
          label.checkbox.extra
            input(type="checkbox")
            span
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
                img(:src="'/beer-and-woman.svg'")
          label.checkbox.icon
            input(type="checkbox")
            span
              i
                svg(viewBox="0 0 24 24")
                  path(d="M19,15H23V3H19M15,3H6C5.17,3 4.46,3.5 4.16,4.22L1.14,11.27C1.05,11.5 1,11.74 1,12V14A2,2 0 0,0 3,16H9.31L8.36,20.57C8.34,20.67 8.33,20.77 8.33,20.88C8.33,21.3 8.5,21.67 8.77,21.94L9.83,23L16.41,16.41C16.78,16.05 17,15.55 17,15V5C17,3.89 16.1,3 15,3Z")
              i
                svg(viewBox="0 0 24 24")
                  path(d="M23,10C23,8.89 22.1,8 21,8H14.68L15.64,3.43C15.66,3.33 15.67,3.22 15.67,3.11C15.67,2.7 15.5,2.32 15.23,2.05L14.17,1L7.59,7.58C7.22,7.95 7,8.45 7,9V19A2,2 0 0,0 9,21H18C18.83,21 19.54,20.5 19.84,19.78L22.86,12.73C22.95,12.5 23,12.26 23,12V10M1,21H5V9H1V21Z")
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
