<template lang="pug">
#shapes
  .large-space
  h4
    span Shapes
    button.chip.circle(
      @click="domain.showSamples(data, '#shape > nav > *', 'Shapes', null, 'https://github.com/beercss/beercss/blob/main/docs/SHAPE.md')"
    )
      i code
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
    ///button.chip(@click="domain.updateShape('#shape .shape', 'fan')") fan
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


  .large-space
  #shape
    h6 Default
    nav.wrap
      .shape.loading-indicator.tiny
      .shape.loading-indicator
      .shape.loading-indicator.medium
      .shape.loading-indicator.large
      .shape.loading-indicator.extra
      .shape.loading-indicator.extra
        img.responsive(:src="'/favicon.png'")
      .shape.loading-indicator.extra
        video.responsive(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
      .shape.loading-indicator.extra
        button.responsive
          i search
      .shape.loading-indicator.extra.transparent
        button.responsive
          i search
    .large-space
    h6 Custom
    nav.wrap
      .small-width.small-height
        .shape.loading-indicator.max.rotate
      .small-width.small-height
        .shape.loading-indicator.max.rotate
          img.responsive(:src="'/favicon.png'")
      .small-width.small-height
        .shape.loading-indicator.max.rotate
          video.responsive(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
    nav.wrap
      button.circle.extra.transparent
        .shape.loading-indicator.max.medium-space
      button.circle.extra.fill
        .shape.loading-indicator.max.medium-space
      button.extra.fill
        i
          .shape.loading-indicator.max
        span Button
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
