<template lang="pug">
#modals
  .large-space
  h4
    span Modals
    a.chip.circle(@click="domain.showSamples(data, '#modal, #modal-left, #modal-right, #modal-top, #modal-bottom, #modal-navigation-drawer', 'Modals', null, 'https://github.com/beercss/beercss/blob/main/docs/MODAL.md')")
      i code
  nav.wrap
    button(data-ui="#modal") Default
    button(data-ui="#modal-left") Left
    button(data-ui="#modal-right") Right
    button(data-ui="#modal-top") Top
    button(data-ui="#modal-bottom") Bottom
    button(data-ui="#modal-navigation-drawer") Navigation drawer

  #modal.modal
    h5 Title
    div Some text here
    nav.right-align
      button.border(data-ui="#modal") Cancel
      button(data-ui="#modal") Confirm

  #modal-left.modal.left
    h5 Title
    div Some text here
    nav.right-align
      button.border(data-ui="#modal-left") Cancel
      button(data-ui="#modal-left") Confirm

  #modal-right.modal.right
    h5 Title
    div Some text here
    nav.right-align
      button.border(data-ui="#modal-right") Cancel
      button(data-ui="#modal-right") Confirm

  #modal-top.modal.top
    h5 Title
    div Some text here
    nav.right-align
      button.border(data-ui="#modal-top") Cancel
      button(data-ui="#modal-top") Confirm

  #modal-bottom.modal.bottom
    h5 Title
    div Some text here
    nav.right-align
      button.border(data-ui="#modal-bottom") Cancel
      button(data-ui="#modal-bottom") Confirm

  #modal-navigation-drawer.modal.left
    header.fixed
      nav
        button.transparent.circle(data-ui="#modal-navigation-drawer")
          i menu
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