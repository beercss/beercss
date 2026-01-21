<template lang="pug">
#switches
  .large-space
  h4(aria-label="switches")
    span Switches
    button.chip.circle(@click="domain.showSamples(data, '#switches .field:not(#switches1, #switches2), #switches1 label, #switches2 label', 'Switches', null, 'https://github.com/beercss/beercss/blob/main/docs/SWITCH.md')")
      i code
  h5(style="display: none") Empty
  .grid
    .s12
      .space
      h6(aria-hidden="true") Default switch
      .field.middle-align#switches1
        nav.wrap
          label.switch
            input(type="checkbox", aria-hidden="true")
            span
          label.switch
            input(type="checkbox", aria-hidden="true")
            span
          label.switch
            input(type="checkbox", disabled, aria-hidden="true")
            span
          label.switch
            input(type="checkbox", checked, disabled, aria-hidden="true")
            span
    .s12
      h6(aria-hidden="true") Switch with icons
      .field.middle-align#switches2
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
      h6(aria-hidden="true") Switch in field elements
    .s12.l6
      .field.middle-align
        nav
          .max
            h6(aria-hidden="true") Title
            div Some text here
          label.switch
            input(type="checkbox", aria-hidden="true")
            span
      .field.middle-align
        nav
          .max
            h6(aria-hidden="true") Title
            div Some text here
          label.switch
            input(type="checkbox", aria-hidden="true")
            span
        output Helper text
      .field.middle-align.invalid
        nav
          .max
            h6(aria-hidden="true") Title
            div Some text here
          label.switch
            input(type="checkbox", aria-hidden="true")
            span
        output.invalid Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
