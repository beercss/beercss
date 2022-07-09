<template lang="pug">
main.responsive
  .row.no-wrap.middle-align
    .col.min
      a(@click="updateTheme()")
        i.large brightness_medium
    .col
      h5 Test your changes here
      div Click on icon to change theme
  .modal.round.large-padding#default(data-ui="#default")
    h5 Default modal
    nav.right-align
      button.round.border Cancel
      button.round Confirm
      
  .modal.left#left(data-ui="#left")
    h5 Left modal
    nav.right-align
      button.round.border Cancel
      button.round Confirm
    
  .modal.top#top(data-ui="#top")
    h5 Top modal
    nav.right-align
      button.round.border Cancel
      button.round Confirm

  .modal.right#right(data-ui="#right")
    h5 Right modal
    nav.right-align
      button.round.border Cancel
      button.round Confirm
    
  .modal.bottom#bottom(data-ui="#bottom")
    h5 Bottom modal
    .small-height
    nav.right-align
      button.round.border Cancel
      button.round Confirm

  .field.label.border
    input
    label Label
    span.helper Helper

  nav
    button.round(data-ui="#default") Default
    button.round(data-ui="#left") Left
    button.round(data-ui="#top") Top
    button.round(data-ui="#right") Right
    button.round(data-ui="#bottom") Bottom
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
  .row
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s4
      .field.label.border
        input
        label Label
        span.helper Helper
    .col.s6
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
    .col.s6
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
    .col.s12
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
    .col.s6
      .field.border.label
        input
        label Label
        span.helper Helper
    .col.s6
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
    .col.s6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .col.s6
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
        span.error Teste
    .col.s6
      .field.border.label
        input
        label Label
        span.helper Helper
    .col.s6
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
    .col.s6
      .field.border.label.invalid
        input
        label Label
        span.error Error
    .col.s6
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
        span.error Teste

</template>

<script setup lang="ts">
const updateTheme = () => {
  document.body.className =document.body.className.indexOf("dark") != -1 ? "light" : "dark";
}
</script>