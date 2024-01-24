<template lang="pug">
#dialogs
  .large-space
  h4
    span Dialogs
    a.chip.circle(@click="domain.showSamples(data, '#dialogs .dialog-code', 'Dialogs', null, 'https://github.com/beercss/beercss/blob/main/docs/DIALOG.md', true)")
      i code
  nav.wrap
    button(data-ui="#dialog") Default
    button(data-ui="#dialog-modal") Modal
    button(data-ui="#dialog-custom-overlay") Custom overlay
    button(data-ui="#dialog-left") Left
    button(data-ui="#dialog-right") Right
    button(data-ui="#dialog-top") Top
    button(data-ui="#dialog-bottom") Bottom
    button(data-ui="#dialog-max") Fullscreen
    button(data-ui="#dialog-navigation-drawer") Navigation drawer

  .dialog-code
    .overlay
    dialog#dialog
      h5 Default
      div Some text here
      nav.right-align.no-space
        button.transparent.link(data-ui="#dialog") Cancel
        button.transparent.link(data-ui="#dialog") Confirm

  .dialog-code
    .overlay
    dialog#dialog-modal.modal
      h5 Modal
      div Some text here
      nav.right-align.no-space
        button.transparent.link(data-ui="#dialog-modal") Cancel
        button.transparent.link(data-ui="#dialog-modal") Confirm

  .dialog-code
    .overlay.blur
    dialog#dialog-custom-overlay
      h5 Custom overlay
      div Some text here
      nav.right-align.no-space
        button.transparent.link(data-ui="#dialog-custom-overlay") Cancel
        button.transparent.link(data-ui="#dialog-custom-overlay") Confirm

  .dialog-code
    .overlay
    dialog#dialog-left.left
      h5 Left
      div Some text here
      nav.right-align
        button.border(data-ui="#dialog-left") Cancel
        button(data-ui="#dialog-left") Confirm

  .dialog-code
    .overlay
    dialog#dialog-right.right
      h5 Right
      div Some text here
      nav.right-align
        button.border(data-ui="#dialog-right") Cancel
        button(data-ui="#dialog-right") Confirm

  .dialog-code
    .overlay
    dialog#dialog-top.top
      h5 Top
      div Some text here
      nav.right-align
        button.border(data-ui="#dialog-top") Cancel
        button(data-ui="#dialog-top") Confirm

  .dialog-code
    .overlay
    dialog#dialog-bottom.bottom
      h5 Bottom
      div Some text here
      nav.right-align
        button.border(data-ui="#dialog-bottom") Cancel
        button(data-ui="#dialog-bottom") Confirm

  .dialog-code
    .overlay
    dialog#dialog-max.max
      h5 Fullscreen
      div Some text here
      nav.right-align
        button.border(data-ui="#dialog-max") Cancel
        button(data-ui="#dialog-max") Confirm

  .dialog-code
    .overlay
    dialog#dialog-navigation-drawer.left.no-padding
      nav.drawer
        header
          nav
            img.circle(:src="'/favicon.png'")
            h6.max Title
            button.transparent.circle.large(data-ui="#dialog-navigation-drawer")
              i close
        a
          i inbox
          span.max Inbox
          b 24
        a
          i send
          span Outbox
        a
          i favorite
          span favorities
        a
          i delete
          span Trash
        .divider
        label Labels
        a
          i fiber_manual_record
          span Label
        a
          i change_history
          span Label
        a
          i stop
          span Label
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
