<template lang="pug">
#menus
  .large-space
  h4
    span Menus
    button.chip.circle(
      @click="domain.showSamples(data, '#menus > nav > button', 'Menus', null, 'https://github.com/beercss/beercss/blob/main/docs/MENU.md')"
    )
      i code
  nav.wrap
    button(data-ui="#menu1")
      span Default
      i arrow_drop_down
      menu#menu1(data-ui="#menu1")
        li Item 1
        li Item 2
        li Item 3
    button(data-ui="#menu11")
      span Border
      i arrow_drop_down
      menu#menu11.border(data-ui="#menu11")
        li Item 1
        li Item 2
        li Item 3
    button(data-ui="#menu2")
      span No-wrap
      i arrow_drop_down
      menu#menu2.no-wrap(data-ui="#menu2")
        li Lorem ipsum dolor sit amet
        li Lorem ipsum dolor sit amet
        li Lorem ipsum dolor sit amet
    button.circle(data-ui="#menu3")
      i arrow_back
      menu#menu3.left.no-wrap(data-ui="#menu3")
        li Item 1
        li Item 2
        li Item 3
    button.circle(data-ui="#menu4")
      i arrow_forward
      menu#menu4.right.no-wrap(data-ui="#menu4")
        li Item 1
        li Item 2
        li Item 3
    button(data-ui="#menu12")
      span Top
      i arrow_drop_up
      menu#menu12.top(data-ui="#menu12")
        li Item 1
        li Item 2
        li Item 3
    button(data-ui="#menu10")
      span Links
      i arrow_drop_down
      menu#menu10(data-ui="#menu10")
        li
          a Item 1
        li
          a Item 2
        li
          a Item 3
    button(data-ui="#menu5")
      span Images and icons
      menu#menu5.no-wrap(data-ui="#menu5")
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
    button(data-ui="#menu6")
      span Video
      menu#menu6.no-wrap(data-ui="#menu6")
        li.no-padding
          video.small-width(autoplay, loop, muted, playsinline)
            source(:src="'/dance.mp4'", type="video/mp4")
    button(data-ui="#menu8")
      span Docked
      menu#menu8.min(data-ui="#menu8")
        li Item 1
        li Item 2
        li Item 3
    button(data-ui="#menu7")
      span Fullscreen
      menu#menu7.max(data-ui="#menu7")
        li Item 1
        li Item 2
        li Item 3
  nav.wrap
    button(data-ui="#menu9")
      span Multi level
      i arrow_drop_down
      menu(id="menu9")
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
