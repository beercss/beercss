<template lang="pug">
#navigations
  .large-space
  h4
    span Navigations
  .medium-space
  h6.middle-align
    span Rows
    a.chip.circle(@click="domain.showSamples(data, '#row-default > .row', 'Rows', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="horizontal-rows", checked, @click="domain.updateHorizontalAlign('#row-default > .row')")
      span left-align
    label.radio
      input(type="radio", name="horizontal-rows", @click="domain.updateHorizontalAlign('#row-default > .row', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="horizontal-rows", @click="domain.updateHorizontalAlign('#row-default > .row', 'right-align')")
      span right-align
  .medium-space
  #row-default
    .row
      div min
      div min
      div min
    .divider
    .row
      div min
      div min
      .max max
    .divider
    .row
      div min
      .max max
      div min
    .divider
    .row
      .max max
      div min
      div min
  .medium-space
  h6.middle-align
    span Navigations
    a.chip.circle(@click="domain.showSamples(data, '#navigation-default > nav', 'Navigations', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="horizontal-navigations", checked, @click="domain.updateHorizontalAlign('#navigation-default > nav')")
      span left-align
    label.radio
      input(type="radio", name="horizontal-navigations", @click="domain.updateHorizontalAlign('#navigation-default > nav', 'center-align')")
      span center-align
    label.radio
      input(type="radio", name="horizontal-navigations", @click="domain.updateHorizontalAlign('#navigation-default > nav', 'right-align')")
      span right-align
  .medium-space
  #navigation-default
    nav
      button Button
      a.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.jpg'")
    .divider
    nav
      button Button
      a.chip Chip
      i home
      .max max
      img.circle(:src="'/beer-and-woman.jpg'")
    .divider
    nav
      button Button
      a.chip Chip
      .max max
      i home
      img.circle(:src="'/beer-and-woman.jpg'")
    .divider
    nav
      button Button
      .max max
      a.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.jpg'")
    .divider
    nav
      .max max
      button Button
      a.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.jpg'")
  .medium-space
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