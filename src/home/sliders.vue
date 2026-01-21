<template lang="pug">
#sliders
  .large-space
  h4(aria-label="sliders")
    span Sliders
  h5(style="display: none") Empty
  .medium-space
  h6(aria-hidden="true")
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
      .slider
        input(type="range", value="25", aria-hidden="true")
        span
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="5", min="4", max="8", aria-hidden="true")
        span
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", aria-hidden="true")
        input(type="range", value="50", aria-hidden="true")
        span
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", disabled, aria-hidden="true")
        span
  h6(aria-hidden="true")
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
      .slider
        input(type="range", value="25", aria-hidden="true")
        span
        span.tooltip
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="5", min="4", max="8", aria-hidden="true")
        span
        span.tooltip
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", aria-hidden="true")
        input(type="range", value="50", aria-hidden="true")
        span
        span.tooltip
        span.tooltip
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", disabled, aria-hidden="true")
        span
        span.tooltip
  .medium-space
  h6(aria-hidden="true")
    span Value indicator bottom
    button.chip.circle(@click="domain.showSamples(data, '#sliders6 .slider', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="size-sliders6", checked="checked", @click="domain.updateSize('#sliders6 .slider')")
      span tiny
    label.radio
      input(type="radio", name="size-sliders6", @click="domain.updateSize('#sliders6 .slider', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-sliders6",
        @click="domain.updateSize('#sliders6 .slider', 'medium')"
      )
      span medium
    label.radio
      input(type="radio", name="size-sliders6", @click="domain.updateSize('#sliders6 .slider', 'large')")
      span large
    label.radio
      input(type="radio", name="size-sliders6", @click="domain.updateSize('#sliders6 .slider', 'extra')")
      span extra
    label.radio
      input(type="radio", name="direction-sliders6", checked, @click="domain.updateDirection('#sliders6 .slider', '')")
      span horizontal
    label.radio
      input(type="radio", name="direction-sliders6", @click="domain.updateDirection('#sliders6 .slider', 'vertical')")
      span vertical
  .medium-space
  .grid#sliders6
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", aria-hidden="true")
        span
        span.tooltip.bottom
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="5", min="4", max="8", aria-hidden="true")
        span
        span.tooltip.bottom
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", aria-hidden="true")
        input(type="range", value="50", aria-hidden="true")
        span
        span.tooltip.bottom
        span.tooltip.bottom
    .s12.m6.l3.center-align
      .slider
        input(type="range", value="25", disabled, aria-hidden="true")
        span
        span.tooltip.bottom
  .medium-space
  h6(aria-hidden="true")
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
      .slider.medium
        input(type="range", aria-hidden="true")
        span
          i volume_up
    .s12.m6.l4.center-align
      .slider.medium
        input(type="range", aria-hidden="true")
        span
          i add
    .s12.m6.l4.center-align
      .slider.medium
        input(type="range", value="25", aria-hidden="true")
        span
          i sunny
  .medium-space
  h6(aria-hidden="true")
    span Slider in field elements
    button.chip.circle(@click="domain.showSamples(data, '#sliders3 .field', 'Sliders', null, 'https://github.com/beercss/beercss/blob/main/docs/SLIDER.md')")
      i code
  .medium-space
  .grid#sliders3
    .s12.m6.l4
      .field.middle-align
        .slider
          input(type="range", value="25", aria-hidden="true")
          span
        output Helper
    .s12.m6.l4
      .field.middle-align
        .slider
          input(type="range", value="25", aria-hidden="true")
          span
        output.invalid Error text
    .s12.m6.l4
      .field.middle-align.prefix.suffix
        nav
          i sunny
          .slider
            input(type="range", value="25", aria-hidden="true")
            span
          i rainy
        output Helper
  .large-space
  #sliders5
    h6(aria-hidden="true") Custom slider
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
      .small-width.small-height.round.fill
        .slider.max
          input(type="range", value="30", max="100", aria-hidden="true")
          span
      .small-width.small-height.round.fill
        .slider.max.vertical
          input(type="range", value="30", max="100", aria-hidden="true")
          span

</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";

const updateHorizontalSlider = (isHorizontal: boolean) => {
  data.value.isHorizontalSlider = isHorizontal;
};
</script>
