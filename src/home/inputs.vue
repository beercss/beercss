<template lang="pug">
#inputs
  .large-space
  h4
    span Inputs
    button.chip.circle(@click="domain.showSamples(data, '#inputs .field', 'Inputs', null, 'https://github.com/beercss/beercss/blob/main/docs/INPUT.md')")
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
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'number')")
      span number
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'password')")
      span password
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'file')")
      span file
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'color')")
      span color
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'date')")
      span date
    label.radio
      input(type="radio", name="type-inputs", @click="domain.updateFieldType('#inputs .field', 'time')")
      span time
  .space
  .grid
    .s12.l4
      .field.border
        input(type="text")
    .s12.l4
      .field.border
        input(type="text")
        span.helper Helper text
    .s12.l4
      .field.invalid.border
        input(type="text")
        span.error Error text
    .s12.l4
      .field.label.border
        input(type="text")
        label Label
    .s12.l4
      .field.label.border
        input(type="text")
        label Label
        span.helper Helper text
    .s12.l4
      .field.label.invalid.border
        input(type="text")
        label Label
        span.error Error text
    .s12.l4
      .field.label.prefix.border
        i search
        input(type="text")
        label Label
    .s12.l4
      .field.label.suffix.border
        input(type="text")
        label Label
        i search
    .s12.l4
      .field.label.prefix.suffix.border
        i search
        input(type="text")
        label Label
        i search
    .s12.l4
      .field.border.prefix
        img.circle(:src="'/favicon.png'")
        input(type="text")
    .s12.l4
      .field.border.prefix
        progress.circle
        input(type="text")
    .s12.l4
      .field.border.prefix
        i
          .shape.loading-indicator.max
        input(type="text")
  .medium-space
  h6
    span Custom inputs
    button.chip.circle(@click="domain.showSamples(data, '#inputs-custom nav > *', 'Custom inputs', null, null)")
      i code
  .medium-space
  #inputs-custom
    nav.wrap
      button.circle
        i attach_file
        input(type="file")
      button.circle
        i palette
        input(type="color")
      button.circle
        i today
        input(type="date")
      button.circle
        i schedule
        input(type="time")
      button
        i attach_file
        span File
        input(type="file")
      button
        i palette
        span Color
        input(type="color")
      button
        i today
        span Date
        input(type="date")
      button
        i schedule
        span Time
        input(type="time")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
