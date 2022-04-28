<template lang="pug">
#toasts
  .large-space
  h4
    span Toasts
    a.chip.circle(@click="domain.showSamples(data, '#toasts .toast', null, 'https://github.com/beercss/beercss/blob/main/docs/TOAST.md')")
      i code
  nav.wrap
    label.radio
      input#bottom-toasts(
        type="radio",
        name="position-toasts",
        checked
      )
      span bottom
    label.radio
      input#top-toasts(type="radio", name="position-toasts")
      span top
  nav.wrap
    button.pink.white-text(onclick="ui('.toast.pink')") Toast
    button.orange.white-text(onclick="ui('.toast.orange')") Toast
    button.green.white-text(onclick="ui('.toast.green')") Toast
    button.blue.white-text(onclick="ui('.toast.blue')") Toast
  .toast.pink.white-text
    i error
    span Complementary text
  .toast.orange.white-text
    i warning
    span Complementary text
  .toast.green.white-text
    i done
    span Complementary text
  .toast.blue.white-text
    i info
    span Complementary text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>