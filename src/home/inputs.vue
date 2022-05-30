<template lang="pug">
#inputs
  .large-space
  h4
    span Inputs
    a.chip.circle(@click="domain.showSamples(data, '#inputs .field', null, 'https://github.com/beercss/beercss/blob/main/docs/INPUT.md')")
      i code
  nav.wrap
    label.checkbox
      input#border-inputs(type="checkbox", checked)
      span border
    label.checkbox
      input#round-inputs(type="checkbox")
      span round
    label.checkbox
      input#fill-inputs(type="checkbox")
      span fill
    label.radio
      input#small-inputs(type="radio", name="size-inputs")
      span small
    label.radio
      input#medium-inputs(
        type="radio",
        name="size-inputs",
        checked
      )
      span medium
    label.radio
      input#large-inputs(type="radio", name="size-inputs")
      span large
    label.radio
      input#extra-inputs(type="radio", name="size-inputs")
      span extra
    label.radio
      input#text-inputs(
        type="radio",
        name="type-inputs",
        checked
      )
      span text
    label.radio
      input#password-inputs(type="radio", name="type-inputs")
      span password
    label.radio
      input#file-inputs(type="radio", name="type-inputs")
      span file
    label.radio
      input#date-inputs(type="radio", name="type-inputs")
      span date
    label.radio
      input#time-inputs(type="radio", name="type-inputs")
      span time
  .space
  .row
    .col.s12.l4
      .field.border
        input(type="text")
    .col.s12.l4
      .field.border
        input(type="text")
        span.helper Complementary text
    .col.s12.l4
      .field.invalid.border
        input(type="text")
        span.error Error text
    .col.s12.l4
      .field.label.border
        input(type="text")
        label Label
    .col.s12.l4
      .field.label.border
        input(type="text")
        label Label
        span.helper Complementary text
    .col.s12.l4
      .field.label.invalid.border
        input(type="text")
        label Label
        span.error Error text
    .col.s12.l4
      .field.label.prefix.border
        i search
        input(type="text")
        label Label
    .col.s12.l4
      .field.label.suffix.border
        input(type="text")
        label Label
        i search
    .col.s12.l4
      .field.label.prefix.suffix.border
        i search
        input(type="text")
        label Label
        i search
    .col.s12.l4
      .field.label.prefix.border
        img.circle(:src="'/favicon.png'")
        input(type="text")
        label Label
    .col.s12.l4
      .field.label.suffix.border
        input(type="text")
        label Label
        img.circle(:src="'/favicon.png'")
    .col.s12.l4
      .field.label.prefix.suffix.border
        img.circle(:src="'/favicon.png'")
        input(type="text")
        label Label
        img.circle(:src="'/favicon.png'")
    .col.s12.l4
      .field.border.prefix
        a.loader
        input(type="text")
    .col.s12.l4
      .field.border.suffix
        input(type="text")
        a.loader
    .col.s12.l4
      .field.border.prefix.suffix
        a.loader
        input(type="text")
        a.loader
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>