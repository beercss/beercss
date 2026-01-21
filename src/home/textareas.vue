<template lang="pug">
#textareas
  .large-space
  h4(aria-label="textareas")
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
        textarea(aria-hidden="true")
    .s12.l4
      .field.border
        textarea(aria-hidden="true")
        output Helper text
    .s12.l4
      .field.invalid.border
        textarea(aria-hidden="true")
        output.invalid Error text
    .s12.l4
      .field.label.border
        textarea(aria-hidden="true")
        label Label
    .s12.l4
      .field.label.border
        textarea(aria-hidden="true")
        label Label
        output Helper text
    .s12.l4
      .field.label.invalid.border
        textarea(aria-hidden="true")
        label Label
        output.invalid Error text
    .s12.l4
      .field.label.prefix.border
        i search
        textarea(aria-hidden="true")
        label Label
    .s12.l4
      .field.label.suffix.border
        textarea(aria-hidden="true")
        label Label
        i search
    .s12.l4
      .field.label.prefix.suffix.border
        i search
        textarea(aria-hidden="true")
        label Label
        i search
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
