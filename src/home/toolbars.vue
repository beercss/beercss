<template lang="pug">
#toolbars
  .large-space
  h4 Toolbars
  .medium-space
  #default-toolbars
    h5.h6
      span Default
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#default-toolbars .toolbar', 'Toolbars', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.wrap
      label.radio
        input(type="radio", name="radio-color-toolbars", checked, @click="domain.updateColorTheme('#default-toolbars .toolbar')")
        span default
      label.radio
        input(type="radio", name="radio-color-toolbars", @click="domain.updateColorTheme('#default-toolbars .toolbar', 'fill')")
        span fill
      label.radio
        input(type="radio", name="radio-color-toolbars", @click="domain.updateColorTheme('#default-toolbars .toolbar', 'primary')")
        span primary
      label.radio
        input(type="radio", name="radio-color-toolbars", @click="domain.updateColorTheme('#default-toolbars .toolbar', 'secondary')")
        span secondary
      label.radio
        input(type="radio", name="radio-color-toolbars", @click="domain.updateColorTheme('#default-toolbars .toolbar', 'tertiary')")
        span tertiary
      label.radio
        input(type="radio", name="radio-direction-toolbars", checked @click="domain.updateDirection('#default-toolbars .toolbar', '')")
        span horizontal
      label.radio
        input(type="radio", name="radio-direction-toolbars", @click="domain.updateDirection('#default-toolbars .toolbar', 'vertical')")
        span vertical
      label.radio
        input(type="radio", name="radio-elevate-toolbars", checked @click="domain.updateElevate('#default-toolbars .toolbar', '')")
        span no-elevate
      label.radio
        input(type="radio", name="radio-elevate-toolbars", @click="domain.updateElevate('#default-toolbars .toolbar', 'small-elevate')")
        span small-elevate
      label.radio
        input(type="radio", name="radio-elevate-toolbars", @click="domain.updateElevate('#default-toolbars .toolbar', 'medium-elevate')")
        span medium-elevate
      label.radio
        input(type="radio", name="radio-elevate-toolbars", @click="domain.updateElevate('#default-toolbars .toolbar', 'large-elevate')")
        span large-elevate
    nav.center-align
      nav.toolbar
        a(data-ui="", href="javascript:;")
          i videocam_off
        a(data-ui="", href="javascript:;")
          i mic
        a.active(data-ui="", href="javascript:;")
          i front_hand
        a(data-ui="", href="javascript:;")
          i more_vert
    nav.center-align.m.l
      nav.toolbar
        a(data-ui="", href="javascript:;")
          i videocam_off
          div Video
        a(data-ui="", href="javascript:;")
          i mic
          span Speech
        a.active(data-ui="", href="javascript:;")
          i front_hand
          span Attention
        a(data-ui="", href="javascript:;")
          i more_vert
          span More
  .large-space
  #floating-toolbars  
    h5.h6
      span Floating
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#floating-toolbars > nav', 'Toolbars', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    nav.center-align.tiny-space
      nav.toolbar
        a(data-ui="", href="javascript:;")
          i videocam_off
        a(data-ui="", href="javascript:;")
          i mic
        a.active(data-ui="", href="javascript:;")
          i front_hand
        a(data-ui="", href="javascript:;")
          i more_vert
      button.extra.round.circle.error
        i call_end
    nav.center-align.tiny-space.m.l
      nav.toolbar
        a(data-ui="", href="javascript:;")
          i videocam_off
          div Video
        a(data-ui="", href="javascript:;")
          i mic
          span Mic
        a.active(data-ui="", href="javascript:;")
          i front_hand
          span Attention
        a(data-ui="", href="javascript:;")
          i more_vert
          span More
      button.extra.round.circle.error
        i call_end
  .large-space
  #docked-toolbars
    h5.h6
      span Docked
      button.chip.circle(
        @click="data.layout = 0; domain.showSamples(data, '#docked-toolbars .toolbar', 'Toolbars', null, 'https://github.com/beercss/beercss/blob/main/docs/LAYOUT.md')"
      )
        i code
    div
    nav.toolbar.max
      a(data-ui="", href="javascript:;")
        i videocam_off
      a(data-ui="", href="javascript:;")
        i mic
      a.active(data-ui="", href="javascript:;")
        i front_hand
      a(data-ui="", href="javascript:;")
        i more_vert
    div
    nav.toolbar.max.m.l
      a(data-ui="", href="javascript:;")
        i videocam_off
        span Video
      a(data-ui="", href="javascript:;")
        i mic
        span Mic
      a.active(data-ui="", href="javascript:;")
        i front_hand
        span Attention
      a(data-ui="", href="javascript:;")
        i more_vert
        span More
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
