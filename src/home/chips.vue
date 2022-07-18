<template lang="pug">
#chips
  .large-space
  h4
    span Chips
    a.chip.circle(@click="domain.showSamples(data, '#chips nav .chip', 'Chips', null, 'https://github.com/beercss/beercss/blob/main/docs/CHIP.md')")
      i code
  nav.wrap
    label.radio
      input(
        type="radio",
        name="color-chips",
        checked,
        @click="domain.updateElementColor('#chips nav .chip')"
      )
      span default
    label.radio
      input(type="radio", name="color-chips", @click="domain.updateElementColor('#chips nav .chip', 'brown')")
      span brown
    label.radio
      input(type="radio", name="color-chips", @click="domain.updateElementColor('#chips nav .chip', 'indigo')")
      span indigo
    label.radio
      input(type="radio", name="color-chips", @click="domain.updateElementColor('#chips nav .chip', 'red')")
      span red
    label.radio
      input(type="radio", name="size-chips", @click="domain.updateSize('#chips nav .chip', 'small')")
      span small
    label.radio
      input(
        type="radio",
        name="size-chips",
        checked,
        @click="domain.updateSize('#chips nav .chip')"
      )
      span medium
    label.radio
      input(type="radio", name="size-chips", @click="domain.updateSize('#chips nav .chip', 'large')")
      span large
    label.checkbox
      input(type="checkbox", name="active-chips", @click="domain.updateActive('#chips nav .chip', $event)")
      span active
  .grid
    .s12.m12.l6
      nav.wrap
        a.chip Chip
        a.chip
          i.small done
          span Chip
        a.chip
          img(:src="'/favicon.png'")
          span Chip
        a.chip
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.round Chip
        a.chip.round
          i.small done
          span Chip
        a.chip.round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.left-round.top-round Chip
        a.chip.left-round.bottom-round
          i.small done
          span Chip
        a.chip.right-round.top-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.right-round.bottom-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.left-round Chip
        a.chip.left-round
          i.small done
          span Chip
        a.chip.left-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.left-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.right-round Chip
        a.chip.right-round
          i.small done
          span Chip
        a.chip.right-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.right-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.square
          i search
        a.chip.diamond
          i search
        a.chip.square.round
          i search
        a.chip.diamond.round
          i search
        a.chip.circle
          i search
        a.chip.square.left-round.top-round
          i search
        a.chip.square.left-round.bottom-round
          i search
        a.chip.square.right-round.top-round
          i search
        a.chip.square.right-round.bottom-round
          i search
        a.chip.square.left-round
          i search
        a.chip.square.right-round
          i search
        a.chip.square
          img.responsive(:src="'/favicon.png'")
        a.chip.square.round
          img.responsive(:src="'/favicon.png'")
        a.chip.circle
          img.responsive(:src="'/favicon.png'")
        a.chip.square.left-round.top-round
          img.responsive(:src="'/favicon.png'")
        a.chip.square.left-round.bottom-round
          img.responsive(:src="'/favicon.png'")
        a.chip.square.right-round.top-round
          img.responsive(:src="'/favicon.png'")
        a.chip.square.right-round.bottom-round
          img.responsive(:src="'/favicon.png'")
        a.chip.square.left-round
          img.responsive(:src="'/favicon.png'")
        a.chip.square.right-round
          img.responsive(:src="'/favicon.png'")
    .s12.m12.l6
      nav.wrap
        a.chip.border Chip
        a.chip.border
          i.small done
          span Chip
        a.chip.border
          img(:src="'/favicon.png'")
          span Chip
        a.chip.border
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.border.round Chip
        a.chip.border.round
          i.small done
          span Chip
        a.chip.border.round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.border.round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.border.left-round.top-round Chip
        a.chip.border.left-round.bottom-round
          i.small done
          span Chip
        a.chip.border.right-round.top-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.border.right-round.bottom-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.border.left-round Chip
        a.chip.border.left-round
          i.small done
          span Chip
        a.chip.border.left-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.border.left-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.border.right-round Chip
        a.chip.border.right-round
          i.small done
          span Chip
        a.chip.border.right-round
          img(:src="'/favicon.png'")
          span Chip
        a.chip.border.right-round
          img.responsive(:src="'/favicon.png'")
          span Chip
      nav.wrap
        a.chip.border.square
          i search
        a.chip.border.diamond
          i search
        a.chip.border.square.round
          i search
        a.chip.border.diamond.round
          i search
        a.chip.border.circle
          i search
        a.chip.border.square.left-round.top-round
          i search
        a.chip.border.square.left-round.bottom-round
          i search
        a.chip.border.square.right-round.top-round
          i search
        a.chip.border.square.right-round.bottom-round
          i search
        a.chip.border.square.left-round
          i search
        a.chip.border.square.right-round
          i search
        a.chip.border.square
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.circle
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.left-round.top-round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.left-round.bottom-round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.right-round.top-round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.right-round.bottom-round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.left-round
          img.responsive(:src="'/favicon.png'")
        a.chip.border.square.right-round
          img.responsive(:src="'/favicon.png'")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>