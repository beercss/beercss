<template lang="pug">
#responsive
  .large-space
  h4
    span Responsive
    button.chip.circle(@click="domain.showSamples(data, '#responsive nav', 'Responsive', null, 'https://github.com/beercss/beercss/blob/main/docs/HELPERS.md')")
      i code
  nav
    button.s.circle.extra
      i phone_android
    button.m.l.border.circle.extra
      i phone_android
    button.m.circle.extra
      i tablet_android
    button.s.l.border.circle.extra
      i tablet_android
    button.l.circle.extra
      i laptop_windows
    button.s.m.border.circle.extra
      i laptop_windows
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
