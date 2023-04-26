<template lang="pug">
main.responsive
  .row
    a(@click="updateTheme()")
      i.large palette
    .max
      h5 Test your changes here
      div Click on icon to change theme
  .modal.round.large-padding#default(data-ui="#default")
    h5 Default modal
    nav.right-align
      button.border Cancel
      button Confirm

  .modal.left#left(data-ui="#left")
    h5 Left modal
    nav.right-align
      button.border Cancel
      button Confirm

  .modal.top#top(data-ui="#top")
    h5 Top modal
    nav.right-align
      button.border Cancel
      button Confirm

  .modal.right#right(data-ui="#right")
    h5 Right modal
    nav.right-align
      button.border Cancel
      button Confirm

  .modal.bottom#bottom(data-ui="#bottom")
    h5 Bottom modal
    .small-height
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
  h5 Without row
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
const updateTheme = () => {
  document.body.className = document.body.className.indexOf("dark") !== -1 ? "light" : "dark";
};
</script>
