<template lang="pug">
#inputs
  .large-space
  h4(aria-label="inputs")
    span Inputs
    button.chip.circle(@click="domain.showSamples(data, '#inputs .field', 'Inputs', null, 'https://github.com/beercss/beercss/blob/main/docs/INPUT.md')")
      i code
  h5(style="display: none") Empty
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
        input(type="text", aria-hidden="true")
    .s12.l4
      .field.border
        input(type="text", aria-hidden="true")
        output Helper text
    .s12.l4
      .field.invalid.border
        input(type="text", aria-hidden="true")
        output.invalid Error text
    .s12.l4
      .field.label.border
        input(type="text", aria-hidden="true")
        label Label
    .s12.l4
      .field.label.border
        input(type="text", aria-hidden="true")
        label Label
        output Helper text
    .s12.l4
      .field.label.invalid.border
        input(type="text", aria-hidden="true")
        label Label
        output.invalid Error text
    .s12.l4
      .field.label.prefix.border
        i search
        input(type="text", aria-hidden="true")
        label Label
    .s12.l4
      .field.label.suffix.border
        input(type="text", aria-hidden="true")
        label Label
        i.front search
    .s12.l4
      .field.label.prefix.suffix.border
        i search
        input(type="text", aria-hidden="true")
        label Label
        i.front search
  .medium-space
  h6(aria-hidden="true")
    span Custom inputs
    button.chip.circle(@click="domain.showSamples(data, '#inputs-custom nav > *', 'Custom inputs', null, null)")
      i code
  .medium-space
  #inputs-custom
    nav.wrap
      div
        button.circle
          i attach_file
        input(type="file", aria-hidden="true")
      div
        button.circle
          i palette
        input(type="color", aria-hidden="true")
      div
        button.circle
          i today
        input(type="date", aria-hidden="true")
      div
        button.circle
          i schedule
        input(type="time", aria-hidden="true")
      div
        button
          i attach_file
          span File
        input(type="file", aria-hidden="true")
      div
        button
          i palette
          span Color
        input(type="color", aria-hidden="true")
      div 
        button
          i today
          span Date
        input(type="date", aria-hidden="true")
      div
        button
          i schedule
          span Time
        input(type="time", aria-hidden="true")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
