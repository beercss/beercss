<template lang="pug">
#media
  .large-space
  h4
    span Media
    a.chip.circle(
      @click="domain.showSamples(data, '#media img:visible, #media video:visible', null, 'https://github.com/beercss/beercss/blob/main/docs/MEDIA.md')"
    )
      i code
  nav.wrap.m.l
    label.radio
      input(
        v-model="data.mediaImage",
        value="1",
        type="radio",
        name="media-images"
      )
      span images
    label.radio
      input(
        v-model="data.mediaImage",
        value="2",
        type="radio",
        name="media-images"
      )
      span videos
  nav.wrap(v-if="data.mediaImage == 1")
    a
      img.circle.tiny(:src="'/beer-and-woman.jpg'")
    a
      img.circle.small(:src="'/beer-and-woman.jpg'")
    a
      img.circle(:src="'/beer-and-woman.jpg'")
    a
      img.circle.large(:src="'/beer-and-woman.jpg'")
    a
      img.circle.extra(:src="'/beer-and-woman.jpg'")
    a
      img.round.tiny(:src="'/beer-and-woman.jpg'")
    a
      img.round.small(:src="'/beer-and-woman.jpg'")
    a
      img.round(:src="'/beer-and-woman.jpg'")
    a
      img.round.large(:src="'/beer-and-woman.jpg'")
    a
      img.round.extra(:src="'/beer-and-woman.jpg'")
  nav.wrap(v-if="data.mediaImage == 1")
    a
      img.left-round.medium(:src="'/beer-and-woman.jpg'")
    a
      img.top-round.medium(:src="'/beer-and-woman.jpg'")
    a
      img.right-round.medium(:src="'/beer-and-woman.jpg'")
    a
      img.bottom-round.medium(:src="'/beer-and-woman.jpg'")
    a
      img.top-round.left-round.medium(:src="'/beer-and-woman.jpg'")
    a
      img.bottom-round.right-round.medium(:src="'/beer-and-woman.jpg'")
  nav.wrap(v-if="data.mediaImage == 2")
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
  nav.wrap(v-if="data.mediaImage == 2")
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
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>