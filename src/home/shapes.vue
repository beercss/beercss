<template lang="pug">
#shapes
  .large-space
  h4 Shapes
  nav.wrap      
    button.chip(@click="domain.updateShape('#shape .shape', 'loading-indicator')") loading-indicator
    //button.chip(@click="domain.updateShape('#shape .shape', 'arch')") arch
    //button.chip(@click="domain.updateShape('#shape .shape', 'arrow')") arrow
    button.chip(@click="domain.updateShape('#shape .shape', 'boom')") boom
    //button.chip(@click="domain.updateShape('#shape .shape', 'bun')") bun
    button.chip(@click="domain.updateShape('#shape .shape', 'burst')") burst
    //button.chip(@click="domain.updateShape('#shape .shape', 'circle')") circle
    button.chip(@click="domain.updateShape('#shape .shape', 'clamshell')") clamshell
    button.chip(@click="domain.updateShape('#shape .shape', 'diamond')") diamond
    //button.chip(@click="domain.updateShape('#shape .shape', 'fan')") fan
    button.chip(@click="domain.updateShape('#shape .shape', 'flower')") flower
    //button.chip(@click="domain.updateShape('#shape .shape', 'gem')") gem
    //button.chip(@click="domain.updateShape('#shape .shape', 'ghost-ish')") ghost-ish
    //button.chip(@click="domain.updateShape('#shape .shape', 'heart')") heart
    //button.chip(@click="domain.updateShape('#shape .shape', 'leaf-clover4')") leaf-clover4
    //button.chip(@click="domain.updateShape('#shape .shape', 'leaft-clover8')") leaft-clover8
    //button.chip(@click="domain.updateShape('#shape .shape', 'oval')") oval
    //button.chip(@click="domain.updateShape('#shape .shape', 'pentagon')") pentagon
    //button.chip(@click="domain.updateShape('#shape .shape', 'pill')") pill
    //button.chip(@click="domain.updateShape('#shape .shape', 'pixel-circle')") pixel-circle
    //button.chip(@click="domain.updateShape('#shape .shape', 'pixel-triangle')") pixel-triangle
    button.chip(@click="domain.updateShape('#shape .shape', 'puffy')") puffy
    //button.chip(@click="domain.updateShape('#shape .shape', 'semicircle')") semicircle
    //button.chip(@click="domain.updateShape('#shape .shape', 'sided-cookie4')") sided-cookie4
    button.chip(@click="domain.updateShape('#shape .shape', 'sided-cookie6')") sided-cookie6
    button.chip(@click="domain.updateShape('#shape .shape', 'sided-cookie7')") sided-cookie7
    button.chip(@click="domain.updateShape('#shape .shape', 'sided-cookie9')") sided-cookie9
    button.chip(@click="domain.updateShape('#shape .shape', 'sided-cookie12')") sided-cookie12
    //button.chip(@click="domain.updateShape('#shape .shape', 'slanted')") slanted
    button.chip(@click="domain.updateShape('#shape .shape', 'soft-boom')") soft-boom
    button.chip(@click="domain.updateShape('#shape .shape', 'soft-burst')") soft-burst
    //button.chip(@click="domain.updateShape('#shape .shape', 'square')") square
    button.chip(@click="domain.updateShape('#shape .shape', 'sunny')") sunny
    //button.chip(@click="domain.updateShape('#shape .shape', 'triangle')") triangle
    button.chip(@click="domain.updateShape('#shape .shape', 'very-sunny')") very-sunny
  #shape
    .large-space
    h5.h6
      span Default
      button.chip.circle(
        @click="domain.showSamples(data, '#default-shapes > nav > .shape', 'Shapes', null, 'https://github.com/beercss/beercss/blob/main/docs/SHAPE.md')"
      )
        i code
    nav.wrap
      label.radio
        input(
          type="radio",
          name="size-shapes",
          @click="data.mediaShape = 0")
        span none
      label.radio
        input(
          type="radio",
          name="size-shapes",
          checked,
          @click="data.mediaShape = 1")
        span image
      label.radio
        input(type="radio", name="size-shapes", @click="data.mediaShape = 2")
        span video
      label.radio
        input(type="radio", name="size-shapes", @click="data.mediaShape = 3")
        span button
    .medium-space
    #default-shapes
      nav.wrap.no-margin(v-if="data.mediaShape === 1")
        .shape.sided-cookie12.small
          img.responsive(alt="", :src="'/favicon.png'")
        .shape.sided-cookie12.medium
          img.responsive(alt="", :src="'/favicon.png'")
        .shape.sided-cookie12.large
          img.responsive(alt="", :src="'/favicon.png'")
        .shape.sided-cookie12.extra
          img.responsive(alt="", :src="'/favicon.png'")
        .shape.sided-cookie12.small-width.small-height.rotate
          img.responsive(alt="", :src="'/favicon.png'")
      nav.wrap.no-margin(v-if="data.mediaShape === 2")
        .shape.sided-cookie12.small
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
        .shape.sided-cookie12.medium
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
        .shape.sided-cookie12.large
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
        .shape.sided-cookie12.extra
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
        .shape.sided-cookie12.small-width.small-height.rotate
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
      nav.wrap.no-margin(v-if="data.mediaShape === 3")
        .shape.sided-cookie12.small
          button.responsive
            i search
        .shape.sided-cookie12.medium
          button.responsive
            i search
        .shape.sided-cookie12.large
          button.responsive
            i search
        .shape.sided-cookie12.extra
          button.responsive
            i search
        .shape.sided-cookie12.small-width.small-height.rotate
          button.responsive
            i search
      nav.wrap.no-margin(v-if="data.mediaShape === 0")
        .shape.sided-cookie12.small
        .shape.sided-cookie12.medium
        .shape.sided-cookie12.large
        .shape.sided-cookie12.extra
        .shape.sided-cookie12.small-width.small-height.rotate
    .large-space
    h5.h6
      span Custom shape
      button.chip.circle(
        @click="domain.showSamples(data, '#shape > #custom-shapes > nav > *', 'Shapes', null, 'https://github.com/beercss/beercss/blob/main/docs/SHAPE.md')"
      )
        i code
    .medium-space
    #custom-shapes
      nav.wrap
        button.circle.extra.transparent(aria-hidden="true")
          span.shape.sided-cookie12.max.medium-space
        button.circle.extra.fill(aria-hidden="true")
          span.shape.sided-cookie12.max.medium-space
        .shape.sided-cookie12.transparent.rotate
          button.responsive(aria-hidden="true")
            i search
        button.extra.fill
          i
            span.shape.sided-cookie12.max
          span Button
        .field.border.prefix
          i
            span.shape.sided-cookie12.max
          input(aria-hidden="true")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
