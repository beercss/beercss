<template lang="pug">
#navigations
  .large-space
  h4
    span Navigations
  .medium-space
  h6.middle-align
    span Navigations
    a.chip.circle(@click="domain.showSamples(data, '#navigation-default nav', 'Navigations', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="align-navigations", checked, @click="domain.updateAlign('#navigation-default > nav')")
      span left-align
    label.radio
      input(type="radio", name="align-navigations", @click="domain.updateAlign('#navigation-default > nav', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="align-navigations", @click="domain.updateAlign('#navigation-default > nav', 'right-align')")
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
      a.chip.circle(@click="domain.showSamples(data, '#app > div > nav.m.l', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio
        input#left-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'left')", checked)
        span left
      label.radio
        input#right-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'right')")
        span right
      label.radio
        input#top-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'top')")
        span top
      label.radio
        input#bottom-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'bottom')")
        span bottom
      label.radio(v-show="data.isHorizontal")
        input(type="radio", name="horizontal-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'left-align')")
        span left-align
      label.radio(v-show="data.isHorizontal")
        input(type="radio", name="horizontal-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'center-align')")
        span center-align
      label.radio(v-show="data.isHorizontal")
        input(type="radio", name="horizontal-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'right-align')")
        span right-align
      label.radio(v-show="!data.isHorizontal")
        input(type="radio", name="vertical-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'top-align')")
        span top-align
      label.radio(v-show="!data.isHorizontal")
        input(type="radio", name="vertical-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'middle-align')")
        span middle-align
      label.radio(v-show="!data.isHorizontal")
        input(type="radio", name="vertical-navigations", @click="domain.updateAlign('#app > div > nav.m.l', 'bottom-align')")
        span bottom-align
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>