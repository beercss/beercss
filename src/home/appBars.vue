<template lang="pug">
div
  #app-bars
    h4 App bars
    .medium-space
  #top-app-bars
    h6 Top app bars
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#top-app-bars header', 'Top app bars', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input(type="radio", name="radio-top-app-bars", checked, @click="domain.updateColorTheme('#top-app-bars header')")
        span default
      label.radio
        input(type="radio", name="radio-top-app-bars", @click="domain.updateColorTheme('#top-app-bars header', 'fill')")
        span fill
      label.radio
        input(type="radio", name="radio-top-app-bars", @click="domain.updateColorTheme('#top-app-bars header', 'primary')")
        span primary
      label.radio
        input(type="radio", name="radio-top-app-bars", @click="domain.updateColorTheme('#top-app-bars header', 'secondary')")
        span secondary
      label.radio
        input(type="radio", name="radio-top-app-bars", @click="domain.updateColorTheme('#top-app-bars header', 'tertiary')")
        span tertiary
    .space
    header
      nav
        button.circle.transparent
          i menu
        h6.max.center-align Headline
        button.circle.transparent
          img.responsive(:src="'/favicon.png'")
    .space
    header
      nav
        button.circle.transparent
          i arrow_back
        h6.max Headline
        button.circle.transparent
          i attach_file
        button.circle.transparent
          i today
        button.circle.transparent
          i more_vert
    .space
    header
      nav
        button.circle.transparent
          i arrow_back
        .max
        button.circle.transparent
          i attach_file
        button.circle.transparent
          i today
        button.circle.transparent
          i more_vert
      .small-padding
        h5 Headline
    .space
    header
      nav
        button.circle.transparent
          i arrow_back
        .max
        button.circle.transparent
          i attach_file
        button.circle.transparent
          i today
        button.circle.transparent
          i more_vert
      .small-padding
        h4 Headline
  .medium-space
  #bottom-app-bars
    h6 Bottom app bars
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#bottom-app-bars footer', 'Bottom app bars', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input(type="radio", name="radio-bottom-app-bars", checked, @click="domain.updateColorTheme('#bottom-app-bars footer')")
        span default
      label.radio
        input(type="radio", name="radio-bottom-app-bars", @click="domain.updateColorTheme('#bottom-app-bars footer', 'fill')")
        span fill
      label.radio
        input(type="radio", name="radio-bottom-app-bars", @click="domain.updateColorTheme('#bottom-app-bars footer', 'primary')")
        span primary
      label.radio
        input(type="radio", name="radio-bottom-app-bars", @click="domain.updateColorTheme('#bottom-app-bars footer', 'secondary')")
        span secondary
      label.radio
        input(type="radio", name="radio-bottom-app-bars", @click="domain.updateColorTheme('#bottom-app-bars footer', 'tertiary')")
        span tertiary
    .space
    footer
      nav
        button.circle.transparent
          i check_box
        button.circle.transparent
          i brush
        button.circle.transparent
          i mic
        button.circle.transparent
          i image
        .max
        button.square.round.extra.primary
          i add
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
