<template lang="pug">
#switches
  .large-space
  h4
    span Switches
    button.chip.circle(@click="domain.showSamples(data, '#switches .field:not(#switches1), #switches1 label', 'Switches', null, 'https://github.com/beercss/beercss/blob/main/docs/SWITCH.md')")
      i code
  .grid
    .s12
      .space
      h6 Default switch
      .field.middle-align#switches1
        nav.wrap
          label.switch
            input(type="checkbox")
            span
          label.switch
            input(type="checkbox")
            span
          label.switch
            input(type="checkbox", disabled)
            span
          label.switch
            input(type="checkbox", checked, disabled)
            span
    .s12
      h6 Switch with icons
      .field.middle-align#switches1
        nav.wrap
          label.switch.icon
            input(type="checkbox")
            span
              i wifi
          label.switch.icon
            input(type="checkbox")
            span
              i bluetooth
          label.switch.icon
            input(type="checkbox")
            span
              i dark_mode
          label.switch.icon
            input(type="checkbox")
            span
              i close
              i done
    .s12
      h6 Switch in field elements
    .s12.l6
      .field.middle-align
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
      .field.middle-align
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.helper Helper text
      .field.middle-align.invalid
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
