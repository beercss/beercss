<template lang="pug">
#textareas
  .large-space
  h4
    span Textareas
    button.chip.circle(@click="domain.showSamples(data, '#textareas .field', 'Textareas', null, 'https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md')")
      i code
  nav.wrap
    label.checkbox
      input(type="checkbox", checked, @click="domain.updateBorder('#textareas .field', $event)")
      span border
    label.checkbox
      input(type="checkbox", @click="domain.updateRound('#textareas .field', $event)")
      span round
    label.checkbox
      input(type="checkbox", @click="domain.updateFill('#textareas .field', $event)")
      span fill
    label.radio
      input(type="radio", name="size-textareas", @click="updateSize('#textareas .field', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-textareas",
        checked,
        @click="updateSize('#textareas .field', '')"
      )
      span medium
    label.radio
      input(type="radio", name="size-textareas", @click="updateSize('#textareas .field', 'large')")
      span large
    label.radio
      input(type="radio", name="size-textareas", @click="updateSize('#textareas .field', 'extra')")
      span extra
  .space
  .grid
    .s12.l4
      .field.border
        textarea
    .s12.l4
      .field.border
        textarea
        output Helper text
    .s12.l4
      .field.invalid.border
        textarea
        output.invalid Error text
    .s12.l4
      .field.label.border
        textarea
        label Label
    .s12.l4
      .field.label.border
        textarea
        label Label
        output Helper text
    .s12.l4
      .field.label.invalid.border
        textarea
        label Label
        output.invalid Error text
    .s12.l4
      .field.label.prefix.border
        i search
        textarea
        label Label
    .s12.l4
      .field.label.suffix.border
        textarea
        label Label
        i search
    .s12.l4
      .field.label.prefix.suffix.border
        i search
        textarea
        label Label
        i search
    .s12.l4
      .field.border.prefix
        img(:src="'/favicon.png'")
        textarea
    .s12.l4
      .field.border.prefix
        progress.circle
        textarea
    .s12.l4
      .field.border.prefix
        i
          .shape.loading-indicator.max
        textarea
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

function updateMinMax (selector: string, css: string) {
  domain.updateMinMax(selector, css);
  ui();
}

function updateSize (selector: string, css: string) {
  domain.updateSize(selector, css);
  ui();
}
</script>
