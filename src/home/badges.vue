<template lang="pug">
#badges
  .large-space
  h4 Badges
  .medium-space
  h6
    span Common badges
    a.chip.circle(@click="domain.showSamples(data, '#default-badges > *', 'Badges', null, 'https://github.com/beercss/beercss/blob/main/docs/BADGE.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-badges", checked, @click="domain.updateElementColor('#badges .badge')")
      span default
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#default-badges .badge', 'primary')")
      span primary
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#default-badges .badge', 'secondary')")
      span secondary
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#default-badges .badge', 'tertiary')")
      span tertiary
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#default-badges .badge')", checked)
      span default
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#default-badges .badge', 'top left')")
      span top left
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#default-badges .badge', 'bottom left')")
      span bottom left
    label.radio
      input(type="radio", name="position-badges", @click="domain.updatePosition('#default-badges .badge', 'bottom right')")
      span bottom right
  nav.wrap.large-space#default-badges
    a
      i home
      .badge.min
    a
      i home
      .badge 1
    a
      i home
      .badge 10
    a
      i home
      .badge New
    a
      i home
      .badge.no-round New
    a
      i home
      .badge.border New
    a
      i home
      .badge.border 10
    a
      i home
      .badge.border 1
    a
      i home
      .badge.border.no-round New
    button.circle
      i home
      .badge 1
    button
      i home
      .badge 1
    a.chip.circle
      i home
      .badge 1
    a.chip
      i home
      .badge 1
  .medium-space
  h6
    span Inline badge
    a.chip.circle(@click="domain.showSamples(data, '#inline-badges > *', 'Badges', null, 'https://github.com/beercss/beercss/blob/main/docs/BADGE.md')")
      i code
  nav#inline-badges
    button
      i home
      .badge.none 1
    button
      span Button
      .badge.none 1
    a.chip
      i home
      .badge.none 1
    a.chip
      span Button
      .badge.none 1
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
