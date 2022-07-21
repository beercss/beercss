<template lang="pug">
#dropdowns
  .large-space
  h4
    span Dropdowns
    a.chip.circle(
      @click="domain.showSamples(data, '#dropdowns button, #dropdowns .field', 'Dropdowns', null, 'https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md')"
    )
      i code
  nav.wrap
    button
      span Default
      i arrow_drop_down
      .dropdown
        a Item 1
        a Item 2
        a Item 3
    button
      span No-wrap
      i arrow_drop_down
      .dropdown.no-wrap
        a Lorem ipsum dolor sit amet
        a Lorem ipsum dolor sit amet
        a Lorem ipsum dolor sit amet
    button.circle
      i arrow_back
      .dropdown.left.no-wrap
        a Item 1
        a Item 2
        a Item 3
    button.circle
      i arrow_forward
      .dropdown.right.no-wrap
        a Item 1
        a Item 2
        a Item 3
    button
      span Images and icons
      .dropdown.no-wrap
        a Title
        a
          div Title
          label Some text here
        a.row
          i home
          span Title
        a.row
          i home
          .max
            div Title
            label Some text here
        a.row
          img.circle.tiny(:src="'/beer-and-woman.jpg'")
          span Title
        a.row
          img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .max
            div Title
            label Some text here
    button
      span Video
      .dropdown.no-padding.small-width
        video.responsive(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>