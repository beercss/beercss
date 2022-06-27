<template lang="pug">
#navigations
  .large-space
  h4
    span Navigations
  .medium-space
  h6.middle-align
    span Navigations
    a.chip.circle(@click="domain.showSamples(data, '#navigation-default nav', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="alignment-navigations", checked, @click="domain.updateAlign('#navigation-default > nav')")
      span left-align
    label.radio
      input(type="radio", name="alignment-navigations", @click="domain.updateAlign('#navigation-default > nav', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="alignment-navigations", @click="domain.updateAlign('#navigation-default > nav', 'right-align')")
      span right-align
  #navigation-default
    nav
      button Button
      a.chip Chip
      i home
      a
        img.circle(:src="'/beer-and-woman.jpg'")
  #navigation-rail.m.l
    .medium-space
    h6.middle-align
      span Navigation rail/bar
      a.chip.circle(@click="domain.showSamples(data, '#app > div > nav:visible', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio
        input#left-navigations(type="radio", name="position-navigations", @click="domain.updateMenu('#app > div > nav:visible', 'left')", checked)
        span left
      label.radio
        input#right-navigations(type="radio", name="position-navigations", @click="domain.updateMenu('#app > div > nav:visible', 'right')")
        span right
      label.radio
        input#top-navigations(type="radio", name="position-navigations", @click="domain.updateMenu('#app > div > nav:visible', 'top')")
        span top
      label.radio
        input#bottom-navigations(type="radio", name="position-navigations", @click="domain.updateMenu('#app > div > nav:visible', 'bottom')")
        span bottom
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>