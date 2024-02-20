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
    .small-divider
    .row
      div min
      div min
      .max max
    .small-divider
    .row
      div min
      .max max
      div min
    .small-divider
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
      img.circle(:src="'/beer-and-woman.svg'")
    .small-divider
    nav
      button Button
      a.chip Chip
      i home
      .max max
      img.circle(:src="'/beer-and-woman.svg'")
    .small-divider
    nav
      button Button
      a.chip Chip
      .max max
      i home
      img.circle(:src="'/beer-and-woman.svg'")
    .small-divider
    nav
      button Button
      .max max
      a.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.svg'")
    .small-divider
    nav
      .max max
      button Button
      a.chip Chip
      i home
      img.circle(:src="'/beer-and-woman.svg'")
  .medium-space
  #navigation-rail
    .medium-space
    h6.middle-align
      span Navigation rail/bar
      a.chip.circle(@click="domain.showSamples(data, '#app > div > nav.m.l', 'Navigation rail/bar', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio(v-show="!data.isHorizontal")
        input#left-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'left')", checked)
        span left
      label.radio(v-show="!data.isHorizontal")
        input#right-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'right')")
        span right
      label.radio(v-show="data.isHorizontal")
        input#top-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'top')")
        span top
      label.radio(v-show="data.isHorizontal")
        input#bottom-navigations(type="radio", name="position-navigations", @click="domain.updateMenu(data, 'bottom')")
        span bottom
  .medium-space
  #navigation-drawer
    .medium-space
    h6.middle-align
      span Navigation drawer
      a.chip.circle(@click="domain.showSamples(data, '#navigation-drawer > .row > nav', 'Navigation drawer', null, 'https://github.com/beercss/beercss/blob/main/docs/NAVIGATION.md')")
        i code
    nav.wrap
      label.radio
        input#default-navigations(type="radio", name="size-navigations", @click="domain.updateMinMax('#navigation-drawer .drawer', '')", checked)
        span default
      label.radio
        input#min-navigations(type="radio", name="size-navigations", @click="domain.updateMinMax('#navigation-drawer .drawer', 'min')")
        span min
      label.radio
        input#max-navigations(type="radio", name="size-navigations", @click="domain.updateMinMax('#navigation-drawer .drawer', 'max')")
        span max
    .row
      nav.drawer
        header
          nav
            img.circle(:src="'/favicon.png'")
            h6 Title
        a
          i inbox
          span.max Inbox
          b 24
        a
          i send
          span Outbox
        a
          i favorite
          span favorities
        a
          i delete
          span Trash
        .divider
        label Labels
        a
          i fiber_manual_record
          span Label
        a
          i change_history
          span Label
        a
          i stop
          span Label
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
