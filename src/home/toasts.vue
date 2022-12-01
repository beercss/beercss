<template lang="pug">
#toasts
  .large-space
  h4
    span Toasts
    a.chip.circle(@click="domain.showSamples(data, '#toasts .toast', 'Toasts', null, 'https://github.com/beercss/beercss/blob/main/docs/TOAST.md')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="position-toasts",
        checked,
        @click="domain.updatePosition('#toasts .toast')"
      )
      span bottom
    label.radio
      input(type="radio", name="position-toasts", @click="domain.updatePosition('#toasts .toast', 'top')")
      span top
  nav.wrap
    button.pink.white-text(onclick="ui('.toast.pink')") Toast
    button.orange.white-text(onclick="ui('.toast.orange')") Toast
    button.green.white-text(onclick="ui('.toast.green')") Toast
    button.blue.white-text(onclick="ui('.toast.blue')") Toast
  .toast.pink.white-text
    i error
    span Some text here
  .toast.orange.white-text
    i warning
    span Some text here
  .toast.green.white-text
    i done
    span Some text here
  .toast.blue.white-text
    i info
    span Some text here
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
