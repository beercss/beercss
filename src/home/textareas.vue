<template lang="pug">
#textareas
  .large-space
  h4
    span Textareas
    a.chip.circle(@click="domain.showSamples(data, '#textareas .field', null, 'https://github.com/beercss/beercss/blob/main/docs/TEXTAREA.md')")
      i code
  nav.wrap
    label.checkbox
      input#border-textareas(type="checkbox", checked)
      span border
    label.checkbox
      input#round-textareas(type="checkbox")
      span round
    label.checkbox
      input#fill-textareas(type="checkbox")
      span fill
    label.radio
      input#small-textareas(type="radio", name="size-textareas")
      span small
    label.radio
      input#medium-textareas(
        type="radio",
        name="size-textareas",
        checked
      )
      span medium
    label.radio
      input#large-textareas(type="radio", name="size-textareas")
      span large
    label.radio
      input#extra-textareas(type="radio", name="size-textareas")
      span extra
  .space
  .row
    .col.s12.l4
      .field.textarea.border
        textarea
    .col.s12.l4
      .field.textarea.border
        textarea
        span.helper Complementary text
    .col.s12.l4
      .field.textarea.invalid.border
        textarea
        span.error Error text
    .col.s12.l4
      .field.textarea.label.border
        textarea
        label Label
    .col.s12.l4
      .field.textarea.label.border
        textarea
        label Label
        span.helper Complementary text
    .col.s12.l4
      .field.textarea.label.invalid.border
        textarea
        label Label
        span.error Error text
    .col.s12.l4
      .field.textarea.label.prefix.border
        i search
        textarea
        label Label
    .col.s12.l4
      .field.textarea.label.suffix.border
        textarea
        label Label
        i search
    .col.s12.l4
      .field.textarea.label.prefix.suffix.border
        i search
        textarea
        label Label
        i search
    .col.s12.l4
      .field.textarea.label.prefix.border
        img.circle(:src="'/favicon.png'")
        textarea
        label Label
    .col.s12.l4
      .field.textarea.label.suffix.border
        textarea
        label Label
        img.circle(:src="'/favicon.png'")
    .col.s12.l4
      .field.textarea.label.prefix.suffix.border
        img.circle(:src="'/favicon.png'")
        textarea
        label Label
        img.circle(:src="'/favicon.png'")
    .col.s12.l4
      .field.textarea.border.prefix
        a.loader
        textarea
    .col.s12.l4
      .field.textarea.border.suffix
        textarea
        a.loader
    .col.s12.l4
      .field.textarea.border.prefix.suffix
        a.loader
        textarea
        a.loader
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>