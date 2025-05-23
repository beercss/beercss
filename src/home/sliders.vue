<template lang="pug">
#sliders
  .large-space
  h4
    span Sliders
  .medium-space
  h6
    span Default slider
    button.chip.circle(@click="domain.showSamples(data, '#sliders1 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders1", checked="checked", @click="domain.updateSize('#sliders1 .slider', '')")
      span tiny
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
      input(type="radio", name="size-sliders1", @click="domain.updateSize('#sliders1 .slider', 'extra')")
      span extra
    label.radio
      input(type="radio", name="direction-sliders1", checked, @click="domain.updateDirection('#sliders1 .slider', '')")
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
    span Value indicator
    button.chip.circle(@click="domain.showSamples(data, '#sliders2 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders2", checked="checked", @click="domain.updateSize('#sliders2 .slider')")
      span tiny
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
      input(type="radio", name="size-sliders2", @click="domain.updateSize('#sliders2 .slider', 'extra')")
      span extra
    label.radio
      input(type="radio", name="direction-sliders2", checked, @click="domain.updateDirection('#sliders2 .slider', '')")
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders2", @click="domain.updateDirection('#sliders2 .slider', 'vertical')")
      span vertical
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
    span Inset icon
    button.chip.circle(@click="domain.showSamples(data, '#sliders4 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider')")
      span tiny
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders4",
        checked,
        @click="domain.updateSize('#sliders4 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider', 'large')")
      span large
    label.radio
      input(type="radio", name="size-sliders4", @click="domain.updateSize('#sliders4 .slider', 'extra')")
      span extra
    label.radio
      input(type="radio", name="direction-sliders4", checked, @click="domain.updateDirection('#sliders4 .slider', ''); domain.updateAlign('#sliders4 nav', ''); updateHorizontalSlider(true);")
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders4", @click="domain.updateDirection('#sliders4 .slider', 'vertical'); domain.updateAlign('#sliders4 nav', 'center-align'); updateHorizontalSlider(false);")
      span vertical
  .medium-space
  .grid.large-space#sliders4
    .s12.m6.l4.center-align
      label.slider.medium
        input(type="range")
        span
          i volume_up
    .s12.m6.l4.center-align
      label.slider.medium
        input(type="range")
        span
          i add
    .s12.m6.l4.center-align
      label.slider.medium
        input(type="range", value="25")
        span
          i sunny
  .medium-space
  h6
    span Slider in field elements
    button.chip.circle(@click="domain.showSamples(data, '#sliders3 .field', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
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
  .large-space
  #sliders5
    h6 Custom slider
      button.chip.circle(@click="domain.showSamples(data, '#sliders5 nav > :not(label)', 'Custom', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
        i code
    nav.wrap
      label.radio
        input(type="radio", name="color-sliders5", checked, @click="domain.updateTextColor('#sliders5 .slider', '')")
        span primary
      label.radio
        input(type="radio", name="color-sliders5", @click="domain.updateTextColor('#sliders5 .slider', 'orange-text')")
        span orange-text
      label.radio
        input(type="radio", name="color-sliders5", @click="domain.updateTextColor('#sliders5 .slider', 'green-text')")
        span green-text
    .medium-space
    nav.top-align.wrap
      article.small-width.small-height.round
        label.slider.max
          input(type="range", value="30", max="100")
          span
      article.small-width.small-height.round
        label.slider.max.vertical
          input(type="range", value="30", max="100")
          span
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const updateHorizontalSlider = (isHorizontal: boolean) => {
  data.value.isHorizontalSlider = isHorizontal;
};
</script>
