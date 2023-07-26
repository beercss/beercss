<template lang="pug">
main.responsive
  
  button 
    span Date
    menu.round.no-wrap
      datePicker
  .row
    a(@click="updateTheme()")
      i.large palette
    .max
      h5 Test your changes here
      div Click on icon to change theme
  dialog.round.large-padding#default(data-ui="#default")
    h5 Default dialog
    nav.right-align
      button.border Cancel
      button Confirm

  dialog.left#left(data-ui="#left")
    h5 Left dialog
    nav.right-align
      button.border Cancel
      button Confirm

  dialog.top#top(data-ui="#top")
    h5 Top dialog
    nav.right-align
      button.border Cancel
      button Confirm

  dialog.right#right(data-ui="#right")
    h5 Right dialog
    nav.right-align
      button.border Cancel
      button Confirm

  dialog.bottom#bottom(data-ui="#bottom")
    h5 Bottom dialog
    nav.right-align
      button.border Cancel
      button Confirm

  .field.label.border
    input
    label Label
    span.helper Helper

  nav
    button(data-ui="#default") Default
    button(data-ui="#left") Left
    button(data-ui="#top") Top
    button(data-ui="#right") Right
    button(data-ui="#bottom") Bottom
  h5 With pure CSS
  nav
    button(@click="domain.updateSize('#with-pure-css .field', 'small')") small
    button(@click="domain.updateSize('#with-pure-css .field', '')") medium
    button(@click="domain.updateSize('#with-pure-css .field', 'large')") large
    button(@click="domain.updateSize('#with-pure-css .field', 'extra')") extra
  .space
  #with-pure-css.grid
    .s12.m6
      .field.label.fill
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.prefix
        i home
        input(placeholder=" ", disabled, value="100")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.round
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.fill.prefix.round
        i home
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.prefix
        i home
        input(placeholder=" ", disabled, value="100")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.round
        input(placeholder=" ")
        label Label
        span.helper Helper
    .s12.m6
      .field.label.border.prefix.round
        i home
        input(placeholder=" ")
        label Label
        span.helper
          span Helper
          i.tiny info
          .tooltip.bottom Testando tooltip
  h5 With row
  .grid
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .s6
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
    .s6
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
    .s12
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.label.border
        input
        label Label
        span.helper Helper
      .field.border.label.border
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        label.slider
          input(type="range")
          span
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        label.slider
          input(type="range")
          span
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        nav
          label.radio
            input(type="radio")
            span Item 1
          label.radio
            input(type="radio")
            span Item 2
          label.radio
            input(type="radio")
            span Item 3
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        nav
          label.radio
            input(type="radio")
            span Item 1
          label.radio
            input(type="radio")
            span Item 2
          label.radio
            input(type="radio")
            span Item 3
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        nav
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        nav
          label.checkbox
            input(type="checkbox")
            span Item 1
          label.checkbox
            input(type="checkbox")
            span Item 2
          label.checkbox
            input(type="checkbox")
            span Item 3
        span.error Error
    .s12.m6
      .field.border.label
        input
        label Label
        span.helper Helper
    .s12.m6
      .field.middle-align
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.helper Helper
    .s12.m6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .s12.m6
      .field.middle-align.invalid
        nav
          .max
            h6 Title
            div Some text here
          label.switch
            input(type="checkbox")
            span
        span.error Error

</template>

<script setup lang="ts">
import domain from "../home/domain";
import datePicker from "./datePicker/datePicker.vue";
const updateTheme = () => {
  document.body.className = document.body.className.indexOf("dark") !== -1 ? "light" : "dark";
};
</script>
