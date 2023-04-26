<template lang="pug">
#badges
  .large-space
  h4
    span Badges
    a.chip.circle(@click="domain.showSamples(data, '#badges nav > a', 'Badges', null, 'https://github.com/beercss/beercss/blob/main/docs/BADGE.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-badges", checked, @click="domain.updateElementColor('#badges .badge')")
      span default
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'primary')")
      span primary
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'secondary')")
      span secondary
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'tertiary')")
      span tertiary
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge', 'top')")
      span top
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge', 'bottom')")
      span bottom
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge', 'left')")
      span left
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge', 'right')")
      span right
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge')", checked)
      span top/right
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#badges .badge', 'bottom left')")
      span bottom/left
  .medium-space
  nav.wrap.large-space
    a
      span.badge New
      i search
    span
    a
      span.badge.square 10
      i home
    span
    a
      span.badge.round New
      i notifications
    span
    a
      span.badge.circle 10
      i widgets
    span
    a
      span.badge.border New
      i search
    span
    a
      span.badge.border.square 10
      i home
    span
    a
      span.badge.border.round New
      i notifications
    span
    a
      span.badge.border.circle 10
      i widgets
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
