<template lang="pug">
#media
  .large-space
  h4
    span Media
    button.chip.circle(
      @click="domain.showSamples(data, '#media img, #media video, #media svg', 'Media', null, 'https://github.com/beercss/beercss/blob/main/docs/MEDIA.md')"
    )
      i code
  nav.wrap.m.l
    label.radio
      input(
        v-model="data.mediaImage",
        :value="1",
        type="radio",
        name="media-images"
      )
      span images
    label.radio
      input(
        v-model="data.mediaImage",
        :value="2",
        type="radio",
        name="media-images"
      )
      span videos
    label.radio
      input(
        v-model="data.mediaImage",
        :value="3",
        type="radio",
        name="media-images"
      )
      span svgs
  nav.wrap(v-if="data.mediaImage === 1")
    a(href="javascript:;", aria-hidden="true")
      img.circle.tiny(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.circle.small(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.circle(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.circle.large(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.circle.extra(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.round.tiny(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.round.small(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.round(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.round.large(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.round.extra(alt="", :src="'/beer-and-woman.svg'")
  nav.wrap(v-if="data.mediaImage === 1")
    a(href="javascript:;", aria-hidden="true")
      img.left-round.medium(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.top-round.medium(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.right-round.medium(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.bottom-round.medium(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.top-round.left-round.medium(alt="", :src="'/beer-and-woman.svg'")
    a(href="javascript:;", aria-hidden="true")
      img.bottom-round.right-round.medium(alt="", :src="'/beer-and-woman.svg'")
  nav.wrap(v-if="data.mediaImage === 2")
    a(href="javascript:;", aria-hidden="true")
      video.circle.tiny(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.circle.small(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.circle.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.circle.large(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.circle.extra(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.round.tiny(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.round.small(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.round.large(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.round.extra(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
  nav.wrap(v-if="data.mediaImage === 2")
    a(href="javascript:;", aria-hidden="true")
      video.left-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.top-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.right-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.bottom-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.top-round.left-round.medium(
        autoplay,
        loop,
        muted,
        playsinline
      )
        source(:src="'/dance.mp4'", type="video/mp4")
    a(href="javascript:;", aria-hidden="true")
      video.bottom-round.right-round.medium(
        autoplay,
        loop,
        muted,
        playsinline
      )
        source(:src="'/dance.mp4'", type="video/mp4")
  nav.wrap(v-if="data.mediaImage === 3")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="circle tiny primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="circle small primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="circle primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="circle large primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="circle extra primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="round tiny primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="round small primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="round primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="round large primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="round extra primary")
  nav.wrap(v-if="data.mediaImage === 3")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="left-round medium primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="top-round medium primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="right-round medium primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="bottom-round medium primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="top-round left-round medium primary")
    a(href="javascript:;", aria-hidden="true")
      svgMountains(viewBox="450 0 900 900", class-name="bottom-round right-round medium primary")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import svgMountains from "./svgMountains.vue";
</script>
