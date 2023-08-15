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
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25")
        span
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="5", min="4", max="8")
        span
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25")
        input(type="range", value="50")
        span
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25", disabled)
        span
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
  .medium-space
  .grid#sliders2
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25")
        span
        .tooltip
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="5", min="4", max="8")
        span
        .tooltip
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25")
        input(type="range", value="50")
        span
        .tooltip
        .tooltip
    .s12.m6.l3.center-align
      label.slider
        input(type="range", value="25", disabled)
        span
        .tooltip
  .medium-space
  h6
    span Slider with icon
    a.chip.circle(@click="domain.showSamples(data, '#sliders4 nav', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders4", checked="checked", @click="domain.updateSize('#sliders4 .slider')")
      span default
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders4",
        @click="domain.updateSize('#sliders4 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider', 'large')")
      span large
    label.radio
      input(type="radio", name="direction-sliders4", @click="domain.updateDirection('#sliders4 .slider, #sliders4 nav', ''); updateHorizontalSlider(true);", checked)
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders4", @click="domain.updateDirection('#sliders4 .slider, #sliders4 nav', 'vertical'); updateHorizontalSlider(false);")
      span vertical
  .medium-space
  .grid.large-space#sliders4
    .s12.m6.l4.center-align
      nav
        i(v-if="data.isHorizontalSlider") remove
        i(v-else) add
        label.slider
          input(type="range")
          span
        i(v-if="data.isHorizontalSlider") add
        i(v-else) remove
    .s12.m6.l4.center-align
      nav
        i(v-if="data.isHorizontalSlider") volume_down
        i(v-else) volume_up
        label.slider
          input(type="range")
          span
        i(v-if="data.isHorizontalSlider") volume_up
        i(v-else) volume_down
    .s12.m6.l4.center-align
      nav
        i(v-if="data.isHorizontalSlider") sunny
        i(v-else) rainy
        label.slider
          input(type="range", value="25")
          span
        i(v-if="data.isHorizontalSlider") rainy
        i(v-else) sunny
  .medium-space
  h6
    span Slider in field elements
    a.chip.circle(@click="domain.showSamples(data, '#sliders3 .field', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
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
          span
        span.error Error text
    .s12.m6.l4
      .field.middle-align.prefix.suffix
        i sunny
        label.slider
          input(type="range", value="25")
          span
        span.helper Helper
        i rainy
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const updateHorizontalSlider = (isHorizontal: boolean) => {
  data.value.isHorizontalSlider = isHorizontal;
};
</script>
