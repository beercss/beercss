<template lang="pug">
#inputs
  .large-space
  h4
    span Inputs
    a.chip.circle(@click="domain.showSamples(data, '#inputs .field', null, 'https://github.com/beercss/beercss/blob/main/docs/INPUT.md')")
      i code
  nav.wrap
    label.checkbox
      input(type="checkbox", checked, @click="domain.updateBorder('#inputs .field', $event)")
      span border
    label.checkbox
      input(type="checkbox", @click="domain.updateRound('#inputs .field', $event)")
      span round
    label.checkbox
      input(type="checkbox", @click="domain.updateFill('#inputs .field', $event)")
      span fill
    label.radio
      input(type="radio", name="size-inputs", @click="domain.updateSize('#inputs .field', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-inputs",
        checked,
        @click="domain.updateSize('#inputs .field')"
      )
      span medium
    label.radio
      input(type="radio", name="size-inputs", @click="domain.updateSize('#inputs .field', 'large')")
      span large
    label.radio
      input(type="radio", name="size-inputs", @click="domain.updateSize('#inputs .field', 'extra')")
      span extra
    label.radio
      input(
        type="radio",
        name="type-inputs",
        checked,
        @click="domain.updateFieldType('#inputs .field', 'text')"
      )
      span text
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'password')")
      span password
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'file')")
      span file
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'date')")
      span date
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'time')")
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