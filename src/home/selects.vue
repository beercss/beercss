<template lang="pug">
#selects
  .large-space
  h4
    span Selects
    button.chip.circle(@click="domain.showSamples(data, '#selects .field', 'Selects', null, 'https://github.com/beercss/beercss/blob/main/docs/SELECT.md')")
      i code
  nav.wrap
    label.checkbox
      input(type="checkbox", checked, @click="domain.updateBorder('#selects .field', $event);")
      span border
    label.checkbox
      input(type="checkbox", @click="domain.updateRound('#selects .field', $event)")
      span round
    label.checkbox
      input(type="checkbox", @click="domain.updateFill('#selects .field', $event)")
      span fill
    label.radio
      input(type="radio", name="size-selects", @click="domain.updateSize('#selects .field', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-selects",
        checked,
        @click="domain.updateSize('#selects .field')"
      )
      span medium
    label.radio
      input(type="radio", name="size-selects", @click="domain.updateSize('#selects .field', 'large')")
      span large
    label.radio
      input(type="radio", name="size-selects", @click="domain.updateSize('#selects .field', 'extra')")
      span extra
  .space
  .grid
    .s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
    .s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
        span.helper Helper text
    .s12.l4
      .field.suffix.invalid.border
        select
          option Item 1
          option Item 2
          option Item 3
        i arrow_drop_down
        span.error Error text
    .s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label Label
        i arrow_drop_down
    .s12.l4
      .field.label.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        label Label
        i arrow_drop_down
        span.helper Helper text
    .s12.l4
      .field.label.suffix.invalid.border
        select
          option Item 1
          option Item 2
          option Item 3
        label Label
        i arrow_drop_down
        span.error Error text
    .s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        img.circle(:src="'/favicon.png'")
    .s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        progress.circle
    .s12.l4
      .field.suffix.border
        select
          option Item 1
          option Item 2
          option Item 3
        i
          .shape.loading-indicator.max
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
