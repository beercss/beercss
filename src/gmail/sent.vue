<template lang="pug">
.page.right.active
  nav
    label.checkbox
      input(type="checkbox", v-model="data.check", @change="domain.checkAll(data.inbox, data.check)")
      span
    button.circle.transparent
      i refresh
    button.circle.transparent
      i more_vert
    .max
    label.no-wrap from 1 to {{ data.inbox.length }}
    button.circle.transparent
      i arrow_back
    button.circle.transparent
      i arrow_forward
  a.row(v-for="email in data.sent")
    label.checkbox.m.l
      input(type="checkbox", v-model="email.check")
      span
    button.circle.transparent.m.l(@click="domain.star(email)")
      i(v-show="!email.star") star_outline
      i.yellow-text(v-show="email.star") star
    button.small.circle.s A
    .max.truncate
      b From -&nbsp;
      b Subject -&nbsp;
      span Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    label 12:03
  .divider
</template>

<script setup lang="ts">
import domain from "./domain";
import data from "./data";
</script>