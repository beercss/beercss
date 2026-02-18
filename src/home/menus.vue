<template lang="pug">
#menus
  .large-space
  h4
    span Menus
    button.chip.circle(
      @click="domain.showSamples(data, '#default-menus > nav > div', 'Menus', null, 'https://github.com/beercss/beercss/blob/main/docs/MENU.md')"
    )
      i code
  nav.wrap
    label.radio
      input(type="radio", name="radio-color-menus", checked, @click="domain.updateColorTheme('#default-menus menu:not(.group)')")
      span default
    label.radio
      input(type="radio", name="radio-color-menus", @click="domain.updateColorTheme('#default-menus menu:not(.group)', 'primary')")
      span primary
    label.radio
      input(type="radio", name="radio-color-menus", @click="domain.updateColorTheme('#default-menus menu:not(.group)', 'secondary')")
      span secondary
    label.radio
      input(type="radio", name="radio-color-menus", @click="domain.updateColorTheme('#default-menus menu:not(.group)', 'tertiary')")
      span tertiary
  .medium-space
  #default-menus
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
          span Links
          i arrow_drop_down
        menu
          li
            a(href="javascript:;") Item 1
          li
            a(href="javascript:;") Item 2
          li
            a(href="javascript:;") Item 3
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
        button.circle
          i arrow_upward
        menu.top.no-wrap
          li Item 1
          li Item 2
          li Item 3
      div
        button
          span Divider
          i arrow_drop_down
        menu
          li Item 1
          li Item 2
          li
            hr
          li Item 3
      div
        button
          span Grouped
          i arrow_drop_down
        menu.group
          li
            menu
              li Item 1
              li Item 2
          li
            menu
              li Item 3
      div
        button
          span Selected
          i arrow_drop_down
        menu
          li Item 1
          li.active Item 2
          li Item 3
      div
        button
          span Images and icons
          i arrow_drop_down
        menu.no-wrap
          li
            i home
            span Title
          li
            i home
            .max
              div Title
              label Some text here
          li
            img.circle.tiny(alt="", :src="'/beer-and-woman.svg'")
            span Title
          li
            img.circle.tiny(alt="", :src="'/beer-and-woman.svg'")
            .max
              div Title
              label Some text here
      div
        button
          span Video
          i arrow_drop_down
        menu.no-wrap.transparent
          li
            video.small-width(autoplay, loop, muted, playsinline)
              source(:src="'/dance.mp4'", type="video/mp4")
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
      div
        button
          span Docked menu
          i dock_to_bottom
        menu.min
          li Item 1
          li Item 2
          li Item 3
      div
        button
          span Fullscreen
          i fullscreen
        menu.max
          li Item 1
          li Item 2
          li Item 3
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
