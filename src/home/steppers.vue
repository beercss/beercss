<template lang="pug">
#steppers
  .large-space
  h4 
    span Steppers
    a.chip.circle(
      @click="domain.showSamples(data, '#steppers > nav.scroll', 'Steppers', null, null)"
    )
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-steppers", checked, @click="domain.updateElementColor('#steppers button')")
      span default
    label.radio
      input(type="radio", name="color-steppers", @click="domain.updateElementColor('#steppers button', 'fill')")
      span fill
    label.radio
      input(type="radio", name="color-steppers", @click="domain.updateElementColor('#steppers button', '')")
      span primary
    label.radio
      input(type="radio", name="color-steppers", @click="domain.updateElementColor('#steppers button', 'secondary')")
      span secondary
    label.radio
      input(type="radio", name="color-steppers", @click="domain.updateElementColor('#steppers button', 'tertiary')")
      span tertiary
    label.radio
      input(type="radio", name="size-steppers", @click="domain.updateSize('#steppers button', 'small')")
      span small
    label.radio
      input(type="radio", name="size-steppers",  checked, @click="domain.updateSize('#steppers button', '')")
      span medium
    label.radio
      input(type="radio", name="size-steppers", @click="domain.updateSize('#steppers button', 'large')")
      span large
  .medium-space
  nav.scroll
    button First
    .max.divider
    button Second
    .max.divider
    button Third
  .medium-space
  nav.scroll
    button.circle 1
    .max.divider
    button.circle 2
    .max.divider
    button.circle 3
  .medium-space
  nav.scroll
    button.circle 1
    div First
    .max.divider
    button.circle 2
    div Second
    .max.divider
    button.circle 3
    div Third
  .medium-space
  nav.scroll
    .center-align
      button.circle 1
      .small-margin First
    .max.divider
    .center-align
      button.circle 2
      .small-margin Second
    .max.divider
    .center-align
      button.circle 3
      .small-margin Third
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
  