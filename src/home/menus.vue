<template lang="pug">
#menus
  .large-space
  h4
    span Menus
    button.chip.circle(
      @click="domain.showSamples(data, '#menus > nav > div', 'Menus', null, 'https://github.com/beercss/beercss/blob/main/docs/MENU.md')"
    )
      i code
  nav.wrap
    div
      button
        span Default
        i arrow_drop_down
      menu
        li Item 1
        li Item 2
        li Item 3
    div
      button
        span Border
        i arrow_drop_down
      menu.border
        li Item 1
        li Item 2
        li Item 3
    div
      button
        span No-wrap
        i arrow_drop_down
      menu.no-wrap
        li Lorem ipsum dolor sit amet
        li Lorem ipsum dolor sit amet
        li Lorem ipsum dolor sit amet
    div
      button.circle
        i arrow_back
      menu.left.no-wrap
        li Item 1
        li Item 2
        li Item 3
    div
      button.circle
        i arrow_forward
      menu.right.no-wrap
        li Item 1
        li Item 2
        li Item 3
    div
      button
        span Top
        i arrow_drop_up
      menu.top
        li Item 1
        li Item 2
        li Item 3
    div
      button
        span Links
        i arrow_drop_down
      menu
        li
          a Item 1
        li
          a Item 2
        li
          a Item 3
    div
      button
        span Images and icons
      menu.no-wrap
        li Title
        li
          div Title
          label Some text here
        li
          i home
          span Title
        li
          i home
          .max
            div Title
            label Some text here
        li
          img.circle.tiny(:src="'/beer-and-woman.svg'")
          span Title
        li
          img.circle.tiny(:src="'/beer-and-woman.svg'")
          .max
            div Title
            label Some text here
    div
      button
        span Video
      menu.no-wrap.no-padding
        li.no-padding
          video.small-width(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
    div
      button
        span Docked
      menu.min
        li Item 1
        li Item 2
        li Item 3
    div
      button
        span Fullscreen
      menu.max
        li Item 1
        li Item 2
        li Item 3
  nav.wrap
    div
      button
        span Multi level
        i arrow_drop_down
      menu
        li Item
        li Item
        li More items
          menu
            li Item
            li Item
            li More items
              menu
                li Item
                li Item
                li item
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
