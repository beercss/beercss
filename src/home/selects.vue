<template lang="pug">
#selects
  .large-space
  h4
    span Selects
    a.chip.circle(@click="domain.showSamples(data, '#selects .field', null, 'https://github.com/beercss/beercss/blob/main/docs/SELECT.md')")
      i code
  nav.wrap
    label.checkbox
      input#border-selects(type="checkbox", checked)
      span border
    label.checkbox
      input#round-selects(type="checkbox")
      span round
    label.checkbox
      input#fill-selects(type="checkbox")
      span fill
    label.radio
      input#small-selects(type="radio", name="size-selects")
      span small
    label.radio
      input#medium-selects(
        type="radio",
        name="size-selects",
        checked
      )
      span medium
    label.radio
      input#large-selects(type="radio", name="size-selects")
      span large
    label.radio
      input#extra-selects(type="radio", name="size-selects")
      span extra
  .space
  .row
    .col.s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
    .col.s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
        span.helper Complementary text
    .col.s12.l4
      .field.suffix.invalid.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
        span.error Error text
    .col.s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        i arrow_drop_down
    .col.s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        i arrow_drop_down
        span.helper Complementary text
    .col.s12.l4
      .field.label.suffix.invalid.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        i arrow_drop_down
        span.error Error text
    .col.s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        img.circle(:src="'/favicon.png'")
    .col.s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        img.circle(:src="'/favicon.png'")
        span.helper Complementary text
    .col.s12.l4
      .field.label.suffix.invalid.border
        select
          option Item 1
          option Item 2
          option Item 3
        label.active Label
        img.circle(:src="'/favicon.png'")
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>