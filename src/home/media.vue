<template lang="pug">
#media
  .large-space
  h4
    span Media
    a.chip.circle(
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
    a
      img.circle.tiny(:src="'/beer-and-woman.svg'")
    a
      img.circle.small(:src="'/beer-and-woman.svg'")
    a
      img.circle(:src="'/beer-and-woman.svg'")
    a
      img.circle.large(:src="'/beer-and-woman.svg'")
    a
      img.circle.extra(:src="'/beer-and-woman.svg'")
    a
      img.round.tiny(:src="'/beer-and-woman.svg'")
    a
      img.round.small(:src="'/beer-and-woman.svg'")
    a
      img.round(:src="'/beer-and-woman.svg'")
    a
      img.round.large(:src="'/beer-and-woman.svg'")
    a
      img.round.extra(:src="'/beer-and-woman.svg'")
  nav.wrap(v-if="data.mediaImage === 1")
    a
      img.left-round.medium(:src="'/beer-and-woman.svg'")
    a
      img.top-round.medium(:src="'/beer-and-woman.svg'")
    a
      img.right-round.medium(:src="'/beer-and-woman.svg'")
    a
      img.bottom-round.medium(:src="'/beer-and-woman.svg'")
    a
      img.top-round.left-round.medium(:src="'/beer-and-woman.svg'")
    a
      img.bottom-round.right-round.medium(:src="'/beer-and-woman.svg'")
  nav.wrap(v-if="data.mediaImage === 2")
    a
      video.circle.tiny(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.circle.small(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.circle.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.circle.large(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.circle.extra(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.round.tiny(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.round.small(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.round.large(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.round.extra(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
  nav.wrap(v-if="data.mediaImage === 2")
    a
      video.left-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.top-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.right-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.bottom-round.medium(autoplay, loop, muted, playsinline)
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.top-round.left-round.medium(
        autoplay,
        loop,
        muted,
        playsinline
      )
        source(:src="'/dance.mp4'", type="video/mp4")
    a
      video.bottom-round.right-round.medium(
        autoplay,
        loop,
        muted,
        playsinline
      )
        source(:src="'/dance.mp4'", type="video/mp4")
  nav.wrap(v-if="data.mediaImage === 3")
    a
      svgMountains(viewBox="450 0 900 900", className="circle tiny primary")
    a
      svgMountains(viewBox="450 0 900 900", className="circle small primary")
    a
      svgMountains(viewBox="450 0 900 900", className="circle primary")
    a
      svgMountains(viewBox="450 0 900 900", className="circle large primary")
    a
      svgMountains(viewBox="450 0 900 900", className="circle extra primary")
    a
      svgMountains(viewBox="450 0 900 900", className="round tiny primary")
    a
      svgMountains(viewBox="450 0 900 900", className="round small primary")
    a
      svgMountains(viewBox="450 0 900 900", className="round primary")
    a
      svgMountains(viewBox="450 0 900 900", className="round large primary")
    a
      svgMountains(viewBox="450 0 900 900", className="round extra primary")
  nav.wrap(v-if="data.mediaImage === 3")
    a
      svgMountains(viewBox="450 0 900 900", className="left-round medium primary")
    a
      svgMountains(viewBox="450 0 900 900", className="top-round medium primary")
    a
      svgMountains(viewBox="450 0 900 900", className="right-round medium primary")
    a
      svgMountains(viewBox="450 0 900 900", className="bottom-round medium primary")
    a
      svgMountains(viewBox="450 0 900 900", className="top-round left-round medium primary")
    a
      svgMountains(viewBox="450 0 900 900", className="bottom-round right-round medium primary")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
import svgMountains from "./svgMountains.vue";
</script>
