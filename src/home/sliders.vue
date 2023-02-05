<template lang="pug">
#sliders
  .large-space
  h4
    span Sliders
  .medium-space
  h6
    span Default slider
    a.chip.circle(@click="domain.showSamples(data, '#sliders1 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders1", checked="checked", @click="domain.updateSize('#sliders1 .slider')")
      span default
    label.radio
      input(type="radio", name="size-sliders1", @click="domain.updateSize('#sliders1 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders1",
        @click="domain.updateSize('#sliders1 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders1", @click="domain.updateSize('#sliders1 .slider', 'large')")
      span large
    label.radio
      input(type="radio", name="direction-sliders1", @click="domain.updateDirection('#sliders1 .slider', '')", checked)
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders1", @click="domain.updateDirection('#sliders1 .slider', 'vertical')")
      span vertical
  .medium-space
  .grid#sliders1
    .s12.m6.l3
      label.slider
        input(type="range", value="25")
        span
    .s12.m6.l3
      label.slider
        input(type="range", value="5", min="4", max="8")
        span
    .s12.m6.l3
      label.slider
        input(type="range", value="25")
        input(type="range", value="50")
        span
    .s12.m6.l3
      label.slider
        input(type="range", value="25", disabled)
        span
  .medium-space
  h6
    span Slider with tooltip
    a.chip.circle(@click="domain.showSamples(data, '#sliders2 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders2", checked="checked", @click="domain.updateSize('#sliders2 .slider')")
      span default
    label.radio
      input(type="radio", name="size-sliders2", @click="domain.updateSize('#sliders2 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders2",
        @click="domain.updateSize('#sliders2 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders2", @click="domain.updateSize('#sliders2 .slider', 'large')")
      span large
    label.radio
      input(type="radio", name="direction-sliders2", @click="domain.updateDirection('#sliders2 .slider', '')", checked)
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders2", @click="domain.updateDirection('#sliders2 .slider', 'vertical')")
      span vertical
  .medium-space
  .grid#sliders2
    .s12.m6.l3
      label.slider
        input(type="range", value="25")
        span
        .tooltip
    .s12.m6.l3
      label.slider
        input(type="range", value="5", min="4", max="8", )
        span
        .tooltip
    .s12.m6.l3
      label.slider
        input(type="range", value="25")
        input(type="range", value="50")
        span
        .tooltip
    .s12.m6.l3
      label.slider
        input(type="range", value="25", disabled)
        span
        .tooltip
  .medium-space
  h6
    span Slider in field elements
    a.chip.circle(@click="domain.showSamples(data, '#sliders3 .field', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders3", checked="checked", @click="domain.updateSize('#sliders3 .slider')")
      span default
    label.radio
      input(type="radio", name="size-sliders3", @click="domain.updateSize('#sliders3 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders3",
        @click="domain.updateSize('#sliders3 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders3", @click="domain.updateSize('#sliders3 .slider', 'large')")
      span large
  .medium-space
  .grid#sliders3
    .s12.m6.l4
      .field.middle-align
        label.slider
          input(type="range", value="25")
          span
        span.helper Helper
    .s12.m6.l4
      .field.middle-align
        label.slider
          input(type="range", value="25")
          input(type="range", value="50")
          span
        span.helper Helper
    .s12.m6.l4
      .field.middle-align
        label.slider
          input(type="range", value="25")
          input(type="range", value="50")
          span
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
