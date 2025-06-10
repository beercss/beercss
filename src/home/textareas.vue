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
        @click="updateSize('#textareas .field')"
      )
      span medium
    label.radio
      input(type="radio", name="size-textareas", @click="updateSize('#textareas .field', 'large')")
      span large
    label.radio
      input(type="radio", name="size-textareas", @click="updateSize('#textareas .field', 'extra')")
      span extra
    label.radio
      input(type="radio", name="minmax-textareas", checked, @click="updateMinMax('#textareas .field', '')")
      span max
    label.radio
      input(type="radio", name="minmax-textareas", @click="updateMinMax('#textareas .field', 'min')")
      span min
  .space
  .grid
    .s12.l4
      .field.textarea.border
        textarea
    .s12.l4
      .field.textarea.border
        textarea
        span.helper Helper text
    .s12.l4
      .field.textarea.invalid.border
        textarea
        span.error Error text
    .s12.l4
      .field.textarea.label.border
        textarea
        label Label
    .s12.l4
      .field.textarea.label.border
        textarea
        label Label
        span.helper Helper text
    .s12.l4
      .field.textarea.label.invalid.border
        textarea
        label Label
        span.error Error text
    .s12.l4
      .field.textarea.label.prefix.border
        i search
        textarea
        label Label
    .s12.l4
      .field.textarea.label.suffix.border
        textarea
        label Label
        i search
    .s12.l4
      .field.textarea.label.prefix.suffix.border
        i search
        textarea
        label Label
        i search
    .s12.l4
      .field.textarea.border.prefix
        img(:src="'/favicon.png'")
        textarea
    .s12.l4
      .field.textarea.border.prefix
        progress.circle
        textarea
    .s12.l4
      .field.textarea.border.prefix
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
