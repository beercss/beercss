<template lang="pug">
#switches
  .large-space
  h4
    span Switches
    a.chip.circle(@click="domain.showSamples(data, '#switches .field:not(#switches1), #switches1 label', 'Switches', null, 'https://github.com/beercss/beercss/blob/main/docs/SWITCH.md')")
      i code
  .grid
    .s12
      .space
      h6 Switch
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
      h6 Switch in field elements
    .s12.l6
      .field.middle-align
        nav
          .max
            h6 Title
            div Complementary text
          label.switch
            input(type="checkbox")
            span
      .field.middle-align
        nav
          .max
            h6 Title
            div Complementary text
          label.switch
            input(type="checkbox")
            span
        span.helper Helper text
      .field.middle-align.invalid
        nav
          .max
            h6 Title
            div Complementary text
          label.switch
            input(type="checkbox")
            span
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>