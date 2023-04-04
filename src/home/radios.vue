<template lang="pug">
#radios
  .large-space
  h4
    span Radios
    a.chip.circle(@click="domain.showSamples(data, '#radios .field:not(#radios1), #radios1 label', 'Radios', null, 'https://github.com/beercss/beercss/blob/main/docs/RADIO.md')")
      i code
  .grid
    .s12
      .space
      h6 Default radio
      .field.middle-align#radios1
        nav.wrap
          label.radio
            input(type="radio", name="radio1")
            span
          label.radio
            input(type="radio", name="radio1")
            span Enabled
          label.radio
            input(type="radio", name="radio2", disabled)
            span Disabled
          label.radio
            input(type="radio", name="radio2", checked, disabled)
            span Disabled
    .s12
      h6 Radio with icons
      .field.middle-align#radios1
        nav
          label.radio.icon
            input(type="radio", name="radio3")
            span
              i close
              i done
          label.radio.icon
            input(type="radio", name="radio3")
            span
              i
                img(:src="'/favicon.png'")
              i
                img(:src="'/beer-and-woman.jpg'")
          label.radio.icon
            input(type="radio", name="radio3")
            span
              i
                svg(viewBox="0 0 24 24")
                  path(d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z")
              i
                svg(viewBox="0 0 24 24")
                  path(d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z")
    .s12
      h6 Radio in field elements
    .s12.l4
      .field.middle-align
        nav
          label.radio
            input(type="radio", name="radio4")
            span Item 1
          label.radio
            input(type="radio", name="radio4")
            span Item 2
          label.radio
            input(type="radio", name="radio4")
            span Item 3
    .s12.l4
      .field.middle-align
        nav
          label.radio
            input(type="radio", name="radio5")
            span Item 1
          label.radio
            input(type="radio", name="radio5")
            span Item 2
          label.radio
            input(type="radio", name="radio5")
            span Item 3
        span.helper Helper text
    .s12.l4
      .field.middle-align.invalid
        nav
          label.radio
            input(type="radio", name="radio6")
            span Item 1
          label.radio
            input(type="radio", name="radio6")
            span Item 2
          label.radio
            input(type="radio", name="radio6")
            span Item 3
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
