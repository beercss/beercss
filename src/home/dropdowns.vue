<template lang="pug">
#dropdowns
  .large-space
  h4
    span Dropdowns
    a.chip.circle(
      @click="domain.showSamples(data, '#dropdowns button, #dropdowns .field', null, 'https://github.com/beercss/beercss/blob/main/docs/DROPDOWN.md')"
    )
      i code
  nav.wrap
    button(data-ui="#dropdown1")
      span This is a large button
      i arrow_drop_down
      #dropdown1.dropdown(data-ui="#dropdown1")
        a Title
        a
          div Title
          label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col
            div Title
            label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col
            div Title
            label Complementary text
    button(data-ui="#dropdown2")
      span Button
      i arrow_drop_down
      #dropdown2.dropdown.no-wrap(data-ui="#dropdown2")
        a Title
        a
          div Title
          label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col
            div Title
            label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col
            div Title
            label Complementary text
    button.circle(data-ui="#dropdown3")
      i arrow_back
      #dropdown3.dropdown.left.no-wrap(data-ui="#dropdown3")
        a Title
        a
          div Title
          label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col
            div Title
            label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col
            div Title
            label Complementary text
    button.circle(data-ui="#dropdown4")
      i arrow_forward
      #dropdown4.dropdown.right.no-wrap(data-ui="#dropdown4")
        a Title
        a
          div Title
          label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            i home
          .col
            div Title
            label Complementary text
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col Title
        a.row.no-wrap.middle-align
          .col.min
            img.circle.tiny(:src="'/beer-and-woman.jpg'")
          .col
            div Title
            label Complementary text
    button(data-ui="#dropdown6")
      span Video
      #dropdown6.dropdown.no-padding.small-width(data-ui="#dropdown6") 
        video.responsive(autoplay, loop, muted, playsinline)
          source(:src="'/dance.mp4'", type="video/mp4")
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>