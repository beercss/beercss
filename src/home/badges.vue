<template lang="pug">
#badges
  h4
    span Badges
    a.chip.circle(@click="domain.showSamples(data, '#badges nav > a', 'Badges', null, 'https://github.com/beercss/beercss/blob/main/docs/BADGE.md')")
      i code
  nav.wrap
    label.radio
      input(type="radio", name="color-badges", checked, @click="domain.updateElementColor('#badges .badge')")
      span default
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'blue')")
      span blue
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'purple')")
      span purple
    label.radio
      input(type="radio", name="color-badges", @click="domain.updateElementColor('#badges .badge', 'teal')")
      span teal
  .space
  .row
    .col.s12.m6
      .space
      nav.wrap
        a
          span.badge New
          i search
        a
          span.badge.round New
          i notifications
        a
          span.badge.circle 10
          i apps
        a
          span.badge.square 10
          i search
        a
          span.badge.top New
          i notifications
        a
          span.badge.round.top New
          i apps
        a
          span.badge.circle.top 10
          i search
        a
          span.badge.square.top 10
          i notifications
        a
          span.badge.left.top New
          i apps
        a
          span.badge.round.left.top New
          i search
        a
          span.badge.circle.left.top 10
          i notifications
        a
          span.badge.square.left.top 10
          i apps
        a
          span.badge.bottom.right New
          i search
        a
          span.badge.round.bottom.right New
          i notifications
        a
          span.badge.circle.bottom.right 10
          i apps
        a
          span.badge.square.bottom.right 10
          i search
        a
          span.badge.bottom New
          i notifications
        a
          span.badge.round.bottom New
          i apps
        a
          span.badge.circle.bottom 10
          i search
        a
          span.badge.square.bottom 10
          i notifications
        a
          span.badge.left.bottom New
          i apps
        a
          span.badge.round.left.bottom New
          i search
        a
          span.badge.circle.left.bottom 10
          i notifications
        a
          span.badge.square.left.bottom 10
          i apps
    .col.s12.m6
      .space
      nav.wrap
        a
          span.badge.border New
          i help_outline
        a
          span.badge.border.round New
          i home
        a
          span.badge.circle.border 10
          i account_circle
        a
          span.badge.square.border 10
          i help_outline
        a
          span.badge.border.top New
          i home
        a
          span.badge.border.round.top New
          i account_circle
        a
          span.badge.circle.border.top 10
          i help_outline
        a
          span.badge.square.border.top 10
          i home
        a
          span.badge.border.left.top New
          i account_circle
        a
          span.badge.border.round.left.top New
          i help_outline
        a
          span.badge.circle.border.left.top 10
          i home
        a
          span.badge.square.border.left.top 10
          i account_circle
        a
          span.badge.border.bottom.right New
          i help_outline
        a
          span.badge.border.round.bottom.right New
          i home
        a
          span.badge.circle.border.bottom.right 10
          i account_circle
        a
          span.badge.square.border.bottom.right 10
          i help_outline
        a
          span.badge.border.bottom New
          i home
        a
          span.badge.border.round.bottom New
          i account_circle
        a
          span.badge.circle.border.bottom 10
          i help_outline
        a
          span.badge.square.border.bottom 10
          i home
        a
          span.badge.border.left.bottom New
          i account_circlec
        a
          span.badge.border.round.left.bottom New
          i help_outline
        a
          span.badge.circle.border.left.bottom 10
          i home
        a
          span.badge.square.border.left.bottom 10
          i account_circle
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>