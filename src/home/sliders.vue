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
  .grid#sliders1
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25")
          span
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="5", min="4", max="8")
          span
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25")
          input(type="range", value="50")
          span
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25", disabled)
          span
  .medium-space
  h6
    span Slider with tooltip
    a.chip.circle(@click="domain.showSamples(data, '#sliders2 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  .grid#sliders2
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25")
          span
          .tooltip
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="5", min="4", max="8", )
          span
          .tooltip
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25")
          input(type="range", value="50")
          span
          .tooltip
    .s12.m6.l3
      .field.middle-align
        label.slider
          input(type="range", value="25", disabled)
          span
          .tooltip
  .medium-space
  h6
    span Slider in field elements
    a.chip.circle(@click="domain.showSamples(data, '#sliders3 .field', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  .grid#sliders3
    .s12.m6.l4
      .field.middle-align
        label.slider
          input(type="range", value="25")
          span
    .s12.m6.l4
      .field.middle-align
        label.slider
          input(type="range", value="25")
          span
        span.helper Helper text
    .s12.m6.l4
      .field.middle-align.invalid
        label.slider
          input(type="range", value="25")
          span
        span.error Error text
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
