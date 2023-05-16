<template lang="pug">
#dialogs
  .large-space
  h4
    span Dialogs
    a.chip.circle(@click="domain.showSamples(data, '#dialog, #dialog-left, #dialog-right, #dialog-top, #dialog-bottom, #dialog-modal, #dialog-max, #dialog-navigation-drawer', 'Dialogs', null, 'https://github.com/beercss/beercss/blob/main/docs/DIALOG.md')")
      i code
  nav.wrap
    button(data-ui="#dialog") Default
    button(data-ui="#dialog-left") Left
    button(data-ui="#dialog-right") Right
    button(data-ui="#dialog-top") Top
    button(data-ui="#dialog-bottom") Bottom
    button(data-ui="#dialog-modal") Modal
    button(data-ui="#dialog-max") Fullscreen
    button(data-ui="#dialog-navigation-drawer") Navigation drawer

  dialog#dialog
    h5 Default
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog") Cancel
      button(data-ui="#dialog") Confirm

  dialog#dialog-left.left
    h5 Left
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-left") Cancel
      button(data-ui="#dialog-left") Confirm

  dialog#dialog-right.right
    h5 Right
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-right") Cancel
      button(data-ui="#dialog-right") Confirm

  dialog#dialog-top.top
    h5 Top
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-top") Cancel
      button(data-ui="#dialog-top") Confirm

  dialog#dialog-bottom.bottom
    h5 Bottom
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-bottom") Cancel
      button(data-ui="#dialog-bottom") Confirm

  dialog#dialog-modal.modal
    h5 Modal
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-modal") Cancel
      button(data-ui="#dialog-modal") Confirm

  dialog#dialog-max.max
    h5 Fullscreen
    div Some text here
    nav.right-align
      button.border(data-ui="#dialog-max") Cancel
      button(data-ui="#dialog-max") Confirm

  dialog#dialog-navigation-drawer.left
    header.fixed
      nav
        button.transparent.circle.large(data-ui="#dialog-navigation-drawer")
          i close
        h5.max Header
    a.row.round
      i inbox
      span Inbox
      .max
      div 24
    a.row.round
      i send
      span Outbox
      .max
      div 100+
    a.row.round
      i favorite
      span Favorities
    a.row.round
      i delete
      span Trash
    .small-divider
    .row Labels
    a.row.round
      i fiber_manual_record
      span Label
    a.row.round
      i change_history
      span Label
    a.row.round
      i stop
      span Label
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>
