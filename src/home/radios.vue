<template lang="pug">
#radios
  .large-space
  h4
    span Radios
    a.chip.circle(@click="domain.showSamples(data, '#radios .field:not(#radios1), #radios1 label', null, 'https://github.com/beercss/beercss/blob/main/docs/RADIO.md')")
      i code
  .row
    .col.s12
      .field.middle-align#radios1
        nav
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
    .col.s12.l4
      .field.middle-align
        nav
          label.radio
            input(type="radio", name="radio3")
            span Item 1
          label.radio
            input(type="radio", name="radio3")
            span Item 2
          label.radio
            input(type="radio", name="radio3")
            span Item 3
    .col.s12.l4
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
        span.helper Complementary text
    .col.s12.l4
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